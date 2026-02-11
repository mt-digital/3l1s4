var isIpad = navigator.userAgent.match(/iPad/i) ? "#fromIpad" : "";
var url = location.href.toLowerCase();
var nohttp = url.split('//')[1];
var x = nohttp.indexOf("/");
var urlPath = nohttp.substr(x);
var sPrefixBread = "?";
var sFolderDynasty = '';

if (typeof(sContentKeywords) != 'string'){
    sContentKeywords = "";
}
if (typeof (FreeFormIp) != 'boolean') {
    FreeFormIp = false;
}

if (typeof(FolderDynasty) == 'string') {
    sFolderDynasty = "-" + FolderDynasty + "-";
}
if (typeof(user_id) != 'number')
{
    user_id = 0;
}
var bCOMMERCIAL_PROJECT = sFolderDynasty.indexOf('-4049-') > -1 || sFolderDynasty.indexOf('-921-') > -1
var bTagit = sFolderDynasty.indexOf('-3587-') > -1
  
function Set_ContentGroup1(currentVal)
{      
    if (currentVal=="other") return;         

    if (bCOMMERCIAL_PROJECT) {             
        currentVal = "COMMERCIAL PROJECT - " + currentVal;
    }
    else if (bTagit){
        currentVal = "תגית";  
        sContentGroup1 = "תגית";    
    }
    else if (sFolderDynasty.indexOf('-845-') > -1) {
        currentVal = "deot"
        sContentGroup1 = "דעות";                            
    }
    else if (sFolderDynasty.indexOf('-10721-') > -1) {              
        currentVal = "התחדשות עירונית"
        sContentGroup1 = "התחדשות עירונית";                            
    } 
    else if (sFolderDynasty.indexOf('-2006-') > -1) {
        currentVal = "globes TV"
    }                                              
          
    ga('set', 'contentGroup1', currentVal);
               
}
  
if (typeof(sContentGroup1) == 'undefined') sContentGroup1 = "other";
if (typeof(sContentGroup2) == 'undefined') sContentGroup2 = "other";
if (typeof(sCanonicalUrl) == 'undefined') sCanonicalUrl = null;

sContentGroup1 = sContentGroup1.replace(/"/g, '');      
sContentGroup2 = sContentGroup2.replace(/"/g, '');
    
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  

if (typeof(user_type) == 'string')
{
    ga('set', 'dimension1', user_type); 
}  
  
ga('set', 'userId', user_id);


if (typeof(MasterHomePage) == 'boolean' && MasterHomePage == true)
{
    sContentGroup1 = "home-page";          
    ga('set', 'contentGroup1', sContentGroup1);      
}
else if (sContentGroup1=="English")
{      
    ga('set', 'contentGroup1', sContentGroup1);              
}
else if (sContentGroup1=="Portal")
{      
    ga('set', 'contentGroup1', sContentGroup1);      
}
else if (sContentGroup2 == "Article" || sContentGroup2 == "Clip")
{                  
    Set_ContentGroup1(sContentGroup1);
      
    if (bCOMMERCIAL_PROJECT) {
        ga('set', 'contentGroup2', 'Branded Content');     
    }
    else
    {
        ga('set', 'contentGroup2', sContentGroup2);     
    }    
}  
else 
{
    Set_ContentGroup1(sContentGroup1);
}   
      
if (sFolderDynasty.indexOf('-8764-') > -1) {
    ga('set', 'contentGroup4', sContentGroup1);      
}

if (urlPath.indexOf("?") > -1) {
    sPrefixBread = "&";
}
if (bCOMMERCIAL_PROJECT) {
    ga('set', 'contentGroup3', sContentGroup1);        
}   
     
IpTrafficFrom = (user_properties != undefined) ? IpTrafficFrom : "";

if (FreeFormIp || (user_properties != undefined && typeof user_properties.company_id != 'undefined' && user_properties.company_id > 0)) {    
    if (FreeFormIp) {        
        dataLayer.push({ 'event': 'pageView_web', 'eventInfo': { 'institution': IpTrafficFrom } })
    }    
}
ga('send', 'pageview');  

if (document.referrer == "") {
    dataLayer.push({ 'event': 'Visit_web', 'eventInfo': { 'action_screen': location.pathname, 'UserStatus': (user_id > 0 ? 'registerd' : 'guest'), 'Device_ID': user_id, 'institution': IpTrafficFrom } })
}

// *****  ga_lib

if (typeof (FolderDynasty) == 'string') {
    sFolderDynasty = "-" + FolderDynasty + "-";
}
var bCOMMERCIAL_PROJECT = sFolderDynasty.indexOf('-4049-') > -1 || sFolderDynasty.indexOf('-921-') > -1

if (typeof (NewChartbitScript) != 'boolean') {
    NewChartbitScript = false;
}
NewChartbitScript = false;
function get_sf_async_config_sections() {

    if (typeof (sContentGroup1) == "string" && sContentGroup1.length > 0) {
        sub_sf_name = sContentGroup1 + "";
        if ((location.pathname.match(/article\.aspx/i) || location.pathname.match(/sparticle\.aspx/i)) && !bCOMMERCIAL_PROJECT) {
            sub_sf_name += ',Article'
        }
        if (location.pathname.match(/.tag/i)) { sub_sf_name += ',Tag' }
        if (location.pathname.match(/home\.aspx/i) || location.pathname.match(/node\.aspx/i)) { sub_sf_name += ',Folder' }

        if (bCOMMERCIAL_PROJECT) {
            sub_sf_name += ',תוכן שיווקי'
        }

        return sub_sf_name;
    }
    return "other";

}
var _acct_type = "anon";
if (typeof (user_id) == 'number') {
    if (user_id > 0) {
        _acct_type = 'lgdin'
        if (typeof (user_type) == 'string' && (user_type == "subscriber" || user_type == "digital" || user_type == "paywall")) {
            _acct_type = 'paid'
        }
    }
}

if (!NewChartbitScript) {
    var _sf_async_config = { uid: 41926, domain: "globes.co.il" };
    _sf_async_config.useCanonical = true;
    _sf_async_config.autoDetect = false;
    _sf_async_config.useCanonicalDomain = true;
    _sf_async_config.playerdomain = 'www.globes.co.il';
    _sf_async_config.sections = get_sf_async_config_sections();

    if (typeof (sub_sf_author) == 'string' && sub_sf_author.length > 0) {
        _sf_async_config.authors = sub_sf_author;
    }
    if (typeof (sub_sf_title) == 'string' && sub_sf_title.length > 0) {
        _sf_async_config.title = sub_sf_title;
    }

    var _cbq = window._cbq = (window._cbq || []);
    _cbq.push(['_acct', _acct_type]);

    (function () {

        function loadChartbeat() {
            window._sf_endpt = (new Date()).getTime();
            var e = document.createElement('script');
            e.setAttribute('language', 'javascript');
            e.setAttribute('type', 'text/javascript');
            e.setAttribute('src', "https://static.chartbeat.com/js/chartbeat_video.js");
            document.body.appendChild(e);
        }
        var oldonload = window.onload;
        window.onload = (typeof window.onload != 'function') ?
            loadChartbeat() : function () { oldonload(); loadChartbeat(); };
    })();

}

function ShowNLSignUPWizard() {
    window.scrollTo(0, 0);
    SignWizard_Show('/news/frames/NewsLettersSignUpWizard.aspx?mode=nlsignupwizard', 'wizard');
}
/* remove by Yair at 19/10/2025
!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }; if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
}(window,
    document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '227605224329550');
fbq('track', "PageView");
*/