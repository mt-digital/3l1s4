window.domReady( function () {
  // Get the user id.
  const { NXSTdata: { identity: { segmentUserId = '' } = {} } = {} } = window;

  if ( segmentUserId !== '' ) {
        // Create an image with 0 width and height.
        const img = new Image( 0, 0 );
        img.src = 'https://www.civicscience.com/idsync/3?p=nxs1&uid=' + segmentUserId;
        img.style.visibility = 'hidden';
        img.style.height = '0';
        document.body.appendChild( img );
  }
});
