var currentMousePos = { x: -1, y: -1 };
var iSelectionMinLength = 3;
var doc_type = 35;
var iCurrentCursorX = 0;
var iCurrentCursorY = 0;
var iCurrentCursorX2 = 0;
var iCurrentCursorY2 = 0;
var iResIDForSharing = 0;
var iSendITDid = 0;
var iSendITFid = 0;

$(document).ready(function () {
    $(document).mousemove(function (event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    });

    if (querystring("hash") != "") {
        var sResIDFromQuery = querystring("resid");
        if (sResIDFromQuery != "") {
            setTimeout("selectResponseText(" + sResIDFromQuery + ")", 1000);
        }
        else {
            selectPhrase('article');
        }
    }

    $("#F_Content").mousedown(function (e) {
        iCurrentCursorX = currentMousePos.x;
        iCurrentCursorY = currentMousePos.y;
    });

    $("#coteret_SubCoteretText").mousedown(function (e) {
        iCurrentCursorX = currentMousePos.x;
        iCurrentCursorY = currentMousePos.y;
    });

    $("#coteret_SubCoteretText").mouseup(function (e) {
        iCurrentCursorX2 = currentMousePos.x;
        iCurrentCursorY2 = currentMousePos.y;
        setTimeout("showSharingPopup()", 10);
    });

    $("#F_Content").mouseup(function (e) {
        iCurrentCursorX2 = currentMousePos.x;
        iCurrentCursorY2 = currentMousePos.y;
        setTimeout("showSharingPopup()", 10);
    });

    setTimeout(function () {
        $('span[id ^= "ResTD_"]').mousedown(function (e) {
            iCurrentCursorX = currentMousePos.x;
            iCurrentCursorY = currentMousePos.y;

        });

        $('span[id^="ResTD_"]').mouseup(function (e) {
            iCurrentCursorX2 = currentMousePos.x;
            iCurrentCursorY2 = currentMousePos.y;
            var sResSpanName = $(this).attr("name");

            if (sResSpanName != "") {
                var arrResID = sResSpanName.split('_');
                if (arrResID.length == 2) {
                    iResIDForSharing = arrResID[1];
                }
            }
            setTimeout("showSharingPopup()", 10);
        });
    }, 2000);

});

function sendItemByEmail(did, fid) {
    iSendITDid = did;
    iSendITFid = fid;
    showSharingOptions("sendit");
}

function selectResponseText(res_id) {
    var resp = $('a[name="resp_' + res_id + '"]');
    var click_attr = $(resp).attr("onclick");
    if (click_attr != "") {
        try {
            eval(click_attr);
            setTimeout("selectPhrase('response')", 2000);
        }
        catch (e) { }
    }
}

function showSharingPopup() {
    if (!getSelectionParentElement()) { return; }
    //if (typeof (shalter) == 'object' && typeof (shalter.ShareIt) == 'boolean' && shalter.ShareIt == true) {
        var selectedText = getSelectionText();
        if (selectedText != "") {
            iCurrentCursorY = (iCurrentCursorY <= iCurrentCursorY2) ? iCurrentCursorY : iCurrentCursorY2;
            $("#spnPopupSharing").css("left", currentMousePos.x);
            $("#spnPopupSharing").css("top", iCurrentCursorY - 60);
            $("#spnPopupSharing").show();
        }
        else {
            $('#spnPopupSharing').hide();
        }
    //}
}

function showSharingOptions(type) {
    var selectedText = getSelectionText();
    var iTempResID = 0;
    
    if (selectedText != "") {
        if (selectedText.length < iSelectionMinLength) {
            alert("לא ניתן לשתף פחות מ-" + iSelectionMinLength + " תווים");
            return;
        }
  
        if (parseInt(iResIDForSharing) > 0) {
            iTempResID = iResIDForSharing;
            iResIDForSharing = 0;
        }

        $.post("js/phrase_sharing.ashx", { type: "save", did: doc_id, dtype: "1111", text: escape(selectedText), network: escape(type), resid: iTempResID }).done(function (data) {
            $('#spnPopupSharing').hide();
            if (data == -1) {
                alert("Error occurred");
                return;
            }
            else {
                /*
                if (escape(selectedText).length > 2048) {
                alert("הקטע הנבחר הינו ארוך מדי");
                return;
                }
                */

                var urlCurrent = [location.protocol, '//', location.host, location.pathname].join('');
                var urlForEncoding = urlCurrent + "?hash=" + data;


                if (parseInt(iTempResID) > 0) { urlForEncoding += "&resid=" + iTempResID; }

                var urlEncoded = encodeURIComponent(urlForEncoding);

                switch (type.toLowerCase()) {
                    case "facebook":
                        window.open("http://www.facebook.com/sharer/sharer.php?&u=" + urlEncoded, "", "width=500, height=500");
                        break;
                    case "twitter":
                        window.open("https://twitter.com/intent/tweet?original_referer=" + urlEncoded + "&text=" + encodeURIComponent(selectedText) + "&url=" + urlEncoded, "", "width=500, height=500");
                        break;
                    case "gplus":
                        window.open("https://plus.google.com/share?url=" + urlEncoded, "", "width=500, height=500");
                        break;
                    case "linkedin":
                        window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + urlEncoded + "&title=" + encodeURIComponent(selectedText), "", "width=500, height=500");
                        break;
                    case "sendit":
                        var sPageAction = $("#aspnetForm").attr('action');
                        if (sPageAction != "") {
                            sPageAction = sPageAction.split('?')[0];
                        }

                        var sTextToSend = (selectedText.length > 255) ? selectedText.substring(0, 255) : selectedText;
                        window.open("http://www.globes.co.il/serveen/globes/sendit.asp?did=" + iSendITDid + "&hash=" + data + "&text=" + escape(sTextToSend.replace(/\"/g, "''")) + "&pageaction=" + escape(sPageAction), "Send_Doc", "width=410,height=420,left=100,top=100,screenx=150,screeny=0,resizable=no,scrollbars=auto");
                        break;
                }
            }
        })
        //.fail(function (e,a,b) { alert(b); });
    }
}

function selectPhrase(type) {
    var sPhrase = $('meta[property="og:title"]').attr('content');
    sPhrase = sPhrase.trim();

    if (sPhrase.length > 255) {
        sPhrase = sPhrase.substring(0, 255);
    }
    //sPhrase = 'ראש הממשלה בנ ';
    sPhrase = sPhrase.replace(/[\n|\r\n]/g, ' ');
    //sPhrase = sPhrase.replace(/\"/g, "");
    
    if (sPhrase != "") {
        var objSearchIn = $("#F_Content,#coteret_SubCoteretText"); //by default type='article'

        if (type.toLowerCase() == 'response') {
            objSearchIn = $('span[id^="ResTD_"]');
        }

        try {
            //sPhrase = sPhrase.replace(/[`~!@#$%^&*()_|+=?;:'"<>\{\}\[\]\\\/]/gi, '');
            $(objSearchIn).highlight(sPhrase);

            if (!$(".highlight").length) {
                str = sPhrase;
                var arrWords = (str + " ").split(" ");
               
                if (arrWords.length < 50) {                                                   
                    for (var i = 0; i < arrWords.length; i++) {
                        try {
                            if ($(".highlight").length) { break; }

                            var lastIndexOfBlankSpace = str.replace(/[\n|\r\n]/g, ' ').lastIndexOf(" ");                       
                            str = str.substring(0, lastIndexOfBlankSpace);
                            str = str.trim();
                                                        
                            //str = str.replace(/[^\w\s]/gi, '');
                            //str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                            str = str.replace(/[`~!@#$%^&*_|+=;:'"<>\{\}\[\]\\\/]/gi, '');
                            if (str.length > 2) {
                                $(objSearchIn).highlight(str);
                            }
                        }
                        catch (ee) { /*alert(ee);*/ }
                    }
                }
                else {
                    var sFirstWord = arrWords[0];
                    if (sFirstWord.length == 1) { sFirstWord += " " + arrWords[0]; }                    
                    $(objSearchIn).highlight(sFirstWord);
                }
            }

            if ($(".highlight").length) {
                $('html, body').animate({ scrollTop: $(".highlight").offset().top - 150 }, 500);
            }
        }
        catch (e) { /*alert(e);*/ }
    }
}

function removehl() {
    $("body").removeHighlight();
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }

    return text.trim();
}

function getSelectionParentElement() {
    var arrEnabledItemsForSelection = ["coteret_subcoterettext", "f_content", "restd_"];
    var bRes = false;
    var parentID = "";
    var parentEl = null, sel;

    try {
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                parentEl = sel.getRangeAt(0).commonAncestorContainer;
                
                if (parentEl.nodeType != 1) {
                    parentEl = parentEl.parentNode;
                }
            }
        } else if ((sel = document.selection) && sel.type != "Control") {
            parentEl = sel.createRange().parentElement();
        }
        
        if (typeof (parentEl) != "undefined" && parentEl.id != "") {
            parentID = parentEl.id.trim().toLowerCase();
           
        }
        else if (typeof (parentEl.parentNode) != "undefined" && parentEl.parentNode.id != "") {
            parentID = parentEl.parentNode.id.trim().toLowerCase();
        }
        else {
            if (typeof (parentEl.parentNode.parentNode) != "undefined" && parentEl.parentNode.parentNode.id != "") {
                parentID = parentEl.parentNode.parentNode.id.toLowerCase();
            }
            else if (typeof (parentEl.parentNode.parentNode.parentNode) != "undefined" && parentEl.parentNode.parentNode.parentNode.id != "") {
                parentID = parentEl.parentNode.parentNode.parentNode.id.toLowerCase();
            }
        }

        if (parentID != "") {
            $(arrEnabledItemsForSelection).each(function () {
                if (parentID.indexOf(this) >= 0) { bRes = true; }
            });
        }
    }
    catch (ex) { }
   
    return bRes;
}


function clearSelection() { var selection = null; if (window.getSelection) { selection = window.getSelection(); } else if (document.selection) { selection = document.selection; } if (selection) { if (selection.empty) { selection.empty(); } if (selection.removeAllRanges) { selection.removeAllRanges(); } } }

jQuery.fn.highlight = function (pattern) {
    if (pattern == "") { return; }
    var regex = typeof (pattern) === "string" ? new RegExp(pattern, "i") : pattern;

    function innerHighlight(node, pattern) {
        try {
            var skip = 0;
            if (node.nodeType === 3) {
                var pos = node.data.search(regex);

                if (pos >= 0 && node.data.length > 0) {
                    var match = node.data.match(regex);
                    var spanNode = document.createElement('span');
                    spanNode.className = 'highlight';
                    var middleBit = node.splitText(pos);
                    var endBit = middleBit.splitText(match[0].length);
                    var middleClone = middleBit.cloneNode(true);
                    spanNode.appendChild(middleClone);
                    middleBit.parentNode.replaceChild(spanNode, middleBit);
                    skip = 1;
                }
            }
            else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; i++) {
                    i += innerHighlight(node.childNodes[i], pattern);
                }
            }
            return skip;
        }
        catch (ex) { return 0; }
    }

    return this.each(function () { innerHighlight(this, pattern); });
};

jQuery.fn.removeHighlight = function () {
    return this.find("span.highlight").each(function () {
        this.parentNode.firstChild.nodeName;
        with (this.parentNode) {
            replaceChild(this.firstChild, this);
            normalize();
        }
    }).end();
};

function closePopupSharing() {
    $('#spnPopupSharing').hide();
}

function querystring(key) {
    var b = location.href.replace(/\?/, "&").toLowerCase().indexOf("&" + key + "=")
    if (b < 0) { return '' }
    b += key.length + 2
    var e = location.href.indexOf("&", b)
    return location.href.substring(b, (e < b) ? location.href.length : e)
}