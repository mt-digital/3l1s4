var IS_REDIRECTING = false;
var KEEN_SCHEMA = {};
var KEEN_CLIENT = null;
var INIT_DEPENDENT_SCRIPTS_HAS_RUN = false;
var IDLE_PERIOD = 5;
var IDLE_INTERVAL = 0;
var TOTAL_INTERVAL = 0;
var IDLE_TIME = 0;
var TOTAL_TIME = 0;
var GEO_IP = {};
var PP_ANALYTICS = {};
var SPLIT_ID = '';
var PP_DATA = {};
var CLIENT_GUID = '';
var INTEGRATIONS = [];
var PP_SUBMIT = {};
var PREF = '';

var PC_ALL_LISTS = [];
var PC_ORIGINAL_LISTS = [];
var PC_FINAL_LISTS = [];
var PC_ORIGINAL_PROFILE = {};
var PC_PROFILE_KEY_MAP = {};
var PC_ERROR_PAGE_FINISHED = false;

var EMAIL_GLOBAL = '';

var COUPONS_FOR_SUBMIT = {};
var COUPONS_FOR_DISPLAY = {};

var processSubmitLock = false;


if (typeof runPC_Z_OnPageLoad !== 'undefined' && (typeof usePC_Z_Prof === 'undefined' || usePC_Z_Prof === 'yes')) {
    runPC_Z_OnPageLoad();
}


if (PAGE_MODE === 'PC') {
    if (PC_PROFILE_OBJ) {
        for (var prop in PC_PROFILE_OBJ) {
            if (PC_PROFILE_OBJ.hasOwnProperty(prop)) {
                PC_ORIGINAL_PROFILE[prop] = PC_PROFILE_OBJ[prop];
            }
        }
    }

    if (PC_LISTS_OBJ) {
        for (var prop in PC_LISTS_OBJ) {
            if (PC_LISTS_OBJ.hasOwnProperty(prop) && !PC_ORIGINAL_LISTS.ArrayContains(prop)) {
                PC_ORIGINAL_LISTS.push(prop);
                PC_FINAL_LISTS.push(prop);
            }
        }
    }

    //logger('PC_ORIGINAL_PROFILE:');
    //logger(PC_ORIGINAL_PROFILE);
    //logger('PC_ORIGINAL_LISTS:');
    //logger(PC_ORIGINAL_LISTS);
}


if (settings.length > 50) {
    settings = JSON.parse(LZString.decompressFromBase64(settings));
}

var PP_KWK = PP_KWK || false;
if (!PP_KWK && typeof(PP_KEEN_WRITE_KEY) != 'undefined')
{
    PP_KWK = PP_KEEN_WRITE_KEY;
}

if (PP_KWK) {
    if (PP_KWK.indexOf("enc-") == 0) //if it starts with lz then it is compressed.
    {
        PP_KWK = LZString.decompressFromBase64(PP_KWK.substr(4));
    }

    //Load Keen Tracker
    !function (name, path, ctx) {
        var latest, prev = name !== 'Keen' && window.Keen ? window.Keen : false; ctx[name] = ctx[name] || { ready: function (fn) { var h = document.getElementsByTagName('head')[0], s = document.createElement('script'), w = window, loaded; s.onload = s.onerror = s.onreadystatechange = function () { if ((s.readyState && !(/^c|loade/.test(s.readyState))) || loaded) { return } s.onload = s.onreadystatechange = null; loaded = 1; latest = w.Keen; if (prev) { w.Keen = prev } else { try { delete w.Keen } catch (e) { w.Keen = void 0 } } ctx[name] = latest; ctx[name].ready(fn) }; s.async = 1; s.src = path; h.parentNode.insertBefore(s, h) } }
    }('KeenAsync', 'https://d26b395fwzu5fz.cloudfront.net/keen-tracking-1.1.3.min.js', this);

    //Init Keen Tracker
    KeenAsync.ready(function () {
        KEEN_CLIENT = new KeenAsync({
            projectId: '5d83f4fac9e77c0001eef013',
            writeKey: PP_KWK
        });
    });
}

window.addEventListener('deviceDetected', function () {
    if (customCSS.length > 2) {
        $('head').append("<style id='custom_css' type='text/css'>" + customCSS + "</style>");
    }

    $('#error_close').click(function () {
        $('#error_bubble').hide();
    });

    $('#success_close').click(function () {
        $('#success_bubble').hide();
    });

    afterDomLoaded();

    $(window).resize(function () {
        onResponsiveDimensionChange($(window).width(), $(window).height());
    });

    if (!isDesktop()) {
        if (typeof ScreenOrientation !== 'undefined' && typeof ScreenOrientation.onchange !== 'undefined') {
            ScreenOrientation.addEventListener('change', function (e) {
                onResponsiveDimensionChange($(window).width(), $(window).height());
                //$('#ep1text1').html('ScreenOrientation.change: ' + $(window).width());
            });
        } else {
            window.addEventListener('orientationchange', function (e) {
                onResponsiveDimensionChange($(window).width(), $(window).height());
                //$('#ep1text1').html('orientationchange: ' + $(window).width());
            });
        }
    }
});

function updateSettings(first_run) {
    try {
        if (PC_ERROR_PAGE && !PC_ERROR_PAGE_FINISHED) {
            if (PC_ERROR_PAGE === 'thank_you_page')
                current_page_name = 'thanks';
            else if (PC_ERROR_PAGE === 'extra_page_1')
                current_page_name = 'ep1';
            else if (PC_ERROR_PAGE === 'extra_page_2')
                current_page_name = 'ep2';
            else if (PC_ERROR_PAGE === 'extra_page_3')
                current_page_name = 'ep3';
            else if (PC_ERROR_PAGE === 'extra_page_4')
                current_page_name = 'ep4';
            else
                current_page_name = 'main';

            logger('updateSettings ==> current_page_name: ' + current_page_name);
        }

        var pref = '';
        if (!current_page_name || current_page_name === 'main') {
            pref = '';
        } else if (current_page_name === 'thanks' || current_page_name === 'thx') {
            pref = 'thx';
        } else {
            pref = current_page_name;
        }

        if (pref && pref.contains('_')) {
            pref = pref.split('_').join('');
        }

        PREF = pref;

        loadExternalFonts(pref, first_run);
        buildStyles(pref);
        //loadGoogleFontsFromStack();

        if (!EMAIL_GLOBAL)
        {
            if (PAGE_MODE === 'PC' && PC_PROFILE_OBJ && PC_PROFILE_OBJ.hasOwnProperty('email'))
            {
                EMAIL_GLOBAL = PC_PROFILE_OBJ['email'] || '';
            }
            else
            {
                EMAIL_GLOBAL = getUrlParam('email') || '';

                if (EMAIL_GLOBAL && EMAIL_GLOBAL.length > 4 && EMAIL_GLOBAL.indexOf('@') < 0)
                {
                    try
                    {
                        EMAIL_GLOBAL = atob(EMAIL_GLOBAL);
                    }
                    catch (erratob)
                    {
                        logger('Error decoding EMAIL_GLOBAL');
                    }
                }

                if (EMAIL_GLOBAL.indexOf(' ') >= 0)
                {
                    EMAIL_GLOBAL = EMAIL_GLOBAL.split(' ').join('+');
                }
            }

            //logger('EMAIL_GLOBAL: ' + EMAIL_GLOBAL);
        }

        for (var n = 1; n <= getNforType('text', pref); n++) {
            buildTextN(pref, n);
        }

        for (var n = 1; n <= getNforType('button', pref); n++) {
            buildButtonN(pref, n);
        }

        for (var n = 1; n <= getNforType('image', pref); n++) {
            buildImageN(pref, n);
        }

        for (var n = 1; n <= getNforType('html', pref); n++) {
            buildHTMLN(pref, n);
        }

        for (var n = 1; n <= getNforType('form', pref); n++) {
            buildFormN(pref, n);
        }

        for (var n = 1; n <= getNforType('field', pref); n++) {
            buildFieldN(pref, n);
        }


        if (!$('#layout_header').length)
        {
            $('#layout').before('<div id="layout_header"></div>');
        }

        if (!$('#layout_footer').length)
        {
            $('#modal_loading').before('<div id="layout_footer"></div>');
        }

        if (settings[pref + 'layout'].hasOwnProperty('header_html') && settings[pref + 'layout']['header_html'].length > 0)
        {
            $('#layout_header').html(settings[pref + 'layout']['header_html']);
        } else if (pref != '' && pref != 'main' && (!settings[pref + 'layout'].hasOwnProperty('header_html') || settings[pref + 'layout']['header_html'].length == 0) && (settings['layout'].hasOwnProperty('header_html') && settings['layout']['header_html'].length > 0))
        {
            $('#layout_header').html(settings['layout']['header_html']);
        } else
        {
            $('#layout_header').html('');
        }

        if (settings[pref + 'layout'].hasOwnProperty('footer_html') && settings[pref + 'layout']['footer_html'].length > 0)
        {
            $('#layout_footer').html(settings[pref + 'layout']['footer_html']);
        } else if (pref != '' && pref != 'main' && (!settings[pref + 'layout'].hasOwnProperty('footer_html') || settings[pref + 'layout']['footer_html'].length == 0) && (settings['layout'].hasOwnProperty('footer_html') && settings['layout']['footer_html'].length > 0))
        {
            $('#layout_footer').html(settings['layout']['footer_html']);
        } else
        {
            $('#layout_footer').html('');
        }

        //COUPONS
        if (first_run)
        {
            buildCouponsDisplay();
            replaceSpecialMergeTags();
        }
        else
        {
            buildCouponsSubmit();
        }

        if (PC_ERROR_PAGE && !PC_ERROR_PAGE_FINISHED) {
            var prefArr = ['', 'thx', 'ep1', 'ep2', 'ep3', 'ep4'];
            for (var p = 0; p < prefArr.length; p++) {
                if (pref === prefArr[p]) {
                    //$('#' + pref + 'layout').show();
                    document.getElementById(pref + 'layout').style.display = 'block';
                    CURRENT_WIDTH = settings[pref + 'layout'].width;
                    CURRENT_HEIGHT = settings[pref + 'layout'].height;
                    CURRENT_PAGE = pref || 'main';

                    logger('updateSettings ==> PC_ERROR_PAGE ==> $(#' + pref + 'layout).show()');
                }
                else {
                    //$('#' + prefArr[p] + 'layout').hide();
                    document.getElementById(prefArr[p] + 'layout').style.display = 'none';
                }
            }

            PC_ERROR_PAGE_FINISHED = true;
        }

        if (first_run) {
            //Run on page load
            onResponsiveDimensionChange($(window).width(), $(window).height());

            //Run again after delay, to give images time to load and define their dimensions, this can potentially be a race condition
            setTimeout(function () {
                onResponsiveDimensionChange($(window).width(), $(window).height());
            }, 200);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (updateSettings)', e);
    }
}

function buildStyles(pref) {
    try {
        $('#element_styles').remove();
        var str = "";
        var x = 0;
        var ptn = '';

        //**************
        //General Styles
        //**************

        //Float Left
        str += ".float_left {";
        str += getFloatLeftStyle();
        str += "} ";

        //Float Right
        str += ".float_right {";
        str += getFloatRightStyle();
        str += "} ";


        //**************
        //Element Styles
        //**************

        logger("function buildStyles(pref) - " + pref);

        ptn = pref + 'layout';


        if (settings && settings.hasOwnProperty(ptn)) {
            //Page Outer Background
            str += "body {";
            str += getBackgroundStyle(settings[ptn].background_outer);
            str += "} ";

            //Page Layout Inner
            str += "." + ptn + " {";
            str += getPositionRelativeStyle();
            str += getBorderStyle(settings[ptn].border);
            str += getBackgroundStyle(settings[ptn].background);
            str += getWidthStyle(settings[ptn].width);
            str += getHeightStyle(settings[ptn].height);
            str += getOverflowHiddenStyle();
            str += getGeneralStyle('padding', '0');
            if (settings[ptn].hasOwnProperty('align') && settings[ptn].align == 'left') {
                str += getGeneralStyle('margin-left', '0');
            } else {
                str += getGeneralStyle('margin-left', 'auto');
                str += getGeneralStyle('margin-right', 'auto');
            }
            if (settings[ptn].hasOwnProperty('margin_top') && settings[ptn].margin_top) {
                str += getGeneralStyle('margin-top', settings[ptn].margin_top + 'px');
            } else {
                str += getGeneralStyle('margin-top', '0');
            }
            str += "} ";
        }


        for (var n = 1; n <= getNforType('text', pref); n++) {
            ptn = pref + 'text' + n;
            if (settings[ptn] && !settings[ptn].deleted) {
                //Text N Wrapper
                str += "." + ptn + "_wrapper {";
                str += getDisplayStyle(settings[ptn].display);
                //str += getPositionRelativeStyle();
                str += getPositionAbsoluteStyle();
                str += getLeftTopWidthHeightStyle(settings[ptn]);
                if (settings[ptn].hasOwnProperty('zindex') && settings[ptn].zindex !== 1000 && settings[ptn].zindex !== 100000) {
                    str += getZindexStyle(settings[ptn].zindex);
                }
                str += "} ";

                //Text N
                str += "." + ptn + " {";
                str += getFontStyle(settings[ptn].font);
                if (settings[ptn].hasOwnProperty('css') && settings[ptn].css) {
                    str += settings[ptn].css;
                }
                str += "} ";
            }
        }

        for (var n = 1; n <= getNforType('button', pref); n++) {
            ptn = pref + 'button' + n;
            if (settings[ptn] && !settings[ptn].deleted) {
                //Button N - Wrapper
                str += "." + ptn + "_wrapper {";
                str += getDisplayStyle(settings[ptn].display);
                //str += getPositionRelativeStyle();
                str += getPositionAbsoluteStyle();
                str += getLeftTopWidthHeightStyle(settings[ptn]);
                if (settings[ptn].hasOwnProperty('zindex') && settings[ptn].zindex !== 1000 && settings[ptn].zindex !== 100000) {
                    str += getZindexStyle(settings[ptn].zindex);
                }
                str += "} ";

                //Button N
                str += "." + ptn + " {";
                str += getFontStyle(settings[ptn].font);
                str += getBorderStyle(settings[ptn].border);
                str += getBackgroundStyle(settings[ptn].background);
                str += getWidthPercentStyle(100);
                str += getHeightPercentStyle(100);
                str += getGeneralStyle('cursor', 'pointer');
                if (settings[ptn].hasOwnProperty('css') && settings[ptn].css) {
                    str += settings[ptn].css;
                }
                //str += getGeneralStyle('display', 'inline-flex');
                //str += getGeneralStyle('align-items', 'center');
                //str += getGeneralStyle('text-align', 'center');
                //str += getGeneralStyle('display', 'table-cell');
                //str += getGeneralStyle('display', 'inline-block');
                //str += getGeneralStyle('vertical-align', 'middle');
                //str += getGeneralStyle('line-height', Math.round(settings[ptn].height) + 'px');
                str += "} ";

                //Button N - Hover
                str += "#" + ptn + "." + ptn + "_hover {";
                str += getFontStyle(settings[ptn].font_hover);
                str += getBorderStyle(settings[ptn].border_hover);
                str += getBackgroundStyle(settings[ptn].background_hover);
                str += "} ";

                //Button N - Focus
                str += "#" + ptn + "." + ptn + "_focus {";
                str += getFontStyle(settings[ptn].font_focus);
                str += getBorderStyle(settings[ptn].border_focus);
                str += getBackgroundStyle(settings[ptn].background_focus);
                str += "} ";
            }
        }

        for (var n = 1; n <= getNforType('image', pref); n++) {
            ptn = pref + 'image' + n;
            if (settings[ptn] && !settings[ptn].deleted) {
                //Image N Wrapper
                str += "." + ptn + "_wrapper {";
                str += getDisplayStyle(settings[ptn].display);
                //str += getPositionRelativeStyle();
                str += getPositionAbsoluteStyle();
                str += getLeftTopWidthHeightStyle(settings[ptn]);
                if (settings[ptn].hasOwnProperty('zindex') && settings[ptn].zindex !== 1000 && settings[ptn].zindex !== 100000) {
                    str += getZindexStyle(settings[ptn].zindex);
                }
                str += "} ";

                //Image N
                str += "." + ptn + " {";
                str += getBorderStyle(settings[ptn].border);
                str += getGeneralStyle("padding", settings[ptn].padding + "px");
                if (settings[ptn].hasOwnProperty('css') && settings[ptn].css) {
                    str += settings[ptn].css;
                }
                str += "} ";
            }
        }

        for (var n = 1; n <= getNforType('html', pref); n++) {
            ptn = pref + 'html' + n;
            if (settings[ptn] && !settings[ptn].deleted) {
                //HTML N Wrapper
                str += "." + ptn + "_wrapper {";
                str += getDisplayStyle(settings[ptn].display);
                //str += getPositionRelativeStyle();
                str += getPositionAbsoluteStyle();
                str += getLeftTopWidthHeightStyle(settings[ptn]);
                if (settings[ptn].hasOwnProperty('zindex') && settings[ptn].zindex !== 1000 && settings[ptn].zindex !== 100000) {
                    str += getZindexStyle(settings[ptn].zindex);
                }
                str += "} ";

                //HTML N
                str += "." + ptn + " {";
                if (settings[ptn].hasOwnProperty('css') && settings[ptn].css) {
                    str += settings[ptn].css;
                }
                str += "} ";
            }
        }

        for (var n = 1; n <= getNforType('field', pref); n++) {
            ptn = pref + 'field' + n;
            if (settings[ptn] && !settings[ptn].deleted) {
                //Field N Wrapper
                str += "." + ptn + "_wrapper {";
                str += getDisplayStyle(settings[ptn].display);
                //str += getPositionRelativeStyle();
                str += getPositionAbsoluteStyle();
                str += getGeneralStyle("padding", "0");
                str += getOverflowVisibleStyle();
                str += getGeneralStyle("z-index", "10000");
                //str += getHeightStyle(settings[ptn].height);
                str += getLeftTopWidthHeightStyle(settings[ptn]);
                if (settings[ptn].hasOwnProperty('zindex') && settings[ptn].zindex !== 1000 && settings[ptn].zindex !== 100000) {
                    str += getZindexStyle(settings[ptn].zindex);
                }
                str += "} ";

                //Field N
                str += "." + ptn + " {";
                str += getFontStyle(settings[ptn].font);
                str += getBorderStyle(settings[ptn].border);
                str += getBackgroundStyle(settings[ptn].background);

                str += getHeightStyle(settings[ptn].height - 30);
                str += getGeneralStyle("-webkit-box-sizing", "border-box");
                str += getGeneralStyle("-moz-box-sizing", "border-box");
                str += getGeneralStyle("box-sizing", "border-box");
                if (settings[ptn]['type'] !== 'checkbox') {
                    str += getWidthPercentStyle(100);
                    str += getOverflowHiddenStyle();
                    str += getGeneralStyle("padding-left", "5px");
                    str += getGeneralStyle("padding-right", "5px");
                } else {
                    str += getGeneralStyle("padding", "0px");
                    str += getWidthStyle(settings[ptn].height - 30);
                    //we want width to be equal to height, by default, for checkboxes
                }
                str += getGeneralStyle("margin", "0px");
                //str += getGeneralStyle("z-index", "1000");
                if (settings[ptn].hasOwnProperty('css') && settings[ptn].css) {
                    str += settings[ptn].css;
                }
                str += "} ";

                //Field N - Hover
                str += "#" + ptn + "." + ptn + "_hover {";
                str += getBorderStyle(settings[ptn].border_hover);
                str += getBackgroundStyle(settings[ptn].background_hover);
                str += "} ";

                //Field N - Focus
                str += "#" + ptn + "." + ptn + "_focus {";
                str += getBorderStyle(settings[ptn].border_focus);
                str += getBackgroundStyle(settings[ptn].background_focus);
                str += "} ";

                //Field N - Error
                str += "#" + ptn + "." + ptn + "_error {";
                str += getBorderStyle(settings[ptn].border_error);
                str += getBackgroundStyle(settings[ptn].background_error);
                str += "} ";
            }
        }

        $('head').append("<style id='element_styles' type='text/css'>" + str + "</style>");
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildStyles)', e);
    }
}

function trySetAttribute(dom_id, kvp) {
    try {
        //attribute name is invalid so it will throw an error
        //var element = document.getElementById("myElement");
        //element.setAttribute("", "value");

        var did = '#' + dom_id;
        if (dom_id == 'body')
            did = 'body';

        if (kvp.k === undefined || kvp.k === null || kvp.k === '')
            return;
        if (kvp.k === 'class')
            $(did).addClass(kvp.v);
        else
            $(did).attr(kvp.k, kvp.v);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildStyles)', e);
    }
}

function setMetaDataAttributes(ptn) {
    if (settings[ptn].metadata_kvps && settings[ptn].metadata_kvps.length) {
        for (var k = 0; k < settings[ptn].metadata_kvps.length; k++) {
            if (settings[ptn].metadata_kvps[k].k && settings[ptn].metadata_kvps[k].v) {
                trySetAttribute(ptn, settings[ptn].metadata_kvps[k]);
            }
        }
    }
}

function buildTextN(pref, n) {
    try {
        var ptn = pref + 'text' + n;
        if (!settings.hasOwnProperty(ptn) || !settings[ptn] || !settings[ptn].hasOwnProperty('display') || !settings[ptn].hasOwnProperty('text') || !settings[ptn].display || settings[ptn].deleted) {
            return;
        } else if (!$('#' + ptn).length) {
            $('#' + pref + 'layout').append('<div id="' + ptn + '_wrapper" class="' + ptn + '_wrapper transparent-border"><div id="' + ptn + '" class="' + ptn + '"></div></div>');
            if (settings[ptn].text)
            {
                if (settings[ptn].text.contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
                {
                    settings[ptn].text = settings[ptn].text.split('[EMAIL]').join(EMAIL_GLOBAL);
                }

                $('#' + ptn).html(settings[ptn].text);
            }

            setMetaDataAttributes(ptn);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildTextN)', e);
    }
}

function buildHTMLN(pref, n) {
    try {
        var ptn = pref + 'html' + n;
        if (!settings.hasOwnProperty(ptn) || !settings[ptn] || !settings[ptn].hasOwnProperty('display') || !settings[ptn].hasOwnProperty('html') || !settings[ptn].display || settings[ptn].deleted) {
            return;
        } else if (!$('#' + ptn).length) {
            $('#' + pref + 'layout').append('<div id="' + ptn + '_wrapper" class="' + ptn + '_wrapper transparent-border"><div id="' + ptn + '" class="' + ptn + '"></div></div>');
            buildHTMLItemAndEvalJSFromHtml(ptn);            
            setMetaDataAttributes(ptn);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildHTMLN)', e);
    }
}

function buildButtonN(pref, n) {
    try {
        var ptn = pref + 'button' + n;
        if (!settings.hasOwnProperty(ptn) || !settings[ptn] || !settings[ptn].hasOwnProperty('display') || !settings[ptn].display || settings[ptn].deleted) {
            return;
        }
        else if (!$('#' + ptn).length) {
            $('#' + pref + 'layout').append('<div id="' + ptn + '_wrapper" class="' + ptn + '_wrapper transparent-border"><button id="' + ptn + '" class="' + ptn + '"></button></div>');
            buildButtonInteraction(pref, n);

            setMetaDataAttributes(ptn);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildButtonN)', e);
    }
}

function buildImageN(pref, n) {
    try {
        var ptn = pref + 'image' + n;
        if (!settings.hasOwnProperty(ptn) || !settings[ptn] || !settings[ptn].hasOwnProperty('display') || !settings[ptn].display || settings[ptn].deleted || !settings[ptn].src || settings[ptn].src == 'none' || settings[ptn].src.length < 5) {
            return;
        }
        else if (!$('#' + ptn).length) {
            $('#' + pref + 'layout').append('<div id="' + ptn + '_wrapper" class="' + ptn + '_wrapper transparent-border"><img id="' + ptn + '" class="' + ptn + '" /></div>');
            //buildImageSource($('#' + ptn), $('#' + ptn + '_wrapper'), ptn, settings[ptn]);
            buildImageSource(pref, n);
            setMetaDataAttributes(ptn);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildImageN)', e);
    }
}

function buildFormN(pref, n) {
    try {
        var ptn = pref + 'form' + n;
        if (!settings.hasOwnProperty(ptn) || !settings[ptn] || settings[ptn].deleted) {
            return;
        }
        else if (!$('#' + ptn).length) {
            //Forms won't technically take up any UI space.  They are purely semantic.
            //build associations with fields, submit actions, etc.
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildFormN)', e);
    }
}


var AreCheckboxChangesLocked = false;

function buildFieldN(pref, n) {
    try {
        var ptn = pref + 'field' + n;
        if (!settings.hasOwnProperty(ptn) || !settings[ptn] || !settings[ptn].hasOwnProperty('display') || !settings[ptn].hasOwnProperty('type') || !settings[ptn].display || settings[ptn].deleted) {
            return;
        }
        else {
            if (!$('#' + ptn).length) {
                var type = settings[ptn]['type'];

                if (type === 'textbox') {
                    $('#' + pref + 'layout').append("<div id='" + ptn + "_wrapper' class='" + ptn + "_wrapper'><input type='text' id='" + ptn + "' class='" + ptn + " textbox_field' /></div>");
                } else if (type === 'textarea') {
                    $('#' + pref + 'layout').append("<div id='" + ptn + "_wrapper' class='" + ptn + "_wrapper'><textarea id='" + ptn + "' class='" + ptn + " textarea_field'></textarea></div>");
                } else if (type === 'datepicker') {
                    $('#' + pref + 'layout').append("<div id='" + ptn + "_wrapper' class='" + ptn + "_wrapper'><input type='text' id='" + ptn + "' class='" + ptn + " datepicker_field' /></div>");
                } else if (type === 'dropdown') {
                    $('#' + pref + 'layout').append("<div id='" + ptn + "_wrapper' class='" + ptn + "_wrapper'><select id='" + ptn + "' class='" + ptn + " dropdown_field'></select></div>");
                } else if (type === 'checkbox') {
                    $('#' + pref + 'layout').append("<div id='" + ptn + "_wrapper' class='" + ptn + "_wrapper'><input type='checkbox' id='" + ptn + "' class='" + ptn + " checkbox_field' /></div>");
                } else if (type === 'hidden') {
                    $('#' + pref + 'layout').append("<input type='hidden' id='" + ptn + "' class='" + ptn + " hidden_field' />");
                    if (settings[ptn].hasOwnProperty('default') && settings[ptn]['default']) {
                        $('#' + ptn).val(settings[ptn]['default']);
                    }
                }

                setMetaDataAttributes(ptn);

                //Hover State
                $('#' + ptn).hover(function () {
                    $(this).addClass(ptn + "_hover");
                }, function () {
                    $(this).removeClass(ptn + "_hover");
                });

                //Focus State
                $('#' + ptn).focus(function () {
                    $(this).addClass(ptn + "_focus");
                }).blur(function () {
                    $(this).removeClass(ptn + "_focus");
                });


                if (type === 'textbox') {
                    if (PAGE_MODE === 'PC') {
                        if (settings[ptn].hasOwnProperty('key_name') && settings[ptn]['key_name'].toLowerCase().trim() === 'email' && PC_PROFILE_OBJ && PC_PROFILE_OBJ.hasOwnProperty('email')) {
                            $('#' + ptn).val(PC_PROFILE_OBJ['email']);
                            PC_PROFILE_KEY_MAP['email'] = ptn;
                        } else if (settings[ptn].hasOwnProperty('key_name') && settings[ptn]['key_name'].toLowerCase().trim() === 'name' && PC_PROFILE_OBJ && PC_PROFILE_OBJ.hasOwnProperty('name')) {
                            $('#' + ptn).val(PC_PROFILE_OBJ['name']);
                            PC_PROFILE_KEY_MAP['name'] = ptn;
                        } else if (settings[ptn].hasOwnProperty('key_name') && settings[ptn]['key_name'].toLowerCase().trim() === 'first_name' && PC_PROFILE_OBJ && PC_PROFILE_OBJ.hasOwnProperty('first_name')) {
                            $('#' + ptn).val(PC_PROFILE_OBJ['first_name']);
                            PC_PROFILE_KEY_MAP['first_name'] = ptn;
                        } else if (settings[ptn].hasOwnProperty('key_name') && settings[ptn]['key_name'].toLowerCase().trim() === 'last_name' && PC_PROFILE_OBJ && PC_PROFILE_OBJ.hasOwnProperty('last_name')) {
                            $('#' + ptn).val(PC_PROFILE_OBJ['last_name']);
                            PC_PROFILE_KEY_MAP['last_name'] = ptn;
                        } else if (settings[ptn].hasOwnProperty('key_name') && settings[ptn]['key_name'] && PC_PROFILE_OBJ && PC_PROFILE_OBJ.hasOwnProperty(settings[ptn]['key_name']) && PC_PROFILE_OBJ[settings[ptn]['key_name']].length > 0) {
                            //This should cover the 4 cases above too.  Just leaving those in for clarity sake.
                            $('#' + ptn).val(PC_PROFILE_OBJ[settings[ptn]['key_name']]);
                            PC_PROFILE_KEY_MAP[settings[ptn]['key_name']] = ptn;
                        } else if (settings[ptn].hasOwnProperty('default') && settings[ptn]['default']) {
                            $('#' + ptn).val(settings[ptn]['default']);
                        }
                    } else if (settings[ptn].hasOwnProperty('default') && settings[ptn]['default']) {
                        $('#' + ptn).val(settings[ptn]['default']);
                    }

                    if ($('#' + ptn).val().contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
                    {
                        $('#' + ptn).val($('#' + ptn).val().split('[EMAIL]').join(EMAIL_GLOBAL));
                    }

                    if (settings[ptn].hasOwnProperty('placeholder') && settings[ptn].placeholder)
                    {
                        if (settings[ptn].placeholder.contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
                        {
                            settings[ptn].placeholder = settings[ptn].placeholder.split('[EMAIL]').join(EMAIL_GLOBAL);
                        }

                        $('#' + ptn).attr('placeholder', settings[ptn].placeholder);
                    }

                } else if (type === 'textarea') {
                    if (settings[ptn].hasOwnProperty('placeholder') && settings[ptn].placeholder)
                    {
                        if (settings[ptn].placeholder.contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
                        {
                            settings[ptn].placeholder = settings[ptn].placeholder.split('[EMAIL]').join(EMAIL_GLOBAL);
                        }

                        $('#' + ptn).attr('placeholder', settings[ptn].placeholder);
                    }

                    if (settings[ptn].hasOwnProperty('default') && settings[ptn]['default']) {
                        $('#' + ptn).val(settings[ptn]['default']);
                    }

                    if ($('#' + ptn).val().contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
                    {
                        $('#' + ptn).val($('#' + ptn).val().split('[EMAIL]').join(EMAIL_GLOBAL));
                    }

                } else if (type === 'datepicker') {
                    if (settings[ptn].hasOwnProperty('placeholder') && settings[ptn].placeholder) {
                        $('#' + ptn).attr('placeholder', settings[ptn].placeholder);
                    }

                    if (settings[ptn].hasOwnProperty('default') && settings[ptn]['default']) {
                        $('#' + ptn).val(settings[ptn]['default']);
                    }

                    initDatepicker(pref, ptn);

                    if (settings[ptn].datepicker.hasOwnProperty('theme')) {
                        if (settings[ptn].datepicker.theme === 'dark' && !$('#pikaday_dark_stylesheet').length) {
                            appendCSS(document, 'cdn.pushplanet.com/static/pikaday_dark.css', { "id": "pikaday_dark_stylesheet" });
                        } else if ((settings[ptn].datepicker.theme === 'light' || settings[ptn].datepicker.theme === '') && $('#pikaday_dark_stylesheet').length) {
                            $("#pikaday_dark_stylesheet").attr("disabled", "disabled");
                        } else if (settings[ptn].datepicker.theme === 'dark' && $('#pikaday_dark_stylesheet').length) {
                            $("#pikaday_dark_stylesheet").removeAttr("disabled");
                        }
                    }

                } else if (type === 'dropdown') {
                    if (settings[ptn].dropdown_kvps.length) {
                        var dropdown = $('#' + ptn);
                        dropdown.empty();
                        var kvps = settings[ptn].dropdown_kvps;
                        for (var i = 0; i < kvps.length; i++) {
                            if (settings[ptn]['default'] && (kvps[i].k === settings[ptn]['default'] || kvps[i].v == settings[ptn]['default'])) {
                                dropdown.append("<option selected value='" + kvps[i].k + "'>" + kvps[i].v + "</option>");
                            } else {
                                dropdown.append("<option value='" + kvps[i].k + "'>" + kvps[i].v + "</option>");
                            }
                        }
                    }
                } else if (type === 'checkbox') {
                    if (PAGE_MODE === 'PC' && settings[ptn].checkbox.pref_ctr_list_id && PC_LISTS_OBJ && PC_LISTS_OBJ.hasOwnProperty(settings[ptn].checkbox.pref_ctr_list_id)) {
                        $("#" + ptn).prop('checked', true);
                    } else if (PAGE_MODE === 'LP' && settings[ptn].checkbox.hasOwnProperty('default') && settings[ptn].checkbox['default'] === 'on') {
                        $("#" + ptn).prop('checked', true);
                    } else {
                        $("#" + ptn).prop('checked', false);
                    }


                    
                    $('#' + ptn).change(function ()
                    {
                        if (!AreCheckboxChangesLocked)
                        {
                            AreCheckboxChangesLocked = true;

                            var this_checked = document.getElementById(ptn).checked;

                            if (settings[ptn].checkbox.other_checkboxes_action)
                            {
                                for (var p = 0; p < 100; p++)
                                {
                                    if (p !== n)
                                    {
                                        var ptn_other = pref + 'field' + p;
                                        if (!settings.hasOwnProperty(ptn_other) || !settings[ptn_other] || !settings[ptn_other].hasOwnProperty('display') || !settings[ptn_other].hasOwnProperty('type') || !settings[ptn_other].display || settings[ptn_other].deleted || settings[ptn_other]['type'] !== 'checkbox' || settings[ptn_other].checkbox.other_checkboxes_action)
                                        {
                                            //skip this other checkbox then
                                        }
                                        else
                                        {
                                            if (settings[ptn].checkbox.other_checkboxes_action == 'all_uncheck' && this_checked)
                                            {
                                                document.getElementById(ptn_other).checked = false;
                                            }
                                            else if (settings[ptn].checkbox.other_checkboxes_action == 'all_check' && this_checked)
                                            {
                                                //if (!settings[ptn_other].key_name || settings[ptn_other].key_name.toLowerCase().split(' ').join('').split('-').join('').split('_').join('').indexOf('unsubscribeall') < 0)
                                                document.getElementById(ptn_other).checked = true;
                                            }
                                            else if (settings[ptn].checkbox.other_checkboxes_action == 'all_mirror')
                                            {
                                                document.getElementById(ptn_other).checked = this_checked;
                                            }
                                            else if (settings[ptn].checkbox.other_checkboxes_action == 'all_mirror_inverse')
                                            {
                                                document.getElementById(ptn_other).checked = !this_checked;
                                            }
                                        }
                                    }
                                }
                            }
                            else
                            {
                                var those_unchecked = [];
                                var those_checked = [];

                                if (this_checked)
                                    those_checked.push(ptn);
                                else
                                    those_unchecked.push(ptn);

                                for (var p = 0; p < 100; p++)
                                {
                                    if (p !== n)
                                    {
                                        var ptn_other = pref + 'field' + p;
                                        if (!settings.hasOwnProperty(ptn_other) || !settings[ptn_other] || !settings[ptn_other].hasOwnProperty('display') || !settings[ptn_other].hasOwnProperty('type') || !settings[ptn_other].display || settings[ptn_other].deleted || settings[ptn_other]['type'] !== 'checkbox')
                                        {
                                            //skip this other checkbox then
                                        }
                                        else
                                        {
                                            if (settings[ptn_other].checkbox.other_checkboxes_response)
                                            {
                                                if (settings[ptn_other].checkbox.other_checkboxes_response == 'any_check_uncheck' && this_checked)
                                                {
                                                    document.getElementById(ptn_other).checked = false;
                                                }
                                                else if (settings[ptn_other].checkbox.other_checkboxes_response == 'any_check_check' && this_checked)
                                                {
                                                    document.getElementById(ptn_other).checked = true;
                                                }
                                                else if (settings[ptn_other].checkbox.other_checkboxes_response == 'any_uncheck_uncheck' && !this_checked)
                                                {
                                                    document.getElementById(ptn_other).checked = false;
                                                }
                                                else if (settings[ptn_other].checkbox.other_checkboxes_response == 'any_uncheck_check' && !this_checked)
                                                {
                                                    document.getElementById(ptn_other).checked = true;
                                                }
                                            }

                                            if (document.getElementById(ptn_other).checked)
                                                those_checked.push(ptn_other);
                                            else
                                                those_unchecked.push(ptn_other);
                                        }
                                    }
                                }

                                for (var p = 0; p < 100; p++)
                                {
                                    if (p !== n)
                                    {
                                        var ptn_other = pref + 'field' + p;
                                        if (!settings.hasOwnProperty(ptn_other) || !settings[ptn_other] || !settings[ptn_other].hasOwnProperty('display') || !settings[ptn_other].hasOwnProperty('type') || !settings[ptn_other].display || settings[ptn_other].deleted || settings[ptn_other]['type'] !== 'checkbox')
                                        {
                                            //skip this other checkbox then
                                        }
                                        else
                                        {
                                            if (settings[ptn_other].checkbox.other_checkboxes_response)
                                            {
                                                if (settings[ptn_other].checkbox.other_checkboxes_response == 'all_check_uncheck' && (those_unchecked.length == 0 || those_unchecked.length == 1 && those_unchecked[0] == ptn_other))
                                                {
                                                    document.getElementById(ptn_other).checked = false;
                                                }
                                                else if (settings[ptn_other].checkbox.other_checkboxes_response == 'all_check_check' && (those_unchecked.length == 0 || those_unchecked.length == 1 && those_unchecked[0] == ptn_other))
                                                {
                                                    document.getElementById(ptn_other).checked = true;
                                                }
                                                else if (settings[ptn_other].checkbox.other_checkboxes_response == 'all_uncheck_uncheck' && (those_checked.length == 0 || those_checked.length == 1 && those_checked[0] == ptn_other))
                                                {
                                                    document.getElementById(ptn_other).checked = false;
                                                }
                                                else if (settings[ptn_other].checkbox.other_checkboxes_response == 'all_uncheck_check' && (those_checked.length == 0 || those_checked.length == 1 && those_checked[0] == ptn_other))
                                                {
                                                    document.getElementById(ptn_other).checked = true;
                                                }
                                            }

                                            //var is_other_subscribe_all = (settings[ptn_other].key_name && settings[ptn_other].key_name.toLowerCase().split(' ').join('').split('-').join('').split('_').join('').indexOf('subscribeall') == 0);
                                            //var is_other_unsubscribe_all = (settings[ptn_other].key_name && settings[ptn_other].key_name.toLowerCase().split(' ').join('').split('-').join('').split('_').join('').indexOf('unsubscribeall') == 0);

                                            //if (is_this_subscribe_all && this_checked && is_other_unsubscribe_all)
                                            //{
                                            //    document.getElementById(ptn_other).checked = false;
                                            //    console.log('is_this_subscribe_all, is_other_unsubscribe_all');
                                            //}

                                            //if (is_this_unsubscribe_all && this_checked && is_other_subscribe_all)
                                            //{
                                            //    document.getElementById(ptn_other).checked = false;
                                            //    console.log('is_this_unsubscribe_all, is_other_subscribe_all');
                                            //}
                                        }
                                    }
                                }
                            }


                            var is_this_subscribe_all = (settings[ptn].key_name && settings[ptn].key_name.toLowerCase().split(' ').join('').split('-').join('').split('_').join('').indexOf('subscribeall') == 0);
                            var is_this_unsubscribe_all = (settings[ptn].key_name && settings[ptn].key_name.toLowerCase().split(' ').join('').split('-').join('').split('_').join('').indexOf('unsubscribeall') == 0);

                            if (is_this_subscribe_all && this_checked)
                            {
                                for (var p = 0; p < 100; p++)
                                {
                                    if (p !== n)
                                    {
                                        var ptn_other = pref + 'field' + p;
                                        if (!settings.hasOwnProperty(ptn_other) || !settings[ptn_other] || !settings[ptn_other].hasOwnProperty('display') || !settings[ptn_other].hasOwnProperty('type') || !settings[ptn_other].display || settings[ptn_other].deleted || settings[ptn_other]['type'] !== 'checkbox')
                                        {
                                            //skip this other checkbox then
                                        }
                                        else if (settings[ptn_other].key_name && settings[ptn_other].key_name.toLowerCase().split(' ').join('').split('-').join('').split('_').join('').indexOf('unsubscribeall') == 0)
                                        {
                                            document.getElementById(ptn_other).checked = false;
                                        }
                                    }
                                }
                            }

                            if (is_this_unsubscribe_all && this_checked)
                            {
                                for (var p = 0; p < 100; p++)
                                {
                                    if (p !== n)
                                    {
                                        var ptn_other = pref + 'field' + p;
                                        if (!settings.hasOwnProperty(ptn_other) || !settings[ptn_other] || !settings[ptn_other].hasOwnProperty('display') || !settings[ptn_other].hasOwnProperty('type') || !settings[ptn_other].display || settings[ptn_other].deleted || settings[ptn_other]['type'] !== 'checkbox')
                                        {
                                            //skip this other checkbox then
                                        }
                                        else if (settings[ptn_other].key_name && settings[ptn_other].key_name.toLowerCase().split(' ').join('').split('-').join('').split('_').join('').indexOf('subscribeall') == 0)
                                        {
                                            document.getElementById(ptn_other).checked = false;
                                        }
                                    }
                                }
                            }


                            AreCheckboxChangesLocked = false;
                        }
                    });
                    
                } else if (type === 'hidden') {
                    if (settings[ptn].hasOwnProperty('default') && settings[ptn]['default'])
                    {
                        $('#' + ptn).val(settings[ptn]['default']);
                    }

                    if ($('#' + ptn).val().contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
                    {
                        $('#' + ptn).val($('#' + ptn).val().split('[EMAIL]').join(EMAIL_GLOBAL));
                    }
                } 


                if (PAGE_MODE === 'PC' && typeof run_BT_PopulateOnPageLoad !== 'undefined') {
                    run_BT_PopulateOnPageLoad(ptn, settings[ptn]);
                } 

                if (PAGE_MODE === 'PC' && typeof run_IT_PopulateOnPageLoad !== 'undefined') {
                    run_IT_PopulateOnPageLoad(ptn, settings[ptn]);
                } 

                if (settings[ptn]['type'] === 'textbox' || settings[ptn]['type'] === 'dropdown') {
                    //Hit Enter Key
                    $('#' + ptn).keypress(function (e) {
                        if (e.which === 13) {
                            e.preventDefault();
                            processSubmit(pref, settings[ptn]['form']);
                        }
                    });
                }
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildFieldN)', e);
    }
}

function buildHTMLItemAndEvalJSFromHtml(ptn) {
    try {
        if (!settings[ptn].html) {
            return;
        }
        else if (settings[ptn].html.indexOf("script") === -1)
        {
            if (settings[ptn].html.contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
            {
                settings[ptn].html = settings[ptn].html.split('[EMAIL]').join(EMAIL_GLOBAL);
            }

            $('#' + ptn).html(settings[ptn].html);
        }
        else
        {
            if (settings[ptn].html.contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
            {
                settings[ptn].html = settings[ptn].html.split('[EMAIL]').join(EMAIL_GLOBAL);
            }

            var element = document.getElementById(ptn);
            element.innerHTML = settings[ptn].html;

            var scripts = element.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; ++i) {
                var script = scripts[i];
                if (script.innerHTML && script.innerHTML.length > 0) {
                    eval(script.innerHTML);
                    logger('buildHTMLItemAndEvalJSFromHtml: inline eval script #' + i + ' ==> (' + script.innerHTML.length + ')');
                } else if (script.hasAttribute("src")) {
                    var elSrc = script.getAttribute("src");
                    if (typeof elSrc === 'string' && elSrc.indexOf('//') >= 0) {
                        var elRef = document.createElement('script');
                        elRef.setAttribute("type", "text/javascript");
                        elRef.setAttribute("src", elSrc);
                        elRef.async = true;
                        document.getElementsByTagName("head")[0].appendChild(elRef);
                        logger('buildHTMLItemAndEvalJSFromHtml: external load script #' + i + ' ==> (' + elSrc + ')');
                    }
                }
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildHTMLItemAndEvalJSFromHtml)', e);
    }
}

function buildButtonInteraction(pref, n) {
    try
    {
        var ptn = pref + 'button' + n;
        var prop = settings[ptn];
        var elWrapper = $('#' + ptn + '_wrapper');
        var el = $('#' + ptn);

        if (prop.display)
        {
            if (prop.text && prop.text.contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
            {
                prop.text = prop.text.split('[EMAIL]').join(EMAIL_GLOBAL);
            }

            el.html(prop.text);

            //Hover State
            el.hover(function () {
                $(this).addClass(ptn + '_hover');
            }, function () {
                $(this).removeClass(ptn + '_hover');
            });

            if (prop.action == 'download' && prop.file && prop.file.length > 7) {
                var src = 'https://s3.pushplanet.com/users/' + USER_GUID + '/uploads/' + prop.file;
                el.wrap('<a style="border: none;" target="_blank" href="' + src + '"></a>');

                el.parent().click(function (e) {

                    //BEFORE DOWNLOAD - Master Custom JS
                    if (masterCustomJS.CustomJSBeforeDownload.length > 7) {
                        var master_res = new Function(masterCustomJS.CustomJSBeforeDownload)();
                        if (typeof master_res === 'boolean' && master_res === false) {
                            return false;
                        }
                    }

                    processDownload(prop);
                    return true;
                });

                el.mousedown(function () {
                    $(this).addClass(ptn + '_focus');
                }).mouseup(function () {
                    $(this).removeClass(ptn + '_focus');
                });
            } else {
                el.mousedown(function () {

                    if (event.which != 1) { return false; } //don't respond to middle or right clicks

                    $(this).addClass(ptn + '_focus');

                    ptn = pref + 'button' + n;
                    prop = settings[ptn];

                    if (prop.action === 'submit') {
                        processSubmit(pref, settings[ptn]['form']);
                    } else if (prop.action === 'close') {
                        //close
                        //may not work
                        window.close();
                    } else if (prop.action === 'url' && prop.url) {
                        if (prop.url.toLowerCase().trim().indexOf('http') !== 0 && prop.url.toLowerCase().trim().indexOf('mailto') !== 0) {
                            prop.url = 'http://' + prop.url;
                        }

                        if (!prop.hasOwnProperty('redirect_type') || !prop.redirect_type) {
                            prop.redirect_type = 'current';
                        }

                        redirectPage(prop);

                    } else if (prop.action === 'page_open' && prop.page_open && prop.page_open.length > 20 && prop.page_open.length < 50) {
                        //open another page
                        var locArr = window.location.href.split('/');

                        var new_prop = {};
                        new_prop.url = locArr[0] + '//' + locArr[2] + '?_ppguid=' + prop.page_open.replace(' ', '');
                        new_prop.redirect_type = 'another_page';
                        new_prop.other_page_guid = prop.page_open.replace(' ', '');

                        redirectPage(new_prop);

                    } else if (prop.action === 'main_page') {
                        changePages('', ptn, prop, 'button');
                    } else if (prop.action === 'thank_you_page') {
                        changePages('thx_', ptn, prop, 'button');
                    } else if (prop.action === 'extra_page_1') {
                        changePages('ep1_', ptn, prop, 'button');
                    } else if (prop.action === 'extra_page_2') {
                        changePages('ep2_', ptn, prop, 'button');
                    } else if (prop.action === 'extra_page_3') {
                        changePages('ep3_', ptn, prop, 'button');
                    } else if (prop.action === 'extra_page_4') {
                        changePages('ep4_', ptn, prop, 'button');
                    } else if (prop.action === 'alert_message') {
                        if (prop.message) {
                            alert(prop.message);
                        }
                    } else if (prop.action === 'confirm_message') {
                        if (prop.message) {
                            confirm(prop.message);
                        }
                    } else if (prop.action === 'success_message') {
                        if (prop.message) {
                            showSuccess(prop.message);
                        }
                    } else if (prop.action === 'custom_js_click') {
                        if (prop.custom_js_click) {
                            var fctnName = getCleanFunctionNameToExecute(prop.custom_js_click);
                            if (fctnName) {
                                executeFunctionByName(fctnName);
                            }
                        }
                    } else {
                        window.setTimeout(function () {
                            hideLoading();
                            //Do Nothing!
                            logger('after_submit=nothing');
                        }, 2000);
                    }
                }).mouseup(function () {
                    $(this).removeClass(ptn + '_focus');
                });
            }
        } else {
            el.hide();
            elWrapper.hide();
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildButtonInteraction)', e);
    }
}

function buildImageSource(pref, n) {
    try {
        var ptn = pref + 'image' + n;
        var el_wrapper = $('#' + ptn + '_wrapper');
        var el = $('#' + ptn);

        if (settings[ptn].src.contains('[EMAIL]') && typeof EMAIL_GLOBAL === 'string')
        {
            settings[ptn].src = settings[ptn].src.split('[EMAIL]').join(EMAIL_GLOBAL);
        }

        var src = 'https://s3.pushplanet.com/users/' + USER_GUID + '/uploads/' + settings[ptn].src;
        el.attr('src', src);

        el_dims = { width: 100, height: 100 };

        var img = new Image();
        img.onload = function () {
            el_dims.width = this.width;
            el_dims.height = this.height;
            resizeImage(el_dims, el_wrapper, el, ptn, settings[ptn].width, settings[ptn].height);
            el_wrapper.show();
        };
        img.src = src;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (buildImageSource)', e);
    }
}

function processDownload(prop) {
    //var src = PROTOCOL_USER_OVERRIDE + 's3.lightboxcdn.com/vendors/' + VENDOR_GUID + '/uploads/' + prop.file;
    //sendMessageToParent({ child_action: 'download_file', lightbox_id: LIGHTBOX_OR_VARIATION_GUID, url: src });
    //sendMessageToParent({ sender: 'digioh', child_action: 'download_file', lightbox_id: LIGHTBOX_OR_VARIATION_GUID });
    //window.open(src);

    analyticsAzureDownload();
}

function resizeImage(el_dims, el_wrapper, el, ptn, wrapperWidth, wrapperHeight) {
    try {
        var prop = settings[ptn];

        if (prop.constrain) {
            if (el_dims.width >= el_dims.height) {
                var width = wrapperWidth - (2 * prop.border.width) - (2 * prop.padding);
                if (prop.border.style === 'none' || prop.border.width === '0' || prop.border.width === 0) {
                    width = wrapperWidth - (2 * prop.padding);
                }

                var height = el_dims.height * (width / el_dims.width);
                el.width(Math.floor(width));
                el.height(Math.floor(height));
            } else {
                var height = wrapperHeight - (2 * prop.border.width) - (2 * prop.padding);
                if (prop.border.style === 'none' || prop.border.width === '0' || prop.border.width === 0) {
                    height = wrapperHeight - (2 * prop.padding);
                }
                var width = el_dims.width * (height / el_dims.height);
                el.height(Math.floor(height));
                el.width(Math.floor(width));
            }
        } else {
            var width = wrapperWidth - (2 * prop.border.width) - (2 * prop.padding);
            var height = wrapperHeight - (2 * prop.border.width) - (2 * prop.padding);
            if (prop.border.style === 'none' || prop.border.width === '0' || prop.border.width === 0) {
                width = wrapperWidth - (2 * prop.padding);
            }
            if (prop.border.style === 'none' || prop.border.width === '0' || prop.border.width === 0) {
                height = wrapperHeight - (2 * prop.padding);
            }
            el.width(Math.floor(width));
            el.height(Math.floor(height));
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (resizeImage)', e);
    }
}

function getCleanFunctionNameToExecute(val) {
    if (typeof val !== 'string' || val === '') {
        return '';
    }
    var fctnName = val.split(' ').join('').split('(')[0];
    if (typeof window[fctnName] === "function") {
        return fctnName;
    } else {
        logger('Custom JS Function Does Not Exist: ' + fctnName);
        return '';
    }
}

//stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
//executeFunctionByName("functionName");
//executeFunctionByName("My.Namespace.functionName");
//executeFunctionByName("functionName", arg1, arg2, arg3, etc..);
function executeFunctionByName(functionName) {
    var context = window;

    var args = null;
    if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments, 1);
    }

    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }

    if (args !== null && args.length > 0) {
        return context[func].apply(context, args);
    } else {
        return context[func].apply(context);
    }
}

function isValidEmail(email) {
    // If no email or wrong value gets passed in (or nothing is passed in), immediately return false.
    if (typeof email === 'undefined') return null;
    if (typeof email !== 'string' || email.indexOf('@') <= 0) return false;

    // Get email parts
    var emailParts = email.split('@'),
        emailName = emailParts[0],
        emailDomain = emailParts[1],
        emailDomainParts = emailDomain.split('.'),
        validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.0123456789_-+';

    // There must be exactly 2 parts
    if (emailParts.length !== 2) {
        //alert('Wrong number of @ signs');
        return false;
    }

    // Must be at least one char before @ and 3 chars after
    if (emailName.length < 1 || emailDomain.length < 3) {
        //alert('Wrong number of characters before or after @ sign');
        return false;
    }

    // Domain must include but not start with .
    if (emailDomain.indexOf('.') <= 0) {
        //alert('Domain must include but not start with .');
        return false;
    }

    // emailName must only include valid chars
    for (var i = emailName.length - 1; i >= 0; i--) {
        if (validChars.indexOf(emailName[i]) < 0) {
            //alert('Invalid character in name section');
            return false;
        }
    };

    // emailDomain must only include valid chars
    for (var i = emailDomain.length - 1; i >= 0; i--) {
        if (validChars.indexOf(emailDomain[i]) < 0) {
            //alert('Invalid character in domain section');
            return false;
        }
    };

    // Domain's last . should be 2 chars or more from the end
    if (emailDomainParts[emailDomainParts.length - 1].length < 2) {
        //alert('Domains last . should be 2 chars or more from the end');
        return false;
    }

    //alert('Email address seems valid');
    return true;
}


function getFormDataByKey(key_name, pref) {
    if (typeof pref === 'undefined') {
        pref = PREF;
    }

    for (var n = 1; n <= getNforType('field', pref); n++) {
        var ptn = pref + 'field' + n;
        if (PP_SUBMIT.hasOwnProperty(ptn) && PP_SUBMIT[ptn].hasOwnProperty('key') && PP_SUBMIT[ptn]['key'] === key_name) {
            return PP_SUBMIT[ptn];
        }
    }

    return null;
}

function getEmailFromFormDataOrPC(page_pref) {
    var pref = '';

    if (typeof page_pref === 'undefined' || page_pref === null) {
        pref = '';
    } else if (page_pref !== '' && page_pref !== 'main' && !settings.hasOwnProperty('ep1layout')) {
        pref = '';
    } else if (page_pref === 'main') {
        pref = '';
    } else {
        pref = page_pref;
    }

    if (PAGE_MODE === 'PC' && PC_PROFILE_OBJ.hasOwnProperty('email') && PC_PROFILE_OBJ['email'] && PC_PROFILE_OBJ['email'].indexOf('@') > 0) {
        return PC_PROFILE_OBJ['email'].toLowerCase();
    }

    for (var n = 1; n <= getNforType('field', pref); n++) {
        var ptn = pref + 'field' + n;

        if (PP_SUBMIT.hasOwnProperty(ptn) && typeof PP_SUBMIT[ptn] === 'object' && PP_SUBMIT[ptn] !== null && PP_SUBMIT[ptn].hasOwnProperty('val') && PP_SUBMIT[ptn].hasOwnProperty('key')) {
            if (PP_SUBMIT[ptn]['key'].toLowerCase() === 'email' && PP_SUBMIT[ptn]['val'].indexOf('@') > 0) {
                return PP_SUBMIT[ptn]['val'].toLowerCase();
            } else if (PP_SUBMIT[ptn]['val'].indexOf('@') > 0 && PP_SUBMIT[ptn]['val'].indexOf('.') > 0) {
                return PP_SUBMIT[ptn]['val'].toLowerCase();
            }
        }
    }

    return '';
}

function validateForm(data, page_pref, form_id, get_data_only, override_data) {
    var pref = '';

    if (typeof page_pref === 'undefined' || page_pref === null) {
        pref = '';
    } else if (page_pref !== '' && page_pref !== 'main' && !settings.hasOwnProperty('ep1layout')) {
        pref = '';
    } else if (page_pref === 'main') {
        pref = '';
    } else {
        pref = page_pref;
    }

    if (typeof data !== 'object' || data === null) {
        data = {};
    }

    if (typeof form_id !== 'string') {
        form_id = '';
    }

    if (typeof get_data_only !== 'boolean') {
        get_data_only = false;
    }

    if (typeof override_data !== 'boolean') {
        override_data = false;
    }

    //logger('validateForm(pref:' + pref + ', form_id:' + form_id + ', get_data_only:' + get_data_only + ', override_data:' + override_data + ')');

    for (var n = 1; n <= getNforType('field', pref); n++) {
        var ptn = pref + 'field' + n;
        if (settings.hasOwnProperty(ptn) && settings[ptn].display && !settings[ptn].deleted && settings[ptn].form === form_id) {
            if (!data.hasOwnProperty(ptn) || override_data) {
                data[ptn] = {};

                if ($('#' + ptn).length && typeof $('#' + ptn).val() !== 'undefined' && $('#' + ptn).val() !== null) {
                    data[ptn]['val'] = $('#' + ptn).val();
                } else if (settings[ptn]['type'] === 'hidden' && settings[ptn].hasOwnProperty('default')) {
                    data[ptn]['val'] = settings[ptn]['default'];
                } else {
                    data[ptn]['val'] = '';
                    logger('validateForm ==> (' + ptn + ') value not found, set to empty string.');
                }
                data[ptn]['key'] = settings[ptn]['key_name'] || ('field' + n);
                data[ptn]['name'] = settings[ptn]['friendly_name'] || ('Field ' + n);
                data[ptn]['type'] = settings[ptn]['type'] || '';
            }

            var evalFieldNCheckboxResult = evaluateFieldNCheckbox(data, pref, n, get_data_only);
            if (!evalFieldNCheckboxResult) {
                return false;
            }

            if (!get_data_only) {
                var ffn = settings[ptn]['friendly_name'] || settings[ptn]['key_name'] || ('Field ' + n);
                //logger('validateForm - field(' + n + '): ' + ffn + ' (require=' + settings[ptn].require + ') (' + settings[ptn]['type'] + ')');
                if (settings[ptn].hasOwnProperty('type') && settings[ptn]['type'] !== 'hidden' && settings[ptn]['type'] !== 'checkbox' && settings[ptn].require) {
                    
                    if (data[ptn].hasOwnProperty('val') && data[ptn]['val'].length == 0) {
                        showError(ffn + ' is required.');
                        return false;
                    }

                    if ((data[ptn].hasOwnProperty('name') && data[ptn]['name'].toLowerCase().indexOf('email') >= 0) || (data[ptn].hasOwnProperty('key') && data[ptn]['key'].toLowerCase().indexOf('email') >= 0)) {
                        var valid_email_regex = /^(?!.*;)\S+@(?!.*;)\S+\.\S+$/; 
                        if (!valid_email_regex.test(data[ptn]['val'])) {
                            showError(ffn + ' is in an invalid format.');
                            return false;
                        }
                    }
                }

                if (data[ptn].hasOwnProperty('val') && data[ptn]['val'].length > 5000) {
                    showError(ffn + ' must be less than 5000 characters.');
                    return false;
                }
            }
        } else if (settings.hasOwnProperty(ptn) && !settings[ptn].deleted && settings[ptn].form === form_id && !data.hasOwnProperty(ptn) && $('#' + ptn).length) {
            data[ptn] = {};
            data[ptn]['val'] = $('#' + ptn).val().trim();
            data[ptn]['key'] = settings[ptn]['key_name'] || ('field' + n);
            data[ptn]['name'] = settings[ptn]['friendly_name'] || ('Field ' + n);
            data[ptn]['type'] = settings[ptn]['type'] || '';
        }
    }

    return true;
}

function evaluateFieldNCheckbox(data, pref, n, get_data_only) {
    var ptn = pref + 'field' + n;
    if (settings[ptn].hasOwnProperty('type') && settings[ptn]['type'] === 'checkbox') {

        data[ptn] = {};
        data[ptn]['key'] = settings[ptn]['key_name'] || ('field' + n);
        data[ptn]['name'] = settings[ptn]['friendly_name'] || ('Field ' + n);
        data[ptn]['type'] = settings[ptn]['type'];

        if (settings[ptn].checkbox.integration_id)
            data[ptn].int_id = settings[ptn].checkbox.integration_id;
        if (settings[ptn].checkbox.pref_ctr_list_id)
            data[ptn].pc_id = settings[ptn].checkbox.pref_ctr_list_id;

        var cb = document.getElementById(ptn);
        if (cb && cb.checked) {

            //CHECKED or UNCHECKED value
            data[ptn]['chk'] = true;

            if (typeof settings[ptn].checkbox.checkedval === 'string') {
                if (settings[ptn].checkbox.checkedval === '[BLANK]') {
                    data[ptn]['val'] = '';
                } else if (settings[ptn].checkbox.checkedval === '') {
                    data[ptn]['val'] = 'true';
                } else {
                    data[ptn]['val'] = settings[ptn].checkbox.checkedval;
                }
            }
            else {
                data[ptn]['val'] = 'true';
            }

            //INTEGRATIONS
            if (settings[ptn].checkbox.integration_id) {
                var integration_id = settings[ptn].checkbox.integration_id;
                if (typeof integration_id !== 'string') integration_id = integration_id.toString();
                if (integration_id.indexOf(' ') !== -1) integration_id = integration_id.split(' ').join('');

                if (integration_id && !INTEGRATIONS.ArrayContains(integration_id)) {
                    INTEGRATIONS.push(integration_id);
                    logger('Added integration_id ' + integration_id + ' to INTEGRATIONS: ' + INTEGRATIONS.join(','));
                }
            }

            //SUBSCRIBE
            if (PAGE_MODE === 'PC') {
                var pref_ctr_list_id = settings[ptn].checkbox.pref_ctr_list_id;
                if (typeof pref_ctr_list_id !== 'string') pref_ctr_list_id = pref_ctr_list_id.toString();
                pref_ctr_list_id = pref_ctr_list_id.trim();

                if (pref_ctr_list_id) {
                    //if (!PC_SUBSCRIBE_LISTS.ArrayContains(pref_ctr_list_id) && !PC_LISTS_OBJ.hasOwnProperty(pref_ctr_list_id)) {
                    //    PC_SUBSCRIBE_LISTS.push(pref_ctr_list_id);
                    //    logger('Added pref_ctr_list_id ' + pref_ctr_list_id + ' to PC_SUBSCRIBE_LISTS: ' + PC_SUBSCRIBE_LISTS.join(','));
                    //}

                    //var idx = PC_UNSUBSCRIBE_LISTS.indexOf(pref_ctr_list_id);
                    //if (idx > -1) {
                    //    PC_UNSUBSCRIBE_LISTS.splice(idx, 1);
                    //    logger('Removed pref_ctr_list_id ' + pref_ctr_list_id + ' from PC_UNSUBSCRIBE_LISTS: ' + PC_UNSUBSCRIBE_LISTS.join(','));
                    //}

                    if (!PC_FINAL_LISTS.ArrayContains(pref_ctr_list_id)) {
                        PC_FINAL_LISTS.push(pref_ctr_list_id);
                        logger('Added pref_ctr_list_id ' + pref_ctr_list_id + ' to PC_FINAL_LISTS: ' + PC_FINAL_LISTS.join(','));
                    }

                    if (!PC_ALL_LISTS.ArrayContains(pref_ctr_list_id)) {
                        PC_ALL_LISTS.push(pref_ctr_list_id);
                        logger('Added pref_ctr_list_id ' + pref_ctr_list_id + ' to PC_ALL_LISTS: ' + PC_ALL_LISTS.join(','));
                    }
                }
            }

        }
        else {

            //CHECKED or UNCHECKED value
            data[ptn]['chk'] = false;

            if (typeof settings[ptn].checkbox.uncheckedval === 'string') {
                if (settings[ptn].checkbox.uncheckedval === '[BLANK]') {
                    data[ptn]['val'] = '';
                } else if (settings[ptn].checkbox.uncheckedval === '') {
                    data[ptn]['val'] = 'false';
                } else {
                    data[ptn]['val'] = settings[ptn].checkbox.uncheckedval;
                }
            }
            else {
                data[ptn]['val'] = 'false';
            }

            //INTEGRATIONS
            if (settings[ptn].checkbox.integration_id) {
                var integration_id = settings[ptn].checkbox.integration_id;
                if (typeof integration_id !== 'string') integration_id = integration_id.toString();
                if (integration_id.indexOf(' ') !== -1) integration_id = integration_id.split(' ').join('');

                if (integration_id) {
                    var idx = INTEGRATIONS.indexOf(integration_id);
                    if (idx > -1) {
                        INTEGRATIONS.splice(idx, 1);
                        logger('Removed integration_id ' + integration_id + ' from INTEGRATIONS: ' + INTEGRATIONS.join(','));
                    }
                }
            }

            //UNSUBSCRIBE
            if (PAGE_MODE === 'PC') {
                var pref_ctr_list_id = settings[ptn].checkbox.pref_ctr_list_id;
                if (typeof pref_ctr_list_id !== 'string') pref_ctr_list_id = pref_ctr_list_id.toString();
                pref_ctr_list_id = pref_ctr_list_id.trim();

                if (pref_ctr_list_id) {
                    //if (!PC_UNSUBSCRIBE_LISTS.ArrayContains(pref_ctr_list_id) && PC_LISTS_OBJ.hasOwnProperty(pref_ctr_list_id)) {
                    //    PC_UNSUBSCRIBE_LISTS.push(pref_ctr_list_id);
                    //    logger('Added pref_ctr_list_id ' + pref_ctr_list_id + ' to PC_UNSUBSCRIBE_LISTS: ' + PC_UNSUBSCRIBE_LISTS.join(','));
                    //}

                    //var idx1 = PC_SUBSCRIBE_LISTS.indexOf(pref_ctr_list_id);
                    //if (idx1 > -1) {
                    //    PC_SUBSCRIBE_LISTS.splice(idx1, 1);
                    //    logger('Removed pref_ctr_list_id ' + pref_ctr_list_id + ' from PC_SUBSCRIBE_LISTS: ' + PC_SUBSCRIBE_LISTS.join(','));
                    //}

                    var idx = PC_FINAL_LISTS.indexOf(pref_ctr_list_id);
                    if (idx > -1) {
                        PC_FINAL_LISTS.splice(idx, 1);
                        logger('Removed pref_ctr_list_id ' + pref_ctr_list_id + ' from PC_FINAL_LISTS: ' + PC_FINAL_LISTS.join(','));
                    }

                    if (!PC_ALL_LISTS.ArrayContains(pref_ctr_list_id)) {
                        PC_ALL_LISTS.push(pref_ctr_list_id);
                        logger('Added pref_ctr_list_id ' + pref_ctr_list_id + ' to PC_ALL_LISTS: ' + PC_ALL_LISTS.join(','));
                    }
                }
            }

        }

        //logger('evaluateFieldNCheckbox(' + ptn + ') ==> ');
        //logger(data[ptn]);

        if (!get_data_only) {
            if (settings[ptn].require && !cb.checked) {
                var ffn = settings[ptn]['friendly_name'] || settings[ptn]['key_name'] || ('Field ' + n + ' checkbox');
                showError(ffn + ' is required.');
                return false;
            }
        }
    }

    return true;
}

function showSuccess(msg) {
    var align = settings.layout.align;
    var success_width = settings.layout.width;

    var top = settings.layout.margin_top + 30;

    if (align === 'left') {
        $('#success_bubble').css({ 'left': '30px', 'top': (top + 'px') });
    } else {
        var left = Math.round(($(window).width() / 2) - (success_width / 2)) + 30;
        $('#success_bubble').css({ 'left': (left + 'px'), 'top': (top + 'px') });
    }

    $('#success_bubble').width(success_width - 90);
    $('#success_message').html(msg);
    $('#success_bubble').show();

    window.setTimeout(function () {
        $('#success_bubble').hide();
    }, 15000);
}

function showError(msg) {
    var align = settings.layout.align;
    var error_width = settings.layout.width;
    //if (CURRENT_WIDTH) {
    //    error_width = CURRENT_WIDTH;
    //}

    var top = settings.layout.margin_top + 30;

    if (align === 'left') {
        $('#error_bubble').css({ 'left': '30px', 'top': (top + 'px')});
    } else {
        var left = Math.round(($(window).width() / 2) - (error_width / 2)) + 30;
        $('#error_bubble').css({ 'left': (left + 'px'), 'top': (top + 'px') });
    }

    $('#error_bubble').width(error_width - 90);
    $('#error_message').html(msg);
    $('#error_bubble').show();
    //var offset = $('#email').offset();
    //var borderColor = $('#email').css('borderColor');
    //error_bubble.css('top', offset.top - 41 + 'px');
    //error_bubble.css('left', offset.left + 'px');
    //$('#email').css('borderColor', '#d58a8a');
    window.setTimeout(function () {
        $('#error_bubble').hide();
        //$('#email').css('borderColor', borderColor);
    }, 4000);
}



function checkPendingCouponsOnSubmit(pref, form_id, hideLoadingSpinner, bypassCoupons)
{
    try
    {
        var foundCouponPending = false;
        for (var prop in COUPONS_FOR_SUBMIT)
        {
            if (COUPONS_FOR_SUBMIT.hasOwnProperty(prop) && COUPONS_FOR_SUBMIT[prop] === false)
            {
                foundCouponPending = true;
                break;
            }
        }

        //logger('checkPendingCouponsOnSubmit');

        if (foundCouponPending)
        {
            setTimeout(function ()
            {
                checkPendingCouponsOnSubmit(pref, form_id, hideLoadingSpinner, bypassCoupons);
            }, 200);
        } else
        {
            processSubmitLock = false;
            processSubmit(pref, form_id, hideLoadingSpinner, true);
        }
    }
    catch (e)
    {
        logger('checkPendingCouponsOnSubmit', e);
    }
}


function processSubmit(pref, form_id, hideLoadingSpinner, bypassCoupons) {
    if (processSubmitLock) {
        logger('processSubmitLock');
        return false;
    }

    processSubmitLock = true;

    setTimeout(function () {
        processSubmitLock = false;
    }, 1000);


    PP_SUBMIT = {};

    try {
        if (typeof pref === 'undefined' || pref === null) {
            pref = '';
        }

        if (typeof form_id === 'undefined' || form_id === null) {
            form_id = '';
        }

        if (typeof bypassCoupons === 'undefined' || bypassCoupons === null) {
            bypassCoupons = false;
        }
    }
    catch (e) {
        pref = '';
        logger('processSubmit', e);
    }


    try
    {
        if (typeof COUPONS_FOR_SUBMIT === 'object' && COUPONS_FOR_SUBMIT !== null && Object.keys(COUPONS_FOR_SUBMIT).length > 0)
        {
            if (typeof bypassCoupons !== 'boolean' || !bypassCoupons)
            {
                buildCouponsSubmit();
                checkPendingCouponsOnSubmit(pref, form_id, hideLoadingSpinner, true);
                return;
            }
        }
    }
    catch (e)
    {
        pref = '';
        logger('processSubmit', e);
    }


    //after_submit ==> confirm() javascript box
    if (settings.hasOwnProperty(form_id) && settings[form_id].after_submit === 'confirm_message' && settings[form_id].message) {
        if (!confirm(settings[form_id].message)) {
            logger('processSubmit ==> after_submit = confirm_message ==> false');
            return false;
        }
    }

    //BEFORE FORM VALIDATION - Master Custom JS
    if (masterCustomJS.CustomJSBeforeValidation.length > 7) {
        var master_res = new Function(masterCustomJS.CustomJSBeforeValidation)();
        if (typeof master_res === 'boolean' && master_res === false) {
            return false;
        }
    }

    //BEFORE FORM VALIDATION ==> validateForm(get_data_only:true)
    if (settings.hasOwnProperty(form_id) && settings[form_id].custom_js_before_validation) {
        PP_SUBMIT = {};
        var validate_res = validateForm(PP_SUBMIT, pref, form_id, true, true);
        var fctnName = getCleanFunctionNameToExecute(settings[form_id].custom_js_before_validation);
        if (fctnName) {
            var custom_res = executeFunctionByName(fctnName);
            if (typeof custom_res === 'boolean' && custom_res === false) {
                return false;
            }
        }
    }


    //Validate Form
    PP_SUBMIT = {};
    var validate_res = validateForm(PP_SUBMIT, pref, form_id, false, true);
    if (typeof validate_res === 'boolean' && validate_res === false) {
        return false;
    }


    //AFTER FORM VALIDATION
    if (settings.hasOwnProperty(form_id) && settings[form_id].custom_js_after_validation) {
        var fctnName = getCleanFunctionNameToExecute(settings[form_id].custom_js_after_validation);
        if (fctnName) {
            var custom_res = executeFunctionByName(fctnName);
            if (typeof custom_res === 'boolean' && custom_res === false) {
                return false;
            }
        }
    }



    if (typeof hideLoadingSpinner !== 'boolean' || hideLoadingSpinner === false)
    {
        showLoading(pref);
    }


    //BEFORE FORM SUBMIT - Master Custom JS
    if (masterCustomJS.CustomJSBeforeSubmit.length > 7) {
        var master_res = new Function(masterCustomJS.CustomJSBeforeSubmit)();
        if (typeof master_res === 'boolean' && master_res === false) {
            hideLoading();
            return false;
        }
    }

    //BEFORE FORM SUBMIT
    if (settings.hasOwnProperty(form_id) && settings[form_id].custom_js_before_submit) {
        var fctnName = getCleanFunctionNameToExecute(settings[form_id].custom_js_before_submit);
        if (fctnName) {
            var custom_res = executeFunctionByName(fctnName);
            if (typeof custom_res === 'boolean' && custom_res === false) {
                hideLoading();
                return false;
            }
        }
    }


    //Get Email from form data, and add it to the base level object for sending to Keen
    var base_email = getEmailFromFormDataOrPC(pref);
    PP_SUBMIT['email'] = base_email;


    if (PAGE_MODE === 'PC') {
        if (PC_PROFILE_OBJ) {
            for (var key in PC_PROFILE_OBJ) {
                if (PC_PROFILE_OBJ.hasOwnProperty(key) && PC_PROFILE_KEY_MAP.hasOwnProperty(key)) {
                    var ptn_tmp = PC_PROFILE_KEY_MAP[key];
                    if ($('#' + ptn_tmp).length && typeof $('#' + ptn_tmp).val() !== 'undefined' && $('#' + ptn_tmp).val() !== null) {
                        PC_PROFILE_OBJ[key] = $('#' + ptn_tmp).val();
                    }
                }
            }
        }

        if (PC_FINAL_LISTS.length > 0) {
            for (var i = 0; i < PC_FINAL_LISTS.length; i++) {
                if (!PC_LISTS_OBJ.hasOwnProperty(PC_FINAL_LISTS[i])) {
                    PC_LISTS_OBJ[PC_FINAL_LISTS[i]] = '';
                }
            }
        }

        if (PC_LISTS_OBJ) {
            for (var list_id in PC_LISTS_OBJ) {
                if (PC_LISTS_OBJ.hasOwnProperty(list_id) && !PC_FINAL_LISTS.ArrayContains(list_id)) {
                    delete PC_LISTS_OBJ[list_id];
                }
            }
        }

        if (typeof runPC_Z_AfterFormSubmit !== 'undefined' && (typeof usePC_Z_Prof === 'undefined' || usePC_Z_Prof === 'yes')) {
            runPC_Z_AfterFormSubmit();
        }

        if (typeof run_BT_AfterFormSubmit !== 'undefined') {
            run_BT_AfterFormSubmit(PP_SUBMIT);
        }

        if (typeof run_IT_AfterFormSubmit !== 'undefined') {
            run_IT_AfterFormSubmit(PP_SUBMIT);
        }
    }

    logger('PP_SUBMIT ==>');
    logger(PP_SUBMIT);

    keenPageSubmit(PP_SUBMIT);
    pushToKeen(PP_SUBMIT, pref, form_id);
    analyticsAzureSubmit();
    PP_ANALYTICS.setPageEvent("submit", PAGE_ID);


    //AFTER FORM SUBMIT - Master Custom JS
    if (masterCustomJS.CustomJSAfterSubmit.length > 7) {
        var master_res = new Function(masterCustomJS.CustomJSAfterSubmit)();
        if (typeof master_res === 'boolean' && master_res === false) {
            hideLoading();
            return false;
        }
    }

    //AFTER FORM SUBMIT
    if (settings.hasOwnProperty(form_id) && settings[form_id].custom_js_after_submit) {
        var fctnName = getCleanFunctionNameToExecute(settings[form_id].custom_js_after_submit);
        if (fctnName) {
            var custom_res = executeFunctionByName(fctnName);
            if (typeof custom_res === 'boolean' && custom_res === false) {
                hideLoading();
                return false;
            }
        }
    }


    afterSubmit(pref, form_id);
}

function getFieldValueByDataType(prop_type, val) {
    if (prop_type.toLowerCase() === 's' || prop_type.toLowerCase() === 'c') {
        return val;
    }
    else if (prop_type.toLowerCase() === 'n' || prop_type.toLowerCase() === 'i') {
        return parseFloat(val);
    }
    else if (prop_type.toLowerCase() === 'b') {
        return (val.toLowerCase() === 'true') || (val === '1');
    }
    else if (prop_type.toLowerCase() === 'a' || prop_type.toLowerCase() === 'o') {
        if (typeof val === 'string') {
            return JSON.parse(val);
        } else {
            return val;
        }
    }
    else {
        return val;
    }
}

function afterSubmit(pref, form_id) {
    if (typeof form_id === 'undefined' || form_id === null) {
        form_id = '';
    }

    if (!settings.hasOwnProperty(form_id)) {
        logger('afterSubmit: Error, no form_id was set on the form action trigger element!');
        hideLoading();
        return;
    }

    if (settings.hasOwnProperty(form_id) && settings[form_id].after_submit == 'page_open' && settings[form_id].page_open && settings[form_id].page_open.length > 20 && settings[form_id].page_open.length < 50) {
        window.setTimeout(function () {
            hideLoading();

            var locArr = window.location.href.split('/');

            //if (window.location.href.indexOf('.azurewebsites.net') > 0 || window.location.href.indexOf('.pushplanet.com') > 0) {
            //}

            var prop = {};
            prop.url = locArr[0] + '//' + locArr[2] + '?_ppguid=' + settings[form_id].page_open.replace(' ', '');
            prop.redirect_type = 'another_page';
            prop.other_page_guid = settings[form_id].page_open.replace(' ', '');

            redirectPage(prop);

        }, 50);
    } else if (settings[form_id].after_submit == 'main_page') {
        window.setTimeout(function () {
            hideLoading();
            changePages('', form_id, settings[form_id], 'form');
        }, 2000);
    } else if (settings[form_id].after_submit == 'thank_you_page') {
        window.setTimeout(function () {
            hideLoading();
            changePages('thx', form_id, settings[form_id], 'form');
        }, 2000);
    } else if (settings[form_id].after_submit.indexOf('extra_page_') === 0) {
        window.setTimeout(function () {
            hideLoading();
            var epN = 'ep' + settings[form_id].after_submit.substring(11);
            changePages(epN, form_id, settings[form_id], 'form');
        }, 650);
    } else if (settings[form_id].after_submit == 'redirect' && settings[form_id].redirect_url) {
        window.setTimeout(function () {
            hideLoading();
            var prop = {};
            if (settings[form_id].redirect_url.toLowerCase().trim().indexOf('http') === 0 || settings[form_id].redirect_url.toLowerCase().trim().indexOf('mailto') === 0) {
                prop.url = settings[form_id].redirect_url;
            } else {
                prop.url = 'http://' + settings[form_id].redirect_url;
            }

            if (settings[form_id].hasOwnProperty('redirect_type') && settings[form_id].redirect_type) {
                prop.redirect_type = settings[form_id].redirect_type;
            } else {
                prop.redirect_type = 'current';
            }

            redirectPage(prop);
        }, 2000);
    } else if (settings[form_id].after_submit == 'close') {
        window.setTimeout(function () {
            hideLoading();
            //close
            //may not work
            window.close();
        }, 2000);
    } else if (settings[form_id].after_submit == 'alert_message') {
        window.setTimeout(function () {
            hideLoading();
            //alert_message
            if (settings[form_id].message) {
                alert(settings[form_id].message);
            }
        }, 2000);
    } else if (settings[form_id].after_submit == 'confirm_message') {
        window.setTimeout(function () {
            hideLoading();
            //Do Nothing!
        }, 2000);
    } else if (settings[form_id].after_submit == 'success_message') {
        window.setTimeout(function () {
            hideLoading();
            //success_message
            if (settings[form_id].message) {
                showSuccess(settings[form_id].message);
            }
        }, 2000);
    } else {
        window.setTimeout(function () {
            hideLoading();
            //Do Nothing!
            logger('after_submit=nothing');
        }, 2000);
    }
}

function pushToKeen(submit_data, pref, form_id) {
    try {
        var src = "https://submission.pushplanet.com/Keen/PushToKeen";
        var src2 = "https://submissioncus.pushplanet.com/Keen/PushToKeen2";

        //pushplanet-dev.azurewebsites.net
        if (window.location.host == 'hosted-dev.pushplanet.com') {
            src = "https://robert.pushplanet.com/Keen/PushToKeenR";
            src2 = "";
        }

        var user_data = {};
        user_data.ep = (pref || 'main');
        user_data.pm = PAGE_MODE;
        user_data.fid = form_id;
        user_data.uid = USER_ID;
        user_data.pid = PAGE_ID;
        user_data.cid = CLIENT_GUID;
        user_data.sid = generateGuid();
        user_data.isd = IS_DEV ? 1 : 0;
        user_data.isp = IS_PREVIEW ? 1 : 0;
        user_data.int = INTEGRATIONS.join(',');

        var analytics_data = {};
        analytics_data.ws = PP_ANALYTICS.VARS.web_source;
        analytics_data.se = PP_ANALYTICS.VARS.search_engine;
        analytics_data.pv = PP_ANALYTICS.VARS.page_visits;
        analytics_data.pa = PP_ANALYTICS.VARS.past_visits;

        analytics_data.rurl = PP_ANALYTICS.VARS.referring_website_url;
        analytics_data.lurl = PP_ANALYTICS.VARS.landing_page;
        if (PP_ANALYTICS.VARS.current_page_url !== PP_ANALYTICS.VARS.landing_page) {
            analytics_data.surl = PP_ANALYTICS.VARS.current_page_url;
        }

        analytics_data.dev = PP_ANALYTICS.VARS.device;
        analytics_data.bt = PP_ANALYTICS.VARS.browser_type;
        analytics_data.bv = PP_ANALYTICS.VARS.browser_version;
        analytics_data.os = PP_ANALYTICS.VARS.operating_system;
        analytics_data.ldt = PP_ANALYTICS.VARS.date_of_visit;
        analytics_data.us = PP_ANALYTICS.VARS.utm_campaign_source;
        analytics_data.um = PP_ANALYTICS.VARS.utm_campaign_medium;
        analytics_data.ut = PP_ANALYTICS.VARS.utm_campaign_term;
        analytics_data.uc = PP_ANALYTICS.VARS.utm_campaign_content;
        analytics_data.un = PP_ANALYTICS.VARS.utm_campaign_name;

        var geo_data = {};
        geo_data = {};
        geo_data.ip = PP_ANALYTICS.VARS.ip_address;
        geo_data.c = PP_ANALYTICS.VARS.city;
        geo_data.rn = PP_ANALYTICS.VARS.region_name;
        geo_data.cc = PP_ANALYTICS.VARS.country;
        geo_data.cn = PP_ANALYTICS.VARS.country_name;
        geo_data.co = PP_ANALYTICS.VARS.continent;
        geo_data.z = PP_ANALYTICS.VARS.zipcode;

        var pc_data = {};
        if (PAGE_MODE === 'PC') {
            pc_data.iid = PC_INTEGRATION_ID;
            pc_data.al = PC_ALL_LISTS.join(',');
            pc_data.ol = PC_ORIGINAL_LISTS.join(',');
            pc_data.fl = PC_FINAL_LISTS.join(',');
            pc_data.op = PC_ORIGINAL_PROFILE;
            pc_data.fp = PC_PROFILE_OBJ;

            if (PC_EXTRA_OBJ) {
                pc_data.ex = PC_EXTRA_OBJ;
            }

            //pc_data.pc_subscribe_lists = PC_SUBSCRIBE_LISTS.join(',');
            //pc_data.pc_unsubscribe_lists = PC_UNSUBSCRIBE_LISTS.join(',');
            //pc_data.km = PC_PROFILE_KEY_MAP;
        }

        var final_data = {};
        final_data.u = user_data;
        final_data.a = analytics_data;
        final_data.g = geo_data;
        final_data.s = submit_data;
        final_data.pc = pc_data;

        logger(final_data);

        var data_qs = "?_data=" + LZString.compressToBase64(JSON.stringify(final_data));

        var img = new Image();
        img.src = src + data_qs;

        if (src2) {
            var img2 = new Image();
            img2.src = src2 + data_qs;
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (pushToKeen)', e);
    }
}

//changePages('thx', form_id, settings[form_id], 'form');
function changePages(pref, el_name, prop, ui_source) {
    var previous_page = current_page_name;

    //BEFORE CHANGE PAGES - Master Custom JS
    if (masterCustomJS.CustomJSBeforeChangePages.length > 7) {
        var master_res = new Function(masterCustomJS.CustomJSBeforeChangePages)();
        if (typeof master_res === 'boolean' && master_res === false) {
            return false;
        }
    }

    if (pref === '')
        current_page_name = 'main';
    else if (pref === 'thx')
        current_page_name = 'thanks';
    else
        current_page_name = pref;

    if (pref && pref.contains('_')) {
        pref = pref.split('_').join('');
    }

    updateSettings(false);

    var prefArr = ['', 'thx', 'ep1', 'ep2', 'ep3', 'ep4'];
    for (var p = 0; p < prefArr.length; p++) {
        if (pref === prefArr[p]) {
            $('#' + pref + 'layout').show();
            CURRENT_WIDTH = settings[pref + 'layout'].width;
            CURRENT_HEIGHT = settings[pref + 'layout'].height;
            //CURRENT_PAGE = pref || 'main';
        }
        else {
            $('#' + prefArr[p] + 'layout').hide();
        }
    }

    //AFTER CHANGE PAGES - Master Custom JS
    if (masterCustomJS.CustomJSAfterChangePages.length > 7) {
        var master_res_2 = new Function(masterCustomJS.CustomJSAfterChangePages)();
    }

    //Run on change pages
    onResponsiveDimensionChange($(window).width(), $(window).height());

    //We need a delay here to give any images a chance to load and define their dimensions
    setTimeout(function () {
        onResponsiveDimensionChange($(window).width(), $(window).height());
    }, 200);
}

function redirectPage(prop) {
    if (!IS_REDIRECTING) {
        IS_REDIRECTING = true;


        //BEFORE REDIRECT - Master Custom JS
        if (masterCustomJS.CustomJSBeforeRedirect.length > 7) {
            var master_res = new Function(masterCustomJS.CustomJSBeforeRedirect)();
            if (typeof master_res === 'boolean' && master_res === false) {
                return false;
            }
        }


        PP_ANALYTICS.setPageEvent("redirect", PAGE_ID);
        analyticsAzureRedirect();

        if (!prop.redirect_type || prop.redirect_type === 'current') {
            keenPageRedirect('current', prop.url);
            window.setTimeout(function () {
                window.location.href = prop.url;
            }, 300);
            logger('redirect_type=current');
        } else if (prop.redirect_type === 'tab') {
            keenPageRedirect('tab', prop.url);
            $('body').append("<a id='new-tab-link-" + PAGE_ID + "' style='display:none;' href='" + prop.url + "' target='_blank'></a>");
            document.getElementById("new-tab-link-" + PAGE_ID).click();
            window.setTimeout(function () {
                $("#new-tab-link-" + PAGE_ID).remove();
                IS_REDIRECTING = false;
            }, 1000);
            logger('redirect_type=tab');
        } else if (prop.redirect_type === 'window') {
            keenPageRedirect('window', prop.url);
            window.open(prop.url, "NewWindow", "menubar=yes,height=" + ($(window).height() - 25) + ",width=" + ($(window).width() - 25) + ",left=25,top=25");
            window.setTimeout(function () {
                IS_REDIRECTING = false;
            }, 1000);
            logger('redirect_type=window');
        } else if (prop.redirect_type === 'another_page') {
            keenPageRedirect('another_page', prop.url, prop.other_page_guid);
            window.setTimeout(function () {
                window.location.href = prop.url;
            }, 300);
            logger('redirect_type=another_page');
        }
    }
}


function buildCouponsDisplay()
{
    if (PP_COUPON_GROUP_POPULATE_OBJ && PP_COUPON_GROUP_POPULATE_OBJ !== {})
    {
        findCouponsOnPages('display');
    }
}

function buildCouponsSubmit()
{
    if (PP_COUPON_GROUP_POPULATE_OBJ && PP_COUPON_GROUP_POPULATE_OBJ !== {})
    {
        findCouponsOnPages('submit');
    }
}

function findCouponsOnPages(couponPopulateOn)
{
    try
    {
        var mtags = [];

        $('div:contains("[COUPON_")').each(function ()
        {
            if ($(this).children().length < 1 || ($(this).children('a').length + $(this).children('br').length) === $(this).children().length)
            {
                var cgidParts = $(this).html().split('[COUPON_');
                if (cgidParts.length > 1)
                {
                    for (var i = 1; i < cgidParts.length; i++)
                    {
                        if (cgidParts[i].contains(']'))
                        {
                            var cgid = cgidParts[i].split(']')[0];
                            if (cgid && !mtags.contains(cgid))
                            {
                                mtags.push(cgid);
                            }
                        }
                    }
                }
            }
        });

        $('button:contains("[COUPON_")').each(function ()
        {
            if ($(this).children().length < 1)
            {
                var cgidParts = $(this).html().split('[COUPON_');
                if (cgidParts.length > 1)
                {
                    for (var i = 1; i < cgidParts.length; i++)
                    {
                        if (cgidParts[i].contains(']'))
                        {
                            var cgid = cgidParts[i].split(']')[0];
                            if (cgid && !mtags.contains(cgid))
                            {
                                mtags.push(cgid);
                            }
                        }
                    }
                }
            }
        });

        $('input,select,textarea').each(function ()
        {
            if ($(this).val().contains('[COUPON_'))
            {
                var cgidParts = $(this).val().split('[COUPON_');
                if (cgidParts.length > 1)
                {
                    for (var i = 1; i < cgidParts.length; i++)
                    {
                        if (cgidParts[i].contains(']'))
                        {
                            var cgid = cgidParts[i].split(']')[0];
                            if (cgid && !mtags.contains(cgid))
                            {
                                mtags.push(cgid);
                            }
                        }
                    }
                }
            }
        });

        logger('(PAGE #' + PAGE_ID + ') - findCouponsOnPages: ' + couponPopulateOn);
        logger('mtags ==>');
        logger(mtags);

        //Ensure we only make the minimum number of async calls to our coupon endpoint by pre-aggregating all unique coupon codes
        if (mtags.length > 0)
        {
            for (var i = 0; i < mtags.length; i++)
            {
                if (couponPopulateOn === 'display')
                {
                    if (PP_COUPON_GROUP_POPULATE_OBJ && PP_COUPON_GROUP_POPULATE_OBJ.hasOwnProperty(mtags[i]) && PP_COUPON_GROUP_POPULATE_OBJ[mtags[i]] === 'submit' && !COUPONS_FOR_SUBMIT.hasOwnProperty(mtags[i]))
                    {
                        COUPONS_FOR_SUBMIT[mtags[i]] = false;
                    } else if (!PP_COUPON_GROUP_POPULATE_OBJ || !PP_COUPON_GROUP_POPULATE_OBJ.hasOwnProperty(mtags[i]))
                    {
                        COUPONS_FOR_SUBMIT[mtags[i]] = false;
                    }
                }

                if (PP_COUPON_GROUP_POPULATE_OBJ)
                {
                    if (PP_COUPON_GROUP_POPULATE_OBJ.hasOwnProperty(mtags[i]))
                    {
                        if (PP_COUPON_GROUP_POPULATE_OBJ[mtags[i]] === couponPopulateOn)
                        {
                            insertCouponCodeAsync(mtags[i], couponPopulateOn, '1');
                            logger('(PAGE #' + PAGE_ID + ') - findCouponsOnPages: ' + couponPopulateOn + ' (' + mtags[i] + ') section 1');
                        }
                    } else if (couponPopulateOn === 'submit')
                    {
                        insertCouponCodeAsync(mtags[i], couponPopulateOn, '2');
                        logger('(PAGE #' + PAGE_ID + ') - findCouponsOnPages: ' + couponPopulateOn + ' (' + mtags[i] + ') section 2');
                    }
                } else if (couponPopulateOn === 'submit')
                {
                    insertCouponCodeAsync(mtags[i], couponPopulateOn, '3');
                    logger('(PAGE #' + PAGE_ID + ') - findCouponsOnPages: ' + couponPopulateOn + ' (' + mtags[i] + ') section 3');
                } else
                {
                    logger('(PAGE #' + PAGE_ID + ') - findCouponsOnPages: ' + couponPopulateOn + ' (' + mtags[i] + ') section 4 - no match');
                }
            }
        }

        logger('COUPONS_FOR_SUBMIT ==>');
        logger(COUPONS_FOR_SUBMIT);
    }
    catch (e)
    {
        logger('findCouponsOnPages', e);
    }
}


function insertCouponCodeAsync(coupon_group_id, populate_on, code_section_trigger)
{
    try
    {
        var couponApiUrl = 'https://coupon.lightboxcdn.com/PPCoupon/GetCoupon?user_id=' + USER_ID + '&coupon_group_id=' + coupon_group_id + '&client_id=' + CLIENT_GUID;
        couponApiUrl += '&goat=' + LZString.compressToBase64(USER_ID + CLIENT_GUID).substr(0, 32) + LZString.compressToBase64(new Date().getTime().toString());

        if (COUPONS_FOR_DISPLAY.hasOwnProperty(coupon_group_id) && COUPONS_FOR_DISPLAY[coupon_group_id])
        {
            var couponText = COUPONS_FOR_DISPLAY[coupon_group_id];

            $('div:contains("[COUPON_' + coupon_group_id + ']")').each(function ()
            {
                if ($(this).children().length < 1 || ($(this).children('a').length + $(this).children('br').length) === $(this).children().length)
                {
                    $(this).html($(this).html().split('[COUPON_' + coupon_group_id + ']').join(couponText));
                }
            });

            $('button:contains("[COUPON_' + coupon_group_id + ']")').each(function ()
            {
                if ($(this).children().length < 1)
                {
                    $(this).html($(this).html().split('[COUPON_' + coupon_group_id + ']').join(couponText));
                }
            });

            $('input,select,textarea').each(function ()
            {
                if ($(this).val().contains("[COUPON_" + coupon_group_id + "]"))
                {
                    $(this).val($(this).val().split("[COUPON_" + coupon_group_id + "]").join(couponText));
                }
            });
        }
        else
        {
            $.ajax({
                dataType: 'jsonp',
                url: couponApiUrl,
                success: function (data)
                {
                    if (data && typeof data === 'object' && data !== null && data.hasOwnProperty('success') && data.success)
                    {
                        if (data.hasOwnProperty('payload'))
                        {
                            logger('(PAGE #' + PAGE_ID + ') - GetCoupon: SUCCESS ==>');
                            logger(data);

                            var couponText = data.payload;
                            COUPONS_FOR_DISPLAY[coupon_group_id] = couponText;

                            $('div:contains("[COUPON_' + coupon_group_id + ']")').each(function ()
                            {
                                if ($(this).children().length < 1 || ($(this).children('a').length + $(this).children('br').length) === $(this).children().length)
                                {
                                    $(this).html($(this).html().split('[COUPON_' + coupon_group_id + ']').join(couponText));
                                }
                            });

                            $('button:contains("[COUPON_' + coupon_group_id + ']")').each(function ()
                            {
                                if ($(this).children().length < 1)
                                {
                                    $(this).html($(this).html().split('[COUPON_' + coupon_group_id + ']').join(couponText));
                                }
                            });

                            $('input,select,textarea').each(function ()
                            {
                                if ($(this).val().contains("[COUPON_" + coupon_group_id + "]"))
                                {
                                    $(this).val($(this).val().split("[COUPON_" + coupon_group_id + "]").join(couponText));
                                }
                            });

                            //postMessageCouponUsed(coupon_group_id, data, 'success', populate_on, code_section_trigger, '1', CURRENT_PAGE);

                        } else
                        {
                            //postMessageCouponUsed(coupon_group_id, data, 'failure', populate_on, code_section_trigger, '2', CURRENT_PAGE);

                            logger('(PAGE #' + PAGE_ID + ') - GetCoupon: FAILURE 2 ==>');
                            logger(data);
                        }
                    } else if (data && typeof data === 'object' && data !== null)
                    {
                        //postMessageCouponUsed(coupon_group_id, data, 'failure', populate_on, code_section_trigger, '3', CURRENT_PAGE);

                        logger('(PAGE #' + PAGE_ID + ') - GetCoupon: FAILURE 3 ==>');
                        logger(data);
                    } else
                    {
                        //postMessageCouponUsed(coupon_group_id, 'null', 'failure', populate_on, code_section_trigger, '4', CURRENT_PAGE);

                        logger('(PAGE #' + PAGE_ID + ') - GetCoupon: FAILURE 4 ==>');
                        logger(data);
                    }

                    if (COUPONS_FOR_SUBMIT.hasOwnProperty(coupon_group_id))
                    {
                        COUPONS_FOR_SUBMIT[coupon_group_id] = true;
                    }

                },
                error: function (htmltext, textStatus, errorThrown)
                {
                    if (COUPONS_FOR_SUBMIT.hasOwnProperty(coupon_group_id))
                    {
                        COUPONS_FOR_SUBMIT[coupon_group_id] = true;
                    }

                    //postMessageCouponUsed(coupon_group_id, { textStatus: textStatus }, 'error', populate_on, code_section_trigger, '5', CURRENT_PAGE);

                    logger('(PAGE #' + PAGE_ID + ') - GetCoupon: FAILURE 5 ==>');
                    logger(textStatus);

                    logger('ERROR (insertCouponCodeAsync)', errorThrown);
                }
            });
        }
    }
    catch (e)
    {
        logger('ERROR (insertCouponCodeAsync)', e);
    }
}


function replaceSpecialMergeTags()
{
    try
    {
        for (var x = 1; x <= 100; x++)
        {
            for (var y = 1; y <= 6; y++)
            {
                var pref = '';
                if (y <= 4) pref = 'ep' + y;
                if (y === 5) pref = 'thx';
                if (y === 6) pref = '';

                if (settings.hasOwnProperty(pref + 'button' + x) && settings[pref + 'button' + x].url)
                {
                    if (settings[pref + 'button' + x].url.indexOf('[URLPARAM|') >= 0)
                    {
                        var tagParts = settings[pref + 'button' + x].url.split('[URLPARAM|');
                        for (var i = 1; i < tagParts.length; i++)
                        {
                            if (tagParts[i].contains(']'))
                            {
                                var tagVal = tagParts[i].split(']')[0];
                                if (tagVal)
                                {
                                    var urlParamVal = getUrlParam(tagVal);
                                    if (typeof urlParamVal === 'string' && urlParamVal.length > 0)
                                    {
                                        settings[pref + 'button' + x].url = settings[pref + 'button' + x].url.split('[URLPARAM|' + tagVal + ']').join(urlParamVal);
                                    }
                                    else
                                    {
                                        settings[pref + 'button' + x].url = settings[pref + 'button' + x].url.split('[URLPARAM|' + tagVal + ']').join('');
                                    }
                                }
                            }
                        }
                    }
                }

                if (settings.hasOwnProperty(pref + 'button' + x) && settings[pref + 'button' + x].url)
                {
                    if (settings[pref + 'button' + x].url.indexOf('[COOKIE|') >= 0)
                    {
                        var tagParts = settings[pref + 'button' + x].url.split('[COOKIE|');
                        for (var i = 1; i < tagParts.length; i++)
                        {
                            if (tagParts[i].contains(']'))
                            {
                                var tagVal = tagParts[i].split(']')[0];
                                if (tagVal)
                                {
                                    var cVal = COOKIE.getPlain(tagVal);
                                    if (typeof cVal === 'string' && cVal.length > 0)
                                    {
                                        settings[pref + 'button' + x].url = settings[pref + 'button' + x].url.split('[COOKIE|' + tagVal + ']').join(cVal);
                                    }
                                    else
                                    {
                                        settings[pref + 'button' + x].url = settings[pref + 'button' + x].url.split('[COOKIE|' + tagVal + ']').join('');
                                    }
                                }
                            }
                        }
                    }
                }

                if (settings.hasOwnProperty(pref + 'button' + x) && settings[pref + 'button' + x].url)
                {
                    if (settings[pref + 'button' + x].url.indexOf('[LOCALSTORAGE|') >= 0)
                    {
                        var tagParts = settings[pref + 'button' + x].url.split('[LOCALSTORAGE|');
                        for (var i = 1; i < tagParts.length; i++)
                        {
                            if (tagParts[i].contains(']'))
                            {
                                var tagVal = tagParts[i].split(']')[0];
                                if (tagVal)
                                {
                                    var lsVal = localStorage.get(tagVal);
                                    if (typeof lsVal === 'string' && lsVal.length > 0)
                                    {
                                        settings[pref + 'button' + x].url = settings[pref + 'button' + x].url.split('[LOCALSTORAGE|' + tagVal + ']').join(lsVal);
                                    }
                                    else
                                    {
                                        settings[pref + 'button' + x].url = settings[pref + 'button' + x].url.split('[LOCALSTORAGE|' + tagVal + ']').join('');
                                    }
                                }
                            }
                        }
                    }
                }



                if (settings.hasOwnProperty(pref + 'form' + x) && settings[pref + 'form' + x].redirect_url)
                {
                    if (settings[pref + 'form' + x].redirect_url.indexOf('[URLPARAM|') >= 0)
                    {
                        var tagParts = settings[pref + 'form' + x].redirect_url.split('[URLPARAM|');
                        for (var i = 1; i < tagParts.length; i++)
                        {
                            if (tagParts[i].contains(']'))
                            {
                                var tagVal = tagParts[i].split(']')[0];
                                if (tagVal)
                                {
                                    var urlParamVal = getUrlParam(tagVal);
                                    if (typeof urlParamVal === 'string' && urlParamVal.length > 0)
                                    {
                                        settings[pref + 'form' + x].redirect_url = settings[pref + 'form' + x].redirect_url.split('[URLPARAM|' + tagVal + ']').join(urlParamVal);
                                    }
                                    else
                                    {
                                        settings[pref + 'form' + x].redirect_url = settings[pref + 'form' + x].redirect_url.split('[URLPARAM|' + tagVal + ']').join('');
                                    }
                                }
                            }
                        }
                    }
                }

                if (settings.hasOwnProperty(pref + 'form' + x) && settings[pref + 'form' + x].redirect_url)
                {
                    if (settings[pref + 'form' + x].redirect_url.indexOf('[COOKIE|') >= 0)
                    {
                        var tagParts = settings[pref + 'form' + x].redirect_url.split('[COOKIE|');
                        for (var i = 1; i < tagParts.length; i++)
                        {
                            if (tagParts[i].contains(']'))
                            {
                                var tagVal = tagParts[i].split(']')[0];
                                if (tagVal)
                                {
                                    var cVal = COOKIE.getPlain(tagVal);
                                    if (typeof cVal === 'string' && cVal.length > 0)
                                    {
                                        settings[pref + 'form' + x].redirect_url = settings[pref + 'form' + x].redirect_url.split('[COOKIE|' + tagVal + ']').join(cVal);
                                    }
                                    else
                                    {
                                        settings[pref + 'form' + x].redirect_url = settings[pref + 'form' + x].redirect_url.split('[COOKIE|' + tagVal + ']').join('');
                                    }
                                }
                            }
                        }
                    }
                }

                if (settings.hasOwnProperty(pref + 'form' + x) && settings[pref + 'form' + x].redirect_url)
                {
                    if (settings[pref + 'form' + x].redirect_url.indexOf('[LOCALSTORAGE|') >= 0)
                    {
                        var tagParts = settings[pref + 'form' + x].redirect_url.split('[LOCALSTORAGE|');
                        for (var i = 1; i < tagParts.length; i++)
                        {
                            if (tagParts[i].contains(']'))
                            {
                                var tagVal = tagParts[i].split(']')[0];
                                if (tagVal)
                                {
                                    var lsVal = localStorage.get(tagVal);
                                    if (typeof lsVal === 'string' && lsVal.length > 0)
                                    {
                                        settings[pref + 'form' + x].redirect_url = settings[pref + 'form' + x].redirect_url.split('[LOCALSTORAGE|' + tagVal + ']').join(lsVal);
                                    }
                                    else
                                    {
                                        settings[pref + 'form' + x].redirect_url = settings[pref + 'form' + x].redirect_url.split('[LOCALSTORAGE|' + tagVal + ']').join('');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }



        $('div:contains("[URLPARAM|")').each(function ()
        {
            if ($(this).children().length < 1 || ($(this).children('a').length + $(this).children('br').length) === $(this).children().length)
            {
                var tagParts = $(this).html().split('[URLPARAM|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var urlParamVal = getUrlParam(tagVal);
                                if (typeof urlParamVal === 'string' && urlParamVal.length > 0)
                                {
                                    $(this).html($(this).html().split('[URLPARAM|' + tagVal + ']').join(urlParamVal));
                                }
                                else
                                {
                                    $(this).html($(this).html().split('[URLPARAM|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });


        $('button:contains("[URLPARAM|")').each(function ()
        {
            if ($(this).children().length < 1)
            {
                var tagParts = $(this).html().split('[URLPARAM|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var urlParamVal = getUrlParam(tagVal);
                                if (typeof urlParamVal === 'string' && urlParamVal.length > 0)
                                {
                                    $(this).html($(this).html().split('[URLPARAM|' + tagVal + ']').join(urlParamVal));
                                }
                                else
                                {
                                    $(this).html($(this).html().split('[URLPARAM|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });


        $('input,select,textarea').each(function ()
        {
            if ($(this).val().contains('[URLPARAM|'))
            {
                var tagParts = $(this).val().split('[URLPARAM|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var urlParamVal = getUrlParam(tagVal);
                                if (typeof urlParamVal === 'string' && urlParamVal.length > 0)
                                {
                                    $(this).val($(this).val().split('[URLPARAM|' + tagVal + ']').join(urlParamVal));
                                }
                                else
                                {
                                    $(this).val($(this).val().split('[URLPARAM|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });


        $('div:contains("[COOKIE|")').each(function ()
        {
            if ($(this).children().length < 1 || ($(this).children('a').length + $(this).children('br').length) === $(this).children().length)
            {
                var tagParts = $(this).html().split('[COOKIE|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var cVal = COOKIE.getPlain(tagVal);
                                if (typeof cVal === 'string' && cVal.length > 0)
                                {
                                    $(this).html($(this).html().split('[COOKIE|' + tagVal + ']').join(cVal));
                                }
                                else
                                {
                                    $(this).html($(this).html().split('[COOKIE|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });



        $('button:contains("[COOKIE|")').each(function ()
        {
            if ($(this).children().length < 1)
            {
                var tagParts = $(this).html().split('[COOKIE|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var cVal = COOKIE.getPlain(tagVal);
                                if (typeof cVal === 'string' && cVal.length > 0)
                                {
                                    $(this).html($(this).html().split('[COOKIE|' + tagVal + ']').join(cVal));
                                }
                                else
                                {
                                    $(this).html($(this).html().split('[COOKIE|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });


        $('input,select,textarea').each(function ()
        {
            if ($(this).val().contains('[COOKIE|'))
            {
                var tagParts = $(this).val().split('[COOKIE|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var cVal = COOKIE.getPlain(tagVal);
                                if (typeof cVal === 'string' && cVal.length > 0)
                                {
                                    $(this).val($(this).val().split('[COOKIE|' + tagVal + ']').join(cVal));
                                }
                                else
                                {
                                    $(this).val($(this).val().split('[COOKIE|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });


        $('div:contains("[LOCALSTORAGE|")').each(function ()
        {
            if ($(this).children().length < 1 || ($(this).children('a').length + $(this).children('br').length) === $(this).children().length)
            {
                var tagParts = $(this).html().split('[LOCALSTORAGE|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var lsVal = localStorage.get(tagVal);
                                if (typeof lsVal === 'string' && lsVal.length > 0)
                                {
                                    $(this).html($(this).html().split('[LOCALSTORAGE|' + tagVal + ']').join(lsVal));
                                }
                                else
                                {
                                    $(this).html($(this).html().split('[LOCALSTORAGE|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });



        $('button:contains("[LOCALSTORAGE|")').each(function ()
        {
            if ($(this).children().length < 1)
            {
                var tagParts = $(this).html().split('[LOCALSTORAGE|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var lsVal = localStorage.get(tagVal);
                                if (typeof lsVal === 'string' && lsVal.length > 0)
                                {
                                    $(this).html($(this).html().split('[LOCALSTORAGE|' + tagVal + ']').join(lsVal));
                                }
                                else
                                {
                                    $(this).html($(this).html().split('[LOCALSTORAGE|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });


        $('input,select,textarea').each(function ()
        {
            if ($(this).val().contains('[LOCALSTORAGE|'))
            {
                var tagParts = $(this).val().split('[LOCALSTORAGE|');
                if (tagParts.length > 1)
                {
                    for (var i = 1; i < tagParts.length; i++)
                    {
                        if (tagParts[i].contains(']'))
                        {
                            var tagVal = tagParts[i].split(']')[0];
                            if (tagVal)
                            {
                                var lsVal = localStorage.get(tagVal);
                                if (typeof lsVal === 'string' && lsVal.length > 0)
                                {
                                    $(this).val($(this).val().split('[LOCALSTORAGE|' + tagVal + ']').join(lsVal));
                                }
                                else
                                {
                                    $(this).val($(this).val().split('[LOCALSTORAGE|' + tagVal + ']').join(''));
                                }
                            }
                        }
                    }
                }
            }
        });

    }
    catch (e)
    {
        logger('replaceSpecialMergeTags', e);
    }
}


function isKeenEnabled() {
    try {
        if (PP_KWK && PP_KWK.length > 10 && typeof KEEN_CLIENT == 'object' && KEEN_CLIENT != null && (typeof DATA_STORAGE_TYPE === 'undefined' || DATA_STORAGE_TYPE === 'all')) {
            logger('isKeenEnabled=true');
            return true;
        }
    }
    catch (e) {
        if (tryShowError()) {
            console.log('ERROR (isKeenEnabled_EXCEPTION)', e);
        }
    }

    logger('isKeenEnabled=false');
    return false;
}

function keenPageSubmit(form_data) {
    try {
        if (isKeenEnabled()) {
            updateKeenSchemaBeforeSending();

            var submit = KEEN_SCHEMA;
            submit.event_guid = generateGuid();
            submit.submission_guid = generateGuid();
            submit.page_total_time = TOTAL_TIME;
            submit.page_active_time = TOTAL_TIME - IDLE_TIME;
            submit.page_idle_time = IDLE_TIME;

            var submit_schema = mergeObjectData(submit, form_data);

            KEEN_CLIENT.recordEvent("submit", submit_schema);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (keenPageSubmit_EXCEPTION)', e);
    }
}

function keenPageRedirect(redirect_type, redirect_url, redirect_to_page_id) {
    try {
        if (isKeenEnabled()) {
            updateKeenSchemaBeforeSending();

            var redirect = KEEN_SCHEMA;
            redirect.event_guid = generateGuid();
            redirect.page_total_time = TOTAL_TIME;
            redirect.page_active_time = TOTAL_TIME - IDLE_TIME;
            redirect.page_idle_time = IDLE_TIME;

            if (redirect_type) {
                redirect.redirect_type = redirect_type;
            }

            if (redirect_url) {
                redirect.redirect_url = redirect_url;
            }

            if (redirect_to_page_id) {
                redirect.redirect_to_page_id = redirect_to_page_id;
            }

            KEEN_CLIENT.recordEvent("redirect", redirect);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (keenPageRedirect_EXCEPTION)', e);
    }
}

function keenPageDownload() {
    try {
        if (isKeenEnabled()) {
            updateKeenSchemaBeforeSending();

            var download = KEEN_SCHEMA;
            download.event_guid = generateGuid();
            download.page_total_time = TOTAL_TIME;
            download.page_active_time = TOTAL_TIME - IDLE_TIME;
            download.page_idle_time = IDLE_TIME;

            KEEN_CLIENT.recordEvent("download", download);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (keenPageDownload_EXCEPTION)', e);
    }
}

function keenPageCustomEvent(event_collection, extra_data) {
    try {
        if (isKeenEnabled()) {
            if (!KEEN_CLIENT) {
                setTimeout(function () {
                    updateKeenSchemaBeforeSending();

                    var ev = KEEN_SCHEMA;
                    ev.event_guid = generateGuid();
                    ev.submission_guid = generateGuid();
                    ev.page_total_time = TOTAL_TIME;
                    ev.page_active_time = TOTAL_TIME - IDLE_TIME;
                    ev.page_idle_time = IDLE_TIME;

                    var submit_schema = mergeObjectData(ev, extra_data);

                    KEEN_CLIENT.recordEvent(event_collection, submit_schema);
                }, 2000);
            } else {
                updateKeenSchemaBeforeSending();

                var ev = KEEN_SCHEMA;
                ev.event_guid = generateGuid();
                ev.submission_guid = generateGuid();
                ev.page_total_time = TOTAL_TIME;
                ev.page_active_time = TOTAL_TIME - IDLE_TIME;
                ev.page_idle_time = IDLE_TIME;

                var submit_schema = mergeObjectData(ev, extra_data);

                KEEN_CLIENT.recordEvent(event_collection, submit_schema);
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (keenPageCustomEvent_EXCEPTION)', e);
    }
}

function generateGuid() {
    var ts = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return uuid + '-' + ts;
}

function afterDomLoaded() {
    try {
        loadAllClientSideDataFromCookie();
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (afterDomLoaded)', e);
    }
}

var loadAllClientSideDataFromCookie = function () {
    try {
        var cookieVal = COOKIE.get('pp_data');
        if (typeof cookieVal === 'object' && cookieVal !== null) {
            PP_DATA = cookieVal;
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (loadAllClientSideDataFromCookie)', e);
    }

    afterDomLoadedAndStorageLoadedAndPostMessageInit();
}

function afterDomLoadedAndStorageLoadedAndPostMessageInit() {
    try {
        loadClientGuid();

        PP_ANALYTICS = new PUSHPLANET_ANALYTICS($, true, USER_GUID, IS_PREVIEW, window.location.host);
        //PP_ANALYTICS.getGeoAndDeviceDataFromCookie();
        PP_ANALYTICS.setGeoAndDeviceData({ 'geo': GEO, 'da': DEVICE });
        setKeenSchemaAfterGeoIpAndDevice();

        initDependentScripts();
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (afterDomLoadedAndStorageLoadedAndPostMessageInit)', e);
    }
}

function loadClientGuid() {
    try {
        if (!PP_DATA || typeof PP_DATA !== 'object' || !PP_DATA.client_guid || PP_DATA.client_guid.length < 7) {
            CLIENT_GUID = generateGuid();
            PP_DATA.client_guid = CLIENT_GUID;
            COOKIE.set('pp_data', PP_DATA, 3650);
        } else {
            CLIENT_GUID = PP_DATA.client_guid;
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (loadClientGuid)', e);
    }
}

var areCookiesDisabled = function () {
    try {
        if (COOKIES_DISABLED) {
            return true;
        }

        COOKIE.setPlain('pp_test', 'xyz');
        var cv = COOKIE.getPlain('pp_test');
        if (cv != null && cv === 'xyz') {
            COOKIES_DISABLED = false;
            return false;
        } else {
            COOKIES_DISABLED = true;
            return true;
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (areCookiesDisabled)', e);
        COOKIES_DISABLED = true;
        return true;
    }
}

function isPhone() {
    try {
        if (typeof PP_ANALYTICS === 'object' && PP_ANALYTICS !== null && PP_ANALYTICS.hasOwnProperty('VARS') && typeof PP_ANALYTICS.VARS === 'object' && PP_ANALYTICS.VARS !== null) {

            if (PP_ANALYTICS.VARS.hasOwnProperty('DeviceAtlas') && typeof PP_ANALYTICS.VARS.DeviceAtlas === 'object') {
                if (PP_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('isMobilePhone') && PP_ANALYTICS.VARS.DeviceAtlas.isMobilePhone !== '') {
                    return PP_ANALYTICS.VARS.DeviceAtlas.isMobilePhone;
                }

                if (PP_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('primaryHardwareType') && PP_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType !== '') {
                    return (PP_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType === 'Mobile Phone');
                }
            }

            if (PP_ANALYTICS.VARS.device) {
                if (PP_ANALYTICS.VARS.device === 'Phone/Tablet') {
                    if (PP_ANALYTICS.VARS.hasOwnProperty('device_apple') && PP_ANALYTICS.VARS.device_apple) {
                        if (PP_ANALYTICS.VARS.device_apple.toLowerCase() === 'iphone') {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (isPhone)', e);
    }

    return '';
}

function isTablet() {
    try {
        if (typeof PP_ANALYTICS === 'object' && PP_ANALYTICS !== null && PP_ANALYTICS.hasOwnProperty('VARS') && typeof PP_ANALYTICS.VARS === 'object' && PP_ANALYTICS.VARS !== null) {

            if (PP_ANALYTICS.VARS.hasOwnProperty('DeviceAtlas') && typeof PP_ANALYTICS.VARS.DeviceAtlas === 'object') {
                if (PP_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('isTablet') && PP_ANALYTICS.VARS.DeviceAtlas.isTablet !== '') {
                    return PP_ANALYTICS.VARS.DeviceAtlas.isTablet;
                }

                if (PP_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('primaryHardwareType') && PP_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType !== '') {
                    return (PP_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType === 'Tablet');
                }
            }

            if (PP_ANALYTICS.VARS.device) {
                if (PP_ANALYTICS.VARS.device === 'Phone/Tablet') {
                    if (PP_ANALYTICS.VARS.hasOwnProperty('device_apple') && PP_ANALYTICS.VARS.device_apple) {
                        if (PP_ANALYTICS.VARS.device_apple.toLowerCase() === 'ipad') {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (isTablet)', e);
    }

    return '';
}

function isMobile() {
    try {
        if (typeof PP_ANALYTICS === 'object' && PP_ANALYTICS !== null && PP_ANALYTICS.hasOwnProperty('VARS') && typeof PP_ANALYTICS.VARS === 'object' && PP_ANALYTICS.VARS !== null) {
            if (PP_ANALYTICS.VARS.hasOwnProperty('DeviceAtlas') && typeof PP_ANALYTICS.VARS.DeviceAtlas === 'object') {
                if (PP_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('mobileDevice') && PP_ANALYTICS.VARS.DeviceAtlas.mobileDevice !== '') {
                    return PP_ANALYTICS.VARS.DeviceAtlas.mobileDevice;
                }
            }

            if (PP_ANALYTICS.VARS.device && PP_ANALYTICS.VARS.device === 'Phone/Tablet') {
                return true;
            }
        }

        return (isPhone() || isTablet());
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (isMobile)', e);
    }

    return '';
}

function isDesktop() {
    try {
        if (typeof PP_ANALYTICS === 'object' && PP_ANALYTICS !== null && PP_ANALYTICS.hasOwnProperty('VARS') && typeof PP_ANALYTICS.VARS === 'object' && PP_ANALYTICS.VARS !== null) {
            if (PP_ANALYTICS.VARS.hasOwnProperty('DeviceAtlas') && typeof PP_ANALYTICS.VARS.DeviceAtlas === 'object') {
                if (PP_ANALYTICS.VARS.DeviceAtlas.hasOwnProperty('primaryHardwareType') && PP_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType === 'Desktop') {
                    return true;
                }
            }

            if (PP_ANALYTICS.VARS.device && PP_ANALYTICS.VARS.device === 'Desktop/Laptop') {
                return true;
            }
        }

        return (!isPhone() && !isTablet());
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (isDesktop)', e);
    }

    return '';
}


function initExitIntent() {
    try {
        //https://github.com/joemingna/exit-intent-plugin/blob/master/js/exitPlugin.js

        if (masterCustomJS.CustomJSBeforeExit.length > 7) {
            var jqDoc = $(document);
            var jqWin = $(window);

            var mousex = -1;
            var mousey = -1;
            var lastmousex = -1;
            var lastmousey = -1;
            var lastmousetime;
            var mousetravel = 0;

            var directionx = '';
            var directiony = '';

            var pageWidth = jqWin.width();
            var pageHeight = jqWin.height();
            var yOffset = jqWin.scrollTop();
            //var exitWindow = parseInt(pageWidth / 2, 10);

            jqDoc.mousemove(function (e) {
                mousex = e.pageX;
                mousey = e.pageY;

                if (lastmousex > -1) {
                    mousetravel = Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
                    //mousetravel = Math.ceil(Math.sqrt(Math.pow(Math.ceil(Math.abs(mousex - lastmousex)), 2) + Math.pow(Math.ceil(Math.abs(mousey - lastmousey)), 2)));
                }

                if (mousex < lastmousex) directionx = 'left';
                else directionx = 'right';

                if (mousey <= lastmousey) directiony = 'up';
                else directiony = 'down';

                lastmousex = mousex;
                lastmousey = mousey;
            });

            jqDoc.mouseleave(function () {
                var yOffset = jqWin.scrollTop();

                var relative_y = yOffset - mousey;
                var relative_x = jqWin.width() - mousex;

                //logger('Exit intent detected, with mousetravel = ' + mousetravel);

                if (directiony === 'up') {
                    //BEFORE EXIT - Master Custom JS
                    if (masterCustomJS.CustomJSBeforeExit.length > 7) {
                        var master_res = new Function(masterCustomJS.CustomJSBeforeExit)();
                    }
                }
            });

            jqWin.resize(function () {
                pageWidth = jqWin.width();
                pageHeight = jqWin.height();
                yOffset = jqWin.scrollTop();
                //exitWindow = parseInt(pageWidth / 2, 10);
            });
        }
    }
    catch (e) {
        logError(e, "initExitIntent");
    }
}



//##############
//AnalyticsAzure
//##############
//function analyticsAzureDisplay() {
//    analyticsAzureEvent('display');
//}

function analyticsAzureSubmit() {
    analyticsAzureEvent('submit');
}

function analyticsAzureRedirect() {
    analyticsAzureEvent('redirect');
}

function analyticsAzureDownload() {
    analyticsAzureEvent('download');
}

function analyticsAzureEvent(eventType) {
    try {
        var url = 'https://pushplanet.azurewebsites.net/event/' + eventType + '/' + USER_ID + '/' + PAGE_ID + '/empty/' + document.location.hostname;
        analyticsAzureImagePixel(url);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (analyticsAzureEvent)', e);
    }
}

function analyticsAzureImagePixel(url) {
    try {
        var b = document.createElement("img");
        b.width = 1;
        b.height = 1;
        b.src = (url + '/img/z?cb=' + (new Date().getTime()));
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (analyticsAzureImagePixel)', e);
    }
}

function initDependentScripts() {
    try {
        if (!INIT_DEPENDENT_SCRIPTS_HAS_RUN) {
            INIT_DEPENDENT_SCRIPTS_HAS_RUN = true;

            initAnalytics();
            initKeen();
            startIdleTimer();
            initExitIntent();

            updateSettings(true);

            try {
                if (masterCustomJS.CustomJSReady.length > 7) {
                    eval(masterCustomJS.CustomJSReady);
                }
            } catch (e1) {
                if (tryShowError()) console.log('ERROR (masterCustomJS)', e1);
            }

            try {
                if (customJS.length > 7) {
                    eval(customJS);
                }
            } catch (e2) {
                if (tryShowError()) console.log('ERROR (customJS)', e2);
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (initDependentScripts)', e);
    }
}

function initAnalytics() {
    try {
        PP_ANALYTICS.onDocumentReady();
        PP_ANALYTICS.loadAllVars();
        PP_ANALYTICS.VARS.IsLoaded = true;
        //logger(PP_ANALYTICS.VARS, true);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (initAnalytics)', e);
    }
}

function initKeen() {
    if (typeof KeenAsync !== 'undefined' && KeenAsync && KEEN_CLIENT !== null) {
        initKeenSchema();
        //analyticsAzureDisplay();
        //keenPageDisplay();
    } else {
        setTimeout(initKeen, 300);
    }
}

function initKeenSchema() {

    //added on 5/3/2018
    //PP_MODE
    //PP_CACHE_VERSION
    //PP_STAGE
    //PAGE_MODE
    //And 8 PC props at bottom here

    try {
        KEEN_SCHEMA = {
            user_id: USER_ID,
            user_guid: USER_GUID,
            page_id: PAGE_ID,
            page_guid: PAGE_GUID,
            page_name: PAGE_NAME,
            client_guid: CLIENT_GUID,
            cache_version: PP_CACHE_VERSION,
            is_preview: IS_PREVIEW,
            is_dev: IS_DEV,
            ip_address: "${keen.ip}",
            user_agent: "${keen.user_agent}",
            referrer_url: document.referrer,
            page_url: window.location.href,
            page_mode: PAGE_MODE,
            pp_mode: PP_MODE,
            pp_cache_version: PP_CACHE_VERSION,
            pp_stage: PP_STAGE,
            geoip: {
                ip_address: PP_ANALYTICS.VARS.ip_address,
                continent_code: PP_ANALYTICS.VARS.continent,
                country_code: PP_ANALYTICS.VARS.country,
                country_name: PP_ANALYTICS.VARS.country_name,
                region_code: PP_ANALYTICS.VARS.state,
                region_name: PP_ANALYTICS.VARS.region_name,
                city: PP_ANALYTICS.VARS.city,
                zipcode: PP_ANALYTICS.VARS.zipcode,
                metro_code: PP_ANALYTICS.VARS.metro_code,
                time_zone: PP_ANALYTICS.VARS.time_zone,
                area_code: PP_ANALYTICS.VARS.area_code,
                latitude: PP_ANALYTICS.VARS.latitude,
                longitude: PP_ANALYTICS.VARS.longitude,
                geo_source: PP_ANALYTICS.VARS.geo_source
            },
            device: {
                hardware: PP_ANALYTICS.VARS.device,
                os: PP_ANALYTICS.VARS.operating_system,
                browser_type: PP_ANALYTICS.VARS.browser_type,
                browser_version: PP_ANALYTICS.VARS.browser_version
            },
            entry_point: {
                referrer_url: PP_ANALYTICS.VARS.referring_website_url,
                landing_page_url: PP_ANALYTICS.VARS.landing_page,
                landing_page_ip: PP_ANALYTICS.VARS.landing_page_ip,
                landing_page_date: PP_ANALYTICS.VARS.date_of_visit,
                web_source: PP_ANALYTICS.VARS.web_source,
                past_visits: PP_ANALYTICS.VARS.past_visits,
                page_visits: PP_ANALYTICS.VARS.page_visits,
                search_engine: PP_ANALYTICS.VARS.search_engine,
                utm_campaign_source: PP_ANALYTICS.VARS.utm_campaign_source,
                utm_campaign_medium: PP_ANALYTICS.VARS.utm_campaign_medium,
                utm_campaign_term: PP_ANALYTICS.VARS.utm_campaign_term,
                utm_campaign_content: PP_ANALYTICS.VARS.utm_campaign_content,
                utm_campaign_name: PP_ANALYTICS.VARS.utm_campaign_name
            }
        };

        KEEN_SCHEMA.keen = {};

        KEEN_SCHEMA.keen.addons = [
            {
                name: "keen:ip_to_geo",
                input: {
                    ip: "ip_address"
                },
                output: "ip_to_geo_addon"
            },
            {
                name: "keen:ua_parser",
                input: {
                    ua_string: "user_agent"
                },
                output: "ua_parser_addon"
            },
            {
                name: "keen:url_parser",
                input: {
                    url: "page_url"
                },
                output: "url_parser_addon"
            },
            {
                name: "keen:referrer_parser",
                input: {
                    referrer_url: "referrer_url",
                    page_url: "page_url"
                },
                output: "referrer_parser_addon"
            }
        ];

        if (PP_ANALYTICS.VARS.latitude && PP_ANALYTICS.VARS.longitude) {
            KEEN_SCHEMA.keen.location = {};
            KEEN_SCHEMA.keen.location.coordinates = [PP_ANALYTICS.VARS.latitude, PP_ANALYTICS.VARS.longitude];
        }


        //added on 5/3/2018
        //PC Data
        if (PAGE_MODE === 'PC') {
            KEEN_SCHEMA.pc_data = {};
            if (PC_PARTNER) KEEN_SCHEMA.pc_data.pc_partner = PC_PARTNER;
            if (PC_LINK_VERSION) KEEN_SCHEMA.pc_data.pc_link_version = PC_LINK_VERSION;
            if (PC_LISTS_OBJ) KEEN_SCHEMA.pc_data.pc_lists_obj = JSON.stringify(PC_LISTS_OBJ);
            if (PC_PROFILE_OBJ) KEEN_SCHEMA.pc_data.pc_profile_obj = JSON.stringify(PC_PROFILE_OBJ);
            if (PC_EXTRA_OBJ) KEEN_SCHEMA.pc_data.pc_extra_obj = JSON.stringify(PC_EXTRA_OBJ);
            if (PC_ALL_OBJ) KEEN_SCHEMA.pc_data.pc_all_obj = JSON.stringify(PC_ALL_OBJ);
            if (PC_INTEGRATION_ID) KEEN_SCHEMA.pc_data.pc_integration_id = PC_INTEGRATION_ID;
            if (PC_ERROR_PAGE) KEEN_SCHEMA.pc_data.pc_error_page = PC_ERROR_PAGE;
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (initKeenSchema)', e);
    }
}

function updateKeenSchemaBeforeSending() {
    try {
        KEEN_SCHEMA.geoip = {
            ip_address: PP_ANALYTICS.VARS.ip_address,
            continent_code: PP_ANALYTICS.VARS.continent,
            country_code: PP_ANALYTICS.VARS.country,
            country_name: PP_ANALYTICS.VARS.country_name,
            region_code: PP_ANALYTICS.VARS.state,
            region_name: PP_ANALYTICS.VARS.region_name,
            city: PP_ANALYTICS.VARS.city,
            zipcode: PP_ANALYTICS.VARS.zipcode,
            metro_code: PP_ANALYTICS.VARS.metro_code,
            time_zone: PP_ANALYTICS.VARS.time_zone,
            area_code: PP_ANALYTICS.VARS.area_code,
            latitude: PP_ANALYTICS.VARS.latitude,
            longitude: PP_ANALYTICS.VARS.longitude,
            geo_source: PP_ANALYTICS.VARS.geo_source
        };

        KEEN_SCHEMA.device_atlas = {
            primaryHardwareType: PP_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType,
            isApp: PP_ANALYTICS.VARS.DeviceAtlas.isApp,
            isTablet: PP_ANALYTICS.VARS.DeviceAtlas.isTablet,
            isMobilePhone: PP_ANALYTICS.VARS.DeviceAtlas.isMobilePhone,
            isRobot: PP_ANALYTICS.VARS.DeviceAtlas.isRobot,
            botName: PP_ANALYTICS.VARS.DeviceAtlas.botName,
            model: PP_ANALYTICS.VARS.DeviceAtlas.model,
            vendor: PP_ANALYTICS.VARS.DeviceAtlas.vendor,
            touchScreen: PP_ANALYTICS.VARS.DeviceAtlas.touchScreen,
            osName: PP_ANALYTICS.VARS.DeviceAtlas.osName,
            osVersion: PP_ANALYTICS.VARS.DeviceAtlas.osVersion,
            browserName: PP_ANALYTICS.VARS.DeviceAtlas.browserName,
            browserVersion: PP_ANALYTICS.VARS.DeviceAtlas.browserVersion,
            osAndroid: PP_ANALYTICS.VARS.DeviceAtlas.osAndroid,
            osiOs: PP_ANALYTICS.VARS.DeviceAtlas.osiOs,
            device_source: PP_ANALYTICS.VARS.device_source
        };

        KEEN_SCHEMA.device = {
            hardware: PP_ANALYTICS.VARS.device,
            os: PP_ANALYTICS.VARS.operating_system,
            browser_type: PP_ANALYTICS.VARS.browser_type,
            browser_version: PP_ANALYTICS.VARS.browser_version
        };

        KEEN_SCHEMA.entry_point = {
            referrer_url: PP_ANALYTICS.VARS.referring_website_url,
            landing_page_url: PP_ANALYTICS.VARS.landing_page,
            landing_page_ip: PP_ANALYTICS.VARS.landing_page_ip,
            landing_page_date: PP_ANALYTICS.VARS.date_of_visit,
            web_source: PP_ANALYTICS.VARS.web_source,
            past_visits: PP_ANALYTICS.VARS.past_visits,
            page_visits: PP_ANALYTICS.VARS.page_visits,
            search_engine: PP_ANALYTICS.VARS.search_engine,
            utm_campaign_source: PP_ANALYTICS.VARS.utm_campaign_source,
            utm_campaign_medium: PP_ANALYTICS.VARS.utm_campaign_medium,
            utm_campaign_term: PP_ANALYTICS.VARS.utm_campaign_term,
            utm_campaign_content: PP_ANALYTICS.VARS.utm_campaign_content,
            utm_campaign_name: PP_ANALYTICS.VARS.utm_campaign_name
        };
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (updateKeenSchemaBeforeSending)', e);
    }
}

function setKeenSchemaAfterGeoIpAndDevice() {
    try {
        if (typeof KEEN_SCHEMA === 'object' && KEEN_SCHEMA.hasOwnProperty('geoip') && typeof GEO_IP === 'object' && GEO_IP.hasOwnProperty('ip') && GEO_IP.ip.length > 7) {
            KEEN_SCHEMA.geoip = {
                ip_address: PP_ANALYTICS.VARS.ip_address,
                continent_code: PP_ANALYTICS.VARS.continent,
                country_code: PP_ANALYTICS.VARS.country,
                country_name: PP_ANALYTICS.VARS.country_name,
                region_code: PP_ANALYTICS.VARS.state,
                region_name: PP_ANALYTICS.VARS.region_name,
                city: PP_ANALYTICS.VARS.city,
                zipcode: PP_ANALYTICS.VARS.zipcode,
                metro_code: PP_ANALYTICS.VARS.metro_code,
                time_zone: PP_ANALYTICS.VARS.time_zone,
                area_code: PP_ANALYTICS.VARS.area_code,
                latitude: PP_ANALYTICS.VARS.latitude,
                longitude: PP_ANALYTICS.VARS.longitude,
                geo_source: PP_ANALYTICS.VARS.geo_source
            };

            KEEN_SCHEMA.device_atlas = {
                primaryHardwareType: PP_ANALYTICS.VARS.DeviceAtlas.primaryHardwareType,
                isApp: PP_ANALYTICS.VARS.DeviceAtlas.isApp,
                isTablet: PP_ANALYTICS.VARS.DeviceAtlas.isTablet,
                isMobilePhone: PP_ANALYTICS.VARS.DeviceAtlas.isMobilePhone,
                isRobot: PP_ANALYTICS.VARS.DeviceAtlas.isRobot,
                botName: PP_ANALYTICS.VARS.DeviceAtlas.botName,
                model: PP_ANALYTICS.VARS.DeviceAtlas.model,
                vendor: PP_ANALYTICS.VARS.DeviceAtlas.vendor,
                touchScreen: PP_ANALYTICS.VARS.DeviceAtlas.touchScreen,
                osName: PP_ANALYTICS.VARS.DeviceAtlas.osName,
                osVersion: PP_ANALYTICS.VARS.DeviceAtlas.osVersion,
                browserName: PP_ANALYTICS.VARS.DeviceAtlas.browserName,
                browserVersion: PP_ANALYTICS.VARS.DeviceAtlas.browserVersion,
                osAndroid: PP_ANALYTICS.VARS.DeviceAtlas.osAndroid,
                osiOs: PP_ANALYTICS.VARS.DeviceAtlas.osiOs,
                device_source: PP_ANALYTICS.VARS.device_source
            };
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (setKeenSchemaAfterGeoIpAndDevice)', e);
    }
}


function startIdleTimer() {
    try {
        $.idleTimer(IDLE_PERIOD * 1000);

        $(document).bind("idle.idleTimer", function () {
            IDLE_TIME += IDLE_PERIOD;
            IDLE_INTERVAL = window.setInterval(idleTimerIncrement, 1000);
        });

        $(document).bind("active.idleTimer", function () {
            if (IDLE_INTERVAL != 0) window.clearInterval(IDLE_INTERVAL);
            IDLE_INTERVAL = 0;
        });

        TOTAL_INTERVAL = window.setInterval(totalTimerIncrement, 1000);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (startIdleTimer)', e);
    }
}

function idleTimerIncrement() {
    try {
        IDLE_TIME += 1;
        PP_ANALYTICS.VARS.idle_time_seconds = IDLE_TIME;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (idleTimerIncrement)', e);
    }
}

function totalTimerIncrement() {
    try {
        TOTAL_TIME += 1;
        PP_ANALYTICS.VARS.total_time_seconds = TOTAL_TIME;
        PP_ANALYTICS.VARS.active_time_seconds = TOTAL_TIME - IDLE_TIME;
        //if (TIME_BOXES_ARR.length > 0) {
        //    checkConditionsTime();
        //}
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (totalTimerIncrement)', e);
    }
}

$.idleTimer = function (firstParam, elem, opts) {

    // defaults that are to be stored as instance props on the elem
    opts = $.extend({
        startImmediately: true,   //starts a timeout as soon as the timer is set up
        idle: false,              //indicates if the user is idle
        enabled: true,            //indicates if the idle timer is enabled
        timeout: 30000,           //the amount of time (ms) before the user is considered idle
        events: "mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove" // activity is one of these events
    }, opts);


    elem = elem || window.document;

    var jqElem = $(elem),
        obj = jqElem.data("idleTimerObj") || {},

        /* (intentionally not documented)
            * Toggles the idle state and fires an appropriate event.
            * @return {void}
            */
        toggleIdleState = function (myelem) {

            // curse you, mozilla setTimeout lateness bug!
            if (typeof myelem === "number") {
                myelem = undefined;
            }

            var obj = $.data(myelem || elem, "idleTimerObj");

            //toggle the state
            obj.idle = !obj.idle;

            // reset timeout
            var elapsed = (+new Date()) - obj.olddate;
            obj.olddate = +new Date();

            // handle Chrome always triggering idle after js alert or comfirm popup
            if (obj.idle && (elapsed < opts.timeout)) {
                obj.idle = false;
                window.clearTimeout($.idleTimer.tId);
                if (opts.enabled) {
                    $.idleTimer.tId = window.setTimeout(toggleIdleState, opts.timeout);
                }
                return;
            }

            // create a custom event, but first, store the new state on the element
            // and then append that string to a namespace
            var event = $.Event($.data(elem, "idleTimer", obj.idle ? "idle" : "active") + ".idleTimer");
            $(elem).trigger(event);
        },

        /**
            * Stops the idle timer. This removes appropriate event handlers
            * and cancels any pending timeouts.
            * @return {void}
            * @method stop
            * @static
            */
        stop = function (jqElem) {

            var obj = jqElem.data("idleTimerObj") || {};

            //set to disabled
            obj.enabled = false;

            //clear any pending timeouts
            window.clearTimeout(obj.tId);

            //detach the event handlers
            jqElem.off(".idleTimer");
        };

    obj.olddate = obj.olddate || +new Date();

    if (typeof firstParam === "number") {
        opts.timeout = firstParam;
    } else if (firstParam === "destroy") {
        stop(jqElem);
        return this;
    } else if (firstParam === "getElapsedTime") {
        return (+new Date()) - obj.olddate;
    }


    /* (intentionally not documented)
        * Handles a user event indicating that the user isn't idle.
        * @param {Event} event A DOM2-normalized event object.
        * @return {void}
        */
    jqElem.on($.trim((opts.events + " ").split(" ").join(".idleTimer ")), function () {
        var obj = $.data(this, "idleTimerObj");

        //clear any existing timeout
        window.clearTimeout(obj.tId);

        //if the idle timer is enabled
        if (obj.enabled) {
            //if it's idle, that means the user is no longer idle
            if (obj.idle) {
                toggleIdleState(this);
            }

            //set a new timeout
            obj.tId = window.setTimeout(toggleIdleState, obj.timeout);
        }
    });

    obj.idle = opts.idle;
    obj.enabled = opts.enabled;
    obj.timeout = opts.timeout;

    //set a timeout to toggle state. May wish to omit this in some situations
    if (opts.startImmediately) {
        obj.tId = window.setTimeout(toggleIdleState, obj.timeout);
    }

    // assume the user is active for the first x seconds.
    jqElem.data("idleTimer", "active");

    // store our instance on the object
    jqElem.data("idleTimerObj", obj);
};

$.fn.idleTimer = function (firstParam, opts) {
    // Allow omission of opts for backward compatibility
    if (!opts) {
        opts = {};
    }

    if (this[0]) {
        $.idleTimer(firstParam, this[0], opts);
    }

    return this;
};




function onResponsiveDimensionChange(width, height) {
    try {
        CURRENT_WIDTH = width;
        //CURRENT_HEIGHT = height;

        var pref = '';
        if (!current_page_name) {
            pref = '';
        } else if (current_page_name === 'main') {
            pref = '';
        } else if (current_page_name === 'thanks') {
            pref = 'thx';
        } else {
            pref = current_page_name.replace('_', '');
        }

        if (!settings.hasOwnProperty(pref + 'layout') || !settings[pref + 'layout'].hasOwnProperty('align') || settings[pref + 'layout'].align.indexOf('stretch') < 0) {
            return;
        }

        //if (!settings.hasOwnProperty(pref + 'edgetoedge') || !settings[pref + 'edgetoedge'].use) {
        //    return;
        //}

        //logger('onResponsiveDimensionChange: pref=' + pref + ' / width=' + width + ' / height=' + height);

        var origPageWidth = 700;
        var origPageHeight = 500;

        if (settings.hasOwnProperty(pref + 'layout') && settings[pref + 'layout'].hasOwnProperty('width') && settings[pref + 'layout'].hasOwnProperty('height')) {
            origPageWidth = settings[pref + 'layout'].width;
            origPageHeight = settings[pref + 'layout'].height;
        } else {
            origPageWidth = settings['layout'].width;
            origPageHeight = settings['layout'].height;
        }

        var newPageWidth = width;
        var newPageHeight = origPageHeight;


        //do not go any smaller than the original page width (as defined in the Editor)
        if (newPageWidth <= origPageWidth && settings[pref + 'layout'].align !== 'stretch_narrow') {
            return;
        }

        if (!settings[pref + 'layout'].hasOwnProperty('border') || settings[pref + 'layout'].border.style === 'none' || !settings[pref + 'layout'].border.width) {
            newPageWidth = newPageWidth;
            newPageHeight = newPageHeight;
        } else {
            var borderWidth = (2 * parseInt(settings[pref + 'layout'].border.width));

            newPageWidth = newPageWidth - borderWidth;
            newPageHeight = newPageHeight - borderWidth;

            origPageWidth = origPageWidth - borderWidth;
            origPageHeight = origPageHeight - borderWidth;
        }

        //For now, only apply the updated width (not the height)
        $('#' + pref + 'layout').width(newPageWidth);
        //$('#' + pref + 'layout').height(newPageHeight);

        //HTML, Text, Button, Image, Field
        for (var j = 0; j <= 4; j++) {
            var ele_type = '';
            if (j === 0) ele_type = 'html';
            if (j === 1) ele_type = 'text';
            if (j === 2) ele_type = 'button';
            if (j === 3) ele_type = 'image';
            if (j === 4) ele_type = 'field';
            // Build the settings key dynamically
            const settingsKey = `${ele_type}_count_${pref === '' ? 'main' : pref}`;

            // Determine maxCount with a fallback to 100 if the setting is 0 or undefined
            const maxCount = (settings[settingsKey] || 0) === 0 ? 100 : settings[settingsKey];
            for (var i = 1; i <= maxCount; i++) {
                if (settings.hasOwnProperty(pref + ele_type + i) && settings[pref + ele_type + i].display) {
                    var origElementWidth = settings[pref + ele_type + i].width;
                    var origElementHeight = settings[pref + ele_type + i].height;

                    var origElementLeft = settings[pref + ele_type + i].x;
                    //var origElementTop = settings[pref + ele_type + i].y;

                    var newElementWidth = origElementWidth;
                    //var newElementHeight = origElementHeight;

                    var newElementLeft = getNewElementLeft(origElementLeft, origElementWidth, newElementWidth, origPageWidth, newPageWidth);
                    //var newElementTop = getNewElementTop(origElementTop, origElementHeight, newElementHeight, origPageHeight, newPageHeight);

                    if (newElementWidth > newPageWidth) {
                        newElementLeft = 0;
                        newElementWidth = newPageWidth;

                        if (ele_type == 'image') {
                            if (settings[pref + ele_type + i].constrain) {
                                var currWidth = $('#' + pref + ele_type + i).width();
                                var currHeight = $('#' + pref + ele_type + i).height();
                                if (currWidth > 0 && currHeight > 0) {
                                    //logger('onResponsiveDimensionChange (' + pref + ele_type + i + ') currWidth=' + currWidth + 'px by currHeight=' + currHeight + 'px');

                                    var newElementHeight = currHeight * (newElementWidth / currWidth);
                                    $('#' + pref + ele_type + i).css({ "width": newElementWidth + "px", "height": newElementHeight + "px" });
                                    //logger('onResponsiveDimensionChange (' + pref + ele_type + i + ') ' + newElementWidth + 'px by ' + newElementHeight + 'px');
                                }
                                else {
                                    logger('onResponsiveDimensionChange (' + pref + ele_type + i + ') zero_zero');
                                }
                            }
                            else {
                                $('#' + pref + ele_type + i).css({ "width": newElementWidth + "px" });
                            }
                        }
                    }

                    //For now, only apply the updated width (not the height)
                    $('#' + pref + ele_type + i + '_wrapper').css({ "left": newElementLeft + "px", "width": newElementWidth + "px" });
                    //$('#' + pref + ele_type + i + '_wrapper').css({ "left": newElementLeft + "px", "top": newElementTop + "px", "width": newElementWidth + "px", "height": newElementHeight + "px" });
                }
            }
        }
    } catch (e) {
        if (tryShowError()) console.log('ERROR (onResponsiveDimensionChange)', e);
    }
}

function getNewElementLeft(origElementLeft, origElementWidth, newElementWidth, origPageWidth, newPageWidth) {
    var diffPageWidth = newPageWidth - origPageWidth;
    var diffElementWidth = newElementWidth - origElementWidth;
    var newElementLeft = Math.round(origElementLeft + (0.5 * diffPageWidth) - (0.5 * diffElementWidth));
    return newElementLeft;
}

function getNewElementTop(origElementTop, origElementHeight, newElementHeight, origPageHeight, newPageHeight) {
    var diffPageHeight = newPageHeight - origPageHeight;
    var diffElementHeight = newElementHeight - origElementHeight;
    var newElementTop = Math.round(origElementTop + (0.5 * diffPageHeight) - (0.5 * diffElementHeight));
    return newElementTop;
}




function PUSHPLANET_ANALYTICS(showErrors, baseUrl) {
    this.ShowErrors = showErrors;
    this.BaseDomain = baseUrl;
    this.IsNewSession = true;
    this.IsNewVisitor = true;
    this.RanSetCurrent = false;
    this.PageviewStart = (new Date()).getTime();
    this.SessionStart = 0;
    this.SessionLengthTicks = 1800000; //1800000 = 30 minutes, 3600000 = 60 minutes
    this.OverwriteCurrentCookie = false;
    this.PreviousPageviewTs = 0;

    this.VARS = {};
    this.VARS.UserGuid = USER_GUID;
    this.VARS.IsLoaded = false;
    this.VARS.IsPreview = IS_PREVIEW;

    this.VARS.current_page_url = "";
    this.VARS.referring_website_url = "";
    this.VARS.landing_page = "";
    this.VARS.landing_page_ip = "";
    this.VARS.date_of_visit = 0;
    this.VARS.web_source = "Direct Traffic";
    this.VARS.past_visits = 0;
    this.VARS.page_visits = 0;
    this.VARS.pages_navigated = "";
    this.VARS.search_engine = "";
    this.VARS.device = "";
    this.VARS.device_apple = "";
    this.VARS.browser_type = "";
    this.VARS.browser_version = "";
    this.VARS.operating_system = "";
    this.VARS.utm_campaign_source = "";
    this.VARS.utm_campaign_medium = "";
    this.VARS.utm_campaign_term = "";
    this.VARS.utm_campaign_content = "";
    this.VARS.utm_campaign_name = "";
    this.VARS.total_time_seconds = 0;
    this.VARS.active_time_seconds = 0;
    this.VARS.idle_time_seconds = 0;
    this.VARS.continent = "";
    this.VARS.continent_name = "";
    this.VARS.country = "";
    this.VARS.country_name = "";
    this.VARS.region_name = "";
    this.VARS.state = "";
    this.VARS.city = "";
    this.VARS.ip_address = "";
    this.VARS.zipcode = "";
    this.VARS.latitude = 0;
    this.VARS.longitude = 0;
    this.VARS.metro_code = "";
    this.VARS.time_zone = "";
    this.VARS.area_code = "";

    this.VARS.scroll_percent = 0;
    this.VARS.scroll_pixels = 0;
    this.VARS.exit_intent = "";
    this.VARS.click_jquery_selector = {};
    this.VARS.hover_jquery_selector = {};
    this.VARS.exists_jquery_selector = {};
    this.VARS.lightbox_activity = {};
    this.VARS.master_rules = {};
    this.VARS.page_events = {};

    this.VARS.DeviceAtlas = {};
    this.VARS.DeviceAtlas.primaryHardwareType = "";
    this.VARS.DeviceAtlas.mobileDevice = "";
    this.VARS.DeviceAtlas.isApp = "";
    this.VARS.DeviceAtlas.isTablet = "";
    this.VARS.DeviceAtlas.isMobilePhone = "";
    this.VARS.DeviceAtlas.model = "";
    this.VARS.DeviceAtlas.vendor = "";
    this.VARS.DeviceAtlas.touchScreen = "";
    this.VARS.DeviceAtlas.osName = "";
    this.VARS.DeviceAtlas.osVersion = "";
    this.VARS.DeviceAtlas.browserName = "";
    this.VARS.DeviceAtlas.browserVersion = "";
    this.VARS.DeviceAtlas.osAndroid = "";
    this.VARS.DeviceAtlas.osiOs = "";
    this.VARS.DeviceAtlas.isRobot = "";
    this.VARS.DeviceAtlas.botName = "";

    this.VARS.geo_source = "";
    this.VARS.device_source = "";

    this.VARS.PagesNavigated = new Array();
    this.VARS.PastVisitsText = "";
}

PUSHPLANET_ANALYTICS.prototype.onDocumentReady = function () {
    try {
        this.setDevice();
        this.setCurrent();
        this.setPrevious();
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.onDocumentReady)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.loadAllVars = function () {
    try {
        this.getCurrent();
        this.getPrevious();
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.loadAllVars)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.getDeviceAtlasServerPropsMap = function () {
    try {
        var x = {};

        x.ea = 'bjs.webGl';
        x.eb = 'bjs.geoLocation';
        x.ec = 'bjs.webSqlDatabase';
        x.ed = 'bjs.indexedDB';
        x.ef = 'bjs.webSockets';
        x.eg = 'bjs.localStorage';
        x.eh = 'bjs.sessionStorage';
        x.ei = 'bjs.webWorkers';
        x.ej = 'bjs.applicationCache';
        x.ek = 'bjs.supportBasicJavaScript';
        x.el = 'bjs.modifyDom';
        x.em = 'bjs.modifyCss';
        x.en = 'bjs.supportEvents';
        x.eo = 'bjs.touchEvents';
        x.ep = 'bjs.supportEventListener';
        x.eq = 'bjs.xhr';
        x.er = 'bjs.supportConsoleLog';
        x.es = 'bjs.json';
        x.et = 'bjs.deviceOrientation';
        x.eu = 'bjs.deviceMotion';
        x.ev = 'bjs.querySelector';
        x.ew = 'bjs.battery';
        x.ex = 'bjs.accessDom';

        x.fa = 'bhtml.canvas';
        x.fb = 'bhtml.video';
        x.fc = 'bhtml.audio';
        x.fd = 'bhtml.svg';
        x.fe = 'bhtml.inlinesvg';

        x.ga = 'bcss.animations';
        x.gb = 'bcss.columns';
        x.gc = 'bcss.transforms';
        x.ge = 'bcss.transitions';

        x.ba = 'js.webSockets';
        x.bb = 'js.deviceMotion';
        x.bd = 'js.applicationCache';
        x.bg = 'js.xhr';
        x.bi = 'js.deviceOrientation';
        x.bl = 'js.webWorkers';
        x.bm = 'js.querySelector';
        x.bp = 'js.json';
        x.bs = 'js.supportEventListener';
        x.bz = 'js.localStorage';
        x.cd = 'js.supportEvents';
        x.cl = 'js.touchEvents';
        x.ci = 'js.geoLocation';
        x.cr = 'js.webGl';
        x.cx = 'js.indexedDB';
        x.db = 'js.modifyCss';
        x.dc = 'js.webSqlDatabase';
        x.dg = 'js.sessionStorage';
        x.dh = 'js.supportConsoleLog';
        x.dq = 'js.modifyDom';
        x.ds = 'js.supportBasicJavaScript';
        x.dt = 'js.battery';
        x.du = 'js.accessDom';

        x.ck = 'html.svg';
        x.cn = 'html.inlinesvg';
        x.ch = 'html.video';
        x.bt = 'html.audio';
        x.df = 'html.canvas';

        x.dd = 'css.transforms';
        x.de = 'css.columns';
        x.bc = 'css.animations';
        x.bq = 'css.transitions';

        x.bu = 'image.Jpg';
        x.cc = 'image.Gif87';
        x.ce = 'image.Png';
        x.cu = 'image.Gif89a';
        x.ca = 'markup.xhtmlMp10';
        x.bw = 'markup.wml1';
        x.cm = 'markup.xhtmlBasic10';
        x.cy = 'markup.xhtmlMp12';
        x.cz = 'markup.xhtmlMp11';

        x.ha = 'iorientation';
        x.hb = 'idisplayColorDepth';
        x.hc = 'idevicePixelRatio';

        x.ia = 'bcookieSupport';
        x.ib = 'bflashCapable';
        x.ic = 'baccessDom';
        x.ie = 'buserMedia';

        x.ja = 'sdeviceAspectRatio';
        x.jb = 'sdevicePixelRatio';

        x.aa = 'touchScreen';
        x.ab = 'isBrowser';
        x.ac = 'isMobilePhone';
        x.ad = 'primaryHardwareType';
        x.ae = 'isFilter';
        x.af = 'mobileDevice';
        x.ag = 'isSpam';
        x.ah = 'isGamesConsole';
        x.ai = 'isMasqueradingAsDesktop';
        x.aj = 'botName';
        x.ak = 'marketingName';
        x.al = 'manufacturer';
        x.am = 'yearReleased';
        x.an = 'displayWidth';
        x.ao = 'displayHeight';
        x.ap = 'diagonalScreenSize';
        x.aq = 'displayPpi';
        x.ar = 'devicePixelRatio';
        x.as = 'displayColorDepth';
        x.at = 'nfc';
        x.au = 'camera';
        x.av = 'osProprietary';
        x.aw = 'developerPlatform';
        x.ax = 'developerPlatformVersion';
        x.ay = 'language';
        x.az = 'languageLocale';
        x.be = 'jsr139';
        x.bf = 'jqm';
        x.bh = 'uriSchemeSms';
        x.bj = 'id';
        x.bk = 'https';
        x.bn = 'umts';
        x.bo = 'usableDisplayWidth';
        x.br = 'supportsClientSide';
        x.bv = 'isSpam';
        x.bx = 'jsr118';
        x.by = 'hspaEvolved';
        x.cb = 'uriSchemeTel';
        x.cf = 'jsr37';
        x.cg = 'jsr30';
        x.cj = 'flashCapable';
        x.co = 'hsdpa';
        x.cp = 'memoryLimitMarkup';
        x.cq = 'memoryLimitDownload';
        x.cs = 'edge';
        x.ct = 'vCardDownload';
        x.cv = 'drmOmaCombinedDelivery';
        x.cw = 'usableDisplayHeight';
        x.da = 'drmOmaSeparateDelivery';
        x.di = 'gprs';
        x.dj = 'lteAdvanced';
        x.dk = 'lte';
        x.dl = 'memoryLimitEmbeddedMedia';
        x.dm = 'hscsd';
        x.dn = 'cookieSupport';
        x.do = 'uriSchemeSmsTo';
        x.dp = 'csd';
        x.dr = 'drmOmaForwardLock';
        x.dv = 'accessDom';
        x.dw = 'userMedia';
        x.dx = 'orientation';

        x.a = 'isRobot';
        x.b = 'osRim';
        x.c = 'isDownloader';
        x.d = 'osWindowsRt';
        x.e = 'isEReader';
        x.f = 'osWindowsMobile';
        x.g = 'isTablet';
        x.h = 'osVersion';
        x.i = 'osWindowsPhone';
        x.j = 'isFeedReader';
        x.k = 'vendor';
        x.l = 'osSymbian';
        x.m = 'browserVersion';
        x.n = 'browserName';
        x.o = 'model';
        x.p = 'isChecker';
        x.q = 'osiOs';
        x.r = 'osBada';
        x.s = 'isTV';
        x.t = 'osWebOs';
        x.u = 'isMediaPlayer';
        x.v = 'osAndroid';
        x.w = 'isSetTopBox';
        x.x = 'isApp';
        x.y = 'osName';
        x.z = 'browserRenderingEngine';

        return x;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getDeviceAtlasServerPropsMap)', e);
    }
}

PUSHPLANET_ANALYTICS.prototype.getDeviceAtlasServerPropsArr = function () {
    try {
        return ['ea', 'eb', 'ec', 'ed', 'ef', 'eg', 'eh', 'ei', 'ej', 'ek', 'el', 'em', 'en', 'eo', 'ep', 'eq', 'er', 'es', 'et', 'eu', 'ev', 'ew', 'ex', 'fa', 'fb', 'fc', 'fd', 'fe', 'ga', 'gb', 'gc', 'ge', 'ba', 'bb', 'bd', 'bg', 'bi', 'bl', 'bm', 'bp', 'bs', 'bz', 'cd', 'cl', 'ci', 'cr', 'cx', 'db', 'dc', 'dg', 'dh', 'dq', 'ds', 'dt', 'du', 'ck', 'cn', 'ch', 'bt', 'df', 'dd', 'de', 'bc', 'bq', 'bu', 'cc', 'ce', 'cu', 'ca', 'bw', 'cm', 'cy', 'cz', 'ha', 'hb', 'hc', 'ia', 'ib', 'ic', 'ie', 'ja', 'jb', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az', 'be', 'bf', 'bh', 'bj', 'bk', 'bn', 'bo', 'br', 'bv', 'bx', 'by', 'cb', 'cf', 'cg', 'cj', 'co', 'cp', 'cq', 'cs', 'ct', 'cv', 'cw', 'da', 'di', 'dj', 'dk', 'dl', 'dm', 'dn', 'do', 'dp', 'dr', 'dv', 'dw', 'dx', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getDeviceAtlasServerPropsArr)', e);
    }
}

PUSHPLANET_ANALYTICS.prototype.getDeviceAtlasServerPropsInclude = function () {
    try {
        return ',primaryHardwareType,mobileDevice,isApp,isTablet,isMobilePhone,model,vendor,touchScreen,osName,osVersion,browserName,browserVersion,osAndroid,osiOs,isRobot,botName,';
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getDeviceAtlasServerPropsInclude)', e);
    }
}

PUSHPLANET_ANALYTICS.prototype.reduceDeviceAtlasServerProps = function (invalObj) {
    try {
        if (typeof invalObj !== 'object' || !invalObj) {
            return {};
        }

        var DEVICE_ATLAS_SERVER_PROPS_MAP = this.getDeviceAtlasServerPropsMap();
        var DEVICE_ATLAS_SERVER_PROPS_ARR = this.getDeviceAtlasServerPropsArr();
        var DEVICE_ATLAS_SERVER_PROPS_INCLUDE = this.getDeviceAtlasServerPropsInclude();

        var outval = invalObj;

        if (outval.hasOwnProperty('properties') && typeof outval.properties === 'object' && outval.properties) {
            outval = outval.properties;
        }

        var prop = '';

        for (var i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
            prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
            if (DEVICE_ATLAS_SERVER_PROPS_MAP.hasOwnProperty(prop) && DEVICE_ATLAS_SERVER_PROPS_MAP[prop] && outval.hasOwnProperty(DEVICE_ATLAS_SERVER_PROPS_MAP[prop]) && DEVICE_ATLAS_SERVER_PROPS_INCLUDE.indexOf(',' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + ',') === -1) {
                delete outval[DEVICE_ATLAS_SERVER_PROPS_MAP[prop]];
            }
        }

        outval = JSON.stringify(outval);

        for (var i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
            prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
            if (DEVICE_ATLAS_SERVER_PROPS_MAP.hasOwnProperty(prop) && DEVICE_ATLAS_SERVER_PROPS_MAP[prop] && outval.indexOf('"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '"') >= 0) {
                outval = outval.replace(('"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '"'), ('"' + prop + '"'));
            }
        }

        outval = outval.replace(new RegExp(':false,', 'g'), ':"-",');
        outval = outval.replace(new RegExp(':true,', 'g'), ':"_",');

        outval = outval.replace(new RegExp(':false}', 'g'), ':"-"}');
        outval = outval.replace(new RegExp(':true}', 'g'), ':"_"}');

        return JSON.parse(outval);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.reduceDeviceAtlasServerProps)', e);
        return invalObj;
    }
}

PUSHPLANET_ANALYTICS.prototype.expandDeviceAtlasServerProps = function (invalObj) {
    try {
        if (typeof invalObj !== 'object' || !invalObj) {
            return {};
        }

        var DEVICE_ATLAS_SERVER_PROPS_MAP = this.getDeviceAtlasServerPropsMap();
        var DEVICE_ATLAS_SERVER_PROPS_ARR = this.getDeviceAtlasServerPropsArr();
        var DEVICE_ATLAS_SERVER_PROPS_INCLUDE = this.getDeviceAtlasServerPropsInclude();

        var outval = invalObj;

        if (outval.hasOwnProperty('properties') && typeof outval.properties === 'object' && outval.properties) {
            outval = outval.properties;
        }

        outval = JSON.stringify(outval);

        var prop = '';

        for (var i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
            prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
            if (DEVICE_ATLAS_SERVER_PROPS_MAP.hasOwnProperty(prop) && outval.indexOf('"' + prop + '"') >= 0) {
                outval = outval.replace(('"' + prop + '"'), ('"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '"'));
            }
        }

        outval = outval.replace(new RegExp(':"-"}', 'g'), ':false}');
        outval = outval.replace(new RegExp(':"_"}', 'g'), ':true}');

        outval = outval.replace(new RegExp(':"-",', 'g'), ':false,');
        outval = outval.replace(new RegExp(':"_",', 'g'), ':true,');

        return JSON.parse(outval);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.expandDeviceAtlasServerProps)', e);
        return invalObj;
    }
}


PUSHPLANET_ANALYTICS.prototype.expandDeviceAtlasServerPropsFromAzure = function (inval) {
    try {
        if (inval === '' || !inval) {
            return '';
        }

        var DEVICE_ATLAS_SERVER_PROPS_MAP = this.getDeviceAtlasServerPropsMap();
        var DEVICE_ATLAS_SERVER_PROPS_ARR = this.getDeviceAtlasServerPropsArr();

        var outval = '{"' + inval.split('zzzz').join('"') + '"}';

        outval = outval.split('~').join('|#');
        outval = outval.split('*').join('|@');

        outval = outval.split('|').join('":"');
        outval = outval.split('$').join('":');
        outval = outval.split('@').join('_","');
        outval = outval.split('#').join('-","');
        outval = outval.split('%').join('","');
        outval = outval.split('^').join(',"');

        outval = outval.split('aaaa').join('~');
        outval = outval.split('bbbb').join('*');
        outval = outval.split('cccc').join('|');
        outval = outval.split('dddd').join('$');
        outval = outval.split('eeee').join('@');
        outval = outval.split('ffff').join('#');
        outval = outval.split('gggg').join('%');
        outval = outval.split('hhhh').join('^');

        outval = outval.split(':"-"').join(':false');
        outval = outval.split(':"_"').join(':true');

        var prop = '';

        for (var i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
            prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
            if (DEVICE_ATLAS_SERVER_PROPS_MAP.hasOwnProperty(prop)) {
                if (outval.indexOf(',"' + prop + '":') >= 0) {
                    outval = outval.replace((',"' + prop + '":'), (',"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '":'));
                }
                else if (outval.indexOf('{"' + prop + '":') >= 0) {
                    outval = outval.replace(('{"' + prop + '":'), ('{"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '":'));
                }
            }
        }

        // logger('EXPANDDEVICEATLASSERVERPROPS....');
        // console.log(JSON.parse(outval));

        return outval;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.expandDeviceAtlasServerPropsFromAzure)', e);
        return inval;
    }
}


PUSHPLANET_ANALYTICS.prototype.setGeoAndDeviceData = function (json) {
    try {
        var geoCookieMissing = false;
        var deviceCookieMissing = false;

        if (typeof json === 'object' && json !== null && json.hasOwnProperty("geo") && json.geo.hasOwnProperty("ip") && json.geo.ip) {
            if (!this.VARS.ip_address) {
                geoCookieMissing = true;
            }

            this.VARS.ip_address = json.geo.ip;
            this.VARS.landing_page_ip = json.geo.ip;

            if (json.geo.hasOwnProperty("continent_code") && json.geo.continent_code != null) this.VARS.continent = json.geo.continent_code;
            if (json.geo.hasOwnProperty("continent_name") && json.geo.continent_name != null) this.VARS.continent_name = json.geo.continent_name;
            if (json.geo.hasOwnProperty("country_code") && json.geo.country_code != null) this.VARS.country = json.geo.country_code;
            if (json.geo.hasOwnProperty("country_name") && json.geo.country_name != null) this.VARS.country_name = json.geo.country_name;
            if (json.geo.hasOwnProperty("region_name") && json.geo.region_name != null) this.VARS.region_name = json.geo.region_name;
            if (json.geo.hasOwnProperty("region_code") && json.geo.region_code != null) this.VARS.state = json.geo.region_code;
            if (json.geo.hasOwnProperty("city") && json.geo.city != null) this.VARS.city = json.geo.city;
            if (json.geo.hasOwnProperty("zipcode") && json.geo.zipcode != null) this.VARS.zipcode = json.geo.zipcode;
            if (json.geo.hasOwnProperty("latitude") && json.geo.latitude != null) this.VARS.latitude = json.geo.latitude;
            if (json.geo.hasOwnProperty("longitude") && json.geo.longitude != null) this.VARS.longitude = json.geo.longitude;
            if (json.geo.hasOwnProperty("metro_code") && json.geo.metro_code != null) this.VARS.metro_code = json.geo.metro_code;
            if (json.geo.hasOwnProperty("time_zone") && json.geo.time_zone != null) this.VARS.time_zone = json.geo.time_zone;
            if (json.geo.hasOwnProperty("area_code") && json.geo.area_code != null) this.VARS.area_code = json.geo.area_code;
            this.VARS.geo_source = "azure-maxmind";
        }

        if (typeof json === 'object' && json !== null && json.hasOwnProperty("da") && json.da) {
            if (!this.VARS.DeviceAtlas.primaryHardwareType) {
                deviceCookieMissing = true;
            }

            var expanded = JSON.parse(this.expandDeviceAtlasServerPropsFromAzure(json.da));
            this.VARS.DeviceAtlas = expanded;

            this.logger('PUSHPLANET: successfully expanded the reduced device props from azure:');
            //this.logger(this.VARS.DeviceAtlas);

            if (json.hasOwnProperty("devsrc")) {
                this.VARS.device_source = "modulus_" + json.devsrc;
            } else {
                this.VARS.device_source = "modulus_unspecified";
            }
        }



        if (geoCookieMissing || deviceCookieMissing) {
            if (typeof PP_DATA !== 'object' || PP_DATA === null) {
                PP_DATA = {};
            }

            if (geoCookieMissing) {
                PP_DATA.geo = {};

                PP_DATA.geo['ip'] = this.VARS.ip_address;
                PP_DATA.geo['co'] = this.VARS.continent;
                PP_DATA.geo['cc'] = this.VARS.country;
                PP_DATA.geo['cn'] = this.VARS.country_name;
                PP_DATA.geo['rn'] = this.VARS.region_name;
                PP_DATA.geo['s'] = this.VARS.state;
                PP_DATA.geo['c'] = this.VARS.city;
                PP_DATA.geo['z'] = this.VARS.zipcode;
                PP_DATA.geo['lat'] = this.VARS.latitude;
                PP_DATA.geo['lon'] = this.VARS.longitude;
                PP_DATA.geo['mc'] = this.VARS.metro_code;
                PP_DATA.geo['tz'] = this.VARS.time_zone;
                PP_DATA.geo['ac'] = this.VARS.area_code;
                //this.logger('PUSHPLANET: wrote geo data to cookie.  analytics.setGeoAndDeviceData()');
            }

            if (deviceCookieMissing) {
                PP_DATA['da'] = this.reduceDeviceAtlasServerProps(this.VARS.DeviceAtlas);
                deviceCookieMissing = true;
                //this.logger('PUSHPLANET: wrote device data to cookie.  analytics.setGeoAndDeviceData()');
            }

            if (geoCookieMissing || deviceCookieMissing) {
                COOKIE.set('pp_data', PP_DATA);
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.setGeoAndDeviceData)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.getGeoAndDeviceDataFromCookie = function () {
    try {
        if (typeof PP_DATA !== 'object' || PP_DATA === null) {
            PP_DATA = {};
        }

        if (PP_DATA.hasOwnProperty('geo') && typeof PP_DATA['geo'] === 'object' && PP_DATA['geo'] !== null) {
            this.VARS.geo_source = "cookie";
            this.VARS.device_source = "cookie";

            if (PP_DATA.geo.hasOwnProperty('ip')) this.VARS.ip_address = PP_DATA.geo['ip'];
            if (PP_DATA.geo.hasOwnProperty('ip')) this.VARS.landing_page_ip = PP_DATA.geo['ip'];
            if (PP_DATA.geo.hasOwnProperty('co')) this.VARS.continent = PP_DATA.geo['co'];
            if (PP_DATA.geo.hasOwnProperty('cc')) this.VARS.country = PP_DATA.geo['cc'];
            if (PP_DATA.geo.hasOwnProperty('cn')) this.VARS.country_name = PP_DATA.geo['cn'];
            if (PP_DATA.geo.hasOwnProperty('rn')) this.VARS.region_name = PP_DATA.geo['rn'];
            if (PP_DATA.geo.hasOwnProperty('s')) this.VARS.state = PP_DATA.geo['s'];
            if (PP_DATA.geo.hasOwnProperty('c')) this.VARS.city = PP_DATA.geo['c'];
            if (PP_DATA.geo.hasOwnProperty('z')) this.VARS.zipcode = PP_DATA.geo['z'];
            if (PP_DATA.geo.hasOwnProperty('lat')) this.VARS.latitude = PP_DATA.geo['lat'];
            if (PP_DATA.geo.hasOwnProperty('lon')) this.VARS.longitude = PP_DATA.geo['lon'];
            if (PP_DATA.geo.hasOwnProperty('mc')) this.VARS.metro_code = PP_DATA.geo['mc'];
            if (PP_DATA.geo.hasOwnProperty('tz')) this.VARS.time_zone = PP_DATA.geo['tz'];
            if (PP_DATA.geo.hasOwnProperty('ac')) this.VARS.area_code = PP_DATA.geo['ac'];
        }

        if (PP_DATA.hasOwnProperty('da') && typeof PP_DATA['da'] === 'object' && PP_DATA['da'] !== null) {
            this.VARS.DeviceAtlas = this.expandDeviceAtlasServerProps(PP_DATA['da']);
        }

        if (this.VARS.DeviceAtlas.primaryHardwareType) {
            this.logger('PUSHPLANET: found device data from cookie (' + this.VARS.DeviceAtlas.primaryHardwareType + ')');
        }

        if (this.VARS.ip_address) {
            this.logger('PUSHPLANET: found geo data from cookie (' + this.VARS.ip_address + ')');
        }

        //this.logger(JSON.stringify(cobj, null, 2));
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getGeoAndDeviceDataFromCookie)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.loadMasterRulesViewEvents = function () {
    try {
        var lbEvMap = this.VARS.page_events;
        var foundViewEvent = false;
        var lastViewTimestamp = 0;
        var viewTimestamp = 0;

        var ignoreInline = false;
        if (typeof PUSHPLANET_PAGE_MASTER_RULES !== "undefined" && (typeof PUSHPLANET_PAGE_MASTER_RULES.IgnoreForInlineBoxes === "undefined" || PUSHPLANET_PAGE_MASTER_RULES.IgnoreForInlineBoxes === true)) {
            this.logger("IgnoreForInlineBoxes: Master rule ignoring inline lightboxes (view events).");
            ignoreInline = true;
        }

        for (lbid in lbEvMap) {
            if (lbEvMap.hasOwnProperty(lbid) && lbEvMap[lbid].hasOwnProperty('view') && lbEvMap[lbid]['view']['cnt'] > 0 && lbEvMap[lbid]['view']['ts'].length > 0) {
                foundViewEvent = true;
                this.logger('PUSHPLANET: loadMasterRulesViewEvents ==> foundViewEvent ==> ' + lbid);
                var ts_len = lbEvMap[lbid]['view']['ts'].length;
                viewTimestamp = lbEvMap[lbid]['view']['ts'][ts_len - 1];
                if (lastViewTimestamp < viewTimestamp) {
                    lastViewTimestamp = viewTimestamp;
                }
            }
        }

        if (this.IsNewVisitor) {
            this.VARS.master_rules["Once per visitor"] = true;
            this.VARS.master_rules["Once per session"] = true;
            this.VARS.master_rules["Once per pageview"] = true;
        } else if (this.IsNewSession) {
            this.VARS.master_rules["Once per visitor"] = !foundViewEvent;
            this.VARS.master_rules["Once per session"] = true;
            this.VARS.master_rules["Once per pageview"] = true;
        } else {
            this.VARS.master_rules["Once per visitor"] = !foundViewEvent;
            this.VARS.master_rules["Once per session"] = !foundViewEvent || (lastViewTimestamp < this.SessionStart);
            this.VARS.master_rules["Once per pageview"] = !foundViewEvent || (lastViewTimestamp < this.PageviewStart);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.loadMasterRulesViewEvents)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.loadMasterRulesSubmitEvents = function () {
    try {
        var lbEvMap = this.VARS.page_events;
        var foundSubmitEvent = false;
        var lastSubmitTimestamp = 0;
        var submitTimestamp = 0;

        var ignoreInline = false;
        if (typeof PUSHPLANET_PAGE_MASTER_RULES !== "undefined" && (typeof PUSHPLANET_PAGE_MASTER_RULES.IgnoreForInlineBoxes === "undefined" || PUSHPLANET_PAGE_MASTER_RULES.IgnoreForInlineBoxes === true)) {
            this.logger("IgnoreForInlineBoxes: Master rule ignoring inline lightboxes (submit events).");
            ignoreInline = true;
        }

        for (lbid in lbEvMap) {
            if (lbEvMap.hasOwnProperty(lbid) && lbEvMap[lbid].hasOwnProperty('submit') && lbEvMap[lbid]['submit']['cnt'] > 0) {
                foundSubmitEvent = true;
                this.logger('PUSHPLANET: loadMasterRulesSubmitEvents ==> foundSubmitEvent ==> ' + lbid);
                break;
            }
        }

        this.VARS.master_rules["Until form is submitted"] = !foundSubmitEvent;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.loadMasterRulesSubmitEvents)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.loadPageActivity = function () {
    try {
        this.loadAllEventsByPageGuid();
        this.loadMasterRulesViewEvents();
        this.loadMasterRulesSubmitEvents();

        //this.logger(this.VARS.page_events, true);

        var lbEvMap = this.VARS.page_events;
        var viewTimestamp = 0;

        for (lbid in lbEvMap) {
            if (lbEvMap.hasOwnProperty(lbid)) {
                if (!this.VARS.lightbox_activity.hasOwnProperty(lbid)) {
                    this.VARS.lightbox_activity[lbid] = {};
                }

                this.VARS.lightbox_activity[lbid]["Until form is submitted"] = (!lbEvMap[lbid].hasOwnProperty('submit') || lbEvMap[lbid]['submit']['cnt'] == 0); //true only if visitor doesn't contain a "submit" event for this lightbox
                this.VARS.lightbox_activity[lbid]["Until lightbox is closed"] = (!lbEvMap[lbid].hasOwnProperty('close') || lbEvMap[lbid]['close']['cnt'] == 0); //true only if visitor doesn't contain a "close" event for this lightbox

                if (lbEvMap[lbid].hasOwnProperty('view') && lbEvMap[lbid]['view']['cnt'] > 0 && lbEvMap[lbid]['view']['ts'].length > 0) {
                    var ts_len = lbEvMap[lbid]['view']['ts'].length;
                    viewTimestamp = lbEvMap[lbid]['view']['ts'][ts_len - 1];
                    this.VARS.lightbox_activity[lbid]["Days since last view"] = Math.floor((this.PageviewStart - viewTimestamp) / (1000 * 60 * 60 * 24));
                } else {
                    viewTimestamp = 0;
                    this.VARS.lightbox_activity[lbid]["Days since last view"] = -1;
                }

                if (this.IsNewVisitor) {
                    this.VARS.lightbox_activity[lbid]["Once per visitor"] = true; //true because brand new visitor
                    this.VARS.lightbox_activity[lbid]["Once per session"] = true; //true because brand new visitor
                    this.VARS.lightbox_activity[lbid]["Once per pageview"] = true; //true because brand new visitor
                } else if (this.IsNewSession) {
                    this.VARS.lightbox_activity[lbid]["Once per visitor"] = (!lbEvMap[lbid].hasOwnProperty('view') || lbEvMap[lbid]['view']['cnt'] == 0); //true only if visitor doesn't contain a "view" event for this lightbox
                    this.VARS.lightbox_activity[lbid]["Once per session"] = true; //true because brand new session
                    this.VARS.lightbox_activity[lbid]["Once per pageview"] = true; //true because brand new session
                } else {
                    this.VARS.lightbox_activity[lbid]["Once per visitor"] = (!lbEvMap[lbid].hasOwnProperty('view') || lbEvMap[lbid]['view']['cnt'] == 0); //true only if visitor doesn't contain a "view" event for this lightbox
                    this.VARS.lightbox_activity[lbid]["Once per session"] = (!lbEvMap[lbid].hasOwnProperty('view') || lbEvMap[lbid]['view']['cnt'] == 0) || (viewTimestamp > 0 && viewTimestamp < this.SessionStart); //or, has property, but timestamp of "view" event is older than session start
                    this.VARS.lightbox_activity[lbid]["Once per pageview"] = (!lbEvMap[lbid].hasOwnProperty('view') || lbEvMap[lbid]['view']['cnt'] == 0) || (viewTimestamp > 0 && viewTimestamp < this.PageviewStart); //or, has property, but timestamp of "view" event is older than pageview start
                }
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.loadPageActivity)', e);
    }
};




PUSHPLANET_ANALYTICS.prototype.getBaseDomain = function (host) {
    var baseName = this.getBaseDomainName(host);
    var baseDomain = host.substring(host.indexOf(baseName));
    return baseDomain;
};

PUSHPLANET_ANALYTICS.prototype.getBaseDomainName = function (url) {
    //http://stackoverflow.com/questions/8253136/how-to-get-domain-name-only-using-javascript
    try {
        var TLDs = ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--0zwm56d", "xn--11b5bs3a9aj6g", "xn--3e0b707e", "xn--45brj9c", "xn--80akhbyknj4f", "xn--90a3ac", "xn--9t4b11yi5a", "xn--clchc0ea0b2g2a9gcd", "xn--deba0ad", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--g6w251d", "xn--gecrj9c", "xn--h2brj9c", "xn--hgbk6aj7f53bba", "xn--hlcj6aya9esc7a", "xn--j6w193g", "xn--jxalpdlp", "xn--kgbechtv", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgbaam7a8h", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zckzah", "xxx", "ye", "yt", "za", "zm", "zw"].join();
        var parts = url.split('.');
        if (parts[0] === 'www' && parts[1] !== 'com') {
            parts.shift();
        }
        var ln = parts.length
            , i = ln
            , minLength = parts[parts.length - 1].length
            , part;

        // iterate backwards
        while (part = parts[--i]) {
            // stop when we find a non-TLD part
            if (i === 0                    // 'asia.com' (last remaining must be the SLD)
                || i < ln - 2                // TLDs only span 2 levels
                || part.length < minLength // 'www.cn.com' (valid TLD as second-level domain)
                || TLDs.indexOf(part) < 0  // officialy not a TLD
            ) {
                return part;
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getBaseDomainName)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.formatDate = function (d) {
    try {
        if (d.getMonth && d.getDate && d.getFullYear) {
            var time = (1 + d.getMonth()) + "/" + d.getDate() + "/" + d.getFullYear() + " ";
            var hours = d.getHours();
            var minutes = this.padStr(d.getMinutes());
            if (hours > 12)
                time += (hours - 12) + ":" + minutes + " PM";
            else if (hours == 12)
                time += "12:" + minutes + " PM";
            else if (hours == 0)
                time += "12:" + minutes + " AM";
            else
                time += hours + ":" + minutes + " AM";

            return time;
        }

        return "";
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.formatDate)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.formatDateWithSeconds = function (d) {
    try {
        var time = (1 + d.getMonth()) + "/" + d.getDate() + "/" + d.getFullYear() + " ";
        var hours = d.getHours();
        var minutes = this.padStr(d.getMinutes());
        var seconds = this.padStr(d.getSeconds());
        if (hours > 12)
            time += (hours - 12) + ":" + minutes + ":" + seconds + " PM";
        else if (hours == 12)
            time += "12:" + minutes + ":" + seconds + " PM";
        else if (hours == 0)
            time += "12:" + minutes + ":" + seconds + " AM";
        else
            time += hours + ":" + minutes + ":" + seconds + " AM";

        return time;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.formatDateWithSeconds)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.formatDateWithSecondsForSalesforce = function (d) {
    try {
        //yyyy-MM-dd HH:mm:ss
        return d.getFullYear() + "-" + this.padStr(1 + d.getMonth()) + "-" + d.getDate() + " " + this.padStr(d.getHours()) + ":" + this.padStr(d.getMinutes()) + ":" + this.padStr(d.getSeconds());
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.formatDateWithSecondsForSalesforce)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.getReadableHMS = function (seconds) {
    try {
        if (seconds < 60) {
            return seconds + " secs";
        } else if (seconds < 3600) {
            var minutes = Math.floor(seconds / 60);
            seconds = seconds - (minutes * 60);
            return minutes + " mins " + seconds + " secs";
        } else {
            var hours = Math.floor(seconds / 3600);
            seconds = seconds - (hours * 3600);
            var minutes = Math.floor(seconds / 60);
            seconds = seconds - (minutes * 60);
            return hours + " hrs " + minutes + " mins " + seconds + " secs";
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getReadableHMS)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.padStr = function (i) {
    try {
        return (i < 10) ? "0" + i : "" + i;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.padStr)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.getSearchEngine = function (url) {
    try {
        if (!url) {
            return "";
        }

        var bd = url.toLowerCase();

        if (bd.indexOf('http://') === 0)
            bd = bd.substring(7);
        else if (bd.indexOf('https://') === 0)
            bd = bd.substring(8);

        if (bd.indexOf('?') > 0)
            bd = bd.split('?')[0];
        if (bd.indexOf('/') > 0)
            bd = bd.split('/')[0];
        if (bd.indexOf('#') > 0)
            bd = bd.split('#')[0];
        if (bd.indexOf(':') > 0)
            bd = bd.split(':')[0];

        if (bd.indexOf('.google.') >= 0 || bd.indexOf('google.') === 0)
            return 'google';
        if (bd.indexOf('.bing.') >= 0 || bd.indexOf('bing.') === 0)
            return 'bing';
        if (bd.indexOf('.yahoo.') >= 0 || bd.indexOf('yahoo.') === 0)
            return 'yahoo';
        if (bd.indexOf('.ask.') >= 0 || bd.indexOf('ask.') === 0)
            return 'ask';
        if (bd.indexOf('.aol.') >= 0 || bd.indexOf('aol.') === 0)
            return 'aol';
        if (bd.indexOf('.myway.') >= 0 || bd.indexOf('myway.') === 0)
            return 'myway';
        if (bd.indexOf('.baidu.') >= 0 || bd.indexOf('baidu.') === 0)
            return 'baidu';
        if (bd.indexOf('.yandex.') >= 0 || bd.indexOf('yandex.') === 0)
            return 'yandex';
        if (bd.indexOf('.excite.') >= 0)
            return 'excite';
        if (bd.indexOf('.duckduckgo.') >= 0 || bd.indexOf('duckduckgo.') === 0)
            return 'duckduckgo';
        if (bd.indexOf('.lycos.') >= 0)
            return 'lycos';
        if (bd.indexOf('.wolframalpha.') >= 0 || bd.indexOf('wolframalpha.') === 0)
            return 'wolframalpha';
        if (bd.indexOf('.wow.com') >= 0)
            return 'wow';
        if (bd.indexOf('.webcrawler.') >= 0 || bd.indexOf('webcrawler.') === 0)
            return 'webcrawler';
        if (bd.indexOf('.mywebsearch.') >= 0 || bd.indexOf('mywebsearch.') === 0)
            return 'mywebsearch';
        if (bd.indexOf('.infospace.') >= 0 || bd.indexOf('infospace.') === 0)
            return 'infospace';
        if (bd.indexOf('.info.com') >= 0)
            return 'info';
        if (bd.indexOf('.contenko.') >= 0)
            return 'contenko';
        if (bd.indexOf('.dogpile.') >= 0)
            return 'dogpile';
        if (bd.indexOf('.alhea.') >= 0)
            return 'alhea';
        if (bd.indexOf('.ixquick.') >= 0 || bd.indexOf('ixquick.') === 0)
            return 'ixquick';

        return "";
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getSearchEngine)', e);
        return "";
    }
};

PUSHPLANET_ANALYTICS.prototype.isGoogleAdWordsUrl = function (landingUrl, referringUrl, search_engine) {
    try {
        if (landingUrl && (landingUrl.toLowerCase().indexOf('?gclid=') > 0 || landingUrl.toLowerCase().indexOf('&gclid=') > 0))
            return true;

        if (!referringUrl || !search_engine || search_engine.toLowerCase() !== "google")
            return false;

        return (referringUrl.toLowerCase().indexOf('/aclk?') > 0);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.isGoogleAdWordsUrl)', e);
        return false;
    }
};

PUSHPLANET_ANALYTICS.prototype.isFacebookUrl = function (url) {
    try {
        if (!url) {
            return false;
        }

        var bd = url.toLowerCase();

        if (bd.indexOf('http://') === 0)
            bd = bd.substring(7);
        else if (bd.indexOf('https://') === 0)
            bd = bd.substring(8);

        if (bd.indexOf('?') > 0)
            bd = bd.split('?')[0];
        if (bd.indexOf('/') > 0)
            bd = bd.split('/')[0];
        if (bd.indexOf('#') > 0)
            bd = bd.split('#')[0];
        if (bd.indexOf(':') > 0)
            bd = bd.split(':')[0];

        if (bd.indexOf('.facebook.com') >= 0 || bd.indexOf('facebook.com') === 0)
            return true;
        else
            return false;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.isFacebookUrl)', e);
        return false;
    }
};

PUSHPLANET_ANALYTICS.prototype.isAndroidAppUrl = function (url) {
    try {
        if (!url) {
            return false;
        }

        var bd = url.toLowerCase();

        if (bd.indexOf('android-app://') === 0)
            return true;
        else
            return false;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.isAndroidAppUrl)', e);
        return false;
    }
};

PUSHPLANET_ANALYTICS.prototype.removeUrlBeginning = function (url) {
    try {
        if (url.length == 0) return "";

        if (url.toLowerCase().indexOf('https://www.') == 0) return url.substring(12);
        else if (url.toLowerCase().indexOf('http://www.') == 0) return url.substring(11);
        else if (url.toLowerCase().indexOf('https://') == 0) return url.substring(8);
        else if (url.toLowerCase().indexOf('http://') == 0) return url.substring(7);
        else return url;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.removeUrlBeginning)', e);
        return "";
    }
};

PUSHPLANET_ANALYTICS.prototype.removeUrlProtocol = function (url) {
    try {
        if (url.length == 0) return "";

        if (url.toLowerCase().indexOf('https://') == 0) return url.substring(8);
        else if (url.toLowerCase().indexOf('http://') == 0) return url.substring(7);
        else return url;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.removeUrlProtocol)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.removeUrlEnding = function (url) {
    try {
        if (url.length == 0) return "";

        var ending = url.substring(url.length - 1);
        if (ending == '/' || ending == '#' || ending == '?' || ending == '&') {
            url = url.substring(0, url.length - 1);
        }
        return url;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.removeUrlEnding)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.getUrlBaseDomain = function (url) {
    try {
        if (url == undefined || url.length == 0) return "";

        var a = url.split(/\/\//g)[1].split(/[:\/?#]/)[0].split('.');
        var f = (a.length > 1 ? (a[a.length - 2] + '.' + a[a.length - 1]) : "").toLowerCase();

        return f;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getUrlBaseDomain)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.getUrlSubdomain = function (url) {
    try {
        if (url.length == 0) return "";

        return this.removeUrlBeginning(url).split(/[:\/?#]/)[0];
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getUrlSubdomain)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.doSubdomainsMatch = function (url1, url2) {
    try {
        return (url1.length > 0 && url2.length > 0 && this.getUrlSubdomain(url1).toLowerCase() == this.getUrlSubdomain(url2).toLowerCase());
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.doSubdomainsMatch)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.hasUTMCampaign = function (url) {
    try {
        if (url.length > 0 && url.indexOf('?') !== -1) {
            var queryString = url.split('?')[1];
            if (queryString.length > 0 && queryString.indexOf('=') !== -1) {
                var queryVars = queryString.split('&');
                for (var i = 0; i < queryVars.length; i++) {
                    var pair = queryVars[i].split('=');
                    if (decodeURIComponent(pair[0]).toLowerCase() == "utm_campaign") {
                        return true;
                    }
                }
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.hasUTMCampaign)', e);
    }

    return false;
};

PUSHPLANET_ANALYTICS.prototype.isStringAnInteger = function (str) {
    try {
        if (str.length == 0) return false;
        return !isNaN(str);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.isStringAnInteger)', e);
    }

    return false;
};

PUSHPLANET_ANALYTICS.prototype.updatePageActivity = function (eventKey, lid, timestamp) {
    try {
        this.logger('updatePageActivity: ' + eventKey + ' ==> ' + lid);

        if (!this.VARS.lightbox_activity.hasOwnProperty(lid)) {
            this.VARS.lightbox_activity[lid] = {};
        }

        if (typeof PUSHPLANET_PAGE_MASTER_RULES !== "undefined" && (typeof PUSHPLANET_PAGE_MASTER_RULES.IgnoreForInlineBoxes === "undefined" || PUSHPLANET_PAGE_MASTER_RULES.IgnoreForInlineBoxes === true)) {
            //this.logger("PUSHPLANET: updatePageActivity ==> IgnoreForInlineBoxes Master rule ignoring inline lightboxes (view events).");
        }

        if (eventKey === 'view') {
            this.VARS.lightbox_activity[lid]["Once per visitor"] = false;
            this.VARS.lightbox_activity[lid]["Once per session"] = false;
            this.VARS.lightbox_activity[lid]["Once per pageview"] = false;
            this.VARS.lightbox_activity[lid]["Days since last view"] = 0;

            this.VARS.master_rules["Once per visitor"] = false;
            this.VARS.master_rules["Once per session"] = false;
            this.VARS.master_rules["Once per pageview"] = false;
        } else if (eventKey === 'submit') {
            this.VARS.lightbox_activity[lid]["Until form is submitted"] = false;
            this.VARS.master_rules["Until form is submitted"] = false;
        } else if (eventKey === 'close') {
            this.VARS.lightbox_activity[lid]["Until lightbox is closed"] = false;
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.updatePageActivity)', e);
    }
};


//  |id:4efe5200-6208-4728-82aa-16b98d6a340c*view:12:1428957817,1428957817,1428957817,1428957817,1428957817,...*submit:7:1428957817,1428957817,1428957817,...|id:.....
PUSHPLANET_ANALYTICS.prototype.setPageEvent = function (eventKey, lid) {
    try {
        var timestamp = new Date().getTime();

        if (!this.VARS.page_events.hasOwnProperty(lid)) {
            this.VARS.page_events[lid] = { 'view': { 'cnt': 0, 'ts': [] }, 'submit': { 'cnt': 0, 'ts': [] }, 'redirect': { 'cnt': 0, 'ts': [] }, 'download': { 'cnt': 0, 'ts': [] }, 'close': { 'cnt': 0, 'ts': [] } };
        }

        if (!this.VARS.page_events[lid].hasOwnProperty(eventKey)) {
            this.VARS.page_events[lid][eventKey] = { 'cnt': 1, 'ts': [] };
        } else {
            this.VARS.page_events[lid][eventKey]['cnt']++;
        }

        this.VARS.page_events[lid][eventKey]['ts'].push(timestamp);
        this.updatePageActivity(eventKey, lid, timestamp);

        PP_DATA.page_events = this.VARS.page_events;
        COOKIE.set('pp_data', PP_DATA);

        this.logger('ANALYTICS.setPageEvent - ' + eventKey + ', ' + lid + ', ' + this.VARS.page_events[lid][eventKey]['ts'].length);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.setPageEvent)', e);
    }
};

//  id:4efe5200-6208-4728-82aa-16b98d6a340c*view:12:1428957817,1428957817,1428957817,1428957817,1428957817,...*submit:7:1428957817,1428957817,1428957817,...
PUSHPLANET_ANALYTICS.prototype.parsePageEvents = function (boxEvents) {
    var hash = { 'view': { 'cnt': 0, 'ts': [] }, 'submit': { 'cnt': 0, 'ts': [] }, 'redirect': { 'cnt': 0, 'ts': [] }, 'download': { 'cnt': 0, 'ts': [] }, 'close': { 'cnt': 0, 'ts': [] } };
    try {
        var parts = boxEvents.split('*');
        var event;
        for (var x = 1; x < parts.length; x++) {
            if (parts[x].indexOf(':') > 0) {
                event = parts[x].split(':');
                if (event.length == 3 && hash.hasOwnProperty(event[0])) {
                    if (this.isStringAnInteger(event[1])) {
                        hash[event[0]]['cnt'] = parseInt(event[1]);
                    }
                    if (event[2].indexOf(',') > 0) {
                        var tss = event[2].split(',');
                        for (var y = 0; y < tss.length; y++) {
                            if (this.isStringAnInteger(tss[y])) {
                                hash[event[0]]['ts'].push(parseInt(tss[y]));
                            }
                        }
                    } else if (this.isStringAnInteger(event[2])) {
                        hash[event[0]]['ts'].push(parseInt(event[2]));
                    } else {
                        //this.logger('missed ts for ' + event[0] + ' event');
                    }
                }
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.parsePageEvents)', e);
    }

    return hash;
};

//  |id:4efe5200-6208-4728-82aa-16b98d6a340c*view:12:1428957817,1428957817,1428957817,1428957817,1428957817,...*submit:7:1428957817,1428957817,1428957817,...|id:.....
PUSHPLANET_ANALYTICS.prototype.loadAllEventsByPageGuid = function () {
    try {
        var cookieVal = PP_DATA.page_events;
        if (typeof cookieVal === 'object' && cookieVal !== null) {
            this.VARS.page_events = cookieVal;
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.loadAllEventsByPageGuid)', e);
    }
};

//returns: # of occurrances of event (int)
PUSHPLANET_ANALYTICS.prototype.getPageEventCount = function (eventKey, lightboxGUID, isPageIndependent, excludePageGUID) {
    var eventCount = 0;

    try {
        var lbEvMap = this.VARS.page_events;
        var viewTimestamp = 0;

        for (lbid in lbEvMap) {
            if ((lbid == lightboxGUID || isPageIndependent) && lbEvMap.hasOwnProperty(lbid) && lbEvMap[lbid].hasOwnProperty(eventKey)) {
                if (!isPageIndependent && lbid == lightboxGUID)
                    eventCount += lbEvMap[lbid][eventKey]['cnt'];
                else if (isPageIndependent && excludePageGUID == '')
                    eventCount += lbEvMap[lbid][eventKey]['cnt'];
                else if (isPageIndependent && excludePageGUID != '' && excludePageGUID != lbid)
                    eventCount += lbEvMap[lbid][eventKey]['cnt'];
            }
        }

        return eventCount;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getPageEventCount)', e);
    }

    return eventCount;
};

PUSHPLANET_ANALYTICS.prototype.getEventCountByPage = function (eventKey, lightboxGUID) {
    return this.getPageEventCount(eventKey, lightboxGUID, false, '');
};

PUSHPLANET_ANALYTICS.prototype.getEventCountAcrossAllPagees = function (eventKey) {
    return this.getPageEventCount(eventKey, '', true, '');
};

PUSHPLANET_ANALYTICS.prototype.getEventCountAcrossAllPageesExcept = function (eventKey, excludePageGUID) {
    return this.getPageEventCount(eventKey, '', true, excludePageGUID);
};

PUSHPLANET_ANALYTICS.prototype.setCurrent = function () {
    try {
        var maxCookieLength = 3000000;
        var cobj = PP_DATA.current;
        if (typeof cobj !== 'object' || cobj === null) {
            cobj = {};
        }

        var timestamp = new Date().getTime();

        var referring_url = "";
        var search_engine = "";
        if (document.referrer && document.referrer.length > 7) {
            referring_url = document.referrer;
            search_engine = this.getSearchEngine(referring_url);
        }

        var current_url = "";
        var domain_base = "";
        var domain_ending = "";
        var domain_protocol = "";
        if (window.location.href) {
            current_url = window.location.href;
            domain_protocol = window.location.protocol;
            domain_base = window.location.host;
            domain_ending = window.location.pathname + window.location.search + window.location.hash;
            this.VARS.current_page_url = current_url;
        }
        //this.logger('current_page_url: ' + current_url);

        var areMatchingDomains = this.doSubdomainsMatch(referring_url, current_url);
        var foundReferrer = referring_url.length > 0;

        if (cobj) {
            if (areMatchingDomains) {
                this.OverwriteCurrentCookie = false;
            }
            else if (this.isGoogleAdWordsUrl(current_url, referring_url, search_engine)) {
                this.OverwriteCurrentCookie = true;
            }
            else if (foundReferrer && this.isFacebookUrl(referring_url)) {
                this.OverwriteCurrentCookie = true;
            }
            else if (foundReferrer && search_engine !== "") {
                this.OverwriteCurrentCookie = true;
                this.VARS.search_engine = search_engine;
            }
            else if (foundReferrer && !areMatchingDomains) {
                this.OverwriteCurrentCookie = true;
            }
            //else if (this.hasUTMCampaign(current_url) && (!foundReferrer || !areMatchingDomains)) {
            //    this.OverwriteCurrentCookie = true;
            //}
            //else if (foundReferrer && cookieVal.indexOf("__rurl:") !== -1 && cookieVal.split("__rurl:")[1].length == 0) {
            //    this.OverwriteCurrentCookie = true;
            //}
        }
        else {
            this.OverwriteCurrentCookie = true;
            //if (foundReferrer && areMatchingDomains) referring_url = "";
        }

        if (this.VARS.IsPreview) {
            this.OverwriteCurrentCookie = true;
        }

        //Calculate Previous Pageview Timestamp
        this.PreviousPageviewTs = 0;

        if (cobj.hasOwnProperty('ppts')) {
            this.PreviousPageviewTs = cobj['ppts'];
        }

        cobj['ppts'] = timestamp;

        if (this.PreviousPageviewTs == 0 && cobj.hasOwnProperty('lts')) {
            this.PreviousPageviewTs = cobj['lts'];
        }

        //Calculate Page Visits
        this.VARS.page_visits = 0;

        if (cobj.hasOwnProperty('pvcnt')) {
            this.VARS.page_visits = cobj['pvcnt'] + 1;
            cobj['pvcnt'] = cobj['pvcnt'] + 1;
        } else {
            this.VARS.page_visits = 1;
            cobj['pvcnt'] = 1;
        }

        //Calculate Session
        this.IsNewSession = false;

        if (timestamp - this.PreviousPageviewTs > this.SessionLengthTicks) {
            this.SessionStart = timestamp;
            this.IsNewSession = true;
        }
        else if (cobj.hasOwnProperty('ss')) {
            this.SessionStart = cobj['ss'];
            this.IsNewSession = false;
        }

        if (this.SessionStart == 0) {
            this.SessionStart = timestamp;
            this.IsNewSession = true;
        }

        if (this.IsNewSession) {
            cobj['ss'] = this.SessionStart;
            //this.logger("New Session: " + new Date(this.SessionStart).toLocaleString());
        }
        else {
            //this.logger("Existing Session: " + new Date(this.SessionStart).toLocaleString());
        }

        //Write Cookie
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('prot')) cobj['prot'] = domain_protocol;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('dom')) cobj['dom'] = domain_base;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('rurl')) cobj['rurl'] = ((referring_url.length > 350) ? referring_url.substr(0, 350) : referring_url);
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('lurl')) cobj['lurl'] = ((domain_ending.length > 350) ? domain_ending.substr(0, 350) : domain_ending);
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('lts')) cobj['lts'] = timestamp;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('dev')) cobj['dev'] = this.VARS.device;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('os')) cobj['os'] = this.VARS.operating_system;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('bt')) cobj['bt'] = this.VARS.browser_type;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('bv')) cobj['bv'] = this.VARS.browser_version;

        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('ip')) cobj['ip'] = this.VARS.ip_address;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_co')) cobj['geo_co'] = this.VARS.continent;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_cc')) cobj['geo_cc'] = this.VARS.country;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_cn')) cobj['geo_cn'] = this.VARS.country_name;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_rn')) cobj['geo_rn'] = this.VARS.region_name;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_s')) cobj['geo_s'] = this.VARS.state;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_c')) cobj['geo_c'] = this.VARS.city;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_z')) cobj['geo_z'] = this.VARS.zipcode;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_lat')) cobj['geo_lat'] = this.VARS.latitude;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_lon')) cobj['geo_lon'] = this.VARS.longitude;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_mc')) cobj['geo_mc'] = this.VARS.metro_code;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_tz')) cobj['geo_tz'] = this.VARS.time_zone;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('geo_ac')) cobj['geo_ac'] = this.VARS.area_code;

        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('ppts')) cobj['ppts'] = timestamp;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('pvcnt')) cobj['pvcnt'] = this.VARS.page_visits;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('ss')) cobj['ss'] = this.SessionStart;
        if (this.OverwriteCurrentCookie || !cobj.hasOwnProperty('purl')) cobj['purl'] = [];

        if (!this.OverwriteCurrentCookie && domain_ending.length > 0) {
            if (!cobj.hasOwnProperty('purl') || cobj['purl'].length === 0) {
                cobj['purl'] = [domain_ending];
            }
            else {
                var purls = cobj['purl'].join('|');
                if (domain_ending.length > 0 && purls.indexOf(domain_ending) === -1 && (purls.length + domain_ending.length) < 50000) {
                    cobj['purl'].push(domain_ending);
                }
            }
        }

        PP_DATA.current = cobj;
        COOKIE.set('pp_data', PP_DATA);

        this.RanSetCurrent = true;
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.setCurrent)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.getCurrent = function () {
    try {
        var cobj = PP_DATA.current;

        if (typeof cobj === 'object' && cobj !== null) {
            var domain_protocol = (cobj.hasOwnProperty('prot') && cobj['prot']) ? cobj['prot'] : "https:";
            var domain_base = (cobj.hasOwnProperty('dom') && cobj['dom']) ? cobj['dom'] : window.location.host;

            if (cobj.hasOwnProperty('lurl')) {
                this.VARS.landing_page = domain_protocol + "//" + domain_base + cobj['lurl'];
            }

            if (cobj.hasOwnProperty('rurl')) {
                var refUrl = cobj['rurl'];
                if (refUrl.length > 0 && refUrl.indexOf("://") !== -1) {
                    this.VARS.referring_website_url = refUrl;

                    var search_engine = this.getSearchEngine(refUrl);
                    this.VARS.search_engine = search_engine;

                    var isAdWords = false;
                    var isSearchEngine = false;

                    if (this.isFacebookUrl(refUrl)) {
                        this.VARS.web_source = "Facebook";
                    } else if (this.isAndroidAppUrl(refUrl)) {
                        this.VARS.web_source = "Android App";
                    } else if (this.isGoogleAdWordsUrl(this.VARS.landing_page, refUrl, search_engine)) {
                        this.VARS.web_source = "Google AdWords";
                        isAdWords = true;
                    } else if (search_engine !== "") {
                        this.VARS.web_source = "Organic Search";
                        isSearchEngine = true;
                    }
                }
            }



            //this.VARS.landing_page
            if (this.VARS.landing_page || cobj.hasOwnProperty('lurl')) {

                //this.VARS.web_source
                if (this.VARS.referring_website_url.length > 0 && this.VARS.web_source != "Google AdWords" && this.VARS.web_source != "Organic Search" && !this.doSubdomainsMatch(this.VARS.referring_website_url, this.VARS.landing_page)) {
                    this.VARS.web_source = "Referring Website";
                }

                //Google utm parameters will be appended to landing page url for Google AdWords, Google Analtyics, and possibly even for email campains or referring websites.
                if (this.VARS.landing_page.length > 0 && this.VARS.landing_page.indexOf('?') !== -1) {
                    var queryString = this.VARS.landing_page.split('?')[1];
                    if (queryString.length > 0 && queryString.indexOf('=') !== -1) {
                        var queryVars = queryString.split('&');
                        for (var i = 0; i < queryVars.length; i++) {
                            var pair = queryVars[i].split('=');
                            var pairKey = decodeURIComponent(pair[0]).toLowerCase();

                            if (pairKey == "utm_source" || pairKey == "utm_campaign_source" || pairKey == "campaign_source") {
                                this.VARS.utm_campaign_source = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                            else if (pairKey == "utm_medium" || pairKey == "utm_campaign_medium" || pairKey == "campaign_medium") {
                                this.VARS.utm_campaign_medium = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                            else if (pairKey == "utm_term" || pairKey == "utm_campaign_term" || pairKey == "campaign_term") {
                                this.VARS.utm_campaign_term = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                            else if (pairKey == "utm_content" || pairKey == "utm_campaign_content" || pairKey == "campaign_content") {
                                this.VARS.utm_campaign_content = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                            else if (pairKey == "utm_campaign" || pairKey == "utm_campaign_name" || pairKey == "campaign_name") {
                                this.VARS.utm_campaign_name = decodeURIComponent(pair[1]).split("+").join(" ");
                            }
                        }
                    }
                }
            }

            this.VARS.device = cobj.hasOwnProperty('dev') ? cobj['dev'] : '';
            this.VARS.operating_system = cobj.hasOwnProperty('os') ? cobj['os'] : '';
            this.VARS.browser_type = cobj.hasOwnProperty('bt') ? cobj['bt'] : '';
            this.VARS.browser_version = cobj.hasOwnProperty('bv') ? cobj['bv'] : '';
            this.VARS.date_of_visit = cobj.hasOwnProperty('lts') ? cobj['lts'] : 0;
            this.VARS.ip_address = cobj.hasOwnProperty('ip') ? cobj['ip'] : '';
            this.VARS.landing_page_ip = cobj.hasOwnProperty('ip') ? cobj['ip'] : '';
            this.VARS.continent = cobj.hasOwnProperty('geo_co') ? cobj['geo_co'] : '';
            this.VARS.country = cobj.hasOwnProperty('geo_cc') ? cobj['geo_cc'] : '';
            this.VARS.country_name = cobj.hasOwnProperty('geo_cn') ? cobj['geo_cn'] : '';
            this.VARS.region_name = cobj.hasOwnProperty('geo_rn') ? cobj['geo_rn'] : '';
            this.VARS.state = cobj.hasOwnProperty('geo_s') ? cobj['geo_s'] : '';
            this.VARS.city = cobj.hasOwnProperty('geo_c') ? cobj['geo_c'] : '';
            this.VARS.zipcode = cobj.hasOwnProperty('geo_z') ? cobj['geo_z'] : '';
            this.VARS.latitude = cobj.hasOwnProperty('geo_lat') ? cobj['geo_lat'] : 0;
            this.VARS.longitude = cobj.hasOwnProperty('geo_lon') ? cobj['geo_lon'] : 0;
            this.VARS.metro_code = cobj.hasOwnProperty('geo_mc') ? cobj['geo_mc'] : '';
            this.VARS.time_zone = cobj.hasOwnProperty('geo_tz') ? cobj['geo_tz'] : '';
            this.VARS.area_code = cobj.hasOwnProperty('geo_ac') ? cobj['geo_ac'] : '';


            //this.VARS.PagesNavigated
            if (cobj.hasOwnProperty('purl') && cobj['purl'].length > 0) {
                var pvResultArray = new Array();
                var pvCurr = '';

                if (this.VARS.landing_page.length > 0) {
                    this.VARS.pages_navigated = this.VARS.landing_page + "|";
                    pvResultArray.push(this.VARS.landing_page);
                }

                for (var i = 0; i < cobj['purl'].length; i++) {
                    if (cobj['purl'][i].length > 0) {
                        pvCurr = domain_protocol + "//" + domain_base + cobj['purl'][i];
                        pvResultArray.push(pvCurr);
                        this.VARS.pages_navigated += pvCurr + " | ";
                        //this.logger(pvCurr);
                    }
                }
                if (this.VARS.pages_navigated.indexOf("|") >= 0) {
                    this.VARS.pages_navigated = this.VARS.pages_navigated.substring(0, this.VARS.pages_navigated.length - 1);
                }
                this.VARS.PagesNavigated = pvResultArray;
            } else if (this.VARS.landing_page.length > 0) {
                this.VARS.pages_navigated = this.VARS.landing_page;
                this.VARS.PagesNavigated = new Array();
                this.VARS.PagesNavigated.push(this.VARS.landing_page);
                //this.logger(this.VARS.pages_navigated);
            }

            if (this.VARS.date_of_visit > 0) {
                //var dt = new Date(this.VARS.date_of_visit);
                //this.VARS.date_of_visit = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, 0, 0, 0);
                this.VARS.date_of_visit = new Date(this.VARS.date_of_visit);
            } else {
                //var dt = new Date();
                //this.VARS.date_of_visit = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, 0, 0, 0);
                this.VARS.date_of_visit = new Date();
            }
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getCurrent)', e);
    }

    return false;
};


PUSHPLANET_ANALYTICS.prototype.setPrevious = function () {
    try {
        var cobj = PP_DATA.previous;

        if (typeof cobj === 'object' && cobj !== null) {
            var timestamp = new Date().getTime();

            this.IsNewVisitor = false;

            if (!this.VARS.IsPreview) {
                var cobj = {};

                if (typeof cookieVal === 'object') {
                    cobj = cookieVal;
                }
                else if (typeof cookieVal === 'string' && cookieVal.indexOf('{') >= 0 && cookieVal.indexOf('{') <= 2) {
                    cobj = JSON.parse(cookieVal);
                }

                if (cobj.hasOwnProperty('days')) {
                    var allDays = cobj['days'];

                    var prev = new Date(allDays[allDays.length - 1]);
                    prev = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate(), 0, 0, 0, 0);

                    var curr = new Date(timestamp);
                    curr = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(), 0, 0, 0, 0);

                    if (curr.getTime() > prev.getTime()) {
                        //MaxLength adjustment, commented out for now
                        //if (cookieVal.length > 1000) {
                        //    allDays.splice(0, 1);
                        //}

                        allDays.push(timestamp);

                        cobj['days'] = allDays;

                        PP_DATA.previous = cobj;
                        COOKIE.set('pp_data', PP_DATA);
                    }
                }
            }
        }
        else {
            var timestamp = new Date().getTime();

            var cobj = {};
            cobj['days'] = [timestamp];

            PP_DATA.previous = cobj;
            COOKIE.set('pp_data', PP_DATA);
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.setPrevious)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.getPrevious = function () {
    try {
        var cobj = PP_DATA.previous;

        if (typeof cobj === 'object' && cobj !== null) {
            if (cobj.hasOwnProperty('days')) {
                var timestamp_array = cobj['days'];
                this.VARS.past_visits = timestamp_array.length - 1;
                for (var i = 1; i < timestamp_array.length; i++) {
                    this.VARS.PastVisitsText += this.formatDate(new Date(timestamp_array[i]));
                    if (i < timestamp_array.length - 1) {
                        this.VARS.PastVisitsText += ", ";
                    }
                }
            } else {
                this.VARS.past_visits = 0;
                this.VARS.PastVisitsText = this.formatDate(new Date().getTime());
            }
        } else {
            this.VARS.past_visits = 0;
            this.VARS.PastVisitsText = this.formatDate(new Date().getTime());
        }
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.getPrevious)', e);
    }
};


PUSHPLANET_ANALYTICS.prototype.setDevice = function () {
    try {
        var headerValue = navigator.userAgent || navigator.vendor || window.opera;

        var mobileDevice = "";
        var isMobileDevice = false;
        if (/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(headerValue) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(headerValue.substr(0, 4))) {
            isMobileDevice = true;
        }

        if (isMobileDevice) {
            if (/ipad/i.test(headerValue)) mobileDevice = "iPad";
            else if (/ipod/i.test(headerValue)) mobileDevice = "iPod";
            else if (/iphone/i.test(headerValue)) mobileDevice = "iPhone";
            else if (/android/i.test(headerValue)) mobileDevice = "Android";
            else if (/kindle/i.test(headerValue)) mobileDevice = "Kindle";
            else if (/blackberry|symbian/i.test(headerValue)) mobileDevice = "BlackBerry";
            else if (/windows (ce|phone)|iemobile/i.test(headerValue)) mobileDevice = "Windows Mobile";

            this.VARS.device = "Phone/Tablet";
        } else {
            this.VARS.device = "Desktop/Laptop";
        }

        var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "unknown"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "unknown"; this.OS = this.searchString(this.dataOS) || "unknown" }, searchString: function (data) { for (var i = 0; i < data.length; i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) !== -1) return data[i].identity } else if (dataProp) return data[i].identity } }, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index + this.versionSearchString.length + 1)) }, dataBrowser: [{ string: navigator.userAgent, subString: "Chrome", identity: "Chrome" }, { string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" }, { string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" }, { prop: window.opera, identity: "Opera", versionSearch: "Version" }, { string: navigator.vendor, subString: "iCab", identity: "iCab" }, { string: navigator.vendor, subString: "KDE", identity: "Konqueror" }, { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" }, { string: navigator.vendor, subString: "Camino", identity: "Camino" }, { string: navigator.userAgent, subString: "Netscape", identity: "Netscape" }, { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" }, { string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" }, { string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }], dataOS: [{ string: navigator.platform, subString: "Win", identity: "Windows" }, { string: navigator.platform, subString: "Mac", identity: "Mac" }, { string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod" }, { string: navigator.platform, subString: "Linux", identity: "Linux" }] };
        BrowserDetect.init();

        if (BrowserDetect.OS && BrowserDetect.OS.length > 0 && BrowserDetect.OS != "unknown") {
            if (BrowserDetect.OS == "Mac") {
                this.VARS.operating_system = "Apple";
            } else if (BrowserDetect.OS.indexOf("iPhone") > -1) {
                this.VARS.operating_system = "Apple";
                this.VARS.device = "Phone/Tablet";
            } else {
                this.VARS.operating_system = BrowserDetect.OS;
            }
        } else {
            this.VARS.operating_system = "";
        }

        if (mobileDevice != "") {
            this.VARS.device = "Phone/Tablet";

            if (mobileDevice == "iPad" || mobileDevice == "iPod" || mobileDevice == "iPhone") {
                this.VARS.operating_system = "Apple";
                this.VARS.device_apple = mobileDevice;
            } else if (mobileDevice == "Android") {
                this.VARS.operating_system = "Android";
            } else if (mobileDevice == "Windows Mobile") {
                this.VARS.operating_system = "Windows";
            } else if (mobileDevice == "Kindle") {
                this.VARS.operating_system = "Kindle";
            } else if (mobileDevice == "BlackBerry") {
                this.VARS.operating_system = "BlackBerry";
            }
        }

        if (BrowserDetect.browser && BrowserDetect.browser.length > 0 && BrowserDetect.browser != "unknown") {
            if (BrowserDetect.browser == "Explorer") {
                this.VARS.browser_type = "Internet Explorer";
            } else if (BrowserDetect.browser == "Mozilla" && this.VARS.operating_system == "Windows") {
                this.VARS.browser_type = "Internet Explorer";
            } else {
                this.VARS.browser_type = BrowserDetect.browser;
            }

            if (BrowserDetect.version && BrowserDetect.version != "unknown") {
                this.VARS.browser_version = BrowserDetect.version;
            } else {
                this.VARS.browser_version = 0;
            }
        } else {
            this.VARS.browser_type = "";
        }

        //this.logger(this.VARS.device + ", " + this.VARS.operating_system + ", " + this.VARS.browser_type + ", " + this.VARS.browser_version);
    }
    catch (e) {
        if (tryShowError()) console.log('ERROR (PP_ANALYTICS.setDevice)', e);
    }
};

PUSHPLANET_ANALYTICS.prototype.logger = function (msg, isJson) {
    try {
        if (!this.ShowErrors)
            return;

        if (typeof console !== "undefined") {
            if (isJson) {
                try {
                    logger(JSON.stringify(msg, undefined, 2));
                } catch (e1) {
                    if (this.ShowErrors) this.logError(e1, "logger");
                }
            } else {
                if (typeof msg === 'string' && msg.indexOf('PUSHPLANET:') !== 0) {
                    logger('PUSHPLANET: ' + msg);
                } else {
                    logger(msg);
                }
            }
        }
    }
    catch (e2) {
        //if (SHOW_ERRORS) this.logError(e2, "logger");
    }
};

PUSHPLANET_ANALYTICS.prototype.logError = function (e, function_name) {
    var fn = 'analytics.js';
    if (this.VARS.IsPreview) fn = 'analytics.js';

    if (typeof PUSHPLANET_BUGSNAG !== 'undefined' && PUSHPLANET_BUGSNAG !== null) {
        PUSHPLANET_BUGSNAG.notifyException(e, "[PUSHPLANET_EXCEPTION_JS] " + fn + " - (analytics) - " + function_name + " - (" + this.BaseDomain + ")");
    }

    this.logger("ERROR: in " + fn + " - (analytics) - " + function_name + "()");
    this.logger(e.message);
};










