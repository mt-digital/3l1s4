/**
/**
 * Wordpress Front End Enhancements.
 *
 * jQuery effects used in theme.
 */

/* ----------------------------------------------------------------------------------
	FORMAT FOOTER LAYOUT
---------------------------------------------------------------------------------- */
jQuery(document).ready(function(){

jQuery('#footer-core .widget-area:last-child').addClass("last");

/* Footer - Footer Widgets Layout (Options 1 - 6) */
jQuery('#footer-core.option2 .widget-area').addClass("one_half");
jQuery('#footer-core.option3 .widget-area').addClass("one_third");
jQuery('#footer-core.option4 .widget-area').addClass("one_fourth");
jQuery('#footer-core.option5 .widget-area').addClass("one_fifth");
jQuery('#footer-core.option6 .widget-area').addClass("one_sixth");

/* Footer - Footer Widgets Layout (Option 7) */
jQuery('#footer-core.option7 #footer-col1.widget-area').addClass("one_third");
jQuery('#footer-core.option7 #footer-col2.widget-area').addClass("two_third");

/* Footer - Footer Widgets Layout (Option 8) */
jQuery('#footer-core.option8 #footer-col1.widget-area').addClass("two_third");
jQuery('#footer-core.option8 #footer-col2.widget-area').addClass("one_third");

/* Footer - Footer Widgets Layout (Option 9) */
jQuery('#footer-core.option9 #footer-col1.widget-area').addClass("one_fourth");
jQuery('#footer-core.option9 #footer-col2.widget-area').addClass("three_fourth");

/* Footer - Footer Widgets Layout (Option 10) */
jQuery('#footer-core.option10 #footer-col1.widget-area').addClass("three_fourth");
jQuery('#footer-core.option10 #footer-col2.widget-area').addClass("one_fourth");

/* Footer - Footer Widgets Layout (Option 11) */
jQuery('#footer-core.option11 #footer-col1.widget-area').addClass("one_fifth");
jQuery('#footer-core.option11 #footer-col2.widget-area').addClass("four_fifth");

/* Footer - Footer Widgets Layout (Option 12) */
jQuery('#footer-core.option12 #footer-col1.widget-area').addClass("four_fifth");
jQuery('#footer-core.option12 #footer-col2.widget-area').addClass("one_fifth");

/* Footer - Footer Widgets Layout (Option 13) */
jQuery('#footer-core.option13 #footer-col1.widget-area').addClass("one_sixth");
jQuery('#footer-core.option13 #footer-col2.widget-area').addClass("one_sixth");
jQuery('#footer-core.option13 #footer-col3.widget-area').addClass("one_sixth");
jQuery('#footer-core.option13 #footer-col4.widget-area').addClass("one_half");

/* Footer - Footer Widgets Layout (Option 14) */
jQuery('#footer-core.option14 #footer-col1.widget-area').addClass("one_half");
jQuery('#footer-core.option14 #footer-col2.widget-area').addClass("one_sixth");
jQuery('#footer-core.option14 #footer-col3.widget-area').addClass("one_sixth");
jQuery('#footer-core.option14 #footer-col4.widget-area').addClass("one_sixth");

/* Footer - Footer Widgets Layout (Option 15) */
jQuery('#footer-core.option15 #footer-col1.widget-area').addClass("one_sixth");
jQuery('#footer-core.option15 #footer-col2.widget-area').addClass("one_third");
jQuery('#footer-core.option15 #footer-col3.widget-area').addClass("one_half");

/* Footer - Footer Widgets Layout (Option 16) */
jQuery('#footer-core.option16 #footer-col1.widget-area').addClass("one_half");
jQuery('#footer-core.option16 #footer-col2.widget-area').addClass("one_third");
jQuery('#footer-core.option16 #footer-col3.widget-area').addClass("one_sixth");

/* Footer - Footer Widgets Layout (Option 17) */
jQuery('#footer-core.option17 #footer-col1.widget-area').addClass("one_fourth");
jQuery('#footer-core.option17 #footer-col2.widget-area').addClass("one_fourth");
jQuery('#footer-core.option17 #footer-col3.widget-area').addClass("one_sixth");
jQuery('#footer-core.option17 #footer-col4.widget-area').addClass("one_sixth");
jQuery('#footer-core.option17 #footer-col5.widget-area').addClass("one_sixth");

/* Footer - Footer Widgets Layout (Option 18) */
jQuery('#footer-core.option18 #footer-col1.widget-area').addClass("one_sixth");
jQuery('#footer-core.option18 #footer-col2.widget-area').addClass("one_sixth");
jQuery('#footer-core.option18 #footer-col3.widget-area').addClass("one_sixth");
jQuery('#footer-core.option18 #footer-col4.widget-area').addClass("one_fourth");
jQuery('#footer-core.option18 #footer-col5.widget-area').addClass("one_fourth");
});


/* ----------------------------------------------------------------------------------
	MASONRY - LOAD AFTER IMAGES HAVE LOADED
---------------------------------------------------------------------------------- */

jQuery(document).ready(function() {

	// Call imagedLoaded for Masonry if imagedLoaded function is available
	(function ( $ ) {
		if ( $.isFunction($.fn.imagesLoaded) ) {

			// Different target for masonry on portfolio pages than any other page
			if ( $( '#container' ).hasClass( 'portfolio-wrapper' ) ) {
				var $container = $('#container-inner');
			} else if ( $( 'body' ).hasClass( 'woo-shop-grid' ) ) {
				var $container = $('#main-core .products');
			} else {
				var $container = $('#container');
			}

			$container.imagesLoaded( function() {
				if ( $.isFunction($.fn.masonry) ) {
					$container.masonry();
				}
			});
		}
	}( jQuery ));
});


/* ----------------------------------------------------------------------------------
	INFINITE SCROLL (USES MASONRY & LOAD AFTER)
---------------------------------------------------------------------------------- */

jQuery(document).ready(function() {

	(function($) {
		$(function(){

			// Only load if Pagination Button or Infinite Scroll are specified
			if ( $( 'body' ).hasClass( 'pag-button' ) || $( 'body' ).hasClass( 'pag-infinite' ) ) {
			
				// Different target for masonry on portfolio pages than any other page
				if ( $( '#container' ).hasClass( 'portfolio-wrapper' ) ) {
					var $container = $('#container-inner');
					var $selector = '.image_grid';
				} else {
					var $container = $('#container');
					var $selector = '.blog-grid';
				}		

				//
				$container.infinitescroll( {
					navSelector  : '#pag-standard',    // selector for the paged navigation
					nextSelector : '#pag-standard a',  // selector for the NEXT link (to page 2)
					itemSelector : $selector,     // selector for all items you'll retrieve
					loading: {
						loadingText: "Loading more...",  
						finishedMsg: "All done. That's everything loaded!",
					}
				},

				// trigger Masonry as a callback
				function( newElements ) {

					// hide new items while they are loading
					var $newElems = $( newElements ).css({ opacity: 0 });

					// ensure that images load before adding to masonry layout
					$newElems.imagesLoaded(function(){

						// show elems now they're ready
						$newElems.animate({ opacity: 1 });
						$container.masonry( 'appended', $newElems, true );	
					});
				});
	
				// Activate "Load More" button if required
				if ( $( 'body' ).hasClass( 'pag-button' ) ) {
				
					$(window).unbind('.infscr');
		
					jQuery("#pag-infinite a").click(function(){
						jQuery( $container ).infinitescroll('retrieve');
						return false;
					});
				}
			}
		});
	} (jQuery) );
});


/* ----------------------------------------------------------------------------------
	FORMAT MAIN HEADER MENU
---------------------------------------------------------------------------------- */
function mainmenu(){

	/* Add menu-hover class */
	jQuery("header .header-links ul.menu > li").hover(function(){
		jQuery(this).find('ul.sub-menu:first').css({visibility: "visible",display: "none"}).parent().addClass('menu-hover');
	},function(){
		jQuery(this).find('ul.sub-menu:first').css({visibility: "hidden",display: "none"}).parent().removeClass('menu-hover');
	});

	/* Add menu-parent class */
	jQuery("header .header-links ul.menu > li").each(function(){
		jQuery(this).find('ul.sub-menu').css({visibility: "visible",display: "none"}).parent().addClass('menu-parent');
	});

	// Change z-index of #pre-header so dropdown menus & tooltips can be seen
	jQuery("#pre-header").hover(function(){
		jQuery( this ).css({ 'z-index' : '999991' });
	},function(){
		jQuery( this ).css({ 'z-index' : '999' });
	});

	// Add smooth dropdown effect
	jQuery("header .header-links li").hover(function(){
		parentWidth = jQuery(this).width();
		// Offset mega menu
	    if(jQuery(this).hasClass('header-thinkupmega')) {

			jQuery(this).find('ul').addClass( 'header-thinkupmegachild' );

			// Assign width to mega menu children
			megaColumnCount = jQuery(this).children( "ul" ).children( "li" ).length;
			megaColumnWidth = 100 / megaColumnCount;
			jQuery(this).children( "ul" ).children( "li" ).outerWidth( megaColumnWidth + "%" );

			// Assign height to mega menu children - DISABLED DUE TO ISSUE WHERE MENU IS SHORTER THAN IT SHOULD BE
//			megaColumnHeight = jQuery(this).children( "ul" ).height();
//			jQuery(this).children( "ul" ).children( "li" ).outerHeight( megaColumnHeight );
		}
		// Prevent sub menus of mega menu from opening / closing
	    if( ! jQuery(this).parent().hasClass('header-thinkupmegachild')) {
			jQuery(this).find('ul:first').css({visibility: "visible",display: "none","min-width": parentWidth}).fadeToggle(300);
		}
	},function(){
		jQuery(this).find('ul:first').css({visibility: "hidden"});
	});

	// Correct menu for below header when navigating down page.
	if( jQuery( 'body' ).hasClass( 'header-below' ) ) {
		jQuery('#header').waypoint(function(direction) {
			if (direction === 'down') {
				jQuery( 'body' ).addClass( 'header-below2' );
				jQuery( 'body' ).removeClass( 'header-below1' );
			}
			else {
				jQuery( 'body' ).removeClass( 'header-below2' );
				jQuery( 'body' ).addClass( 'header-below1' );
			}
		}, {
			offset: '50%'
		});
	}
}
jQuery(document).ready(function(){
	mainmenu();
});


/* ----------------------------------------------------------------------------------
	RESPONSIVE MENU - TOGGLE SUB MENUS
---------------------------------------------------------------------------------- */

jQuery(document).ready(function (){

	jQuery( '#header-responsive .menu-item-has-children > a' ).after( '<span class="sub-menu-toggle"></span>' );

	jQuery( '#header-responsive .menu-item-has-children .sub-menu-toggle' ).click(function(e){ 

		var parentmenu = jQuery( this ).closest('.menu-item-has-children');

		if( parentmenu.hasClass( 'sub-menu-show' ) ) {
			jQuery( parentmenu ).removeClass('sub-menu-show');
		} else {
			jQuery( parentmenu ).addClass('sub-menu-show');
		}

	});
});


/* ----------------------------------------------------------------------------------
	STICKY HEADER - ONLY ON SCREENS SMALLER THAN 768px
---------------------------------------------------------------------------------- */
jQuery(window).load(function(){

	// Trigger sticky header on devices wider than 768px
	if ( jQuery(window).width() > 768 && jQuery( 'body' ).hasClass( 'header-sticky' ) ) {

		// Resize on scroll
		jQuery(window).scroll(function() {

			// Assign header height and position variables
			var siteheader_height    = jQuery( '#site-header' ).height();
			var preheader_height     = jQuery( '#pre-header' ).height();
			var header_height        = jQuery( '#header' ).height();
			var header_sticky_offset = jQuery( '#header-sticky' ).offset();

			// Activate sticky header 100px after header is cleared
			if ( !jQuery( 'body' ).hasClass( 'header-below' ) ) {
				if ( header_sticky_offset.top > preheader_height + header_height + 100 ) {
					jQuery( 'body' ).addClass( 'header-sticky-active' );
				} else {
					jQuery( 'body' ).removeClass( 'header-sticky-active' );
				}
			} else {
				if ( header_sticky_offset.top > siteheader_height + 100 ) {
					jQuery( 'body' ).addClass( 'header-sticky-active' );
				} else {
					jQuery( 'body' ).removeClass( 'header-sticky-active' );
				}	
			}
		});
	}
});


/* ----------------------------------------------------------------------------------
	FLUID MEDIA SIZES (Modified from http://bavotasan.com/2012/better-way-to-resize-video-using-jquery)
---------------------------------------------------------------------------------- */

/* Videos */
jQuery(document).ready(function() {

	/* Supported Platforms */
	var all_videos = jQuery( 'iframe[src*="//player.vimeo.com"], iframe[src*="//www.youtube.com"], iframe[src*="//blip.tv"], iframe[src*="//www.slideshare.net"], iframe[src*="//www.scribd.com"], iframe[src*="//revision3.com"], iframe[src*="//www.hulu.com"], iframe[src*="//www.funnyordie.com"], iframe[src*="//www.dailymotion.com"], iframe[src*="//maps.google.com"], embed[src*="//v.wordpress.com"], object, embed' );

	all_videos.each(function() {
		var el = jQuery(this);
		el
			.attr( 'data-aspectRatio', 360 / 640 )
			.attr( 'data-oldWidth', el.width() );
	} );

	jQuery(document).ready(function() {
		all_videos.each( function() {
		var el = jQuery(this),
			newWidth    = el.parents().width(),
			oldWidth    = el.attr( 'data-oldWidth' );
			ratioHeight = el.height() / el.outerHeight(),

			el
				.removeAttr( 'height' )
				.removeAttr( 'width' )
				.width( newWidth * ratioHeight )
				.outerHeight( newWidth * el.attr( 'data-aspectRatio' ) );
		});
	}).resize();

	jQuery(window)
		.resize( function() {
			all_videos.each( function() {
			var el = jQuery(this),
				newWidth    = el.parents().width(),
				oldWidth    = el.attr( 'data-oldWidth' );
				ratioHeight = el.height() / el.outerHeight(),

				el
					.removeAttr( 'height' )
					.removeAttr( 'width' )
					.width( newWidth * ratioHeight )
		    		.outerHeight( newWidth * el.attr( 'data-aspectRatio' ) );
			});
		}).resize();
});

/* SoundCloud */
jQuery(document).ready(function() {

	/* Supported Platforms */
	var all_sounds = jQuery( 'iframe[src^="http://w.soundcloud.com"]' );

	all_sounds.each(function() {
		var el = jQuery(this);
		el
			.attr( 'data-aspectRatio', el.attr( 'height' ) / el.attr( 'width' )  )
			.attr( 'data-oldWidth', el.width() );
	});

	jQuery(document).ready(function() {
		all_sounds.each( function() {
		var el = jQuery(this),
			newWidth = el.parents().width(),
			oldWidth = el.attr( 'data-oldWidth' );

			el
				.removeAttr( 'width' )
				.width( newWidth )
		});
	}).resize();

	jQuery(window)
		.resize( function() {
			all_sounds.each( function() {
			var el = jQuery(this),
				newWidth = el.parents().width(),
				oldWidth = el.attr( 'data-oldWidth' );

				el
					.removeAttr( 'width' )
					.width( newWidth )
			});
		}).resize();
});


/* ----------------------------------------------------------------------------------
	ADD PRETTYPHOTO TO PORTFOLIO PAGE
---------------------------------------------------------------------------------- */

jQuery(document).ready(function() {
	jQuery('#container.portfolio-wrapper a').has('img.hover-zoom').addClass('prettyPhoto');
	jQuery('#container.portfolio-wrapper a').has('img.hover-zoom').attr('rel','portfolio[gallery]');
	jQuery('a.prettyPhoto').has('img').attr('rel','portfolio[gallery]');
	jQuery('a.prettyPhoto').prettyPhoto();
});


/* ----------------------------------------------------------------------------------
	ADD PRETTYPHOTO TO POST IMAGE PAGE
---------------------------------------------------------------------------------- */

jQuery(document).ready(function() {
	jQuery('body.attachment .entry-attachment .attachment a').has('img').addClass('prettyPhoto');
	jQuery('a.prettyPhoto').prettyPhoto();
});


/* ----------------------------------------------------------------------------------
	ADD _BLANK TO OUTGOING LINKS
---------------------------------------------------------------------------------- */

jQuery(document).ready(function(){
	jQuery('.thinkup_widget_flickr a[href^="http://"], .thinkup_widget_flickr a[href^="https://"]').attr('target','_blank');
	jQuery('.thinkup_widget_socialshare a[href^="http://"], .thinkup_widget_socialshare a[href^="https://"]').attr('target','_blank');
	jQuery('.thinkup_widget_socialprofiles a[href^="http://"], .thinkup_widget_socialprofiles a[href^="https://"]').attr('target','_blank');
	jQuery('#pre-header-social a[href^="http://"], #pre-header-social a[href^="https://"]').attr('target','_blank');
	jQuery('#shareicons a[href^="http://"], #shareicons a[href^="https://"]').attr('target','_blank');
});


/* ----------------------------------------------------------------------------------
	SHORTCODES
---------------------------------------------------------------------------------- */

jQuery(window).load(function() {

	/* Accordion - Fix Bootstrap Toggle Issue */
	jQuery('.accordion-toggle').click(function() {
	    if(jQuery(this).hasClass('collapsed')) {
	        jQuery(this).closest('.accordion').find('.accordion-toggle').not(this).addClass('collapsed');
	    }
	});

	/* Divider - Scroll To Top */
	jQuery('.backtotop').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 'slow');
	});

	/* Tooltip - Activate Bootstrap */
	jQuery('[data-tip]').each( function() {jQuery(this).tooltip({ placement: jQuery(this).data('tip') }); });

	/* Blog Post - Carousel (used for identifying if input variable is an integer */
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	/* Blog Post - Activate CarouFredSel */
	jQuery(window).bind( 'load resize', function() {
		jQuery( '.sc-carousel' ).each( function(i) {

			// Don't run caroufredsel code if the following classes are present.
			if ( jQuery( this ).hasClass( 'sc-postitem' ) || 
				 jQuery( this ).hasClass( 'sc-featured' ) || 
				 jQuery( this ).hasClass( 'sc-image' ) ) {
					return;
			};

			var instanceID = 'sc-carousel-' + i;

			jQuery( this ).attr( 'id', instanceID );

			jQuery( this ).children( 'ul').attr( 'id', instanceID + '-inner' );

			var show   = jQuery( '#' + instanceID + '.sc-carousel' ).data( 'show' );
			var scroll = jQuery( '#' + instanceID + '.sc-carousel' ).data( 'scroll' );
			var speed  = jQuery( '#' + instanceID + '.sc-carousel' ).data( 'speed' );
			var effect = jQuery( '#' + instanceID + '.sc-carousel' ).data( 'effect' );

			if ( show == 0 || isNaN( show ) == true ) show = '3';
			if ( scroll == 0 || isNaN( scroll ) == true ) scroll = '1';
			if ( speed == 0 ) speed = '500';
			if ( effect == 0 ) {
				effect = '"scroll"'; 
			} else {
				effect = '"' + effect + '"';
			}

			var showItems = show;
			var scrollItems = scroll;
			var speedItems = speed;
			var fxItems = effect;

			var width = jQuery(window).width();

			if ( jQuery( 'body' ).hasClass( 'layout-responsive' ) ) {
				if(width <=685) {
						showItems = 2;
						if( scrollItems >= 2 ) {
							scrollItems = 2;
						}
				}
				if(width <=480) {
					showItems = 1;
					scrollItems = 1;
				}
			}

				// Apply carousel code if needed				
				if ( jQuery( this ).find( '#' + instanceID + '-inner' ).length ) {

					jQuery( this ).find( '#' + instanceID + '-inner' ).carouFredSel({
						width: '100%',
						items			: {
								visible         : showItems,
								minimum         : 3,
								minimum         : 3,
								start: 0
						},
						scroll			: {
								items           : scrollItems,
								fx              : fxItems,
								easing          : "swing",
								duration        : speedItems,
						},
						responsive      : true,
						circular        : true,
						infinite        : false,
						auto 	        : false,
						prev	: {	
							button	: '#' + instanceID + ' .prev',
							key		: 'left'
						},
						next	: { 
							button	: '#' + instanceID + ' .next',
							key		: 'right'
						},
						pagination	: '#' + instanceID + ' .pagination',
						onCreate: function () {
							jQuery(window).bind("load resize", function() {
							
							// Set height to testimonial carousel elements - All
							parentWidthTestimonial = jQuery( '#' + instanceID + '.carousel-testimonial li').outerHeight();
							jQuery( '#' + instanceID + '.carousel-testimonial' ).height( 'auto' );
							jQuery( '#' + instanceID + '.carousel-testimonial .caroufredsel_wrapper' ).css( { 'height': parentWidthTestimonial } );

							// Set height to testimonial carousel elements - Fix Style 1
							parentWidthTestimonial_1 = jQuery( '#' + instanceID + '.carousel-testimonial.style1 .caroufredsel_wrapper').outerHeight();
							parentWidthTestimonial_2 = jQuery( '#' + instanceID + '.carousel-testimonial.style1 .sc-carousel-thumbs').outerHeight();

							jQuery( '#' + instanceID + '.carousel-testimonial.style1' ).height( parentWidthTestimonial_1 + parentWidthTestimonial_2 );
							jQuery( '#' + instanceID + '.carousel-testimonial.style1 .sc-carousel-thumbs' ).parent().height( parentWidthTestimonial_2 );
							});
						}
					});
				}

				// Used for adding thumbnails to slider - Currently only for Testimonials slider
				if ( jQuery( this ).find('.sc-carousel-thumbs').length ) {

					jQuery( this ).find('.sc-carousel-thumbs').carouFredSel({
						responsive: true,
						circular: false,
						infinite: false,
						auto: false,
						prev: '#prev',
						next: '#next',
						items: {
							visible: {
								min: 2,
								max: 6
							},
							width: 150,
							height: 70
						}
					});
				}

				jQuery( this ).find('.sc-carousel-thumbs a').click(function() {
					jQuery('#' + instanceID + '-inner').trigger('slideTo', '#' + this.href.split('#').pop() );
					jQuery('.sc-carousel-thumbs a').removeClass('selected');
					jQuery( this ).addClass('selected');
					return false;
				});

			// Set carousel container height
			parentHeight = jQuery( '#' + instanceID + ' li').height();
			jQuery( '#' + instanceID + ' li' ).each(function() {
				var elementHeight = jQuery(this).height(); 
				parentHeight = elementHeight > parentHeight ? elementHeight : parentHeight;
			});

			// Add addition height if carousel thumbnails are showing
			if( jQuery( '#' + instanceID ).closest('.sc-carousel').find('.sc-carousel-thumbs').length > 0 ) {
				parentHeightThumb = parentHeight + jQuery( '#' + instanceID ).closest('.sc-carousel').find('.sc-carousel-thumbs').height();
			} else {
				parentHeightThumb = parentHeight;
			}

			// Assign height to unique carousel ID (Max used to ensure thumbnail carousel displays correctly)
			jQuery( '#' + instanceID ).height( Math.max( parentHeight, parentHeightThumb ) );
			jQuery( '#' + instanceID + '-inner' ).height( parentHeight );
			jQuery( '#' + instanceID + '-inner' ).parent().height( parentHeight );

			// Set carousel container height to auto if iframe exists in featured images
			if ( jQuery( '#' + instanceID + ' iframe').length > 0 ) {
				jQuery( '#' + instanceID ).addClass('carousel-iframe');
			}
		});

	}).resize();

	/* Progress Knob - Triggers and adds a delay is set by user */
	jQuery(document).ready(function() {

		// Trigger knob so that input box doesn't show (with percentage) - Progress (Round)
		jQuery( '.sc-knob:not(.sc-counter) .sc-knob-dial' ).knob({
			  'draw' : function () {
				jQuery(this.i).val(this.cv + '%');
			  }
		})

		// Trigger knob so that input box doesn't show (without percentage) - Counter
		jQuery( '.sc-knob.sc-counter .sc-knob-dial' ).knob({
			  'draw' : function () {
				
				// Add suffix set
				var suffix = jQuery(this.i).attr( 'data-suffix' );

				// Remove value is set to zero
				if( this.cv == '0') {
					this.cv = '' 
				};

				jQuery(this.i).val(this.cv + suffix);
			  }
		})

		// Trigger waypoint for all knobs
		jQuery( '.sc-knob' ).waypoint(
		function(event, direction) {
			jQuery('.sc-knob .sc-knob-dial').each( function(i) {

			var instanceID = 'sc-knob-' + i;

			jQuery( this ).attr( 'id', instanceID );

				var input_time = jQuery( '#sc-knob-' + i ).attr('data-delay');
				var input_value = jQuery( '#sc-knob-' + i ).attr('data-value');

				setTimeout(function() {
					jQuery({
						value: 0
					}).animate({
						value: input_value
					}, {
						duration: 2000,
						easing: 'swing',
						step: function() {
							return jQuery('#sc-knob-' + i).val(Math.ceil(this.value)).trigger('change');
						}
					});
				}, input_time );
			});
		}, {
		offset: 'bottom-in-view',
		triggerOnce: true
		});
	});
});


/* ----------------------------------------------------------------------------------
	SHORTCODES - WAYPOINTS ANIMATION
---------------------------------------------------------------------------------- */

jQuery(document).ready(function() {

	jQuery('.anim-start-ltr').waypoint(
		function(event, direction) {
		var time = jQuery(this).parent().attr('title');

			jQuery(this).delay( time ).queue(function(next){
				jQuery(this).removeClass( 'anim-start-ltr' ).addClass( 'anim-end-ltr' );
				jQuery(this).parent().removeAttr( 'title' );
			});	
		}, {	
		offset: 'bottom-in-view'
	});

	jQuery('.anim-start-rtl').waypoint(
		function(event, direction) {
		var time = jQuery(this).parent().attr('title');

			jQuery(this).delay( time ).queue(function(next){
				jQuery(this).removeClass( 'anim-start-rtl' ).addClass( 'anim-end-rtl' );
				jQuery(this).parent().removeAttr( 'title' );
			});	
		}, {
		offset: 'bottom-in-view'
	});

	jQuery('.anim-start-btt').waypoint(
		function(event, direction) {
		var time = jQuery(this).parent().attr('title');

			jQuery(this).delay( time ).queue(function(next){
				jQuery(this).removeClass( 'anim-start-btt' ).addClass( 'anim-end-btt' );
				jQuery(this).parent().removeAttr( 'title' );
			});	
		}, {
		offset: 'bottom-in-view'
	});

	jQuery('.anim-start-ttb').waypoint(
		function(event, direction) {
		var time = jQuery(this).parent().attr('title');

			jQuery(this).delay( time ).queue(function(next){
				jQuery(this).removeClass( 'anim-start-ttb' ).addClass( 'anim-end-ttb' );
				jQuery(this).parent().removeAttr( 'title' );
			});
		}, {
		offset: 'bottom-in-view'
	});

	jQuery('.anim-start-stb').waypoint(
		function(event, direction) {
		var time = jQuery(this).parent().attr('title');

			jQuery(this).delay( time ).queue(function(next){
				jQuery(this).removeClass( 'anim-start-stb' ).addClass( 'anim-end-stb '+ time );
				jQuery(this).parent().removeAttr( 'title' );
			});
		}, {
		offset: 'bottom-in-view'
	});

});


/* ----------------------------------------------------------------------------------
	HEADER SEARCH
---------------------------------------------------------------------------------- */

jQuery(document).ready(function() {
	
	// Open / close search bar in #header
	jQuery('#header #header-search a').click(function() {
		if ( ! jQuery( '#header #header-search' ).hasClass( 'active' ) ) {
			jQuery( '#header #header-search' ).addClass( 'active' );
		} else { 
			jQuery( '#header #header-search' ).removeClass( 'active' );	
		}
	});

	// Open / close search bar in #header-sticky
	jQuery('#header-sticky #header-search a').click(function() {
		if ( ! jQuery( '#header-sticky #header-search' ).hasClass( 'active' ) ) {
			jQuery( '#header-sticky #header-search' ).addClass( 'active' );
		} else { 
			jQuery( '#header-sticky #header-search' ).removeClass( 'active' );	
		}
	});
});


/* ----------------------------------------------------------------------------------
	SCROLL UP
---------------------------------------------------------------------------------- */

jQuery(document).ready(function() {
		if ( jQuery( 'body' ).hasClass( 'scrollup-on' ) ) {
(function($) {
	$(function () {
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			scrollText: '', // Text for element, can contain HTML
		});
	});
} (jQuery) );
}
});
