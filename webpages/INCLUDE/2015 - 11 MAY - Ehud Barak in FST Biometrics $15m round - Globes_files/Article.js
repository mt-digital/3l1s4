
function is_separator(ch) { return ch == ' ' }

var word_found = false;
function f2(m, p, s) {
    var split_index = 0;
    var article_html = document.getElementById('F_Content').innerHTML;
    var word_section = article_html.substring(split_index, p);
    var open_tag_index = word_section.lastIndexOf("<");
    var close_tag_index = word_section.lastIndexOf(">");
    var bc = p > 0 ? s.substring(p - 1, p) : ' '
    var ac = p + m.length < s.length ? s.substring(p + m.length, p + m.length + 1) : ' '

    if ((close_tag_index > open_tag_index) && !word_found)// && is_separator(bc) && is_separator(ac))
    {
        Millon_Words_Ids += Millon_Word_Id + ",";
        word_found = true;
        return "<span onMouseOver=\"Millon_showBallon(this,event," + Millon_Word_Id + ");\" onMouseOut=\"Millon_hideBallonByTime();\" class=\"Millon_Monahim\">" + m + "</span>";
    }
    else {
        return m;
    }
}


// *********
var visibleTab = 2;

/***********************************/	
/* Response                        */
/***********************************/	

    function SendResponse() {

        if (RemoveWhiteSpace(objFld_name.value) == "" || RemoveWhiteSpace(objFld_title.value) == "") { SignWizard_Close(); return false; }

        var sRes = objFld_text.contentWindow.document.body.innerHTML//.toLowerCase();
        objHidtext.value = formatString(sRes);
        __doPostBack('<%= btnSend.UniqueID %>', '');
    }


/***********************************/	
/* wucMostPopular                  */
/***********************************/
    function getDataFromDB(doc_id, tabId, category)
    {
        var url = "Handlers/PopularItems.ashx?fid=" + popularFid + "&category=" + category + "&did=" + doc_id + "&iswide=" + isWide;
        GetAsynchronousData(url,"popularAnswers("+tabId+",xmlHttp.responseText)")
    }
/***********************************/	
/* shareArticle                    */
/***********************************/	
    function ruleriGeneralArticleEvent(label, action) {
        e_counter.count(unescape(label), action, null, GetRuleriEventCategoryValue());
    }

/***********************************/	
    
    function popularAnswers(tabId, answer) {
        var wideClass = isWide ? " wide" : "";
        var sText = "";
        var DataArr = answer.split("@@@");

        for (i = 0; i < DataArr.length && i < 4; i++) {
            var RowArr = DataArr[i].split("|");
            if (tabId == 2)
                sText += "<div class='ca_items" + wideClass + "'><a href='/news/article.aspx?did="+RowArr[0]+"' class='ca_IMGitm'><img src="+RowArr[4]+" /></a><div class='ca_TXTitm'><a href='/news/article.aspx?did="+RowArr[0]+"' class='HeaderLink'>"+RowArr[1]+"</a><span class='ArticleAutherName'>"+RowArr[3]+"</span><span class='CountTguvot' name='ResponseCount' ID='ResponseCount_"+RowArr[0]+"_"+RowArr[5]+"'></span></div></div>";
                 //"<div class='hdr_TXTitm'><a href='/news/article.aspx?did="+RowArr[0]+"' class='HeaderLink'>"+RowArr[1]+"</a><span class='CountTguvot' name='ResponseCount' ID='ResponseCount_"+RowArr[0]+"_" + RowArr[4] + "'></span></div>"                        
            else if (tabId == 3)
                sText += "<div class='ca_items" + wideClass + "'><a href='/news/article.aspx?did=" + RowArr[0] + "' class='ca_IMGitm'><img src=" + RowArr[4] + " /></a><div class='ca_TXTitm'><a href='/news/article.aspx?did=" + RowArr[0] + "' class='HeaderLink'>" + RowArr[1] + "</a><span class='CountTguvot' name='ResponseCount' ID='ResponseCount_" + RowArr[0] + "_" + RowArr[5] + "'></span></div></div>";
                //"<div class='hdr_TXTitm'><a href='/news/article.aspx?did="+RowArr[0]+"' class='HeaderLink HeaderTV'><span class='playerIMG'>&nbsp;</span>"+RowArr[1]+"</a><span class='CountTguvot' name='ResponseCount' ID='ResponseCount_"+RowArr[0]+"_" + RowArr[4] + "'></span></div>"
            else if (tabId == 4)
                sText += "<div class='ca_items" + wideClass + "'><a href='/news/article.aspx?did=" + RowArr[0] + "' class='ca_IMGitm'><img src=" + RowArr[4] + " /></a><div class='ca_TXTitm'><span class='autherName'>" + RowArr[3] + "</span><a href='/news/article.aspx?did=" + RowArr[0] + "' class='HeaderLink'>" + RowArr[1] + "</a><span class='DateOpinions'>" + RowArr[6] + "</span><span class='CountTguvot' name='ResponseCount' ID='ResponseCount_" + RowArr[0] + "_" + RowArr[5] + "'></span></div></div>";
                 //"<div class='ca_items'><a href='/news/article.aspx?did="+RowArr[0]+"' class='ca_IMGitm'><img width='50' height='50' src="+RowArr[4]+" /></a><div class='ca_TXTitm'><span class='autherName'>"+RowArr[3]+"</span><a href='/news/article.aspx?did="+RowArr[0]+"' class='HeaderLink'>"+RowArr[1]+"</a><span class='CountTguvot' name='ResponseCount' ID='ResponseCount_"+RowArr[0]+"_" + RowArr[4] + "'></span></div></div>"                                   
        }            
        document.getElementById("popularTab"+tabId+"Div").innerHTML = sText;
    }
    function changePopularTab(doc_id, tabId)
    {
        var category = 1;
        if (tabId == 3)
            category = 3;
        else if (tabId == 4)
            category = 2;
        
        document.getElementById("popularTab"+visibleTab+"Div").style.display = "none";
        document.getElementById("liPopular"+visibleTab).className = "";
        visibleTab = tabId;
        if (document.getElementById("popularTab"+tabId+"Div").innerHTML == "")
        {
            document.getElementById("popularTab"+tabId+"Div").innerHTML = "<img src='http://images.globes.co.il/images/site/Loading30x30.gif' />";
            getDataFromDB(doc_id, tabId, category);
        }
        document.getElementById("popularTab"+tabId+"Div").style.display = "block"
        document.getElementById("liPopular"+tabId).className = "ca_selected";
    }    


/***********************************/	
/* Gallery                         */
/***********************************/	

function ChangeMainPic(obj)
    {
    document.getElementById("oMainImage").src = obj.src;
    document.getElementById("oMainImage").alt = obj.alt;
    }
function ChangeBigMainPic(obj) 
    {
    reset_opacity(obj);
    if(document.getElementById("oMainImage"))
	{
	document.getElementById("oMainImage").src = obj.src;
	document.getElementById("oMainImage").alt = obj.alt;
	document.getElementById("oMainImage").title = obj.title;
	if (navigator.appName.indexOf("Microsoft")<0)
	    {
	    obj.style.opacity = 0.3;
	    }
	else
	    {
	    obj.style.filter = "alpha(opacity=30)";
	    }
	}
    }

function reset_opacity(obj)
    {
        var father_obj = obj.parentNode;
        var father_obj = father_obj.parentNode;
        var children_obj = father_obj.getElementsByTagName("img"); 
	for (var i = 0; i < children_obj.length; i++) 
	    {
	    if (navigator.appName.indexOf("Microsoft") < 0) 
	        children_obj[i].style.opacity = "1";
	    else 
	        children_obj[i].style.filter = "alpha(opacity=100)";
	    }
    }
function ChangeFirstBigMainPic()
    {
    var main_cell=document.getElementById("gallery_images_cell");
    var first_div = main_cell.getElementsByTagName("div")[0];
    var first_img = first_div.getElementsByTagName("img")[0]; 
    if (navigator.appName.indexOf("Microsoft")<0)
	{
	    first_img.style.opacity = 0.3;
	}
    else
	{
	    first_img.style.filter = "alpha(opacity=30)";
	}
    }
/***********************************/	
/* Other Functions                 */
/***********************************/	


function show_menuim_in_window()
    {
     window.open("http://www.globes.co.il/bulletin/menuim/menuim.html","","width=760, height=560, toolbar=no, scrollbars=no, menubar=no, directories=no, resizable=no");
    }
 
 
 
function link_to_takdin(caller) {
	try {	var a = caller.innerHTML.replace(/\s+/," ").replace(/^\s*תיק\s+/,"").split(" ")
		window.open('http://www.takdin.co.il/search/index.aspx?sQuery=ID:' + escape(a[0].replace(/[\"|\'|\.]/g,"")) + (a.length > 1 ? '@' + a[1]  : ''),'takdin')
	} catch(ex) {}
}
function change_viewer(v,h) {
	try {
		document.getElementById(h).style.display = 'none'
		document.getElementById(v).style.display = 'block'
	} catch(e) {}
}
function sendIT(docID,docFID){
	window.open("/serve/globes/sendITnew.asp?did="+docID+"&fid="+docFID+"","Send_Doc","width=410,height=420,left=100,top=100,screenx=150,screeny=0,resizable=no,scrollbars=auto")
}
function toggleDisplay(idNum){
	var viewObj = "dViewDiv" + idNum;
	var closeObj = "dCloseDiv" + idNum;
	if(document.getElementById(viewObj).style.display == "block" || document.getElementById(viewObj).style.display == "")
	{
		document.getElementById(viewObj).style.display = "none";
		document.getElementById(closeObj).style.display = "block";
	}
	else
	{
		document.getElementById(viewObj).style.display = "block";
		document.getElementById(closeObj).style.display = "none";
	}
}
function changefontsize(num) {
	function calculateFSize(obj,defsize,change,minsize,maxsize) {
		var fontsize = parseInt(obj.style.fontSize)
		fontsize = change + (isNaN(fontsize) ? defsize : fontsize)
		fontsize = Math.max(minsize,fontsize)
		fontsize = Math.min(maxsize,fontsize)
		obj.style.fontSize = fontsize + 'px'
	}
	calculateFSize(document.getElementById('F_Title'),20,num,20,32)
	calculateFSize(document.getElementById('F_Sub_Title'),14,num,14,28)
	calculateFSize(document.getElementById('F_Author'),11,num,11,22)
	calculateFSize(document.getElementById('F_Modified_on'),11,num,11,22)
	calculateFSize(document.getElementById('F_Content'),14,num,14,28)
}
var dovID_var = 0;
var px_fontsize = 2;
var px_linehight = 6;
var px_min_fontsize = 16;
var used_bigFont = 1;
function sendIT(docID, docFID) {
    window.open("/serve/globes/sendITnew.asp?did=" + docID + "&fid=" + docFID + "", "Send_Doc", "width=410,height=420,left=100,top=100,screenx=150,screeny=0,resizable=no,scrollbars=auto")
}
function toBigFont() {

    if (used_bigFont < 5) {
        var ct = document.getElementById("F_Title");
        var cs = document.getElementById("coteret_SubCoteretText");
        var acm = document.getElementById("F_Content");

        used_bigFont++;
        ct.className = "bigfont" + used_bigFont;
        cs.className = "bigfont" + used_bigFont;
        acm.className = "bigfont" + used_bigFont;
    }
}
function toSmallFont() {

    if (used_bigFont > 1) {
        var ct = document.getElementById("F_Title");
        var cs = document.getElementById("coteret_SubCoteretText");
        var acm = document.getElementById("F_Content");

        used_bigFont--;
        ct.className = "bigfont" + used_bigFont;
        cs.className = "bigfont" + used_bigFont;
        acm.className = "bigfont" + used_bigFont;
    }
}



function OpenNewsletterWizard(newsletterNumber) {
    SignWizard_Show('/news/alerts/UpdateNewslettresSelection.aspx?t=' + new Date().getTime() + '&newsletters=' + newsletterNumber + '-1-0-0', 'wizard');
}
function CTAhon() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(1308)
}
function CTAtime() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(3344)
}
function CTAtip() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(4643)
}
function CTAtashtit() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(2097)
}
function CTAdirot() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(2099)
}
function CTAmisoy() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(2099)
}
function CTAshok() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(1605)
}
function CTAking() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(4645)
}
function CTAstory() {
    inlineTextAdvPopUp_close()
    OpenNewsletterWizard(4640)
}


//=============================================

function onNewsletterSubmit(e, newsletterId) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    if (keycode == "13") {
        open_wizard(newsletterId); return false
    }
    return true;
}

function open_wizard(newsletterId) {
    var email = document.getElementById('txtRegNewsLetterEmail').value
    email = (email.indexOf("@") == -1) ? '' : escape(email);
    if (email == '') {        
        alert("אנא הכנס אמייל תקני")
        document.getElementById('txtRegNewsLetterEmail').value = ""
        return false;
    }

    if (newsletterId == "0")
        newsletterId = $("[id^='kidum'] #selNewsLeters option:selected").val()

    if (newsletterId == 0) {
        alert("נא בחר ניוזלטר")
        return false;
    }

    ga('article.send', 'event', 'רישום לניוזלטר', 'סוף כתבה - נוכחי', newsletterId);

    SignWizard_Show('/news/alerts/UpdateNewslettresSelection.aspx?t=' + new Date().getTime() + '&newsletters=' + newsletterId + '-1-0-0&email=' + email, 'wizard');
    return false;
}

$(document).ready(function () {

    var node_id = FolderDynasty.split('-')[0]
    if (isNaN(node_id)) return;
    var iNodeId = parseInt(node_id)
    var newsletterId = 0;
    var subject = "";

    switch (iNodeId) {
        //case 1225: newsletterId = 1133; subject = "וול סטרייט"; break;
        case 607: newsletterId = 2099; subject = "מחירי דירות"; break;
        case 5563: newsletterId = 2099; subject = "נדל\"ן מיסוי ומשפט"; break;
        case 594: newsletterId = 1603; subject = "הייטק"; break;
        //case 4621: newsletterId = 4641; subject = "מניות הגז נפט שבועי"; break;
        case 585: newsletterId = 1308; subject = "שוק ההון"; break;
        case 2007: newsletterId = 2006; subject = "GlobesTV"; break;
        //case 829: newsletterId = 1604; subject = "דין וחשבון"; break;
        case 821: newsletterId = 1605; subject = "נתח שוק"; break;
    }
   // if (newsletterId == 0) return;



    var titles = ['רוצים לקבל חדשות <br/> {0} לתיבת הדוא"ל', 'עדכון {0} יומי בדוא"ל', '<strong>{0}</strong> עדכון חדשות יומי<br />לתיבת הדוא"ל<br />', '{0} - קבלו<strong> עדכון חדשות יומי</strong> לתיבת הדוא"ל']
    var versitonsId = ['divInnerKidumNewsLetter', 'divRegisterToNewsletterInPromos', 'innerad', 'divKidumNewsletterTop']
   
    randomVersion = 1; //    

    var title = titles[randomVersion].replace('{0}', subject)

    var chosenDiv = $("#" + versitonsId[randomVersion]).get()  
    if (chosenDiv != null) {
        var divContent = ""
       + "<div id='kidum_" + (randomVersion + 1) + "'>"
       //+ "<p>" + title + "</p>"
       + " <p> קבלו ניוזלטר </p>"
       + " <select id='selNewsLeters' >"
       + "      <option value='' disabled " + (newsletterId == 0 ? "selected" : "") + ">בחר ניוזלטר</option>"
       + "      <option value='4640' " + (newsletterId == 4640 ? "selected" : "") + ">הסיפורים הגדולים</option>"
       + "      <option value='1308' " + (newsletterId == 1308 ? "selected" : "") + ">שוק ההון</option>"
       //+ "      <option value='4641' " + (newsletterId == 4641 ? "selected" : "") + ">מניות הגז - נפט</option>"
       + "      <option value='2099' " + (newsletterId == 2099 ? "selected" : "") + ">נדל\"ן</option>"
       //+ "      <option value='1604' " + (newsletterId == 1604 ? "selected" : "") + ">דין וחשבון</option>"       
       //+ "      <option value='3344' " + (newsletterId == 3344 ? "selected" : "") + ">moneytime</option>"
       //+ "      <option value='4643' " + (newsletterId == 4643 ? "selected" : "") + ">טיפים למשקיעים</option>"
       + "      <option value='1603' " + (newsletterId == 1603 ? "selected" : "") + ">גלובס טק</option>"
       + "      <option value='5362' " + (newsletterId == 5362 ? "selected" : "") + ">סיכום יום מסחר</option>"
       + "      <option value='2006'"  + (newsletterId == 2006 ? "selected" : "") + ">TV גלובס</option>"
       + "    </select>"
       + "    <input id='txtRegNewsLetterEmail' type='text' value='כתובת הדוא\"ל שלך' onkeypress='return onNewsletterSubmit(e,0)'/>"
       + "    <a href='javascript:void(0);' onclick='open_wizard(0)' class='btn btnProp'>הרשמה</a>"
       + "</div>";

        $("#" + versitonsId[randomVersion]).html(divContent);


    }


    $(function () {
        $("[id^='kidum'] #txtRegNewsLetterEmail").focusin(function () {
            var inputText = ""
            if ($(this).val() != 'כתובת הדוא"ל שלך')
                inputText = $(this).val();
            $(this).val(inputText).addClass("filled");
        });
        $("[id^='kidum'] #txtRegNewsLetterEmail").focusout(function () {
            if ($(this).val().trim() == "")
                $(this).val('כתובת הדוא"ל שלך');
            if ($(this).val() == 'כתובת הדוא"ל שלך')
                $(this).removeClass("filled");
        });
        $("[id^='kidum'] #selNewsLeters").change(function () {
            newsletterId = $(this).find("option:selected").val()
            //newsletterId = $(this).val()
        });
        if (user_id > 0 && typeof(login_id) != undefined && login_id != 'undefined') {
            $("[id^='kidum'] #txtRegNewsLetterEmail").val(login_id)
        }
        
    });

});


function changeNewsAgentBoxSize(isBigger) {

    var size = isBigger ? 270 : 160;
    $("#frmNewsAgent").css("height", size + "px")
}
$(function () {

    $("#printWindowClose").click(function () {
        $("#printWindow").hide();
    });

    $(".print").click(function () {
        if (user_type_piano == "paid" || IpTrafficFrom != "" || IsPaywall == "False") {
            window.open('/serve/globes/printWindow.asp?did=' + did, '', 'toolbar=no,width=700,height=550,left=140,top=50,status=yes,scrollbars=yes,resizable=yes')
        }
        else {
            $("#printWindow").show();
        }
    });

    $(document.body).on('click', '.messages-count > a', function (e) {
        e.preventDefault();
        goToByScroll($('#spotim-container'));
    });
    setTimeout(function () {
        if ($(".readMoreBtn").length) {
            $(".readMoreBtn").click(function () {
                console.log("readMoreBtn click!");
                $(this).parent().prev().toggle();
                $(this).toggleClass('shown');
                var btnShow = $(this).data("show");
                var btnHide = $(this).data("hide");
                if ($(this).text() == btnShow) {
                    $(this).text(btnHide);
                } else {
                    $(this).text(btnShow);
                }
            });
        }
    }, 5000)
    

    $('#Tagiut_Tohen .userTagit:first').waypoint(function (event) {
        console.log(event)
        clickables.show('HoverTagit')
        event.stopPropagation();
    }, { triggerOnce: true, offset: 'bottom-in-view' });


    if (window.addEventListener)
        window.addEventListener('scroll', onScrollEventHandler, false);
    else if (window.attachEvent)
        window.attachEvent('onscroll', onScrollEventHandler);


    function onScrollEventHandler() {
        if ($("#F_Content").offset().top - $(window).scrollTop() < 160) {
            $(".socialLinks").addClass("sticked");
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { $(".socialLinks").removeClass("sticked"); }
        }
        else {
            $(".socialLinks").removeClass("sticked");
        }
    }

    $("a.favList.notInFavoriteList").click(function () {
        var pos = $(this).parent().parent().hasClass("sticked") ? "side" : "up";
        dataLayer.push({ 'event': 'Reading_list', 'eventInfo': { 'action_screen': location.pathname, 'User_action': 'Add_article_to_the_reading_list_from_article_' + pos } });
    });
    $("a.favList.favList.inFavoriteList").click(function () {
        var pos = $(this).parent().parent().hasClass("sticked") ? "side" : "up";
        dataLayer.push({ 'event': 'Reading_list', 'eventInfo': { 'action_screen': location.pathname, 'User_action': 'Remove_article_to_the_reading_list_from_article_' + pos } });
    });


    $(".toReaction").click(function () {

        var counter = 0;
        var flag = false;
        var spot = $(".sppre_frame-container");//$(".spot-im-conversation-module");
        while (counter++ < 100) {
            if (spot.length > 0) {
                window.scrollTo(parseInt(spot.offset().left), parseInt(spot.offset().top));
                break
            }
            else {
                setTimeout(function () { spot = $(".spot-im-conversation-module") }, 1000)
            }
        }
    });

    $(".socialLinks a").click(function () {
        var kindOfContent = FolderDynasty.indexOf('-4049-') > 0 ? 'paid' : 'organic';
        dataLayer.push({ 'event': 'Article_page', 'eventInfo': { 'action_screen': location.pathname, 'FolderName': sub_sf_name, 'Kind_of_content': kindOfContent, 'user_action': 'Click_to_share_on_social' } })
    });
    $("section.RecommendedArticls .item").click(function () {
        dataLayer.push({ 'event': 'Article_page', 'eventInfo': { 'action_screen': location.pathname, 'user_action': 'Click_on_article_in_most_viewed_articles' } })
    });
    $("#divMoreArticle .item").click(function () {
        dataLayer.push({ 'event': 'Article_page', 'eventInfo': { 'action_screen': location.pathname, 'user_action': 'Click_to_go_to_paid_article_next_to_article' } })
    });


    setTimeout(function () { var kindOfContent = FolderDynasty.indexOf('-4049-') > 0 ? 'paid' : 'organic'; dataLayer.push({ 'event': 'Article_page', 'eventInfo': { 'action_screen': location.pathname, 'FolderName': sContentGroup1, 'Kind_of_content': kindOfContent, 'user_action': 'Read_article_more_than_10_sec' } }) }, 10000);

});


function goToByScroll(scrollTo) {
    $('html, body').animate({
        scrollTop: scrollTo.offset().top - 200
    }, 1000);
}


