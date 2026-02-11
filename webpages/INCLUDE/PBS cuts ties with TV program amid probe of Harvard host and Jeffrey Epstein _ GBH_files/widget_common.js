var SHOW_ERRORS = true;
var basic_fonts = ["Arial, Helvetica, sans-serif", "'Comic Sans MS', cursive, sans-serif", "'lucida sans unicode', 'Lucida Grande', sans-serif", "Tahoma, Geneva, sans-serif", "Verdana, Geneva, sans-serif", "'Courier New', Courier, monospace", "'Lucida Console', Monaco, monospace", "'Trebuchet MS', Helvetica, sans-serif", "Impact, Charcoal, sans-serif"];
var google_fonts = [];
var google_fonts_updated = [];
var custom_fonts = [];

var current_page_name = 'main';
var page_first_view = {};

var IsDatepickerScriptLoaded = false;
var IsDatepickerScriptLoading = false;

var IMAGE_N_DIMS = {};

var logger = logger || function (msg) {
    if (typeof console !== "undefined") {
        console.log(msg);
    }
};

logger('PP_CACHE_VERSION: ' + PP_CACHE_VERSION);
logger('PP_MODE: ' + PP_MODE);
logger('PP_STAGE: ' + (PP_STAGE ? 'dev' : 'prod'));

//The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.
function getRandomInt(min, max) {
    var res = Math.floor(Math.random() * (max - min)) + min;
    if (res >= max) res--;
    return res;
}

function tryShowError() {
    try {
        if (typeof console !== "undefined" && (SHOW_ERRORS || PP_MODE !== 'hosted' || (typeof IS_DEV !== 'undefined' && IS_DEV) || (typeof IS_PREVIEW !== 'undefined' && IS_PREVIEW))) {
            return true;
        }
    } catch (e) {
        if (typeof console !== "undefined") {
            console.log('ERROR (tryShowError)', e);
        }
    }

    return false;
}

function tryShowMessage() {
    return tryShowError();
}

function appendCSS(d, nm, xtra) {
    var h = d.head || d.getElementsByTagName('head')[0];
    var l = d.createElement('link');
    l.type = 'text/css';
    l.rel = 'stylesheet';
    l.media = 'screen';
    l.href = ('http:' === d.location.protocol ? 'http://' : 'https://') + nm;

    if (typeof xtra === 'object' && xtra) {
        for (var prop in xtra) {
            if (xtra.hasOwnProperty(prop)) {
                l[prop] = xtra[prop];
            }
        }
    }

    h.appendChild(l);
}

function appendJS(d, nm, xtra) {
    var e = d.createElement('script');
    e.type = 'text/javascript';
    e.async = true;
    e.src = ('http:' === d.location.protocol ? 'http://' : 'https://') + nm;
    //if (nm.indexOf('http') !== 0)
    //    e.src = ('http:' === d.location.protocol ? 'http://' : 'https://') + nm;
    //else
    //    e.src = nm;

    if (typeof xtra === 'object' && xtra) {
        for (var prop in xtra) {
            if (xtra.hasOwnProperty(prop)) {
                e[prop] = xtra[prop];
            }
        }
    }

    var s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
}

Array.prototype.ArrayContains = function (val) {
    var i = this.length;
    while (i--) {
        if (this[i] === val) {
            return true;
        }
    }
    return false;
}

function ArrayContains(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}

function arrayContains(arr, val) {
    return ArrayContains(arr, val);
}

function array_contains(arr, val) {
    return ArrayContains(arr, val);
}

Array.prototype.indexOf || (Array.prototype.indexOf = function (d, e) {
    var a;
    if (null === this) throw new TypeError('"this" is null or not defined');
    var c = Object(this),
        b = c.length >>> 0;
    if (0 === b) return -1;
    a = +e || 0;
    Infinity === Math.abs(a) && (a = 0);
    if (a >= b) return -1;
    for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
        if (a in c && c[a] === d) return a;
        a++
    }
    return -1;
});

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };

    String.prototype.contains = String.prototype.includes;
    String.prototype.Contains = String.prototype.includes;
} else {
    String.prototype.contains = String.prototype.includes;
    String.prototype.Contains = String.prototype.includes;
}


if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        enumerable: false,
        value: function (obj) {
            var newArr = this.filter(function (el) {
                return el === obj;
            });
            return newArr.length > 0;
        }
    });
}

if (!Array.prototype.contains) {
    Array.prototype.contains = Array.prototype.includes;
}

if (!Array.prototype.Contains) {
    Array.prototype.Contains = Array.prototype.includes;
}

if (!Array.prototype.remove) {
    Object.defineProperty(Array.prototype, "remove", {
        enumerable: false,
        value: function (obj) {
            var idx = 0;
            while (idx !== -1) {
                idx = this.indexOf(obj);
                if (idx !== -1) {
                    this.splice(idx, 1);
                }
            }
            return this;
        }
    });
}


//function getUrlParam(name, urlOverride) {
//    try {
//        if (typeof urlOverride !== 'string')
//            url = location.href;

//        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
//        var regexS = "[\\?&]" + name + "=([^&#]*)";
//        var regex = new RegExp(regexS);
//        var results = regex.exec(url);

//        if (results === null)
//            return null;

//        if (results.length < 2)
//            return null;

//        if (results[1].indexOf('%') !== -1)
//            return decodeURIComponent(results[1]);

//        return results[1];
//    }
//    catch (err) {
//        return null;
//    }
//}


function getUrlParam(name, urlOverride) {
    try {
        if (!name)
            return null;

        var url = location.href;
        if (typeof urlOverride === 'string' && urlOverride.indexOf('http') === 0)
            url = urlOverride;

        if (!url || !url.contains('?'))
            return null;

        var qs = url.split('?')[1];
        if (!qs || !qs.contains(name + '='))
            return null;

        var val = '';
        var foundVal = false;
        if (qs.contains('&')) {
            var parts = qs.split('&');
            for (var i = 0; i < parts.length; i++) {
                if (parts[i].indexOf(name + '=') === 0) {
                    val = parts[i].split(name + '=')[1];
                    foundVal = true;
                    break;
                }
            }
        } else if (qs.indexOf(name + '=') === 0) {
            val = qs.split(name + '=')[1];
            foundVal = true;
        }

        if (!foundVal)
            return null;

        if (val.contains('%'))
            return decodeURIComponent(val);

        return val;
    }
    catch (err) {
        return null;
    }
}


function getUrlVars() {
    var obj = {};
    try {
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            obj[key] = value;
        });

        //obj['email'], obj['first_name'], obj['last_name']
        return obj;
    }
    catch (err) {
        return {};
    }
}


function loadScript(url, callback)
{
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState)
    {
        // only required for IE <9
        script.onreadystatechange = function ()
        {
            if (script.readyState === "loaded" || script.readyState === "complete")
            {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else
    {  
        script.onload = function ()
        {
            callback();
        };
    }

    script.async = true;
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}



function getBorderStyle(propBorder) {
    var str = '';
    if (typeof propBorder.style === 'undefined' || propBorder.style === null || propBorder.style === 'none' || propBorder.width === '0' || propBorder.width === 0) {
        str += 'border-style: none;';
        str += 'border-width: 0px;';
    } else {
        str += 'border-color: ' + propBorder.color + ';';
        str += 'border-style: ' + propBorder.style + ';';
        str += 'border-width: ' + propBorder.width + 'px' + ';';
        str += 'border-radius: ' + propBorder.radius + 'px' + ';';
    }
    return str;
}

function getBackgroundStyle(propBackground) {
    var str = "";

    //http://stackoverflow.com/questions/2504071/is-it-possible-to-combine-a-background-image-and-css3-gradients

    if (propBackground.use_image && propBackground.image.length > 3 && propBackground.image && propBackground.image !== 'none') {
        str += "background-image: " + "url(https://s3.pushplanet.com/users/" + settings.user.guid + "/uploads/" + propBackground.image + ")" + ";";
        str += "background-position: " + propBackground.position + ";";
        str += "background-color: " + propBackground.color + ";";
        if (propBackground.repeat === 'stretch') {
            str += '-webkit-background-size: cover;';
            str += '-moz-background-size: cover;';
            str += '-o-background-size: cover;';
            str += 'background-size: cover;';
        } else {
            str += 'background-repeat: ' + propBackground.repeat + ';';
        }
    }
    else if (propBackground.use_gradient && propBackground.gradient.length > 3) {
        str += "background: " + "-webkit-gradient(linear, left top, left bottom, from(" + propBackground.color + "),to(" + propBackground.gradient + "))" + ";";
        str += "background: " + "-webkit-linear-gradient(top, " + propBackground.color + "," + propBackground.gradient + ")" + ";";
        str += "background: " + "-o-linear-gradient(top, " + propBackground.color + "," + propBackground.gradient + ")" + ";";
        str += "background: " + "-moz-linear-gradient(top, " + propBackground.color + "," + propBackground.gradient + ")" + ";";
        str += "background: " + "-ms-linear-gradient(top, " + propBackground.color + "," + propBackground.gradient + ")" + ";";
        str += "background: " + "linear-gradient(to bottom," + propBackground.color + "," + propBackground.gradient + ")" + ";";
    }
    else {
        str += "background: " + propBackground.color + ";";
    }
    return str;
}

function getFontStyle(propFont) {
    var str = "";
    if (propFont.family.indexOf('__google__') >= 0) {
        str += 'font-family: ' + propFont.family.replace('__google__', '') + ';';
    } else if (propFont.family.indexOf('__custom__') >= 0) {
        str += 'font-family: ' + propFont.family.split('||||')[1] + ';';

    } else {
        str += 'font-family: ' + propFont.family + ';';
    }
    str += "font-weight: " + (propFont.bold ? "bold" : "normal") + ";";
    str += "font-style:  " + (propFont.italic ? "italic" : "normal") + ";";
    str += "text-decoration: " + (propFont.underline ? "underline" : "none") + ";";
    str += "text-align: " + propFont.align + ";";
    str += "font-size: " + propFont.size + "px" + ";";
    str += "color: " + propFont.color + ";";

    if (propFont.hasOwnProperty('vspace') && propFont.vspace !== null && propFont.vspace !== '' && propFont.vspace !== '0' && propFont.vspace !== 0) {
        str += 'line-height: ' + propFont.vspace + 'px' + ';';
    }

    return str;
}

function getWidthStyle(width) {
    var str = "";
    str += "width: " + width + "px" + ";";
    return str;
}

function getWidthPercentStyle(width) {
    var str = "";
    str += "width: " + width + "%" + ";";
    return str;
}

function getHeightStyle(height) {
    var str = "";
    str += "height: " + height + "px" + ";";
    return str;
}

function getHeightPercentStyle(height) {
    var str = "";
    str += "height: " + height + "%" + ";";
    return str;
}

function getLineHeightStyle(lineHeight) {
    var str = "";
    str += "line-height: " + lineHeight + "px" + ";";
    return str;
}

function getDisplayStyle(display) {
    var str = "";
    str += "display: " + (display ? "block" : "none") + ";";
    return str;
}

function getOverflowHiddenStyle() {
    var str = "";
    str += "overflow: " + "hidden" + ";";
    return str;
}

function getOverflowVisibleStyle() {
    var str = "";
    str += "overflow: " + "visible" + ";";
    return str;
}

function getFloatLeftStyle() {
    var str = "";
    str += "float: " + "left" + ";";
    return str;
}

function getFloatRightStyle() {
    var str = "";
    str += "float: " + "right" + ";";
    return str;
}

function getPositionAbsoluteStyle() {
    var str = "";
    str += "position: " + "absolute" + ";";
    return str;
}

function getPositionAbsoluteImportantStyle() {
    var str = "";
    str += "position: absolute !important;";
    return str;
}

function getPositionRelativeStyle() {
    var str = "";
    str += "position: " + "relative" + ";";
    return str;
}

function getGeneralStyle(propName, propVal) {
    var str = "";
    str += propName + ": " + propVal + ";";
    return str;
}

function getLeftStyle(left) {
    var str = '';
    str += 'left: ' + left + 'px' + ';';
    return str;
}

function getTopStyle(top) {
    var str = '';
    str += 'top: ' + top + 'px' + ';';
    return str;
}

function getLeftTopWidthHeightStyle(prop) {
    var str = '';
    str += 'left: ' + prop.x + 'px' + ';';
    str += 'top: ' + prop.y + 'px' + ';';
    str += 'width: ' + prop.width + 'px' + ';';
    str += 'height: ' + prop.height + 'px' + ';';
    return str;
}

function getZindexStyle(zindex) {
    var str = '';
    str += 'z-index: ' + zindex + ';';
    return str;
}

function getCursorStyle(curse) {
    var str = '';
    str += 'cursor: ' + curse + ';';
    return str;
}

function showLoading() {
    if ($('#modal_loading_spinner').length) {
        var modal_width = $(window).width();
        var modal_height = $(window).height();
        $('#modal_loading_spinner').css('left', ((Math.round(modal_width / 2) - 10) + 'px'));
        $('#modal_loading_spinner').css('top', ((Math.round(modal_height / 2) - 10) + 'px'));
        $('body').addClass('loading');
    }
}

function hideLoading() {
    if ($('body').hasClass('loading')) {
        $('body').removeClass('loading');
    }
}

function getNforType(type, pref) {
    var cnt_name = type + '_count_main';
    if (pref !== '') {
        cnt_name = type + '_count_' + pref;
    }

    if (!settings[cnt_name]) {
        settings[cnt_name] = 0;
    }

    return settings[cnt_name];
}

function togglePage(page_type) {
    if (page_type === 'thanks' || page_type === 'thx') {
        $('#layout').hide();
        $('#thxlayout').show();
        $('#ep1layout').hide();
        $('#ep2layout').hide();
        $('#ep3layout').hide();
        $('#ep4layout').hide();
        current_page_name = 'thanks';
    } else if (page_type === 'ep1') {
        $('#layout').hide();
        $('#thxlayout').hide();
        $('#ep1layout').show();
        $('#ep2layout').hide();
        $('#ep3layout').hide();
        $('#ep4layout').hide();
        current_page_name = 'ep1';
    } else if (page_type === 'ep2') {
        $('#layout').hide();
        $('#thxlayout').hide();
        $('#ep1layout').hide();
        $('#ep2layout').show();
        $('#ep3layout').hide();
        $('#ep4layout').hide();
        current_page_name = 'ep2';
    } else if (page_type === 'ep3') {
        $('#layout').hide();
        $('#thxlayout').hide();
        $('#ep1layout').hide();
        $('#ep2layout').hide();
        $('#ep3layout').show();
        $('#ep4layout').hide();
        current_page_name = 'ep3';
    } else if (page_type === 'ep4') {
        $('#layout').hide();
        $('#thxlayout').hide();
        $('#ep1layout').hide();
        $('#ep2layout').hide();
        $('#ep3layout').hide();
        $('#ep4layout').show();
        current_page_name = 'ep4';
    } else {
        $('#layout').show();
        $('#thxlayout').hide();
        $('#ep1layout').hide();
        $('#ep2layout').hide();
        $('#ep3layout').hide();
        $('#ep4layout').hide();
        current_page_name = 'main';
    }

    updateSettings();
}

function getPrefMod() {
    var pref_mod = '';
    if (!current_page_name || current_page_name === 'main') {
        pref_mod = '';
    } else if (current_page_name === 'thanks' || current_page_name === 'thx') {
        pref_mod = 'thanks_';
    } else {
        pref_mod = current_page_name + '_';
    }
    return pref_mod;
}

function mergeObjectData(obj1, obj2) {
    var obj3 = {};
    var attrname = '';
    for (attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

function loadExternalFonts(pref, first_run) {
    google_fonts_updated = [];

    var n = 0;

    for (n = 1; n <= getNforType('text', pref); n++) {
        if (settings[pref + 'text' + n] && !settings[pref + 'text' + n].deleted) {
            addExternalFontToStack(settings[pref + 'text' + n].font.family);
        }
    }

    for (n = 1; n <= getNforType('button', pref); n++) {
        if (settings[pref + 'button' + n] && !settings[pref + 'button' + n].deleted) {
            addExternalFontToStack(settings[pref + 'button' + n].font.family);
            addExternalFontToStack(settings[pref + 'button' + n].font_hover.family);
            addExternalFontToStack(settings[pref + 'button' + n].font_focus.family);
        }
    }

    for (n = 1; n <= getNforType('field', pref); n++) {
        if (settings[pref + 'field' + n] && !settings[pref + 'field' + n].deleted) {
            addExternalFontToStack(settings[pref + 'field' + n].font.family);
        }
    }

    //if (PP_MODE !== 'editor') {
    //    loadGoogleFontsFromStack();
    //} 

    if (first_run) {
        loadGoogleFontsFirstRun();
    } else {
        loadGoogleFontsIncremental();
    }
}

function addExternalFontToStack(f) {
    if (f.indexOf('__custom__') >= 0) {
        addCustomFontToStack(f);
    } else {
        var font_name = '';

        if (f.indexOf('__google__') >= 0) {
            font_name = f.replace('__google__', '').split("'")[1];
        } else if (f && f.length > 10 && $.inArray(f, basic_fonts) === -1) {
            font_name = f.split("'")[1];
        }

        if (font_name && font_name.length > 1 && $.inArray(font_name, google_fonts) === -1) {
            google_fonts.push(font_name);
            google_fonts_updated.push(font_name);
        }
    }
}

//function loadGoogleFontsFromStack() {
//    if (google_fonts.length > 0) {
//        var font_builder = 'https://fonts.googleapis.com/css?family=';
//        var font_fam = '';

//        for (var i = 0; i < google_fonts.length; i++) {
//            font_fam = google_fonts[i];
//            if (font_fam.indexOf(' ') > 0) {
//                font_fam = font_fam.split(' ').join('+');
//            }
//            font_builder += font_fam;

//            if (i < (google_fonts.length - 1)) {
//                font_builder += '|';
//            }
//        }

//        logger('google_font_builder: ' + font_builder);

//        var h = document.head || document.getElementsByTagName('head')[0];
//        var l = document.createElement('link');
//        l.type = 'text/css';
//        l.rel = 'stylesheet';
//        l.href = font_builder;
//        h.appendChild(l);
//    }
//}

function loadGoogleFontsFirstRun() {
    if (google_fonts.length > 0) {
        WebFont.load({
            google: {
                families: google_fonts
            }
        });
        //logger('google fonts first run: ' + google_fonts.join(', '));
    }
}

function loadGoogleFontsIncremental() {
    if (google_fonts_updated.length > 0) {
        WebFont.load({
            google: {
                families: google_fonts_updated
            }
        });
        //logger('google fonts incremental: ' + google_fonts_updated.join(', '));
    }
}

function addCustomFontToStack(f) {
    if (f.indexOf('||||') >= 0) {
        var font_parts = f.split('||||');
        var font_name = font_parts[1];
        var font_guid = font_parts[2];
        var font_url = 'https://s3.pushplanet.com/custom_fonts/' + font_guid + '.css' + '?cb=' + (new Date().getTime());

        if ($.inArray(font_name, basic_fonts) === -1 && $.inArray(font_name, custom_fonts) === -1) {
            //logger('custom font loaded: ' + font_name);

            custom_fonts.push(font_name);

            var h = document.head || document.getElementsByTagName('head')[0];
            var l = document.createElement('link');
            l.type = 'text/css';
            l.rel = 'stylesheet';
            l.href = font_url;
            h.appendChild(l);
        }
    }
}

function isNullOrWhiteSpace(input) {
    if (typeof input === 'undefined' || input === null) return true;
    if (typeof input !== 'string') return false;
    return input.replace(/\s/g, '').length < 1;
}

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

function initDatepicker(pref, propName) { 
    try {
        if (!IsDatepickerScriptLoaded) {
            if (!IsDatepickerScriptLoading) {
                IsDatepickerScriptLoading = true;

                var themeUrl = '';
                if (settings[propName].datepicker.theme) {
                    if (settings[propName].datepicker.theme === 'dark') {
                        themeUrl = 'https://cdn.pushplanet.com/static/pikaday_dark.css';
                    }
                }

                appendCSS(document, 'cdn.pushplanet.com/static/pikaday.css');

                if (themeUrl) {
                    appendCSS(document, themeUrl);
                }

                appendJS(document, 'cdn.pushplanet.com/static/pikaday.js');
            }

            if (typeof Pikaday !== 'undefined') {
                IsDatepickerScriptLoaded = true;
                initDatepicker(pref, propName);
            } else {
                setTimeout(function () {
                    initDatepicker(pref, propName);
                }, 50);
            }
        } else {

            logger('initDatepicker(' + pref + ', ' + propName + ')');

            var dp = settings[propName].datepicker;

            var region = '';
            var splitChar = '';
            var format = 'MM/DD/YYYY';
            if (!window.hasOwnProperty('pikadayInstances')) { window.pikadayInstances = {}; }

            if (!isNullOrWhiteSpace(dp.format) && (dp.format.indexOf('/') > 0 || dp.format.indexOf('-') > 0 || dp.format.indexOf('.') > 0 || dp.format.indexOf(',') > 0 || dp.format.indexOf(' ') > 0)) {
                format = dp.format.trim().toUpperCase();
            }

            if (format.indexOf('/') > 0)
                splitChar = '/';
            else if (format.indexOf('-') > 0)
                splitChar = '-';
            else if (format.indexOf('.') > 0)
                splitChar = '.';
            else if (format.indexOf(',') > 0)
                splitChar = ',';
            else if (format.indexOf('_') > 0)
                splitChar = '_';
            else if (format.indexOf('|') > 0)
                splitChar = '|';
            else if (format.indexOf(' ') > 0)
                splitChar = ' ';
            var currentYear = new Date().getFullYear();
            var futureYear = currentYear + 25; // Allow dates up to 25 years in the future
            var picker = new Pikaday({
                field: document.getElementById(propName),
                format: format,
                yearRange: [1900, futureYear], // Dynamic year range from 1900 to 50 years in the future
                showMonthDropdown: true, // Enables month selection dropdown
                showYearDropdown: true, // Enables year selection dropdown
                toString: function (date, formatInternal) {
                    try {
                        var day = date.getDate();
                        var month = date.getMonth() + 1;
                        var year = date.getFullYear();

                        var strOut = '';
                        var formatParts = format.split(splitChar);
                        for (var i = 0; i < formatParts.length; i++) {
                            if (formatParts[i].indexOf('D') >= 0) {
                                strOut += day + splitChar;
                            } else if (formatParts[i].indexOf('M') >= 0) {
                                strOut += month + splitChar;
                            } else if (formatParts[i].indexOf('Y') >= 0) {
                                strOut += year + splitChar;
                            }
                        }

                        if (strOut) {
                            strOut = strOut.substr(0, strOut.length - 1);
                        }

                        //logger('Pikaday.toString = ' + strOut);

                        return strOut;
                    }
                    catch (e) {
                        if (tryShowError()) console.log('ERROR (initDatepicker 1)', e);

                        var td = new Date();
                        return (td.getMonth() + 1) + splitChar + (td.getDate()) + splitChar + (td.getFullYear());
                    }
                },
                parse: function (dateString, formatInternal) {
                    try {
                        var dateParts = dateString.split(splitChar);
                        var formatParts = format.split(splitChar);

                        if (dateParts.length !== formatParts.length || dateParts.length === 0) {
                            return new Date();
                        }

                        var day = -1;
                        var month = -1;
                        var year = -1;

                        for (var i = 0; i < formatParts.length; i++) {
                            if (formatParts[i].indexOf('D') >= 0) {
                                day = parseInt(dateParts[i], 10);
                            } else if (formatParts[i].indexOf('M') >= 0) {
                                month = parseInt(dateParts[i] - 1, 10);
                            } else if (formatParts[i].indexOf('Y') >= 0) {
                                year = parseInt(dateParts[i], 10);
                            }
                        }

                        if (day === -1 || month === -1 || year === -1) {
                            return new Date();
                        }

                        var thedate = new Date(year, month, day);

                        //logger('Pikaday.parse = ' + ((thedate.getMonth() + 1) + splitChar + (thedate.getDate()) + splitChar + (thedate.getFullYear())));

                        return thedate;
                    }
                    catch (e) {
                        if (tryShowError()) console.log('ERROR (initDatepicker 2)', e);
                        return new Date();
                    }
                },
                onSelect: function () {
                    //logger(this.getDate());
                    logger(this.toString(format));
                }
            });

            // Initialize Pikaday if it doesn't already exist for the field
            if (!window.pikadayInstances.hasOwnProperty(propName)) { window.pikadayInstances[propName] = picker; }
            // Ensure calendar stays open until full selection on mobile
            setTimeout(() => {
                document.querySelector('.pika-select-year')?.addEventListener('change', (e) => e.stopPropagation());
                document.querySelector('.pika-select-month')?.addEventListener('change', (e) => e.stopPropagation());
                if (isMobile()) { //prevent DatePicker UI close on Mobile devices when selecting year/month especially IOS devices
                    var propElement = document.getElementById(propName);
                    if (propElement && typeof window.pikadayInstances[propName]._onInputBlur === 'function') { propElement.removeEventListener('blur', window.pikadayInstances[propName]._onInputBlur); }
                }
            }, 500);

            //Set the current selection. This will be restricted within the bounds of minDate and maxDate options if they're specified. 
            //You can optionally pass a boolean as the second parameter to prevent triggering of the onSelect callback (true), allowing the date to be set silently.
            if (!isNullOrWhiteSpace(settings[propName]['default'])) {
                var df = settings[propName]['default'].trim();
                if (df && (df.indexOf('/') > 0 || df.indexOf('-') > 0 || df.indexOf('.') > 0 || df.indexOf(',') > 0 || df.indexOf(' ') > 0)) {
                    picker.setDate(df, true);
                }
            }

            //Returns the selected date in a string format.
            //var selectedDateStr = picker.toString(format);

            //Returns a basic JavaScript Date object of the selected day, or null if no selection.
            //var selectedDate = picker.getDate();

        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (initDatepicker 3)', e);
    }
}


var PP_CUSTOM_JS =
    {
        runCustomJsOnDocumentReady: function (api, window, document, $) {
            try {
                //[#######CUSTOM_JS_DOCUMENT_READY_EMBED#######]
            }
            catch (e) {
                //PP_CUSTOM_JS.log('ERROR: runCustomJsOnDocumentReady() - ' + e.message);
                if (tryShowError()) console.log('ERROR (PP_CUSTOM_JS.runCustomJsOnDocumentReady)', e);
            }

            return true;
        },

        runCustomJsBeforePageDisplay: function (api, window, document, $, lightbox_id, variation_id) {
            try {
                //[#######CUSTOM_JS_PAGE_BEFORE_DISPLAY_EMBED#######]
            }
            catch (e) {
                //PP_CUSTOM_JS.log('ERROR: runCustomJsBeforePageDisplay() - ' + e.message);
                if (tryShowError()) console.log('ERROR (PP_CUSTOM_JS.runCustomJsBeforePageDisplay)', e);
            }

            return true;
        },

        runCustomJsOnPageDisplay: function (api, window, document, $, lightbox_id, variation_id) {
            try {
                //[#######CUSTOM_JS_PAGE_DISPLAY_EMBED#######]
            }
            catch (e) {
                //PP_CUSTOM_JS.log('ERROR: runCustomJsOnPageDisplay() - ' + e.message);
                if (tryShowError()) console.log('ERROR (PP_CUSTOM_JS.runCustomJsOnPageDisplay)', e);
            }
        },

        runCustomJsOnPageSubmit: function (api, window, document, $, lightbox_id, variation_id) {
            try {
                //[#######CUSTOM_JS_PAGE_SUBMIT_EMBED#######]
            }
            catch (e) {
                //PP_CUSTOM_JS.log('ERROR: runCustomJsOnPageSubmit() - ' + e.message);
                if (tryShowError()) console.log('ERROR (PP_CUSTOM_JS.runCustomJsOnPageSubmit)', e);
            }
        },

        runCustomJsOnPageRedirect: function (api, window, document, $, lightbox_id, variation_id) {
            try {
                //[#######CUSTOM_JS_PAGE_REDIRECT_EMBED#######]
            }
            catch (e) {
                //PP_CUSTOM_JS.log('ERROR: runCustomJsOnPageRedirect() - ' + e.message);
                if (tryShowError()) console.log('ERROR (PP_CUSTOM_JS.runCustomJsOnPageRedirect)', e);
            }
        },

        runCustomJsOnPageDownload: function (api, window, document, $, lightbox_id, variation_id) {
            try {
                //[#######CUSTOM_JS_PAGE_DOWNLOAD_EMBED#######]
            }
            catch (e) {
                //PP_CUSTOM_JS.log('ERROR: runCustomJsOnPageDownload() - ' + e.message);
                if (tryShowError()) console.log('ERROR (PP_CUSTOM_JS.runCustomJsOnPageDownload)', e);
            }
        },

        runCustomJsOnPageClose: function (api, window, document, $, lightbox_id, variation_id) {
            try {
                //[#######CUSTOM_JS_PAGE_CLOSE_EMBED#######]
            }
            catch (e) {
                //PP_CUSTOM_JS.log('ERROR: runCustomJsOnPageClose() - ' + e.message);
                if (tryShowError()) console.log('ERROR (PP_CUSTOM_JS.runCustomJsOnPageClose)', e);
            }
        },

        log: function (msg) {
            try {
                if (typeof console !== "undefined") {
                    if ((typeof PUSHPLANET_USE_CONSOLE !== "undefined" && PUSHPLANET_USE_CONSOLE) || (typeof PUSHPLANET_IS_QA !== "undefined" && PUSHPLANET_IS_QA === true) || (typeof PUSHPLANET_IS_DEV !== "undefined" && PUSHPLANET_IS_DEV === true)) {
                        if (typeof msg === 'string' && msg.indexOf('PUSHPLANET:') !== 0) {
                            console.log('PUSHPLANET: ' + msg);
                        } else {
                            console.log(msg);
                        }
                    }
                }
            }
            catch (e) {
                if (tryShowError()) console.log('ERROR (PP_CUSTOM_JS.log)', e);
            }
        }
    };

var COOKIE =
{
    set: function (name, value, days) {
        COOKIE.trySet(name, value, true, days);
    },

    setPlain: function (name, value, days) {
        COOKIE.trySet(name, value, false, days);
    },

    trySet: function (name, value, encode, days) {
        var domain, domainParts, date, expires, host;

        var enc = '';
        if (value) {
            if (typeof value === 'object' && Object.prototype.toString.call({}) === Object.prototype.toString.call(value)) {
                value = JSON.stringify(value);
            }

            if (encode) {
                enc = LZString.compressToBase64(value);
            } else {
                enc = value;
            }
        }

        if (typeof days === 'undefined') {
            days = 3650;
        }
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();

        host = location.host;
        if (host.split('.').length === 1) {
            // no "." in a domain - it's localhost or something similar
            document.cookie = name + "=" + enc + expires + "; path=/";
        }
        else
        {
            document.cookie = name + "=" + enc + expires + "; path=/; domain=" + host + "; SameSite=Lax";

            //domainParts = host.split('.').reverse();
            //var wasWritten = false;
            //var idx = 1;
            //var cv = '';

            //while (!wasWritten && idx < domainParts.length) {
            //    domain = "";
            //    for (var i = idx; i >= 0; i--) {
            //        domain += '.' + domainParts[i];
            //    }
            //    document.cookie = name + "=" + enc + expires + "; path=/; domain=" + domain + "; SameSite=Lax";
            //    cv = COOKIE.getPlain(name);
            //    wasWritten = (cv !== null && cv === enc);
            //    idx++;

            //    //if (!wasWritten) {
            //    //    logger('PP Cookie Skipped (' + name + '): ' + domain);
            //    //}
            //}
        }
    },

    get: function (name) {
        var enc = COOKIE.getPlain(name);
        if (enc !== null && typeof enc !== 'undefined' && enc) {
            var v = LZString.decompressFromBase64(enc);
            if (v.indexOf('{') === 0 && v.substring(v.length - 1) === '}') {
                return JSON.parse(v);
            } else {
                return v;
            }
        }
        return null;
    },

    getPlain: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }

            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    erase: function (name) {
        COOKIE.setPlain(name, 'hi', -1);
    },

    eraseWithoutDomain: function (name) {
        var date = new Date();
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        document.cookie = name + "=" + 'hi' + expires + "; path=/";
    },

    eraseWithSpecificDomain: function (name, domain) {
        var date = new Date();
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        document.cookie = name + "=" + 'hi' + expires + "; path=/; domain=" + domain;
    }
};


function loadWidgetEditor() {
    if (typeof easyXDM === 'undefined' || easyXDM === null) {
        setTimeout(function () {
            loadWidgetEditor();
        }, 100);
    } else {
        setTimeout(function () {
            appendJS(document, 'pushplanet.blob.core.windows.net/editor/widget_editor' + PP_STAGE + '.js' + '?cb=' + PP_CACHE_VERSION);
        }, 100);
    }
}


if (PP_MODE === 'editor') {
    appendJS(document, 'cdnjs.cloudflare.com/ajax/libs/easyXDM/2.4.18.25/easyXDM.min.js');
    appendCSS(document, 'pushplanet.blob.core.windows.net/editor/widget_editor' + PP_STAGE + '.css' + '?cb=' + PP_CACHE_VERSION);
    loadWidgetEditor();
} else {
    //appendJS(document, 'cdn.pushplanet.com/static/lz-string-1.4.4-mod.min.js');
    //appendCSS(document, 'cdn.pushplanet.com/editor/widget_hosted' + PP_STAGE + '.css' + '?cb=' + PP_CACHE_VERSION);
    //appendJS(document, 'cdn.pushplanet.com/editor/widget_hosted' + PP_STAGE + '.js' + '?cb=' + PP_CACHE_VERSION);
}



