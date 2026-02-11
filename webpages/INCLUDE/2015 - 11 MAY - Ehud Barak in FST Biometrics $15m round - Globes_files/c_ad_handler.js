var ad_handler = new function () {
	this.datetime = new Date()
	this.google = new function () {
		this.refresh_recurrence = 0
		this.lazyLoadConfig = {
			fetchMarginPercent: 150
			,renderMarginPercent: 100
			,mobileScaling: 1.0
		} // https://developers.google.com/publisher-tag/reference#googletag.PubAdsService_enableLazyLoad
		this.enableSingleRequest = false
		this.collapseEmptyDivs = true
		this.enableServices = true
		this.targetim = []
		this.divim = []

		this.activate = function (start, end) {
			if (this.divim.length == 0) { return }
			if (arguments.length == 0) { start = 0; end = this.divim.length - 1 }
			if (end - start > 0) {
				this.activate(start , start)
				this.activate(start + 1,end)
				return
			}
			if (arguments.length == 1) { end = this.divim.length - 1 }
			if (end >= this.divim.length) { end = this.divim.length - 1 }
			if (start > end) { return }
		//	console.log('activate-' + start + '-' + end)
			var segment = []
			for (var i = start; i <= end; i++) { segment.push(this.divim[i]) }
			segment = segment.sort(function (x, y) { return y.order - x.order })
			for (var i = start; i <= end; i++) { this.divim[i] = segment[i - start] }
			var sb = ['googletag.cmd.push(function() {']
			for (var i = start; i <= end; i++) {
				var di = this.divim[i]
				if (di.is_active) { continue }
				if (di.activate == 'later') { continue }
				di.is_active = true
				sb.push(';try {ad_handler.google.divim[' + i + '].slot = googletag.defineSlot("' + di.url + '",' + di.sizes + ',"' + di.id + '").addService(googletag.pubads())}catch(ex){try{console.log(di.url + \' not found\')}catch(ex){}}\n')
				if (di.oop == true) {
					sb.push(';googletag.defineOutOfPageSlot("' + di.url + '","' + di.id + '-oop").addService(googletag.pubads())\n')
				}
			}
			for (var i = 0; i < this.targetim.length; i++) {
				if (this.targetim[i].sent == true) { continue }
				this.targetim[i].sent = true
				sb.push(';googletag.pubads().setTargeting("' + this.targetim[i].name + '",' + (this.targetim[i].is_string ? '"' : '') + this.targetim[i].value + (this.targetim[i].is_string ? '"' : '') + ')\n')
			}
			if (this.lazyLoadConfig != null) {sb.push(';googletag.pubads().enableLazyLoad(' + JSON.stringify(this.lazyLoadConfig) + ')\n'); this.lazyLoadConfig = null}
			if (this.enableSingleRequest) {sb.push(';googletag.pubads().enableSingleRequest()\n'); this.enableSingleRequest = false}
			if (this.collapseEmptyDivs) { sb.push(';googletag.pubads().collapseEmptyDivs()\n'); this.collapseEmptyDivs = false }
			if (this.enableServices) { sb.push(';googletag.enableServices()\n'); this.enableServices = false }
			sb.push('})')
			for (var i = start; i <= end; i++) {
				var di = this.divim[i]
				if (di.is_active != true || di.is_displayed == true) { continue }
				if (di.display == 'later') { continue }
				di.is_displayed = true
				sb.push(';googletag.cmd.push(function() {googletag.display("' + di.id + '"); })\n')
				if (di.oop == true) {
					sb.push(';googletag.cmd.push(function() {googletag.display("' + di.id + '-oop") })\n')
				}
			}
			eval(sb.join(''))
			if (this.refresh_called != true) { this.refresh(0) }
		}
		this.refresh = function (n) {
			this.refresh_called = true
		//	console.log('google.refresh(' + n + ')')
			if (n > 0) {
				for (var i = 0; i < this.divim.length; i++) {
					try {
						var di = this.divim[i]
						if (di.is_active == true && di.is_displayed == true && di.refresh && di.refresh > 0 && (n % di.refresh) == 0) {
							console.log(di.local + ' replaced after ' + n + ' minutes')
							googletag.pubads().refresh([di.slot])
						}
					} catch (ex) { }
				}
			}
			setTimeout('ad_handler.google.refresh(' + (parseInt(n) + 1) + ')', 60000)
		}
	}
	this.google_script = function (adobject) {
		try {
			if (!shalter.dfp || adobject.url.match(/---$/)) { return '' }
			var p = adobject.url.indexOf('/', 1)
			var ord = window.ord || Math.floor(Math.random() * 1e16);
			return '<' + 'script type="text/javascript" src="http://ad.doubleclick.net/N' + adobject.url.substring(1, p) + '/adj' + adobject.url.substring(p) + ';sz=1x1;ord=' + ord + '?"><' + '/script>'
		} catch (ex) { return '' }
	}
	this.google_div = function (adobject) {
		function with_width_and_height(adobject) { return adobject.local.match(/pop_up/i) ? false : true }
		function div_body(adobject) {
			if (adobject.local.match(/jumbo/i)) {
				return '<' + 'script>'
					+ '\n' + 'if (typeof(tmo_util) != "object") {tmo_util = {}}'
					+ '\n' + 'tmo_util.dcCloseJumbo = function() {'
					+ '\n' + 'var element = parent.document.getElementById("' + adobject.id + '")'
					+ '\n' + 'if (element != null) {element.style.display = "none"}'
					+ '\n' + '}'
					+ '\n' + '</' + 'script>'
			}
			if (adobject.local.match(/pop_up/i)) {
				return '<' + 'script>'
					+ '\n' + 'if (typeof(tmo_util) != "object"){tmo_util={}}'
					+ '\n' + 'tmo_util.dcIsOpen = false;'
					+ '\n' + 'tmo_util.dcBrowser = (navigator.userAgent.indexOf("MSIE")>=0) ? "MSIE" : "Others";'
					+ '\n' + 'tmo_util.dcLeshonitClose = true;'
					+ '\n' + 'tmo_util.dcScrolling = function() {'
					+ '\n' + 'var dcContainer = document.getElementById("' + adobject.id + '")'
					+ '\n' + 'if ("undefined" != typeof(dcContainer) && dcContainer != null) {'
					+ '\n' + 'if(!tmo_util.dcIsOpen) {tmo_util.dcSlide()}'
					+ '\n' + '}'
					+ '\n' + '}'
					+ '\n' + 'tmo_util.dcSlide = function() {'
					+ '\n' + '$(document).ready(function($) {$("#totalmedia_up").next().slideToggle("fast");});'
					+ '\n' + 'if (!tmo_util.dcLeshonitClose){'
					+ '\n' + 'tmo_util.dcLeshonitClose=true;'
					+ '\n' + 'document.getElementById("totalmedia_up1").href = "javascript://";'
					+ '\n' + 'document.getElementById("totalmedia_up1").target = "";'
					+ '\n' + '} else {'
					+ '\n' + 'try {'
					+ '\n' + 'tmo_util.dcIsOpen = true;'
					+ '\n' + 'document.getElementById("totalmedia_up1").href = dcTempClick;'
					+ '\n' + 'document.getElementById("totalmedia_up1").target = "_blank";'
					+ '\n' + 'tmo_util.dcLeshonitClose=false;'
					+ '\n' + '} catch(ex) {}'
					+ '\n' + '}'
					+ '\n' + '}'
					+ '\n' + 'tmo_util.dcClosePoptotalmedia_up = function() {'
					+ '\n' + 'document.getElementById("' + adobject.id + '").style.display = "none"'
					+ '\n' + '}'
					+ '\n' + 'if (document.addEventListener && tmo_util.dcBrowser == "Others") {'
					+ '\n' + 'document.addEventListener("scroll",tmo_util.dcScrolling, false)'
					+ '\n' + '} else {'
					+ '\n' + 'attachEvent("onscroll",tmo_util.dcScrolling)'
					+ '\n' + '}'
					+ '\n' + '</' + 'script>'
			}
			if (adobject.local.match(/slide/i) || adobject.local.match(/slid\.safari/i)) {
				return '<' + 'script>'
				//	+ '\n' + 'alert("' + adobject.url + '")'
					+ '\n' + 'if (typeof(tmo_util)!="object"){ tmo_util={}}'
					+ '\n' + 'tmo_util.stlMavran = function(_html,displayTime) {'
					+ '\n' + 'if((!isNaN(displayTime))&&(displayTime/1>0)) {setTimeout("tmo_util.dclk_hide_overlay()",displayTime*1000);}'
					+ '\n' + '$("body").prepend(_html);'
					+ '\n' + '}'
					+ '\n' + 'tmo_util.dclk_hide_overlay = function(){'
					+ '\n' + 'parent.document.getElementById("dclk_overlay_2568471236").style.visibility = "hidden";'
					+ '\n' + 'parent.document.getElementById("dclk_overlay_2568471236").innerHTML="";'
					+ '\n' + 'parent.document.getElementById("dclk_overlay_25326957458").style.visibility = "hidden";'
					+ '\n' + 'parent.document.getElementById("dclk_overlay_25326957458").innerHTML="";'
					+ '\n' + 'parent.document.getElementById("dclk_overlay_1892131986").style.visibility = "hidden";'
					+ '\n' + 'parent.document.getElementById("dclk_overlay_1892131986").innerHTML="";'
					+ '\n' + 'parent.document.body.scroll = "auto";'
					+ '\n' + 'parent.document.body.style.overflowY = "auto";'
					+ '\n' + '}'
					+ '\n' + 'function onFinishedPlaying(){tmo_util.dclk_hide_overlay();}'
					+ '\n' + '</' + 'script>'
			}
			return ''
		}
		function find_best_banner_size(adobject) {
			try {
			//	debugger
				if (shalter.fbbs != true) {return}
				var sizes = eval(adobject.sizes)
				if (Object.prototype.toString.call(adobject.fbbs) != '[object Array]' || Object.prototype.toString.call(sizes) != '[object Array]' || adobject.fbbs.length != sizes.length - 1) { return }
				var inner_width = window.innerWidth > 0 ? window.innerWidth : Math.max(document.documentElement.clientWidth, document.body.clientWidth)
				try {if (inner_width > 1300 && gl_abt.wt == 'narrow') {inner_width = 1300}} catch(ex) {}
				for(var i=0; i < adobject.fbbs.length ;i++) {
					if (inner_width < adobject.fbbs[i]) {
						if (Object.prototype.toString.call(adobject.fbbs) == '[object Array]') {adobject.sizes = '[' + sizes[i] + ']'}
						return
					}
				}
				if (Object.prototype.toString.call(sizes[sizes.length - 1]) == '[object Array]') {adobject.sizes = '[' + sizes[sizes.length - 1] + ']'}
			} catch(ex) {}
		}
		try {
			if (typeof (shalter.positiveMobile) == 'boolean' && shalter.positiveMobile == true && typeof (adobject.positiveMobile) == 'string' && adobject.positiveMobile.length > 0) {
				while (true) {
					var positiveMobile = adobject.positiveMobile
					if (positiveMobile.match(/^article:/)) {
						if (!location.href.match(/article\.aspx/i)) { break }
						positiveMobile = positiveMobile.replace(/^article:/i, '')
					}
					return '<script type="text/javascript" src="http://track.mobiyield.com/ad/' + positiveMobile + '/tag.js"></script>'
				}
			}
			if (!shalter.dfp || adobject.url.match(/---$/) || adobject.sizes == '') { return '' }
			try { for (var i = 0; i < dfp_urls_to_exclude.length; i++) { if (dfp_urls_to_exclude[i].test(adobject.url)) { return '' } } } catch (ex) { }
			if (typeof (adobject.id) == 'undefined' || ('' + adobject.id).length == 0) { adobject.id = 'div-gpt-ad-' + this.datetime.getTime() + '-' + this.google.divim.length }
			if (typeof (adobject.order) == 'undefined') { adobject.order = 0 }
			find_best_banner_size(adobject)
			this.google.divim.push(adobject)
		//	console.log(width_type + ' * ' + adobject.url + ' * ' + adobject.sizes)
			var sizes = eval(adobject.sizes)
			var style_properties = []
			if (with_width_and_height(adobject) && sizes.length == 2 && typeof(sizes[0]) == 'number' && typeof(sizes[1]) == 'number' && parseInt(sizes[0]) >= 0 && parseInt(sizes[1]) >= 0) { style_properties.push('width:' + sizes[0] + 'px;height:' + sizes[1] + 'px') }
			if (typeof (adobject.style) == 'string' && adobject.style.length > 0) { style_properties.push(adobject.style) }
			shalter.adblock = location.search.match(/&adblock=t/) || document.getElementById('docRef18') ? true : shalter.adblock
			if (shalter.adblock && adobject.adblock) { adobject.url = adobject.adblock}
			var sb = ['<div id="' + adobject.id + '" url="' + adobject.url + '"' + (typeof(adobject.class) == 'string' ? ' class="' + adobject.class + '"' : '') + ' style="' + style_properties.join(';') + '">' + div_body(adobject) + '</div>']
			if (adobject.oop == true) { sb.push('<div id="' + adobject.id + '-oop" style="' + style_properties.join(';') + '"><!-- ' + adobject.url + ' - ' + adobject.id + '-oop --></div>') }
			return sb.join('')
		} catch (ex) {
			//	console.log(adobject.url + ' failed ' + ex.description)
			return ''
		}
	}
	this.google_target = function (name,value,is_string) { this.google.targetim.push({ 'name': name, 'value': value ,'is_string' : arguments.length > 2 ? is_string : true}) }
	this.activate = function () {
		try { this.google.activate() } catch (ex) { }
		try { this.walla.activate() } catch (ex) { }

	}
	this.walla = new function () {
		this.list = [];
		this.div = function (spaceName) {
			if (typeof (shalter) == 'object' && typeof (shalter.walla) == 'boolean' && shalter.walla == false) { return '' }
			try { for (var i = 0; i < walla_exclude.length; i++) { if (walla_exclude[i].test(spaceName)) { return '' } } } catch (ex) { }
			this.list.push({ spaceName: spaceName });
			return '<div class="adBox"  id="' + spaceName + (this.list.length - 1) + '" style=""></div>';
		}
		this.activate = function () {
			var spaceDivNames = []
			var spaceNames = []
			for (var i = 0; i < this.list.length; i++) {
				var li = this.list[i];
				spaceDivNames.push(li.spaceName + i);
				spaceNames.push(li.spaceName);
			}
			adtReloadAds(spaceDivNames, spaceNames);
		}
	}
}
