const addPersistentBlueConicEvents = () => {
  const { blueConicClient } = window;
  const { event: { subscribe } } = blueConicClient;

  getBlueconicInternalEvents().forEach(([blueconicEvent, nexstarEvent]) => {
    subscribe(blueconicEvent, blueConicClient, () => {
      const payload = {
        event: blueconicEvent,
        client: blueConicClient,
      };

      window.PersistentEvents.emit( nexstarEvent, payload );
    });
  });
};

function getBlueconicInternalEvents() {
  return [
    [
      window.blueConicClient.event.onBeforePreListeners,
      'nexstar/blueconic/before_pre_listeners',
    ],
    [
      window.blueConicClient.event.onReady,
      'nexstar/blueconic/ready',
    ],
    ['PAGEVIEW', 'nexstar/blueconic/pageview'],
    [
      window.blueConicClient.event.onBeforeInteractions,
      'nexstar/blueconic/before_interactions',
    ],
    [
      window.blueConicClient.event.onEventReady,
      'nexstar/blueconic/event_ready',
    ],
  ];
}

if ('undefined' !== typeof window.blueConicClient
  && 'undefined' !== typeof window.blueConicClient.event
  && 'undefined' !== typeof window.blueConicClient.event.subscribe
) {
  addPersistentBlueConicEvents();
} else {
  window.addEventListener('onBlueConicLoaded', addPersistentBlueConicEvents);
}
