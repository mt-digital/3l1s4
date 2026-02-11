jQuery(function($){

	$(document).on('click','#loadVideoYT',function(event){
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
		$('#loadVideo').hide();
		$('#ytvideo').html('<iframe width="1400" height="787" id="ytvideo" frameborder="0" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/'+$(this).attr("data-vidid")+'?rel=0&autoplay=1&controls=1&modestbranding=1&showinfo=0&fs=1"></iframe>').show();
	});

	$(document).on('click','#loadVideoVM',function(event){
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
		$('#loadVideoVM').hide();
		$('#ytvideo').html('<iframe src="https://player.vimeo.com/video/'+$(this).attr("data-vidid")+'?autoplay=1&title=0&byline=0&portrait=0" width="1400" height="787" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').show();
	});

	$('.episode_poem_showmore').click( function(event) {

		// Prevent default action - opening tag page
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}

		$(this).removeClass('active').addClass('hidden');
		$('.limit_length').removeClass('active').addClass('hidden');
		$('.episode_poem__hidden').addClass('active');
		$('.episode_poem_showless').addClass('active');
	});

	$('.episode_poem_showless').click( function(event) {

		// Prevent default action - opening tag page
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}

		$(this).removeClass('active').addClass('hidden');
		$('.episode_poem__hidden').removeClass('active');
		$('.limit_length').removeClass('hidden').addClass('active');
		$('.episode_poem_showmore').removeClass('hidden').addClass('active');
	});

	( function() {
		var container, button, menu, links, i, len;

		container = document.getElementById( 'site-navigation' );
		if ( ! container ) {
			return;
		}

		button = container.getElementsByTagName( 'button' )[0];
		if ( 'undefined' === typeof button ) {
			return;
		}

		menu = container.getElementsByTagName( 'ul' )[0];

		// Hide menu toggle button if menu is empty and return early.
		if ( 'undefined' === typeof menu ) {
			button.style.display = 'none';
			return;
		}

		menu.setAttribute( 'aria-expanded', 'false' );
		if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
			menu.className += ' nav-menu';
		}

		button.onclick = function() {
			if ( -1 !== container.className.indexOf( 'toggled' ) ) {
				container.className = container.className.replace( ' toggled', '' );
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			} else {
				container.className += ' toggled';
				button.setAttribute( 'aria-expanded', 'true' );
				menu.setAttribute( 'aria-expanded', 'true' );
			}
		};

		// Get all the link elements within the menu.
		links    = menu.getElementsByTagName( 'a' );

		// Each time a menu link is focused or blurred, toggle focus.
		for ( i = 0, len = links.length; i < len; i++ ) {
			links[i].addEventListener( 'focus', toggleFocus, true );
			links[i].addEventListener( 'blur', toggleFocus, true );
		}

		/**
		 * Sets or removes .focus class on an element.
		 */
		function toggleFocus() {
			var self = this;

			// Move up through the ancestors of the current link until we hit .nav-menu.
			while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

				// On li elements toggle the class .focus.
				if ( 'li' === self.tagName.toLowerCase() ) {
					if ( -1 !== self.className.indexOf( 'focus' ) ) {
						self.className = self.className.replace( ' focus', '' );
					} else {
						self.className += ' focus';
					}
				}

				self = self.parentElement;
			}
		}

	/**
		 * Toggles `focus` class to allow submenu access on tablets.
		 */
		( function( container ) {
			var touchStartFn, i,
				parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

			if ( 'ontouchstart' in window ) {
				touchStartFn = function( e ) {
					var menuItem = this.parentNode, i;

					if ( ! menuItem.classList.contains( 'focus' ) ) {
						e.preventDefault();
						for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
							if ( menuItem === menuItem.parentNode.children[i] ) {
								continue;
							}
							menuItem.parentNode.children[i].classList.remove( 'focus' );
						}
						menuItem.classList.add( 'focus' );
					} else {
						menuItem.classList.remove( 'focus' );
					}
				};

				for ( i = 0; i < parentLink.length; ++i ) {
					parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
				}
			}
		}( container ) );
	} )();

	$(document).ready(function(){
		if ( $('body').hasClass('single-episode') ) { // only run this function on the template with a gallery
			$(".episode_gallery").owlCarousel({
				loop:false,
				margin:0,
				nav:true,
				items:1,
				dots:false,
				stagePadding:0,
			});
		}

		$('.menu-item-has-children > a').on('click touchstart', function(event){
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}

			if($(this).hasClass('active')) {
				$(this).removeClass('active').attr( 'aria-expanded', 'false' );
			} else {
				$('.menu-item-has-children > a').removeClass('active').attr( 'aria-expanded', 'false' );
				$(this).addClass('active').attr( 'aria-expanded', 'true' );
			}

		});
	});


	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('.menu-item-has-children > a').removeClass('active').attr( 'aria-expanded', 'false' );
		}
	});

	$(document).on("click", function(event){
		var $trigger = $(".menu-item-has-children");
		if($trigger !== event.target && !$trigger.has(event.target).length){
			$('.menu-item-has-children > a').removeClass('active').attr( 'aria-expanded', 'false' );
		}
	});


	var $boxes = $('#all_featured_guests_list > .tile');

	var $btns = $('.posts-filter').click(function() {
  var id = this.id;
  if (id == 'all') {
    $boxes.fadeIn(450);
  } else {
    $boxes.fadeOut(50).promise().done(function(){
     $('#all_featured_guests_list > .tile.' + id ).fadeIn(450);
 });
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
});
