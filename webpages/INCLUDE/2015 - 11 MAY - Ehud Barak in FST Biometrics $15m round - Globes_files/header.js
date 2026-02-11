<!-- cached 23/05/2019 12:30:36 -->
function add_input_to_form(f,name,value) {
	var i = document.createElement("INPUT")
	i.type = 'hidden'
	i.setAttribute('name',name)
	i.setAttribute('value',value)
	f.appendChild(i)
}
var collector_feeder = new function() {
	this.iframe_id = 'collector.22h12'
	document.write('<iframe name="' + this.iframe_id + '" id="' + this.iframe_id + '" style="display:none;width:100%"></iframe>')
	this.global_properties = {'source':location.href}
	this.send = function(properties) {
		var form_element = document.createElement("FORM")
		for(var key in this.global_properties) {add_input_to_form(form_element,key,this.global_properties[key])}
		for(var key in properties) {add_input_to_form(form_element,key,properties[key])}
		form_element.action = '/collector.ashx?' + new Date().getTime()
		form_element.method = 'POST'
		form_element.target = this.iframe_id
		document.body.appendChild(form_element)
		form_element.submit()
	}
}
var ad_handler = new function () {
	this.datetime = new Date()
	this.google = new function () {
		this.refresh_recurrence = 0
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
			if (n > 0) {
				for (var i = 0; i < this.divim.length; i++) {
					try {
						var di = this.divim[i]
						if (di.is_active == true && di.is_displayed == true && di.refresh > 0 && (n % di.refresh) == 0) {
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
<!-- #include file="tm.asp" -->

function GetRuleriEventCategoryValue() {
    var returnVlaue = '';
    var url = location.href.toLowerCase();    
//    var sFid = ('' + location.search.toString().match(/fid=\d+/)).replace(/fid=/,'');
    if (url.indexOf('article.aspx') > -1) {
        returnVlaue = 'article';
    }
    else if (url.indexOf('home.aspx?fid=2') > -1 || url == 'http://www.globes.co.il' || url == 'http://www.globes.co.il/' || url == 'www.globes.co.il' || url == 'www.globes.co.il/') {
        returnVlaue = 'hp';
    }
    else if (url.indexOf('.tag') > -1) {
        returnVlaue = 'tag';
    }
    /*
	else if(sFid != "" && sFid != null){
        try{returnVlaue = FolderDynasty;}
        catch(ex){returnVlaue = 'other';}       
    }*/
    else {
        returnVlaue = 'other';
    }
     return returnVlaue;
}
// *** print green

var e_counter = new function() {
	this.t = new Date()
	this.groups = []
	this.count = function(e,g,d,src) {
		try {if (disable_e_counter) {return}} catch(ex) {}
		var i
		for(i=0; i < this.groups.length ;i++) {
			if (this.groups[i].g == g) {
				if (this.groups[i].e == e) {return}
				break
			}
		}
		if (i == this.groups.length && arguments.length > 2 && d == e) {
			this.groups[i] = new function() {this.g = g; this.e = e}
			return
		}
		if (!('' + e).match(/^--/)) {this.groups[i] = new function() {this.g = g; this.e = e}}
		var x = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest()
		x.open("GET","/e_counter.ashx?e=" + escape(('' + e).replace(/^--/,'')) + '&g=' + escape(g) + '&t=' + this.t.getTime(),true); x.send(null)
		if (src)
		{
			try {_gaq.push(['_trackEvent', src, g, e]);} catch(ex) {			
			    //alert("eror:" + e + "-" + g + "-" + d + "-" + src)
			}
		}
			
	}
}
function c_titledata(t,d) {this.title = t; this.data = d}
function mpad(m,x) {return (m > 1) ? (m + (x % m)).toString().replace(/^1/,'') : x}
function in_list(item,list) {for(var i in list) {if (item == list[i]) {return i}} return -1}
function bin_list(item,list) {return in_list(item,list) > -1}
function get_by_title(t,a) {for(var i in a) {if (t == a[i].title) {return a[i]}} return null}
function merge(t,d) {
	var s = ""; for(var i=0; i < d.length ;i++) {s += t[i] + d[i]}
	return s + ((t.length > d.length) ? t[d.length] : '')
}
function append_array(ta,a) {for(var i=0; i < a.length ;i++) {ta[ta.length] = a[i]} return ta}
function radio_value(name) {
	var a = document.getElementsByName(name)
	for(var i=0; i < a.length ;i++) {if (a[i].checked) return a[i].value}
	return ''
}
function selected_value(id) {
	var s = document.getElementById(id)
	return s.options[s.options.selectedIndex].value
}
function dw(m) {document.write(m)}
function dbg(v) {alert(v); return v}
function keyed(e) {return window.ActiveXObject ? event.keyCode : 0}
function TypesFields(p_Type, p1, p2, p3, p4, p5, p6, p7, p8, p9) { // competability
	this.p_Type = p_Type
	this.Feeder = p1
	this.ExchangeID = p2
	this.PortfolioType = p3 
	this.TypeID = p4
	this.WhatType = p5
	this.TypeName_EN = p6
	this.TypeName_HE = p7
	this.InstrumentID = p8
	this.IndexMode = p9
}

function windows1255(s) {
	function hexdigit(n) {return '0123456789abcdef'.substring(n,n+1)}
	function hex(n) {return (n < 16 ? '' : hex(Math.floor(n / 16))) + hexdigit(n % 16)}
	var t = "";
	for(var i=0; i < s.length ;i++) {
		var ch = s.charCodeAt(i);
		if (ch == 32) {t += '%20'; continue}
		t = t + '%' + hex(224 + (ch - 'א'.charCodeAt(0)))
	} return t
}

function view_selected(caller) {
	var url = caller.options[caller.selectedIndex].value
	caller.selectedIndex = 0
	if (url) {location.href = url}
}

function search_find() {window.open ('http://www.find.co.il/redirsrch.asp?uid=221&sourceid=300&searchstring=' + document.getElementById("query_for_find").value,"find")}

/*
function search_site(){
	function sr(e,f,q,w,t) {
	location.href = g.url.fsr + '?ExchangeID=' + e + '&Feeder=' + f + '&WhatType=' + w + '&TypeID=' + t + '&strToSearch=' + escape(q.match(/^\s*$/) ? 'א' : q)}

	var e = document.getElementById("site_search_selector")
	e.blur()
	var v = e.options[(arguments.length > 0) ? s : e.selectedIndex].value;
	
	if (arguments.length == 0) {e.selectedIndex = 0}
	var q = document.getElementById("query_for_site").value
	if (v == 'ny') {return sr(4,1,q,2,2)}
	if (v == 'ta') {return sr(45,0,q,1,6)}
	location.href = g.url.a + (q.match(/^\s*$/) ? "/" : '/query.asp?searchQuery=' + q + '&count=10&field=0&period=0&status=All')
}

*/

function search_site_new(ind,search_type){
	function sr(e,f,q,w,t) {top.location.href = g.url.fsr + '?ExchangeID=' + e + '&Feeder=' + f + '&WhatType=' + w + '&TypeID=' + t + '&strToSearch=' + escape(q.match(/^\s*$/) ? 'א' : q)}
	var e = document.getElementById("site_search_selector");
	e.blur()
	//var v = e.options[(arguments.length > 0) ? s : e.selectedIndex].value
	var v = e.value
	//if (arguments.length == 0) {e.value = 0}
	var q = escape(document.getElementById("query_for_site").value)
	
	if (v == 'ny') {return sr(4,1,q,2,2)}
	if (v == 'ta') {return sr(45,0,q,1,6)}
	
	var status = "All"
	if (ind == 2) {status = "-archive"}
	if (ind == 5) {status = "archive"}

	if (arguments.length < 2 || (ind != 1 && ind != 2 && ind != 5)) {search_type = 'searchQuery'}
	var url = g.url.a + (q.match(/^\s*$/) ? "/" : '/query.asp?' + search_type + '=' + q + '&count=10&field=0&period=0&status=' + status + '&id=' + ind)
//	alert(arguments.length + '\nind=' + ind + ' ; (ind != 1 && ind != 2 && ind != 5) == ' + (ind != 1 && ind != 2 && ind != 5) + '\n' + search_type + '\n' + url)
	top.location.href = url
}

function proximate_ta_time() {
	var n = new Date()
	if (typeof(server_datetime) != 'undefined') {return server_datetime}
	var serverTimezoneOffset = -120
	n.setTime(n.getTime() + ((serverTimezoneOffset - n.getTimezoneOffset()) * 60 * 1000))
	return n
}
function show_full_date() {
	try {
		//var dow = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]
		var dow = ["יום א'","יום ב'","יום ג'","יום ד'","יום ה'","יום ו'","שבת"]
		var Localdate = cta_time.getDate() + "." + (cta_time.getMonth()+ 1) + "." + (2000 + (cta_time.getYear() % 100))
		var LocalDay = dow[cta_time.getDay()]
		document.getElementById("date_in_israel_new").innerHTML = '<table dir="rtl" align="right" border=0 cellpadding="0" cellspacing="0" style="COLOR:#555555;font:12px arial;font-weight:bold;padding-right:2px;">'
			+ '<tr valign="bottom">'
			+	'<td>' + LocalDay + ',&nbsp;</td>'
			+	'<td style="font-size:11px;">' + Localdate + '</td>'
			+ '</tr>'
			+ '</table>'
	} catch(ex) {//alert("full_date " + ex.toString())
	}
}
function update_timediv() {
	try {	document.getElementById("hm_in_israel").innerHTML = mpad(100,cta_time.getHours()) + ':' + mpad(100,cta_time.getMinutes())
		document.getElementById("hm_in_ny").innerHTML = mpad(100,cny_time.getHours()) + ':' + mpad(100,cny_time.getMinutes())
	} catch(ex) {}
}

function update_datetime() {
	if (typeof(cta_time) == "undefined") {
		cta_time = proximate_ta_time()
		cny_time = new Date(cta_time.getTime() + ny_offset * 60 * 60 * 1000)
	}
	show_full_date()
	update_timediv()
	cta_time.setTime(cta_time.getTime() + 60000)
	cny_time.setTime(cny_time.getTime() + 60000)
	window.setTimeout('update_datetime()', 60000)
}
function parent_by_tag(e,t) {
	for(e = e.parentNode ; e != null ;e = e.parentNode) {
		if (e.tagName == t) {return e}
	} return null
}
function pair_value(a,name) {
            try {      var lname = name.length
                        for(var i in a) {if (a[i].replace(/^\s*/,'').substring(0,lname + 1) == name + '=') {return a[i].replace(/^\s*/,'').substring(lname + 1)}}
            } catch(ex) {} return null
}
function cookie_value(name) {return pair_value(document.cookie.split(';'),name)}
function subcookie_value(name,subname) {
            var value = cookie_value(name)
            return (value == null) ? null : pair_value(value.split('&'),subname)
}

function addInstrument_new(instrumentID, name, symbol, feeder, portfolioID) {
	var url = "/portal/ContentManager.aspx?"  
            + "Instrument_ID=" + instrumentID 
			+ "&popup_id=buysale" 
			+ "&feeder="+ feeder
			+ "&nameheb=" + name
	window.open( '/pay/login.asp?mode=wizard&p_backTo=' + escape(url)
			,"",
			"location=no,toolbar=no,menubar=no,status=yes,scrollbar=no, resizable=no , width=560,height=480")		
}



function BrandsWindowOpen(year)
{
	var fileName = "default";
	if (year != null)
		fileName = "brands" + year;	
	window.open("/globessites/brands/"+fileName+".aspx", "brand", "toolbar=no,width=800,height=710,status=no,scrollbars=no,resizable=no left="+(screen.width-800)/2+",top=5");
}

function brandswindowopen(year)
{
	var fileName = "default";
	if (year != null)
		fileName = "brands" + year;	
	window.open("/globessites/brands/"+fileName+".aspx", "brand", "toolbar=no,width=800,height=710,status=no,scrollbars=no,resizable=no left="+(screen.width-800)/2+",top=5");
}

function openLadyGlobesWin()
{
    window.open("/globessites/brands/LadyGlobes.aspx", "LadyGlobes", "toolbar=no,width=800,height=650,status=no,scrollbars=no,resizable=no left="+(screen.width-800)/2 +",top=5")
}
function openLadyGlobes2008Win()
{
    window.open("/globessites/brands/LadyGlobes2008.aspx", "LadyGlobes2008", "toolbar=no,width=800,height=700,status=no,scrollbars=no,resizable=no left="+(screen.width-800)/2 +",top=5")
}
function openTop50OfTheYearWin()
{
    window.open("/globessites/brands/Top50OfTheYear.aspx", "Top50OfTheYear", "toolbar=no,width=800,height=650,status=no,scrollbars=no,resizable=no left="+(screen.width-800)/2 +",top=5")
}
function G40windowOpen(year)
{
	var fileName = "40x40";
	if (year != null)
		fileName = "40x40_" + year;	
	window.open("/globessites/brands/"+fileName+".aspx", "40x40", "toolbar=no,width=800,height=650,status=no,scrollbars=no,resizable=no left="+(screen.width-800)/2+",top=5");
}
function firmaWindowOpen(year)
{
	var fileName = "FirmaTop100_2008";
	if (year != null)
		fileName = "FirmaTop100_" + year;	
	window.open("/globessites/brands/"+fileName+".aspx", "FirmaTop100", "toolbar=no,width=800,height=700,status=no,scrollbars=no,resizable=no left="+(screen.width-800)/2+",top=5");
}


function ClientPaging(prefix,max_items,parent,style_on,style_off)
{
    this.ClientPagingMaxItems = max_items;
    this.ClientPagingPrefix = prefix;
    this.ClientStyleOn = style_on;
    this.ClientStyleOff = style_off;
    this.ClientStyleParent = parent;
    this.ClientPagingCounter = 0;
    this.ClientPagingArray;

    this.ClientPagingNavigate = ClientPagingNavigate;
    this.DoClientPaging = DoClientPaging;
    this.DoClientPagingWithEffect = DoClientPagingWithEffect;
    this.ColorCurrentPage = ColorCurrentPage;
    this.Init = Init;
    this.IsPageLoaded = false;
    
    this.Init();

    function ClientPagingNavigate(action)
    {
        if (action==1)
        {
            this.ClientPagingCounter++;
            if (this.ClientPagingCounter==this.ClientPagingMaxItems)
            {
                this.ClientPagingCounter=0;
            }
        }
        else
        {
            this.ClientPagingCounter--;
            if (this.ClientPagingCounter<0)
            {
                this.ClientPagingCounter=this.ClientPagingMaxItems-1;
            }
        }
        this.DoClientPaging(this.ClientPagingCounter);
    }

    function DoClientPaging(id) {
        var ruleriId = id + 1;

        if (this.IsPageLoaded) {
            e_counter.count(ruleriId.toString(), 'Views_ChangeTab', null, GetRuleriEventCategoryValue());
        }

        for (var i=0;i<this.ClientPagingArray.length;i++)
        {
            document.getElementById(this.ClientPagingArray[i]).style.display = 'none';
        }
        
        document.getElementById(this.ClientPagingArray[id]).style.display = 'block';
        this.ClientPagingCounter=id;
    }
    
    function DoClientPagingWithEffect(id)
    {
        this.DoClientPaging(id);
        this.ColorCurrentPage();
    }
    
    function ColorCurrentPage()
    {
        for (var i=0;i<this.ClientPagingArray.length;i++)
        {
            document.getElementById(this.ClientStyleParent + [i]).className=this.ClientStyleOff;
        }            
        var current = this.ClientStyleParent + this.ClientPagingCounter;
        document.getElementById(current).className=this.ClientStyleOn;
    }

    function Init()
    {        
        this.ClientPagingArray = new Array(this.ClientPagingMaxItems);
        for (var i=0;i<this.ClientPagingMaxItems;i++)
        {
            this.ClientPagingArray[i] = this.ClientPagingPrefix + (i+1);
        }
        this.DoClientPaging(0);
        this.IsPageLoaded = true;
    } 
}

var openDDFlag = "";
var openDDOutFlag = "";

function ruleriHomePageTopLinksEvent(id)
{
   e_counter.count(id,'Quiklinks_click',null,GetRuleriEventCategoryValue());
}

function ruleriHeaderEvent(key, value) {
    e_counter.count(unescape(value), key, null, GetRuleriEventCategoryValue());
}

function ruleriHeaderSearchEvent(id, value) {
    e_counter.count(unescape(value), id, null, GetRuleriEventCategoryValue());   
}

function ruleriGlobesLogoEvent() {
    e_counter.count('לוגו גלובס', 'Logo', null, GetRuleriEventCategoryValue());
} 
  
/*function openDropDown(objID,ActFlag)
{
    openDDFlag = objID;
    openDropDown3(objID,ActFlag)
}*/

function openDropDown(objID, ActFlag) {
    openDDFlag = objID;
    if (ActFlag == 1 && openDDFlag != openDDOutFlag)
        setTimeout("openDropDown2('" + objID + "'," + ActFlag + ")", 500);
    else
        openDropDown3(objID, ActFlag)
}

function openDropDown2(objID, ActFlag) {
    if (openDDFlag == objID)
        openDropDown3(objID, ActFlag)
}

function openDropDown3(objID,ActFlag)
{
	openDDOutFlag = "";
	var obj_btm;
	var obj;
	var objElement=document.getElementById(objID);
		
	if(objElement.className == "TopNavSelected")
	{
	   objElement.className = "TopNavSelectedOff";
	}
	
	if(ActFlag==1)
	{
	    obj_btm=document.getElementById(objID);
	    obj=document.getElementById("DropDown_"+objID);
	}
	else if(ActFlag==0)
	{
	    var NavigatorID=objID.substring(9,objID.length);
	    obj_btm=document.getElementById(NavigatorID);
	    obj=document.getElementById(objID);
	    
	}

    if (objID == "GH_Globesplus"){
        if (document.getElementById("GH_Globesplus_iframe").src != "/news/cache/header_globestools.htm")
        {
            document.getElementById("GH_Globesplus_iframe").src = "/news/cache/header_globestools.htm"
        }
	}
	else if (objID == "GH_Financial"){
	    if (document.getElementById("GH_Financial_iframe").src != "/news/cache/header_financial.html")
        {
            document.getElementById("GH_Financial_iframe").src = "/news/cache/header_financial.html"
        }       
    }          
	var tag_name=obj_btm.getElementsByTagName("span")[0];
	//tag_name.style.color="#cc0000";
	//tag_name.style.backgroundImage = "url(https://images.globes.co.il/Images/site2/header2011/GH_NavS_hover.png)";
	if (ActFlag == 0 ||openDDFlag == objID)
	    obj.style.display="block";
}
		
function closeDropDown(objID,ActFlag)
{
	openDDFlag = "";
	var obj_btm;
    var obj;
    var objParentTabID;
	var sParentTabID;
	if(ActFlag==1)
	{
	    obj_btm=document.getElementById(objID);
	    obj=document.getElementById("DropDown_"+objID);
	}
	else if(ActFlag==0)
	{
	    var NavigatorID=objID.substring(9,objID.length);
	    obj_btm=document.getElementById(NavigatorID);
	    obj=document.getElementById(objID);
	    openDDOutFlag = NavigatorID;
	}

	var tag_name=obj_btm.getElementsByTagName("span")[0];
	
//	if(obj_btm.className == "TopNavSelectedOff")
//	{
//	  tag_name.style.backgroundImage="url(https://images.globes.co.il/Images/site2/header2011/GH_NavS_on.png)";
//	}
//	else
//    {
//      tag_name.style.backgroundImage="url(https://images.globes.co.il/Images/site2/header2011/GH_NavS_off.png)";
//    }
	
	obj.style.display="none";
}
function main_menu_clicked(caller,context) {
	var g,e = caller.innerHTML.replace(/<[^>]*>/g,'');
	if (context == 'second_line') {
		g = selected_category_id;
	} else {
		while(!caller.id) {caller = caller.parentNode}
		g = caller.id.replace(/^[a-z]+\./,'');
	}
//	alert(g + '\n' + context + '\n' + e.replace(/\s/g,'*'))
    our_statistics_clicked(g,e);
}

function our_statistics_clicked(g,e) {
	var x = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest()
	x.open("GET","/e_counter.ashx?g=" + g + '&e=' + escape(e) + '&' + (new Date()).getTime(),false)
	x.send(null)
}

function Header_ShowSub(id, mode){
    if (mode)    {
        var obj = document.getElementById("SubDDN_" + id)
        LastDDN = document.getElementById("DDN_" + id)        
        if (LastSubDDN != null && obj != LastSubDDN) LastSubDDN.style.display = 'none'        
        obj.style.display = 'block';
        mouse_on_menu = true;
        LastSubDDN = obj;        
    }
    else    {
       document.getElementById("SubDDN_" + id).style.display = 'none';       
    }
}
                  
       
var mouse_on_menu = false;
var LastSubDDN = null;
var LastDDN = null;
//==== below code form header.aspx =====//
var bFinanceLinks = false;
function showFinanceLinks(){
    var lastVal = document.getElementById("divFinanceLinks").style.display;
    if (lastVal=="block") lastVal = "none";
    else 
    {
        lastVal="block";    
        if (document.getElementById("FinancialSiteMapIframe").src != "/news/cache/FinancialSiteMapIframe.htm")
        {
            document.getElementById("FinancialSiteMapIframe").src = "/news/cache/FinancialSiteMapIframe.htm"
        }
    }
    document.getElementById("divFinanceLinks").style.display = lastVal;
    if(document.getElementById("DropDown_GH_Financial").style.display=="block")
        document.getElementById("DropDown_GH_Financial").style.display="none"
    return;
}

function showFinancebox()
    {
        if (document.getElementById("GH_Financial_iframe").src != "/news/cache/header_financial.html?ver=2")
            {
                document.getElementById("GH_Financial_iframe").src = "/news/cache/header_financial.html?ver=2";
            }
        document.getElementById("DropDown_GH_Financial").style.display="block";            
    }


    function scrollEvent() {
        //hack - ff&ie - document.documentElement.scrollTop, safari&chrome - document.body.scrollTop
        var scrTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop; 
        if (document.documentElement && scrTop) {
            if (scrTop > "320") {closeSubMenuFrame();}
        }
    }

    // delay for activation
    var myTimer;
    function dropSubMenu(urldd)
    { myTimer = setTimeout("showSubMenuFrame('" + urldd + "')", 500); }

    function showSubMenuFrame(iframeUrl) {
        document.getElementById("submenuFrame").innerHTML = '<a id="closeSubmenuFrame" onclick="closeSubMenuFrame();" href="javascript:void(0)"></a><iframe id="submenu_Iframe" src="' + iframeUrl + '" width="983px" height="110px" frameborder="0" scrolling="no"></iframe>';
        document.getElementById("submenuFrame").style.display="block";
        document.getElementById("GH_DownNavBar").style.height="145px";
        document.getElementById("GPage_main").style.marginTop = "103px";

        window.onscroll = scrollEvent;
    }

    function closeSubMenuFrame() {
        document.getElementById("submenuFrame").style.display = "none";
        document.getElementById("GH_DownNavBar").style.height = "33px";
        document.getElementById("GPage_main").style.marginTop = "0";
    }


function showGToolsbox()
{   
    if (document.getElementById("GH_Globesplus_iframe").src != "/news/cache/header_globestools.htm")
        {
        document.getElementById("GH_Globesplus_iframe").src = "/news/cache/header_globestools.htm";
        }
    document.getElementById("DropDown_GH_Globesplus").style.display="block"; 
    document.getElementById("DropDown_GH_6").style.display="none"; 

}    

/* =========   div menu code (benny) ===========*/
function mshow(objID){    
    document.getElementById("s"+objID).style.display="block";
}
function mhide(objID){
    if(arguments.length==2)	    objID="s"+arguments[0];
    document.getElementById(objID).style.display="none";
}
function msubshow(objID){
    document.getElementById(objID).style.display="block";
}  

function emptyHeaderQueryString()
{
   var objQueryForSite = document.getElementById("query_for_site");
   if(objQueryForSite)
   {
      if(objQueryForSite.value == "חיפוש באתר גלובס") 
      { 
         objQueryForSite.value = "";
         return;
      }
   }   
}


var sInstrumentURL = "/portal/instrument.aspx?InstrumentID=";
var sFundURL = "/portal/fund.aspx?instrumentid=";
var sTAInstrumentURLParam = "&feeder=0&mode=";
var sTaseETFURL = "/portal/instrument.aspx?instrumentid=";
var sETFURL = "/portal/etf.aspx?instrumentid=";
var sNYInstrumentURLParam = "&feeder=1&mode=";

var browser = '';
var isHiddenDivDisplayed = 0;
var aArrLength = 0;
var ua = navigator.userAgent;
var iNext = 0;
var iPrev = 0;
var iStrLength = 1;
var iMaxItemsToShow = 15;
var xmlhttp = null;
var sVal = null;
var isDisplayed = 0;
var sSameSubjects = "תוצאות קרובות נוספות:";
var sDelim = "^";
var sDelim1 = "===";
var sDelim2 = "&&;";
var sBgcolor = "#ffffff";
var sFinanceBgcolor = "#ffffff";
var sBgcolorCursor = "#fdebe2";
var sInstrumentDelim = "--";
var sTa = 'ta';
var sNy = 'ny';
var sTypeDelim = "$";
var sServiceURL = "/Serve/Inc/Header_New/HeaderAjaxHiddenSearch/searchdata.aspx";
var sCloseResultsColor = "808080";
var tTimer; // don't remove this line!!!!
var sKeren = "קרן נאמנות";
var sKeren2 = "קרנות";
var sETF = "תעודות סל"
var sETF2 = "תעודת סל"

if (ua.indexOf("MSIE")!=-1){ browser = "MSIE"; } else if (ua.indexOf("Firefox")!=-1){ browser = "FF";sBgcolorCursor = "GainsBoro"; }

//--------------------------------------------------------------
window.onresize = hideHelpDiv;
//parent.document.onclick = hideHelpDiv;

function SetSearchType(id, flag)
{
   emptyHeaderQueryString();
   ruleriHeaderSearchEvent('Search_Radio','');
   var objSearchID = document.getElementById("site_search_selector");
   var objQueryForSite = document.getElementById("query_for_site");
   
   if(objSearchID)objSearchID.value = id;
   if(objQueryForSite){objQueryForSite.focus();}
   
   var parent_obj=document.getElementById("s_select");
   var child_img=parent_obj.getElementsByTagName("img");
   var child_span=parent_obj.getElementsByTagName("span");
   
   for(var i=0; i<child_img.length; i++)
   {
     if(i==flag)
     {
	    child_img[i].src = "https://images.globes.co.il/images/site2/search/radiobtm_style1_on.png";;
	    child_span[i].style.color="#cc0000";
	    objQueryForSite.focus();
     }
     else
     {
	    child_img[i].src = "https://images.globes.co.il/images/site2/search/radiobtm_style1_off.png";;
	    child_span[i].style.color="#000000";
     }
   }  
}
//footer
function startSearch_footer(e) {

    var iSearchID = document.getElementById("site_search_selector_footer").value;

    var sRuleriOpt_label = "News";
    if (iSearchID == 11) sRuleriOpt_label = "Qautes_footer";

    ruleriHeaderSearchEvent(sRuleriOpt_label, "Search_footer");

    var q = document.getElementById("fbbi_query");
    var str = q.value;
    var sCheckingLength;

    sCheckingLength = str.replace(" ", "");

    str = str.replace(/>/g, "");
    str = str.replace(/</g, "");

    sCheckingLength = sCheckingLength.replace(/^\s*|\s(?=\s)|\s*$/g, "");

    if (sCheckingLength.length < 1) {
        alert('אנא הכנס ערך לחיפוש שהוא לפחות תו אחד');
        return;
    }

    if (iSearchID == 11) {
        top.location.href = "/news/search.aspx?searchType=exact&searchQuery=" + escape(str) + "&id=7";
        stopThisEvent(e);
    }
    else {
        top.location.href = "/news/search.aspx?searchType=exact&searchQuery=" + escape(str) + "&id=1";
        stopThisEvent(e);
     }

}

function stopThisEvent(e) {
    try {
        if (e.stopPropagation) e.stopPropagation();
        else e.cancelBubble = true;

        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
    }
    catch (e) { }
}

function getEnter_footer(event) {
   
    if (navigator.appName == "Microsoft Internet Explorer") {
        if (window.event && window.event.keyCode == 13) { startSearch_footer(event); }
    }
    else {
        if (event && event.which == 13) { startSearch_footer(event); }
    }
}

//footer
function SetSearchTypeFooter(id, flag) {
    emptyHeaderQueryString();
    ruleriHeaderSearchEvent('Search_Radio', '');
    var objSearchID = document.getElementById("site_search_selector_footer");
    var objQueryForSite = document.getElementById("fbbi_query");

    if (objSearchID) objSearchID.value = id;
    if (objQueryForSite) { objQueryForSite.focus(); }

    var parent_obj = document.getElementById("fbbi_select");
    var child_img = parent_obj.getElementsByTagName("img");
    var child_span = parent_obj.getElementsByTagName("span");

    for (var i = 0; i < child_img.length; i++) {
        if (i == flag) {
            child_img[i].src = "https://images.globes.co.il/images/site2/search/radiobtm_style1_on.png"; ;
            child_span[i].style.color = "#cc0000";
            objQueryForSite.focus();
        }
        else {
            child_img[i].src = "https://images.globes.co.il/images/site2/search/radiobtm_style1_off.png"; ;
            child_span[i].style.color = "#000000";
        }
    }
}

//Create HTTPRequest
function CreateHTTPRequest()
{
	//if(location.href.indexOf(g.url.host) == -1)return;  // for tapuz!!!
	var xmlhttp=false;
    try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} 
	catch (e) {
		try {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");} catch (E) {xmlhttp = false;}
	}
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		try {xmlhttp = new XMLHttpRequest();} catch (e) {xmlhttp=false;}
	}
	return xmlhttp;
}

//Load text file depend on Tab
function LoadTextFile()
{
    
	var oQuery = document.getElementById("query_for_site");
	if(typeof oQuery != "undefined")
	{
		try{oQuery.focus()}catch(ex){}
		oQuery.value=oQuery.value;
	}
	
	xmlhttp = CreateHTTPRequest()
		if (!xmlhttp && window.createRequest) {
			try {
				xmlhttp = window.createRequest();
			} catch (e) {
				xmlhttp=false;
			}
		}
	
	if(xmlhttp && xmlhttp != null)
	{
        if(oQuery.value.length > 0)
	    {
		  var sFullUrl = sServiceURL + "?query=" + escape(oQuery.value.toLowerCase());
		  try{
		  	  xmlhttp.open("GET", sFullUrl,false);
		  }
		  catch(e){xmlhttp = null;}
	    }
	    else{xmlhttp = null;}
		  
	    if(xmlhttp && xmlhttp != null)
		{
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; language=he");
			xmlhttp.setRequestHeader("Content-Length", "0");
			xmlhttp.send(null);
		}
	}
}


//Onkeyup event
function onSearchKeyUp(event)
{
	var oDiv = document.getElementById("divHiddenSearch");
	var iTab = document.getElementById("site_search_selector").value;
	var obj = document.getElementById("query_for_site");
	
	if(iTab != 11)return;
			
	event = (event)?event:((window.event)?window.event:null);
	var keyCode = (event.keyCode) ? event.keyCode : ((event.which) ? event.which : event.keyCode);
		
	switch (keyCode)
	{
		case 40:
				onKeyD(iTab);  //if pressed Arrow Down
				//setValue();
				return;
		case 38:
				onKeyU(iTab); //if pressed Arrow Up
				//setValue();
				return;
		case 13:
				onSubmit(); //if "ENTER" presed
				return;
	}
	     
    if(obj.value == "")
    {
		oDiv.style.display = 'none';
		return;       
    }

    LoadTextFile();          
	ShowResults(obj,oDiv,iTab);	//show results
	//obj.focus();
}

function emptyHeaderQueryString()
{
   var objQueryForSite = document.getElementById("query_for_site");
   if(objQueryForSite)
   {
      if(objQueryForSite.value == "חיפוש באתר גלובס") 
      { 
         objQueryForSite.value = "";
         return;
      }
   }   
}

//prepare to show results(in hidden DIV)
function ShowResults(object,oDiv)
{	
	if(xmlhttp && xmlhttp != null)
	{
		if (xmlhttp.readyState == 4  && object.value.length >= iStrLength) 
		{
			var sResult = xmlhttp.responseText;			
			if(sResult.indexOf('html') == 1)return // if occured error on remote service page(search.aspx)			
			sVal = getHiddenSearchValue(object.value.toLowerCase(),xmlhttp.responseText);
			
			if(sVal != null)ShowAjaxResult(sVal,oDiv);					
		}
		else
		{
			if(oDiv != null)
			{
				oDiv.style.display = 'none';
				oDiv.innerHTML = '';
			}
		}
	}	
}

function RedirectTo(href)
{
   top.location.href = href;
   var oQuery = document.getElementById("query_for_site");
   if(oQuery)oQuery.focus();
   
}

function IsHiddenDivOpen(type)
{
   var objHidDiv = document.getElementById("hidIsDivOpen");
   if(objHidDiv)objHidDiv.value = type;
}

function OnblurText()
{
   var objHidDiv = document.getElementById("hidIsDivOpen");
   if(objHidDiv && parseInt(objHidDiv.value) == 0)
   {
     hideHelpDiv();
   } 
}

//build result table to show
function ShowAjaxResult(sVal,oDiv)
{
	var sColor = sFinanceBgcolor
	var sResult = "<table onmouseover='IsHiddenDivOpen(1)' onmouseout='IsHiddenDivOpen(0)'  id='tblHiddenSearch' style='font-family:arial; font-size:14px; text-align:right; border:1px solid #777; padding:0 7px; clear:both; direction: rtl' cellpadding='0' cellspacing='0' bgcolor=" + sColor + ">"
	aArrLength = sVal.length;
	//aArrLength === 0; bug!!!	
	if(aArrLength > 0)
    { 
	    var prevType = "";
	    sResult += '<tr><td class="title">שם נייר</td><td class="title">סימול</td><td class="title">בורסה</td><td class="title">סוג ני"ע</td></tr>';

		for(var ii = 0; ii < aArrLength; ii++)
		{
		    var oItem = new Array()
            oItem = sVal[ii];
            //var sTitle2 = oItem[0].replace(/ *\([^)]*\) */g, "");
            var sTitle = oItem[0].replace(/\([\-A-Z]+\)/,''); 
            var sTypeId = oItem[1];
            var sType = getComboType(parseInt(oItem[1]));
            var instrumentId = oItem[2];			
            var sSymbol = oItem.length > 3 ? oItem[3] : "";
            var sExchange = oItem.length > 4 ? oItem[4] : "";
						
			if(sTitle == sDelim1 && sHref == sDelim1 && (ii < aArrLength - 1)) {
				sResult += "<tr><td id='tdHidden_" + ii + "' style='border-top:1px solid e8e8e8;font:12px arial;color:" + sCloseResultsColor + ";font-weight:bold;'>" + sSameSubjects + "</td></tr>";
			}   
            else {

                if (sType != prevType) {
                    sResult += "<tr><td class='title' colspan=4>" + sType + "</td></tr>";
                    prevType = sType;
                }

			    var feeder = (parseInt(sTypeId, 10) < 8 || parseInt(sTypeId, 10) == 12 || parseInt(sTypeId, 10) == 14 || parseInt(sTypeId, 10) == 15)  ? 0 : 1;
			    var sHref = sInstrumentURL + instrumentId + (feeder == 1 ? "&feeder=1" : "") ;
			    	
			    if(sType == sETF || sType == sETF2) {
					sHref = sETFURL + instrumentId + sTAInstrumentURLParam;
				}
				if(sType == sKeren || sType == sKeren2) {
					sHref = sFundURL + instrumentId + sTAInstrumentURLParam;
				}										    		
			   
			
                if (sHref.indexOf('http') == -1 && sHref != sDelim1) {
                    sHref = "https://www.globes.co.il" + sHref
                }
                if (sTitle != sDelim) {
                    sResult += BuildSearchResultRow(sHref, aArrLength, ii, sTitle, sSymbol, sType, sExchange)
                }
			}
		}
	}
	
	var oQuery = document.getElementById("query_for_site");
	var sSumLink = "";
	if(oQuery && oQuery.value != '' && aArrLength > 0){	   
	   var sItemLink = "לכל התוצאות עבור " + " " + oQuery.value;
               
       var sItemURL = "/portal/search.aspx?searchType=exact&searchQuery=" + escape(oQuery.value) + "&id=7";

	   sSumLink = "<tr><td colspan=4><hr style='width:99%;margin:2px 0px 2px 0px;' /></td></tr><tr onclick='ruleriHeaderSearchEvent(\"Search_QauteDiv\",\"All results\")'><td colspan=4 align='right' style='font-weight:bold;padding:0px 5px 5px 5px;display:inline;'><a href='" + sItemURL + "' style='color:#cc0000;float:right;'>" + sItemLink + "</a></td></tr>";
	}
	
	sResult += sSumLink + "</table>"
					
	if(sResult.indexOf('<tr>') != -1)
	{
		isHiddenDivDisplayed = 0;
		oDiv.style.display = 'block';		
		oDiv.innerHTML = sResult;

		var oWidth;
		var iHeaderWidth;
		if (navigator.appName=="Netscape") {oWidth = window.innerWidth;}
                    if (navigator.appName.indexOf("Microsoft")!=-1) {oWidth = document.body.offsetWidth;}
                    if(document.getElementById("Table6"))iHeaderWidth = document.getElementById("Table6").width;
		
		//document.getElementById("tblHiddenSearch").width = '150px';	
		
        /*if(browser != "MSIE")  //FireFox
		{
		    oDiv.style.right = '0px';
		    oDiv.style.top = '0px';
		}*/
	}
	else
	{
		oDiv.style.display = 'none';
		oDiv.innerHTML = '';
	}
}



function BuildSearchResultRow(href, arrLen, index, title, symbol, type, exchange) {
     // if(sTitle != sDelim1)sResult += "<tr onclick='ruleriHeaderSearchEvent(\"Search_QauteDiv\",\"Qaute\");RedirectTo(\"" + sHref + "\")' onmouseover='drawSelected(this," + aArrLength + ",0)' id='tdHidden_" + ii + "'><td dir=ltr><a style='color:black;text-decoration: none;font:12px arial;float:right;' href='" + sHref + "'>" + "<label>" + sExchangeSymbol + "</label>" + sTitle + "</a></td><td align=left style='padding-left:5px;color:#666666;'>" + sType + "</td></tr>";
    return "<tr onclick='ruleriHeaderSearchEvent(\"Search_QauteDiv\",\"Qaute\");RedirectTo(\"" + href + "\")' onmouseover='drawSelected(this," + arrLen + ",0)' id='tdHidden_" + index + "'>" +
        "    <td class='instrumentName' dir='ltr'  width='50%'>" + title + "</td>" +
        "    <td dir='rtl width='10%'>" + symbol + "</td>" +
        "    <td dir='rtl width='20%'>" + exchange + "</td>" +
        "    <td dir='rtl width='20%'>" + type + "</td></tr>";
}

//draw selected item - onmouseover event
function drawSelected(obj,len,isFinance)
{
	var sColorOut = sBgcolor;
	if(isFinance == 1) sColorOut = sFinanceBgcolor;
	for(var i=0; i<len; i++)
	{
		var id = "tdHidden_" + i; 
		try{document.getElementById(id).style.backgroundColor = sColorOut;}catch(e){}
	}
	obj.style.backgroundColor=sBgcolorCursor;
	//setValue();
}

//draw unselected item - onmouseout event
function drawUnSelected(obj)
{
	obj.style.backgroundColor=sFinanceBgcolor;
}

//set result value to show
function setValue()
{
	var sRes = "";
	var oQuery = document.getElementById("query_for_site");
	var iTab = document.getElementById("site_search_selector").value;
	
	for(var j=0; j < aArrLength; j++)
	{
		try{
			var sID = "tdHidden_" + j;
			if(document.getElementById(sID).style.backgroundColor==sBgcolorCursor)
			{
				var sFullValue = document.getElementById(sID).innerHTML;
				
				sFullValue = sFullValue.replace("<B>","").replace("</B>","").replace("<b>","").replace("</b>","").replace("&amp;","&");
				
				var sArr = sFullValue.split(">");
				if(sArr.length > 1)
					sFullValue = sArr[1].split("<");
				else
					sFullValue = sArr[0].split("<");
				sRes = sFullValue[0];
				if(iTab == "ta" || iTab == "ny")
				{
					sRes = sRes.split(sInstrumentDelim)[0].replace(/^\s+|\s+$/g,"");
				}
			}
		}
		catch(e){}
	}
	
	if(sRes != "" && sRes != sSameSubjects)
	{
		sRes = sRes.replace("&amp;","&");
		oQuery.value = sRes;
		oQuery.focus();
	}
}

//If 'Arrow Down' Pressed 
function onKeyD(iTab)
{
	if(aArrLength > 0)
	{
		try
		{
		var sColor = sFinanceBgcolor
		if(iTab == 6) sColor = sBgcolor;
		
		for(var j=0; j < aArrLength; j++)
		{
			try
			{
			    var sID = "tdHidden_" + j;

			    if (document.getElementById(sID).style.backgroundColor == sBgcolorCursor || rgbConvert(document.getElementById(sID).style.backgroundColor) == sBgcolorCursor) {
				    var k = j + 1;
				    var g = j - 1;				   

				    var sIdNext = "tdHidden_" + k;
				    var sIdPrev = "tdHidden_" + g;

				    if (document.getElementById(sIdNext) != null) {
				        document.getElementById(sIdNext).style.backgroundColor = sBgcolorCursor;
				        document.getElementById(sID).style.backgroundColor = sColor;
				        isHiddenDivDisplayed = 1;
				        iNext = k;
				        iPrev = g;

				        return;
				    }
				    else {
				        document.getElementById(sID).style.backgroundColor = sColor;
				    }
				}
			}
			catch(e){}
		}

		document.getElementById("tdHidden_0").style.backgroundColor=sBgcolorCursor;
		isHiddenDivDisplayed = 1;
		}
		catch(ee){}
	}
}

function rgbConvert(str) {
    str = str.replace(/rgb\(|\)/g, "").split(",");
    str[0] = parseInt(str[0], 10).toString(16).toLowerCase();
    str[1] = parseInt(str[1], 10).toString(16).toLowerCase();
    str[2] = parseInt(str[2], 10).toString(16).toLowerCase();
    str[0] = (str[0].length == 1) ? '0' + str[0] : str[0];
    str[1] = (str[1].length == 1) ? '0' + str[1] : str[1];
    str[2] = (str[2].length == 1) ? '0' + str[2] : str[2];
    return ('#' + str.join(""));
}


//If 'Arrow Up' Pessed 
function onKeyU(iTab)
{
	if(aArrLength > 0)
	{
		try
		{
			var sColor = sFinanceBgcolor
			if(iTab == 6) sColor = sBgcolor;
			
			for(var j=0; j < aArrLength; j++)
			{
				try
				{
					var sID = "tdHidden_" + j;
					if (document.getElementById(sID).style.backgroundColor == sBgcolorCursor || rgbConvert(document.getElementById(sID).style.backgroundColor) == sBgcolorCursor)
					{
						var k = j + 1;
						var g = j - 1;
						
						var sIdNext = "tdHidden_" + k;
						var sIdPrev = "tdHidden_" + g;
								
						if(document.getElementById(sIdPrev) != null)
						{
							document.getElementById(sIdPrev).style.backgroundColor=sBgcolorCursor;
							document.getElementById(sID).style.backgroundColor=sColor;
							isHiddenDivDisplayed = 1;
							iNext = k;
							iPrev = g;
							return;
						}
						else
						{
							document.getElementById(sID).style.backgroundColor=sColor;
						}		
					}
				}
				catch(e){}
			}
			var sLast = "tdHidden_" + (aArrLength-1);
			document.getElementById(sLast).style.backgroundColor=sBgcolorCursor;
		}
		catch(ee){}
	}
}

//if "ENTER" presed
function onSubmit()
{
	if(document.getElementById("divHiddenSearch").style.display != 'none')
	{
		for(var j=0; j < aArrLength; j++)
		{
			try
			{
				var sID = "tdHidden_" + j;
				if ((document.getElementById(sID).style.backgroundColor == sBgcolorCursor || rgbConvert(document.getElementById(sID).style.backgroundColor) == sBgcolorCursor) && document.getElementById(sID).innerHTML != sSameSubjects)
				{
					var sVal = document.getElementById(sID).innerHTML;
					var sRes = getSearchedValue(sVal)
					var oQuery = document.getElementById("query_for_site");
					sRes = sRes.toLowerCase().replace("<label>","").replace("</label>","");
					var arrURL = sRes.split("href=");
					
					if(arrURL.length > 1)
					{
						arrURL = arrURL[1].split(">");
						sRes = arrURL[0];						
						sRes = sRes.replace(/"/g,"");
						top.location = sRes;						
						sRes = arrURL[1];
					}
					
					//oQuery.value = sRes;			
					document.getElementById("divHiddenSearch").style.display = 'none';
					isHiddenDivDisplayed = 0;
					oQuery.focus();
				}
			}
			catch(e){}
		}
	}
}

//get selected value on submit(if ENTER pressed)
function getSearchedValue(sQuery)
{
	var iTab = document.getElementById("site_search_selector").value;
	var sRes = "";
	var sArr;
	
	if(sQuery != "")
	{
		sQuery = sQuery.replace("<B>","").replace("</B>","").replace("<b>","").replace("</b>","").replace("&amp;","&");
		if(iTab == 6)
		{
			sArr = sQuery.split(">");
			sQuery = sArr[1].split("<");
			sRes = sQuery[0];
			
		}		
		if(iTab == 11)
		{
			sRes = sQuery.split(sInstrumentDelim)[0].replace(/^\s+|\s+$/g,"");
		}
	}
	return sRes;
}

//formating and sorting of array to show
function formatResArray(arr,strSearch,iTitle,iTab)
{
	var arrFirst = new Array();
	var indx = 0;
	for(var i = 0; i < arr.length; i++)
	{
        var sTitle = arr[i][0];
        var sType = arr[i][1];
        var sHref = arr[i][2];
        var sSymbol = arr[i].length > 3 ? arr[i][3] : "";
        var sExchange = arr[i].length > 4 ? arr[i][4] : "";
		
		if(sTitle.toLowerCase().indexOf(strSearch) != -1)
		{	
            arrFirst[i] = new Array(sTitle, sType, sHref, sSymbol, sExchange);
			arr[i] = arrFirst[i]
			indx ++;
		}
    }

    arrFirst.sort(function(x,y){return x[1]-y[1]})
	
	var oDelim = new Array(sDelim1,sDelim1)
	if(indx > 0 && indx < 10 && iTitle == 0)
	{
		arr.splice(indx,0,oDelim)
	}
	
	var arrRes = new Array ();
	var iLength = arr.length;
	
	//if(iLength > 10) iLength = 11;
	for(var ll = 0; ll < iLength; ll++)
	{
			arrRes[ll] = arr[ll];
		
	}	
	return arrRes;
}

//hide Ajax Div
function hideHelpDiv()
{	
    var objDivHiddenSearch  = document.getElementById("divHiddenSearch")
	if(objDivHiddenSearch != null && objDivHiddenSearch.style.display == "block")
	{
		try{
			objDivHiddenSearch.style.display = "none";
		}
		catch(e){}
	}
}

function getHiddenSearchValue(strSearch,strValue)
{
	var sArr = strValue.split('\n')
	var b = new Array()
	var arrRes = new Array()
	var iInd = 0;
	var sTitle;
	var kk = 0;
	var sResType;
	if(sArr.length > 0)
	{	
		for(var i in sArr)
		{
			try{
				if(kk < iMaxItemsToShow)
				{
					//var x = (sArr[i]).split(sDelim);
					var x = (sArr[i]).split('^');
					
					if(x[0] != '')
					{
						// x[0] --- name
						// x[1] --- type
					    // x[2] --- id
					    // x[3] --- symbol
                        // x[4] --- exchange
						var sTypeOfInstr = getComboType(parseInt(x[1]));
						//sTitle = x[0] + sInstrumentDelim + sTypeOfInstr;
                        sTitle = x[0]
                        var sType = x[1]
                        var sId = x[2]
                        var symbol = x.length > 3 ? x[3] : ""
                        var exchange = x.length > 4 ? x[4] : ""
                        arrRes[kk++] = new Array(sTitle, sType, sId, symbol, exchange);
					}
				}
			}
			catch(e){}
		}
		var arrAllRes = new Array();
		arrAllRes = formatResArray(arrRes,strSearch,1)
			
		return arrAllRes;
	}
}

function getComboType(sVal)
{
    var sRes = "";
	switch (sVal)
	{
		case 1 :
			 sRes = "מניה";
			 break;
	    case 2 :
			 sRes = "מדד";
			 break;
	    case 3 :
			 sRes = "אג\"ח";
			 break;
	    case 4 :
			 sRes = "אופציות";
			 break;
	    case 5 :
			 sRes = "קרנות";
			 break;
		case 6 :
			 sRes = "תעודת סל";
			 break;
		case 7 :
			 sRes = "כתבי אופציה";
			 break;
		case 8 :
			 sRes =  "מדד"; //"Index";
			 break;
		case 9 :
			 sRes = "מניה"; //"Stocks";
			 break;
		case 10 :
			 sRes = "ETF";
			 break;
		case 11 :
			 sRes = "סחורה"; //"Commodities";
			 break;
		case 12 :
			 sRes = "מטבע"; //"Currency";
			 break;
		case 13 :
			 sRes = "חוזה עתידי"; //"Futures";
             break;
        case 14:
            sRes = "קרן סל"        
            break;
        case 15:
            sRes = "מק\"מ"
            break;
	}
	
	return sRes;		 
}


function emptyHeaderQueryString()
{
   var objQueryForSite = document.getElementById("query_for_site");
   if(objQueryForSite)
   {
      if(objQueryForSite.value == "חיפוש באתר גלובס") 
      { 
         objQueryForSite.value = "";
         return;
      }
   }
}

var style1;
var style2;
var xdesk;

function showDeskBar() {
    if (document.getElementById("VIRTUALWEB_control-panel_PANEL") == null) {
        setTimeout('showDeskBar()', 5000);
        return;
    }
    style1 = document.getElementById("VIRTUALWEB_control-panel_PANEL").style;
    style1.display = 'block';
    style1.width = "97%";
    xdesk = document.getElementById("xDesk").style;
    xdesk.display = 'block';
    xdesklink = document.getElementById("xDeskLink").style;
    xdesklink.display = 'block';
    style2 = document.getElementById("VIRTUALWEB_cp_filler").style;
    style2.height = '41px';
    setCookie("desk", "on", 365);
}

function closeDeskBar() {
    style1.display = 'none';
    style2.height = '3px';
    xdesk.display = 'none';
    setCookie("desk", "off", 365);
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function checkCookie() {
    var desk = getCookie("desk");
    if (desk == "on") {
        showDeskBar();
    }
}