// Wait for both the Login Registration status and BlueConic ready events.
window.PersistentEvents?.waitFor( 'nexstar/blueconic/ready', 1500 ).then( () => {
	// Check if the BlueConic client is available.
	if ( ! window.blueConicClient || ! window.blueConicClient.event ) {
		console.error( 'BlueConic client is not available.' );
		return;
	}
  const bcClient = window.blueConicClient;

  bcClient.event.subscribe('bc-wall-form-submitted', this, () => {
    const profile = window.blueConicClient.profile.getProfile();

    profile.loadValues(['email'], this, () => {
      const userEmail = profile.getValue('email');
      if (userEmail) {
        const eventDetail = { email: userEmail };
	      window.PersistentEvents.emit( 'blueconicWallFormSubmitted', eventDetail );
      } else {
        console.error('Email not found in BlueConic profile.');
      }
    });
  });
});
