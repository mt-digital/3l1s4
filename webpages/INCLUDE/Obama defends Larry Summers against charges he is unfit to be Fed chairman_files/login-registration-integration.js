// Even we always have default values coming from the backend,
// we also set defaults here in case the 'blueConicLoginRegIntegration' is not available.
const {
	lr_status_event_timeout: rawLrStatusEventTimeout = 500,
	lr_bc_ready_event_timeout: rawLrBcReadyEventTimeout = 500,
} = window.blueConicLoginRegIntegration ?? {};

const lrStatusEventTimeout  = parseInt(rawLrStatusEventTimeout);
const lrBcReadyEventTimeout = parseInt(rawLrBcReadyEventTimeout);

window.domReady(async() => {
	const events = [
		window.PersistentEvents.getData('nexstar/login-registration/status', lrStatusEventTimeout),
		window.PersistentEvents.getData('nexstar/blueconic/ready', lrBcReadyEventTimeout),
	];

	let profileHasBeenUpdated = false;

	// Update the BC profile data if the LR and BC events have been fired.
	try {
		const [loginRegResult, bcResult] = await Promise.allSettled(events);

		if (loginRegResult.status === 'fulfilled' && bcResult.status === 'fulfilled') {
			const loginRegPayload = loginRegResult.value[0] ?? false;
			const bcPayload = bcResult.value[0] ?? false;

			updateBcProfileWithLrData(loginRegPayload, bcPayload);
			profileHasBeenUpdated = true;

			return;
		}
	} catch (error) {
		console.error('Error processing events', error);
	}

	// If the profile has been updated, we can stop.
	if (profileHasBeenUpdated) {
		return;
	}

	// If the profile has not been updated, that means for some reason we didn't able
	// to catch the events. So we need to start watching for them,
	// in case the events are dispatched later.
	const handleBlueconicReady = async (loginRegPayload) => {
		try {
			const resolvedLoginRegPayload = await loginRegPayload;

			// The BC ready event is required to update the profile data, so
			// we need to firstly try to catch it, in case it already was dispatched.
			// Or, start to listen for it in case it wasn't dispatched yet.
			window.PersistentEvents
				.getData('nexstar/blueconic/ready', lrBcReadyEventTimeout)
				.then((bcResult) => {
					const bcPayload = Array.isArray(bcResult) ? bcResult[0] ?? false : false;

					updateBcProfileWithLrData(resolvedLoginRegPayload, bcPayload);
					profileHasBeenUpdated = true;
				})
				.catch((error) => console.error('Error waiting for Blueconic ready:', error))
				.finally(() => {
					if (! profileHasBeenUpdated) {
						window.PersistentEvents.addListener('nexstar/blueconic/ready', async (bcPayload) => {
							updateBcProfileWithLrData(resolvedLoginRegPayload, await bcPayload);
						});
					}
				});
		} catch (error) {
			console.error('Error resolving LoginRegPayload:', error);
		}
	};
	window.PersistentEvents.addListener('nexstar/login-registration/status', handleBlueconicReady);
});

/**
 * Update the Blueconic profile with Login Radius data.
 *
 * @param {Object} payload The event payload.
 * @return {void}
 */
function updateBcProfileWithLrData(loginRegPayload, bcPayload) {
	if (false === loginRegPayload) {
		console.error('Error in the Login Radius payload.');
		return;
	}
	
	if (false === bcPayload || ! bcPayload.client) {
		console.error('Error in the Blueconic payload.');
		return;
	}

	const {
		logged_in: loggedIn = false,
		cookie_data: { account_uid: accountUid = null } = {}
	} = loginRegPayload;

	const {
		client: { profile: bcProfileApi = false } = {}
	} = bcPayload;
	
	if (loggedIn && null === accountUid) {
		console.error('User logged in but accountUid not available.');
		return;
	}

	if (! bcProfileApi || typeof bcProfileApi.getProfile !== 'function') {
		console.error('BlueConic API not available.');
		return;
	}

	const profile = bcProfileApi.getProfile();

	if (loggedIn && accountUid) {
		profile.setValue('BCDEV__Login_Radius_ID', String(accountUid));
		profile.setValue('loginradius_has_account', 'true');
	}

	profile.setValue('loginradius_user_login_status', String(loggedIn));

	bcProfileApi.updateProfile({}, (error) => {
		if (error) {
			console.error('Failed to update BlueConic profile:', error);
		}
	});
};