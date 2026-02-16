var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");

/**
 * @autor Sebastian Romero
 * @description Loads elements according the scroll position
 * @param onContentDisplayed [Function] Handles the when the content is displayed
 */
jQuery.fn.progressiveLoader = function(onContentDisplayed) {
	
	var margins = 0, count = 0;
	
	var setProgressiveLoader = function(element){
		var action = function(){
		var position = (($(window).height() + $(window).scrollTop()) - margins);
			if(position >= element.offset().top){
				if(onContentDisplayed && count==0){
					count++;
					onContentDisplayed();
				}
			}
			return false;
		};
		$(window).scroll(function(){
			action();
		});
		void action();
	};
	
	
	this.each(function(index, element){
		setProgressiveLoader($(this));
	});
};


}

/*
     FILE ARCHIVED ON 20:58:58 Apr 05, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:12:48 Feb 16, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.911
  exclusion.robots: 0.034
  exclusion.robots.policy: 0.019
  esindex: 0.014
  cdx.remote: 10.514
  LoadShardBlock: 172.645 (6)
  PetaboxLoader3.datanode: 245.297 (8)
  PetaboxLoader3.resolve: 5445.541 (4)
  load_resource: 5549.412 (2)
*/