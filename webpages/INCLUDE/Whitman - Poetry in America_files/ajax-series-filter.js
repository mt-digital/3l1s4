jQuery(function($){

	$(document).on('click', '.posts-filter', function(event){

         // Prevent default action - opening tag page
         if (event.preventDefault) {
             event.preventDefault();
         } else {
             event.returnValue = false;
         }

         // Get tag slug from title attirbute
         var selected_season = $(this).attr('data-season-id');

         $('.posts-filter').removeClass('active');
         $(this).addClass('active');

				 $('.tvseries_landing_episodes_grid').fadeOut();
				 $('.learn_more_block_wrapper').fadeOut();
				 $('.loading-message').fadeIn();


         data = {
             action: 'pia_ajax_season_filter', // function to execute
             afp_nonce: piaseasonfilter.afp_nonce, // wp_nonce
             season: selected_season,
             };

         $.post( piaseasonfilter.afp_ajax_url, data, function(res) {

             if( res.success ) {
                 // Display posts on page
                 $('.episodes-grid-wrapper').html( res.data );
                 // Restore div visibility
                 $('.loading-message').fadeOut();
                 $('.episodes-grid-wrapper').fadeIn();
             } else {
	 						console.log(res);
	 					}
         });
			 });
     });
