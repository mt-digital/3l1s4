function viewInstrument(symbol,ExchangeID,Lang) {
	location.href = '/finance/instrument/instrument.asp'
		+	'?symbol=' + ('' + symbol).replace(/ /g,'%20').replace(/&/g,'%26')
		+	'&ExchangeID=' + ExchangeID
		+	'&Lang=' + Lang
}

function httpget(url,f) {
	var x = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest()
	x.open("GET",url,true)
	x.onreadystatechange = function() {if (x.readyState == 4 && x.status == 200) {
		f(url,x)
	}}
	x.send(null)
}

 function createCookiePopupEN(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

 function readCookiePopupEN(name) {
        var nameCk = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameCk) == 0) return c.substring(nameCk.length, c.length);
        }
        return 0;
 }

var globes_gaq = globes_gaq || []
function add_impression(did,impression_type) {(globes_gaq || _gaq).push(['2._trackEvent', impression_type  ,'Impression',  'id_' + did, 1, true])}
function c_DoubleClick(valueFor_dcPageID,valueFor_dcCG,valueFor_dcArticleID) {
	function bin_list(x,l) {for(var i in l) {if (x == l[i]) {return true}} return false}
	function get_jsurl() {
		return 'http://www.globes.co.il/news/cache/totalmedia/dc.js?' + (new Date()).getTime(); //'http://i.total-media.net/gl/dc.js'
	}
	dcSite = 'glo'
	dcPageID = valueFor_dcPageID // almond_id
	dcCG = valueFor_dcCG ? valueFor_dcCG : dcCG

//	try {dcMember = user_id > 0 ? 1 : 2} catch(ex){}
//	try {dcNewspaper = is_subscriber ? 1 : 2} catch(ex){}
	if (location.pathname.match(/\.tag$/i)) {
		dcKeyWord = location.pathname.match(/\/[^\/]*\.tag$/i).toString().substring(1).replace(/\.tag$/i,'')
	}
	var did = location.search.match(/[&\?]did=\d+/i)
	if (did) {
		if (dcCG == null) {dcCG = 'article'}
		dcArticleID = did.toString().substring(5)
	} else {
		if (location.pathname + location.search == '/') {
			dcCG = 'home'
		} else {
			var fid = location.search.match(/[&\?]fid=\d+/i)
			if (fid) {
				fid = fid.toString().substring(5)
				if (bin_list(fid,[2,-942])) {dcCG = 'home'}
				if (bin_list(fid,[585,594,607,821,829,845,-980,-1124,1667,-1724,-1725,1948,2006,2190,2605,2973,3220,3221,3266,3317])) {dcCG = 'main'}
			} else {
				var iid = location.search.match(/[&\?]instrumentid=\d+/i)
				var feeder = location.search.match(/[&\?]feeder=\d+/i)
				if (feeder && iid) {dcStock = feeder.toString().substring(8) + '.' + iid.toString().substring(14)}
			}
		}
	}
	this.jsurl = get_jsurl()
	this.ads = []
	this.constants = []
	this.log = []
	this.activated = false
	this.activate = function(last_call) {
		if (arguments.length < 1) {last_call = false}
		try{if (last_call == false && use_last_call == true) {return}} catch(ex){}
		if (this.log.length == 0) {return}
	//	if (this.activated) {try{dcReloadTemplate()} catch(ex){}  return}
	//	document.write('<' + 'script language="javascript" src="' + this.jsurl + '" -defer="' + (window.ActiveXObject ? "true" : "defer") + '"></' + 'script>')
		this.activated = true
	}
	this.size_id = function(w,h,site) {
		if (arguments.length < 3) {site = null}
		var wxh = w + 'x' + h
		if (wxh ==   '70x33') {return 'bar'}
		if (wxh ==  '100x75') {return 'botton'}
		if (wxh == '100x500') {return '120x600'}
		if (wxh == '120x240') {return 'magazinim'}
		if (wxh ==  '158x19') {return 'icon'}
		if (wxh == '160x181') {return 'article'}
		if (wxh ==  '160x90') {return 'left'}
		if (wxh == '170x170') {return 'box'}
		if (wxh == '180x180') {return 'box'}
		if (wxh == '300x250') {return 'spot'}
		if (wxh ==  '319x54') {return 'member'}
		if (wxh == '320x55') {
			if (site && site != dcPageID) {dcMagazine = site}
			return 'endarticle'
		}
		if (wxh ==  '400x60' && dcCG != 'en') {return 'talkback'}
		if (wxh ==  '550x40') {return 'txtlink'}
		if (wxh ==  '550x75') {return 'middle'}
		if (wxh ==  '670x25') {return 'strip'}
		if (wxh == '950x400') {return 'inter'}
		if (wxh == '970x200') {return 'jumbo'}
		if (wxh ==  '990x40') {return 'top'}
		return wxh
	}
	this.drawBanner = function(site,width,height,space,isRunNow,isBorder) {
		return '<div style="margin-bottom:10px">' + this.div(this.size_id(width,height,site),'width:' + width + ';height:' + height + (isBorder ? ';border:1px solid black' : '')) + '</div>'
	}
    
    this.shdera = function(counter) {
        if (arguments.length == 0) { counter = 99}
        var sb = []
        var size_id = this.size_id(100, 75)
        for (var i = 0; i < counter; i++) {
			var html = this.div(size_id)
			if (html.length == 0) {break}
			sb.push(html)
		}
		if (sb.length > 0) {sb.push('')}
        return sb.join("<div class='hpBannerSplit'></div>")
    }

	this.totalurl = function(t) {try {return '&totalurl=' + dcVideoInfo(t).replace(/&/g,'%26')} catch(ex) {return ''}}
	this.p1000 = function() {
	    return '<div style="margin-bottom:10px"><a target=_blank href="' + p1000_ad_url + '"><img src="' + p1000_ad_image + '" /></a></div>';
	}
	this.with_overflow = function(divid) {return divid.indexOf('.jumbo.') > -1}
	this.aIframe = function(size,width,height,space,page) {return this.div(this.size_id(width,height),'width:' + width + ';height:' + height)}
	this.grouped_pirsum_shdera_items = function(a) {
		if (a.length < 2) {return a}
		var c = 1,t = new Date(),b = []
		for(var i=1; i < a.length ;i++) {
			if (a[i].length > 2 && parseInt(a[i][2]) > 0 && a[i-1].length > 2 && a[i][2] == a[i-1][2]) {c++; continue}
			b.push(a[(i - c) + (t.getTime() % c)])
			c = 1
		}
		b.push(a[(a.length - c) + (t.getTime() % c)])
		return b
	}
	this.div = function(id,style) {
	//	alert(id + ' * ' + !('' + dcCG).match(/en/i))
		if (!('' + dcCG).match(/en/i)) {
			if (typeof(IsHomePage) == 'undefined') {IsHomePage = false}            
			if (id == "728x90") {  
                var pathname = location.pathname.toLowerCase();              
                if(bin_list(pathname, ['/globessites/globes/finance/instruments/instrument.aspx'])) {
                    return '<iframe scrolling="no" frameborder="0" width="728" height="90" marginheight="0" marginwidth="0" src="http://live.sekindo.com/live/liveView.php?s=31413&njs=1"></iframe>'                    
                }
                if( !IsHomePage && !bin_list( pathname, ['/globessites/globes/finance/arbitrage/arbitrage.aspx','/globessites/globes/zs/','/finance/maof/','/finance/shared/searchresults.asp'])) {
			    //	alert('clickon:' + id + ' * ' + (id == "728x90")  + ' * ' + !IsHomePage + ' * ' + !bin_list(location.pathname.toLowerCase(),['/globesSites/globes/finance/arbitrage/arbitrage.aspx','/globessites/globes/zs/','/finance/maof/','/finance/shared/searchresults.asp']) + ' * ' + location.pathname.toLowerCase())
				    return '<iframe src="http://aff.clickon.co.il/eb/889/CD2214/0" height="90" width="728" border="0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" /></iframe>'
                }
			}
			if (id == "120x600" || id == "tower") {
                  return '<div id="ads.120x600.1"></div>'
				//return '<iframe src="http://aff.clickon.co.il/eb/890/CD2214/0" height="600" width="120" border="0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" /></iframe>'
			}
		}
	//	if (id == 'strip') {return ''}
		var counter = 0
		for(var i in this.constants) {
			if (this.constants[i].id == id) {
				counter = this.constants[i].counter
				break
			}
		}
		if (counter == 0) {
			for(var i in this.ads) {
				if (this.ads[i].id == id) {
					counter = this.ads[i].counter = this.ads[i].counter + 1
					//if (id == 'botton' && counter == 2) {return this.p1000()}
					break
				}
			}
		}
		if (counter == 0) {
			this.ads[this.ads.length] = new function() {
				this.id = id
				counter = this.counter = 1
			}
		}
	//	alert(id + '.' + counter)
		if (arguments.length < 2) {style = ''}
		var divid = 'ads.' + id + (id == 'rich' ? '' : '.' + counter)

		if (true && id == 'botton' && typeof(pirsum_shdera_items) == 'object') {
			if (!this.pirsum_shdera_items) {this.pirsum_shdera_items = this.grouped_pirsum_shdera_items(pirsum_shdera_items)}
			if (counter > this.pirsum_shdera_items.length){return ""}
			var m = counter - 1;
			var fid = ('' + location.search.toString().match(/fid=\d+/)).substring(4)

			return ('' + dcCG).match(/en/i)
				?	"<a href=/news/click.ashx?did=" + this.pirsum_shdera_items[m][0] + "&fid=" + fid + " target=_blank>"
					+ "<img src=" + this.pirsum_shdera_items[m][1] + " ></a>"
				:	"<div class='psItem' onclick=\"javascript:e_counter.count('" + this.pirsum_shdera_items[m][0] + "','Right_Banner_Click',null,GetRuleriEventCategoryValue());window.open(\'/news/globesc.ashx?did=" + this.pirsum_shdera_items[m][0] + "&fid=" + fid+"\'),\'_blank\';\">"
					+ "<img width='88' height='58' src=" + this.pirsum_shdera_items[m][1] + " ></div>"
		}
		try {if (bin_list('*',excluded_dc_ids) || bin_list(id,excluded_dc_ids)) {return ''}} catch(ex) {}
		this.log.push(divid)
		return '<div dir=ltr id=' + divid + ' ' + (id == '-inter' ? '-' : '') + 'style="' + (this.with_overflow(divid) ? '' : 'overflow:hidden;') + '-background-color:white;color:white;font-size:11px;text-align:center;' + style + '"></div>' // ' + dcPageID + '/ads.' + id + '.' + counter + '
	}
}
var dcStage,dcSite,dcPageID,dcArticleID,dcKeyWord,dcMember,dcNewspaper,dcStock,dcGender,dcMagazine,dcCG,dcArticleID,dc_handler;
try {if (dc_server) {dc_handler = new c_DoubleClick(null,null,null)}}catch(ex){}
var dcIsTM = false
 /* 1.1.1.251 */
var ad = {
	banner : function(b) {
		return dc_handler.div(dc_handler.size_id(b.width,b.height),'-width:' + b.width + ';-height:' + b.height)
	}
}

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
