var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;/* Copyright (c) 2006 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * $LastChangedDate: 2007-12-14 23:57:10 -0600 (Fri, 14 Dec 2007) $
 * $Rev: 4163 $
 *
 * Version: 3.0
 * 
 * Requires: $ 1.2.2+
 */
(function($){$.event.special.mousewheel={setup:function(){var handler=$.event.special.mousewheel.handler;if($.browser.mozilla)$(this).bind('mousemove.mousewheel',function(event){$.data(this,'mwcursorposdata',{pageX:event.pageX,pageY:event.pageY,clientX:event.clientX,clientY:event.clientY});});if(this.addEventListener)this.addEventListener(($.browser.mozilla?'DOMMouseScroll':'mousewheel'),handler,false);else
this.onmousewheel=handler;},teardown:function(){var handler=$.event.special.mousewheel.handler;$(this).unbind('mousemove.mousewheel');if(this.removeEventListener)this.removeEventListener(($.browser.mozilla?'DOMMouseScroll':'mousewheel'),handler,false);else
this.onmousewheel=function(){};$.removeData(this,'mwcursorposdata');},handler:function(event){var args=Array.prototype.slice.call(arguments,1);event=$.event.fix(event||window.event);$.extend(event,$.data(this,'mwcursorposdata')||{});var delta=0,returnValue=true;if(event.wheelDelta)delta=event.wheelDelta/120;if(event.detail)delta=-event.detail/3;if($.browser.opera)delta=-event.wheelDelta;event.data=event.data||{};event.type="mousewheel";args.unshift(delta);args.unshift(event);return $.event.handle.apply(this,args);}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});})(jQuery);;/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/
		  
var tb_pathToImage = "https://web.archive.org/web/20110405084925/http://www.tdbimg.com/image/loading.gif";

// default width
var g_wIframeWidth = 646;


/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
$(document).ready(function(){   
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	$(domChunk).click(function(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
	});
}
 
function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "100%"});
			$("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(tb_remove);
				$("#TB_window").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				$("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(tb_remove);
				$("#TB_window").click(tb_remove);
			}
		}
		
		if(tb_detectMacXFF()){
			$("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			$("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}
		$("#TB_overlay").css("z-index",9998);
		$("#TB_window").css("z-index",9999);
		
		
		if(caption===null){caption="";}
		$("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");//add loader to the page
		$('#TB_load').show();//show loader
		
		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{ 
	   		baseURL = url;
	   }
	   
	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = $("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			$("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div>"); 		
			
			$("#TB_closeWindowButton").click(tb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				$("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				$("#TB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			tb_position();
			$("#TB_load").remove();
			$("#TB_ImageOff").click(tb_remove);
			$("#TB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}else{//code to show html
			
			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) +1 || g_wIframeWidth; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1)  || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 63;
			
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window		
					urlNoQuery = url.split('TB_');
					$("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='"+url+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH )+"px;' > </iframe>");
					}else{//iframe modal
					$("#TB_overlay").unbind();
						$("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+url+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					if($("#TB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>close</a> or Esc Key</div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						$("#TB_overlay").unbind();
						$("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						$("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						$("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						$("#TB_ajaxContent")[0].scrollTop = 0;
						$("#TB_ajaxWindowTitle").html(caption);
					}
			}
					
			$("#TB_closeWindowButton").click(tb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					$("#TB_ajaxContent").append($('#' + params['inlineId']).children());
					$("#TB_window").unload(function () {
						$('#' + params['inlineId']).append( $("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					$("#TB_load").remove();
					$("#TB_window").css({display:"block"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						$("#TB_load").remove();
						$("#TB_window").css({display:"block"});
					}
				}else{
					$("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						$("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						$("#TB_window").css({display:"block"});
					});
				}
			
		}

		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				}	
			};
		}
		
	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	$("#TB_load").remove();
	$("#TB_window").css({display:"block"});
}


function tb_remove_true() {
 	$("#TB_imageOff").unbind("click");
	$("#TB_closeWindowButton").unbind("click");
	$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove();});
	$("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		$("body","html").css({height: "auto", width: "auto"});
		$("html").css("overflow","");
	}
	document.onkeydown = "";
	document.onkeyup = "";
	return false;
}

function tb_position() {
$("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( !(jQuery.browser.msie && jQuery.browser.version < 7)) { // take away IE6
		$("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
};/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;/*
 * jqModal - Minimalist Modaling with jQuery
 *   (http://dev.iceburg.net/jquery/jqModal/)
 *
 * Copyright (c) 2007,2008 Brice Burgess <bhb@iceburg.net>
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * $Version: 03/01/2009 +r14
 */
(function($) {
$.fn.jqm=function(o){
var p={
overlay: 50,
overlayClass: 'jqmOverlay',
closeClass: 'jqmClose',
trigger: '.jqModal',
ajax: F,
ajaxText: '',
target: F,
modal: F,
toTop: F,
onShow: F,
onHide: F,
onLoad: F
};
return this.each(function(){if(this._jqm)return H[this._jqm].c=$.extend({},H[this._jqm].c,o);s++;this._jqm=s;
H[s]={c:$.extend(p,$.jqm.params,o),a:F,w:$(this).addClass('jqmID'+s),s:s};
if(p.trigger)$(this).jqmAddTrigger(p.trigger);
});};

$.fn.jqmAddClose=function(e){return hs(this,e,'jqmHide');};
$.fn.jqmAddTrigger=function(e){return hs(this,e,'jqmShow');};
$.fn.jqmShow=function(t){return this.each(function(){t=t||window.event;$.jqm.open(this._jqm,t);});};
$.fn.jqmHide=function(t){return this.each(function(){t=t||window.event;$.jqm.close(this._jqm,t)});};

$.jqm = {
hash:{},
open:function(s,t){var h=H[s],c=h.c,cc='.'+c.closeClass,z=(parseInt(h.w.css('z-index'))),z=(z>0)?z:3000,o=$('<div></div>').css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:c.overlay/100});if(h.a)return F;h.t=t;h.a=true;h.w.css('z-index',z);
 if(c.modal) {if(!A[0])L('bind');A.push(s);}
 else if(c.overlay > 0)h.w.jqmAddClose(o);
 else o=F;

 h.o=(o)?o.addClass(c.overlayClass).prependTo('body'):F;
 if(ie6){$('html,body').css({height:'100%',width:'100%'});if(o){o=o.css({position:'absolute'})[0];for(var y in {Top:1,Left:1})o.style.setExpression(y.toLowerCase(),"(_=(document.documentElement.scroll"+y+" || document.body.scroll"+y+"))+'px'");}}

 if(c.ajax) {var r=c.target||h.w,u=c.ajax,r=(typeof r == 'string')?$(r,h.w):$(r),u=(u.substr(0,1) == '@')?$(t).attr(u.substring(1)):u;
  r.html(c.ajaxText).load(u,function(){if(c.onLoad)c.onLoad.call(this,h);if(cc)h.w.jqmAddClose($(cc,h.w));e(h);});}
 else if(cc)h.w.jqmAddClose($(cc,h.w));

 if(c.toTop&&h.o)h.w.before('<span id="jqmP'+h.w[0]._jqm+'"></span>').insertAfter(h.o);	
 (c.onShow)?c.onShow(h):h.w.show();e(h);return F;
},
close:function(s){var h=H[s];if(!h.a)return F;h.a=F;
 if(A[0]){A.pop();if(!A[0])L('unbind');}
 if(h.c.toTop&&h.o)$('#jqmP'+h.w[0]._jqm).after(h.w).remove();
 if(h.c.onHide)h.c.onHide(h);else{h.w.hide();if(h.o)h.o.remove();} return F;
},
params:{}};
var s=0,H=$.jqm.hash,A=[],ie6=$.browser.msie&&($.browser.version == "6.0"),F=false,
i=$('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),
e=function(h){if(ie6)if(h.o)h.o.html('<p style="width:100%;height:100%"/>').prepend(i);else if(!$('iframe.jqm',h.w)[0])h.w.prepend(i); f(h);},
f=function(h){try{$(':input:visible',h.w)[0].focus();}catch(_){}},
L=function(t){$()[t]("keypress",m)[t]("keydown",m)[t]("mousedown",m);},
m=function(e){var h=H[A[A.length-1]],r=(!$(e.target).parents('.jqmID'+h.s)[0]);if(r)f(h);return !r;},
hs=function(w,t,c){return w.each(function(){var s=this._jqm;$(t).each(function() {
 if(!this[c]){this[c]=[];$(this).click(function(){for(var i in {jqmShow:1,jqmHide:1})for(var s in this[i])if(H[this[i][s]])H[this[i][s]].w[i](this);return F;});}this[c].push(s);});});};
})(jQuery);;var g_sGalleryUrl = '/templates/truebox.php';
var g_sCheatAssetUrl = '/templates/cheat_asset_display.php';
var cheatAssetUrl = '/templates/cheat_asset_display.php';

fixAssetOverlay = function(newW, newH){
	oldWidth = parseInt( $('#TB_iframeContent').width() );
	
	moveLeft = (oldWidth - newW) / 2;
	
	$('#TB_iframeContent').height(newH+10);
	$('#TB_iframeContent').width(newW);
	
	$('#TB_iframeContent').css('left',moveLeft );
	
	$('#TB_iframeContent').css('visibility','visible');
}


showCheatImage = function(assetUri){
	tb_show('',cheatAssetUrl+'?TB_iframe&assetType=1&assetUri='+assetUri+'&width=646&height=628');	
	$('#TB_iframeContent').css('visibility','hidden');
	
	setTimeout(function(){	
		tmpOffset =  ( $(document).scrollTop() );
		$('#TB_overlay').height(  $('#TB_overlay').height()+tmpOffset  );
		
	}, 100);

}

showCheatVideo = function(assetUri, assetName){
	tb_show('',cheatAssetUrl+'?TB_iframe&assetType=2&assetUri='+assetUri+'&assetName=&width=305&height=347');
	
	setTimeout(function(){	
		tmpOffset =  ( $(document).scrollTop() );
		$('#TB_overlay').height(  $('#TB_overlay').height(    )+tmpOffset  );
		
	}, 100);
}


tb_remove = function(){
	tb_remove_true();
}

showGallery = function(galleryId ,galleryIndex, p_sType ){
	if(galleryIndex == null || galleryIndex == 'undefined')
		galleryIndex = 0;
	
		
	if(p_sType == null || p_sType == 'undefined')
		p_sType = '';
	
	if(parseInt(document.newsmakerid) > 0){
		query="newsmaker=" + document.newsmakerid;
		if(p_sType){
			query=query+"&type="+p_sType;
		}
		document.location.href="/galleries/"+galleryId+"/"+(galleryIndex+1)+"/?"+query+"&redirectURL="+document.location.href;
	}
	else{
		document.location.href="/galleries/"+galleryId+"/"+(galleryIndex+1)+"/?redirectURL="+document.location.href;	
		
	}
	
	
	//alert(galleryIndex);
	//_xTruebox.showGallery(galleryId, galleryIndex, p_sType );
	
}

showCover = function(selectedCover, dateString ){
	
	_xTruebox.showCover(selectedCover, dateString );
	
}
showNewsmakerCover = function(index, newsmakerId ){
	
	_xTruebox.showNewsmakerCover(index, newsmakerId );
	
}
_xTruebox = {
	
	_sCurrentTruebox : '',
	_bGalleryUp : false,
	_bGalleryLoading : false,
	_bReadyToClose : true,
	_bCloseBtnClick : false,
	_nCurrentId : 0,
	_nNewsmakerGallery : 0,
	_nCurrentPage : 0,
	_bPlaying : false,
	_xTimeoutObject : null,
	_bOnEnd : false,
	_bViewAll : false,
	_bMoreGalleriesOpen : false,
	_bAnimatedToEnd : false,
	_nAnimationDelay : 5000,
	_nCurrentDateString : '',
	_nCurrentCoverIndex : 0,
	_sCurrentItemType : 0,
	
	
	setShareLinksForGallery:function(){
		
		var l_sTitle = $('#truebox_title').attr('alt');
		
		//alert("my title " + l_sTitle);
		
		var l_sFacebookUrl = 'https://web.archive.org/web/20110405084925/http://www.facebook.com/share.php?u='+document.submittableurl;
		var l_sTwitterUrl =  'https://web.archive.org/web/20110405084925/http://twitter.com/home?status=Currently%20Reading%20'+document.submittableurl;
		var l_sDiggUrl = 'https://web.archive.org/web/20110405084925/http://digg.com/submit?url='+document.submittableurl+'&title='+l_sTitle
		
		
		
		
		setTimeout(function(){
			if(document.getElementById("truebox_facebook"))
				shared_object.attachChicklet("facebook", document.getElementById("truebox_facebook"));
			if(document.getElementById("truebox_digg"))
				shared_object.attachChicklet("digg", document.getElementById("truebox_digg"));
			
			if(document.getElementById("truebox_twitter"))	
				shared_object.attachChicklet("twitter", document.getElementById("truebox_twitter"));
			
		},1000);
		//	$('#truebox_facebook').attr('href',l_sFacebookUrl);
		//	$('#truebox_digg').attr('href',l_sDiggUrl);
		//	$('#truebox_twitter').attr('href',l_sTwitterUrl);
		
	},
	
	setHash : function(p_nIndex){
		
		switch(_xTruebox._sCurrentTruebox){
			case 'gallery':
				
				var l_sHash = 'gallery='+_xTruebox._nCurrentId+';page='+(p_nIndex + 1 );
				if(_xTruebox._sCurrentItemType)
					l_sHash += ';item='+_xTruebox._sCurrentItemType
					
				setTimeout(function(){
					window.location.hash = l_sHash;
				},10);
				
				tmpurl = window.location.href
				hashindex = tmpurl.indexOf("#");
				
				if(hashindex > -1)
					tmpurl = tmpurl.substr(0,hashindex);
					
				hashindex = tmpurl.indexOf("?");
				
				if(hashindex > -1)
					tmpurl = tmpurl.substr(0,hashindex);
				
				var l_sSubmittableUrl = tmpurl+'gallery/'+_xTruebox._nCurrentId+'/'+(p_nIndex + 1 )+'/';				
				//alert(l_sSubmittableUrl);
				if(_xTruebox._sCurrentItemType);
					l_sSubmittableUrl += _xTruebox._sCurrentItemType+'/';
				
				document.submittableurl= l_sSubmittableUrl;
				
				//alert(document.submittableurl);
				
				_xTruebox.setShareLinksForGallery();
				
				
			break;
			
			case 'cover':
				setTimeout(function(){
					window.location.hash = 'cover='+_xTruebox._nCurrentDateString+';page='+(p_nIndex + 1 );
				},10);
				
				tmpurl = window.location.href
				hashindex = tmpurl.indexOf("#");
				
				tmpurl = tmpurl.substr(0,hashindex);
				
				
				document.submittableurl= tmpurl+'/gallerycover/'+_xTruebox._nCurrentDateString+'/'+(p_nIndex + 1 )+'/';
			break;
			case 'newsmakercover':
				setTimeout(function(){
					window.location.hash = 'newsmaker='+_xTruebox._nNewsmakerGallery+';page='+(p_nIndex + 1 );
				},10);
				
				tmpurl = window.location.href
				hashindex = tmpurl.indexOf("#");
				
				tmpurl = tmpurl.substr(0,hashindex);
				
				document.submittableurl= tmpurl+'/newsmakergallery/'+_xTruebox._nNewsmakerGallery+'/'+(p_nIndex + 1 )+'/';
			break;
		}
	},
	
	
	toggleShareThisGallery : function(){
		
		if($('#content_caption').length)
			var l_sBody = Base64.encode(strip_tags($('#content_caption').html()).substr(0,255));
		else
			var l_sBody = '';
		
		
		var l_sUrl = Base64.encode(document.submittableurl);
		
		if( $('#content_title').length )
			var l_sTitle = Base64.encode($.trim($('#content_title').html())+' - '+$('#truebox_title').attr('alt'));
		else{
			var l_sTitle = Base64.encode( $('#truebox_title').attr('alt') );
		}
		
		$('#truebox_iframe').show();
		$('#truebox_iframe_holder').attr('src','/templates/sharethis.php?&beastfull=1&url='+l_sUrl+'&title='+l_sTitle+ '&encode=1&content=' +l_sBody );
		
	},
	
	eraseHash : function(){
		
		tmpOffset =  ( $(document).scrollTop() );
		window.location.hash = '#';
		$.scrollTo(tmpOffset,0);
		
	},
	
	setOverlays : function(){
		
		var l_nWindowHeight = $(window).height();
		var l_nWindowWidth = $(window).width();
		
		var l_nScrollTop = $(window).scrollTop();
		
		var l_nTotalHeight = $(document).height();
		
		$('#trueboxOverlay').css('top',0);
		$('#trueboxOverlay').height(l_nTotalHeight);
		$('#trueboxOverlay').show();
		
		$('#trueboxContent').show();
		$('#trueboxContent').css('top',l_nScrollTop);
	},
	
	showNewsmakerCover : function(p_nIndex, p_nNewsmakerId ){
		_xTruebox._bOpen = true;
		
		if(!_xTruebox._bGalleryLoading){
			_xTruebox._sCurrentTruebox = 'newsmakercover';
			_xTruebox._nCurrentPage = p_nIndex+1;
			_xTruebox.setLoading();
			_xTruebox._bOnEnd = false;
			_xTruebox._bMoreGalleriesOpen = false;
			_xTruebox._bAnimatedToEnd = false;
			_xTruebox.setOverlays();
			
			_xTruebox._nNewsmakerGallery  = p_nNewsmakerId;
			
			_xTruebox.getFullTrueboxFromNewsmakerCover(p_nIndex, p_nNewsmakerId);
			
			_xTruebox.setHash( p_nIndex);
			
		}
		
		
	},
	showCover : function(p_nCoverIndex,  p_sDateString){
		_xTruebox._bOpen = true;
		
		if(!_xTruebox._bGalleryLoading){
			_xTruebox._sCurrentTruebox = 'cover';
			_xTruebox._nCurrentPage = p_nCoverIndex+1;
			_xTruebox.setLoading();
			_xTruebox._bOnEnd = false;
			_xTruebox._bMoreGalleriesOpen = false;
			_xTruebox._bAnimatedToEnd = false;
			_xTruebox.setOverlays();
			
			_xTruebox._nCurrentDateString = p_sDateString;
			
			_xTruebox.getFullTrueboxFromCover(p_nCoverIndex, p_sDateString);
			
			_xTruebox.setHash( p_nCoverIndex);
			
		}
		
		
	},
	
	showGallery : function(p_nGalleryId, p_nGalleryIndex,p_sCurrentItemType){
		_xTruebox._bOpen = true;
		
		if(!_xTruebox._bGalleryLoading){
			_xTruebox._sCurrentItemType = p_sCurrentItemType;
			_xTruebox._sCurrentTruebox = 'gallery';
			_xTruebox._nCurrentPage = p_nGalleryIndex+1;
			_xTruebox.setLoading();
			_xTruebox._bOnEnd = false;
			_xTruebox._bMoreGalleriesOpen = false;
			_xTruebox._bAnimatedToEnd = false;
			_xTruebox.setOverlays();
			
			if(parseInt(document.newsmakerid) > 0)
				_xTruebox._nNewsmakerGallery  = document.newsmakerid;
			
			_xTruebox._nCurrentId = p_nGalleryId;
			
			_xTruebox.getFullTrueboxFromGallery(p_nGalleryId, p_nGalleryIndex);
			
			_xTruebox.setHash( p_nGalleryIndex); 
		}
		
		
	},
	
	getFullTrueboxFromNewsmakerCover : function(p_nCoverIndex, p_nNewsmakerId){
		
		DailybeastAjax._xArgs.data = 'a=getFullTrueboxFromNewsmakerCover';
		DailybeastAjax._xArgs.data += '&p_nCoverIndex='+p_nCoverIndex;
		DailybeastAjax._xArgs.data += '&p_nNewsmakerId='+p_nNewsmakerId;
		DailybeastAjax._xArgs.requestType = 'GET';
		DailybeastAjax._xArgs.returnDiv = '#trueboxInsideContent';
		DailybeastAjax._xArgs.callBack = _xTruebox.getFullTruebox_callback;
		/*DailybeastAjax._xArgs.loader = true;*/
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
	},
	
	getFullTrueboxFromCover : function(p_nCoverIndex, p_sDateString){
		
		DailybeastAjax._xArgs.data = 'a=getFullTrueboxFromCover';
		DailybeastAjax._xArgs.data += '&p_nCoverIndex='+p_nCoverIndex;
		DailybeastAjax._xArgs.data += '&p_sDateString='+p_sDateString;
		DailybeastAjax._xArgs.requestType = 'GET';
		DailybeastAjax._xArgs.returnDiv = '#trueboxInsideContent';
		DailybeastAjax._xArgs.callBack = _xTruebox.getFullTruebox_callback;
		/*DailybeastAjax._xArgs.loader = true;*/
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
	},
	
	fillPagination : function( p_nCurrent, p_nTotal, p_sStaticServer, p_sReleaseVersion, p_sFunction){
		
		if (p_sFunction == 'getPage')
			p_nTotal++;
		
		var l_nMaxPageView = 6;
		
		var l_sPagiString = '';
		
		if(p_nTotal > 1){
			
			if( p_nCurrent > p_nTotal )  
				p_nCurrent = p_nTotal;
			
			
			if(p_nCurrent > 1){
				l_sPagiString += '<a class="arrow_left arrows" onclick="_xTruebox.'+p_sFunction+'(\''+(p_nCurrent-1)+'\')" href="javascript:void(0)"><div class="arrow_cover"></div><img src="'+ p_sStaticServer +'/image/truebox_arrow_left.gif?v='+ p_sReleaseVersion +'" alt="Prev" width="13" height="10" class="arrow" /><img src="'+ p_sStaticServer +'/image/truebox_arrow_left_hover.gif?v='+ p_sReleaseVersion +'" width="13" height="10" class="arrow_hover" alt="Prev" /></a>&nbsp;';
			}else
				l_sPagiString += '<img src="'+ p_sStaticServer +'/image/blank.gif?v='+ p_sReleaseVersion +'" alt="" width="13" height="10" class="arrow" />&nbsp;';
			
			var l_nStartOn = 1;
			
			if(( p_nCurrent >= l_nMaxPageView && p_nTotal > l_nMaxPageView+1)  ){
				l_sPagiString += '<a href="javascript:void(0)" class="item" onclick="_xTruebox.'+p_sFunction+'(1)">01</a>&nbsp;';
				
				if(l_nMaxPageView+2 < p_nTotal )
					l_sPagiString += '<div class="dots">&#8230</div>&nbsp;';
					
				l_nStartOn = p_nCurrent - parseInt( l_nMaxPageView / 2);
			}
			
			
			if( ((p_nCurrent+l_nMaxPageView-1) > p_nTotal) && ( p_nCurrent >= l_nMaxPageView && p_nTotal > l_nMaxPageView ))
				l_nStartOn = p_nTotal - l_nMaxPageView + 1;
			
			if (l_nStartOn < 1) l_nStartOn  = 1;
			
			if(l_nStartOn != 1){
				l_nStartOn++;
				l_nMaxPageView -= 2;
			}
			
			if ( p_nTotal > l_nMaxPageView )
				var l_nLimit = l_nMaxPageView;
			else 
				var l_nLimit = p_nTotal;
			
			var l_sDisp = '';
			
			if((l_nStartOn+l_nMaxPageView) == p_nTotal){
				l_nStartOn--;
				l_nStartOn--;
				l_nLimit++;
				l_bLastDots = false;
			}else
				l_bLastDots = true;
			
			
			
			for(var i=0; i< l_nLimit+1; i++){
				
				if((l_nStartOn+i) > p_nTotal)
					break;
				   
				if((l_nStartOn+i) < 10)
					l_sDisp = '0'+(l_nStartOn+i);
				else
					l_sDisp = l_nStartOn+i;
			
				if( parseInt(l_nStartOn+i) <= 0)
					continue;
				
				
				if((l_nStartOn+i) ==  p_nCurrent)
					l_sPagiString += '<div class="item current_item">'+(l_sDisp)+'</div>&nbsp;';
				else
					l_sPagiString += '<a href="javascript:void(0)" class="item" onclick="_xTruebox.'+p_sFunction+'('+(l_nStartOn+i)+')">'+(l_sDisp)+'</a>&nbsp;';
			}
			
			if( (i+l_nStartOn) <= p_nTotal ){
				
				if(parseInt(l_sDisp)+1 == p_nTotal ) l_bLastDots = false;
				
				if((p_nTotal) < 10)
					l_sDisp = '0'+(p_nTotal);
				else
					l_sDisp = p_nTotal;
				
				if(l_bLastDots)
					l_sPagiString += '<div class="dots">&#8230</div>&nbsp;';
				l_sPagiString += '<a href="javascript:void(0)" class="item" onclick="_xTruebox.'+p_sFunction+'('+p_nTotal+')">'+l_sDisp+'</a>&nbsp;';
			}
			
			if(p_nCurrent  < p_nTotal){
				l_sPagiString += '<a class="arrow_right arrows" onclick="_xTruebox.'+p_sFunction+'(\''+(p_nCurrent+1)+'\')" href="javascript:void(0)"><div class="arrow_cover"></div><img src="'+ p_sStaticServer +'/image/truebox_arrow_right.gif?v='+ p_sReleaseVersion +'" alt="Next" width="13" height="10"  class="arrow" /><img src="'+ p_sStaticServer +'/image/truebox_arrow_right_hover.gif?v='+ p_sReleaseVersion +'" width="13" height="10" class="arrow_hover" alt="Next" /></a>';
			}else
				l_sPagiString += '<img src="'+ p_sStaticServer +'/image/blank.gif?v='+ p_sReleaseVersion +'" alt="" width="13" height="10" class="arrow" />&nbsp;';
			
		
		}
		
		
		$('#meta_pagination').html(l_sPagiString);
		
		setTimeout(function(){
			$('#meta_pagination .arrows').hover(
				function(){$(this).addClass('hover')}, function(){$(this).removeClass('hover')}
			);
		},100);
		
	},
	
	setLoading : function(){
		$('#truebox_loading').addClass('truebox_loading_active');
		_xTruebox._bGalleryLoading = true;
	},
	unsetLoading : function(){
		$('#truebox_loading').removeClass('truebox_loading_active');
		_xTruebox._bGalleryLoading = false;
		
		//Andres Garcia: Temporary fix
		$(".truebox_close").bind("click",function(){_xTruebox.closeBox();});
	},
	
	getPage : function(p_nPage){
		if( !_xTruebox._bGalleryLoading ){
			_xTruebox.setLoading();
			
			_xTruebox._bOnEnd = false;
			$('#truebox_content_holder').height( $('#truebox_content_holder').height() );
			
			if(_xTruebox._bViewAll){
				$('#truebox_meta').removeClass('truebox_meta_viewall');
				$('#truebox_meta').addClass('truebox_meta_paused');
			}
			
			if($('#truebox_content .truebox_txtholder').length){
				$('#truebox_content .truebox_imgholder img,#truebox_content .truebox_imgholder div').fadeOut(200);
				$('#truebox_content .truebox_txtholder').fadeOut(200,function(){
					_xTruebox.getInnerTruebox( p_nPage-1 );
				});
			}
			else{
				$('#truebox_content_holder .viewall_gallery').fadeOut(200,function(){
					_xTruebox.getInnerTruebox( p_nPage-1 );
				});
			}
			
			_xTruebox.setHash(p_nPage-1);
			_xTruebox._nCurrentPage = p_nPage;
			
			if($("#gallery_header_ad").get(0)!=undefined){
				$("#gallery_header_ad").get(0).src=$("#gallery_header_ad").get(0).src;
			}
			if($("#gallery_footer_ad").get(0)!=undefined){
				$("#gallery_footer_ad").get(0).src=$("#gallery_footer_ad").get(0).src;
			}
			
		}
	},
	
	playSlideshow : function(){
		
		$('#truebox_meta').removeClass('truebox_meta_paused');
		$('#truebox_meta').removeClass('truebox_meta_viewall');
		$('#truebox_meta').addClass('truebox_meta_play');
		
		
		_xTruebox._bViewAll = false;
		
		_xTruebox._bPlaying = true;
		
		if(_xTruebox._bOnEnd || $('#truebox_content_holder .viewall_gallery').length ){
			_xTruebox.getPage(1);
		}
		else{
			_xTruebox.getNextPage();
		}
		
		clearTimeout(_xTruebox._xTimeoutObject);
		
		_xTruebox.autoPlay();
		
	},
	
	autoPlay : function(){
		
		if(	_xTruebox._bPlaying ){
			_xTruebox._xTimeoutObject = setTimeout(function(){
				_xTruebox.getNextPage();
				_xTruebox.autoPlay();
			}, _xTruebox._nAnimationDelay);
		}
		
	},
	
	endReached : function(){
		if(	_xTruebox._bPlaying ){
			_xTruebox._bAnimatedToEnd = true;
		}
		_xTruebox.pauseSlideshow();
		_xTruebox._bOnEnd = true;
	},
	
	getNextPage : function(){
		
		_xTruebox.getPage(_xTruebox._nCurrentPage+1);
		
	},
	
	pauseSlideshow : function(){
		
		$('#truebox_meta').removeClass('truebox_meta_play');
		$('#truebox_meta').removeClass('truebox_meta_viewall');
		$('#truebox_meta').addClass('truebox_meta_paused');
		
		_xTruebox._bPlaying = false;
		clearTimeout(_xTruebox._xTimeoutObject);
		
	},
	
	
	replayGallery : function(){
		
		if(! _xTruebox._bAnimatedToEnd ){
			_xTruebox.getPage(1);
		}else{
			_xTruebox._bAnimatedToEnd = false;
			_xTruebox.playSlideshow();
		}
		
	},
	
	
	getInnerTruebox : function( p_nIndex){
		
		switch(_xTruebox._sCurrentTruebox){
			case 'gallery':
				DailybeastAjax._xArgs.data = 'a=getInnerTruebox';
				DailybeastAjax._xArgs.data += '&p_sType=gallery';
				DailybeastAjax._xArgs.data += '&p_nGalleryId='+_xTruebox._nCurrentId;
				DailybeastAjax._xArgs.data += '&p_nGalleryIndex='+p_nIndex;
				DailybeastAjax._xArgs.data += '&p_nNewsmakerGallery='+_xTruebox._nNewsmakerGallery;
				DailybeastAjax._xArgs.data += '&p_sItemType='+_xTruebox._sCurrentItemType;
				DailybeastAjax._xArgs.requestType = 'GET';
				DailybeastAjax._xArgs.returnDiv = '#truebox_content_holder';
				DailybeastAjax._xArgs.callBack = _xTruebox.getTruebox_callback;
				/*DailybeastAjax._xArgs.loader = true;*/
				DailybeastAjax.makeAjaxCall('/include/ajax.php');
			break;
			case 'cover':
				DailybeastAjax._xArgs.data = 'a=getInnerTruebox';
				DailybeastAjax._xArgs.data += '&p_sType=cover';
				DailybeastAjax._xArgs.data += '&p_sDateString='+_xTruebox._nCurrentDateString;
				DailybeastAjax._xArgs.data += '&p_nCoverIndex='+p_nIndex;
				DailybeastAjax._xArgs.requestType = 'GET';
				DailybeastAjax._xArgs.returnDiv = '#truebox_content_holder';
				DailybeastAjax._xArgs.callBack = _xTruebox.getTruebox_callback;
				/*DailybeastAjax._xArgs.loader = true;*/
				DailybeastAjax.makeAjaxCall('/include/ajax.php');
				
				
			break;
			case 'newsmakercover':
				DailybeastAjax._xArgs.data = 'a=getInnerTruebox';
				DailybeastAjax._xArgs.data += '&p_sType=newsmakercover';
				DailybeastAjax._xArgs.data += '&p_nNewsmakerId='+_xTruebox._nNewsmakerGallery;
				DailybeastAjax._xArgs.data += '&p_nCoverIndex='+p_nIndex;
				DailybeastAjax._xArgs.requestType = 'GET';
				DailybeastAjax._xArgs.returnDiv = '#truebox_content_holder';
				DailybeastAjax._xArgs.callBack = _xTruebox.getTruebox_callback;
				/*DailybeastAjax._xArgs.loader = true;*/
				DailybeastAjax.makeAjaxCall('/include/ajax.php');
				
				
			break;
		}
	},
	
	
	getFullTrueboxFromGallery : function(p_nGalleryId, p_nGalleryIndex){
		
		DailybeastAjax._xArgs.data = 'a=getFullTrueboxFromGallery';
		DailybeastAjax._xArgs.data += '&p_nGalleryId='+p_nGalleryId;
		DailybeastAjax._xArgs.data += '&p_nGalleryIndex='+p_nGalleryIndex;
		DailybeastAjax._xArgs.data += '&p_nNewsmakerGallery='+_xTruebox._nNewsmakerGallery;
		DailybeastAjax._xArgs.data += '&p_sItemType='+_xTruebox._sCurrentItemType;
		
		DailybeastAjax._xArgs.requestType = 'GET';
		DailybeastAjax._xArgs.returnDiv = '#trueboxInsideContent';
		DailybeastAjax._xArgs.callBack = _xTruebox.getFullTruebox_callback;
		/*DailybeastAjax._xArgs.loader = true;*/
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
	},
	
	
	getMoreGalleriesClick : function(){
		
		$('#truebox_moregalleries').click(function(){
			
			if( !_xTruebox._bGalleryLoading ){
				_xTruebox.setLoading();
				
				if(! _xTruebox._bMoreGalleriesOpen){
					_xTruebox._bMoreGalleriesOpen = true;
					$('#moregalleries_area_holder').height(0);
					 _xTruebox._bMoreGalleriesOpen = true;
					$(this).removeClass('truebox_moregalleries_down');
					$(this).addClass('truebox_moregalleries_up');
					
					DailybeastAjax._xArgs.data = 'a=getMoreGalleriesArea';
					DailybeastAjax._xArgs.data += '&p_nGalleryId='+_xTruebox._nCurrentId;
					DailybeastAjax._xArgs.data += '&p_nNewsmakerGallery='+_xTruebox._nNewsmakerGallery;
					DailybeastAjax._xArgs.data += '&p_sItemType='+_xTruebox._sCurrentItemType;
					DailybeastAjax._xArgs.requestType = 'GET';
					DailybeastAjax._xArgs.returnDiv = '#moregalleries_area';
					DailybeastAjax._xArgs.callBack = _xTruebox.getMoreGalleries_callback;
					/*DailybeastAjax._xArgs.loader = true;*/
					DailybeastAjax.makeAjaxCall('/include/ajax.php');
					
				}else{
					$(this).removeClass('truebox_moregalleries_up');
					$(this).addClass('truebox_moregalleries_down');
					$('#moregalleries_area_holder').animate({
							height: '0px'   },400, 
							function(){ 	
								_xTruebox.unsetLoading();
								_xTruebox._bMoreGalleriesOpen = false;
							}
					);
					
				}
			}
			
		});
		
		
	},
	
	
	clickToFit : function(p_sUrl){
		
		if( !_xTruebox._bGalleryLoading ){
			_xTruebox.setLoading();
			
			$('#truebox_fullscreen_holder').height(0);
			$('#truebox_fullscreen_holder img').load(function(){
				
				_xTruebox.unsetLoading();
				
				$('#truebox_fullscreen_holder').height('auto');
				$('#truebox_content_holder').hide();
				$('#moregalleries_area_holder').hide();
				$('#truebox_moregalleries').hide();
				$('#truebox_meta').hide();
				$('#truebox_exitfullscreen').show();
				
			});
			setTimeout(function(){
				$('#truebox_fullscreen_holder img').attr('src',p_sUrl);
			},100);
		}
	},
	
	
	exitFullScreen : function(){
		$('#truebox_fullscreen_holder').height(0);
		$('#truebox_content_holder').show();
		$('#truebox_content_holder').show();
		$('#truebox_meta').show();
		$('#truebox_exitfullscreen').hide();
		$('#moregalleries_area_holder').show();
		$('#truebox_moregalleries').show();
		$('#truebox_fullscreen_holder img').attr('src','');
	},
	
	getMoreGalleries_callback : function(){
		
		$('#moregalleries_area_holder').animate({
				height: ($('#moregalleries_area').height()+1)+'px'   },400, 
				function(){ 	
					_xTruebox.unsetLoading();
				}
		);
		
	},
	
	getFullTruebox_callback : function(){
		_xTruebox.getMoreGalleriesClick();
		_xTruebox.getTruebox_callback();
		_xTruebox.setShareLinksForGallery();
	},
	getTruebox_callback : function(){
		_xTruebox.unsetLoading();
		$('#truebox_content_holder').height( 'auto' );
	},
	
	closeBtnClick : function(){
		_xTruebox._bOpen = false;
	},
	
	closeBox : function(){
		
		//if(_xTruebox._bReadyToClose){
			if(!_xTruebox._bGalleryLoading){
				$('#trueboxContent').hide();
				$('#trueboxInsideContent').empty();
				_xTruebox.eraseHash();
				$('#trueboxOverlay').hide();
				$('#trueboxOverlay').height(0);
				_xTruebox._bCloseBtnClick = false;
				_xTruebox._bOpen = false;
			}
		//}
		//else{
		//	_xTruebox._bReadyToClose  = true;
		//}
	},
	
	
	viewAll : function(p_nPage){
		
		if( !_xTruebox._bGalleryLoading ){
			_xTruebox.setLoading();
			_xTruebox._bPlaying = false;
			_xTruebox._bViewAll = true;
			
			clearTimeout(_xTruebox._xTimeoutObject);
			$('#truebox_meta').removeClass('truebox_meta_play');
			$('#truebox_meta').removeClass('truebox_meta_paused');
			$('#truebox_meta').addClass('truebox_meta_viewall');
			
			_xTruebox._bPlaying = false;
			
			switch(_xTruebox._sCurrentTruebox){
				case 'gallery':
					DailybeastAjax._xArgs.data = 'a=viewAllTruebox';
					DailybeastAjax._xArgs.data += '&p_sType=gallery';
					DailybeastAjax._xArgs.data += '&p_nGalleryId='+_xTruebox._nCurrentId;
					DailybeastAjax._xArgs.data += '&p_nPage='+p_nPage;
					DailybeastAjax._xArgs.requestType = 'GET';
					DailybeastAjax._xArgs.returnDiv = '#truebox_content_holder';
					DailybeastAjax._xArgs.callBack = _xTruebox.getTruebox_callback;
					/*DailybeastAjax._xArgs.loader = true;*/
				break;
				case 'cover':
					DailybeastAjax._xArgs.data = 'a=viewAllTruebox';
					DailybeastAjax._xArgs.data += '&p_sType=cover';
					DailybeastAjax._xArgs.data += '&p_nDateString='+_xTruebox._nCurrentDateString;
					DailybeastAjax._xArgs.data += '&p_nPage='+p_nPage;
					DailybeastAjax._xArgs.requestType = 'GET';
					DailybeastAjax._xArgs.returnDiv = '#truebox_content_holder';
					DailybeastAjax._xArgs.callBack = _xTruebox.getTruebox_callback;
					/*DailybeastAjax._xArgs.loader = true;*/
				break;
				case 'newsmakercover':
					DailybeastAjax._xArgs.data = 'a=viewAllTruebox';
					DailybeastAjax._xArgs.data += '&p_sType=newsmakercover';
					DailybeastAjax._xArgs.data += '&p_nNewsmakerId='+_xTruebox._nNewsmakerGallery;
					DailybeastAjax._xArgs.data += '&p_nPage='+p_nPage;
					DailybeastAjax._xArgs.requestType = 'GET';
					DailybeastAjax._xArgs.returnDiv = '#truebox_content_holder';
					DailybeastAjax._xArgs.callBack = _xTruebox.getTruebox_callback;
					/*DailybeastAjax._xArgs.loader = true;*/
				break;
			}
			$('#truebox_content_holder').height( $('#truebox_content_holder').height() );
			
			if($('#truebox_content .truebox_txtholder').length){
				$('#truebox_content .truebox_imgholder img,#truebox_content .truebox_imgholder div').fadeOut(200);
				$('#truebox_content .truebox_txtholder').fadeOut(200,function(){
					DailybeastAjax.makeAjaxCall('/include/ajax.php');
				});
			}
			else{
				$('#truebox_content_holder .viewall_gallery').fadeOut(200,function(){
					DailybeastAjax.makeAjaxCall('/include/ajax.php');
				});
			}
			
		}
	}
	
}

$(function(){
	if(typeof(SHARETHIS) != "undefined"){
		_xTruebox.setShareLinksForGallery();
	}
})

prepTruebox = function(){
	$('body').click(function(){
		
		if(!_xTruebox._bOpen){
			var l_sOldHash = window.location.hash;
			
			setTimeout(function(){
				var l_sNewHash = window.location.hash;
				if( !_xTruebox._bOpen && l_sOldHash != l_sNewHash ){
					checkTrueboxHash();
				}
			},100);
		}
			
		
	});
	
	
	$('body').append('<div id="trueboxOverlay" ></div><div id="trueboxContent" ><div id="trueboxInsideContent" ></div></div>');
	
	window.onresize = function(){
		/*alert('resized');	*/
	}
	
	setTimeout(function(){	
		$('#trueboxOverlay').click(function(){_xTruebox.closeBox();});
		$('#trueboxContent').click(function(){ _xTruebox.closeBox(); });
		$('#trueboxInsideContent').click(function(event){event.stopPropagation(); if(!_xTruebox._bCloseBtnClick) _xTruebox._bReadyToClose = false; });
	}, 100);
	
}


checkTrueboxHash = function(){ 
	if(window.location.hash){
		
		var l_aHash = window.location.hash.split(';');
		
		if(l_aHash.length > 1){
			
			var indexOfGalleryId = 	l_aHash[0].search(/gallery=/);
			var indexOfCoverDate = 	l_aHash[0].search(/cover=/);
			var indexOfNewsmaker = 	l_aHash[0].search(/newsmaker=/);
			var indexOfPage = 	l_aHash[1].search(/page=/);
			if (l_aHash[2])
				var indexOfItem = 	l_aHash[2].search(/item=/);
			
			if(indexOfGalleryId >= 1){
				galleryId =  l_aHash[0].slice(indexOfGalleryId+8) ;
				index =  l_aHash[1].slice(indexOfPage+5) -1 ;
				if(indexOfItem && indexOfItem != -1){
					itemtype =  l_aHash[2].slice(indexOfItem+5)  ;
				}
				else 
					itemtype = '';
				showGallery(galleryId, index, itemtype);
			}else if(indexOfCoverDate >= 1){
				coverDate =  l_aHash[0].slice(indexOfCoverDate+6) ;
				index =  l_aHash[1].slice(indexOfPage+5) -1 ;
				showCover(index, coverDate);
			}else if(indexOfNewsmaker >= 1){
				newsmakerId =  l_aHash[0].slice(indexOfNewsmaker+10) ;
				index =  l_aHash[1].slice(indexOfPage+5) -1 ;
				showNewsmakerCover(index, newsmakerId);
			}else
				return;
		}
		
		
		
		
	}
	
};/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;/* Copyright (c) 2006-2007 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 2.1
 * 
 * Thanks to 
 * Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 * Tom Leonard for some improvements
 * 
 */
jQuery.fn.extend({
/**
* Returns get parameters.
*
* If the desired param does not exist, null will be returned
*
* To get the document params:
* @example value = $(document).getUrlParam("paramName");
* 
* To get the params of a html-attribut (uses src attribute)
* @example value = $('#imgLink').getUrlParam("paramName");
*/ 
 getUrlParam: function(strParamName){
	  strParamName = escape(unescape(strParamName));
	  
	  var returnVal = new Array();
	  var qString = null;
	  
	  if ($(this).attr("nodeName")=="#document") {
	  	//document-handler
		
		if (window.location.search.search(strParamName) > -1 ){
			
			qString = window.location.search.substr(1,window.location.search.length).split("&");
		}
			
	  } else if ($(this).attr("src")!="undefined") {
	  	
	  	var strHref = $(this).attr("src")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  } else if ($(this).attr("href")!="undefined") {
	  	
	  	var strHref = $(this).attr("href")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  } else {
	  	return null;
	  }
	  	
	  
	  if (qString==null) return null;
	  
	  
	  for (var i=0;i<qString.length; i++){
			if (escape(unescape(qString[i].split("=")[0])) == strParamName){
				returnVal.push(qString[i].split("=")[1]);
			}
			
	  }
	  
	  
	  if (returnVal.length==0) return null;
	  else if (returnVal.length==1) return returnVal[0];
	  else return returnVal;
	}
});;jQuery.url=function(){var segments={};var parsed={};var options={url:window.location,strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var parseUri=function(){str=decodeURI(options.url);var m=options.parser[options.strictMode?"strict":"loose"].exec(str);var uri={};var i=14;while(i--){uri[options.key[i]]=m[i]||""}uri[options.q.name]={};uri[options.key[12]].replace(options.q.parser,function($0,$1,$2){if($1){uri[options.q.name][$1]=$2}});return uri};var key=function(key){if(!parsed.length){setUp()}if(key=="base"){if(parsed.port!==null&&parsed.port!==""){return parsed.protocol+"://"+parsed.host+":"+parsed.port+"/"}else{return parsed.protocol+"://"+parsed.host+"/"}}return(parsed[key]==="")?null:parsed[key]};var param=function(item){if(!parsed.length){setUp()}return(parsed.queryKey[item]===null)?null:parsed.queryKey[item]};var setUp=function(){parsed=parseUri();getSegments()};var getSegments=function(){var p=parsed.path;segments=[];segments=parsed.path.length==1?{}:(p.charAt(p.length-1)=="/"?p.substring(1,p.length-1):path=p.substring(1)).split("/")};return{setMode:function(mode){strictMode=mode=="strict"?true:false;return this},setUrl:function(newUri){options.url=newUri===undefined?window.location:newUri;setUp();return this},segment:function(pos){if(!parsed.length){setUp()}if(pos===undefined){return segments.length}return(segments[pos]===""||segments[pos]===undefined)?null:segments[pos]},attr:key,param:param}}();;/**
 * jQuery.ScrollTo
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Date: 2/19/2008
 *
 * @projectDescription Easy element scrolling using jQuery.
 * Tested with jQuery 1.2.1. On FF 2.0.0.11, IE 6, Opera 9.22 and Safari 3 beta. on Windows.
 *
 * @author Ariel Flesler
 * @version 1.3.3
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object} settings Hash of settings, optional.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @example $('div').scrollTo( 340 );
 *
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { offset:-20 } );
 *
 * Notes:
 *  - jQuery.scrollTo will make the whole window scroll, it accepts the same arguments as jQuery.fn.scrollTo.
 *	- If you are interested in animated anchor navigation, check http://jquery.com/plugins/project/LocalScroll.
 *	- The options margin, offset and over are ignored, if the target is not a jQuery object or a DOM element.
 *	- The option 'queue' won't be taken into account, if only 1 axis is given.
 */
;(function( $ ){

	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$scrollTo.window().scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'y',
		duration:1
	};

	//returns the element that needs to be animated to scroll the window
	$scrollTo.window = function(){
		return $( $.browser.safari ? 'body' : 'html' );
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		settings = $.extend( {}, $scrollTo.defaults, settings );
		duration = duration || settings.speed || settings.duration;//speed is still recognized for backwards compatibility
		settings.queue = settings.queue && settings.axis.length > 1;//make sure the settings are given right
		if( settings.queue )
			duration /= 2;//let's keep the overall speed, the same.
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this.each(function(){
			var elem = this, $elem = $(elem),
				t = target, toff, attr = {},
				win = $elem.is('html,body');
			switch( typeof t ){
				case 'number'://will pass the regex
				case 'string':
					if( /^([+-]=)?\d+(px)?$/.test(t) ){
						t = both( t );
						break;//we are done
					}
					t = $(t,this);// relative selector, no break!
				case 'object':
					if( t.is || t.style )//DOM/jQuery
						toff = (t = $(t)).offset();//get the real position of the target 
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					act = elem[key],
					Dim = axis == 'x' ? 'Width' : 'Height',
					dim = Dim.toLowerCase();

				if( toff ){//jQuery/DOM
					attr[key] = toff[pos] + ( win ? 0 : act - $elem.offset()[pos] );

					if( settings.margin ){//if it's a dom element, reduce the margin
						attr[key] -= parseInt(t.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(t.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;//add/deduct the offset
					
					if( settings.over[pos] )//scroll to a fraction of its width/height
						attr[key] += t[dim]() * settings.over[pos];
				}else
					attr[key] = t[pos];//remove the unnecesary 'px'

				if( /^\d+$/.test(attr[key]) )//number or 'number'
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max(Dim) );//check the limits

				if( !i && settings.queue ){//queueing each axis is required					
					if( act != attr[key] )//don't waste time animating, if there's no need.
						animate( settings.onAfterFirst );//intermediate animation
					delete attr[key];//don't animate this axis again in the next iteration.
				}
			});			
			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target);
				});
			};
			function max( Dim ){
				var el = win ? $.browser.opera ? document.body : document.documentElement : elem;
				return el['scroll'+Dim] - el['client'+Dim];
			};
		});
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );;(function($){function toIntegersAtLease(n)
{return n<10?'0'+n:n;}
Date.prototype.toJSON=function(date)
{return this.getUTCFullYear()+'-'+
toIntegersAtLease(this.getUTCMonth())+'-'+
toIntegersAtLease(this.getUTCDate());};var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.quoteString=function(string)
{if(escapeable.test(string))
{return'"'+string.replace(escapeable,function(a)
{var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};$.toJSON=function(o,compact)
{var type=typeof(o);if(type=="undefined")
return"undefined";else if(type=="number"||type=="boolean")
return o+"";else if(o===null)
return"null";if(type=="string")
{return $.quoteString(o);}
if(type=="object"&&typeof o.toJSON=="function")
return o.toJSON(compact);if(type!="function"&&typeof(o.length)=="number")
{var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i],compact));}
if(compact)
return"["+ret.join(",")+"]";else
return"["+ret.join(", ")+"]";}
if(type=="function"){throw new TypeError("Unable to convert object of type 'function' to json.");}
var ret=[];for(var k in o){var name;type=typeof(k);if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;var val=$.toJSON(o[k],compact);if(typeof(val)!="string"){continue;}
if(compact)
ret.push(name+":"+val);else
ret.push(name+": "+val);}
return"{"+ret.join(", ")+"}";};$.compactJSON=function(o)
{return $.toJSON(o,true);};$.evalJSON=function(src)
{return eval("("+src+")");};$.secureEvalJSON=function(src)
{var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};})(jQuery);;/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;﻿/*!
 * jQuery blockUI plugin
 * Version 2.29 (10-DEC-2009)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2008 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function($) {

if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
	alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
	return;
}

$.fn._fadeIn = $.fn.fadeIn;

// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
// retarded userAgent strings on Vista)
var mode = document.documentMode || 0;
var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

// global $ methods for blocking/unblocking the entire page
$.blockUI   = function(opts) { install(window, opts); };
$.unblockUI = function(opts) { remove(window, opts); };

// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
$.growlUI = function(title, message, timeout, onClose) {
	var $m = $('<div class="growlUI"></div>');
	if (title) $m.append('<h1>'+title+'</h1>');
	if (message) $m.append('<h2>'+message+'</h2>');
	if (timeout == undefined) timeout = 3000;
	$.blockUI({
		message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
		timeout: timeout, showOverlay: false,
		onUnblock: onClose, 
		css: $.blockUI.defaults.growlCSS
	});
};

// plugin method for blocking element content
$.fn.block = function(opts) {
	return this.unblock({ fadeOut: 0 }).each(function() {
		if ($.css(this,'position') == 'static')
			this.style.position = 'relative';
		if ($.browser.msie)
			this.style.zoom = 1; // force 'hasLayout'
		install(this, opts);
	});
};

// plugin method for unblocking element content
$.fn.unblock = function(opts) {
	return this.each(function() {
		remove(this, opts);
	});
};

$.blockUI.version = 2.29; // 2nd generation blocking at no extra cost!

// override these in your code to change the default behavior and style
$.blockUI.defaults = {
	// message displayed when blocking (use null for no message)
	message:  '<h1>Please wait...</h1>',

	title: null,	  // title string; only used when theme == true
	draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)
	
	theme: false, // set to true to use with jQuery UI themes
	
	// styles for the message when blocking; if you wish to disable
	// these and use an external stylesheet then do this in your code:
	// $.blockUI.defaults.css = {};
	css: {
		padding:	0,
		margin:		'0 0 0 -480px',
		width:		0,
		top:		'14%',
		//left:		($(window).width() - 980) /2 + 'px', 
		left:		'50%',
		color:		'#000',
		border:		'none',
		backgroundColor:'#000'
	},
	
	// minimal style set used when themes are used
	themedCSS: {
		width:	'30%',
		top:	'40%',
		left:	'35%'
	},

	// styles for the overlay
	overlayCSS:  {
		backgroundColor: '#000',
		opacity:	  	 0.6,
		cursor:		  	 'normal'
	},

	// styles applied when using $.growlUI
	growlCSS: {
		width:  	'350px',
		top:		'10px',
		left:   	'',
		right:  	'10px',
		border: 	'none',
		padding:	'5px',
		opacity:	0.6,
		cursor: 	'default',
		color:		'#fff',
		backgroundColor: '#000',
		'-webkit-border-radius': '10px',
		'-moz-border-radius':	 '10px'
	},
	
	// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
	// (hat tip to Jorge H. N. de Vasconcelos)
	iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

	// force usage of iframe in non-IE browsers (handy for blocking applets)
	forceIframe: false,

	// z-index for the blocking overlay
	baseZ: 1000,

	// set these to true to have the message automatically centered
	centerX: true, // <-- only effects element blocking (page block controlled via css above)
	centerY: true,

	// allow body element to be stetched in ie6; this makes blocking look better
	// on "short" pages.  disable if you wish to prevent changes to the body height
	allowBodyStretch: true,

	// enable if you want key and mouse events to be disabled for content that is blocked
	bindEvents: true,

	// be default blockUI will supress tab navigation from leaving blocking content
	// (if bindEvents is true)
	constrainTabKey: true,

	// fadeIn time in millis; set to 0 to disable fadeIn on block
	fadeIn:  200,

	// fadeOut time in millis; set to 0 to disable fadeOut on unblock
	fadeOut:  400,

	// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
	timeout: 0,

	// disable if you don't want to show the overlay
	showOverlay: true,

	// if true, focus will be placed in the first available input field when
	// page blocking
	focusInput: true,

	// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
	applyPlatformOpacityRules: true,

	// callback method invoked when unblocking has completed; the callback is
	// passed the element that has been unblocked (which is the window object for page
	// blocks) and the options that were passed to the unblock call:
	//	 onUnblock(element, options)
	onUnblock: null,

	// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
	quirksmodeOffsetHack: 4
};

// private data and functions follow...

var pageBlock = null;
var pageBlockEls = [];

function install(el, opts) {
	var full = (el == window);
	var msg = opts && opts.message !== undefined ? opts.message : undefined;
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
	var css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
	var themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
	msg = msg === undefined ? opts.message : msg;

	// remove the current block (if there is one)
	if (full && pageBlock)
		remove(window, {fadeOut:0});

	// if an existing element is being used as the blocking content then we capture
	// its current place in the DOM (and current display style) so we can restore
	// it when we unblock
	if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
		var node = msg.jquery ? msg[0] : msg;
		var data = {};
		$(el).data('blockUI.history', data);
		data.el = node;
		data.parent = node.parentNode;
		data.display = node.style.display;
		data.position = node.style.position;
		if (data.parent)
			data.parent.removeChild(node);
	}

	var z = opts.baseZ;

	// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
	// layer1 is the iframe layer which is used to supress bleed through of underlying content
	// layer2 is the overlay layer which has opacity and a wait cursor (by default)
	// layer3 is the message content that is displayed while blocking

	var lyr1 = ($.browser.msie || opts.forceIframe) 
		? $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>')
		: $('<div class="blockUI" style="display:none"></div>');
	var lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
	
	var lyr3;
	if (opts.theme && full) {
		var s = '<div class="blockUI blockMsg blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:fixed">' +
					'<div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
					'<div class="ui-widget-content ui-dialog-content"></div>' +
				'</div>';
		lyr3 = $(s);
	}
	else {
		lyr3 = full ? $('<div class="blockUI blockMsg blockPage" style="z-index:'+z+';display:none;position:fixed"></div>')
					: $('<div class="blockUI blockMsg blockElement" style="z-index:'+z+';display:none;position:absolute"></div>');
	}						   

	// if we have a message, style it
	if (msg) {
		if (opts.theme) {
			lyr3.css(themedCSS);
			lyr3.addClass('ui-widget-content');
		}
		else 
			lyr3.css(css);
	}

	// style the overlay
	if (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform)))
		lyr2.css(opts.overlayCSS);
	lyr2.css('position', full ? 'fixed' : 'absolute');

	// make iframe layer transparent in IE
	if ($.browser.msie || opts.forceIframe)
		lyr1.css('opacity',0.0);

	//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
	var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
	$.each(layers, function() {
		this.appendTo($par);
	});
	
	if (opts.theme && opts.draggable && $.fn.draggable) {
		lyr3.draggable({
			handle: '.ui-dialog-titlebar',
			cancel: 'li'
		});
	}

	// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
	var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
	if (ie6 || expr) {
		// give body 100% height
		if (full && opts.allowBodyStretch && $.boxModel)
			$('html,body').css('height','100%');

		// fix ie6 issue when blocked element has a border width
		if ((ie6 || !$.boxModel) && !full) {
			var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
			var fixT = t ? '(0 - '+t+')' : 0;
			var fixL = l ? '(0 - '+l+')' : 0;
		}

		// simulate fixed position
		$.each([lyr1,lyr2,lyr3], function(i,o) {
			var s = o[0].style;
			s.position = 'absolute';
			if (i < 2) {
				full ? s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"')
					 : s.setExpression('height','this.parentNode.offsetHeight + "px"');
				full ? s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
					 : s.setExpression('width','this.parentNode.offsetWidth + "px"');
				if (fixL) s.setExpression('left', fixL);
				if (fixT) s.setExpression('top', fixT);
			}
			else if (opts.centerY) {
				if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
				s.marginTop = 0;
			}
			else if (!opts.centerY && full) {
				var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
				var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
				s.setExpression('top',expression);
			}
		});
	}

	// show the message
	if (msg) {
		if (opts.theme)
			lyr3.find('.ui-widget-content').append(msg);
		else
			lyr3.append(msg);
		if (msg.jquery || msg.nodeType)
			$(msg).show();
	}

	if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
		lyr1.show(); // opacity is zero
	if (opts.fadeIn) {
		if (opts.showOverlay)
			lyr2._fadeIn(opts.fadeIn);
		if (msg)
			lyr3._fadeIn(opts.fadeIn);
	}
	else {
		if (opts.showOverlay)
			lyr2.show();
		if (msg)
			lyr3.show();
	}

	// bind key and mouse events
	bind(1, el, opts);

	if (full) {
		pageBlock = lyr3[0];
		pageBlockEls = $(':input:enabled:visible',pageBlock);
		if (opts.focusInput)
			setTimeout(focus, 20);
	}
	else
		center(lyr3[0], opts.centerX, opts.centerY);

	if (opts.timeout) {
		// auto-unblock
		var to = setTimeout(function() {
			full ? $.unblockUI(opts) : $(el).unblock(opts);
		}, opts.timeout);
		$(el).data('blockUI.timeout', to);
	}
};

// remove the block
function remove(el, opts) {
	var full = (el == window);
	var $el = $(el);
	var data = $el.data('blockUI.history');
	var to = $el.data('blockUI.timeout');
	if (to) {
		clearTimeout(to);
		$el.removeData('blockUI.timeout');
	}
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	bind(0, el, opts); // unbind events
	
	var els;
	if (full) // crazy selector to handle odd field errors in ie6/7
		els = $('body').children().filter('.blockUI').add('body > .blockUI');
	else
		els = $('.blockUI', el);

	if (full)
		pageBlock = pageBlockEls = null;

	if (opts.fadeOut) {
		els.fadeOut(opts.fadeOut);
		setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
	}
	else
		reset(els, data, opts, el);
};

// move blocking element back into the DOM where it started
function reset(els,data,opts,el) {
	els.each(function(i,o) {
		// remove via DOM calls so we don't lose event handlers
		if (this.parentNode)
			this.parentNode.removeChild(this);
	});

	if (data && data.el) {
		data.el.style.display = data.display;
		data.el.style.position = data.position;
		if (data.parent)
			data.parent.appendChild(data.el);
		$(el).removeData('blockUI.history');
	}

	if (typeof opts.onUnblock == 'function')
		opts.onUnblock(el,opts);
};

// bind/unbind the handler
function bind(b, el, opts) {
	var full = el == window, $el = $(el);

	// don't bother unbinding if there is nothing to unbind
	if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
		return;
	if (!full)
		$el.data('blockUI.isBlocked', b);

	// don't bind events when overlay is not in use or if bindEvents is false
	if (!opts.bindEvents || (b && !opts.showOverlay)) 
		return;

	// bind anchors and inputs for mouse and key events
	var events = 'mousedown mouseup keydown keypress';
	b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

// former impl...
//	   var $e = $('a,:input');
//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
};

// event handler to suppress keyboard/mouse events when blocking
function handler(e) {
	// allow tab navigation (conditionally)
	if (e.keyCode && e.keyCode == 9) {
		if (pageBlock && e.data.constrainTabKey) {
			var els = pageBlockEls;
			var fwd = !e.shiftKey && e.target == els[els.length-1];
			var back = e.shiftKey && e.target == els[0];
			if (fwd || back) {
				setTimeout(function(){focus(back)},10);
				return false;
			}
		}
	}
	// allow events within the message content
	if ($(e.target).parents('div.blockMsg').length > 0)
		return true;

	// allow events for content that is not being blocked
	return $(e.target).parents().children().filter('div.blockUI').length == 0;
};

function focus(back) {
	if (!pageBlockEls)
		return;
	var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
	if (e)
		e.focus();
};

function center(el, x, y) {
	var p = el.parentNode, s = el.style;
	var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
	var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
	if (x) s.left = l > 0 ? (l+'px') : '0';
	if (y) s.top  = t > 0 ? (t+'px') : '0';
};

function sz(el, p) {
	return parseInt($.css(el,p))||0;
};

})(jQuery);;/*
 * jQuery Expander plugin
 * Version 0.1.1  (01/14/2008)
 * @requires jQuery v1.1.1+
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */


(function($) {

  $.fn.expander = function(options) {

    var opts = $.extend({}, $.fn.expander.defaults, options);
    var delayedCollapse;
    return this.each(function() {
      var $this = $(this);
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
     	var cleanedTag, startTags, endTags;	
     	var allText = $this.html();
     	var startText = allText.slice(0, o.slicePoint).replace(/(\w)$/,'');
     	startTags = startText.match(/<\w[^>]*>/g);
   	  if (startTags) {startText = allText.slice(0,o.slicePoint + startTags.join('').length).replace(/\w+$/,'');}
   	  
     	if (startText.lastIndexOf('<') > startText.lastIndexOf('>') ) {
     	  startText = startText.slice(0,startText.lastIndexOf('<'));
     	}
     	var endText = allText.slice(startText.length);    	  
     	 
   	  if (!$('span.details', this).length) {
 
       	if ( endText.replace(/\s+$/,'').split(' ').length < o.widow ) { 
		  	$(this).wrap("<div id='completetext'></div>");
			return; 
		}
        
       	if (endText.indexOf('</') > -1) {
         	endTags = endText.match(/<(\/)?[^>]*>/g);
          for (var i=0; i < endTags.length; i++) {

            if (endTags[i].indexOf('</') > -1) {
              var startTag, startTagExists = false;
              for (var j=0; j < i; j++) {
                startTag = endTags[j].slice(0, endTags[j].indexOf(' ')).replace(/(\w)$/,'$1>');
                if (startTag == rSlash(endTags[i])) {
                  startTagExists = true;
                }
              }              
              if (!startTagExists) {
                startText = startText + endTags[i];
                var matched = false;
                for (var s=startTags.length - 1; s >= 0; s--) {
                  if (startTags[s].slice(0, startTags[s].indexOf(' ')).replace(/(\w)$/,'$1>') == rSlash(endTags[i]) 
                  && matched == false) {
                    cleanedTag = cleanedTag ? startTags[s] + cleanedTag : startTags[s];
                    matched = true;
                  }
                };
              }
            }
          }
          endText = cleanedTag + endText;
        }
		   var linkUrl = $('#thelink').attr('href');
     	  $this.html([
			'<div id="starttext">',
     		startText,
			'</div>',
     		'<a href="'+linkUrl+'" class="read-more">',
     		  o.expandText,
     		'</a>',
     		'<span class="details">',
     		  allText,
     		'</span>'
     		].join('')
     	  );
      }
   	  $this
 	    .find('span.details').hide()
 	    .end()
 	    .find('a.read-more').click(function() {
		  $('#sendtofriend').removeClass('kill');
          $('#starttext').hide();
 	      $(this).hide()
 	        .next('span.details')[o.expandEffect](o.expandSpeed, function() {
            var $self = $(this);
            $self.css({zoom: ''});
            if (o.collapseTimer) {
              delayedCollapse = setTimeout(function() {  
                reCollapse($self);
                },
                o.collapseTimer
              );
              
            }    
 	        });
 	        
        return false;
 	    });
      if (o.userCollapse) {
		var linkUrl = $('#thelink').attr('href');
        $this
        .find('span.details').append(' <a class="re-collapse" href="'+linkUrl+'">' + o.userCollapseText + '</a>')
        .find('a.re-collapse').click(function() {
		  $('#sendtofriend').addClass('kill');
      	  $('#starttext').show();
          clearTimeout(delayedCollapse);
          var $spanCollapse = $(this).parent();
          reCollapse($spanCollapse);
          return false;
        });
      }

    });
    function reCollapse(el) {
       el.hide()
        .prev('a.read-more').show();
    }
    function rSlash(rString) {
      return rString.replace(/\//,'');
    }
  };
   
  $.fn.expander.defaults = {
    slicePoint:       100,   
    widow:            4,   
    expandText:         'read more...',  
    collapseTimer:    0,  
    expandEffect:     'show',
    expandSpeed:      '',   
    userCollapse:     true,  
    userCollapseText: '[collapse expanded text]'  
  };
})(jQuery);;/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2006 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16.push(key+"="+_18[key]);}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}return _23;};deconcept.PlayerVersion=function(_27){this.major=_27[0]!=null?parseInt(_27[0]):0;this.minor=_27[1]!=null?parseInt(_27[1]):0;this.rev=_27[2]!=null?parseInt(_27[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_29){var q=document.location.search||document.location.hash;if(q){var _2b=q.substring(1).split("&");for(var i=0;i<_2b.length;i++){if(_2b[i].substring(0,_2b[i].indexOf("="))==_29){return _2b[i].substring((_2b[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2d=document.getElementsByTagName("OBJECT");for(var i=_2d.length;i>0;i--){_2d[i].style.display="none";for(var x in _2d[i]){if(typeof _2d[i][x]=="function"){_2d[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);}if(Array.prototype.push==null){Array.prototype.push=function(_30){this[this.length]=_30;return this.length;};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;;/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();;$(
	function() {
		function iPhoneCheck() {
			var agent = navigator.userAgent.toLowerCase();
			var iphone = (agent.indexOf('iphone')!=-1);
			var iphoneBannerView = document.cookie.indexOf("iphoneBannerView") != -1;
			
			//alert("iphoneBannerView = " + iphoneBannerView + " / iphone = " + iphone);
			
			return iphone && !iphoneBannerView;
		}
	

		if (iPhoneCheck()) {
			//alert("deleting cookie");
			$('div.iphone_alert').show().html("<a class=\"iphone_alert\" target=\"_blank\" href=\"http://itunes.apple.com/us/app/the-daily-beast/id359917651/\"></a>");
			$.cookie('iphoneBannerView', 'iphoneBannerView');
		}
	}
);;/* ------------------------ Ajax Engine ---------------------------------------- */

DailybeastAjax = {};
DailybeastAjax._count = 0;
DailybeastAjax._xArgs = {};

DailybeastAjax._xArray = {};

DailybeastAjax.makeAjaxCall = function(url) {
	
	DailybeastAjax._count++;
	DailybeastAjax._xArray[DailybeastAjax._count] = DailybeastAjax._xArgs;
	DailybeastAjax.doAjax(DailybeastAjax._count,url);
	DailybeastAjax._xArgs = {}; 
}
	
DailybeastAjax.doAjax = function(countVar, url){
		
 		if(DailybeastAjax._xArray[countVar].loader){	
			DailybeastAjax.setLoaderOverlay(DailybeastAjax._xArray[countVar].returnDiv);
			DailybeastAjax._xArray[countVar].noloader = false;
		}
		var requestType = "POST";
		if(DailybeastAjax._xArray[countVar].requestType != null){
			requestType = DailybeastAjax._xArray[countVar].requestType;
		}
		
		
		$.ajax({
			type:       requestType,
			url:        url,
			data:       DailybeastAjax._xArray[countVar].data,
			success:    function(p_sMsg) {
				
				/*DailybeastAjax._tmp = DailybeastAjax._xArray[countVar];*/
				DailybeastAjax.onAjaxCallReturned(countVar, p_sMsg);
				
			}
		});
}




DailybeastAjax.onAjaxCallReturned = function(countVar, p_sMsg) {
	
	if(DailybeastAjax._xArray[countVar].returnDiv){
		$(DailybeastAjax._xArray[countVar].returnDiv).html(p_sMsg);
	}
	
	DailybeastAjax.returnVar = p_sMsg;
	if(DailybeastAjax._xArray[countVar].callBack) {
		DailybeastAjax._xArray[countVar].callBack();
	}
	
	DailybeastAjax._xArray[countVar] = null;
}



DailybeastAjax.setLoaderOverlay = function( theElement ){
	var loadingImg = 'https://web.archive.org/web/20110405084925/http://www.tdbimg.com/image/loading_ajax.gif';
	
	/*$('#ajaxoverlay').remove();*/
	
	if( $(theElement).css('position') != 'absolute' )
		$(theElement).css('position','relative');
	
	padLeft = $(theElement).css('padding-left');
	padTop = $(theElement).css('padding-top');
	
	
	var l_nHeight = $(theElement).height();
	var l_nWidth = $(theElement).width();

	
	$(theElement).append(
		'<div id="ajaxoverlay" style="background:#fff;'+
		 			'width:'+l_nWidth+'px; '+
					'height:'+l_nHeight+'px; '+
		 			'position:absolute; '+
					'top:'+ padTop+'; '+
					'left:'+padLeft+'; '+
					'z-index:1200; '+
					'filter:alpha(opacity=75);-moz-opacity:.75;opacity:.75;'+
					'"></div> '
		);
	
	$(theElement).append(
		'<img id="ajaxloader" src="'+loadingImg+'" style="'+
		 			'position:absolute; '+
					'margin-top:'+ padTop+'; '+
					'margin-left:'+padLeft+'; '+
		 			'left:'+(l_nWidth - 51) / 2+'px; '+
					'top:'+(l_nHeight - 64) / 2+'px; '+
					'z-index:1201; '+
					'" /> '
		);
 
	
};STATIC_SERVER = 'https://web.archive.org/web/20110405084925/http://www.tdbimg.com/';
//STATIC_SERVER = 'https://web.archive.org/web/20110405084925/http://static.local.thedailybeast.com/';
//STATIC_SERVER = 'https://web.archive.org/web/20110405084925/http://stage.static.thedailybeast.com/';
//STATIC_SERVER = 'https://web.archive.org/web/20110405084925/http://candt.static.thedailybeast/';
AJAX_URL = '/include/ajax.php';
_nAuthorInfoDepth = 1000;
_nBFSInfoDepth = 1000;
var ads_gbl_url=window.location.pathname; ads_gbl_url=ads_gbl_url.replace(new RegExp(/\//g),"_");
ord = Math.random()*10000000000000000; // for ad serving 



var BannerOPA = {
		wrapper: '#expandCollapseWrapper',
		EXPANDED_HEIGHT: 420,
		COLLAPSED_HEIGHT: 65,
		expand: function(){
				    setTimeout(function(){
		$(BannerOPA.wrapper).addClass("animated")
		  .stop()
		  .animate({
		  'height': BannerOPA.EXPANDED_HEIGHT
		  }, 300, BannerOPA.animationComplete);
				    },200);
				  },
				  collapse: function(){
				   setTimeout(function(){
				    $(BannerOPA.wrapper)
		.addClass("animated")
		.stop()
		.animate(
		{
		  'height': BannerOPA.COLLAPSED_HEIGHT
		}, 300, BannerOPA.animationComplete);
				    },200);
				  },
				  animationComplete: function(){
				    $(BannerOPA.wrapper).removeClass("animated");
				  }
				}

var BannerUtils = {
		SUBJECT_NAME: 'banner_01',
		OBSERVER_NAME: 'swfBanner',
		FAKEAD_IMAGE: 'fakead_222',
		FAKEAD_NAME: 'banner_01',
		FAKEAD_IMAGEPATH: '',
		FAKEAD_IMAGEPATH_NEW: STATIC_SERVER+'image/ads/fakead_SocksScreenshot.png',
	    //  Car SWF loaded
		subjectLoaded: false,
	    //  Slideshow item (SWF) loaded
	    observerLoaded: false,
	    fakeadLoaded: false,
	    position: -200,
	    /**
	     *  Call Movie methods (Flash side)
	     */
	     thisMovie: function(movieName) {
			if (navigator.appName.indexOf("Microsoft") != -1) {
				return window[movieName];
			} else {
				return document[movieName];
			}
		},
		/**
	     *  Bottom banner complete
	     *  ExternalInterface.call
	     */
	    subjectLoadComplete: function(){
	       //	Slideshow item loaded (SWF banner)
			
			if (BannerUtils.observerLoaded) {
	        //	Start car movement
	        	BannerUtils.thisMovie(BannerUtils.SUBJECT_NAME).subjectStart(BannerUtils.position);
	        }
	        
			BannerUtils.subjectLoaded = true;
		},
	    /**
	     *  Start car animation
	     *  ExternalInterface.call
	     *  @param  {Number}    pos Car target (x position)
	     */
	    observerLoadComplete: function(pos){
			BannerUtils.position = -200;
	    	BannerUtils.observerLoaded = true;
	    	if (BannerUtils.subjectLoaded) {
	    		BannerUtils.thisMovie(BannerUtils.SUBJECT_NAME).subjectStart(BannerUtils.position);    	
	        }
	    },
	    /**
	     *  Start banner animation
	     *  ExternalInterface.call
	    */
	    observerUpdate: function(){
	        BannerUtils.thisMovie(BannerUtils.OBSERVER_NAME).observerUpdate();
	    },
	    /**
	     *  Banner completed
	     *  ExternalInterface.call
	    */
	    observerComplete: function(){
	        //	TODO: Play slideshow
	       _xMainFeature.playFeature();
	       $('#'+BannerUtils.SUBJECT_NAME).hide();
	    }
	    ,fakeadLoadComplete: function(){
	    	 if (!BannerUtils.fakeadLoaded) {
	    		 setTimeout(function(){
//	    			 $('#'+BannerUtils.FAKEAD_IMAGE).hide();
	        		 BannerUtils.thisMovie(BannerUtils.FAKEAD_NAME).fakeadStart(-200);
	        	 },2000);
	    		
	    	 }
	    	 BannerUtils.fakeadLoaded = true;
	    },
	    fakeadComplete: function(){
	       // $('#'+BannerUtils.FAKEAD_IMAGE).fadeIn();
	        //	Hide banner (car)	
			$('#'+BannerUtils.FAKEAD_NAME + ', #bannerCar').hide();
			_xMainFeature.playFeature();
	    },
	    fakeadChangeImage: function(){
	    	$('#'+BannerUtils.FAKEAD_IMAGE).find('img').attr('src',BannerUtils.FAKEAD_IMAGEPATH);
	    }
	};

function bannerSmartClick(){
	if($('#bannerSmartBig').css('display')=='none'){
		$('#bannerSmart, #flashContentSmall').unbind('mouseover');
		$('#bannerSmartBig').show();
	}
}

function bannerSmartClose(){
	$('#bannerSmartBig').hide();
	$('#bannerSmart, #flashContentSmall').unbind('mouseover');
	setTimeout(function(){
		$('#bannerSmart, #flashContentSmall')
	 	.unbind('mouseover').bind('mouseover',function(event){
		    event.preventDefault();
		    bannerSmartClick();
	 });
	}, 1000);
	
}

	$(function(){
		$('#bannerCar').css({
			left: parseInt($('#main-feature').css('left'),10) + parseInt($('#main-feature-col-1').css('padding-left'),10) - 156 + 'px',
			top: parseInt($('#content').css('padding-top'),10) - 19 + 'px',
			zIndex: 1000
			});
		 //	================1	FAKE AD	================
	     if ($('#bannerSmartBig').length) {
	    	 bannerSmartClose();
	     }
	    //  Hide fake ad
	    if ($('#'+BannerUtils.FAKEAD_IMAGE).length) {
	    	//	Fake ad original path
	    	BannerUtils.FAKEAD_IMAGEPATH = $('#'+BannerUtils.FAKEAD_IMAGE).find('img').attr('src');
	    	//	Replace with the fakead image
	    	$('#'+BannerUtils.FAKEAD_IMAGE).find('img').attr('src',BannerUtils.FAKEAD_IMAGEPATH_NEW); 
	    	// $('#'+BannerUtils.FAKEAD_IMAGE).hide();
	        //	Hide banner (car)	
			$('#'+BannerUtils.FAKEAD_NAME + ', #bannerCar').hide();
	    }
	    
		 //  Slideshow item changed
	     $(window).bind('ITEM_CHANGED',function(event){
	        //  SWF
	 	    if ($('#'+BannerUtils.FAKEAD_NAME).length && _xMainFeature._nCurrentId == 3){
	 	    	//	show fake ad image
	 	    	$('#'+BannerUtils.FAKEAD_IMAGE).find('img').attr('src',BannerUtils.FAKEAD_IMAGEPATH_NEW);
		        _xMainFeature.pauseFeature();   
		        //	Set fake ad
		        setTimeout(function(){
		        	//	Show car (IE)
		        	if (BannerUtils.fakeadLoaded){
		        		if ($.browser.msie) {
			            	 setTimeout(function(){
			            		 BannerUtils.thisMovie(BannerUtils.FAKEAD_NAME).fakeadStart(-200);
			            	 },
			 		        3000);
		        		}
		        	}
		        	
//		        	$('#'+BannerUtils.FAKEAD_IMAGE).hide();
		            $('#'+BannerUtils.FAKEAD_NAME + ',#bannerCar').show();
		            
		        },
		        2000);
		    }
	 	    //	Hide swf
	 	    if (_xMainFeature._nCurrentId != 3) {
	 	    	 $('#'+BannerUtils.FAKEAD_NAME + ',#bannerCar').hide();
	 	    }
	    });
	     
	    

	     

	});
	
	
	
	
	
	
$(document).ready(function(){

	var position = 0;
	var cultureHeader = $(".cultureheader").length;

    
    if($("#flashcontent").is(".flashBanner")){
        
        // Code specifically added for expanda and collapse the banners and adjust the page background properly
        var bannerInitWidth = $(".flashBanner #idBanner").height();
        var fixedHeight = 109;

	if(cultureHeader > 0){
        	position = $(".cultureheader").offset().top + fixedHeight;
        	$("body").css("background-position", "0px "+position+"px");
    	}

        var intervalforBanner = setInterval(function(){
            if(bannerInitWidth!=$(".flashBanner #idBanner").height()){

		if(cultureHeader > 0){
                	position = $(".cultureheader").offset().top + fixedHeight;
			$("body").css("background-position", "0px "+position+"px");
		}

                $("#flashcontent").height($("#idBanner").height());
                
            }else{
		if(cultureHeader > 0){
                	position = $(".cultureheader").offset().top + fixedHeight;
			$("body").css("background-position", "0px "+position+"px");
		}
                $("#flashcontent").height($("#idBanner").height());
                
            }
        },500);
    }
    
});



//$(document).ready(function(){
	
//	if($("#flashcontent").is(".flashBanner")){
		
		// Code specifically added for expanda and collapse the banners and adjust the page background properly
//		var bannerInitWidth = $(".flashBanner #idBanner").height();
//		var fixedHeight = 109;
//		var position = $(".cultureheader").offset().top + fixedHeight;
		
//		$("body").css("background-position", "0px "+position+"px");
	
//		var intervalforBanner = setInterval(function(){
//			if(bannerInitWidth!=$(".flashBanner #idBanner").height()){
//				position = $(".cultureheader").offset().top + fixedHeight;
//				$("#flashcontent").height($("#idBanner").height());
//				$("body").css("background-position", "0px "+position+"px");
//			}else{
//				position = $(".cultureheader").offset().top + fixedHeight;
//				$("#flashcontent").height($("#idBanner").height());
//				$("body").css("background-position", "0px "+position+"px");
//			}
//		},500);
//	}
	
//});

$(document).ready(function(){
  WINDOW_HEIGHT = $(window).height();
  WINDOW_WIDTH = $(window).width();
  
  //$(".v_normal:first p a").css("margin-top", Math.floor($(".v_normal:first p").height()-$(".v_normal:first p a").height())/2);
  $(".v_normal").each(function(index,item){
      $(item).find("p a").css("margin-top", Math.floor($(".v_normal:first p").height()-$(item).find("p a").height())/2);
  });
});

$(function(){
	
		if($("#flashvideo").parent().find("embed").size()==1){
		
			$("#flashvideo").parent().find("embed").attr("width","100%");
			$("#flashvideo").parent().find("embed").attr("height","100%");
			$("#flashvideo").parent().find("embed").attr("autoplay","false");
		} 
	
});


$(function(){
		var maxTimeFlash = 60000, counterMaxTime = 0;
		var interval_index = setInterval(function(){
			if($("#feature-item-1").parent().find("embed[play='false']").size()> 1){
				//$("#feature-item-1").parent().find("embed").attr("play", "true");
				$("#feature-item-1").parent().find("embed[play='false']").each(function(index, element){
					$(this).attr("play", "true");
				});
				clearInterval(interval_index);
			} else {
				counterMaxTime += 500;
			}
			if(counterMaxTime == maxTimeFlash)
				clearInterval(interval_index);
		}, 500);

});
var backPos_init;
var paddingTop_init;
var idbanner_init;

function startBanner(backpos,paddingtop){
	backPos_init = backpos;
	paddingTop_init = paddingtop;
	$("body.culture_tallbg").css("background-position",backpos);
	$("#culture-video-player-holder").css("padding-top",paddingtop);
	browser=false;
	if($.browser.mozilla){
		browser=$.browser.mozilla;
	}
	
	
	slide = new SlideBanner("flashcontent",browser,backpos,paddingtop);
	idbanner_init = "flashcontent";
	var bannerView = $.cookie('viewBanner');
	if(bannerView ==null){		
		$.cookie('viewBanner', 'bannerView');
	}else{
		slide.preview();
	}
	

}


/**
* @author Camilo Jimenez
*/
var SlideBanner = function (idbanner,support,backpos,paddingtop){
	this.id = new String(idbanner);
	this.timer = new Number(7);
	this.state = new String("");
	this.BrowserSupport=support;
	
	try {
		if (navigator.appVersion.indexOf("Win")!=-1){
			$("#eyeDiv").css("position", "static");
		}
	}catch(e){
	}
	this.collapse = function(){
		
		thisMovie("idBanner").javascriptToHandler("close");		
				

		if(this.BrowserSupport){
			
			$("#"+this.id).height(60);
			$("body.culture_tallbg").css("background-position", backpos);
			$("#culture-video-player-holder").css("padding-top",paddingtop);
		}else{
			$("#"+this.id).	animate( { height:"60px" }, { queue:false, duration:800 } );	
			//$("body.culture_tallbg"). animate({"background-position-y": "347px"} ,{ queue:false, duration:800 });
			$("body.culture_tallbg").css("background-position", backpos);
			$("#culture-video-player-holder").css("padding-top",paddingtop);
		}
	}
	this.expand = function(){		
		thisMovie("idBanner").javascriptToHandler("open");
		
		if(this.BrowserSupport){
			$("#"+this.id).height(418);
			$("#culture-video-player-holder").css("padding-top","485px");
			$("body.culture_tallbg").css("background-position", "left 705px");
		}else{
			//$("#idBanner").height(418);
			$("#"+this.id).animate( { height:"418px" }, { queue:false, duration:1000 } );
			$("#culture-video-player-holder").css("padding-top","485px");
			//$("body.culture_tallbg"). animate({"background-position-y": "705px"} ,{ queue:false, duration:1000 });
			$("body.culture_tallbg").css("background-position", "left 705px");
		}
	}
	this.supportAction= function (){
		if(this.BrowserSupport){
			thisMovie("idBanner").javascriptToHandler("noSupport");
		}
	}
	this.preview = function(){
		if(thisMovie("idBanner").javascriptToHandler)		
			thisMovie("idBanner").javascriptToHandler("preview");
	}
	
	
}



function thisMovie(movieName) {
  if (navigator.appName.indexOf("Microsoft") != -1) {
      return window[movieName];
   } else {
      return document[movieName];
   }
}

function hideAdEyeBlaster(){	
	var obj_s = {
		"height" : 0,
		"width" : 0
	}
	$($("#eyeDiv").find("div").get(0)).css(obj_s);
	$($("#eyeDiv").find("embed").get(0)).css(obj_s);
	try{
		var item = findEyeBlasterBanner()
		
		$(item.find("div").get(0)).css({
			"height" : 66
		})
	}catch(e){
	}
}

function findFlashObject(){
	var flashObject = $("*[name^='ebBannerFlash_']");
	return  flashObject;
}

function findEyeBlasterBanner(){
	var item;
	ids:for (var i = 0; i<$("#content").find("div").size(); i++){
		if($("#content").find("div").get(i).id.indexOf("ebBanner") != -1){
			item = $($("#content").find("div").get(i));
			break ids;
		}
	}
	return item;
}

$(function(){
	if ($("#eyeDiv").size() > 0) {
		$(document.body).css("background-position", "0px 345px");
		var parentFlash = findFlashObject().parent();
		var positionBG = 345;
		if(parentFlash.size() == 1){
			setInterval(function(){
				newPos = positionBG + (parentFlash.height() - 66);
				$(document.body).css("background-position", "0px "+newPos+"px");
			}, 200);
		}
	} else {
		if($(".cultureheader h1").offset()){
			if($(".cultureheader h1").offset().top > 220){
				$(document.body).css("background-position", "0px 345px");
			}
		}
	}
	
})
var flagOPA = 0; 
function flashToHandler(action){
	try{
		slide.supportAction();
		slide[action]();
	} catch(error) {
		
		/*
		if(flagOPA == 0){
			
		}
		if(flagOPA < 2){
			if (navigator.appVersion.indexOf("Win")!=-1){
				$("#eyeDiv").css("position", "static");}
				$("#eyeDiv").css("zIndex", 10);
			
			flagOPA++;
		} else {
			if(!window.all){
				if (navigator.appVersion.indexOf("Win")!=-1){
					$("#eyeDiv").css("position", "relative");
				}
			} else {
				$("#eyeDiv").css("position", "absolute");
			}
			
		}
		
		if(!document.all){
			if (navigator.appVersion.indexOf("Win")!=-1){
				$($("#eyeDiv").find("embed").get(0)).attr("wmode", "transparent");
			}
		}else {
			//alert($($("#eyeDiv").find("param").get(0)).size())
			$($("#eyeDiv").find("param[name='wmode']").get(0)).attr("value", "transparent");
			//$($("#eyeDiv").find("param[name='wmode']").get(0)).parent().parent().append($($("#eyeDiv").find("param[name='wmode']").get(0)).parent());
		}
				
		$("#eyeDiv").find("div:first-child").css("zIndex", 10);
		if(action == "expand"){
			if(this.BrowserSupport){
				$("#"+idbanner_init).height(418);
				$("#culture-video-player-holder").css("padding-top","485px");
				$("body.culture_tallbg").css("background-position", "left 705px");
			}else{
				$("#idBanner").height(418);
				$("#"+idbanner_init).animate( { height:"418px" }, { queue:false, duration:1000 } );
				$("#culture-video-player-holder").animate("padding-top","485px");
				//$("body.culture_tallbg"). animate({"background-position-y": "705px"} ,{ queue:false, duration:1000 });
				$("body.culture_tallbg").css("background-position", "left 705px");
			}
			
		} else {
			//$($("#content embed").get(1)).css("visibility", "visible");
			if(this.BrowserSupport){
				
				
				$("#"+idbanner_init).height(60);
				$("body.culture_tallbg").css("background-position", backPos_init);
				$("#culture-video-player-holder").css("padding-top",paddingTop_init);
			}else{
				$("#"+idbanner_init).animate( { height:"60px" }, { queue:false, duration:800 } );	
				//$("body.culture_tallbg"). animate({"background-position-y": "347px"} ,{ queue:false, duration:800 });
				$("body.culture_tallbg").css("background-position", backPos_init);
				$("#culture-video-player-holder").css("padding-top",paddingTop_init);
			}
		}
		*/
	}
}



$(window).resize( function(){ 
  WINDOW_HEIGHT = $(window).height();
  WINDOW_WIDTH = $(window).width();
  $('#ad-full-curtain').width( $(document).width() ).height( $(document).height());
});
	
	
	
setSortOrder = function(){
	$('#sortarea').addClass('sort_down');
}


sortComments= function(p_sDirection,commentFunction){
	document.sortOrder = p_sDirection;
	if(p_sDirection == 'ASC'){
		$('#sortarea').removeClass('sort_up');
		$('#sortarea').addClass('sort_down');
	}
	else{
		$('#sortarea').removeClass('sort_down');
		$('#sortarea').addClass('sort_up');
	}
	eval(commentFunction+"('1')");;
}
	
	
setHovers = function(){
	$('#newsmakerpage .full_cheatsheet_holder  .cheat a,'+
	  '#newsmakerpage .top_quote,'+
	  '#home .cheatsheet_holder .cheat a').hover(function(){
		$(this).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
	} );
	
}


setVideoOverlays = function(target){
	
	$(target+' .video_overlay').each(function(){
		
		siblingW = $(this).siblings('.compareImg').width();
		siblingH = $(this).siblings('.compareImg').height();
		 
		//alert(siblingW); 
		 
		 
		if((! ($.browser.safari || $.browser.msie)   ) && $(this).parent().attr('class') == 'article_img float_center'){
			siblingW  = 1;
		}
		if(  siblingW ){
			
			$(this).css({
				
				'visibility':'visible',
				'position':'absolute',
				'margin-left': ((siblingW - 36)/2)+'px',
				'margin-top': ((siblingH - 36)/2)+'px',
				'height':'55px',
				'width':'60px'
				
			});
			
		}
		
	});
	
	$(target+' .gallery_overlay').each(function(){
												
		var l_nLeft = 8;
 		siblingW = $(this).siblings('.compareImg').width();
		siblingH = $(this).siblings('.compareImg').height();
		
		if(target == '#blogsstories_holder'){
			siblingW =1;
			if( $(this).parent().parent().attr('class') == 'article_img float_center'){
				l_nLeft = -45;
				siblingH -= 10;
				
				if($.browser.safari){
					var l_nWidth = $(this).parents().find('.compareImg').attr('width');
					l_nWidth = l_nWidth/2 - ($(this).width()/2);
					$(this).css({'visibility':'visible','position':'absolute' ,'top':'-30px','left' : l_nWidth });
					siblingW = 0; 
				}
				
			}
		}
		
		if(siblingW ){
			 
			$(this).css({
				
				'visibility':'visible',
				'position':'absolute',
				'margin-left': (l_nLeft)+'px',
				'margin-top': ((siblingH)-  $(this).height() -5 )+'px',
				'height':'17px',
				'width':'80px'
				
			});
			
		}
		
	});
	
	
}



setAskSubmit = function(){
	$('#searchform').submit(function(){
		if( _xGlobal.checkEmpty( $('#searchform #q').val()) || _xGlobal.checkEmpty2( $('#searchform #q').val())  ){
			alert('Please enter a search term');
			$('#searchform #q').val('');
			return false;
		}
		
		if( $('#searchform #q').val() == $('#searchform #q').attr('rel')){
			$('#searchform #q').val('Top News');	
		}
		
		
		searchScope = $('#radios input:checked').val() ;
		
		if(searchScope == 'local'){
			$('#searchform').attr('action','https://web.archive.org/web/20110405084925/http://news.ask.com/news');
			$('#qsrc_input').attr('value','2443');
		}
		else if(searchScope == 'web'){
			$('#searchform').attr('action','https://web.archive.org/web/20110405084925/http://www.ask.com/web');
			$('#qsrc_input').attr('value','2444');
		}
		
	});
}




var setBigFatStory = function(){
	
	
	$('#maincontent2 a').each(function(){
		 hrefString = $(this).attr('href');
		 if(hrefString){
			 wwwLocation = hrefString.indexOf('http://');
			 dailybeastLocation = hrefString.indexOf('thedailybeast.com');
			 if( ( wwwLocation  === 0 ) && (dailybeastLocation == -1 ) ){
				$(this).attr('target','_blank');
			 }
		 }
		 
	});
	
	$('#bigfatstory_share_link').click(function(){ 
		$(this).children('.txt').toggleClass('txt_current');
		$('#popup_bigfatstory_share').toggle();
		$('#popup_bigfatstory_share').css('z-index',_nBFSInfoDepth++);
		$('#popup_bigfatstory_share').parent().parent().css('z-index',_nBFSInfoDepth++);
	});
	
	
	
	$('#maincontent2 .middle_holder').hover( function(){
		$(this).addClass('middle_holder_focus');
	},function(){
		$(this).removeClass('middle_holder_focus');
	});
	
	$('#maincontent2  .deepdive').hover( function(){
		$(this).children('.popup_deepdive').show();
	},function(){
		$(this).children('.popup_deepdive').hide();
	});
	
	
	
	
	$('#maincontent2 .module_holder').hover( function(){
													  
		$('#bigfatstory_share_link').children('.txt').removeClass('txt_current');												  	
		$('#popup_bigfatstory_share').hide();
		$('#maincontent2 .middle_holder_focus').removeClass('middle_holder_focus');
		$('#maincontent2 .current_focus').removeClass('current_focus').removeClass('partial_focus');
		$('#maincontent2 .popup_moreinfo').hide();
		
		$(this).addClass('partial_focus');
		
		if( $(this).children('.popup_moreinfo').length ){
			$(this).addClass('current_focus');
			 
			 
			$(this).children('.popup_moreinfo').fadeIn('normal',function(){ 
				if(! $(this).parent('.current_focus').length ){
					$(this).hide();
				}
					
			 });
			
			$(this).parent().css('z-index',_nBFSInfoDepth++);
			$(this).css('z-index',_nBFSInfoDepth++);
			if(  $(this).parent().attr('class') == 'old_post_module_holder' )
				$('#prevposts_holder').css('z-index',_nBFSInfoDepth++); 
	 	
			
			 
		}
	},function(){
		$(this).removeClass('current_focus');
		$(this).removeClass('partial_focus');
		$(this).children('.popup_moreinfo').hide();
	});
	
	
	
	
	$('#prevposts_holder .older_post_link').click( function(){  
		
		$(this).find('.txt').toggleClass('icon_minus');
		$(this).siblings('.old_post_module_holder').children('.module_holder').toggle();
		 
		setVideoOverlays('.old_post_module_holder');
		$('#prevposts_holder').css('z-index',_nBFSInfoDepth++);
		
	});
	
	
	$('#prevposts_link').click( function(){  
		$(this).toggleClass('prevposts_link_open');
		$('#prevposts_holder').toggle();
	});
	
	
	if( $('#maincontent2 .bottom_middle_2').length  ){
		$('#maincontent').addClass('double');
	}
	else{
		$('#maincontent').addClass('single');
	}
	
	
	
}




var setInfoInterace = function(targetArea){
	
	$('.icon_infocircle').unbind();
		$('.icon_infocircle').live('click', function(){
			$(this).parent().parent().siblings('.popup_author').removeClass('popup_author_last');
			$(this).parent().siblings('.popup_author').removeClass('popup_author_last');
			$('.popup_author_last').hide().removeClass('popup_author_last');
			$(this).parent().parent().siblings('.popup_author').addClass('popup_author_last').toggle();
			$(this).parent().siblings('.popup_author').addClass('popup_author_last').toggle();
	  		return false;
		});
		$('.author_close').unbind();
		$('.author_close').live('click', function(){
			$(this).parent().parent().hide();
		});
		/*
	$(targetArea+' .icon_infocircle').unbind();
	$(targetArea+' .icon_infocircle').click( function(){
		$(this).parent().parent().siblings('.popup_author').removeClass('popup_author_last');
		$(this).parent().siblings('.popup_author').removeClass('popup_author_last');
		$('.popup_author_last').hide().removeClass('popup_author_last');
		$(this).parent().parent().siblings('.popup_author').addClass('popup_author_last').toggle();
		$(this).parent().siblings('.popup_author').addClass('popup_author_last').toggle();
	  
		
		return false;
	});
	$(targetArea+' .author_close').unbind();
	$(targetArea+' .author_close').click( function(){
		$(this).parent().parent().hide();
	});*/
	 
}


updateShareThisCheat = function( p_nCount){
		var l_nLeft = $('#master').position();
		var l_nTop = 250;
		for(i=1; i<= p_nCount; i++){
			l_nTop += $('#cheatholder_'+i).height(); 
		}
		if( $('#comments_'+p_nCount).length ){
			hrefString = $('#comments_'+p_nCount).attr('rel');
		}else{
			hrefString = $('#urlgrab').attr('rel');
		}
		
		var l_sBody = Base64.encode(strip_tags($('#cheatholder_'+p_nCount+' .text p').html()).substr(0,255));
		var l_sUrl = Base64.encode(hrefString);
		var l_sTitle = Base64.encode($('#cheatholder_'+p_nCount).attr('rel'));
	  
		$('#shareThisHolder').css('top',l_nTop).css('z-index','1000').css('left',l_nLeft['left'] + 300).show();
		$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?&beastfull=1&url='+l_sUrl+'&title='+l_sTitle+ '&encode=1&content=' +l_sBody );
		
		
}
	
hideShareThisCheat = function(){
		$('#shareThisHolder').hide();
		$('#shareThisHolderIFrame').attr('src','');
}
	

var suggestScrollBack = null;
var submitScrollBack = false;

var setCheatLinks = function(targetArea){
	$('.sharethis a').click( function(){
			tmpRel = $(this).attr('rel'); 
			updateShareThisCheat( tmpRel ); 
	});
 
	$('.getnewsletter').click(function(){
		if (!getCookie('tdb_info')){
			_xSignup.resetForm();
			_xSignup.resetSupportForm();
			 
			$(this).siblings('.popup_sharelink').hide();									 
			$('#popup_emailsignup_home').toggle();
			$('#popup_emailsignup_footer').hide();
			$('#popup_emailsignup_formsupport').hide();
			
			 _xSignup.checkHovers();
		} else {
			window.location = '/account/';
		}
	 });
	
	
	
	$(targetArea+' .gotBetterLinkPopup_link').click( function(){ 
		if(document.cookie.indexOf("tdb_info=") != -1){	 //if the user is logged in when you click										  
			$(this).siblings('.popup_gotbetterlink').toggle();
			$(this).children('.txt').toggleClass('txt_current');
			var id = $(this).siblings('.popup_gotbetterlink').children('.popup_content').children('form').attr('id');
			resetBetterLinkForm(id);
			showAllFormElements(id);
		} else {
			$.scrollTo('#header', 800);
			$('#fblogin_form').jqmShow();	
			suggestScrollBack = $(this).parent().parent().parent().parent().attr("id"); //this is dependent on the structure remaining the same
		}
	});
	$(targetArea+' .popup_gotbetterlink .closebtn').click( function(){ 
		$(this).parents('.popup_gotbetterlink')
			.toggle();
		$(this).parents('.popup_gotbetterlink').siblings('.gotBetterLinkPopup_link').children('.txt')
			.toggleClass('txt_current');
	});
	
	$(targetArea+' .shareItPopup_link').click( function(){  
		
		$("#thecalendar").hide();
		$("#thecalendar2").hide();
		
		
		closeSecondSubmitPopup();
		if(isUserLoged() && !isUserLogedAsFacebook()){ //if the user is logged in when you click	
			$('.show_email').hide();
		} else {
			$('.show_email').show();
		}
		$('.icon_email_full').removeClass('txt_current');
		$('.popup_sharelink').hide();
		
		$(this).siblings('.popup_sharelink').toggle();
		$(this).css('z-index',_nBFSInfoDepth++);
		$(this).children('.txt').toggleClass('txt_current');
	 
		
		var id = $(this).siblings('.popup_sharelink').children('.popup_content').children('form').attr('rel');
		if(id != 'form_sharelink_'){
			if($.browser.msie && parseInt($.browser.version) == 6){
				$(this).siblings('.popup_sharelink').css('top','20px').css('left','-332px');
			}
			else
				$(this).siblings('.popup_sharelink').css('top','20px').css('left','0');
		}
		
		
		resetShareLinkForm(id);
		showAllFormElements(id);
		
		$('#popup_emailsignup_home').hide();
		$('#popup_emailsignup_footer').hide();
		$('#popup_emailsignup_formsupport').hide();
		_xSignup.checkHovers();
		
	});
	$(targetArea+' .popup_sharelink .closebtn').click( function(){  
		$(this).parents('.popup_sharelink')
			.toggle().css('z-index',_nBFSInfoDepth++);
		$(this).parents('.popup_sharelink').siblings('.shareItPopup_link').children('.txt')
			.toggleClass('txt_current');
	});
	
	
	$(targetArea+ '#submitnewstory_link').click(function(){
 		if(document.cookie.indexOf("tdb_info=") != -1){
			$('#popup_submitnewstory').toggle();
			$(this).children('.txt').toggleClass('txt_current');			
			resetNewStoryForm();
			showAllFormElements('form_newstory');			
		} else {
			$.scrollTo('#header', 800);
			$('#fblogin_form').jqmShow();	
			suggestScrollBack = true; //this is dependent on the structure remaining the same

		}
	});
	$(targetArea+' #popup_submitnewstory .closebtn').click( function(){ 
		$('#popup_submitnewstory')
			.toggle();
		$('#submitnewstory_link').children('.txt')
			.toggleClass('txt_current');
	});
	
	
	$(targetArea+ '#submitnewstory_link2').click(function(){
		if(document.cookie.indexOf("tdb_info=") != -1){
			$('#popup_submitnewstory').toggle();
			$(this).children('.txt').toggleClass('txt_current');			
			resetNewStoryForm();
			showAllFormElements('form_newstory');			
		} else {
			$.scrollTo('#header', 800);
			$('#fblogin_form').jqmShow();	
			suggestScrollBack = true; //this is dependent on the structure remaining the same

		}
	});
	$(targetArea+' #popup_submitnewstory2 .closebtn').click( function(){ 
		closeSecondSubmitPopup();
	});
	
	function closeSecondSubmitPopup(){
		$('#popup_submitnewstory2').hide();
		$('#submitnewstory_link2').children('.txt').removeClass('txt_current');
		$('#bottom_rows').removeClass('bottom_rows_active');
		
	}
	
	
	$('.cheatholder').each(function(){ 
		
		if( $(this).children('.insight').length )  {
			
			var insightDiv = $(this).children('.insight');
			
			textHeight = $(this).children('.text').height();
			titleHeight = $(this).children('.title').height();
			
			insightHeight = $(insightDiv).height();
			
			if(textHeight+titleHeight-insightHeight  > 0){
				$(insightDiv).css('margin-top', (textHeight+titleHeight-insightHeight)/2);
			}
			
			$('#jshelper').animate({ opacity: .9999}, 0001, '', function() { 
				$(insightDiv).css('display','none');
				$('#jshelper').animate({ opacity: .9999}, 0001, '', function() { 
					$(insightDiv).css('visibility','visible');
					$('#jshelper').animate({ opacity: .9999}, 0001, '', function() { 
						$(insightDiv).fadeIn();
					});
				});
			});
			
		}
		
		
		
	});
	
	
	
	
	
	
	
	
}



var setBlogsStoriesArticle = function(){
	
	//hack to fix bolded text
	$("#content_wrap").find("span").each(function(){ 
		var l_sStyle = $(this).attr('style'); 
		if(l_sStyle&& l_sStyle.match('11pt') ){
			$(this).attr('style','').addClass('articlebyline');
		}
	} );
	
	
	
	
	
	$('#blogsstories_share_link').click(function(){ 
		$(this).children('.txt').toggleClass('txt_current');
		$(this).children('.icon_sharehover').toggleClass('icon_minus');
		$('#popup_blogsstories_share').toggle();
	});
	
	
	this.col1 = false;
	this.col2 = false;
	
	
	$('#shareItPopup_link_top').live("click", function(){
		if( $(this).attr('rel') == 1 ){
			
			if(parent.col1){
				parent.col1 = false;
				parent.col2 = false;
				$('#popup_sharelink_top').hide();
				
			}else{ 
				var l_xBounds = $('.articlepage_icons').position();
			 
				//$('#popup_sharelink_top').css({'top': l_xBounds['top'] ,  'left':'-185px'}  );
				
				if(this.col2){
					parent.col1 = true;
					parent.col2 = false;
					
				}else{
					parent.col1 = true;
					parent.col2 = false;
					$('#popup_sharelink_top').show();
					
				}
			}
			
		}
		
		if( $(this).attr('rel') == 2 ){
			
			if(parent.col2){
				parent.col2 = false;
				parent.col1 = false;
				$('#popup_sharelink_top').hide();
				
			}else{
				l_nHeight= $('#content_wrap').height() - 250 ;
				$('#popup_sharelink_top').css({'top': l_nHeight ,  'left':'25px'}  );
				
				if(parent.col1){
					parent.col2 = true;
					parent.col1 = false;
					
				}else{
					parent.col2 = true;
					parent.col1 = false;
					$('#popup_sharelink_top').show();
					
				}
			}
			
		}
		
		if(isUserLoged() && !isUserLogedAsFacebook()){ //if the user is logged in when you click	
			$('.show_email').hide();
		} else {
			$('.show_email').show();
		}
		
		var id = $('#popup_sharelink_top').children('.popup_content').children('form').attr('rel');
		
		resetShareLinkForm(id);
		showAllFormElements(id);
	});
	$('#popup_sharelink_top .closebtn').click( function(){ 
		parent.col2 = false;
		parent.col1 = false;
		
		$(this).parents('#popup_sharelink_top')
			.toggle();
	});
	
	
	$('#shareItPopup_link_bottom').live("click", function(){
		if( $(this).attr('rel') == 1 ){
			
			if(parent.col1){
				parent.col1 = false;
				parent.col2 = false;
				$('#popup_sharelink_bottom').hide();
				
			}else{ 
				var l_xBounds = $('.articlepage_icons').position();
			 
				//$('#popup_sharelink_top').css({'top': l_xBounds['top'] ,  'left':'-185px'}  );
				
				if(this.col2){
					parent.col1 = true;
					parent.col2 = false;
					
				}else{
					parent.col1 = true;
					parent.col2 = false;
					$('#popup_sharelink_bottom').show();
					
				}
			}
			
		}
		
		if( $(this).attr('rel') == 2 ){
			
			if(parent.col2){
				parent.col2 = false;
				parent.col1 = false;
				$('#popup_sharelink_bottom').hide();
				
			}else{
				l_nHeight= $('#content_wrap').height() - 250 ;
				$('#popup_sharelink_bottom').css({'top': l_nHeight ,  'left':'25px'}  );
				
				if(parent.col1){
					parent.col2 = true;
					parent.col1 = false;
					
				}else{
					parent.col2 = true;
					parent.col1 = false;
					$('#popup_sharelink_bottom').show();
					
				}
			}
			
		}
		
		if(isUserLoged() && !isUserLogedAsFacebook()){ //if the user is logged in when you click	
			$('.show_email').hide();
		} else {
			$('.show_email').show();
		}
		
		var id = $('#popup_sharelink_bottom').children('.popup_content').children('form').attr('rel');
		
		resetShareLinkForm(id);
		showAllFormElements(id);
	});
	$('#popup_sharelink_bottom .closebtn').click( function(){ 
		parent.col2 = false;
		parent.col1 = false;
		
		$(this).parents('#popup_sharelink_bottom')
			.toggle();
	});
	
	
	/** Text size Stuff **/
	
	
	var tmpCookie = getCookie('tdb_textsize');
	switch(tmpCookie){
		case '1':
			l_sDefaultSize = 'big';
			break;
		case '2':
			l_sDefaultSize = 'bigger';
			break;
		default:
			l_sDefaultSize = 'default';
		break;
	}
	
	$('#maincontent').addClass(l_sDefaultSize);
	
	
	$('#text_plus').click( function(){
		l_xOptions = { expires: 30 , path: '/'};
		var tmpCookie = getCookie('tdb_textsize');
		
		if(tmpCookie == ''){
			$.cookie('tdb_textsize', 1, l_xOptions);
			
			$('#maincontent').removeClass('default');
			$('#maincontent').addClass('big');
		}
		
		if( tmpCookie == 1 ){
			$.cookie('tdb_textsize', 2, l_xOptions);
			
			$('#maincontent').removeClass('big');
			$('#maincontent').addClass('bigger');
			
		}
		
	});
	
	
	$('#text_minus').click( function(){
		l_xOptions = { expires: 30, path: '/' };
		
		var tmpCookie = getCookie('tdb_textsize');
		
		if( tmpCookie == 1 ){
			$.cookie('tdb_textsize', '', l_xOptions);
			
			$('#maincontent').removeClass('big');
			$('#maincontent').addClass('default');
		}
		if( tmpCookie == 2 ){
			$.cookie('tdb_textsize', 1, l_xOptions);
			
			$('#maincontent').removeClass('bigger');
			$('#maincontent').addClass('big');
		}
		
	});
	
	
}



var setBlogsStories = function(){
	$('#blogsstories .featured_top .arrow').click(function(){ 
     	_xBlog.scrollTopFeature($(this).attr('rel'));
	});
}
 

  
var setAutofills = function(){
	$('input.autofill').each(function(){
		$(this).val(  $(this).attr('rel') ) ;
	});
	$('input.autofill').focus(function(){
		if( $(this).val() == $(this).attr('rel')  ){
			$(this).val( '' );
			$(this).addClass('active');
		}
	});
	$('input.autofill').blur(function(){
		if( $(this).val() === '' ){
			$(this).val(  $(this).attr('rel') ) ;
			$(this).removeClass('active');
		}
	});
	
}

var things = new Object();
things.length = 0;

var setFooterLink = function(target){
	
	if(!things[target]){
		things[target] = target;		
		things.length++;
		$('#'+target+' .dropdown_content').addClass('dropdown_content_ready');
		$('#'+target+' .closebtn').click( function (){
			$('#'+target+' .dropdown_content').hide();	
			$('#footer').removeClass('footer_popup_open');								
		});
	}
	
	//hide popups that has already been opened. 
	if(things.length > 0){
		for (var thing in things){
			$('#'+things[thing]+' .dropdown_content').hide();
		}
	}
	
	//show popups we clicked
	$('#'+target+' .dropdown_content').show();
	$('#footer').addClass('footer_popup_open');
}

var setFooterPopups = function(target){
	
	//if we've never opened this popup before
	if(!things[target]){		
		//call ajax to get the page dynamically
		$.ajax({
			type:       "POST",
			url:        AJAX_URL,
			data:       'a=getFooterText&type='+target,
			success:    function(p_sMsg) {
				
				if(p_sMsg){	//if we get back an ajax response
					$('#'+target+' .inner_scrollarea').html(p_sMsg);	
					$('#footer').addClass('footer_popup_open');								
				} else {
					return;	//if it doesn't popup, let the user hit the button again. maybe they'll think they didn't hit it right the first time, and the call will fix itself								
				}		
				
				if(!things[target]){ //if the response did not contain code to set the variable, something went wrong, make them click again
					return;
				}
				
				//this is the fixed height of the popups
				var maxHeight = 200;	
				$('#jshelper').animate({ opacity: .9999}, 0001, '', function() { 
					$('#'+target+' .scrollarea').each( function(){ 
						if( $(this).height() > maxHeight ){
							//alert( $(this).height()+' '+maxHeight );
							 $(this).height(maxHeight);						 
							//alert( $(this).html() );
						}
					});
					
					//Hack to set scroll pane off window, and then place in right area	
					$('#jshelper').animate({ opacity: .9999}, 0100, '', function() { 
						$('#'+target+' .scrollarea').jScrollPane({scrollbarMargin:0, animateTo:true});
						$('#'+target+' .dropdown_content').addClass('dropdown_content_ready');
					 });
					
					$('#'+target+' .closebtn').click( function (){
						$('#'+target+' .dropdown_content').hide();	
						$('#footer').removeClass('footer_popup_open');								
					});
				});
			}
		});	
	} 
	
	//hide popups that has already been opened. 
	if(things.length > 0){
		for (var thing in things){						
			$('#'+things[thing]+' .dropdown_content').hide();
		}
	}
	
	//show popups we clicked
	$('#footer').css('z-index',_nBFSInfoDepth++);
	$('#'+target+' .dropdown_content').show();
	$('#footer').addClass('footer_popup_open');	
}






var setDropDowns = function(){
	
	//Fix height:
	var maxHeight = 300;
	
	$('#filterrow .scrollarea').each( function(){ 
		if( $(this).height() > maxHeight ){
			 $(this).height(maxHeight);
		}
	});
	
	
	//Hack to set scroll pane off window, and then place in right area	
	$('#jshelper').animate({ opacity: .9999}, 0001, '', function() {
		$('#filterrow .scrollarea').jScrollPane();
		$('#filterrow .dropdown_content').hide();
		$('#filterrow .dropdown_content').addClass('dropdown_content_ready');
	});
	
	
	setTimeout(function(){
	//Set clickzone for head:
		$('#filterrow  .dropdown').click( function(){
			$(this).siblings('.dropdown_content').toggle();
			$(this).toggleClass('dropdown_open');
		});
	},100);
	
	//Set hover for items:
	$('#filterrow .name').hover( function(){
		$(this).addClass('name_hover');
	}, function(){
		$(this).removeClass('name_hover');
	});
	
		$('#filterrow .name').click( function(){
			$(this).parents('.dropdown_holder').children('.dropdown')
				.toggleClass('dropdown_open')
				.html( $(this).html() )
				.attr( 'rel', $(this).attr('rel') );
			$(this).parents('.dropdown_content')
				.toggle();
			
			$(this).parents('.dropdown_holder').siblings('.dropdown_holder').each(function(){
				
		//		originalHolder = $(this).find('.original');
				
		//		$(this).children('.dropdown')
		//			.html( $(originalHolder).html() )
		//			.attr( 'rel', $(originalHolder).attr('rel') );
				
			});
			
			$(this).parents('.dropdown_holder').siblings('.picktypes').children('.current')
				.removeClass('current');
			$(this).parents('.dropdown_holder').siblings('.picktypes').children('.original')
				.addClass('current');
			
			
		});
	
};



_xPagination = {

	update : function(p_xObject){
		
		l_sDirection = $(p_xObject).attr('rel');
		
			//alert($(p_xObject).parent().attr('rel'));
			//alert( $(p_xObject).parent().find('.pagination').attr('rel'));
			//alert('update');
	}
	
	
}

_xGlobal = {
	
	printPage : function(p_sPage){
		
		if(!window.open(p_sPage,'Print','location=0,status=0,scrollbars=1,width=800,height='+($(window).height()-200)  ) ){
			alert('Your browser has disabled a popup window, please disable the blocker and click again')
		}
	
	},
	
	checkEmpty : function(p_sVal){
		l_sVal = escape(p_sVal);
		l_sVal = l_sVal.replace(/\s*((\S+\s*)*)/, "$1");
		l_sVal = l_sVal.replace(/((\s*\S+)*)\s*/, "$1");
		return l_sVal.length < 1;
	},
	
	checkEmpty2: function(p_sVal){
		l_sVal = (p_sVal);
		l_sVal = l_sVal.replace(/\s*((\S+\s*)*)/, "$1");
		l_sVal = l_sVal.replace(/((\s*\S+)*)\s*/, "$1");
		return l_sVal.length < 1;
	},
	
	showGallery : function(p_nId){
		showGallery (p_nId);
	},
	
	echeck: function(str) {
		 var l_aEmails = str.split(",");
		 var l_bValid = true;
		 for(i=0; i<l_aEmails.length; i++){
			 
			 if(! this.singleEmailCheck(jQuery.trim(l_aEmails[i]))){
				l_bValid = false;
				break;
			 }
			 
			 
		 }
		 
		 return l_bValid;
	},
	
	singleEmailCheck: function(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){ return false }
		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){ return false }
		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){ return false }
		if (str.indexOf(at,(lat+1))!=-1){ return false }
		if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){ return false }
		if (str.indexOf(dot,(lat+2))==-1){ return false }
		if (str.indexOf(" ")!=-1){return false }
		return true;				
	},
	
	printErrors: function(p_asErrors){
		r_sError =  "<div class=\"gap10\"></div>";
		r_sError += "<div class=\"error\">";
		r_sError += "<strong>ERROR:</strong>";
		r_sError += "<div class=\"clear\"></div>";
		for(var i=0; i < p_asErrors.length; i++){
			r_sError += "<span class=\"error list\"><span class=\"validation_error\">"+p_asErrors[i]+"</span></span>";
			r_sError += "<div class=\"clear\"></div>";
		}
		r_sError += "</div>";
		
		return r_sError;
	}	
}

function fullscreenExitFix() {
	_xVideo.performFullScreenExitFix();
}

_xVideo = {
	_nHomeMainFeatureVideoHeight : 457,
	_nHomeMainFeatureVideoWidth : 397,
	_nNewsmakerMainFeatureVideoHeight : 340,
	_nNewsmakerMainFeatureVideoWidth : 468,
	_nHomeVideoWidth : 300,
	_nHomeVideoHeight : 297,
	_nGalleryVideoWidth : 480,
	_nGalleryVideoHeight : 308,
	_nVideoPageVideoWidth :  398,
	_nVideoPageVideoHeight : 372,
	_nNewsmakerVideoWidth : 393,
	_nNewsmakerVideoHeight : 278,
	_nSizzleVideoWidth : 480,
	_nSizzleVideoHeight : 391,
	_nCultureVideoWidth : 592,
	_nCultureVideoHeight : 444,
	_nCultureTheatreVideoWidth : 512,
	_nCultureTheatreVideoHeight : 384,
	_nCultureTheatreVideoWidescreenHeight:310,
	_nNewsmakerVideoHeightExternal : 262,
	_nLastVideoType : 0,
	_bIframeFollow : false,
	
	videoPlayButtonPressed : function(id){
		
		if(this._bIframeFollow){
			
			this._bIframeFollow = false;
			$('#iframe_callout').attr('src', this._sLinkHref );
		}
		
	},
	
	enableVideoMouseUpFix : function() {
		$('body').mouseup( function() {
			if ( $('#tdbvideo').html() != null ) {
				//$('#tdbvideo')[0].videoMouseUpFix();
			}
		} );
	},
	
	performFullScreenExitFix : function() {
		$('#jshelper').height(1);
		setTimeout(function(){ $('#jshelper').height(0); }, 200);
	},
	
	initHomeVideo : function(p_nVideoAssetId) {
		document.currentVideopageId = p_nVideoAssetId;
		this.changeHomeVideoInteral(p_nVideoAssetId, 'false');
		$('#video_row_'+p_nVideoAssetId).addClass('overlay_on');
	},
	
	changeHomeVideo : function(p_nVideoAssetId) {
		this.changeHomeVideoInteral(p_nVideoAssetId, 'true');
		
		$('#home_video_thumbs .overlay_on').removeClass('overlay_on');
		$('#video_row_'+p_nVideoAssetId).addClass('overlay_on');
		
		document.currentVideopageId = p_nVideoAssetId;
	},
	
	checkVideopageOverlays: function(){
	 
	 	var l_nMaxHeight = 100;
		$('#home_video_thumbs .vid').each(function(){ 
			if ( $(this).attr('rel') == document.currentVideopageId ){
				$(this).addClass('overlay_on');
			}
			
			var l_nTimes = 0;
			 do{
				var l_sText = $(this).children('.txtholder').children('.content').text();
				if(l_nTimes++ > 0){
					$(this).children('.txtholder').children('.content').text( l_sText.substr(0,l_sText.length-4) + '...');
				}
			  	var l_nTitleHeight = $(this).children('.title').height();
			  	var l_nBodyHeight = $(this).children('.txtholder').height();
				var l_nTotalHeight = (l_nTitleHeight+l_nBodyHeight);

			}while(l_nTotalHeight > l_nMaxHeight && l_nTimes < 200);
			
		});
	
	},
	
	
	
	
	changeHomeVideoInteral : function(p_nVideoAssetId, p_sAutoplay){
		
		
		document.currentVideoId = p_nVideoAssetId;
		
		$('.popup_sharelink').hide();
		$('.shareItPopup_link').children('.txt').removeClass('txt_current');
				
		$('.shareItPopup_link').unbind();
		$('.shareItPopup_link').click( function(){ 
			
			if(isUserLoged() && !isUserLogedAsFacebook()){ //if the user is logged in when you click and not is facebook account	
				$('.show_email').hide();
			} else {
				$('.show_email').show();
			}
			$(this).siblings('.popup_sharelink').toggle();
			$(this).css('z-index',_nBFSInfoDepth++);
			$(this).children('.txt').toggleClass('txt_current');
			var id = $(this).siblings('.popup_sharelink').children('.popup_content').children('form').attr('id');
			resetShareLinkForm(id);
			showAllFormElements(id);
		});
		
		$(' .popup_sharelink .closebtn').unbind();
		$(' .popup_sharelink .closebtn').click( function(){ 
			$(this).parents('.popup_sharelink')
				.toggle().css('z-index',_nBFSInfoDepth++);
			$(this).parents('.popup_sharelink').siblings('.shareItPopup_link').children('.txt')
				.toggleClass('txt_current');
		});
		

		
		var l_sVideoContent = g_aHomeVideoDetails[p_nVideoAssetId]; // see VideoManager.php
		var l_aVideoContent = l_sVideoContent.split('~:|:~');
		var l_sTitle = l_aVideoContent[0];
		var l_sDescription = l_aVideoContent[1];
		var l_nVideoType = l_aVideoContent[2];
		var l_sVideoUri = l_aVideoContent[3];
		var l_sStillUri = l_aVideoContent[4];
		var l_nCommentCount = l_aVideoContent[5];
		var l_sTimeStamp = l_aVideoContent[6];
		var l_sEmbeddable = l_aVideoContent[7];
		var l_sAllowFullscreen = l_aVideoContent[8];
		var l_sSlug = l_aVideoContent[9];
		var l_sFlasVars = l_aVideoContent[10];
		$("#homevidholder .twitter").html('<a title="Share on Twitter" href="javascript:void(0)" id="twitter_1" st_dest="twitter.com"><span st_dest="twitter.com">Twitter</span></a>');
		var objectShare = SHARETHIS.addEntry({
			url:'https://web.archive.org/web/20110405084925/http://www.thedailybeast.com/video/item/'+l_sSlug,
			title:l_sTitle,
			content:l_sTitle
			},
			{button:false, embeds:true});
		objectShare.attachChicklet("twitter", $("#twitter_1").get(0));
		
		$("#homevidholder .fblike_home_video_cheat_sheet").html('<iframe src="https://web.archive.org/web/20110405084925/http://www.facebook.com/widgets/like.php?layout=button_count&amp;show_faces=false&amp;font=arial&amp;href='+escape('https://web.archive.org/web/20110405084925/http://www.thedailybeast.com/video/item/'+l_sSlug)+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:81px; height:22px;" allowTransparency="true">'+
				'<meta property="og:title" content="'+l_sTitle+'"/>'+
    			'<meta property="og:description" content="'+l_sTitle+'"/>'+
				'</iframe>');
		
		
		

		$('#homevidholder_control').height( $('#homevidholder').height()   );
		
		//$('.currentvid h4').html(l_sTitle);
		$('#homevidholder .title').html(l_sTitle);
		$('#homevidholder p.description').html(l_sDescription);
		$('#homevidholder .permalink').attr('href','/video/item/'+l_sSlug);
		//$('#homevidholder .commentcount').html(l_nCommentCount);
		$('#homevidholder .commentcount').html('<div id="commentCountForHomeVideo_'+p_nVideoAssetId+'"></div>');
		$('#homevidholder .timestamp').html(l_sTimeStamp);
		
		setTimeout(function(){
			$('#homevidholder_control').animate({
				height: $('#homevidholder').height()+'px'   },400);
		}, 10);
		
		
		
		/*
		if ( this._nLastVideoType == 1 && l_nVideoType == 1 ) {
			//alert ( 'check for embed: ' + $('#tdbvideo').html() + ' ' + $('#tdbvideo')[0] );
			$('#tdbvideo')[0].changeVideo(l_sVideoUri,l_sStillUri,l_sTitle,l_sEmbeddable,l_sAllowFullscreen,'true');
		}
		else*/
		if ( l_nVideoType == 1 ) {
			//$('#flashvideo').html(this.getHomeInHouseEmbed(l_sVideoUri, l_sStillUri,l_sTitle));
			$('#flashvideo').html('<div id=\"tdbhomevideotarget\"></div>');
			this.addHomeInHouseVideo(l_sVideoUri, l_sStillUri,l_sTitle, 'tdbhomevideotarget', l_sEmbeddable,l_sAllowFullscreen,p_sAutoplay, p_nVideoAssetId,l_sFlasVars);
		}
		else if ( l_nVideoType == 2 ) {
			$('#flashvideo').html(this.getHomeExternalEmbed(l_sVideoUri));
		}
		else {
			// Should never happen...
		}
		this._nLastVideoType = l_nVideoType;
		
		 $.ajax({
		   type: "GET",
		   url: AJAX_URL,
		   data: "a=getCommentsForVideo&divId=commentCountForHomeVideo_"+p_nVideoAssetId+"&p_nVideoId="+p_nVideoAssetId,
		   success: function(msg){
			 eval(msg);
		   }
		 });
		 
		
	},
	
	getHomeMainFeatureExternalEmbed : function(p_sVideoUri) {
		return this.resizeHomeMainFeatureEmbeddedVideo(p_sVideoUri);
	},
	getNewsmakerMainFeatureExternalEmbed : function(p_sVideoUri) {
		return this.resizeNewsmakerMainFeatureEmbeddedVideo(p_sVideoUri);
	},
	
	getHomeExternalEmbed : function(p_sVideoUri) {
		return this.resizeHomeEmbeddedVideo(p_sVideoUri);
	},
	getNewsmakerExternalEmbed : function(p_sVideoUri) {
		return this.resizeNewsmakerEmbeddedVideo(p_sVideoUri);
	},
	getSizzleExternalEmbed : function(p_sVideoUri) {
		return this.resizeSizzleEmbeddedVideo(p_sVideoUri);
	},
	getCultureExternalEmbed : function(p_sVideoUri) {
		return this.resizeCultureEmbeddedVideo(p_sVideoUri);
	},
	
	getVideoPageExternalEmbed : function(p_sVideoUri) {
		return this.resizeVideoPageEmbeddedVideo(p_sVideoUri);
	},
	
	addGalleryExternalEmbed : function(p_sVideoUri, p_sTargetDivId) {
		$('#'+p_sTargetDivId).html(p_sVideoUri);
	//	setTimeout(function(){
							
			if ( $('#' + p_sTargetDivId + ' object').attr('width') > this._nGalleryVideoWidth ||
				 $('#' + p_sTargetDivId + ' object').attr('height') > this._nGalleryVideoHeight ) {
				var l_aResizedDimensions = this.getResizedDimensions( $('#' + p_sTargetDivId + ' object').attr('width'),
																 $('#' + p_sTargetDivId + ' object').attr('height'),
																 this._nGalleryVideoWidth, this._nGalleryVideoHeight);
				$('#' + p_sTargetDivId + ' object').attr('width',l_aResizedDimensions[0]).attr('height',l_aResizedDimensions[1]);
			}
			if ( $('#' + p_sTargetDivId + ' embed').attr('width') > this._nGalleryVideoWidth ||
				 $('#' + p_sTargetDivId + ' embed').attr('height') > this._nGalleryVideoHeight ) {
				
				var l_aResizedDimensions = this.getResizedDimensions( $('#' + p_sTargetDivId + ' embed').attr('width'),
																 $('#' + p_sTargetDivId + ' embed').attr('height'),
																 this._nGalleryVideoWidth, this._nGalleryVideoHeight);
				$('#' + p_sTargetDivId + ' embed').attr('width',l_aResizedDimensions[0]).attr('height',l_aResizedDimensions[1]);
			}
			if ( $('#' + p_sTargetDivId + ' iframe').attr('width') > this._nGalleryVideoWidth ||
				 $('#' + p_sTargetDivId + ' iframe').attr('height') > this._nGalleryVideoHeight ) {
				var l_aResizedDimensions = this.getResizedDimensions( $('#' + p_sTargetDivId + ' iframe').attr('width'),
																 $('#' + p_sTargetDivId + ' iframe').attr('height'),
																 this._nGalleryVideoWidth, this._nGalleryVideoHeight);
				$('#' + p_sTargetDivId + ' iframe').attr('width',l_aResizedDimensions[0]).attr('height',l_aResizedDimensions[1]);
			}
	//	}, 200);	
		
	},
	
	addInHouseVideoInternal : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sSize, p_nWidth, p_nHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId, p_sFlashVars) {
		
		var so = new SWFObject(STATIC_SERVER+'swf/TheDailyBeastVideoPlayer.swf?r='+document._sReleaseVersion,'tdbvideo', p_nWidth, p_nHeight, '9', '#eeeeee');
		so.useExpressInstall('swf/expressinstall.swf');
		so.addParam('menu', 'false');            
		so.addParam('wmode', 'transparent');            
		so.addParam('allowfullscreen', 'true');
		so.addParam("allowScriptAccess", "always");
		var l_sFlashParams = 'default=true&video='+p_sVideoUri+'&still='+p_sStillUri+'&title='+escape(p_sTitle)+'&id='+p_nId+'&autoplay='+p_sAutoplay+'&embeddable='+p_sEmbeddable+'&allowFullscreen='+p_sAllowFullscreen+p_sSize+'&'+p_sFlashVars;
		so.addParam('flashvars', l_sFlashParams);
		so.write(p_sTargetDivId);
	},
	
	addVideoPageInHouseVideo : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId , p_sFlashVars) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&medium=true', this._nVideoPageVideoWidth, this._nVideoPageVideoHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId , p_sFlashVars);
	},
	
	addHomeInHouseVideo : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId, p_sFlashVars) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '', this._nHomeVideoWidth, this._nHomeVideoHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId, p_sFlashVars);
	},
	 
	addNewsmakerInHouseVideo : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&newsmaker=true', this._nNewsmakerVideoWidth, this._nNewsmakerVideoHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay , p_nId);
	},
	
	addSizzleInHouseVideo : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&sizzle=true', this._nSizzleVideoWidth, this._nSizzleVideoHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay , p_nId);
	},
	
	addCultureInHouseVideo : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&culturetop=true', this._nCultureVideoWidth, this._nCultureVideoHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay , p_nId);
	},
	
	addCultureTheatreInHouseVideo : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&culture=true', this._nCultureTheatreVideoWidth, this._nCultureVideoHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay , p_nId);
	}, 
	addCultureTheatreInHouseWidescreenVideo : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&culturewide=true', this._nCultureTheatreVideoWidth, this._nCultureTheatreVideoWidescreenHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay , p_nId);
	}, 
	
	addGalleryInHouseVideo : function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&gallery169=true', this._nGalleryVideoWidth, this._nGalleryVideoHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId);
	},
	
	addNominatedSlidingInHouseVideo :function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&culture=true', this._nCultureVideoWidth, this._nCultureVideoHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay , p_nId);
	}, 
	
	addNominatedSlidingInHouseWidescreenVideo :function (p_sVideoUri, p_sStillUri, p_sTitle, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay, p_nId) {
		this.addInHouseVideoInternal(p_sVideoUri, p_sStillUri, p_sTitle, '&culturewide=true', this._nCultureTheatreVideoWidth, this._nCultureTheatreVideoWidescreenHeight, p_sTargetDivId, p_sEmbeddable, p_sAllowFullscreen, p_sAutoplay , p_nId);
	}, 
	
	resizeHomeEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nHomeVideoWidth, this._nHomeVideoHeight);
	},
	
	resizeHomeMainFeatureEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nHomeMainFeatureVideoWidth, this._nHomeMainFeatureVideoHeight);
	},
	
	resizeNewsmakerMainFeatureEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nNewsmakerMainFeatureVideoWidth, this._nNewsmakerMainFeatureVideoHeight);
	},
	
	resizeVideoPageEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nVideoPageVideoWidth, this._nVideoPageVideoHeight);
	},
	
	resizeGalleryEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nGalleryVideoWidth, this._nGalleryVideoHeight);
	},
	resizeNewsmakerEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nNewsmakerVideoWidth, this._nNewsmakerVideoHeightExternal);
	},
	resizeSizzleEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nSizzleVideoWidth, this._nSizzleVideoHeight);
	},
	resizeCultureEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nCultureVideoWidth, this._nCultureVideoHeight);
	},
	resizeCultureTheatreEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nCultureTheatreVideoWidth, this._nCultureTheatreVideoHeight);
	},
	resizeCultureTheatreEmbeddedWidescreenVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nCultureTheatreVideoWidth, this._nCultureTheatreVideoWidescreenHeight);
	},
	resizeNominatesEmbeddedVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nCultureTheatreVideoWidth, this._nCultureTheatreVideoHeight);
	},
	resizeNominatesEmbeddedWidescreenVideo : function(p_sEmbedText) {
		return this.resizeEmbbedVideo(p_sEmbedText, this._nCultureTheatreVideoWidth, this._nCultureTheatreVideoWidescreenHeight);
	},
	
	resizeEmbbedVideo : function(p_sEmbedText, p_nWidth, p_nHeight) {
		var r_sEmbedText = p_sEmbedText.replace(/width=["']?( )*([0-9])+( )*["']?/gi, 'width=\"'+p_nWidth+'\"');
		r_sEmbedText = r_sEmbedText.replace(/height=["']?( )*([0-9])+( )*["']?/gi, 'height=\"'+p_nHeight+'\"');
		r_sEmbedText = r_sEmbedText.replace(/name=["']?( )*(wmode)( )*["']?/gi, 'remove=\"\"');
		r_sEmbedText = r_sEmbedText.replace(/<embed/gi, '<param name="wmode" value="transparent"></param><embed wmode=\"transparent\"');  
		r_sEmbedText = r_sEmbedText.replace(/<\/object/gi, '<param name="wmode" value="transparent"></object');  
	 
		return r_sEmbedText;
	},
	
	getResizedDimensions : function (p_nInputWidth, p_nInputHeight, p_nTargetWidth, p_nTargetHeight) {
		var l_nScale = 1;
		var l_nWidthRatio = p_nInputWidth / (1.0 * p_nTargetWidth);
		var l_nHeightRatio = p_nInputHeight / (1.0 * p_nTargetHeight);
		if ( l_nWidthRatio > l_nHeightRatio ) {
			l_nScale = p_nTargetWidth / (1.0 * p_nInputWidth);
		}
		else {
			l_nScale = p_nTargetHeight / (1.0 * p_nInputHeight);
		}
		var r_nWidth = p_nInputWidth * l_nScale;
		var r_nHeight = p_nInputHeight * l_nScale;
		return [r_nWidth, r_nHeight];
	}
}

_xAudio = {
	_aAudioPlayerDivIds : [],
	
	playAudioCalled: function(p_sAudioPlayerId) {
		if ( this._aAudioPlayerDivIds.length > 0 ) {
			for ( var l_nIndex in this._aAudioPlayerDivIds ) {
				var l_sId = this._aAudioPlayerDivIds[l_nIndex];
				if ( l_sId != p_sAudioPlayerId ) {
					var l_xSwf = $('#'+l_sId)[0];
					if ( l_xSwf != null ) { 
						l_xSwf.stopAudio();
					}
				}
			}
		}
	},

	stopAllAudioPlayers : function() {
		this.playAudioCalled('');
	},

	addAudioPlayer: function(p_sEmbedDiv, p_sTargetDiv, p_sAudioFile) {
		this._aAudioPlayerDivIds.push(p_sEmbedDiv);
	
		var so = new SWFObject(STATIC_SERVER+'swf/TheDailyBeastAudioPlayer.swf',p_sEmbedDiv, 20, 20, '8', '#eeeeee');
		so.addParam('menu', 'false');            
		so.addParam('wmode', 'transparent');            
		so.addParam('allowfullscreen', 'true');
		so.addParam("allowScriptAccess", "always");
		var l_sFlashParams = 'audio='+p_sAudioFile+'&id='+p_sEmbedDiv;
		//var l_sFlashParams = 'audio='+p_sAudioFile;
		so.addParam('flashvars', l_sFlashParams);
		so.write(p_sTargetDiv);
	}
}


_xNewsmaker = {

	addViewCount : function(p_nId){		
	
		$.ajax({
			type: "POST",
			url:  AJAX_URL,
			data: 'a=addNewsmakerViewCount&id='+p_nId,
			success: function(p_sMsg){}			
		});
	}
}

_xTags = {
	
	
	_nFixed : 0,
	_nFixedTries : 0,
	init: function(){
		
		$('.tags-filter-a').click( function(){
			
			$('.tags-filter-a').removeClass('active-filter').css('background-position','0 0');
			$(this).addClass('active-filter').css('background-position','0 -20px');
			DailybeastAjax.getTagsByFilter(parseInt($(this).attr('rel')),1);						
			return false;
		});
		/*
		$('.tags .post .author').each( function(){
			var l_nWidth = $(this).width() - 15;	
			var l_xBounds = $(this).position();	
			var l_xBounds2 = $(this).children('.iconholder').position();	
			var l_nDiff = (l_xBounds2['left'] - l_xBounds['left']) ;
			$(this).css('padding-left',(l_nWidth-l_nDiff)/2);
		});
		*/
	},
	
	getTagsPage: function(p_nPage){
		 
		var l_sFilter = $('.active-filter').attr('rel');	 
		if(!l_sFilter >0)
			l_sFilter = 0;
		DailybeastAjax.getTagsByFilter(l_sFilter,p_nPage);
	},
	
	fixOverlyLoader : function(p_sDiv,p_sDivAnchor){

		var l_xBounds = $(p_sDivAnchor).position();
		var l_nLeft = l_xBounds['left'];
		$(p_sDiv).css('position','');
		
		if ( ($.browser.msie && $.browser.version < 7)) { 
			l_nLeft -= 55;
		}
		$('#ajaxoverlay').css('left',l_nLeft).css('top',l_xBounds['top']);
		$('#ajaxloader').css('left',l_nLeft + ( $('#ajaxoverlay').width() / 2 ) ).css('top',l_xBounds['top'] + ( $('#ajaxoverlay').height() / 2 ));
		$.scrollTo('#header',500); 
	},
 
  
 	onTagsResults : function(){ 
 		setTimeout( function(){
			//setInfoInterace('');
		  	_xTags._nFixedTries = 0;
			_xTags.fixOverlayItems();
		 },500);
	},
	
	fixOverlayInfos : function(){
		$('.popup_author').each( function(){
			 
			
			//var l_xBounds = $(this).siblings('.iconholder').position();
			var l_xBounds2 = $(this).parents('.author').position();
			var l_nTop = l_xBounds2['top'] + $(this).parents('.author').height() ;
			var l_nLeft = l_xBounds2['left'];
			
			if ( ($.browser.msie && $.browser.version < 7)) { 
				 
				if($(this).parents('.post').length == 1){
					l_nTop -= 25;
					l_nLeft -= 95;
				}else{
					l_nTop += 5;
					l_nLeft -= 60;
				}
			}else{
				if($(this).parents('.post').length == 1){
			 
					l_nLeft -= 45;
				}
				
			}
	
			$(this).css('z-index',_nAuthorInfoDepth++);
			$(this).css('top',l_nTop);
			$(this).css('left',l_nLeft);
		 

	  });
		 
	},
	
	fixOverlayItems : function(){
		
		_xTags._nFixed = 0;
		_xTags._nFixedTries++;
		
		$('.tagrow .img_holder').each( function(){
		 
		var l_sURL = $(this).children('a').attr('href');
		 
		var l_aTypes = Array('cheatsheet','bfs','buzzboard','gallery','blogs','video');
		 
		for(var l_sStr in l_aTypes){
			l_sStr = l_aTypes[l_sStr];
			if($(this).attr('rel') == l_sStr){
				if($(this).siblings('.tag-overlay-'+l_sStr).length == 0){
					
					var l_nOffsetY = 2;
					var l_nOffsetX = -24;
					
					if(l_sStr == 'video'){
						$(this).after('<div class="tag-overlay-'+l_sStr+' tag-overlay-icon"><a href="'+l_sURL+'"><img src="'+STATIC_SERVER+'image/video_overlay_square.gif" width="27" height="28" border="0" /></a></div>');
						l_nOffsetY = -9;
						l_nOffsetX = -28;
					}
					else
						$(this).after('<div class="tag-overlay-'+l_sStr+' tag-overlay-icon"><a href="'+l_sURL+'"><img src="'+STATIC_SERVER+'image/tags_badge_'+l_sStr+'.jpg" width="31" height="31" border="0" /></a></div>');
					
					var l_xDiv = $(this).siblings('.tag-overlay-'+l_sStr);
					var l_xImg = $(this).find('img'); 
					
					var l_nImageWidth = l_xImg.width();
					if(l_xImg.attr('rev'))
						l_nImageWidth = parseInt(l_xImg.attr('rev'));
						
					var l_nBoundLeft = parseInt(217 + ((139 - l_nImageWidth ) / 2))  ; 
					
					var l_xThisBounds = $(this).position();
					var l_nLeft =  l_nBoundLeft - l_xThisBounds['left'] + l_nImageWidth + l_nOffsetX;	
					l_xDiv.hide();
					l_xDiv.css('margin-top',(-1 * l_xDiv.height())+l_nOffsetY).css('margin-left',l_nLeft);
					l_xDiv.fadeIn("fast");
					//l_xDiv.append(l_xBounds['left'] +'-'+ l_xThisBounds['left'] +'+'+ l_xImg.attr('width') +'-'+ 24
					_xTags._nFixed++;
				} 
			}
		
		} 
		
		
		});
		
		if(_xTags._nFixed == 0){
			setTimeout( function(){
				_xTags.fixOverlayItems();
		 	},200);
		}
		else{		
			_xTags.fixOverlayInfos();
		}
	}
		 
}


getNewsmakerVideoCommentCount = function(p_nId){
	DailybeastAjax._xArgs.data = 'a=getNewsmakerVideoCommentCount';
	DailybeastAjax._xArgs.data += '&p_nVideoId='+p_nId;
	DailybeastAjax._xArgs.returnDiv = '#return_div';		
	DailybeastAjax.makeAjaxCall(AJAX_URL);
}

getNewsmakerTopVideoCommentCount = function(p_nId){
	DailybeastAjax._xArgs.data = 'a=getNewsmakerTopVideoCommentCount';
	DailybeastAjax._xArgs.data += '&p_nVideoId='+p_nId;
	DailybeastAjax._xArgs.returnDiv = '#return_div';		
	DailybeastAjax.makeAjaxCall(AJAX_URL);
}

DailybeastAjax.getTagsByFilter = function(p_sFilter,p_nPage){
	 
	
	DailybeastAjax.setLoaderOverlay('#tags-wrapper');
	  
    DailybeastAjax._xArgs.data = 'a=getTagsByFilter';
    DailybeastAjax._xArgs.data += '&p_sTag='+ escape($('#tag-page-holder').attr('rel'));
	DailybeastAjax._xArgs.data += '&p_nPage='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nFilter='+p_sFilter;
	DailybeastAjax._xArgs.requestType = 'GET';
	DailybeastAjax._xArgs.returnDiv = '#tag-results-holder';
	DailybeastAjax._xArgs.callBack = _xTags.onTagsResults();
	// DailybeastAjax._xArgs.loader = true;

	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	_xTags.fixOverlyLoader('#tags-wrapper','#tag-results-holder');
}



DailybeastAjax.authorpageMoreUsers = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=authorpageMoreUsers';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&authorid='+document.authorId;
	
//	alert(DailybeastAjax._xArgs.data);
	
	DailybeastAjax._xArgs.returnDiv = '.relatedauthors_container';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.authorpageMoreUsers_callback;
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}
DailybeastAjax.authorpageMoreUsers_callback = function(){
	//setInfoInterace('');
}



DailybeastAjax.getNewsmakerBfs = function(p_nPage){
	$('#bigfatstorynav').height($('#bigfatstorynav').height());
    DailybeastAjax._xArgs.data = 'a=getNewsmakerBfs';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&newsmakerid='+document.newsmakerid;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '#bigfatstorynav';
	DailybeastAjax._xArgs.loader = true;
	DailybeastAjax._xArgs.callBack = DailybeastAjax.getNewsmakerBfs_callback;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getNewsmakerBfs_callback = function(){
	$('#bigfatstorynav').height('auto');
}


loadNewsmakerVideo = function(p_nId){
	$('#flashpiece_navigation .current').removeClass('current');
	$('#flashpiece_navigation .videoblock_'+p_nId).addClass('current');
	DailybeastAjax.loadNewsmakerVideo (p_nId)
}
DailybeastAjax.loadNewsmakerVideo = function(p_nId){
    DailybeastAjax._xArgs.data = 'a=loadNewsmakerVideo';
    DailybeastAjax._xArgs.data += '&videoid='+p_nId;
	
	DailybeastAjax._xArgs.returnDiv = '.flashpiece_main';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}

loadNewsmakerSizzleVideo = function(p_nId){
	$('#flashpiece_navigation .current').removeClass('current');
	$('#flashpiece_navigation .videoblock_'+p_nId).addClass('current');
	DailybeastAjax.loadNewsmakerSizzleVideo (p_nId)
}
DailybeastAjax.loadNewsmakerSizzleVideo = function(p_nId){
    DailybeastAjax._xArgs.data = 'a=loadNewsmakerSizzleVideo';
    DailybeastAjax._xArgs.data += '&videoid='+p_nId;
	
	DailybeastAjax._xArgs.returnDiv = '.flashpiece_main';
	DailybeastAjax._xArgs.loader = false;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}


DailybeastAjax.getNewsmakerFlashNav = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerFlashNav';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
    DailybeastAjax._xArgs.data += '&p_nCurrentVid='+document.currentvideoid;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '.flashpiece_navigation';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getNewsmakerSizzleFlashNav = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerSizzleFlashNav';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
    DailybeastAjax._xArgs.data += '&p_nCurrentVid='+document.currentvideoid;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '.flashpiece_navigation';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.getNewsmakerBuzzModule = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerBuzzModule';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
	
	DailybeastAjax._xArgs.returnDiv = '#newsmaker_beast_module';
	DailybeastAjax._xArgs.loader = true;
	DailybeastAjax._xArgs.callBack = DailybeastAjax.getNewsmakerBuzzModule_callback;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getNewsmakerBuzzModule_callback = function(){
	//setInfoInterace('#newsmaker_beast_module');
}



DailybeastAjax.getNewsmakerHighlightsModule1 = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerHighlightsModule';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
    DailybeastAjax._xArgs.data += '&p_nModule=1';
	DailybeastAjax._xArgs.data += '&p_nHighlightsPerPage='+document.g_nHighlightsPerPage;
	DailybeastAjax._xArgs.returnDiv = '#newsmaker_highlights_1';
	DailybeastAjax._xArgs.loader = true;
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.getNewsmakerHighlightsModule_callback;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getNewsmakerHighlightsModule2 = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerHighlightsModule';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
	DailybeastAjax._xArgs.data += '&p_nHighlightsPerPage='+document.g_nHighlightsPerPage;
    DailybeastAjax._xArgs.data += '&p_nModule=2';
	DailybeastAjax._xArgs.returnDiv = '#newsmaker_highlights_2';
	DailybeastAjax._xArgs.loader = true;
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.getNewsmakerHighlightsModule_callback;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getNewsmakerHighlightsModule_callback = function(){
	
	$('#newsmaker_highlights_holder').animate({height: $('#newsmaker_highlights').height()+30}, 1000, function(){});
	
}

DailybeastAjax.getNewsmakerGalleryPage = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerGalleryPage';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '#galleriesholder';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getSizzleNewsmakerGalleryPage = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getSizzleNewsmakerGalleryPage';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '#galleriesholder';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getNewsmakerOriginalsModule = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerOriginalsModule';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '#newsmaker_beast_holder';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getNewsmakerExtra1Page = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerExtraPage';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
    DailybeastAjax._xArgs.data += '&p_nSection=1';
	
	DailybeastAjax._xArgs.returnDiv = '#newsmaker_extra_1';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.getNewsmakerExtra2Page = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerExtraPage';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
    DailybeastAjax._xArgs.data += '&p_nSection=2';
	
	DailybeastAjax._xArgs.returnDiv = '#newsmaker_extra_2';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.getGalleryPageSectionFromNewsmaker = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getGalleryPageSectionFromNewsmaker';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
    DailybeastAjax._xArgs.data += '&p_sItemType='+document.itemtype;
	
	DailybeastAjax._xArgs.returnDiv = '#moregalleries_inside';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.getGalleryPageSection = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getGalleryPageSection';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
	
	DailybeastAjax._xArgs.returnDiv = '#moregalleries_inside';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.getCoverPageSection = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getCoverPageSection';
    DailybeastAjax._xArgs.data += '&year='+document.year;
    DailybeastAjax._xArgs.data += '&month='+document.month;
    DailybeastAjax._xArgs.data += '&day='+document.day;
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
	
	DailybeastAjax._xArgs.requestType = "GET"; 
	
	DailybeastAjax._xArgs.returnDiv = '#covers_inside';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}




DailybeastAjax.getLandingModuleTop = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getLandingModuleTop';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
	DailybeastAjax._xArgs.returnDiv = '#landing_top';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.getLandingModuleSecond = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getLandingModuleSecond';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
	DailybeastAjax._xArgs.returnDiv = '#landing_second';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.getNewsmakerCheatsheetViewall = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerCheatsheetViewall';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
	DailybeastAjax._xArgs.returnDiv = '#cheatsheet_holder';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.getNewsmakerCheatsheetViewall_callback;
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.getNewsmakerCheatsLinks = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getNewsmakerCheatsLinks';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&p_nId='+document.newsmakerid;
	DailybeastAjax._xArgs.returnDiv = '#cheatslinks';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.getNewsmakerCheatsheetViewall_callback;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}

DailybeastAjax.getNewsmakerCheatsheetViewall_callback = function(){
	
	setCheatLinks(''); 
	initCheatVote();
	loadCheatVotes();
	
	setTimeout(function(){
		setVideoOverlays('');
	},500);
	
}


createPermalinkText = function(p_sUrl, p_bIsComment){
	
	var l_sImgUrl = (p_bIsComment)?'txt_permalinkthiscomment.gif':'txt_permalinkthis.gif' ;
	
	return '<div class="popup_permalink" id="popup_permalink"><img src="'+document._sStaticServer+'/image/'+l_sImgUrl+'?v='+document._sReleaseVersion+'" alt="Permalink This" /><div class="gap10"></div><input id="popup_permalink_input" type="text" onclick="$(this).focus().select()" value="'+p_sUrl+'" /><div class="gap10"></div><img class="close" src="'+document._sStaticServer+'/image/btn_close_sm_light.gif?v='+document._sReleaseVersion+'" alt="Close" onclick="closeAllPermalink()" /> <img id="copytoclip" class="copytoclip" src="'+document._sStaticServer+'/image/btn_copytoclip.gif?v='+document._sReleaseVersion+'" alt="Copy To Clipboard"  /><div class="clear"></div></div>';
	
}

setCopyToClipboard = function( ){

	setTimeout(function(){
		var clip = new ZeroClipboard.Client();
		clip.setText( $('#popup_permalink_input').val() );
		clip.setHandCursor( true );
		clip.glue('copytoclip');
		clip.addEventListener( 'complete', function(client, text) {
			$('#popup_permalink_input').focus().select();
		} );
	},100);	
}


closeAllPermalink = function(){
	$('.txt_permalink.txt_current').removeClass('txt_current');
	$('#popup_permalink').remove();
	$('#zeroclipboard').remove();
	$('#inner_comment_area .permalinked').removeClass('permalinked');
}



buzzPermalinkThis = function (p_nBuzzId){
	closeAllPermalink();
	$('#table_holder_'+p_nBuzzId).append(
		createPermalinkText('https://web.archive.org/web/20110405084925/http://www.thedailybeast.com'+window.location.pathname,false)
	);
	$('#buzz_permalink_'+p_nBuzzId).addClass('txt_current');
	
	setCopyToClipboard(  );
}

cheatPermalinkThis = function (p_nCheatId){
	closeAllPermalink();
	$('#cheatholder_'+p_nCheatId).after(
		createPermalinkText('https://web.archive.org/web/20110405084925/http://www.thedailybeast.com'+window.location.pathname,false)
	);
	$('#cheat_permalink_'+p_nCheatId).addClass('txt_current');
	
	setCopyToClipboard(  );
}






_xMostPopularModule = {
	
	_sCurrentTab : 'content',
	init : function(){
		$('.most-popular-module .a-most-popular').css('opacity','1');		
		
		$('.most-popular-module .top a').click( function(){
			if( $(this).attr('rel') != _xMostPopularModule._sCurrentTab){
				_xMostPopularModule._sCurrentTab = $(this).attr('rel');
				$('.most-popular-module .top a').css('opacity','.6');
				$(this).css('opacity','1');
				DailybeastAjax.getMostPopularModulePage(1);
			}
			return false;
		});
		//this.reposition();
		
		//setTimeout( function(){ _xMostPopularModule.reposition(); }, 100);
	},
	
	reposition : function(){
	 return false;
		var l_nMaxHeight = 230;
		if($.browser.safari)
			l_nMaxHeight = 255;
		var l_nMinRow = 55;
		var l_nBaseHeight = 0;
		var l_nRows = 5;
		
		var l_nHeight = $('.most-popular-module .content').height();
		 
		$('.most-popular-module .content .row').each( function(){
		   	var l_nItemHeight = $(this).height();
			 
			//if(l_nItemHeight > l_nMinRow){
				l_nBaseHeight += l_nItemHeight;
				//l_nRows--;
			//}
		});
		
		var l_nLeft = l_nMaxHeight - l_nBaseHeight;
		var l_nEach = (l_nLeft/l_nRows);
		// alert(l_nEach);
		$('.most-popular-module .content .row').each( function(){
		   	var l_nItemHeight = $(this).height();
			//$(this).append(l_nItemHeight);
			$(this).height( $(this).height() + l_nEach);
			
			
			
				
			 
		}); 
	},
	
	fixOverlyLoader : function(p_sDiv,p_sDivAnchor){
 
		if ( ($.browser.msie && $.browser.version < 7)) { 
			var l_xBounds = $('.most-popular-module').position();
			var l_nLeft = l_xBounds['left'] - 107;
			var l_nTop = l_xBounds['top'] - 120;
			$('.most-popular-module').css('position','');
			$('#ajaxoverlay').css('left',l_nLeft).css('top',l_nTop);
			$('#ajaxloader').css('left',(l_nLeft-30) + ( $('#ajaxoverlay').width() / 2 ) ).css('top',l_nTop + ( $('#ajaxoverlay').height() / 2 ));
		  
		}
		
	}
}
 

DailybeastAjax.getMostPopularModulePage= function (page){
	  
	DailybeastAjax._xArgs.data = 'a=pageMostPopularModule';
	DailybeastAjax._xArgs.data += '&page='+page;
	DailybeastAjax._xArgs.data += '&type='+_xMostPopularModule._sCurrentTab;
	DailybeastAjax._xArgs.returnDiv = '.most-popular-module .content';
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
	_xMostPopularModule.fixOverlyLoader();
}



indexNewsmakerFixNav = function(p_sChar){
		
	$('#indexrow .current').removeClass('current');
	$('#indexrow .index_'+p_sChar).addClass('current');
}

indexNewsmakerLanderOn = function(p_sChar){
	
	indexNewsmakerFixNav(p_sChar);
	
	if(p_sChar == 'viewall')
		DailybeastAjax.indexNewsmakerLanderOn('');
	else
		DailybeastAjax.indexNewsmakerLanderOn(p_sChar);
}

DailybeastAjax.indexNewsmakerLanderOn =function(p_sChar){

    DailybeastAjax._xArgs.data = 'a=getNewsmakerIndexRows';
    DailybeastAjax._xArgs.data += '&index='+p_sChar;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '#newsmakers_inside';
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');

}


getOthernewsCategory = function(p_nCategoryId, p_nPage){
	
	
    DailybeastAjax._xArgs.data = 'a=getOthernewsCategory';
    DailybeastAjax._xArgs.data += '&p_nCategoryId='+p_nCategoryId;
    DailybeastAjax._xArgs.data += '&p_nPage='+p_nPage;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '#innercategory_'+p_nCategoryId;
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}



switchDateAddedBlogs = function(){
	if(document.blogsAdded == 'DESC'){
		document.blogsAdded = 'ASC';
	}else{
		document.blogsAdded = 'DESC';
	}
	_xBlog.getAuthorpageBlogs(1);
}

switchDateAddedPicks = function(){
	if(document.picksAdded == 'DESC'){
		document.picksAdded = 'ASC';
	}else{
		document.picksAdded = 'DESC';
	}
	_xBlog.getAuthorpagePicks(1);
}




getCookie =  function (c_name)
{
	
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
	{ 
	c_start=c_start + c_name.length+1; 
	c_end=document.cookie.indexOf(";",c_start);
	if (c_end==-1) c_end=document.cookie.length;
	return unescape(document.cookie.substring(c_start,c_end));
	} 
  }
return "";
} 





checkTextArea = function(l_xField){
 
	if($(l_xField).val().length > $(l_xField).attr('rel')){ 
		$(l_xField).val($(l_xField).val().substr(0, $(l_xField).attr('rel'))); 
	}
	
}


function strip_tags(str, allowed_tags) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Luke Godfrey
    // +      input by: Pul
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i>,<b>');
    // *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
    // *     example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
    // *     returns 2: '<p>Kevin van Zonneveld</p>'
    // *     example 3: strip_tags("<a href='https://web.archive.org/web/20110405084925/http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
    // *     returns 3: '<a href='https://web.archive.org/web/20110405084925/http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
    
    var key = '', tag = '', allowed = false;
    var matches = allowed_array = [];
    var allowed_keys = {};
    
    var replacer = function(search, replace, str) {
        var tmp_arr = [];
        tmp_arr = str.split(search);
        return tmp_arr.join(replace);
    };
    
    // Build allowes tags associative array
    if (allowed_tags) {
        allowed_tags  = allowed_tags.replace(/[^a-zA-Z,]+/g, '');;
        allowed_array = allowed_tags.split(',');
    }
    
    // Match tags
    matches = str.match(/(<\/?[^>]+>)/gi);
    
    // Go through all HTML tags 
    for (key in matches) {
        if (isNaN(key)) {
            // IE7 Hack
            continue;
        }
        
        // Save HTML tag
        html = matches[key].toString();
        
        // Is tag not in allowed list? Remove from str!
        allowed = false;
        
        // Go through all allowed tags
        for (k in allowed_array) {
            // Init    
            allowed_tag = allowed_array[k];
            i = -1;
            
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
            if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}
            
            // Determine
            if (i == 0) {
                allowed = true;
                break;
            }
        }
        
        if (!allowed) {
            str = replacer(html, "", str); // Custom replace. No regexing
        }
    }
    
    return str;
}
 
 
var Base64 = {

    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode : function (input) {
		if(!input)
			return;
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}

 
_xRecentArrivials = {
	
	_bFilled : false,
	
	getRecentArrivials : function(){
		
		$('#recentarrivials_holder').height( $('#recentarrivials_holder').height() );
		
		if(_xRecentArrivials._bFilled){
			_xRecentArrivials.getRecentArrivials_callback();
			
		}else{
			
			DailybeastAjax._xArgs.data = 'a=getRecentArrivials';
			DailybeastAjax._xArgs.requestType = 'GET';
			DailybeastAjax._xArgs.returnDiv = '#recentarrivials_holder .recentarrivials_open';
			DailybeastAjax._xArgs.callBack = _xRecentArrivials.getRecentArrivials_callback;
			DailybeastAjax._xArgs.loader = false;
		
			DailybeastAjax.makeAjaxCall('/include/ajax.php');
		}
	},
	getRecentArrivials_callback:function(){
		
		
	  
		$('#recentarrivals-ad-top').html('<a href="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/jump/N785.DailyBeast/B3687080.3;sz=300x125;ord='+ord+'?" target="_blank">'+
        	'<img src="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/ad/N785.DailyBeast/B3687080.3;sz=300x125;ord='+ord+'?" alt="British Airways" width="300" height="125" border="0" />'+
        	'</a>');
		
		$('#recentarrivals-ad-bottom').html('<a href="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/jump/N785.DailyBeast/B3687080.5;sz=295x135;ord='+ord+'?" target="_blank">'+
        	'<img src="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/ad/N785.DailyBeast/B3687080.5;sz=295x135;ord='+ord+'?" alt="British Airways" width="295" height="135" border="0" />'+
        	'</a>');
		 
		   
		_xRecentArrivials._bFilled = true;
		$('#recentarrivials_holder .recentarrivials_closed').hide();
		$('#recentarrivials_holder .recentarrivials_open').show();
		
		setTimeout(function(){
			
			$('#recentarrivials_holder').animate({
				height: $('#recentarrivials_holder_inner').height() +'px'   },400);
			
		},100);
		 
	},
	
	 
	getRecentArrivialsAdSponsored : function(p_sClickTrackingURL){
		 
		_xAds.trackClick(p_sClickTrackingURL);
		
		$('#recentarrivials_holder').height( $('#recentarrivials_holder').height() );
		
		if(_xRecentArrivials._bFilled){
			_xRecentArrivials.getRecentArrivialsAdSponsored_callback();
			
		}else{
			
			DailybeastAjax._xArgs.data = 'a=getRecentAdSponsoredArrivials';
			DailybeastAjax._xArgs.requestType = 'GET';
			DailybeastAjax._xArgs.returnDiv = '#recentarrivials_holder .recentarrivials_open';
			DailybeastAjax._xArgs.callBack = _xRecentArrivials.getRecentArrivialsAdSponsored_callback;
			DailybeastAjax._xArgs.loader = false;
		
			DailybeastAjax.makeAjaxCall('/include/ajax.php');
		}
	},
	getRecentArrivialsAdSponsored_callback:function(){
	 
	 _xAds.trackClick('https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/ad/dailybeast.oao;pos=air2;sz=1x1;ord='+ord);
	 $('#recentarrivals-ad-top').html('<a href="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/clk;220715872;31290385;e?http://www.theupintheairmovie.com" target="_blank"><img src="'+STATIC_SERVER+'image/ads/UITA_300x8125_121609.jpg?v=3" width="299" height="125" alt=""/><img src="https://web.archive.org/web/20110405084925/http://pt.rewardtv.com/notice.do?sid=1000047;tfid=561;brn=PTH;cte=PC122472;pageid=PP122472"/></a>');
	 $('#recentarrivals-ad-bottom').html('<a href="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/clk;220715871;31290385;d?http://www.theupintheairmovie.com" target="_blank"><img src="'+STATIC_SERVER+'image/ads/uita_295x135_revised_addedover50.jpg?v=3" width="295" height="135" alt=""/><img src="https://web.archive.org/web/20110405084925/http://pt.rewardtv.com/notice.do?sid=1000047;tfid=561;brn=PTH;cte=PC122473;pageid=PP122473"/></a>');
	 _xAds.trackClick('https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/ad/dailybeast.oao;pos=air2;sz=1x1;ord='+ord);
			
			  
			
	 /*
		$('#recentarrivals-ad-top').html('<a href="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/jump/N785.DailyBeast/B3687080.3;sz=300x125;ord='+ord+'?" target="_blank">'+
        	'<img src="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/ad/N785.DailyBeast/B3687080.3;sz=300x125;ord='+ord+'?" alt="British Airways" width="300" height="125" border="0" />'+
        	'</a>');
		
		$('#recentarrivals-ad-bottom').html('<a href="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/jump/N785.DailyBeast/B3687080.5;sz=295x135;ord='+ord+'?" target="_blank">'+
        	'<img src="https://web.archive.org/web/20110405084925/http://ad.doubleclick.net/ad/N785.DailyBeast/B3687080.5;sz=295x135;ord='+ord+'?" alt="British Airways" width="295" height="135" border="0" />'+
        	'</a>');
	*/	
		   
		_xRecentArrivials._bFilled = true;
		$('#recentarrivials_holder .recentarrivials_closed').hide();
		$('#recentarrivials_holder .recentarrivials_open').show();
		
		
		setTimeout(function(){
			
			$('#recentarrivials_holder').animate({
				height: $('#recentarrivials_holder_inner').height() +'px'   },400);
			
		},100);
		
	},
 
	
	closeArrivials : function(p_sClickTrackingURL){
		
		_xAds.trackClick(p_sClickTrackingURL);
		
		$('#recentarrivials_holder .recentarrivials_closed').show();
		$('#recentarrivials_holder .recentarrivials_open').hide();
		
		$('#recentarrivials_holder').animate({
			height: $('#recentarrivials_holder_inner').height()+'px'   },400);
		
	}
	
}

_xSizzle = {
	
	init: function(){
		_xSizzle.setSizzleHovers();
	},
	
	setSizzleHovers : function(){
		
		$('#row1_sizzle .a_block').hover(function(){$(this).addClass('a_block_hover');},function(){$(this).removeClass('a_block_hover');})
		
		$('#row1_sizzle .a_block_border').hover(function(){$(this).addClass('a_block_border_hover');},function(){$(this).removeClass('a_block_border_hover');})
		
		$('#row1_sizzle .col').hover(function(){$(this).addClass('col_hover');},function(){$(this).removeClass('col_hover');})
		
		$('#row1_sizzle .sizzle_popup_content').hover(function(){ $('#row1_sizzle .a_block').removeClass('a_block_hover'); },function(){})
	}
	
}

_xOmniture = {
	
	e : function(p_xObj,p_sStr){
			//cheat
			
			var l_sTitle = this.cleanVars($(p_xObj).text());
			var l_sLink = this.cleanVars($(p_xObj).attr('href'));
			
			alert(l_sTitle+"\n"+l_sLink);
			return;
			//alert(p_sStr);
			//var s=s_gi(s_account);
			var s= new Object();
			s.products=';ad2'; 
			s.events='event7'; 
			s.eVar3 = l_sTitle;
			s.eVar4 = l_sLink;
			this.fireTrack(s);
			 
			//s.eVar18="Thumbs up"
			//s.tl(this,'o',p_sStr + ' Click');
			
			return false;
	},
	
	cleanVars : function(p_sStr){
		return p_sStr;
	},
	
	fireTrack : function(p_xObj){
		var l_sStr = '';
		for(x in p_xObj){
			l_sStr += x + '=>' + p_xObj[x] + "\n";
		}
		alert(l_sStr);
	}

};_xComment = {
	
	_bProcessComment : 0,
	_nPage : 1,
	_nScrollTo : 0,
	
	init: function(  ){
		ZeroClipboard.setMoviePath( document._sStaticServer+'/swf/ZeroClipboard.swf' );
		document.sortOrder = 'ASC';
		document.collapsedComments = 0;
		_xComment.checkCommentHash();
		
	},
	
	
	checkCommentHash : function(){
		setTimeout(function(){
			if(parent.location.hash){
				var l_aHash = parent.location.hash.split(';');
				var l_nIndexOfCommentId = 	l_aHash[0].search(/comment_/);
				if(l_nIndexOfCommentId >= 1){
					commentId =  l_aHash[0].slice(l_nIndexOfCommentId+8) ;
				}
				else
					return
				
				if( $('.pagination_inside .pagination').length ){
					_xComment.findCommentPage(commentId);
					document.commentId = commentId;
				}
			}
		},100);
	},
	
	findCommentPage : function(p_nCommentId){
		var l_nType = $('#commentarea').attr('rev');
		var l_nId = $('#commentarea').attr('rel');
		DailybeastAjax._xArgs.data = 'a=findCommentPage';
		DailybeastAjax._xArgs.data += '&p_nCommentId='+p_nCommentId;
		DailybeastAjax._xArgs.data += '&p_nType='+l_nType;
		DailybeastAjax._xArgs.data += '&p_nItemId='+l_nId;
		DailybeastAjax._xArgs.returnDiv = '#inner_comment_area';
		DailybeastAjax._xArgs.loader = true;
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
	},
	
	
	replyTo : function(p_nId){
		if(getCookie('tdb_info')){
			_xComment.closeUserPopup();
			closeAllPermalink();
			_xComment.closeAllReply();
			
			if (!getCookie('flagtdb_login')){
				FB.getLoginStatus(function(response) {
					if (response.session) {
						 $('#comment_'+p_nId).append('<div class="reply_holder" style="display:none;"><textarea name="comment" id="reply_comment" class="reply_comment"></textarea><div class="clear"></div><div class="gap10"></div><img class="submit_reply" src="'+document._sStaticServer+'/image/btn_submit_sm.gif?v='+document._sReleaseVersion+'" alt="Submit" onclick="_xComment.submitReply(\''+p_nId+'\')" /><img class="cancel_reply" src="'+document._sStaticServer+'/image/btn_cancel_sm.gif?v='+document._sReleaseVersion+'" alt="Cancel" onclick="_xComment.closeAllReply()" /><div  class="comment_facebook"  ><input id="chk_comm_facebook'+p_nId+'"  name="chk_comm_facebook" type="checkbox" class="aloneinput" checked></input><label id="label_comm_facebook'+p_nId+'" class="alonelabel" for="chk_comm_facebook"> Share this comment on Facebook</label></div><div class="clear"></div></div>');					 
					 }else{
						 $('#comment_'+p_nId).append('<div class="reply_holder"><textarea name="comment" id="reply_comment" class="reply_comment"></textarea><div class="clear"></div><div class="gap10"></div><img class="submit_reply" src="'+document._sStaticServer+'/image/btn_submit_sm.gif?v='+document._sReleaseVersion+'" alt="Submit" onclick="_xComment.submitReply(\''+p_nId+'\')" /><img class="cancel_reply" src="'+document._sStaticServer+'/image/btn_cancel_sm.gif?v='+document._sReleaseVersion+'" alt="Cancel" onclick="_xComment.closeAllReply()" /><div class="clear"></div></div>');						 
					 }
				});	
			}else{
				$('#comment_'+p_nId).append('<div class="reply_holder"><textarea name="comment" id="reply_comment" class="reply_comment"></textarea><div class="clear"></div><div class="gap10"></div><img class="submit_reply" src="'+document._sStaticServer+'/image/btn_submit_sm.gif?v='+document._sReleaseVersion+'" alt="Submit" onclick="_xComment.submitReply(\''+p_nId+'\')" /><img class="cancel_reply" src="'+document._sStaticServer+'/image/btn_cancel_sm.gif?v='+document._sReleaseVersion+'" alt="Cancel" onclick="_xComment.closeAllReply()" /><div class="clear"></div></div>');
				
			}
			verifyExtendedPermisions('chk_comm_facebook'+p_nId);
			$('#c_reply_'+p_nId).addClass('txt_current');
			//setTimeout(function(){$('#reply_comment').focus();},10);
		}else{ 
			alert('You need to register to leave a comment. Please log in or fill out the registration form.');
			$.scrollTo('#header', 800);
	  		$('#fblogin_form').jqmShow(); 
			_xComment._nScrollTo = p_nId ;
		}
		
	},
	
	//validate the facebook Account

	
	postComment : function(){
		
		_xComment._bProcessComment ++; //user for fix the issue of duplicated comments in live
		if(_xComment._bProcessComment <= 1){
			
			var l_sComment = $('#comment').val();
			var l_nType = $('#commentarea').attr('rev');
			var l_nId = $('#commentarea').attr('rel');
		
			if(!_xGlobal.checkEmpty(l_sComment)){
				
				$('#comment').val('');
				DailybeastAjax._xArgs.data = 'a=postComment';
				DailybeastAjax._xArgs.data += '&p_nType='+l_nType;
				DailybeastAjax._xArgs.data += '&p_nId='+l_nId;
				DailybeastAjax._xArgs.data += '&p_sComment='+escape(l_sComment);
				DailybeastAjax._xArgs.data += '&p_nCommentLevel=1';
				DailybeastAjax._xArgs.data += '&p_nCurrentPage='+_xComment._nPage;
				if(document.newsmakerid )
					DailybeastAjax._xArgs.data += '&p_nNewsmakerId='+document.newsmakerid;
				DailybeastAjax._xArgs.callBack = _xComment.comment_callback;
				
				DailybeastAjax.makeAjaxCall('/include/ajax.php');
			}
		}
		_xComment._bProcessComment --;
		return false;
		
	},
	
	
	
	submitReply : function(p_nCommentId){
		_xComment._bProcessComment++;
		if(_xComment._bProcessComment <=1 ){
			
			document.collapsedComments = 0;
			var l_sComment = $('#reply_comment').val();
			var l_nType = $('#commentarea').attr('rev');
			var l_nId = $('#commentarea').attr('rel');
			
			var l_nCommentLevel = parseInt($('#comment_'+p_nCommentId).attr('rel'))+1;
			
			if(!_xGlobal.checkEmpty(l_sComment)){
				$('#reply_comment').val("");
				DailybeastAjax._xArgs.data = 'a=postReply';
				DailybeastAjax._xArgs.data += '&p_nType='+l_nType;
				DailybeastAjax._xArgs.data += '&p_nId='+l_nId;
				DailybeastAjax._xArgs.data += '&p_nCommentId='+p_nCommentId;
				DailybeastAjax._xArgs.data += '&p_sComment='+escape(l_sComment);
				DailybeastAjax._xArgs.data += '&p_nCommentLevel='+l_nCommentLevel;
				DailybeastAjax._xArgs.data += '&p_nCurrentPage='+_xComment._nPage;
				if(document.newsmakerid )
					DailybeastAjax._xArgs.data += '&p_nNewsmakerId='+document.newsmakerid;
				DailybeastAjax._xArgs.callBack = _xComment.comment_callback;
				
				DailybeastAjax.makeAjaxCall('/include/ajax.php');
			}
		}
		_xComment._bProcessComment --;
		
	},
	
	comment_callback : function(){
		
		_xComment._bProcessComment = false;
		eval(DailybeastAjax.returnVar);
		
	},
	
	
	resetCommentPost : function(){
		
		$('#comment').val('');
		
	},
	
	showUserPopup : function(p_nCommentId){
		
		l_sPopupText = 'Thanks for your comment. It may take a few minutes for your comment to filter through our system and appear here, but rest assured that we\'ve received it and it\'s on the way.';
		
		if(p_nCommentId){
			$('#comment_'+p_nCommentId).append('<div id="user_comment_popup">'+l_sPopupText+'</div>');
		}
		else{
			$('#leavecomment').hide().after('<div id="user_comment_popup_main"><a onclick="showCheckUsersFb();resetCommentForm();_xComment.closeMainUserPopup();" href="javascript:void(0)"><img border="0" alt="Leave a comment" src="'+STATIC_SERVER+'image/txt_leaveacomment.gif?v=1.95.local.3"/></a><div class="gap10"></div>'+l_sPopupText+'<div class="gap10"></div><a onclick="$.scrollTo(\'#commentarea\',1000);" href="javascript:void(0)"><img border="0" alt="View Comments" src="'+STATIC_SERVER+'image/txt_viewcomments.gif?v=1.95.local.3"/></a></div>');
		}
		
	},
	
	closeUserPopup : function(){
		$('#user_comment_popup').remove();
	},
	closeMainUserPopup : function(){
		$('#user_comment_popup_main').remove();
	},
	
	showFirstUserReply : function(p_nCommentId){
		$('#comment_'+p_nCommentId+' .reply_holder').html('<div class="firstreply">Thank you.<br />As a first time user, your comment has been submitted for review. It can take anywhere from a few hours to a day or two for your comment to be reviewed, depending on the time of week and the volume of comments we receive.<div class="gap20"></div><a onclick="$.scrollTo(\'#commentarea\',1000);" href="javascript:void(0)"><img border="0" alt="View Comments" src="'+STATIC_SERVER+'image/txt_viewcomments.gif?v=1.95.local.3"/></a></div>');
	},
	
	closeAllReply : function(){
		$('#commentarea .reply_holder').remove();
		$('#commentarea .txt_reply.txt_current').removeClass('txt_current');
	},
	
	
	permalinkThis : function(p_nId){
		
		var l_sUrl = (document._bIsVideo)?'/video/item/'+document._sSlug+'/' :window.location.pathname;
		
		_xComment.closeUserPopup();
		closeAllPermalink();
		_xComment.closeAllReply();
		$('#comment_'+p_nId).append(
			createPermalinkText('https://web.archive.org/web/20110405084925/http://www.thedailybeast.com'+l_sUrl+'#comment_'+p_nId, true)
		);
		$('#c_permalink_'+p_nId).addClass('txt_current');
		
		var l_nBaseId = $('#comment_'+p_nId).attr('rev');
		if (l_nBaseId){
			$('#replies_'+l_nBaseId).addClass('permalinked');
			$('#comment_'+p_nId).parent().parent().addClass('permalinked');
		}
		else
			$('#comment_'+p_nId).addClass('permalinked');
		
		setCopyToClipboard();
	},
	
	
	sortComments : function(p_sDirection,commentFunction){
		document.sortOrder = p_sDirection;
		if(p_sDirection == 'ASC'){
			$('#sortarea').removeClass('sort_up');
			$('#sortarea').addClass('sort_down');
		}
		else{
			$('#sortarea').removeClass('sort_down');
			$('#sortarea').addClass('sort_up');
		}
		eval(commentFunction+"('1')");;
	},
	
	collapseReplies : function(p_nId){
		$('#comment_'+p_nId).addClass('hide_replies');
		$('#comment_'+p_nId).removeClass('show_replies');
		$('#replies_'+p_nId).hide();
	},
	showReplies : function(p_nId){
		$('#comment_'+p_nId).addClass('show_replies');
		$('#comment_'+p_nId).removeClass('hide_replies');
		$('#replies_'+p_nId).show();
	},
	
	showAll : function(){
		$('#showreplies').hide();
		$('#collapsereplies').show();
		$('#inner_comment_area .comment').removeClass('hide_replies');
		$('#inner_comment_area .comment').addClass('show_replies');
		$('#inner_comment_area .replies_holder').show();
		document.collapsedComments = 0;
	},
	collapseAll : function(){
		$('#showreplies').show();
		$('#collapsereplies').hide();
		$('#inner_comment_area .comment').removeClass('show_replies');
		$('#inner_comment_area .comment').addClass('hide_replies');
		$('#inner_comment_area .replies_holder').hide();
		document.collapsedComments = 1;
	},
	
	calcReplyCount : function(){
		$('.replies_holder').each(function(){
			
			var id = $(this).attr('rel');
			var count = $(this).children('.replies').children('.comment').length;
			$('#fill_'+id).html(count);
		});
	},
	
	
	getComments : function(p_nPage){
		_xComment._nPage = p_nPage;
		var l_nType = $('#commentarea').attr('rev');
		var l_nId = $('#commentarea').attr('rel');
		
		DailybeastAjax._xArgs.data = 'a=getComments';
		DailybeastAjax._xArgs.data += '&p_nType='+l_nType;
		DailybeastAjax._xArgs.data += '&p_nId='+l_nId;
		DailybeastAjax._xArgs.data += '&p_nPage='+p_nPage;
		DailybeastAjax._xArgs.data += '&p_bCollapsedComments='+document.collapsedComments;
		DailybeastAjax._xArgs.data += '&p_sSortOrder='+document.sortOrder;
		DailybeastAjax._xArgs.returnDiv = '#inner_comment_area';
		DailybeastAjax._xArgs.requestType = "GET"; 
		DailybeastAjax._xArgs.loader = true;
		DailybeastAjax._xArgs.callBack = _xComment.getComments_callback;
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
	},
	
	getComments_callback: function(){
		if (getCookie('tdb_info')){
			verifyExtendedPermisions('');showCheckUsersFb();resetCommentForm();
		}else
		{
			displayNoComment();		
		}
	},
	flagComment : function(p_nCommentId){
		$('#comment_flag_'+p_nCommentId).html('<div class=\"txt txt_flagged\"><span>Flagged</span></div>');
		DailybeastAjax._xArgs.data = 'a=flagComment';
		DailybeastAjax._xArgs.data += '&id='+p_nCommentId;
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
	}
	
	
};_xAds = {

	seed : '<?= ADS_SEED ?>',
	//seed : Math.random(10000),
	//baseURL : 'https://web.archive.org/web/20110405084925/http://candt.static.thedailybeast/',
	//baseURL : 'https://web.archive.org/web/20110405084925/http://dev.static.thedailybeast.com/',
	//baseURL : 'https://web.archive.org/web/20110405084925/http://stage.static.thedailybeast.com/', 
	baseURL : '<?= ADS_BASEURL ?>',
	bottegaBlogURL : '/blogs-and-stories/2009-04-13/`how-bottega-veneta-is-keeping-luxury-relevant/',
	bottega2BlogURL : '/blogs-and-stories/2009-04-23/tomas-maier-on-creative-collaboration/',
	bottega3BlogURL : '/blogs-and-stories/2009-05-08/tomas-maier-on-the-road-ahead/',
	 
	trackClick : function(p_sStr){
		 
		$('#adTracking').attr('src',p_sStr);
	},
	
	initItem : function(p_sType,p_sId){
		if(p_sType == 'homeMainFeature'){
			this.setHomepageMainfeatureAd('',p_sId);
		}
		
	},
	
	setHomepageMainfeatureAd : function(p_sAction,p_sId){
		var l_nId = p_sId;
		var l_nIdNew = l_nId + '-content';
		var l_xAd = $('#'+p_sId); 	

		l_xAd.children('.ad-click').attr('rel',l_nIdNew).click( function(){ _xAds.adClicked( $(this).attr('rel')) } );
		var l_xContent = l_xAd.children('.ad-content-area').css('z-index',700).hide().css('position','absolute').css('top',0).css('margin','125px 0 0 0').attr('id',l_nIdNew);
		
		$('#master').prepend(l_xContent); 
  		
		var l_xParentBounds = $('#main-feature-col-1').position();  
		var l_xParentBounds2 = $('#main-feature .feature-wrapper').position();  
		 
	},
	
	adClicked : function(p_sId){
		
		_xMainFeature.pauseFeature();
		_xMainFeature.hideControls();
		
		var l_sHTML = $('#'+p_sId).html();
		$('#'+p_sId).html('');
		$('#'+p_sId).html(l_sHTML);
		$('#'+p_sId).show();
		
		/*
		
		this.showCol1Curtain();
		this.showFullCurtain();
		*/
	},
	
	showCol1Curtain : function(){  
		if( $('#ad-col-1-curtain').length == 0)  
			$('#master').prepend('<div id="ad-col-1-curtain"></div>');
		
		var l_nWidth = $('#maincontent .col1').width();
		var l_nHeight = $('#maincontent .col1').height();
		var l_nOffset = 620;
		$('#ad-col-1-curtain').width(l_nWidth).height(l_nHeight- 390).css('top',l_nOffset).css('display','none').show();
		
		if( $('#ad-home-feature-helper').length == 0)  
			$('#master').prepend('<div id="ad-home-feature-helper"></div>');
		
		var l_xHelper = $('#ad-home-feature-helper');
		l_xHelper.width($('#main-feature .main-feature-bg').width());
		l_xHelper.height($('#main-feature .main-feature-bg').height());
		l_xHelper.show().css('margin','125px 0 0 0');
		
		
	},
	
	hideCol1Curtain : function(){  
		$('#ad-col-1-curtain').hide();
		$('#ad-home-feature-helper').hide();
	},
	
	
	showFullCurtain : function(){  
		if( $('#ad-full-curtain').length == 0) {
			$('#master').prepend('<div id="ad-full-curtain"></div>');
		}
		$('#ad-full-curtain').width($('#master').width()).height( $(document).height()).css('display','none').fadeIn("slow");
		
	},
	
	hideFullCurtain : function(){
		$('#ad-full-curtain').fadeOut("slow");
	},
	
	mouseIsOver : function(){},
	mouseIsOut : function(){},
	
	closeAd : function(p_sArgs){
		
		var l_nId = p_sArgs['p_nId'];
		this.hideCol1Curtain();
		this.hideFullCurtain();
		l_xAd = $('#'+l_nId+'-content').hide();
		_xMainFeature.showControls();
	},
	
	
	
	/* ========================================================	
						Breakthrough Ads
	   ======================================================== */
	
	
	colorSubnavLinks : function(p_sColor){
		 	
		$('#header .subnav *').each( function(){  
			$(this).css('color',p_sColor);
		});
		
		$('#header .subnav a').each( function(){  
			$(this).css({'color':p_sColor,'text-decoration':'none'});
			$(this).hover( function(){ $(this).css({'text-decoration':'underline'}); }, function(){ $(this).css({'text-decoration':'none'}); } );
		});
		/*$('.exclusive *').each( function(){  
			$(this).css({'color':p_sColor});
		});*/
		$('.exclusive').html('<p>&nbsp;</p>');
		
		if ($.browser.msie) { 
			var l_sFlash = $('.breakout-item-bg').html();
			$('.breakout-item-bg').html(l_sFlash);
		}
		
	},
	
	breakthroughClick : function(p_sArgs){
		
		
		var l_nId = p_sArgs['p_nId'];
		var p_nCompanionHeight = parseInt(p_sArgs['p_nCompanionHeight']);
		var p_nCompanionAd = p_sArgs['p_nCompanionAd'];
		var p_sFlashVars = p_sArgs['p_sFlashVars'];
		var p_sAppend = p_sArgs['p_sAppend'];
		var p_bShowCurtain = p_sArgs['p_bShowCurtain'];
		var l_sAdId= '#ad-'+l_nId;
		var l_sCompanionId = l_sAdId.substr(1)+'-'+'companion';
		var l_nCompanionWidth = '100%'; 
		 
		var l_sCompanion = '<embed height="'+p_nCompanionHeight+'" width="100%" type="application/x-shockwave-flash" src="'+this.baseURL+'files/'+p_nCompanionAd+'?p_nId='+l_nId+'&'+p_sFlashVars+'&seed='+ this.seed +'&'+p_sAppend+'" quality="high" menu="false" wmode="transparent" allowfullscreen="true" allowscriptaccess="always" flashvars="p_nId='+l_nId+'&'+p_sFlashVars+'&'+p_sAppend+'"/>';	  
		var l_nUnknownOffset = 54; 
		
		var l_aPosition1 = $('.outer-content-holder').position();
		var l_aPosition2 = $(l_sAdId).position();
		var l_sTopMargin = $('.outer-content-holder').css('margin-top');
		var l_aPositionTop = parseInt(l_aPosition1['top']) + parseInt(l_aPosition2['top']) + parseInt(l_sTopMargin) + l_nUnknownOffset ;
		
		if(!$.browser.opera){
			var l_nOffset = parseInt((WINDOW_HEIGHT - parseInt(p_nCompanionHeight))/ 2);
			if(l_nOffset <0)
				l_nOffset = 0;
			$.scrollTo( parseInt(l_aPositionTop - l_nOffset),0);  
		}
		$('#master').before('<div id="'+l_sCompanionId+'" style="position:absolute; z-index:901; width:100%; left:0; top:'+ l_aPositionTop +'px">'+l_sCompanion+'</div>');
		
		if(p_bShowCurtain)
			this.showFullPageCurtain();
		
		
	}, 
	
	breakthroughClose : function(p_sArgs){
		var l_nId = p_sArgs['p_nId']; 
		var l_xCompanion = $('#ad-'+l_nId+'-'+'companion');
		this.hideFullPageCurtain();
		l_xCompanion.empty();
        l_xCompanion.remove();
	},
	
	showFullPageCurtain : function(){  
		if( $('#ad-full-curtain').length != 0) {
			$('#ad-full-curtain').remove();
		}
		$('#master').before('<div id="ad-full-curtain"></div>');
		$('#ad-full-curtain').width( $(document).width() ).height( $(document).height()).css({ 'display':'none','z-index':'900','top':'0','left':'0'}).show();
		
	},
	
	hideFullPageCurtain : function(){
		$('#ad-full-curtain').fadeOut("slow", function(){ $(this).hide() });
	}
	
	 
	
};/* Copyright (c) 2006 Kelvin Luck (kelvin AT kelvinluck DOT com || http://www.kelvinluck.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * See http://kelvinluck.com/assets/jquery/jScrollPane/
 * $Id: jScrollPane.js 4765 2008-02-17 21:14:59Z kelvinluck $
 */

/**
 * Replace the vertical scroll bars on any matched elements with a fancy
 * styleable (via CSS) version. With JS disabled the elements will
 * gracefully degrade to the browsers own implementation of overflow:auto.
 * If the mousewheel plugin has been included on the page then the scrollable areas will also
 * respond to the mouse wheel.
 *
 * @example jQuery(".scroll-pane").jScrollPane();
 *
 * @name jScrollPane
 * @type jQuery
 * @param Object	settings	hash with options, described below.
 *								scrollbarWidth	-	The width of the generated scrollbar in pixels
 *								scrollbarMargin	-	The amount of space to leave on the side of the scrollbar in pixels
 *								wheelSpeed		-	The speed the pane will scroll in response to the mouse wheel in pixels
 *								showArrows		-	Whether to display arrows for the user to scroll with
 *								arrowSize		-	The height of the arrow buttons if showArrows=true
 *								animateTo		-	Whether to animate when calling scrollTo and scrollBy
 *								dragMinHeight	-	The minimum height to allow the drag bar to be
 *								dragMaxHeight	-	The maximum height to allow the drag bar to be
 *								animateInterval	-	The interval in milliseconds to update an animating scrollPane (default 100)
 *								animateStep		-	The amount to divide the remaining scroll distance by when animating (default 3)
 *								maintainPosition-	Whether you want the contents of the scroll pane to maintain it's position when you re-initialise it - so it doesn't scroll as you add more content (default true)
 *								scrollbarOnLeft	-	Display the scrollbar on the left side?  (needs stylesheet changes, see examples.html)
 * @return jQuery
 * @cat Plugins/jScrollPane
 * @author Kelvin Luck (kelvin AT kelvinluck DOT com || http://www.kelvinluck.com)
 */
jQuery.jScrollPane = {
	active : []
};
jQuery.fn.jScrollPane = function(settings)
{
	settings = jQuery.extend(
		{
			scrollbarWidth : 6,
			scrollbarMargin : 5,
			wheelSpeed : 28,
			showArrows : false,
			arrowSize : 0,
			animateTo : false,
			dragMinHeight : 1,
			dragMaxHeight : 99999,
			animateInterval : 100,
			animateStep: 3,
			maintainPosition: true,
			scrollbarOnLeft: false
		}, settings
	);
	return this.each(
		function()
		{
			var $this = jQuery(this);
			
			if (jQuery(this).parent().is('.jScrollPaneContainer')) {
				var currentScrollPosition = settings.maintainPosition ? $this.offset({relativeTo:jQuery(this).parent()[0]}).top : 0;
				var $c = jQuery(this).parent();
				var paneWidth = $c.innerWidth();
				var paneHeight = $c.outerHeight();
				var trackHeight = paneHeight;
				if ($c.unmousewheel) {
					$c.unmousewheel();
				}
				jQuery('>.jScrollPaneTrack, >.jScrollArrowUp, >.jScrollArrowDown', $c).remove();
				$this.css({'top':0});
			} else {
				var currentScrollPosition = 0;
				this.originalPadding = $this.css('paddingTop') + ' ' + $this.css('paddingRight') + ' ' + $this.css('paddingBottom') + ' ' + $this.css('paddingLeft');
				this.originalSidePaddingTotal = (parseInt($this.css('paddingLeft')) || 0) + (parseInt($this.css('paddingRight')) || 0);
				var paneWidth = $this.innerWidth();
				var paneHeight = $this.innerHeight();
				var trackHeight = paneHeight;
				$this.wrap(
					jQuery('<div></div>').attr(
						{'className':'jScrollPaneContainer'}
					).css(
						{
							'height':paneHeight+'px', 
							'width':paneWidth+'px'
						}
					)
				);
				// deal with text size changes (if the jquery.em plugin is included)
				// and re-initialise the scrollPane so the track maintains the
				// correct size
				jQuery(document).bind(
					'emchange', 
					function(e, cur, prev)
					{
						$this.jScrollPane(settings);
					}
				);
			}
			var p = this.originalSidePaddingTotal;
			
			var cssToApply = {
				'height':'auto',
				'width':paneWidth - settings.scrollbarWidth - settings.scrollbarMargin - p + 'px'
			}

			if(settings.scrollbarOnLeft) {
				cssToApply.paddingLeft = settings.scrollbarMargin + settings.scrollbarWidth + 'px';
			} else {
				cssToApply.paddingRight = settings.scrollbarMargin + 'px';
			}

			$this.css(cssToApply);

			var contentHeight = $this.outerHeight();
			var percentInView = paneHeight / contentHeight;

			if (percentInView < .99) {
				var $container = $this.parent();
				$container.append(
					jQuery('<div></div>').attr({'className':'jScrollPaneTrack'}).css({'width':settings.scrollbarWidth+'px'}).append(
						jQuery('<div></div>').attr({'className':'jScrollPaneDrag'}).css({'width':settings.scrollbarWidth+'px'}).append(
							jQuery('<div></div>').attr({'className':'jScrollPaneDragTop'}).css({'width':settings.scrollbarWidth+'px'}),
							jQuery('<div></div>').attr({'className':'jScrollPaneDragBottom'}).css({'width':settings.scrollbarWidth+'px'})
						)
					)
				);
				
				var $track = jQuery('>.jScrollPaneTrack', $container);
				var $drag = jQuery('>.jScrollPaneTrack .jScrollPaneDrag', $container);
				
				if (settings.showArrows) {
					
					var currentArrowButton;
					var currentArrowDirection;
					var currentArrowInterval;
					var currentArrowInc;
					var whileArrowButtonDown = function()
					{
						if (currentArrowInc > 4 || currentArrowInc%4==0) {
							positionDrag(dragPosition + currentArrowDirection * mouseWheelMultiplier);
						}
						currentArrowInc ++;
					};
					var onArrowMouseUp = function(event)
					{
						jQuery('html').unbind('mouseup', onArrowMouseUp);
						currentArrowButton.removeClass('jScrollActiveArrowButton');
						clearInterval(currentArrowInterval);
						/*console.log($(event.target));
						currentArrowButton.parent().removeClass('jScrollArrowUpClicked jScrollArrowDownClicked');*/
					};
					var onArrowMouseDown = function() {
						/*console.log(direction);
						currentArrowButton = $(this);*/
						jQuery('html').bind('mouseup', onArrowMouseUp);
						currentArrowButton.addClass('jScrollActiveArrowButton');
						currentArrowInc = 0;
						whileArrowButtonDown();
						currentArrowInterval = setInterval(whileArrowButtonDown, 100);
					};
					$container
						.append(
							jQuery('<a></a>')
								.attr({'href':'javascript:;', 'className':'jScrollArrowUp'})
								.css({'width':settings.scrollbarWidth+'px'})
								.html('Scroll up')
								.bind('mousedown', function()
								{
									currentArrowButton = jQuery(this);
									currentArrowDirection = -1;
									onArrowMouseDown();
									this.blur();
									return false;
								}),
							jQuery('<a></a>')
								.attr({'href':'javascript:;', 'className':'jScrollArrowDown'})
								.css({'width':settings.scrollbarWidth+'px'})
								.html('Scroll down')
								.bind('mousedown', function()
								{
									currentArrowButton = jQuery(this);
									currentArrowDirection = 1;
									onArrowMouseDown();
									this.blur();
									return false;
								})
						);
					var $upArrow = jQuery('>.jScrollArrowUp', $container);
					var $downArrow = jQuery('>.jScrollArrowDown', $container);
					if (settings.arrowSize) {
						trackHeight = paneHeight - settings.arrowSize - settings.arrowSize;
						$track
							.css({'height': trackHeight+'px', top:settings.arrowSize+'px'})
					} else {
						var topArrowHeight = $upArrow.height();
						settings.arrowSize = topArrowHeight;
						trackHeight = paneHeight - topArrowHeight - $downArrow.height();
						$track
							.css({'height': trackHeight+'px', top:topArrowHeight+'px'})
					}
				}
				
				var $pane = jQuery(this).css({'position':'absolute', 'overflow':'visible'});
				
				var currentOffset;
				var maxY;
				var mouseWheelMultiplier;
				// store this in a seperate variable so we can keep track more accurately than just updating the css property..
				var dragPosition = 0;
				var dragMiddle = percentInView*paneHeight/2;
				
				// pos function borrowed from tooltip plugin and adapted...
				var getPos = function (event, c) {
					var p = c == 'X' ? 'Left' : 'Top';
					return event['page' + c] || (event['client' + c] + (document.documentElement['scroll' + p] || document.body['scroll' + p])) || 0;
				};
				
				var ignoreNativeDrag = function() {	return false; };
				
				var initDrag = function()
				{
					ceaseAnimation();
					currentOffset = $drag.offset(false);
					currentOffset.top -= dragPosition;
					maxY = trackHeight - $drag[0].offsetHeight;
					mouseWheelMultiplier = 2 * settings.wheelSpeed * maxY / contentHeight;
				};
				
				var onStartDrag = function(event)
				{
					initDrag();
					dragMiddle = getPos(event, 'Y') - dragPosition - currentOffset.top;
					jQuery('html').bind('mouseup', onStopDrag).bind('mousemove', updateScroll);
					if (jQuery.browser.msie) {
						jQuery('html').bind('dragstart', ignoreNativeDrag).bind('selectstart', ignoreNativeDrag);
					}
					return false;
				};
				var onStopDrag = function()
				{
					jQuery('html').unbind('mouseup', onStopDrag).unbind('mousemove', updateScroll);
					dragMiddle = percentInView*paneHeight/2;
					if (jQuery.browser.msie) {
						jQuery('html').unbind('dragstart', ignoreNativeDrag).unbind('selectstart', ignoreNativeDrag);
					}
				};
				var positionDrag = function(destY)
				{
					destY = destY < 0 ? 0 : (destY > maxY ? maxY : destY);
					dragPosition = destY;
					$drag.css({'top':destY+'px'});
					var p = destY / maxY;
					$pane.css({'top':((paneHeight-contentHeight)*p) + 'px'});
					$this.trigger('scroll');
					if (settings.showArrows) {
						$upArrow[destY == 0 ? 'addClass' : 'removeClass']('disabled');
						$downArrow[destY == maxY ? 'addClass' : 'removeClass']('disabled');
					}
				};
				var updateScroll = function(e)
				{
					positionDrag(getPos(e, 'Y') - currentOffset.top - dragMiddle);
				};
				
				var dragH = Math.max(Math.min(percentInView*(paneHeight-settings.arrowSize*2), settings.dragMaxHeight), settings.dragMinHeight);
				
				$drag.css(
					{'height':dragH+'px'}
				).bind('mousedown', onStartDrag);
				
				var trackScrollInterval;
				var trackScrollInc;
				var trackScrollMousePos;
				var doTrackScroll = function()
				{
					if (trackScrollInc > 8 || trackScrollInc%4==0) {
						positionDrag((dragPosition - ((dragPosition - trackScrollMousePos) / 2)));
					}
					trackScrollInc ++;
				};
				var onStopTrackClick = function()
				{
					clearInterval(trackScrollInterval);
					jQuery('html').unbind('mouseup', onStopTrackClick).unbind('mousemove', onTrackMouseMove);
				};
				var onTrackMouseMove = function(event)
				{
					trackScrollMousePos = getPos(event, 'Y') - currentOffset.top - dragMiddle;
				};
				var onTrackClick = function(event)
				{
					initDrag();
					onTrackMouseMove(event);
					trackScrollInc = 0;
					jQuery('html').bind('mouseup', onStopTrackClick).bind('mousemove', onTrackMouseMove);
					trackScrollInterval = setInterval(doTrackScroll, 100);
					doTrackScroll();
				};
				
				$track.bind('mousedown', onTrackClick);
				
				// if the mousewheel plugin has been included then also react to the mousewheel
				if ($container.mousewheel) {
					$container.mousewheel(
						function (event, delta) {
							initDrag();
							ceaseAnimation();
							var d = dragPosition;
							positionDrag(dragPosition - delta * mouseWheelMultiplier);
							var dragOccured = d != dragPosition;
							return !dragOccured;
						},
						false
					);					
				}
				var _animateToPosition;
				var _animateToInterval;
				function animateToPosition()
				{
					var diff = (_animateToPosition - dragPosition) / settings.animateStep;
					if (diff > 1 || diff < -1) {
						positionDrag(dragPosition + diff);
					} else {
						positionDrag(_animateToPosition);
						ceaseAnimation();
					}
				}
				var ceaseAnimation = function()
				{
					if (_animateToInterval) {
						clearInterval(_animateToInterval);
						delete _animateToPosition;
					}
				};
				var scrollTo = function(pos, preventAni)
				{
					if (typeof pos == "string") {
						$e = jQuery(pos, this);
						if (!$e.length) return;
						pos = $e.offset().top - $this.offset().top;
					}
					ceaseAnimation();
					var destDragPosition = -pos/(paneHeight-contentHeight) * maxY;
					if (preventAni || !settings.animateTo) {
						positionDrag(destDragPosition);
					} else {
						_animateToPosition = destDragPosition;
						_animateToInterval = setInterval(animateToPosition, settings.animateInterval);
					}
				};
				$this[0].scrollTo = scrollTo;
				
				$this[0].scrollBy = function(delta)
				{
					var currentPos = -parseInt($pane.css('top')) || 0;
					scrollTo(currentPos + delta);
				};
				
				initDrag();
				
				scrollTo(-currentScrollPosition, true);
				
				jQuery.jScrollPane.active.push($this[0]);

			} else {
				$this.css(
					{
						'height':paneHeight+'px',
						'width':paneWidth-this.originalSidePaddingTotal+'px',
						'padding':this.originalPadding
					}
				);
				// remove from active list?
			}
			
		}
	)
};

// clean up the scrollTo expandos
jQuery(window)
	.bind('unload', function() {
		var els = jQuery.jScrollPane.active; 
		for (var i=0; i<els.length; i++) {
			els[i].scrollTo = els[i].scrollBy = null;
		}
	}
);;var feedbackScrollBack = false;
var commentScrollBack = false;
var saveItScrollBack = null;
var _nZIndexDepth = 3000;
 
onLoginNavigationReady = function(){ 							 
	
	
	$('#forgotpassword').click(function (){
		if($(this).attr("checked")){
			$('#login_type_label').html('Email Address:');
			$('#login_password').hide();
			$('#login_password_label').hide();
			$('#cover_forgotusername').show();
			
		} else {
			$('#login_type_label').html('Username:');
			$('#login_password').show();
			$('#login_password_label').show();
			$('#cover_forgotusername').hide();
		}
	});
				   
	$('#forgotusername').click(function (){
		if($(this).attr("checked")){
			$('#login_type_label').html('Email Address:');
			$('#login_password').hide();
			$('#login_password_label').hide();
			$('#cover_forgotpassword').show();
			
		} else {
			$('#login_type_label').html('Username:');
			$('#login_password').show();
			$('#login_password_label').show();
			$('#cover_forgotpassword').hide();
		}
	});
	
	
	 
	$('#emailauthorbtn').click(function (){		
		/*if ( document.cookie.indexOf("tdb_info=") == -1){
			feedbackScrollBack = true;
			$.scrollTo('#header', 800);
			displayLogin();
		} else {*/
			displayEmailAuthor();
		
	});		
	 
	
	$('#feed_btn').click(function (){		
		if (document.cookie.indexOf("tdb_info=") == -1){
			feedbackScrollBack = true;
			$.scrollTo('#header', 800);
			$('#fblogin_form').jqmShow();	
		} else {
			displayFeedback();
		}
	});		  
	
	$('#privacy_btn').click(function (){		
		if (document.cookie.indexOf("tdb_info=") == -1){
			feedbackScrollBack = true;
			$.scrollTo('#header', 800);
			displayLogin();
		} else {
			document.location.href = '/account/';
		}
		return false;
	});		  
	
	/*sign up functions*/
	 
	$('#emailsignupform').submit(function (){
		$('#popup_emailsignup_formsupport').show();
			$('#popup_emailsignup_footer').hide();
			$('#popup_emailsignup_home').hide();
			$('#popup_emailsignup_home').hide();
			$('#popup_emailsignup_formsupport .success').hide();
			_xSignup.checkHovers();
		return false;
	});
	
	$('#signupform_cancel').click(function (){
		_xSignup.resetSupportForm();
		$('#popup_emailsignup_formsupport').hide();
	});
	
	$('#signupform_confirm').click(function (){
		_xSignup.validateAndSubmitSupport( $(this).parents('.popup_emailsignup').attr('id'));
		//$('#popup_emailsignup_formsupport').hide();
	});
	$('#emailsignup_submit_footer').click(function(){
		_xSignup.validateAndSubmit( $(this).parents('.popup_emailsignup').attr('id'));
	});
	
	$('.success_close').click(function (){
		$(this).parents('.popup_emailsignup').hide();
		_xSignup.resetSupportForm();
		_xSignup.checkHovers();
	});
	
	
	
	$('#email-signup #emailsignup,#popup_emailsignup_home #emailsignup,#popup_emailsignup_footer #emailsignup').submit( function(){
				
		_xSignup.validateAndSubmit( $(this).parents('.popup_emailsignup').attr('id'));
		return false;
	});
	
	
	$('.register_line .register').click(function(){	 
		if (!getCookie('tdb_info')){
			$.scrollTo('#header',800);
			$("#fbregister_form").jqmShow();
			
			//displayRegistration();
		} else {
			window.location = '/account/';
		}						 
	 });
 
	$('#signup').click(function(){
		if (!getCookie('tdb_info')){
			$('#footer').toggleClass('footer_popup_open');
			_xSignup.resetForm();
			_xSignup.resetSupportForm();
			$('#popup_emailsignup_footer').show();
			$('#popup_emailsignup_home').hide();
			$('#popup_emailsignup_formsupport').hide();
			$('#popup_emailsignup_footer .success').hide();
			_xSignup.checkHovers();
			
		} else {
			window.location = '/account/';
		}						 
	 });
	
    $('#popup_emailsignup_home .theclosebtn').click(function(){	 _xSignup.resetForm(); 	$('#popup_emailsignup_home').toggle(); _xSignup.checkHovers();  });	$('#popup_emailsignup_footer .theclosebtn').click(function(){	_xSignup.resetForm();	$('#popup_emailsignup_footer').toggle(); _xSignup.checkHovers();  });	
	$('#joinus').click(function(){	 
		if($('#loginregister').css("display") == "block"){
			_xSignup.resetForm();
			_xSignup.resetSupportForm();
			$('#popup_emailsignup_home').toggle();
			$('#popup_emailsignup_footer').hide();
			$('#popup_emailsignup_formsupport').hide();
			_xSignup.checkHovers();
		} else {
			window.location = '/account/';
		}
	 });
	
	$('#promo_joinus, .btn_email').click(function(){	 
		if (!getCookie('tdb_info')){
			$.scrollTo('#header',800);	
			$("#fbregister_form").jqmShow();
		} else {
			window.location = '/account/';
		}
		return false;
	 });
	
	//user menus buttons 	
	$('#login_link').click(function(){ 
		$('#popup_saved').hide();
		$('#popup_register').hide(); /*needs to erase fields, now*/
		resetRegister();
		$('#popup_login').show();
		$('#login_submit').show();
		$('#login_link').addClass('button_current');
	});	
	
	$('#register_link').click(function(){ 
		displayRegistration();		
	});	
	
	$('#clicktoregister a').click(function(){
		displayRegistration();
	 });
	
	$('#saved_link').click(function (){
		displaySaved();
		$('#popup_account').hide(); /*needs to erase fields, now*/
		resetAccount();		
	});
	
	
	//close user menus	
	$('#popup_register .closebtn').click(function (){
		$('#popup_register').hide(); /*needs to erase fields, now	*/
		resetRegister();
	 });
	//!!!
	$('#authorpage .closebtn').click(function (){
		$('#email_author_popup').hide();//needs to erase fields, now	
		resetEmailAuthorForm();
	 });
	
	$('#popup_login .closebtn').click(function (){
		$('#popup_login').hide();	//needs to erase fields, now
		resetLogin();
	 });
	
	$('#popup_account .closebtn').click(function (){
		$('#popup_account').hide();	 //needs to erase fields, now
		resetAccount();
	 });		
	
	$('#popup_feed .closebtn').click(function (){
		closeFeedback();
	});
	
	$('#popup_saved .closebtn').click(function (){
		$('#popup_saved').hide();
		$('#saved_link').removeClass('button_current');
	});
	
	//submit changes buttons
	$('#login_submit').click(function (){
		f = document.getElementById('login_form');
		
		errors = new Array();
		if(f.elements['forgot'].checked){
			var l_sTheirEmail = f.elements['username'].value; //we're using the username input field for email in this case
			if( !_xGlobal.echeck(l_sTheirEmail)  ){
				errors.push("Please enter a valid Email Address.");
			}

		} else if(f.elements['forgotusername'].checked){
			
			var l_sTheirEmail = f.elements['username'].value; //we're using the username input field for email in this case
			if( !_xGlobal.echeck(l_sTheirEmail)  ){
				errors.push("Please enter a valid Email Address.");
			}

		}else {									   
			errors = validateLogination();
		}		
		if(errors.length > 0)	{
			$('#login_errors').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#login_errors').html('');
		
	   	disableLoginForm();
	    DailybeastAjax.login();
		return false;
    });
	
	$('#register_submit').click(function (){		
		errors = validateCreation();
		if(errors.length > 0)	{
			$('#register_errors').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#register_errors').html('');	
		
		disableRegisterForm();	
		DailybeastAjax.register();
		return false;
    });
	
	/*
	$('#submitRegister').click(function (){		
		errors = validateCreation();
		if(errors.length > 0)	{
			$('#fbmessage_register').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#fbmessage_register').html('');	
		
		//disableRegisterForm();	
		DailybeastAjax.register();
		return false;
    });
	*/
	/*
	$('#account_submit').click(function (){		
		errors = validateUpdation();
		if(errors.length > 0)	{
			$('#account_errors').html(_xGlobal.printErrors(errors));
				alert('errors');			
		}
		alert('no errors');
		$('#account_errors').html('');	
		disableUpdateForm();
		DailybeastAjax.update();
		return false;
    });
	*/
	$('#cancel_submit').click(function (){
		disableUpdateForm();
		DailybeastAjax.update();
		return false;
    });
	
	$('#feedback_submit').click(function (){
		var l_sTheirFeedback = $('#feed_txt').val();
		errors = new Array();	
		if( _xGlobal.checkEmpty(l_sTheirFeedback)){
			errors.push("Please submit account feedback.");
		}
		if(errors.length > 0)	{
			$('#feedback_errors').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#feedback_errors').html('');
		$('#feedback_form .success').show();
		disableFeedbackForm();
		DailybeastAjax.feedback();
		return false;
    });
	
	$('#email_author_submit').click(function (){
											  
		var l_sTheirSubject = $('#subject_txt').val();
		var l_sTheirFeedback = $('#feed_txt').val();
		errors = new Array();	
		if( _xGlobal.checkEmpty(l_sTheirSubject)){
			errors.push("Please submit a subject.");
		}
		if( _xGlobal.checkEmpty(l_sTheirFeedback)){
			errors.push("Please submit content.");
		}
		if(errors.length > 0)	{
			$('#email_author_errors').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#email_author_errors').html('');											  
										  
		disableEmailAuthorForm();
		DailybeastAjax.email_author_submit();
		return false;
    });
	
	$('#newstory_submit').click(function (){
		var l_sTheirLink = $('#form_newstory #newstory_link').val();
		errors = new Array();	
		if( _xGlobal.checkEmpty(l_sTheirLink)){
			errors.push("Please submit a link.");
		}
		if(errors.length > 0)	{
			$('#newstory_errors').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#newstory_errors').html('');							  
										  
		disableNewStoryForm();					  
		DailybeastAjax.submitNewStory();
		return false;
	});			  
	
	$('#newstory_submit2').click(function (){
		var l_sTheirLink = $('#form_newstory2 #newstory_link2').val();
		errors = new Array();	
		if( _xGlobal.checkEmpty(l_sTheirLink)){
			errors.push("Please submit a link.");
		}
		if(errors.length > 0)	{
			$('#newstory_errors2').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#newstory_errors2').html('');							  
										  
		disableNewStoryForm2();					  
		DailybeastAjax.submitNewStory2();
		return false;
	});			  
	
	
	//account specific
	$('#changepw_link').click(function (){
		$('#no_changepw_area').hide(); 									 
		$('#changepw_area').show();
		
	 });
	
	$('#cancelpw_link').click(function (){
		$('#no_changepw_area').show(); 									 
		$('#changepw_area').hide();
		f.elements['password'].value = "";
		f.elements['password2'].value = "";
		f.elements['password_old'].value = "";			
	 });
	
	$('#cancel').click(function (){
		if(this.checked == true){
			$('#account_btm2').hide(); 
			$('#account_btm3').hide(); 
			$('#save_btn').hide();
			$('#cancel_area').show();
			f.elements['subscribe'].checked = false;
			f.elements['unshareinfo'].checked = false;
		} else {
			$('#account_btm2').show(); 			
			$('#account_btm3').show(); 
			$('#save_btn').show();
			$('#cancel_area').hide();			
		}
	 });
	
	
	if(location.hash == '#login'){
		if($('#loginregister').length != 0){
			displayLogin();	
		}
	}
	
	if(location.hash == '#register'){
		if($('#loginregister').length != 0){
			if($('#loginregister').css("display") == "block"){
				displayRegistration();
			} 
		}
	}
	
	
	
};

/* ----------------------- Validation Functions ------------------------------		*/
			function validateLogination(){
				p_aValues = document.getElementById('login_form');
				r_asErrors = new Array();					
				if(/[a-zA-Z]{1}[-a-zA-Z0-9]{5}[-a-zA-Z0-9]*/.test(p_aValues.elements['username'].value) == false || 
				  (/[a-zA-Z0-9]{6,16}/.test(p_aValues.elements['password'].value) == false))
					r_asErrors.push("Your Username or Password were not recognized.<br>Please enter a valid Username and Password.");					

				return  r_asErrors;
			}

			function validateCreation(){	
				p_aValues = document.getElementById('register_form');
				r_asErrors = new Array();		
				if(/[a-zA-Z0-9]{6,16}/.test(p_aValues.elements['password'].value) == false)
					r_asErrors.push("Password must be between 6 and 16 alphanumeric characters.");			
				if(p_aValues.elements['password'].value != p_aValues.elements['password2'].value)
					r_asErrors.push("Password and Confirmation must match.");	
				return  r_asErrors.concat(validate(p_aValues));
			}
			/*			
			function validateCreation(){	
				p_aValues = document.getElementById('form_register');
				r_asErrors = new Array();		
				if(/[a-zA-Z0-9]{6,16}/.test(p_aValues.elements['regpassword'].value) == false)
					r_asErrors.push("Password must be between 6 and 16 alphanumeric characters.");			
				if(p_aValues.elements['regpassword'].value != p_aValues.elements['regpasswordconfirm'].value)
					r_asErrors.push("Password and Confirmation must match.");	
				return  r_asErrors.concat(validate(p_aValues));
			}
	*/		
			
			function validateUpdation(){	
				//p_aValues = document.getElementById('account_form');
				p_aValues = document.getElementById('accountpage_form');
				r_asErrors = new Array();	
				if(p_aValues.elements['password_old'].value != ""){ 
					if(/[a-zA-Z0-9]{6,16}/.test(p_aValues.elements['password_old'].value) == false)
						r_asErrors.push("Current Password Incorrect.");
					if(p_aValues.elements['password'].value != p_aValues.elements['password2'].value)
						r_asErrors.push("New Password and Confirmation must match.");
					if(/[a-zA-Z0-9]{6,16}/.test(p_aValues.elements['password'].value) == false)
						r_asErrors.push("New Password must be between 6 and 16 alphanumeric characters.");
				} 
				
				return  r_asErrors.concat(validate(p_aValues));
			}
			
			function validateUpdatePage(){	
				p_aValues = document.getElementById('accountpage_form');
				r_asErrors = new Array();	
				if(p_aValues.elements['password_old'].value != ""){ 
					if(/[a-zA-Z0-9]{6,16}/.test(p_aValues.elements['password_old'].value) == false)
						r_asErrors.push("Current Password Incorrect.");
					if(p_aValues.elements['password'].value != p_aValues.elements['password2'].value)
						r_asErrors.push("New Password and Confirmation must match.");
					if(/[a-zA-Z0-9]{6,16}/.test(p_aValues.elements['password'].value) == false)
						r_asErrors.push("New Password must be between 6 and 16 alphanumeric characters.");
				} 
				
				return  r_asErrors.concat(validate(p_aValues));
			}
			
			function validate(p_aValues){		
				r_asErrors = new Array();		
			
				if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,28}[a-zA-Z]{1}/.test($.trim(p_aValues.elements['firstName'].value)) == false)
					r_asErrors.push("First Name must be between 2 and 30 characters a-z.");			
				if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,27}[a-zA-Z]{1}/.test($.trim(p_aValues.elements['lastName'].value)) == false)
					r_asErrors.push("Last Name must be between 2 and 30 characters a-z.");
				if( p_aValues.elements['year'].value == "0" || 
					p_aValues.elements['day'].value == "0" || 
					p_aValues.elements['month'].value == "0" || 
					p_aValues.elements['year'].value == "" || 
					p_aValues.elements['day'].value == "" || 
					p_aValues.elements['month'].value == "")
					r_asErrors.push("Please choose a birth Month, Day, and Year.");
				//if we choose the usa, we need a zipcode 
				if(p_aValues.elements['country'].value=='USA' && (/[0-9]{5}/.test(p_aValues.elements['zip'].value) == false))
					r_asErrors.push("US Zip Code must be 5 numbers.");				
				if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(p_aValues.elements['email'].value)) == false)
					r_asErrors.push("Email Address is in an invalid format.");

				return r_asErrors;
			}
			
			
			function validateRegisterForm(p_aValues){		
				r_asErrors = new Array();	
	
				if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,28}[a-zA-Z]{1}/.test($.trim(p_aValues.elements['firstName'].value)) == false)
					r_asErrors.push("First Name must be between 2 and 30 characters a-z.");			
				if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,27}[a-zA-Z]{1}/.test($.trim(p_aValues.elements['lastName'].value)) == false)
					r_asErrors.push("Last Name must be between 2 and 30 characters a-z.");
				if( p_aValues.elements['year'].value == "0" || 
					p_aValues.elements['day'].value == "0" || 
					p_aValues.elements['month'].value == "0" || 
					p_aValues.elements['year'].value == "" || 
					p_aValues.elements['day'].value == "" || 
					p_aValues.elements['month'].value == "")
					r_asErrors.push("Please choose a birth Month, Day, and Year.");
				//if we choose the usa, we need a zipcode
		
				if(p_aValues.elements['country'].value=='USA' && (/[0-9]{5}/.test(p_aValues.elements['zip'].value) == false))
					r_asErrors.push("US Zip Code must be 5 numbers.");				
				if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(p_aValues.elements['email'].value)) == false)
					r_asErrors.push("Email Address is in an invalid format.");
				//alert(r_asErrors);
				return r_asErrors;
			}
			
		
/*  ---------------------- Display Functions ----------------------------------- */


function hideAllFormElements(form_id){
	$('#'+form_id +' .form_element').each(function(){
			$(this).hide();
	});	
}

function showAllFormElements(form_id){
	$('#'+form_id +' .form_element').each(function(){
			$(this).show();
							 });
}

function commentsLogin() {
	alert('You need to register to leave a comment. Please log in or fill out the registration form.');
	$.scrollTo('#header', 800);
	$('#fblogin_form').jqmShow();
	commentScrollBack = true;
}

function displayComment(){
	$('#notloggedin_commentarea').hide();
	$('#firstuser_commentarea').hide();
	$('#leavecomment').show();	
}

function displayNoComment(){
	$('#notloggedin_commentarea').show();
	$('#firstuser_commentarea').hide();
	$('#leavecomment').hide();		
}

function displayFeedback(){
	$('#feed_btn_img').hide();
	$('#popup_feed').css('display','inline');
	showAllFormElements('feedback_form');
	$('#feed_btn_img_over').show();
	resetFeedbackForm();
}

//!!!
function displayEmailAuthor(){
									  
	if(document.cookie.indexOf("tdb_info=") != -1){ //if the user is logged in when you click	
		$('.show_email').hide();
	} else {
		$('.show_email').show();
	}
	
	$('#email_author_popup').show();
	
	showAllFormElements('feedback_form');
	 
	//$('#feed_btn_img_over').show();
	
	$('#email_author_errors').html('');
	resetEmailAuthorForm();
}


function closeFeedback(){
	$('#popup_feed').hide();	
	$('#feed_btn_img_over').hide();
	$('#feed_btn_img').show();
}

function displayLogin(){
	$("#fblogin_form").jqmShow();
}


function displayAccountPage(){						
	DailybeastAjax.getAccountPage();
}

function displayRegistration(){	
	$("#fbregister_form").jqmShow();
//    showAllFormElements('register_form');
//	$('#header').css('z-index',_nZIndexDepth++);
//	$('#popup_register').css('z-index',_nZIndexDepth++);
//	$('#popup_register').show();		
//	$('#popup_login').hide(); //needs to erase fields, now
//	resetLogin();
//	$('#register_link').addClass('button_current');
}

function displaySaved(){
	DailybeastAjax.getFavorites();
	$('#popup_saved').show();
	$('#saved_link').addClass('button_current');
}

function removeFavorite(id, items_id){
	$('#cheatrow_'+items_id+' .txt_saveit_saved').removeClass('txt_saveit_saved');
	DailybeastAjax.removeFavorite(id, items_id);	
}

/* ----------------------------------- Scrollbacks -------------------------------------- */

function scrollToLogin(){
	if($('.div_signupcheatsheet_overlay').get(0)!== undefined && $('.div_signupcheatsheet_overlay').css('display')=='block'){
		$('.div_signupcheatsheet_overlay').jqmHide();
	}
	$.scrollTo('#header', 800);
	$('#fblogin_form').jqmShow();	
}

function addFavorite(items_id,currentDiv){
	if(document.cookie.indexOf("tdb_info=") != -1){		
		if(!$(currentDiv).children('.saved').length  ){		
			$(currentDiv).children('.txt').addClass('txt_saveit_saved');
			DailybeastAjax.addFavorite(items_id);	
		}
	} else {
		$.scrollTo('#header', 800);
//		displayLogin();	
		$('#fblogin_form').jqmShow();
		saveItScrollBack = items_id;
	}
}

function scrollToIfOpen(){
	if(feedbackScrollBack){
		feedbackScrollBack = false;
		displayFeedback();
		$.scrollTo('#popup_feed',800);	
	} else if(commentScrollBack){
		commentScrollBack = false;
		$.scrollTo("#leavecomment",800);	
	} else if (saveItScrollBack){		
		$.scrollTo("#cheatrow_"+saveItScrollBack,800);
		saveItScrollBack = null;
	} else if (suggestScrollBack){
		$.scrollTo('#'+suggestScrollBack,800);
		suggestScrollBack = null;
	} else if (submitScrollBack){
		$.scrollTo("#maincontent",800);
		$('#submitnewstory_link').trigger('click');
		submitScrollBack = false;
	} else if (_xComment._nScrollTo){
		$.scrollTo( '#comment_'+_xComment._nScrollTo  ,800);
		_xComment.replyTo(_xComment._nScrollTo);
		_xComment._nScrollTo = 0;
	}
	
}
/* ----------------------------- SUBMIT FORM --------------------------------------------- */


function initSuggestNewsmaker(){
	$('.index_suggestanewsmaker').click(function(){
		resetSuggestNewsmaker();
		$('#popup_suggest_newsmaker').toggle();
		$(this).toggleClass('current');
	});
	
	
	$('.closebtn').click(function(){
		resetSuggestNewsmaker();
		$('#popup_suggest_newsmaker').toggle();
		$('.index_suggestanewsmaker').toggleClass('current');
	});
	
	
	
	
	
}

function suggestNewsmaker(){
	
	var newsmaker_email = $('#newsmaker_email').val();
	var newsmaker_topic = $('#newsmaker_topic').val();
	var newsmaker_explination = $('#newsmaker_explanation').val();
	
	errors = new Array();	
	if( _xGlobal.checkEmpty(newsmaker_email)){
		errors.push("Please enter your email.");
	}
	
	if( _xGlobal.checkEmpty(newsmaker_topic)){
		errors.push("Please submit a topic.");
	}
	if( _xGlobal.checkEmpty(newsmaker_explination)){
		errors.push("Please Enter an explanation.");
	}
	if(errors.length > 0)	{
		$('#newsmaker_errors').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#newsmaker_errors').html('');
	
	disableSuggestNewsmaker();									  
	DailybeastAjax.submitSuggestNewsmaker();	
	
	
}

function disableSuggestNewsmaker(){
	
	f = document.getElementById('suggest_newsmaker');
	
	f.elements['newsmaker_email'].disabled = true;
	f.elements['newsmaker_topic'].disabled = true;	
	f.elements['newsmaker_explanation'].disabled = true;
	//document.getElementById('account_submit').disabled = true;

}

function enableSuggestNewsmaker(){
	
	f = document.getElementById('suggest_newsmaker');
	
	f.elements['newsmaker_email'].disabled = false;
	f.elements['newsmaker_topic'].disabled = false;	
	f.elements['newsmaker_explanation'].disabled = false;
	//document.getElementById('account_submit').disabled = true;

}

function resetSuggestNewsmaker(){
					  
	if(document.cookie.indexOf("tdb_info=") != -1){ //if the user is logged in when you click	
		$('.show_email').hide();
	} else {
		$('.show_email').show();
	}
	
	$('#newsmaker_errors').html('');
	$('#feedback_success').hide();
	
	f = document.getElementById('suggest_newsmaker');
	
	f.elements['newsmaker_email'].disabled = false;
	f.elements['newsmaker_topic'].disabled = false;	
	f.elements['newsmaker_explanation'].disabled = false;
	
	f.elements['newsmaker_email'].value = '';
	f.elements['newsmaker_topic'].value = '';	
	f.elements['newsmaker_explanation'].value = '';
	
	showAllFormElements('suggest_newsmaker');
}


DailybeastAjax.submitSuggestNewsmaker = function(){
	f = document.getElementById('suggest_newsmaker');

	DailybeastAjax._xArgs.data = 'a=submitSuggestNewsmaker';
	DailybeastAjax._xArgs.data += '&email='+escape(f.elements['newsmaker_email'].value);	
	DailybeastAjax._xArgs.data += '&topic='+escape(f.elements['newsmaker_topic'].value);
	DailybeastAjax._xArgs.data += '&explanation='+escape(f.elements['newsmaker_explanation'].value);

	DailybeastAjax._xArgs.returnDiv = '#return_div';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
	
}

DailybeastAjax.submitNewsletterSignup = function(p_sParentId,p_sEmail,p_sSignup,p_sUnShare,p_sEmailFormat,p_sCulturalSignup){
	  
	DailybeastAjax._xArgs.data = 'a=submitNewsletterSignup';
	DailybeastAjax._xArgs.data += '&div='+escape(p_sParentId);	
	DailybeastAjax._xArgs.data += '&email='+escape(p_sEmail);	
	DailybeastAjax._xArgs.data += '&signup='+escape(p_sSignup);
	DailybeastAjax._xArgs.data += '&unshare='+escape(p_sUnShare);
	DailybeastAjax._xArgs.data += '&format='+escape(p_sEmailFormat);
	DailybeastAjax._xArgs.data += '&cultural_signup='+escape(p_sCulturalSignup); 
	 
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
	
}


function submitBetterLink(id){
	var l_sTheirLink = $('#form_betterlink_'+id+' #link_'+id).val();
	errors = new Array();	
	if( _xGlobal.checkEmpty(l_sTheirLink)){
		errors.push("Please submit a link.");
	}
	if(errors.length > 0)	{
		$('#better_errors_'+id).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#better_errors_'+id).html('');
	
	disableBetterLinkForm(id);									  
	DailybeastAjax.submitBetterLink(id);										  
}


function submitGalleryLink(){
	
	var l_sYourEmail = $('#your_email').val();
	var l_sTheirEmail = $('#their_email').val();
	
	errors = new Array();
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	if(errors.length > 0)	{
		$('#share_errors_gallery').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_gallery').html('');

	disableShareLinkForm('gallery');
	DailybeastAjax.shareGalleryLink();

}

function submitShareLink(id){	
	var l_sYourEmail = $('#form_sharelink_'+id+' #your_email_'+id).val();
	var l_sTheirEmail = $('#form_sharelink_'+id+' #their_email_'+id).val();
	
	//var l_sTheirName = $('#form_sharelink_'+id+' #their_name_'+id).val();
	errors = new Array();
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_'+id).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_'+id).html('');

	disableShareLinkForm(id);
	DailybeastAjax.shareLink(id);
}


function submitAllFromAccount(){	
	var l_sYourEmail = $('#form_sharelink_ #your_email_').val();
	var l_sTheirEmail = $('#form_sharelink_ #their_email_').val();
	//var l_sTheirName = $('#form_sharelink_'+id+' #their_name_'+id).val();
	errors = new Array();
	if (document.cookie.indexOf("tdb_info=") == -1 && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_').html('');

	disableShareLinkForm('');
	DailybeastAjax.shareAllFromAcct();
}


function submitLinkFromAccount(id){
	
	var l_sYourEmail = $('#form_sharelink_'+id+' #your_email_'+id).val();
	var l_sTheirEmail = $('#form_sharelink_'+id+' #their_email_'+id).val();
	//var l_sTheirName = $('#form_sharelink_'+id+' #their_name_'+id).val();
	errors = new Array();
	if (document.cookie.indexOf("tdb_info=") == -1 && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_'+id).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_'+id).html('');

	disableShareLinkForm(id);
	DailybeastAjax.shareLinkFromAccount(id);
	
	
}


function submitShareBuzzLink(id){	
	var l_sYourEmail = $('#form_sharelink_'+id+' #your_email_'+id).val();
	var l_sTheirEmail = $('#form_sharelink_'+id+' #their_email_'+id).val();
	//var l_sTheirName = $('#form_sharelink_'+id+' #their_name_'+id).val();
	errors = new Array();
	
	if ((!isUserLoged() || isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_'+id).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_'+id).html('');

	disableShareLinkForm(id);
	DailybeastAjax.shareBuzzLink(id);
}


function submitShareAllNewsmakers(){	
	var l_sYourEmail = $('#form_sharelink_ #your_email_').val();
	var l_sTheirEmail = $('#form_sharelink_ #their_email_').val();
	//var l_sTheirName = $('#form_sharelink_ #their_name_').val();
	errors = new Array();	
	if (document.cookie.indexOf("tdb_info=") == -1 && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_').html('');

	disableShareLinkForm('');
	DailybeastAjax.shareAllCheatNewsmakers();
}


function submitShareAll(){	
	var l_sYourEmail = $('#form_sharelink_ #your_email_').val();
	var l_sTheirEmail = $('#form_sharelink_ #their_email_').val();
	//var l_sTheirName = $('#form_sharelink_ #their_name_').val();
	errors = new Array();	
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_').html('');

	disableShareLinkForm('');
	DailybeastAjax.shareAll();
}



function submitBuzzAll(){	
	var l_sYourEmail = $('#form_sharelink_ #your_email_').val();
	var l_sTheirEmail = $('#form_sharelink_ #their_email_').val();
	//var l_sTheirName = $('#form_sharelink_ #their_name_').val();
	errors = new Array();	
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_').html('');

	disableShareLinkForm('');
	DailybeastAjax.shareBuzzAll();
}


DailybeastAjax.shareBuzzAll = function(){
	f = document.getElementById('form_sharelink_');
	DailybeastAjax._xArgs.data = 'a=shareBuzzAll';
	
	insiderFilter = $('#filterrow .insiders').attr('rel');
	expertiseFilter = $('#filterrow .expertise').attr('rel');
	picksFilter = $('#filterrow .picks').attr('rel');
	
	DailybeastAjax._xArgs.data += '&insiderFilter='+insiderFilter;
	DailybeastAjax._xArgs.data += '&expertiseFilter='+expertiseFilter;
	DailybeastAjax._xArgs.data += '&picksFilter='+picksFilter;
	
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}



function submitShareNominates(){
	var l_sYourEmail = $('#form_sharelink_nominates #your_email_nominates').val();
	var l_sTheirEmail = $('#form_sharelink_nominates #their_email_nominates').val();
	//var l_sTheirName = $('#form_sharelink_'+id+' #their_name_'+id).val();
	errors = new Array();	
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if(!_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_nominates').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_nominates').html('');
	
	disableShareLinkForm('nominates');
	DailybeastAjax.shareNominates();
}


function submitShareBlog(id){
	var l_sYourEmail = $('#form_sharelink_'+id+' #your_email_'+id).val();
	var l_sTheirEmail = $('#form_sharelink_'+id+' #their_email_'+id).val();
	errors = new Array();	
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}
	if(!_xGlobal.echeck(l_sTheirEmail)){
		errors.push("Recipient Email Address is invalid.");
	}
	if(errors.length > 0)	{
		$('#share_errors_'+id).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_'+id).html('');
	
	disableShareLinkForm(id);
	DailybeastAjax.shareBlog(id);
}

function submitShareBlogBottom(id){
	var l_sYourEmail = $('#form_sharelink_'+id+' #your_email_'+id).val();
	var l_sTheirEmail = $('#form_sharelink_'+id+' #their_email_'+id).val();
	errors = new Array();	
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}
	if(!_xGlobal.echeck(l_sTheirEmail)){
		errors.push("Recipient Email Address is invalid.");
	}
	if(errors.length > 0)	{
		$('#share_errors_'+id).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_'+id).html('');
	
	disableShareLinkForm(id);
	DailybeastAjax.shareBlogBottom(id);
}

function submitShareNewsreel(id){
	var l_sYourEmail = $('#form_sharelink_'+id+' #your_email_'+id).val();
	var l_sTheirEmail = $('#form_sharelink_'+id+' #their_email_'+id).val();
	//var l_sTheirName = $('#form_sharelink_'+id+' #their_name_'+id).val();
	errors = new Array();	
	if (document.cookie.indexOf("tdb_info=") == -1 && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if(!_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_'+id).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_'+id).html('');
	
	disableShareLinkForm(id);
	DailybeastAjax.shareNewsreel(id);
}


function submitShareTweet(id){
	var l_sYourEmail = $('#form_sharelink_'+id+' #your_email_'+id).val();
	var l_sTheirEmail = $('#form_sharelink_'+id+' #their_email_'+id).val();
	//var l_sTheirName = $('#form_sharelink_'+id+' #their_name_'+id).val();
	errors = new Array();	
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if(!_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_'+id).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_'+id).html('');
	
	disableShareLinkForm(id);
	DailybeastAjax.shareTweet(id);
}




/*  ---------------------- Reset Functions ------------------------------------- */


function toggleShareGallery(){
	
	if(isUserLoged() && !isUserLogedAsFacebook()){ //if the user is logged in when you click	
		$('.show_email').hide();
	} else {
		$('.show_email').show();
	}
	
	showAllFormElements('form_sharelink_gallery');
	resetShareGallery();
	
	$('#share_success_gallery').hide();
	$('#truebox_popup_email').toggle();
	
	$('#share_errors_gallery').empty();
}

function resetShareGallery(){

	f = document.getElementById('form_sharelink_gallery');
	
	if(f.elements['your_email']) f.elements['your_email'].value = "";
	if(f.elements['their_email']) f.elements['their_email'].value = "";
	if(f.elements['note']) f.elements['note'].value = "";
	
	if(f.elements['your_email']) f.elements['your_email'].disabled = false;
	if(f.elements['their_email']) f.elements['their_email'].disabled = false;
	if(f.elements['note']) f.elements['note'].disabled = false;
	document.getElementById('sharelink_submit_gallery').disabled = false;
	
}



function resetAccount(){
	$('#account_link').css({color: "#000"});
	//enableUpdateForm();
	/*
	f = document.getElementById('accountpage_form');
	
	f.elements['firstName'].value = "";
	f.elements['lastName'].value = "";	
	f.elements['email'].value = "";	
	f.elements['username'].value = "";
	f.elements['password'].value = "";
	f.elements['password2'].value = "";
	f.elements['password_old'].value = "";	
	f.elements['year'].selectedIndex = 0;
	f.elements['month'].selectedIndex = 0;
	f.elements['day'].selectedIndex = 0;
	f.elements['zip'].value = "";	
	f.elements['country'].selectedIndex = 0;	
	f.elements['subscribe'].checked = false;
	f.elements['unshareinfo'].checked = false;
	f.elements['cancel'].checked = false;
	f.elements['explanation'].value = "";	
	*/
	/*
	$('#account_btm2').show(); 	
	$('#account_btm3').show(); 
	$('#save_btn').show();
	$('#cancel_area').hide();	
	$('#account_errors').html('');
	$('#no_changepw_area').show(); 									 
	$('#changepw_area').hide();
	*/
}

function disableUpdateForm(){
	f = document.getElementById('accountpage_form');
	
	f.elements['firstName'].disabled = true;
	f.elements['lastName'].disabled = true;	
	f.elements['email'].disabled = true;	
	f.elements['username'].disabled = true;
	f.elements['password'].disabled = true;
	f.elements['password2'].disabled = true;
	f.elements['password_old'].disabled = true;	
	f.elements['year'].disabled = true;
	f.elements['month'].disabled = true;
	f.elements['day'].disabled = true;
	f.elements['zip'].disabled = true;	
	f.elements['country'].disabled = true;	
	f.elements['subscribe'].disabled = true;
	f.elements['unshareinfo'].disabled = true;
	f.elements['cancel'].disabled = true;
	//f.elements['explanation'].disabled = true;	
	//document.getElementById('accountdb_submit').disabled = true;
}

function enableUpdateForm(){
	f = document.getElementById('accountpage_form');
	f.elements['username'].disabled = true;
	f.elements['firstName'].disabled = false;
	f.elements['lastName'].disabled = false;	
	f.elements['email'].disabled = false;	
	f.elements['password'].disabled = false;
	f.elements['password2'].disabled = false;
	f.elements['password_old'].disabled = false;	
	f.elements['year'].disabled = false;
	f.elements['month'].disabled = false;
	f.elements['day'].disabled = false;
	f.elements['zip'].disabled = false;	
	f.elements['country'].disabled = false;	
	f.elements['subscribe'].disabled = false;
	f.elements['unshareinfo'].disabled = false;
	f.elements['cancel'].disabled = false;
	//f.elements['explanation'].disabled = false;							 
	//document.getElementById('accountdb_submit').disabled = false;
}

function disableAccountpageUpdateForm(){
	f = document.getElementById('accountpage_form');
	f.elements['firstName'].disabled = true;
	f.elements['lastName'].disabled = true;	
	f.elements['email'].disabled = true;	
	f.elements['username'].disabled = true;
	f.elements['password'].disabled = true;
	f.elements['password2'].disabled = true;
	f.elements['password_old'].disabled = true;	
	f.elements['year'].disabled = true;
	f.elements['month'].disabled = true;
	f.elements['day'].disabled = true;
	f.elements['zip'].disabled = true;	
	f.elements['country'].disabled = true;	
	f.elements['subscribe'].disabled = true;
	f.elements['unshareinfo'].disabled = true;
	f.elements['cancel'].disabled = true;
	//f.elements['explanation'].disabled = true;	
	//document.getElementById('account_submit').disabled = true;
	//document.getElementById('accountfb_submit').disabled = true;
}

function enableAccountpageUpdateForm(){
	f = document.getElementById('accountpage_form');
	f.elements['username'].disabled = true;
	f.elements['firstName'].disabled = false;
	f.elements['lastName'].disabled = false;	
	f.elements['email'].disabled = false;	
	f.elements['password'].disabled = false;
	f.elements['password2'].disabled = false;
	f.elements['password_old'].disabled = false;	
	f.elements['year'].disabled = false;
	f.elements['month'].disabled = false;
	f.elements['day'].disabled = false;
	f.elements['zip'].disabled = false;	
	f.elements['country'].disabled = false;	
	f.elements['subscribe'].disabled = false;
	f.elements['unshareinfo'].disabled = false;
	f.elements['cancel'].disabled = false;
//	f.elements['explanation'].disabled = false;							 
	//document.getElementById('account_submit').disabled = false;
}


function resetLogin(){
	$('#login_link').removeClass('button_current');
	enableLoginForm();
	f = document.getElementById('login_form');
	/*	
	f.elements['username'].value = "";		
	f.elements['password'].value = "";	
	f.elements['forgot'].checked = false;
	*/
	$('#login_errors').html('');
	$('.lostpw_sent').hide();
	$('.lostpw_text').show();
	$('.lostname_sent').hide();
	$('.lostname_text').show();
	$('#cover_forgotpassword').hide();
	$('#cover_forgotusername').hide();
	
	$('#login_type_label').html('Username:');
	$('#login_password').show();
	$('#login_password_label').show();
	
	$('#forgotpassword').attr('checked',false);
	$('#forgotusername').attr('checked',false);
}

function disableLoginForm(){
	f = document.getElementById('login_form');
		
	f.elements['username'].disabled = true;		
	f.elements['password'].disabled = true;	
	f.elements['forgot'].disabled = true;
	document.getElementById('login_submit').disabled = true;
	
}

function enableLoginForm(){
	/*
	f = document.getElementById('login_form');
	f.elements['username'].disabled = false;		
	f.elements['password'].disabled = false;	
	f.elements['forgot'].disabled = false;
	document.getElementById('login_submit').disabled = false;
	*/
}
function resetRegister(){
	$('#register_link').removeClass('button_current');
	enableRegisterForm();
	f = document.getElementById('register_form');
	
	f.elements['firstName'].value = "";	
	f.elements['lastName'].value = "";	
	f.elements['email'].value = "";	
	f.elements['username'].value = "";
	f.elements['password'].value = "";
	f.elements['password2'].value = "";
	f.elements['year'].selectedIndex = 0;
	f.elements['month'].selectedIndex = 0;
	f.elements['day'].selectedIndex = 0;		
	f.elements['zip'].value = "";		
	f.elements['country'].selectedIndex = 0;
	f.elements['subscribe'].checked = true;
	f.elements['unshareinfo'].checked = false;
	$('#register_errors').html('');
	//$('#register_success').hide();
	$('#register_bottom').show();
	$('#register_errors').show();
}

function disableRegisterForm(){
	f = document.getElementById('register_form');
	
	f.elements['firstName'].disabled = true;
	f.elements['lastName'].disabled = true;
	f.elements['email'].disabled = true;
	f.elements['username'].disabled = true;	
	f.elements['password'].disabled = true;
	f.elements['password2'].disabled = true;
	f.elements['year'].disabled = true;
	f.elements['month'].disabled = true;
	f.elements['day'].disabled = true;	
	f.elements['zip'].disabled = true;	
	f.elements['country'].disabled = true;
	f.elements['subscribe'].disabled = true;
	f.elements['unshareinfo'].disabled = true;
	document.getElementById('register_submit').disabled = true;
}


function enableRegisterForm(){
	f = document.getElementById('register_form');
	
	f.elements['firstName'].disabled = false;
	f.elements['lastName'].disabled = false;
	f.elements['email'].disabled = false;
	f.elements['username'].disabled = false;
	f.elements['password'].disabled = false;
	f.elements['password2'].disabled = false;
	f.elements['year'].disabled = false;
	f.elements['month'].disabled = false;
	f.elements['day'].disabled = false;	
	f.elements['zip'].disabled = false;	
	f.elements['country'].disabled = false;
	f.elements['subscribe'].disabled = false;
	f.elements['unshareinfo'].disabled = false;
	document.getElementById('register_submit').disabled = false;
}

function disableCommentForm(){
	f = document.getElementById('form_blog_comment');	
	f.elements['comment'].disabled = true;
	document.getElementById('comment_submit').disabled = true;
	
}

function enableCommentForm(){
	f = document.getElementById('form_blog_comment');	
	f.elements['comment'].disabled = false;
	document.getElementById('comment_submit').disabled = false;
}

function resetCommentForm(){
	f = document.getElementById('form_blog_comment');	
	enableCommentForm();
	f.elements['comment'].value = "";
}

function disableFeedbackForm(){
	f = document.getElementById('feedback_form');
	
	f.elements['feedback'].disabled = true;
	document.getElementById('feedback_submit').disabled = true;
}

function enableFeedbackForm(){
	f = document.getElementById('feedback_form');

	f.elements['feedback'].disabled = false;
	document.getElementById('feedback_submit').disabled = false;		
}

function resetFeedbackForm(){
	f = document.getElementById('feedback_form');
	f.elements['feedback'].value = "";
	enableFeedbackForm();
	$('#feedback_success').hide();
	$('#feedback_errors').html('');	
}

function resetEmailAuthorForm(){
	f = document.getElementById('email_author_form');
	f.elements['email_txt'].value = "";
	f.elements['subject_txt'].value = "";
	f.elements['feed_txt'].value = "";
	enableEmailAuthorForm();
	$('#email_author_popup #form-area').show();
	$('#email_author_popup #subject_txt').show();
	$('#email_author_popup #feed_txt').show();
	$('#email_author_popup #save_btn').show();
	$('#feedback_success').hide();
	$('#feedback_errors').html('');	
}
function disableEmailAuthorForm(){
	f = document.getElementById('email_author_form');
	f.elements['email_txt'].disabled = true;
	f.elements['subject_txt'].disabled = true;
	f.elements['feed_txt'].disabled = true;
	document.getElementById('email_author_submit').disabled = true;
}

function enableEmailAuthorForm(){
	f = document.getElementById('email_author_form');

	f.elements['email_txt'].disabled = false;
	f.elements['subject_txt'].disabled = false;
	f.elements['feed_txt'].disabled = false;
	document.getElementById('email_author_submit').disabled = false;		
}

function disableNewStoryForm(){
	f = document.getElementById('form_newstory');	
	
	f.elements['link'].disabled = true;
	f.elements['explanation'].disabled = true;
	document.getElementById('newstory_submit').disabled = true;
}

function disableNewStoryForm2(){
	f = document.getElementById('form_newstory2');	
	
	f.elements['link'].disabled = true;
	f.elements['explanation'].disabled = true;
	document.getElementById('newstory_submit2').disabled = true;
}

function enableNewStoryForm(){
	f = document.getElementById('form_newstory');	
	
	f.elements['link'].disabled = false;
	f.elements['explanation'].disabled = false;	
	document.getElementById('newstory_submit').disabled = false;
}

function enableNewStoryForm2(){
	f = document.getElementById('form_newstory2');	
	
	f.elements['link'].disabled = false;
	f.elements['explanation'].disabled = false;	
	document.getElementById('newstory_submit2').disabled = false;
}

function resetNewStoryForm(){
	f = document.getElementById('form_newstory');	
	enableNewStoryForm();
	f.elements['link'].value = "";
	f.elements['explanation'].value = "";	
	$('#newstory_success').hide();
	$('#newstory_errors').html('');	
}


function resetNewStoryForm2(){
	f = document.getElementById('form_newstory2');	
	enableNewStoryForm();
	f.elements['link'].value = "";
	f.elements['explanation'].value = "";	
	$('#newstory_success2').hide();
	$('#newstory_errors2').html('');	
}

function disableShareLinkForm(id){
	f = document.getElementById('form_sharelink_'+id);		
	if(f.elements['your_email']) f.elements['your_email'].disabled = true;
	if(f.elements['their_email']) f.elements['their_email'].disabled = true;
//	f.elements['their_name'].disabled = true;
	if(f.elements['note']) f.elements['note'].disabled = true;
	document.getElementById('sharelink_submit_'+id).disabled = true;
}

function enableShareLinkForm(id){
	f = document.getElementById('form_sharelink_'+id);
	
	if(f.elements['your_email']) f.elements['your_email'].disabled = false;
	if(f.elements['their_email']) f.elements['their_email'].disabled = false;
	if(f.elements['note']) f.elements['note'].disabled = false;
	document.getElementById('sharelink_submit_'+id).disabled = false;
}

function resetShareLinkForm(form_id){
	f = document.getElementById(form_id);
 
	enableShareLinkForm(form_id);
	if(f.elements['your_email']) f.elements['your_email'].value = "";
	if(f.elements['their_email']) f.elements['their_email'].value = "";
	if(f.elements['note']) f.elements['note'].value = "";
	//f.elements['your_name'].value = "";
//	f.elements['their_name'].value = "";
	$('#share_success_'+f.elements['id'].value).hide();
	$('#share_errors_'+f.elements['id'].value).html('');
}




function disableBetterLinkForm(id){
	f = document.getElementById('form_betterlink_'+id);	
	
	f.elements['link'].disabled = true;
	f.elements['explanation'].disabled = true;
	document.getElementById('betterlink_submit_'+id).disabled = true;
}

function enableBetterLinkForm(id){
	f = document.getElementById('form_betterlink_'+id);	
	
	f.elements['link'].disabled = false;
	f.elements['explanation'].disabled = false;	
	document.getElementById('betterlink_submit_'+id).disabled = false;
}

function resetBetterLinkForm(form_id){	
	f = document.getElementById(form_id);	

	enableBetterLinkForm(f.elements['id'].value);
	f.elements['link'].value = "";
	f.elements['explanation'].value = "";	
	$('#better_success_'+f.elements['id'].value).hide();
	$('#better_errors_'+f.elements['id'].value).html('');
}



_xSignup = {

	validateAndSubmitSupport : function(p_sParentId){
		 
		l_sEmail = $('#emailsignupform .textarea').val();
		
		l_sSignup = $('#'+p_sParentId+' #emailsignup_subscribe_formsupport').attr('checked');
		
		if($('#'+p_sParentId+' #emailsignup_unshareinfo').length)
			l_sUnShare = $('#'+p_sParentId+' #emailsignup_unshareinfo').attr('checked');
		else{
			l_sUnShare = $('#'+p_sParentId+' #emailsignup_unshareinfo_box').attr('checked');
		}
		
		l_sTextFormat = $('#'+p_sParentId+' #emailsignup_radio_formsupport_radio1').attr('checked');
		
		l_sHTMLFormat = $('#'+p_sParentId+' #emailsignup_radio_formsupport_radio2').attr('checked');
	 	
		l_sCulturalSignup = $('#'+p_sParentId+' #emailsignup_subscribe_formsupportA').attr('checked');
		 
		errors = new Array();	
		
		if( !_xGlobal.echeck(l_sEmail)  ){
			errors.push("Email Address is invalid.");
		}
	  	
		if(errors.length > 0)	{
			$('#'+p_sParentId+' .emailsignup_errors').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#'+p_sParentId+' .emailsignup_errors').html('');
		 
		(l_sSignup == true) ? l_sSignup = 'Y' : l_sSignup = 'N';
		(l_sUnShare == true) ? l_sUnShare = 'Y' : l_sUnShare = 'N';
		(l_sTextFormat == true) ? l_sEmailFormat = 'text' : l_sEmailFormat = 'html';
		 
		(l_sCulturalSignup == true) ? l_sCulturalSignup = 'Y' : l_sCulturalSignup = 'N';
		 	 
		this.disableSupportForm();	
		 
		DailybeastAjax.submitNewsletterSignup(p_sParentId,l_sEmail,l_sSignup,l_sUnShare,l_sEmailFormat,l_sCulturalSignup);	
	},
	
	validateAndSubmit : function(p_sParentId){
	 	  
		($('#'+p_sParentId+' #emailsignup_email_home').length > 0) ? 		l_sEmail = $('#'+p_sParentId+' #emailsignup_email_home').val() : 						l_sEmail = $('#'+p_sParentId+' #emailsignup_email_footer').val();
		($('#'+p_sParentId+' #emailsignup_subscribe_formsupport').length > 0) ? 	l_sSignup = $('#'+p_sParentId+' #emailsignup_subscribe_formsupport').attr('checked') : 		l_sSignup = $('#'+p_sParentId+' #emailsignup_subscribe_footer').attr('checked');
		
		if($('#'+p_sParentId+' #emailsignup_unshareinfo').length > 0){
			l_sUnShare = $('#'+p_sParentId+' #emailsignup_unshareinfo').attr('checked') ;
		}
		
		if($('#'+p_sParentId+' #emailsignup_unshareinfo').length)
			l_sUnShare = $('#'+p_sParentId+' #emailsignup_unshareinfo').attr('checked');
		else{
			l_sUnShare = $('#'+p_sParentId+' #emailsignup_unshareinfo_box').attr('checked');
		}
		
		 
		($('#'+p_sParentId+' #emailsignup_radio_formsupport_radio1').length > 0) ? l_sTextFormat = $('#'+p_sParentId+' #emailsignup_radio_formsupport_radio1').attr('checked') : 	l_sTextFormat = $('#'+p_sParentId+' #emailsignup_radio_footer_radio1').attr('checked');
		($('#'+p_sParentId+' #emailsignup_radio_formsupport_radio2').length > 0) ? l_sHTMLFormat = $('#'+p_sParentId+' #emailsignup_radio_formsupport_radio2').attr('checked') : 	l_sHTMLFormat = $('#'+p_sParentId+' #emailsignup_radio_footer_radio2').attr('checked');
		 
		 l_sCulturalSignup = $('#'+p_sParentId+' #emailsignup_subscribe_formsupportA').attr('checked');
		 
		errors = new Array();	
		
		if( !_xGlobal.echeck(l_sEmail)  ){
		errors.push("Email Address is invalid.");
		}
	  
		if(errors.length > 0)	{
			$('#'+p_sParentId+' .emailsignup_errors').html(_xGlobal.printErrors(errors));
			return;
		}
		$('#'+p_sParentId+' .emailsignup_errors').html('');
		 
		(l_sSignup == true) ? l_sSignup = 'Y' : l_sSignup = 'N';
		(l_sUnShare == true) ? l_sUnShare = 'Y' : l_sUnShare = 'N';
		(l_sTextFormat == true) ? l_sEmailFormat = 'text' : l_sEmailFormat = 'html';
		(l_sCulturalSignup == true) ? l_sCulturalSignup = 'Y' : l_sCulturalSignup = 'N';
		 
		this.disableForm();									  
		DailybeastAjax.submitNewsletterSignup(p_sParentId,l_sEmail,l_sSignup,l_sUnShare,l_sEmailFormat,l_sCulturalSignup);	
	},
	 
	disableForm : function(){
		$('#popup_emailsignup_home input,#popup_emailsignup_footer input').each( function(){
			$(this).attr('disabled','disabled');					  
		}); 
	},
	

	enableForm : function(){
		$('#popup_emailsignup_home input,#popup_emailsignup_footer input').each( function(){
			if($(this).attr('rel') != 1)
				$(this).attr('disabled','');					  
		});
	},
	
	resetForm : function(){
					  
		this.enableForm();		
		
		$('#popup_emailsignup_home #emailsignup_email_home,#popup_emailsignup_footer #emailsignup_email_footer').each( function(){
			$(this).val('');					  
		});
		
		$('#popup_emailsignup_home .emailsignup_errors,#popup_emailsignup_footer .emailsignup_errors').each( function(){
			$(this).html('');					  
		});
		
		$('#feedback_success').each( function(){
			$(this).hide();					  
		});
		
		showAllFormElements('popup_emailsignup_home');
		showAllFormElements('popup_emailsignup_footer');
	},


	disableSupportForm : function(){
		$('#popup_emailsignup_formsupport input').each( function(){
			$(this).attr('disabled','disabled');					  
		}); 
	},
	

	enableSupportForm : function(){
		$('#popup_emailsignup_formsupport input').each( function(){
			if($(this).attr('rel') != 1)
				$(this).attr('disabled','');					  
		});
	},
	
	resetSupportForm : function(){
					  
		this.enableSupportForm();		
		
		$('#emailsignupform .textarea').each( function(){
			$(this).val(  $(this).attr('rel') );
		});
		
		$('#popup_emailsignup_formsupport .emailsignup_errors').each( function(){
			$(this).html('');
		});
		
		$('#feedback_success').each( function(){
			$(this).hide();
		});
		
		  
		showAllFormElements('popup_emailsignup_formsupport');
	},
	
	checkHovers : function(){
	
		($('#popup_emailsignup_home').css('display') == 'none') ? $('.txt_get_the_newsletter').css('background-position','0px 0px') :  $('.txt_get_the_newsletter').css('background-position','0px -11px');
	}

 
	
}



/*  ---------------------- Ajax Functions -------------------------------------- */

DailybeastAjax._sCheetahAjaxServer = '';

DailybeastAjax.getFavorites = function(){
	DailybeastAjax._xArgs.data = 'a=getFavorites';
	
	DailybeastAjax._xArgs.returnDiv = '#popup_saved_content';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}

DailybeastAjax.removeFavorite = function(id, items_id){
	DailybeastAjax._xArgs.data = 'a=removeFavorite';
	DailybeastAjax._xArgs.data += '&id='+id;
	DailybeastAjax._xArgs.data += '&items_id='+items_id;
    
	DailybeastAjax._xArgs.returnDiv = '#popup_saved_content';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}

DailybeastAjax.addFavorite = function(items_id){

	DailybeastAjax._xArgs.data = 'a=addFavorite';
	DailybeastAjax._xArgs.data += '&items_id='+items_id;
    
	DailybeastAjax._xArgs.returnDiv = '#popup_saved_content';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}


DailybeastAjax.getAccountPage = function(){
	DailybeastAjax._xArgs.data = 'a=getAccountPage';
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');	

}

DailybeastAjax.logout = function(){
	DailybeastAjax._xArgs.data = 'a=logoutUser';
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');	

}

DailybeastAjax.register = function(){	
	f = document.getElementById('register_form');
	 
    DailybeastAjax._xArgs.data = 'a=createUser'; 
    DailybeastAjax._xArgs.data += '&firstName='+escape($.trim(f.elements['firstName'].value));
    DailybeastAjax._xArgs.data += '&lastName='+escape($.trim(f.elements['lastName'].value));	
    DailybeastAjax._xArgs.data += '&email='+encodeURIComponent($.trim(f.elements['email'].value));	
	DailybeastAjax._xArgs.data += '&username='+escape($.trim(f.elements['username'].value));
    DailybeastAjax._xArgs.data += '&password='+escape($.trim(f.elements['password'].value));
    DailybeastAjax._xArgs.data += '&password2='+escape($.trim(f.elements['password2'].value));
    DailybeastAjax._xArgs.data += '&year='+escape(f.elements['year'].value);
	DailybeastAjax._xArgs.data += '&month='+escape(f.elements['month'].value);
	DailybeastAjax._xArgs.data += '&day='+escape(f.elements['day'].value);	
    DailybeastAjax._xArgs.data += '&zip='+escape(f.elements['zip'].value);	
    DailybeastAjax._xArgs.data += '&country='+escape(f.elements['country'].value);	
	 
	if(f.elements['subscribe'].checked)
		DailybeastAjax._xArgs.data += '&subscribe=y';
	else
		DailybeastAjax._xArgs.data += '&subscribe=n';	
		
	if(f.elements['subscribe_cultural'].checked)
		DailybeastAjax._xArgs.data += '&subscribe_cultural=y';
	else
		DailybeastAjax._xArgs.data += '&subscribe_cultural=n';		
				  
	if(f.elements['emailsignup_radio_formsupport_radio2'].checked){
		DailybeastAjax._xArgs.data += '&email_type=html';
	} else{
		DailybeastAjax._xArgs.data += '&email_type=text';
	}
	 
	if(f.elements['unshareinfo'].checked)
		DailybeastAjax._xArgs.data += '&unshareinfo=y';
	else
		DailybeastAjax._xArgs.data += '&unshareinfo=n';	
	
    DailybeastAjax._xArgs.returnDiv = '';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.register_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');	
}

DailybeastAjax.register_callback = function(){	
	enableRegisterForm();	
	$('#return_div').html(DailybeastAjax.returnVar);
}

function removeRegisterSuccess(){
	setTimeout(function(){
		$('#register_success').fadeOut();
	},2000);
}

function ageFail (){
	alert('If you are under the age of 13, you may not register for this site.');
	//setTimeout('redirect()', 5000);	
}

function redirect(){
	window.location = "https://web.archive.org/web/20110405084925/http://www.google.com";	
}

DailybeastAjax.update = function(){
	f = document.getElementById('accountpage_form');
	if(f.elements['cancel'].checked){
		DailybeastAjax._xArgs.data = 'a=cancelAccount';
		DailybeastAjax._xArgs.data += '&explanation='+escape(f.elements['explanation'].value);	
	} else {
		DailybeastAjax._xArgs.data = 'a=updateUser';
		DailybeastAjax._xArgs.data += '&firstName='+escape(f.elements['firstName'].value);
		DailybeastAjax._xArgs.data += '&lastName='+escape(f.elements['lastName'].value);	
		DailybeastAjax._xArgs.data += '&email='+encodeURIComponent(f.elements['email'].value);			
		//DailybeastAjax._xArgs.data += '&username='+escape(f.elements['username'].value);
		DailybeastAjax._xArgs.data += '&password='+escape(f.elements['password'].value);
		DailybeastAjax._xArgs.data += '&password2='+escape(f.elements['password2'].value);
		DailybeastAjax._xArgs.data += '&password_old='+escape(f.elements['password_old'].value);
		DailybeastAjax._xArgs.data += '&year='+escape(f.elements['year'].value);
		DailybeastAjax._xArgs.data += '&month='+escape(f.elements['month'].value);
		DailybeastAjax._xArgs.data += '&day='+escape(f.elements['day'].value);	
		DailybeastAjax._xArgs.data += '&zip='+escape(f.elements['zip'].value);	
		DailybeastAjax._xArgs.data += '&country='+escape(f.elements['country'].value);			
		DailybeastAjax._xArgs.data += '&original_subscription='+escape(f.elements['original_subscription'].value);
		DailybeastAjax._xArgs.data += '&original_type='+escape(f.elements['original_type'].value);
		DailybeastAjax._xArgs.data += '&original_cultural_subscription='+escape(f.elements['original_cultural_subscription'].value);
		if(f.elements['subscribe'].checked)
			DailybeastAjax._xArgs.data += '&subscribe=y';
		else
			DailybeastAjax._xArgs.data += '&subscribe=n';		
		
		if(f.elements['subscribe_cultural'].checked)
			DailybeastAjax._xArgs.data += '&subscribe_cultural=y';
		else
			DailybeastAjax._xArgs.data += '&subscribe_cultural=n';		
			
		if(f.elements['unshareinfo'].checked)
			DailybeastAjax._xArgs.data += '&unshareinfo=y';
		else
			DailybeastAjax._xArgs.data += '&unshareinfo=n';		
		
		if(document.getElementById('acct_radio1').checked){
			DailybeastAjax._xArgs.data += '&email_type=html';
		} else{
			DailybeastAjax._xArgs.data += '&email_type=text';
		}
	
		
	}
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.update_callback;
    DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}

DailybeastAjax.update_callback = function(){	
	enableUpdateForm();	
}

DailybeastAjax.accountpageUpdate = function(){
	f = document.getElementById('accountpage_form');
	if(f.elements['cancel'].checked){
		DailybeastAjax._xArgs.data = 'a=cancelAccount';
		//DailybeastAjax._xArgs.data += '&explanation='+escape(f.elements['explanation'].value);	
	} else {
		DailybeastAjax._xArgs.data = 'a=updateAccountpage';
		DailybeastAjax._xArgs.data += '&firstName='+escape(f.elements['firstName'].value);
		DailybeastAjax._xArgs.data += '&lastName='+escape(f.elements['lastName'].value);	
		DailybeastAjax._xArgs.data += '&email='+encodeURIComponent(f.elements['email'].value);			
		DailybeastAjax._xArgs.data += '&username='+escape(f.elements['username'].value);
		DailybeastAjax._xArgs.data += '&password='+escape(f.elements['password'].value);
		DailybeastAjax._xArgs.data += '&password2='+escape(f.elements['password2'].value);
		DailybeastAjax._xArgs.data += '&password_old='+escape(f.elements['password_old'].value);
		DailybeastAjax._xArgs.data += '&year='+escape(f.elements['year'].value);
		DailybeastAjax._xArgs.data += '&month='+escape(f.elements['month'].value);
		DailybeastAjax._xArgs.data += '&day='+escape(f.elements['day'].value);	
		DailybeastAjax._xArgs.data += '&zip='+escape(f.elements['zip'].value);	
		DailybeastAjax._xArgs.data += '&country='+escape(f.elements['country'].value);			
		DailybeastAjax._xArgs.data += '&original_subscription='+escape(f.elements['original_subscription'].value);
		DailybeastAjax._xArgs.data += '&original_type='+escape(f.elements['original_type'].value);
		DailybeastAjax._xArgs.data += '&original_cultural_subscription='+escape(f.elements['original_cultural_subscription'].value);
		
		if(f.elements['subscribe'].checked)
			DailybeastAjax._xArgs.data += '&subscribe=y';
		else
			DailybeastAjax._xArgs.data += '&subscribe=n';		
			
		if(f.elements['subscribe_cultural'].checked)
			DailybeastAjax._xArgs.data += '&subscribe_cultural=y';
		else
			DailybeastAjax._xArgs.data += '&subscribe_cultural=n';		
				  
		if(f.elements['unshareinfo'].checked)
			DailybeastAjax._xArgs.data += '&unshareinfo=y';
		else
			DailybeastAjax._xArgs.data += '&unshareinfo=n';		
		
		if(document.getElementById('acct_radio2').checked){
			DailybeastAjax._xArgs.data += '&email_type=html';
		} else{
			DailybeastAjax._xArgs.data += '&email_type=text';
		}
	}
	
	//alert(DailybeastAjax._xArgs.data);
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.accountpageUpdate_callback;
    DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}

DailybeastAjax.accountpageUpdate_callback = function(){	
	if($(document).getUrlParam("redirectUrl")!=null){
		document.location.href=unescape(unescape($(document).getUrlParam("redirectUrl")));
	}
	else{
		enableAccountpageUpdateForm();	
		displayAccountPage();
		$('#acctpageSwitch').attr('class','view');
	}
}



DailybeastAjax.login = function(){
	f = document.getElementById('login_form');
	if(f.elements['forgot'].checked){
		DailybeastAjax._xArgs.data = 'a=forgotPassword';
    	DailybeastAjax._xArgs.data += '&encodeURIComponent='+encodeURIComponent(f.elements['username'].value);	
	} else if(f.elements['forgotusername'].checked){
		DailybeastAjax._xArgs.data = 'a=forgotUsername';
    	DailybeastAjax._xArgs.data += '&encodeURIComponent='+encodeURIComponent(f.elements['username'].value);	
	} else {
		DailybeastAjax._xArgs.data = 'a=loginUser';
		DailybeastAjax._xArgs.data += '&username='+encodeURIComponent(f.elements['username'].value);
		DailybeastAjax._xArgs.data += '&password='+escape(f.elements['password'].value);
	}	

	DailybeastAjax._xArgs.returnDiv = '#return_div';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.login_callback;
    DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}

DailybeastAjax.login_callback = function(){	
	enableLoginForm();	
}

DailybeastAjax.feedback = function(){
	f = document.getElementById('feedback_form');
	
	DailybeastAjax._xArgs.data = 'a=feedback';
	DailybeastAjax._xArgs.data += '&feedback='+escape(f.elements['feedback'].value);
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;	
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');

}

DailybeastAjax.email_author_submit = function(){
	f = document.getElementById('email_author_form');
	
	DailybeastAjax._xArgs.data = 'a=email_author';
	DailybeastAjax._xArgs.data += '&authorid='+document.authorId;
	DailybeastAjax._xArgs.data += '&email_txt='+escape(f.elements['email_txt'].value);
	DailybeastAjax._xArgs.data += '&subject_txt='+escape(f.elements['subject_txt'].value);
	DailybeastAjax._xArgs.data += '&feed_txt='+escape(f.elements['feed_txt'].value);
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;	
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');

}



DailybeastAjax.submitNewStory = function(){
	f = document.getElementById('form_newstory');

	DailybeastAjax._xArgs.data = 'a=submitNewStory';
	DailybeastAjax._xArgs.data += '&link='+escape(f.elements['link'].value);
	DailybeastAjax._xArgs.data += '&explanation='+escape(f.elements['explanation'].value);

	DailybeastAjax._xArgs.returnDiv = '#return_div';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}
DailybeastAjax.submitNewStory2 = function(){
	f = document.getElementById('form_newstory2');

	DailybeastAjax._xArgs.data = 'a=submitNewStory2';
	DailybeastAjax._xArgs.data += '&link='+escape(f.elements['link'].value);
	DailybeastAjax._xArgs.data += '&explanation='+escape(f.elements['explanation'].value);

	DailybeastAjax._xArgs.returnDiv = '#return_div';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}

DailybeastAjax.submitBetterLink = function(id){
	f = document.getElementById('form_betterlink_'+id);

	DailybeastAjax._xArgs.data = 'a=submitBetterLink';
	DailybeastAjax._xArgs.data += '&id='+escape(f.elements['id'].value);	
	DailybeastAjax._xArgs.data += '&link='+escape(f.elements['link'].value);
	DailybeastAjax._xArgs.data += '&explanation='+escape(f.elements['explanation'].value);

	DailybeastAjax._xArgs.returnDiv = '#return_div';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.feedback_callback;
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}

DailybeastAjax.shareLink = function(id){
	f = document.getElementById('form_sharelink_'+id);

	DailybeastAjax._xArgs.data = 'a=shareLink';
	DailybeastAjax._xArgs.data += '&id='+escape(f.elements['id'].value);	
	DailybeastAjax._xArgs.data += '&your_email='+escape(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	//DailybeastAjax._xArgs.data += '&their_name='+encodeURIComponent(f.elements['their_name'].value);
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}

DailybeastAjax.shareGalleryLink = function(){
	f = document.getElementById('form_sharelink_gallery');

	DailybeastAjax._xArgs.data = 'a=shareGalleryLink';
	DailybeastAjax._xArgs.data += '&url='+document.submittableurl;	
	DailybeastAjax._xArgs.data += '&your_email='+escape(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}

DailybeastAjax.shareAllFromAcct = function(){
	f = document.getElementById('form_sharelink_');

	DailybeastAjax._xArgs.data = 'a=shareAllFromAcct';
	DailybeastAjax._xArgs.data += '&your_email='+escape(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
	DailybeastAjax._xArgs.data += '&userId='+document.accountId;
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	
	
	//DailybeastAjax._xArgs.data += '&their_name='+encodeURIComponent(f.elements['their_name'].value);
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}


DailybeastAjax.shareLinkFromAccount = function(id){
	f = document.getElementById('form_sharelink_'+id);

	DailybeastAjax._xArgs.data = 'a=shareLinkFromAccount';
	DailybeastAjax._xArgs.data += '&id='+escape(f.elements['cheat_id'].value);	
	DailybeastAjax._xArgs.data += '&acctpageid='+escape(f.elements['id'].value);	
	DailybeastAjax._xArgs.data += '&your_email='+escape(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	//DailybeastAjax._xArgs.data += '&their_name='+encodeURIComponent(f.elements['their_name'].value);

	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
}

DailybeastAjax.shareBuzzLink = function(id){
	f = document.getElementById('form_sharelink_'+id);

	DailybeastAjax._xArgs.data = 'a=shareBuzzLink';
	DailybeastAjax._xArgs.data += '&id='+escape(f.elements['id'].value);	
	DailybeastAjax._xArgs.data += '&your_email='+escape(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	//DailybeastAjax._xArgs.data += '&their_name='+encodeURIComponent(f.elements['their_name'].value);

	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}



DailybeastAjax.shareAllCheatNewsmakers = function(){
	f = document.getElementById('form_sharelink_');

	DailybeastAjax._xArgs.data = 'a=shareAllCheatNewsmakers';
	DailybeastAjax._xArgs.data += '&p_nNewsmakerId='+document.newsmakerid;
	
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	//DailybeastAjax._xArgs.data += '&their_name='+escape(f.elements['their_name'].value);

	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}

DailybeastAjax.shareAll = function(){
	f = document.getElementById('form_sharelink_');
	DailybeastAjax._xArgs.data = 'a=shareAll';
	DailybeastAjax._xArgs.data += '&year='+escape(f.elements['year'].value);		
	DailybeastAjax._xArgs.data += '&month='+escape(f.elements['month'].value);
	DailybeastAjax._xArgs.data += '&day='+escape(f.elements['day'].value);	
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}

DailybeastAjax.shareBlog = function(id){
	DailybeastAjax._xArgs.data='a=shareBlog';;
	var $inputs = $("#form_sharelink_"+id+" :input");
	$inputs.each(function() {
		if(this.name){
			DailybeastAjax._xArgs.data += '&'+encodeURIComponent(this.name)+'='+ encodeURIComponent($(this).val());
		}
	});
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}

DailybeastAjax.shareBlogBottom = function(id){
	f = document.getElementById('form_sharelink_'+id+'_bottom');
	DailybeastAjax._xArgs.data = 'a=shareBlogBottom';
	DailybeastAjax._xArgs.data += '&id='+escape(f.elements['id'].value);	
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}


DailybeastAjax.shareNominates = function(){
	f = document.getElementById('form_sharelink_nominates');

	DailybeastAjax._xArgs.data = 'a=shareNominates';
	DailybeastAjax._xArgs.data += '&id='+escape(f.elements['id'].value);	
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	DailybeastAjax._xArgs.data += '&permalink='+document._sPermalink
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}


DailybeastAjax.shareNewsreel = function(id){
	f = document.getElementById('form_sharelink_'+id);

	DailybeastAjax._xArgs.data = 'a=shareNewsreel';
	DailybeastAjax._xArgs.data += '&id='+escape(f.elements['id'].value);
	DailybeastAjax._xArgs.data += '&deeplink='+escape(f.elements['deeplink'].value);
	DailybeastAjax._xArgs.data += '&title='+escape(f.elements['title'].value);	
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	//DailybeastAjax._xArgs.data += '&their_name='+escape(f.elements['their_name'].value);
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
}

DailybeastAjax.shareTweet = function(id){
	var l_sTweeterName = $('#tweet-top-holder .tweet-title').html();
	f = document.getElementById('form_sharelink_'+id);
	DailybeastAjax._xArgs.data = 'a=shareTweet';
	DailybeastAjax._xArgs.data += '&id='+escape(f.elements['id'].value);
	DailybeastAjax._xArgs.data += '&deeplink='+escape(f.elements['deeplink'].value);
	DailybeastAjax._xArgs.data += '&title='+escape(f.elements['title'].value);	
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
	DailybeastAjax._xArgs.data += '&tweeter_name='+encodeURIComponent(l_sTweeterName);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	//DailybeastAjax._xArgs.data += '&their_name='+escape(f.elements['their_name'].value);
	
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax.makeAjaxCall(DailybeastAjax._sCheetahAjaxServer + '/include/app/user/action.php');
};/* Simple Set Clipboard System
 Author: Joseph Huckaby */

var ZeroClipboard = {
	
	version: "1.0.4",
	clients: {}, /* registered upload clients on page, indexed by id*/
	moviePath: 'ZeroClipboard.swf', /* URL to movie*/
	nextId: 1, /* ID of next movie*/
	
	$: function(thingy) {
		/* simple DOM lookup utility function*/
		if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
		if (!thingy.addClass) {
			// extend element with a few useful methods
			thingy.hide = function() { this.style.display = 'none'; };
			thingy.show = function() { this.style.display = ''; };
			thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
			thingy.removeClass = function(name) {
				this.className = this.className.replace( new RegExp("\\s*" + name + "\\s*"), " ").replace(/^\s+/, '').replace(/\s+$/, '');
			};
			thingy.hasClass = function(name) {
				return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
			}
		}
		return thingy;
	},
	
	setMoviePath: function(path) {
		/* set path to ZeroClipboard.swf*/
		this.moviePath = path;
	},
	
	dispatch: function(id, eventName, args) {
		/*receive event from flash movie, send to client	*/	
		var client = this.clients[id];
		if (client) {
			client.receiveEvent(eventName, args);
		}
	},
	
	register: function(id, client) {
		/* register new client to receive events*/
		this.clients[id] = client;
	},
	
	getDOMObjectPosition: function(obj) {
	/* get absolute coordinates for dom element*/
		var info = {
			left: 0, 
			top: 0, 
			width: obj.width ? obj.width : obj.offsetWidth, 
			height: obj.height ? obj.height : obj.offsetHeight
		};

		while (obj) {
			info.left += obj.offsetLeft;
			info.top += obj.offsetTop;
			obj = obj.offsetParent;
		}

		return info;
	},
	
	Client: function(elem) {
		/* constructor for new simple upload client*/
		this.handlers = {};
		
		/* unique ID*/
		this.id = ZeroClipboard.nextId++;
		this.movieId = 'ZeroClipboardMovie_' + this.id;
		
		/* register client with singleton to receive flash events*/
		ZeroClipboard.register(this.id, this);
		
		/*create movie*/
		if (elem) this.glue(elem);
	}
};

ZeroClipboard.Client.prototype = {
	
	id: 0, // unique ID for us
	ready: false, // whether movie is ready to receive events or not
	movie: null, // reference to movie object
	clipText: '', // text to copy to clipboard
	handCursorEnabled: true, // whether to show hand cursor, or default pointer cursor
	cssEffects: true, // enable CSS mouse effects on dom container
	handlers: null, // user event handlers
	
	glue: function(elem) {
		// glue to DOM element
		// elem can be ID or actual DOM element object
		this.domElement = ZeroClipboard.$(elem);
		
		// float just above object, or zIndex 99 if dom element isn't set
		var zIndex = 999;
		if (this.domElement.style.zIndex) {
			zIndex = parseInt(this.domElement.style.zIndex) + 1;
		}
		
		// find X/Y position of domElement
		var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
		
		// create floating DIV above element
		this.div = document.createElement('div');
		this.div.setAttribute("id", "zeroclipboard");
		var style = this.div.style;
		style.position = 'absolute';
		style.left = '' + box.left + 'px';
		style.top = '' + box.top + 'px';
		style.width = '' + box.width + 'px';
		style.height = '' + box.height + 'px';
		style.zIndex = zIndex;
		
		// style.backgroundColor = '#f00'; // debug
		
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(this.div);
		
		this.div.innerHTML = this.getHTML( box.width, box.height );
	},
	
	getHTML: function(width, height) {
		// return HTML for movie
		var html = '';
		var flashvars = 'id=' + this.id + 
			'&width=' + width + 
			'&height=' + height;
			
		if (navigator.userAgent.match(/MSIE/)) {
			// IE gets an OBJECT tag
			var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
			html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';
		}
		else {
			// all other browsers get an EMBED tag
			html += '<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="https://web.archive.org/web/20110405084925/http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';
		}
		return html;
	},
	
	hide: function() {
		// temporarily hide floater offscreen
		if (this.div) {
			this.div.style.left = '-2000px';
		}
	},
	
	show: function() {
		// show ourselves after a call to hide()
		this.reposition();
	},
	
	destroy: function() {
		// destroy control and floater
		if (this.domElement && this.div) {
			this.hide();
			this.div.innerHTML = '';
			
			var body = document.getElementsByTagName('body')[0];
			try { body.removeChild( this.div ); } catch(e) {;}
			
			this.domElement = null;
			this.div = null;
		}
	},
	
	reposition: function(elem) {
		// reposition our floating div, optionally to new container
		// warning: container CANNOT change size, only position
		if (elem) {
			this.domElement = ZeroClipboard.$(elem);
			if (!this.domElement) this.hide();
		}
		
		if (this.domElement && this.div) {
			var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
			var style = this.div.style;
			style.left = '' + box.left + 'px';
			style.top = '' + box.top + 'px';
		}
	},
	
	setText: function(newText) {
		// set text to be copied to clipboard
		this.clipText = newText;
		if (this.ready) this.movie.setText(newText);
	},
	
	addEventListener: function(eventName, func) {
		// add user event listener for event
		// event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
		if (!this.handlers[eventName]) this.handlers[eventName] = [];
		this.handlers[eventName].push(func);
	},
	
	setHandCursor: function(enabled) {
		// enable hand cursor (true), or default arrow cursor (false)
		this.handCursorEnabled = enabled;
		if (this.ready) this.movie.setHandCursor(enabled);
	},
	
	setCSSEffects: function(enabled) {
		// enable or disable CSS effects on DOM container
		this.cssEffects = !!enabled;
	},
	
	receiveEvent: function(eventName, args) {
		// receive event from flash
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
				
		// special behavior for certain events
		switch (eventName) {
			case 'load':
				// movie claims it is ready, but in IE this isn't always the case...
				// bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
				this.movie = document.getElementById(this.movieId);
				if (!this.movie) {
					var self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 1 );
					return;
				}
				
				// firefox on pc needs a "kick" in order to set these in certain cases
				if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
					var self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 100 );
					this.ready = true;
					return;
				}
				
				this.ready = true;
				this.movie.setText( this.clipText );
				this.movie.setHandCursor( this.handCursorEnabled );
				break;
			
			case 'mouseover':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('hover');
					if (this.recoverActive) this.domElement.addClass('active');
				}
				break;
			
			case 'mouseout':
				if (this.domElement && this.cssEffects) {
					this.recoverActive = false;
					if (this.domElement.hasClass('active')) {
						this.domElement.removeClass('active');
						this.recoverActive = true;
					}
					this.domElement.removeClass('hover');
				}
				break;
			
			case 'mousedown':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('active');
				}
				break;
			
			case 'mouseup':
				if (this.domElement && this.cssEffects) {
					this.domElement.removeClass('active');
					this.recoverActive = false;
				}
				break;
		} // switch eventName
		
		if (this.handlers[eventName]) {
			for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
				var func = this.handlers[eventName][idx];
			
				if (typeof(func) == 'function') {
					// actual function reference
					func(this, args);
				}
				else if ((typeof(func) == 'object') && (func.length == 2)) {
					// PHP style object + method, i.e. [myObject, 'myMethod']
					func[0][ func[1] ](this, args);
				}
				else if (typeof(func) == 'string') {
					// name of function
					window[func](this, args);
				}
			} // foreach event handler defined
		} // user defined handler for event
	}
	
};;var _nCalendarZIndex = 80;
initCalendar = function(){
	
	setCalendar();
	
	$('#calendar_btn').click( function(){ 
		$(".popup_sharelink").hide();
		$('#thecalendar').toggle() 
		
	
	});
	$('#calendar_btn2').click( function(){ 
		$(".popup_sharelink").hide();
		//$('.bottom_rows').css('z-index',_nCalendarZIndex++); 
		$('#thecalendar2').toggle(); 
		//$('#thecalendar2').css('z-index',_nCalendarZIndex++); 
	});
}

setCalendar = function(){
	
	$('#cheatsheet #thecalendar .cal_right,#cheatsheet #thecalendar  .cal_left').click(function(){  
		
		DailybeastAjax.changeCheatCalendar( 
			$(this).attr('rel'),  
			$('#thecalendar').find('.currentyear').html(),
			$('#thecalendar').find('.currentmonth').html(),
			$('#thecalendar').find('.currentday').html()
		);
		
	});
	
	$('#cheatsheet #thecalendar2 .cal_right,#cheatsheet #thecalendar2  .cal_left').click(function(){  
		
		DailybeastAjax.changeCheatCalendar( 
			$(this).attr('rel'),  
			$('#thecalendar').find('.currentyear').html(),
			$('#thecalendar').find('.currentmonth').html(),
			$('#thecalendar').find('.currentday').html(),
			true
		);
		
	});
	
	$('#blogsstories_archives #thecalendar .cal_right,#blogsstories_archives #thecalendar  .cal_left').click(function(){  
		
		DailybeastAjax.changeBlogsArchiveCalendar( 
			$(this).attr('rel'),  
			$('#thecalendar').find('.currentyear').html(),
			$('#thecalendar').find('.currentmonth').html(),
			$('#thecalendar').find('.currentday').html()
		);
		
	});
	
	$('#videopage #thecalendar .cal_right, #videopage #thecalendar  .cal_left').click(function(){  
		
		DailybeastAjax.changeVideopageCalendar( 
			$(this).attr('rel'),  
			$('#thecalendar').find('.currentyear').html(),
			$('#thecalendar').find('.currentmonth').html(),
			$('#thecalendar').find('.currentday').html()
		);
		
	});
	
	$('#coverspage #thecalendar .cal_right, #coverspage #thecalendar  .cal_left').click(function(){  
		
		DailybeastAjax.changeCoverspageCalendar( 
			$(this).attr('rel'),  
			$('#thecalendar').find('.currentyear').html(),
			$('#thecalendar').find('.currentmonth').html(),
			$('#thecalendar').find('.currentday').html()
		);
		
	});
}



/*  ---------------------- Ajax Functions -------------------------------------- */

DailybeastAjax.changeCheatCalendar = function(p_nMonthChange,p_nCurrentYear, p_nCurrentMonth, p_nCurrentDay, p_bIsCalenday2) {
    DailybeastAjax._xArgs.data = 'a=changeCheatCalendar';
    DailybeastAjax._xArgs.data += '&p_nMonthChange='+p_nMonthChange;
    DailybeastAjax._xArgs.data += '&p_nCurrentYear='+p_nCurrentYear;
    DailybeastAjax._xArgs.data += '&p_nCurrentMonth='+p_nCurrentMonth;
    DailybeastAjax._xArgs.data += '&p_nCurrentDay='+p_nCurrentDay;
	
	
	DailybeastAjax._xArgs.returnDiv = '#thecalendar';
	
	if(p_bIsCalenday2 == true)
		DailybeastAjax._xArgs.returnDiv = '#thecalendar2';
			
	DailybeastAjax._xArgs.loader = true;
	DailybeastAjax._xArgs.callBack = DailybeastAjax.changeCheatCalendar_callback;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}



DailybeastAjax.changeCheatCalendar_callback = function(){
	setCalendar();
}


DailybeastAjax.changeBlogsArchiveCalendar = function(p_nMonthChange,p_nCurrentYear, p_nCurrentMonth, p_nCurrentDay) {
    DailybeastAjax._xArgs.data = 'a=changeBlogsArchiveCalendar';
    DailybeastAjax._xArgs.data += '&p_nMonthChange='+p_nMonthChange;
    DailybeastAjax._xArgs.data += '&p_nCurrentYear='+p_nCurrentYear;
    DailybeastAjax._xArgs.data += '&p_nCurrentMonth='+p_nCurrentMonth;
    DailybeastAjax._xArgs.data += '&p_nCurrentDay='+p_nCurrentDay;
	
	DailybeastAjax._xArgs.returnDiv = '#thecalendar';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.changeBlogsArchiveCalendar_callback;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}



DailybeastAjax.changeBlogsArchiveCalendar_callback = function(){
	setCalendar();
}


DailybeastAjax.changeVideopageCalendar = function(p_nMonthChange,p_nCurrentYear, p_nCurrentMonth, p_nCurrentDay) {
    DailybeastAjax._xArgs.data = 'a=changeVideopageCalendar';
    DailybeastAjax._xArgs.data += '&p_nMonthChange='+p_nMonthChange;
    DailybeastAjax._xArgs.data += '&p_nCurrentYear='+p_nCurrentYear;
    DailybeastAjax._xArgs.data += '&p_nCurrentMonth='+p_nCurrentMonth;
    DailybeastAjax._xArgs.data += '&p_nCurrentDay='+p_nCurrentDay;
	
	DailybeastAjax._xArgs.returnDiv = '#thecalendar';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.changeVideopageCalendar_callback;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}



DailybeastAjax.changeVideopageCalendar_callback = function(){
	setCalendar();
}


DailybeastAjax.changeCoverspageCalendar = function(p_nMonthChange,p_nCurrentYear, p_nCurrentMonth, p_nCurrentDay) {
    DailybeastAjax._xArgs.data = 'a=changeCoverspageCalendar';
    DailybeastAjax._xArgs.data += '&p_sNewsmakerSlug='+document.newsmakerslug;
    DailybeastAjax._xArgs.data += '&p_nMonthChange='+p_nMonthChange;
    DailybeastAjax._xArgs.data += '&p_nCurrentYear='+p_nCurrentYear;
    DailybeastAjax._xArgs.data += '&p_nCurrentMonth='+p_nCurrentMonth;
    DailybeastAjax._xArgs.data += '&p_nCurrentDay='+p_nCurrentDay;
	
	DailybeastAjax._xArgs.returnDiv = '#thecalendar';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.changeCoverspageCalendar_callback;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}



DailybeastAjax.changeCoverspageCalendar_callback = function(){
	setCalendar();
};initCheatVote = function(){ 	
	
	$('#maincontent .thumbup').click(function(){ 
								 
		if(!$(this).parent().parent().children("a").children(".txt_current").html()){
			var voteOn = $(this).attr('rel');
			DailybeastAjax.voteCheat( voteOn , 1 );
			$(this).addClass("txt_current");
			$(this).parent().parent().children("a").children(".thumbup").removeClass("txt");
			$(this).parent().parent().children("a").children(".thumbdown").removeClass("txt");
			$(this).parent().parent().children("a").children(".thumbup").parent("a").removeAttr("href");
			$(this).parent().parent().children("a").children(".thumbdown").parent("a").removeAttr("href");
		}
		
	});
	
	$('#maincontent .thumbdown').click(function(){ 
   								
		if(!$(this).parent().parent().children("a").children(".txt_current").html()){
			var voteOn = $(this).attr('rel');
			DailybeastAjax.voteCheat( voteOn , -1 );
			$(this).addClass("txt_current");
			$(this).parent().parent().children("a").children(".thumbup").removeClass("txt");
			$(this).parent().parent().children("a").children(".thumbdown").removeClass("txt");
			$(this).parent().parent().children("a").children(".thumbup").parent("a").removeAttr("href");
			$(this).parent().parent().children("a").children(".thumbdown").parent("a").removeAttr("href");
		}
		
	});
	
};


initBigFatStoryVote = function(){

	
	$('#maincontent2 .thumbup').click(function(){ 
   		
		if(!$(this).parent().parent().parent().children(".vote_area").children("a").children(".txt_current").html()){
			var which = $(this).attr('rel');
			var moduleId = $(this).attr('mel');
			DailybeastAjax.voteBFS( which , moduleId );
			$(this).addClass("txt_current");
			$(this).parent().parent().parent().children(".vote_area").children("a").children(".thumbup").removeClass("txt");			
			$(this).parent().parent().parent().children(".vote_area").children("a").removeAttr("href");
			$(this).parent().parent().parent().children(".vote_area").children("a").removeAttr("href");
			
		}
		
	});
		
}



loadCheatVotes = function(){
	stringToSend = '';
	count=0;
	$('.cheatrow').each(function(){
		if(count)
			stringToSend += ',';
		stringToSend += $(this).attr('rel');
		count++;
	});
	
	if(count){
		DailybeastAjax.getCheatVotes(stringToSend);
	}
	
}

loadBeastVotes = function(){
	stringToSend = '';
	count=0;
	$('.table_holder').each(function(){
		if(count)
			stringToSend += ',';
		stringToSend += $(this).attr('rel');
		count++;
	});
	
	if(count){
		DailybeastAjax.getBeastVotes(stringToSend);
	}
	
}

/*  ---------------------- Ajax Functions -------------------------------------- */

DailybeastAjax.getCheatVotes = function(p_sCheatArray){
	DailybeastAjax._xArgs.data = 'a=getCheatVotes';
	DailybeastAjax._xArgs.data += '&p_sCheatArray='+p_sCheatArray;
	DailybeastAjax._xArgs.returnDiv = '#return_div';	
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax.makeAjaxCall(AJAX_URL);

}
DailybeastAjax.getBeastVotes = function(p_sBeastArray){
	DailybeastAjax._xArgs.data = 'a=getBeastVotes';
	DailybeastAjax._xArgs.data += '&p_sBeastArray='+p_sBeastArray;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '#return_div';		
	DailybeastAjax.makeAjaxCall(AJAX_URL);

}


DailybeastAjax.voteBFS = function(p_nWhich, p_nModuleId){
	DailybeastAjax._xArgs.data = 'a=voteBFS';
	DailybeastAjax._xArgs.data += '&p_nWhich='+p_nWhich;
	DailybeastAjax._xArgs.data += '&p_nModuleId='+p_nModuleId;
	DailybeastAjax._xArgs.returnDiv = '#return_div';		
	DailybeastAjax.makeAjaxCall(AJAX_URL);

}


DailybeastAjax.voteCheat = function(p_nCheatId, p_nVoteDirection){
	DailybeastAjax._xArgs.data = 'a=voteCheat';
	DailybeastAjax._xArgs.data += '&p_nCheatId='+p_nCheatId;
	DailybeastAjax._xArgs.data += '&p_nVoteDirection='+p_nVoteDirection;
	DailybeastAjax._xArgs.returnDiv = '#return_div';		
	DailybeastAjax.makeAjaxCall(AJAX_URL);

};$(document).ready(function(){ 
	 	   
});

DailybeastAjax.homePageVideo = function(page){
	DailybeastAjax._xArgs.data = 'a=pageVideo';
	DailybeastAjax._xArgs.data += '&page='+page;
	DailybeastAjax._xArgs.returnDiv = '#home_video_thumbs';
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.loader = true;
	DailybeastAjax._xArgs.callBack = DailybeastAjax.homePageVideo_callback;
	
	DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}


DailybeastAjax.homePageVideo_callback = function(){
	
	_xVideo.checkVideopageOverlays();	
}


g_bHomePageMoreLoad = false;

DailybeastAjax.homePageMore = function (page){
	
	if(!g_bHomePageMoreLoad){
		g_bHomePageMoreLoad = true;
		
		$('#list_one_pagination').html(  $('#list_one_reel_one .pagination_holder').html()  );
		$('#list_one_reel_one .pagination_holder').remove();
			
		$('#list_one').css('overflow','hidden');
		
		var currentlyOn = $('#list_one .current').html();
		$('#list_one_reel').width(800);
		
		if(parseInt(currentlyOn) > parseInt(page)){
			
			$('#list_one_reel_two').show();
			$('#list_one_reel_two').html( $('#list_one_reel_one').html() );
			$('#list_one_reel').css('left',-400);
			
			setTimeout( function(){ 
				DailybeastAjax.setLoaderOverlay('#list_one');
				DailybeastAjax._xArgs.data = 'a=pageMore';
				DailybeastAjax._xArgs.data += '&page='+page;
				DailybeastAjax._xArgs.returnDiv = '#list_one_reel_one';
				DailybeastAjax._xArgs.requestType = "GET"; 
				DailybeastAjax._xArgs.callBack = DailybeastAjax.homePageMore_callback_left;
				DailybeastAjax.makeAjaxCall('/include/ajax.php');
			},100 );
		}
		else{
			DailybeastAjax.setLoaderOverlay('#list_one');
			DailybeastAjax._xArgs.data = 'a=pageMore';
			DailybeastAjax._xArgs.data += '&page='+page;
			DailybeastAjax._xArgs.returnDiv = '#list_one_reel_two';
			DailybeastAjax._xArgs.requestType = "GET"; 
			DailybeastAjax._xArgs.loader = true;
			DailybeastAjax._xArgs.callBack = DailybeastAjax.homePageMore_callback_right;
			DailybeastAjax.makeAjaxCall('/include/ajax.php');
		}
	}
}

DailybeastAjax.homePageMore_callback_left = function(){
	$('#ajaxoverlay').remove();
	$('#ajaxloader').remove();
	
	$('#list_one_pagination').html(  $('#list_one_reel_one .pagination_holder').html()  );
	$('#list_one_reel_one .pagination_holder').empty()
	
	$('#list_one_reel').animate({
		left: 0 },600, function(){
			
			setTimeout( function(){ 
				$('#list_one_reel_two').html(''); 
				$('#list_one_reel').width(400);
				$('#list_one_reel_two').hide();
				$('#list_one').css('overflow','visible');
				
				//setInfoInterace('#list_one_reel');
				
				$('#list_one_reel_one .pagination_holder').html(  $('#list_one_pagination').html()  );
				$('#list_one_pagination').empty()
				g_bHomePageMoreLoad = false;
			},100 );
			
	});
	
}


DailybeastAjax.homePageMore_callback_right = function(){
	
	$('#ajaxoverlay').remove();
	$('#ajaxloader').remove();
	
	$('#list_one_pagination').html(  $('#list_one_reel_two .pagination_holder').html()  );
	$('#list_one_reel_two .pagination_holder').empty()
	
	
	$('#list_one_reel_two').show();
	$('#list_one_reel').animate({
		left: -400 },600, function(){
			
			$('#list_one_reel_one').html( $('#list_one_reel_two').html() );
			
			setTimeout( function(){ 
				$('#list_one_reel_two').html(''); 
				$('#list_one_reel').width(400);
				$('#list_one_reel').css('left',0);
				$('#list_one_reel_two').hide();
				$('#list_one').css('overflow','visible');
				
				//setInfoInterace('#list_one_reel');
				
				$('#list_one_reel_one .pagination_holder').html(  $('#list_one_pagination').html()  );
				$('#list_one_pagination').empty()
				g_bHomePageMoreLoad = false;
				
				
			},100 );
			
	});
	
}


g_bHomePageCheckLoad = false;

DailybeastAjax.homePageCheck = function (page){
	
	if(!g_bHomePageCheckLoad){
		g_bHomePageCheckLoad = true;
		
		$('#list_two_pagination').html(  $('#list_two_reel_one .pagination_holder').html()  );
		$('#list_two_reel_one .pagination_holder').remove();
		
		$('#list_two').css('overflow','hidden');
		
		var currentlyOn = $('#list_two .current').html();
		$('#list_two_reel').width(800);
		
		if(parseInt(currentlyOn) > parseInt(page)){
			
			$('#list_two_reel_two').show();
			$('#list_two_reel_two').html( $('#list_two_reel_one').html() );
			$('#list_two_reel').css('left',-400);
			
			setTimeout( function(){ 
				DailybeastAjax.setLoaderOverlay('#list_two');
				DailybeastAjax._xArgs.data = 'a=pageCheck';
				DailybeastAjax._xArgs.data += '&page='+page;
				DailybeastAjax._xArgs.returnDiv = '#list_two_reel_one';
				DailybeastAjax._xArgs.requestType = "GET"; 
				DailybeastAjax._xArgs.callBack = DailybeastAjax.homePageCheck_callback_left;
				DailybeastAjax.makeAjaxCall('/include/ajax.php');
			},100 );
		}
		else{
			DailybeastAjax.setLoaderOverlay('#list_two');
			DailybeastAjax._xArgs.data = 'a=pageCheck';
			DailybeastAjax._xArgs.data += '&page='+page;
			DailybeastAjax._xArgs.returnDiv = '#list_two_reel_two';
			DailybeastAjax._xArgs.requestType = "GET"; 
			DailybeastAjax._xArgs.loader = true;
			DailybeastAjax._xArgs.callBack = DailybeastAjax.homePageCheck_callback_right;
			DailybeastAjax.makeAjaxCall('/include/ajax.php');
		}
		
	}
}


DailybeastAjax.homePageCheck_callback_left = function(){
	$('#ajaxoverlay').remove();
	$('#ajaxloader').remove();
	
	$('#list_two_pagination').html(  $('#list_two_reel_one .pagination_holder').html()  );
	$('#list_two_reel_one .pagination_holder').empty()
	
	$('#list_two_reel').animate({
		left: 0 },600, function(){
			
			setTimeout( function(){ 
				$('#list_two_reel_two').html(''); 
				$('#list_two_reel').width(400);
				$('#list_two_reel_two').hide();
				$('#list_two').css('overflow','visible');
				
				//setInfoInterace('#list_two_reel');
				
				$('#list_two_reel_one .pagination_holder').html(  $('#list_two_pagination').html()  );
				$('#list_two_pagination').empty()
				
				g_bHomePageCheckLoad = false;
			},100 );
			
	});
	
}


DailybeastAjax.homePageCheck_callback_right = function(){
	$('#ajaxoverlay').remove();
	$('#ajaxloader').remove();
	
	$('#list_two_pagination').html(  $('#list_two_reel_two .pagination_holder').html()  );
	$('#list_two_reel_two .pagination_holder').empty()
	
	$('#list_two_reel_two').show();
	$('#list_two_reel').animate({
		left: -400 },600, function(){
			
			$('#list_two_reel_one').html( $('#list_two_reel_two').html() );
			
			setTimeout( function(){ 
				$('#list_two_reel_two').html(''); 
				$('#list_two_reel').width(400);
				$('#list_two_reel').css('left',0);
				$('#list_two_reel_two').hide();
				$('#list_two').css('overflow','visible');
				
				//setInfoInterace('#list_two_reel');
				
				$('#list_two_reel_one .pagination_holder').html(  $('#list_two_pagination').html()  );
				$('#list_two_pagination').empty()
				
				g_bHomePageCheckLoad = false;
				
			},100 );
			
	});
	
}



DailybeastAjax.homePageBeast = function (page){
	$('#beast_board_outside').height( $('#beast_board_outside').height() );
	$('#beast_board_outside').css( 'overflow','hidden');
	DailybeastAjax._xArgs.data = 'a=pageBeast';
	DailybeastAjax._xArgs.data += '&page='+page;
	DailybeastAjax._xArgs.returnDiv = '#beast_board_outside';
	DailybeastAjax._xArgs.callBack = DailybeastAjax.homePageBeast_callback;
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.loader = true;
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}

DailybeastAjax.homePageBeast_callback = function(){
	
	//setInfoInterace('');
	
	setTimeout(function(){
		$('#beast_board_outside').animate({
			height: $('#beast_board_inside').height()+'px'   },400, function(){
			$('#beast_board_outside').css( 'overflow','visible');
		});
	}, 10);
	
	
	
};_xMainFeature = {
	
	_bTmpPaused : false, 
	_nItemWidth : null, 
	_nCurrentId: 1,
	_nMaxItems: 1,
	_nActive: 0,
	_bQueueAdvance : false,
	_bPlaying: false,
	_bAutoPlay: true,
	_xTimer: null,
	_nTimeout: 6500,
	_nSpeed: 800, 
	_nMinContentHeight: 110,
	_bAnimating: false,
	_sDivHolder: null,
	init : function (p_sDiv,p_nWidth){
		this._sDivHolder = p_sDiv;
	  	this._nItemWidth = parseInt(p_nWidth);
		this._nMaxItems = parseInt($('#'+this._sDivHolder+' .display-holder .item').length);
		 
		//_xMainFeature.fixContentArea();
		//this.hideAllExcept(_xMainFeature._nCurrentId); 
	 	if($.browser.msie && $.browser.version < 8)
		 	document.getElementById('main-feature').attachEvent('onselectstart', _xMainFeature.fixSelect); 
	 	
		$('#'+this._sDivHolder+' .mainfeature_pagination .featurenav').click( function(){ 	_xMainFeature.viewItem(  parseInt($(this).attr('id').substr($(this).attr('id').lastIndexOf('_')+1,2)) );			return false; });		
		$('#'+this._sDivHolder+' .mainfeature_pagination a.next').click( function(){		_xMainFeature.viewItem(_xMainFeature._nCurrentId+1); 	return false; });
		$('#'+this._sDivHolder+' .mainfeature_pagination a.prev').click( function(){ 		_xMainFeature.viewItem(_xMainFeature._nCurrentId-1); 	return false; });
		$('#'+this._sDivHolder+' a.pause').click( function(){	_xMainFeature.pauseFeature();	return false; });
		$('#'+this._sDivHolder+' a.play').click( function(){	_xMainFeature.viewItem(_xMainFeature._nCurrentId+1); _xMainFeature.playFeature();	return false; });
		 
		$('#'+this._sDivHolder+' .featurenav').hover( function(){ $(this).addClass('hover');	},function(){ $(this).removeClass('hover');	});
		
		setTimeout( function(){ _xMainFeature.fixContentArea();  }, 200);
		setTimeout( function(){ _xMainFeature.fixContentArea(1);  }, 500);
		 
		$('#featurenav_'+_xMainFeature._nCurrentId).addClass('current');
		
		setTimeout( function(){ (_xMainFeature._bAutoPlay ) ? (_xMainFeature.playFeature()) : _xMainFeature.pauseFeature();  }, 10);
		
		
		
	},
	
	fixSelect : function(){
		return false;
	},
	 
	fixContentArea : function(p_nVal){
		
		$('#'+this._sDivHolder+' .display-holder .item').each( function() { 
			 if( $(this).children('.content-holder').length ){
				var l_xHolder = $(this).children('.content-holder');
				var l_xImage = $(this).find('.main-image');	
				var l_nHolderHeight = parseInt(l_xHolder.height());
				if(l_nHolderHeight < _xMainFeature._nMinContentHeight){
					l_nHolderHeight = _xMainFeature._nMinContentHeight;
					l_xHolder.height(l_nHolderHeight);
				}
				var l_xImageHeight = parseInt(l_xImage.attr('height'));
				if( !l_xImageHeight > 0)
					l_xImageHeight = parseInt(l_xImage.height());
						
				var l_nDiff = parseInt( parseInt($(this).height()) - l_xImageHeight - l_nHolderHeight);  
				if(l_nDiff < 0){
					 l_xHolder.css('top',(l_nDiff));
					 l_xHolder.css('position','relative');
				}
			 }
		}); 
		
		$('#'+this._sDivHolder+' .display-holder').width(this._nItemWidth*2);
		
		if(p_nVal == 1){
			if ( ($.browser.msie && $.browser.version <= 8)){
				this.hideAllExcept(_xMainFeature._nCurrentId); 
				$('#'+this._sDivHolder+' .feature-wrapper').css('overflow','visible');			 
			}
		}
 		
		
		
	},
	
	viewItem: function (p_nVal){
		_xMainFeature._bQueueAdvance = false;
		p_nVal = parseInt(p_nVal);
		if(p_nVal == this._nCurrentId)	return;
		
		if(!this._bAnimating){
			if(g_nVideoPlaying !== false){
				revertVideoWithImage();
			}
			
			
			this._bAnimating = !this._bAnimating;
			$('#'+this._sDivHolder+' .mainfeature_pagination .featurenav').removeClass('current');   										   
			$('#'+this._sDivHolder+' .feature-wrapper').css('overflow','hidden');
			
			var l_nSpecialCase = -1;

			if(p_nVal > this._nMaxItems)
					l_nSpecialCase = 1;
			else if(p_nVal <= 0)
					l_nSpecialCase = this._nMaxItems;
			  
			if(l_nSpecialCase != -1){
				this._nCurrentId = l_nSpecialCase;
				(l_nSpecialCase == 1) ? l_nMultiplier = 1 : l_nMultiplier = -1;
				$('#'+this._sDivHolder+' .display-holder #feature-item-'+this._nCurrentId).css('position','absolute').css('left',( l_nMultiplier * this._nItemWidth) ).show();
				$('#'+this._sDivHolder+' .display-holder').css('left', 0).animate( { 'left': -(( l_nMultiplier * this._nItemWidth)) }, _xMainFeature._nSpeed, function(){ _xMainFeature.finishedAnimationOverRotation() });	
				$('#featurenav_'+this._nCurrentId).addClass('current');				
				return;
			}
			if(document.all){
				if($("#feature-item-" + p_nVal).find("object").size() > 0){
					var parent = $("#feature-item-" + p_nVal).find("object").parent();
					var embed = $("#feature-item-" + p_nVal).find("object").clone();
					$("#feature-item-" + p_nVal).find("object").remove();
					parent.append(embed);
				}
			}
			
				 
			$('#featurenav_'+p_nVal).addClass('current');
			
			(p_nVal > this._nCurrentId) ? l_nDirection = -1 : l_nDirection = 1; 
			 
			$('#'+this._sDivHolder+' .display-holder .item').each( function() { 
				 
					var l_nPosition = parseInt($(this).attr('id').substr( $(this).attr('id').lastIndexOf('-')+1,1));
					if(l_nDirection < 0){
						if( l_nPosition != _xMainFeature._nCurrentId && l_nPosition > _xMainFeature._nCurrentId)
							$(this).hide();
					}else{
						if( l_nPosition != _xMainFeature._nCurrentId && l_nPosition < _xMainFeature._nCurrentId)
							$(this).hide();
					}
				 
			});
			  
			this._nCurrentId = p_nVal;
			$(window).trigger('ITEM_CHANGED');
			$('#'+this._sDivHolder+' .display-holder #feature-item-'+this._nCurrentId).show();
			var l_nNewPosition = -(this._nItemWidth);
			if(l_nDirection > 0){
				$('#'+this._sDivHolder+' .display-holder').css('left', -this._nItemWidth);
				l_nNewPosition = 0;
			} 			
			$('#'+this._sDivHolder+' .display-holder').animate( { 'left': l_nNewPosition }, _xMainFeature._nSpeed, function(){ _xMainFeature.finishedAnimation() });	
		}
	},
	
	hideAllExcept : function(p_nVal){
		$('#'+this._sDivHolder+' .display-holder .item').each( function() {  
		 	var l_nPosition = parseInt($(this).attr('id').substr( $(this).attr('id').lastIndexOf('-')+1,1));
		  	if( l_nPosition != p_nVal)
		   		$(this).hide();
		});
	},
	
	finishedAnimation: function (p_nVal){
		 
		this.hideAllExcept(_xMainFeature._nCurrentId);
		if( parseInt($('#'+this._sDivHolder+' .display-holder').css('left')) != 0){
			$('#'+this._sDivHolder+' .display-holder').css('left', 0);	
		}
		if ( ($.browser.msie && $.browser.version < 7)){
			$('#'+this._sDivHolder+' .feature-wrapper').css('overflow','visible');			 
		}
		this._bAnimating = false;
		this.setPlayTimer();
		 
	},
	
	finishedAnimationOverRotation: function (){
		 
		this.hideAllExcept(_xMainFeature._nCurrentId);
		$('#'+this._sDivHolder+' .display-holder #feature-item-'+_xMainFeature._nCurrentId).css('position','').css('left','');
		$('#'+this._sDivHolder+' .display-holder').css('left', 0);
		if ( ($.browser.msie && $.browser.version < 7)){
			$('#'+this._sDivHolder+' .feature-wrapper').css('overflow','visible');			 
		}
		this._bAnimating = false;
		this.setPlayTimer();
		 
	},
	
	playFeature : function(){
	//	this._bTmpPaused = false;
		$('#'+this._sDivHolder+' .pause').show();
		$('#'+this._sDivHolder+' .play').hide();
		this._bPlaying = true;
		this.setPlayTimer();
	},
	
	pauseFeature : function(){
		_xMainFeature._bQueueAdvance = false;
		this._bTmpPaused = false;
		this._bPlaying = false;
		$('#'+this._sDivHolder+' .pause').hide();
		$('#'+this._sDivHolder+' .play').show();
		clearTimeout(this._xTimer);
	},
	 
	 
	tmpPauseFeature : function(){
		if(this._bAutoPlay){
			this._bTmpPaused = true;
	//		clearTimeout(this._xTimer);
		}
	},
	
	revertFeature : function(){
		_xMainFeature._bTmpPaused = false;
		setTimeout(function(){
			if( !_xMainFeature._bTmpPaused ){
				if( _xMainFeature._bQueueAdvance ){
					_xMainFeature._bQueueAdvance = false;
					_xMainFeature.viewItem(_xMainFeature._nCurrentId+1);
					_xMainFeature.playFeature();
				}
				else
					_xMainFeature._bTmpPaused = false;
			}
		},200);
	},
	
	
	setPlayTimer: function(){
		if(this._bPlaying){
			clearTimeout(this._xTimer);
			this._xTimer = setTimeout(function(){
				if( _xMainFeature._bTmpPaused ){
					_xMainFeature._bQueueAdvance = true;
				}
				else
					_xMainFeature.viewItem(_xMainFeature._nCurrentId+1);
			}, this._nTimeout);
		}
	},
	
	hideControls : function(){
		$('#'+this._sDivHolder+' .mainfeature_pagination').hide();	
		$('#'+this._sDivHolder+' .pause').hide();
		$('#'+this._sDivHolder+' .play').hide();
	},
	
	showControls : function(){
		$('#'+this._sDivHolder+' .mainfeature_pagination').show();	
		(this._bPlaying) ? $('#'+this._sDivHolder+' .pause').show() : $('#'+this._sDivHolder+' .play').show();
	}
	 
}


// *************************** Code to support rollover pause is has moved to home.php and MainFeatureManager.php //


//******************* Code to support Video switch: //


var g_nVideoPlaying = false;

var replaceImageWithVideo = function(p_nId, p_sVidUri, l_nVidType, p_nWidth, p_nHeight){
	
	if(g_nVideoPlaying === false && !g_bCurrentlyRotating && !_xMainFeature._bAnimating ){
		
		var l_sVidUri = Base64.decode(p_sVidUri);
		
		/*var l_nVidType  = $('#vid_link_'+p_nId).attr('rev'); */
		//alert(1);
		g_nVideoPlaying = p_nId;
	
		/* check newsmaker */
		if(document.newsmakerid){
			pauseFeature();
			$('#main_feature_reel').find('#main_feature_current').find('#vid_link_'+p_nId).hide();
/*			$('#main_feature_reel').find('#main_feature_current').find('#content-holder_'+p_nId).hide();*/
			if(l_nVidType==1){
				l_sVidUri = document._sStaticServer + '/files/' + l_sVidUri;
				$('#main_feature_reel').find('#main_feature_current').find('#vid_holder_'+p_nId).html('<object width="469" height="275"><param name="movie" value="/swf/TheDailyBeastVideoPlayer.swf?r='+document._sReleaseVersion+'"></param><param name="quality" value="high">  </param>  <param name="menu" value="false">  </param>  <param name="wmode" value="transparent">  </param>  <param name="allowFullScreen" value="true">  </param>  <param name="allowScriptAccess" value="always">  </param>  <param name="flashvars" value="autoplay=true&mainfeature=true&newsmakerpage=true&video='+l_sVidUri+'&still=&title=">  </param>  <embed type="application/x-shockwave-flash" src="/swf/TheDailyBeastVideoPlayer.swf?r='+document._sReleaseVersion+'" id="tdbvideo" name="tdbvideo" bgcolor="#ffffff" quality="high" menu="false" wmode="transparent" allowFullScreen="true" allowScriptAccess="always" width="469" height="275" flashvars="autoplay=true&mainfeature=true&newsmakerpage=true&video='+l_sVidUri+'&still=&title="></embed></object>');
			}else{
				$('#main_feature_reel').find('#main_feature_current').find('#vid_holder_'+p_nId).html(_xVideo.resizeEmbbedVideo(l_sVidUri, p_nWidth, p_nHeight  ));
			}
		}else{
			_xMainFeature.pauseFeature();
			$('#vid_link_'+p_nId).hide();
			$('#vid_holder_'+p_nId).show();
/*			$('#content-holder_'+p_nId).hide();*/
			if(l_nVidType==1){
				l_sVidUri = document._sStaticServer + '/files/' + l_sVidUri;
				 
				$('#vid_holder_'+p_nId).html('<object width="397" height="330"><param name="movie" value="/swf/TheDailyBeastVideoPlayer.swf?r='+document._sReleaseVersion+'"></param><param name="quality" value="high">  </param>  <param name="menu" value="false">  </param>  <param name="wmode" value="transparent">  </param>  <param name="allowFullScreen" value="true">  </param>  <param name="allowScriptAccess" value="always">  </param>  <param name="flashvars" value="autoplay=true&mainfeature=true&video='+l_sVidUri+'&still=&title=">  </param>  <embed type="application/x-shockwave-flash" src="/swf/TheDailyBeastVideoPlayer.swf?r='+document._sReleaseVersion+'" id="tdbvideo" name="tdbvideo" bgcolor="#ffffff" quality="high" menu="false" wmode="transparent" allowFullScreen="true" allowScriptAccess="always" width="397" height="330" flashvars="autoplay=true&mainfeature=true&video='+l_sVidUri+'&still=&title="></embed></object>');
			}else{
				$('#vid_holder_'+p_nId).html( _xVideo.resizeEmbbedVideo(l_sVidUri, p_nWidth, p_nHeight )  );
			}
			
		}
	}
	
}

var revertVideoWithImage = function(){
	
	if(document.newsmakerid){
		$('#main_feature_reel').find('#main_feature_current').find('#vid_link_'+g_nVideoPlaying).show();
//		$('#main_feature_reel').find('#main_feature_current').find('#content-holder_'+g_nVideoPlaying).show();
		$('#main_feature_reel').find('#main_feature_current').find('#vid_holder_'+g_nVideoPlaying).empty();
	}else{
		$('#vid_link_'+g_nVideoPlaying).show();
//		$('#content-holder_'+g_nVideoPlaying).show();
		$('#vid_holder_'+g_nVideoPlaying).empty();
		$('#vid_holder_'+g_nVideoPlaying).hide();
	}
	
	
	g_nVideoPlaying  = false;
}





// **************************** Older (used on newsmaker):   //



var g_bTmpPaused = false;
var g_bQueueAdvance = false;
var g_bAutoRotate = true;
var timeoutObject;
var g_nPositionValue = 0;
var g_nTotalFeatures = 0;
var g_bCurrentlyRotating = false;
var g_nSlidingWidth = 0;

setMainFeature = function(){
	
	g_nSlidingWidth = 422;
	
	if( $('#newsmakerpage').length ){g_nSlidingWidth = 488;}
	
	
	g_nTotalFeatures = $('#featureholder .feature').length;
	
	$('#featureholder .feature_ad').each(function(){
		
		$(this).children('a').wrap('<div id="feature_'+ $(this).attr('rel') +'" class="feature"></div>');
		
	});
	
	
	$('#featureholder .featuretext').each(function(){
		$(this).attr('src',  $(this).attr('rev'));
		$(this).load (function(){
			$(this).height( $(this).height() );
			$(this).parent().height( $(this).height() );
		});
	});
	
	
	//alert(  $('#feature_0').html() );
	
	if( $('div#feature_0').length ){
		
		
		setTimeout(function(){
			$('#main_feature_current').html( $('#feature_0').html()  );
			if(! $('.featurecount_1').length ){
				setAutoRotate();
			}
			$('#featurenav_0').addClass('current');
			
			setTimeout(function(){
				fixCreditBox();
			},500);
		},100);
	
		
	}else{
		
	//	$('#feature_0 .featuretext_0').load(function(){
			
			setTimeout(function(){
				$('#main_feature_current').html( $('#feature_0').html()  );
				if(! $('.featurecount_1').length ){
					setAutoRotate();
				}
				$('#featurenav_0').addClass('current');
				
				setTimeout(function(){
					fixCreditBox();
				},500);
			},100);
			//fixCreditBox();
	//	});
	}
	
	
	$(' .featurenav').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
	
}

fixCreditBox = function(){
	//alert($('#main_feature_current .content').innerHeight());	
	l_nHeightImg = $('#main_feature_current .mainfeature-image').innerHeight();
	l_nHeightContent = $('#main_feature_current .content').innerHeight();
	l_nHeightTotal =  $('#main_feature_current').innerHeight();
	
	l_nChange = l_nHeightTotal - l_nHeightContent - l_nHeightImg -22;
	
	if( $('#newsmakerpage').length ){
		l_nChange = l_nHeightTotal - l_nHeightContent - l_nHeightImg -30;
	}
	
	if(l_nChange > 9){
		$('#main_feature_current .photo-credit').css('margin-top', 0-l_nChange);
	}
	$('#main_feature_current .photo-credit').show();
}

autoRotate = function(){
	if(! g_bCurrentlyRotating ){
		g_bAutoRotate = true;
		clearTimeout(timeoutObject);
		getNextFeature();
	}
}

rotateRight = function(){
	 
	clearTimeout(timeoutObject);
	
	$('#main_feature_reel').animate({
	  left: (0 - g_nSlidingWidth )
	}, 800,   function(){
		$('#main_feature_current').html( $('#main_feature_upcoming').html() );
		
		setTimeout(function(){
			$('#main_feature_reel').css('left','0px');
			g_bCurrentlyRotating = false;
			setAutoRotate();
			fixCreditBox();
		},400);
	});
	
}
rotateLeft = function(){
	 
	clearTimeout(timeoutObject);
	//fixCredits('main_feature_current');
	$('#main_feature_reel').animate({
	  left: 0
	}, 800,   function(){
		$('#main_feature_upcoming').html( $('#main_feature_current').html() );
		setTimeout(function(){
			g_bCurrentlyRotating = false;
			setAutoRotate();
			fixCreditBox();
		},200);
	});
	
}


pauseFeature = function(){
	g_bQueueAdvance = false;
	g_bTmpPaused = false;
	g_bAutoRotate = false;
	clearTimeout(timeoutObject);
	$('#main_feature').removeClass('show_pause');
	$('#main_feature').addClass('show_play');
}


playFeature = function(){
	if(g_nVideoPlaying !== false){
		revertVideoWithImage();
	}
//	g_bTmpPaused = false;
	g_bAutoRotate = true;
	autoRotate();
	$('#main_feature').removeClass('show_play');
	$('#main_feature').addClass('show_pause');
	
}

tmpPauseFeature = function(){
	
	if(g_bAutoRotate){
		g_bTmpPaused = true;
		//clearTimeout(timeoutObject);
	}
	
}


revertFeature = function(){
	g_bTmpPaused = false;
	setTimeout(function(){
		if(!g_bTmpPaused ){
			if(!g_bQueueAdvance){
				g_bTmpPaused = false;
			}
			else{
				g_bQueueAdvance = false;
				playFeature();
			}
			
		}
	},200);
}



setAutoRotate = function(){
	clearTimeout(timeoutObject);
	
	if(	g_bAutoRotate ){
		timeoutObject = setTimeout(function(){
			if(g_bTmpPaused){
				g_bQueueAdvance = true;
			}else{
				autoRotate();
			}
		}, 9000);
	}
	
}

jumpToFeature = function(p_nPos){
	
	if(! g_bCurrentlyRotating ){
		g_bQueueAdvance = false;
		
		if(g_nVideoPlaying !== false){
			revertVideoWithImage();
		}
		
		if(p_nPos != g_nPositionValue){
			
			g_bCurrentlyRotating = true;
			$('#featurenav_'+g_nPositionValue).removeClass('current');
			
			if(p_nPos < g_nPositionValue){
				g_nPositionValue = p_nPos;
				$('#featurenav_'+g_nPositionValue).addClass('current');
				
				
				$('#main_feature_upcoming').html( $('#main_feature_current').html() );
				setTimeout(function(){
					$('#main_feature_reel').css('left','-'+g_nSlidingWidth+'px');
				
					$('#main_feature_current').html( $('#feature_'+g_nPositionValue).html()  );
					setTimeout(function(){
						rotateLeft();
					},200);
				},200);
			}
			else{	
				g_nPositionValue = p_nPos;
				$('#featurenav_'+g_nPositionValue).addClass('current');
				
				$('#main_feature_upcoming').html( $('#feature_'+g_nPositionValue).html()  );
				setTimeout(function(){
					rotateRight();
				},100);
			}
		}
	}
}

getNextFeature = function(){
	
	if(! g_bCurrentlyRotating ){
		if(g_nVideoPlaying !== false){
			revertVideoWithImage();
		}
		g_bCurrentlyRotating = true;
		
		$('#featurenav_'+g_nPositionValue).removeClass('current')
		
		g_nPositionValue++;
		if(g_nPositionValue > g_nTotalFeatures-1) g_nPositionValue = 0;
		
		$('#featurenav_'+g_nPositionValue).addClass('current')
		
		clearTimeout(timeoutObject);
		
		$('#main_feature_upcoming').html( $('#feature_'+g_nPositionValue).html()  );
		
		setTimeout(function(){
			rotateRight();
		},100);
	}
}

getPrevFeature = function(){
	
	if(! g_bCurrentlyRotating ){
		if(g_nVideoPlaying !== false){
			revertVideoWithImage();
		}
		g_bCurrentlyRotating = true;
		
		$('#featurenav_'+g_nPositionValue).removeClass('current')
		g_nPositionValue--;
		if(g_nPositionValue < 0) g_nPositionValue = g_nTotalFeatures-1;
		$('#featurenav_'+g_nPositionValue).addClass('current')
		
		$('#main_feature_upcoming').html( $('#main_feature_current').html() );
		setTimeout(function(){
			$('#main_feature_reel').css('left','-'+g_nSlidingWidth+'px');
			
			clearTimeout(timeoutObject);
			
			$('#main_feature_current').html( $('#feature_'+g_nPositionValue).html()  );
			
			setTimeout(function(){
				rotateLeft();
			},200);
		},200);
	}
};_xBlog = {
	
	_bScrolling : false,
	_sCurrentRange: 'A-Z',
 	_nMaxPosition : 0,
	_nHolderWidth :0,
	
	init : function(){
		
		
		/*
		var l_nTotalItems = $('#blogsstories #maincontent .featured-top-content-holder .total_featured_items').attr('rel');
		var l_nHolderWidth = $('#blogsstories #maincontent .featured-top-content-holder').width();
		var l_nMaxPosition = Math.ceil(l_nTotalItems * (l_nHolderWidth / 3));
		$('#blogsstories #maincontent .featured-top-content-holder .area-body').width(l_nMaxPosition);
		this._nMaxPosition = l_nMaxPosition;
		this._nHolderWidth = l_nHolderWidth;
		var l_nAreaHeight = $('#blogsstories #maincontent .featured-top-content-holder .area-body').height();
		$('#blogsstories #maincontent .featured-top-content-holder').css('height',l_nAreaHeight);
	 	$('#blogsstories #maincontent .featured_top  .popup_author').each( function(){
					$(this).css('margin-top',(-1 * $(this).height()) - 13);
		
		if(this._nMaxPosition > 800)
			$('#top_arrow_right').css('visibility','visible');
		*/
	
		
		$('#filterrow .txt_holder').click(function(){
			if(!document.changingBlock){
				$(this).addClass('current');
				$(this).siblings('.current').removeClass( 'current' );
				
				$(this).parents('.picktypes').siblings('.dropdown_holder').each(function(){
					
					originalHolder = $(this).find('.original');
					
					$(this).children('.dropdown')
						.html( $(originalHolder).html() )
						.attr( 'rel', $(originalHolder).attr('rel') );
					
				});
				
				setTimeout("_xBlog.getArticleBlock(1)",100);
			}
			
		});
		
		
		
		$('#filterrow .scrollarea .name').click( function(){ 
		 	setTimeout("_xBlog.getArticleBlock(1)",100);
		});
		
		
	},
	
	scrollTopFeature : function(p_sDirection){
 		
 		var l_nCurrentPosition = parseInt($('#blogsstories #maincontent .featured-top-content-holder .area-body').css('left'));
 		var l_nNewPosition = 0;
	 	
		$('#top_arrow_left').css('visibility','visible');
	  	$('#top_arrow_right').css('visibility','visible');
	  
		switch(p_sDirection){
			
			case 'left'  : l_nNewPosition = l_nCurrentPosition + this._nHolderWidth; break;
			case 'right' : l_nNewPosition = l_nCurrentPosition - this._nHolderWidth; break;
		} 
	 	 
	 	if(l_nNewPosition > 0){
			l_nNewPosition = 0;
		}
		if(l_nNewPosition < -1*(this._nMaxPosition - this._nHolderWidth) ){
			l_nNewPosition = (-1*(this._nMaxPosition - this._nHolderWidth) ); 
			 
		}
		if(!this._bScrolling){
			this._bScrolling = true;
			
			if(l_nNewPosition-10 < -1*(this._nMaxPosition - this._nHolderWidth) )
				$('#top_arrow_right').css('visibility','hidden');
			
			if(l_nNewPosition+10 > 0)
				$('#top_arrow_left').css('visibility','hidden');
			
			$('#blogsstories #maincontent .featured-top-content-holder .area-body').animate( { left:l_nNewPosition },600,'', function(){ _xBlog._bScrolling = false });
		}
	
	
	},
 
	getSecondLevelFeatured : function(p_nPage){
		
		 
		$('#featured_2').css({ 'overflow':'hidden' });
		$('#featured_2_reel').width(1690);				
		
		
		if(p_nPage < $('#featured_2_pagination_holder .current').html() ){
			l_bMoveLeft = true;
			$('#featured_2_holder2').html( $('#featured_2_holder1').html( ) );
			$('#featured_2_reel').css('left',-845);
			DailybeastAjax.setLoaderOverlay('#featured_2_holder2');
		}else{
			l_bMoveLeft = false;
			DailybeastAjax.setLoaderOverlay('#featured_2_holder1');
		}
		
		$.ajax({
			type:       "POST",
			url:        AJAX_URL,
			data:       'a=getSecondLevelFeatured&callback='+escape('_xBlog.getSecondLevelFeatured')+'&page='+p_nPage,
			success:    function(p_sMsg) {
				if(l_bMoveLeft){
					$('#featured_2_holder1').html(p_sMsg);
				}else{
					$('#featured_2_holder2').html(p_sMsg);
				}
				_xBlog.scrollSecondFeatured(l_bMoveLeft);
			}
		});
	},
	
	scrollSecondFeatured: function(p_bMoveLeft){
		if(p_bMoveLeft){
			$('#featured_2_reel').animate({
			  left: 0,
			  easing: 'easeOutQuad'
			}, 800,   function(){
				$('#featured_2_holder2').html( '' );
				$('#featured_2_reel').width(845);	
				$('#featured_2').css({ 'overflow':'visible' });
				//setInfoInterace(''); 
			});
			
		}
		else{
			
			$('#featured_2_reel').animate({
			  left: -845,
			  easing: 'easeOutQuad'
			}, 800,   function(){
				$('#featured_2_holder1').html( $('#featured_2_holder2').html( ) );
				$('#featured_2_holder2').html( '' );
				$('#featured_2_reel').css('left',0);
				$('#featured_2_reel').width(845);				
				$('#featured_2').css({ 'overflow':'visible' });
				//setInfoInterace(''); 
			});
		}
		
		
	},
	
	
	getContributors : function(p_nPage){
		DailybeastAjax.setLoaderOverlay('#blogsstories .contributors-holder-area');
		
		$('.contributors_range').each( function(){
											 
			if($(this).attr('class') == 'contributors_range current'){
				_xBlog._sCurrentRange = $(this).html();
			}	
		});
		
		$.ajax({
			type:       "GET",
			url:        AJAX_URL,
			data:       'a=getContributors&callback='+escape('_xBlog.getContributors')+'&page='+p_nPage+'&range='+escape(_xBlog._sCurrentRange),
			success:    function(p_sMsg) {
				$('#blogsstories .contributors-holder-area').html(p_sMsg);
				//setInfoInterace('');
			}
		});
	},
	
	
	getContributorsRange : function(p_xLink){
		$('.contributors_range').removeClass('current');
		$(p_xLink).addClass('current');
		this.getContributors(1)
	},
	
	getAuthorpageBlogs : function(p_nPage){ 
		
		
		DailybeastAjax._xArgs.data = 'a=getAuthorpageBlogs';
		DailybeastAjax._xArgs.data += '&authorId='+document.authorId;
		DailybeastAjax._xArgs.data += '&page='+p_nPage;
		DailybeastAjax._xArgs.data += '&orderby='+document.blogsAdded;
		DailybeastAjax._xArgs.requestType = "GET"; 
		DailybeastAjax._xArgs.loader = true;
		DailybeastAjax._xArgs.returnDiv = '.article_block_holder';
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
		
		
	},
	
	getAuthorpagePicks: function(p_nPage){ 
		
		DailybeastAjax._xArgs.data = 'a=getAuthorpagePicks';
		DailybeastAjax._xArgs.data += '&authorId='+document.authorId;
		DailybeastAjax._xArgs.data += '&page='+p_nPage;
		DailybeastAjax._xArgs.data += '&orderby='+document.picksAdded;
		DailybeastAjax._xArgs.requestType = "GET"; 
		DailybeastAjax._xArgs.loader = true;
		DailybeastAjax._xArgs.returnDiv = '.pick_container';
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
	},
	
	
	
	
	initArticle : function(){
		
		//$('#col1-holder').html($('#col1-data').html());
		//$('#col1-data').html('');
		//setInfoInterace('#col1-holder');
		//setInfoInterace('#col3-holder');
	  	setVideoOverlays('#blogsstories_holder');
		//setArticleShareLinks();
	},
	
	
	
	addViewCount : function(p_nId){		
	
		$.ajax({
			type: "POST",
			url:  AJAX_URL,
			data: 'a=addViewCount&id='+p_nId,
			success: function(p_sMsg){}			
		});
	},
	
	
	getArticleBlock: function(p_nPage){
		
		if(!document.changingBlock){
			document.changingBlock = true;
			contriburorId = $('#contributors_id').attr('rel');
			tagId = $('#filterrow .current').attr('rel') ;
			$.scrollTo('#header',0);	
			DailybeastAjax._xArgs.data = 'a=getArticleBlock';
			DailybeastAjax._xArgs.data += '&contriburorId='+contriburorId;
			DailybeastAjax._xArgs.data += '&tagId='+tagId;
			DailybeastAjax._xArgs.data += '&page='+p_nPage;
			DailybeastAjax._xArgs.returnDiv = '#blogsstories_droparea';
			DailybeastAjax._xArgs.loader = true;
			DailybeastAjax._xArgs.requestType = "GET"; 
			DailybeastAjax._xArgs.callBack = _xBlog.getArticleBlock_callback;
			
			if( $('#featuredstories_top').length ){
				 $('#featuredstories_top').slideUp(300,function(){ DailybeastAjax.makeAjaxCall('/include/ajax.php'); });
				
			}else{
				DailybeastAjax.makeAjaxCall('/include/ajax.php');
			}
		}
	},
	
	getArticleBlockFromNewsmaker: function(p_nPage){
		
		$.scrollTo('#header',0);	
		DailybeastAjax._xArgs.data = 'a=getArticleBlockFromNewsmaker';
		DailybeastAjax._xArgs.data += '&newsmakerId='+document.newsmakerid;
		DailybeastAjax._xArgs.data += '&page='+p_nPage;
		DailybeastAjax._xArgs.returnDiv = '#blogsstories_droparea';
		DailybeastAjax._xArgs.loader = true;
		DailybeastAjax._xArgs.callBack = _xBlog.getArticleBlock_callback;
		
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
	},
	
	getArticleBlock_callback : function(){
		 
		document.changingBlock = false;
		//setInfoInterace('');
	}
	
	
};_xInit ={
	
	genericInit: function(){
		setAutofills();
		setInfoInterace('');
		setAskSubmit();
		setHovers();
		_xVideo.enableVideoMouseUpFix();
		setSortOrder();
		prepTruebox();
		checkTrueboxHash();
		_xTags.init();
		_xComment.init();
		 
	},
	
	
	homeInit: function() {
		
		$('#home .beast_holder .popup_author').each( function(){
				$(this).css('margin-top',(-1 * $(this).height()) - 13);
	    });
		
		_xVideo.checkVideopageOverlays();
		_xMostPopularModule.init();
	},
	
	beastboardInit:function(){
		_xBeastBoard.init();
		setDropDowns();
		
	},
	
	bigfatstoryInit:function(){
		setBigFatStory();
		initBigFatStoryVote();
		
	},
	
	videopageInit:function(){
		initCalendar();
		checkVideopageOverlays();
		setVideopageEmail();
	},
	
	blogsandstoriesInit:function(){
		_xBlog.init();
		setBlogsStories();
		setDropDowns();
		
	},
	
	blogsandstoriesarticleInit:function(){
		_xBlog.initArticle();
		setBlogsStoriesArticle();
		
	},
	
	cheatsheetInit:function(){
		setCheatLinks(''); 
		initCheatVote();
		initCalendar();
		loadCheatVotes();
	},
	
	tagsInit:function(){
	},
	
	newsmakerInit:function(){
		_xSizzle.init();
	}
	
	
}




bodyload = function(){  
	setVideoOverlays('');
};_nShareThisCount = 0;

changeVideopageVideo = function(id){
	hideShareThis();
	$('#video_rows_inner .overlay_on').removeClass('overlay_on');
	$('#video_row_'+id).addClass('overlay_on');
	
	DailybeastAjax.loadVideoForVideopage(id);
}



checkVideopageOverlays = function(){
	$('#video_rows_inner .video_row').each(function(){ 
		if ( $(this).attr('rel') == document.currentVideopageId ){
			$(this).addClass('overlay_on');
		}
	});
	
}

	
homeUpdateShareThis = function(){
	 
	var l_xBounds = $('#homevidholder .homevideo_buttons').position();
	//var l_nLeft = $('#master').position();
	var l_nLeft = $('#master #maincontent .col3').position();
	//var l_nTop = $('.flash_holder').position();
	var l_nOffset = 345;
	if ($.browser.safari)
	 	l_nOffset = 180;
	else if($.browser.opera)
		l_nOffset = 140;
		
	$('#shareThisHolder').css('top',l_xBounds['top']+150).css('z-index','1000').css('left',l_nLeft['left'] + l_nOffset).show();
	$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?&beastfull=1&url='+escape('https://web.archive.org/web/20110405084925/http://thedailybeast.com' + $('#homevidholder .permalink').attr('href'))+'&title='+escape($('#homevidholder .title').html())   );
	
}

setVideopageEmail = function(){
	 
	$('.shareItPopup_link').unbind();
	$('.shareItPopup_link').live("click", function(){
	
		if(isUserLoged() && !isUserLogedAsFacebook()){
			$('.show_email').hide();
		} else {
			$('.show_email').show();
		}
		$(this).siblings('.popup_sharelink').toggle();
		$(this).css('z-index',_nBFSInfoDepth++);
		$(this).children('.txt').toggleClass('txt_current');
		var id = $(this).siblings('.popup_sharelink').children('.popup_content').children('form').attr('id');
		resetShareLinkForm(id);
		showAllFormElements(id);
	});
	$(' .popup_sharelink .closebtn').unbind();
	$(' .popup_sharelink .closebtn').live("click", function(){
		$(this).parents('.popup_sharelink')
			.toggle().css('z-index',_nBFSInfoDepth++);
		$(this).parents('.popup_sharelink').siblings('.shareItPopup_link').children('.txt')
			.toggleClass('txt_current');
	});

}

submitShareHomeVideo = function(){
		
	var l_sYourEmail = $('#form_sharelink_ #your_email_').val();
	var l_sTheirEmail = $('#form_sharelink_ #their_email_').val();
	//var l_sTheirName = $('#form_sharelink_ #their_name_').val();
	document.currentVideoDeepLink = 'https://web.archive.org/web/20110405084925/http://www.thedailybeast.com' + $('.permalink').attr('href');
	
	errors = new Array();
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_').html('');

	disableShareLinkForm('');
	
	DailybeastAjax.submitShareHomeVideo();
}

DailybeastAjax.submitShareHomeVideo = function(){
	
	f = document.getElementById('form_sharelink_');

	DailybeastAjax._xArgs.data = 'a=shareVideopage';
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	DailybeastAjax._xArgs.data += '&videoId='+document.currentVideoId;
	DailybeastAjax._xArgs.data += '&videoDeepLink='+document.currentVideoDeepLink;
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
	
	//alert(DailybeastAjax._xArgs.data);
}

submitShareSizzleTopVideo = function(){
		
	var l_sYourEmail = $('#form_sharelink_top #your_email_').val();
	var l_sTheirEmail = $('#form_sharelink_top #their_email_').val();
	//var l_sTheirName = $('#form_sharelink_ #their_name_').val();
	document.currentVideoDeepLinkTop = 'https://web.archive.org/web/20110405084925/http://www.thedailybeast.com' + $('.permalinktop').attr('href');
	
	errors = new Array();
	if (document.cookie.indexOf("tdb_info=") == -1 && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_top').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_top').html('');

	disableShareLinkForm('');
	
	DailybeastAjax.submitShareSizzleTopVideo();
}

DailybeastAjax.submitShareSizzleTopVideo = function(){
	
	f = document.getElementById('form_sharelink_top');

	DailybeastAjax._xArgs.data = 'a=shareVideopageSizzleTop';
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	DailybeastAjax._xArgs.data += '&videoId='+document.currentVideoIdTop;
	DailybeastAjax._xArgs.data += '&videoDeepLink='+document.currentVideoDeepLinkTop;
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
	
	//alert(DailybeastAjax._xArgs.data);
}


submitShareVideopage = function(){
	
	var l_sYourEmail = $('#form_sharelink_ #your_email_').val();
	var l_sTheirEmail = $('#form_sharelink_ #their_email_').val();
	//var l_sTheirName = $('#form_sharelink_ #their_name_').val();
	document.currentVideoDeepLink = 'https://web.archive.org/web/20110405084925/http://thedailybeast.com/video/item/' + $('#video_meta .slug').html();
	
	errors = new Array();
	if (!(isUserLoged() && !isUserLogedAsFacebook()) && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	//if( _xGlobal.checkEmpty(l_sTheirName)){
	//	errors.push("Recipient Name is empty.");
	//}
	if(errors.length > 0)	{
		$('#share_errors_').html(_xGlobal.printErrors(errors));
		return;
	}
	$('#share_errors_').html('');

	disableShareLinkForm('');
	
	DailybeastAjax.submitShareVideopage();
	
}
 
DailybeastAjax.submitShareVideopage = function(){
	f = document.getElementById('form_sharelink_');

	DailybeastAjax._xArgs.data = 'a=shareVideopage';
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent(f.elements['your_email'].value);
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent(f.elements['their_email'].value);
//	DailybeastAjax._xArgs.data += '&note='+encodeURIComponent(f.elements['note'].value);
	DailybeastAjax._xArgs.data += '&videoId='+document.currentVideopageId;
	DailybeastAjax._xArgs.data += '&videoDeepLink='+document.currentVideoDeepLink;
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
	
	//alert(DailybeastAjax._xArgs.data);
}



submitShareVideoItem = function(p_sId){
 
	var l_sYourEmail = $('#form_sharelink_'+p_sId+' #your_email_'+p_sId).val();
	var l_sTheirEmail = $('#form_sharelink_'+p_sId+' #their_email_'+p_sId).val();
	 
	errors = new Array();
	if (document.cookie.indexOf("tdb_info=") == -1 && (!_xGlobal.echeck(l_sYourEmail))){
		errors.push("Your Email Address is invalid.");		
	}	
	if( !_xGlobal.echeck(l_sTheirEmail)  ){
		errors.push("Recipient Email Address is invalid.");
	}
	 
	if(errors.length > 0 && 0)	{
		$('#form_sharelink_'+p_sId+' #share_errors_'+p_sId).html(_xGlobal.printErrors(errors));
		return;
	}
	$('#form_sharelink_'+p_sId+' #share_errors_'+p_sId).html('');
	 
	
	DailybeastAjax.submitShareVideoItem(p_sId);
	
}

DailybeastAjax.submitShareVideoItem = function(p_sId){
	f = document.getElementById('form_sharelink_'+p_sId);

	DailybeastAjax._xArgs.data = 'a=shareVideopage';
	DailybeastAjax._xArgs.data += '&divId='+encodeURIComponent(p_sId);
	DailybeastAjax._xArgs.data += '&your_email='+encodeURIComponent($('#form_sharelink_'+p_sId+' #your_email_'+p_sId).val());
	DailybeastAjax._xArgs.data += '&their_email='+encodeURIComponent($('#form_sharelink_'+p_sId+' #their_email_'+p_sId).val());
	DailybeastAjax._xArgs.data += '&videoId='+encodeURIComponent($('#form_sharelink_'+p_sId+' #video_id_'+p_sId).val());
	DailybeastAjax._xArgs.data += '&videoDeepLink='+escape($('#form_sharelink_'+p_sId+' #video_deeplink_'+p_sId).val());
	DailybeastAjax._xArgs.returnDiv = '#return_div';
	
	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
	
	//alert(DailybeastAjax._xArgs.data);
}



loadRelatedVideoPage = function(page){
	
    DailybeastAjax._xArgs.data = 'a=loadRelatedVideoPage';
    DailybeastAjax._xArgs.data += '&p_nId='+document.currentVideopageId;
    DailybeastAjax._xArgs.data += '&p_nPage='+page;
	//DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.returnDiv = '#relatedvideo_holder_area';
	//DailybeastAjax._xArgs.callBack = DailybeastAjax.loadVideoForVideopage_callback;
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
	
}

 
updateShareThis = function(){
	var l_nLeft = $('#master').position();
	$('#shareThisHolder').css('top','620px').css('z-index','1000').css('left',l_nLeft['left'] + 100).show();
	$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?url='+escape($('#video_meta .slug').html())+'&title='+escape($('#video_meta .title').html()) +'&content='+escape($('#video_meta .content').html())   );
	  					
}

 
updateShareThisNewsmaker = function(p_sType){
	
	var l_nLeft = $('#master').position();
	l_nLeft = l_nLeft['left'];
	var l_nMasterLeft = l_nLeft;
	
	if($('.row2_sizzle .col1').length){
		l_nLeft += $('.row2_sizzle .col1').width()+20 ;
	}
	  
	var l_nTop = $('.row1').height();
	if($('#newsmaker_highlights_1').length){
		l_nTop += $('#newsmaker_highlights_1').height()+20 ;
	}
	if($('#newsmaker_highlights_2').length){
		l_nTop += $('#newsmaker_highlights_2').height()+20 ;
	}
	if($('#row1_sizzle').length){
		l_nTop += $('#row1_sizzle').height()+20 ;
	}
	
	if(p_sType == 'sizzle_top'){
		$('#shareThisHolder').css('top',500).css('z-index','5000').css('left',l_nMasterLeft + 600).show();
	}
	else if(p_sType == 'sizzle'){
		$('#shareThisHolder').css('top',l_nTop+1500).css('z-index','1000').css('left',l_nLeft + 100).show();
	}
	else{
		$('#shareThisHolder').css('top',l_nTop+300).css('z-index','1000').css('left',l_nLeft + 100).show();
	}
	$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?url='+escape($('#flashpiece_info .slug').html())+'&title='+escape($('#flashpiece_info .title').html()) +'&content='+escape($('#flashpiece_info .content').html())   );
	  					
						
}


hideShareThis = function(){
	$('#shareThisHolder').hide();
	$('#shareThisHolderIFrame').attr('src','');
	  					
	$('#truebox_iframe').hide();
	$('#truebox_iframe_holder').attr('src','');
	  					
}







DailybeastAjax.loadVideoForVideopage = function(videoId){
	
    DailybeastAjax._xArgs.data = 'a=loadVideoForVideopage';
    DailybeastAjax._xArgs.data += '&p_sId='+videoId;
	DailybeastAjax._xArgs.returnDiv = '#videopage_col1';
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.callBack = DailybeastAjax.loadVideoForVideopage_callback;
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}
DailybeastAjax.loadVideoForVideopage_callback = function(){
	showCheckUsersFb();
}


DailybeastAjax.videopageDate = function(newDate){
	$('#thecalendar').hide();
	
    DailybeastAjax._xArgs.data = 'a=videopageDate';
    DailybeastAjax._xArgs.data += '&p_sDate='+newDate;
	DailybeastAjax._xArgs.returnDiv = '#videopage_col2';	
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.callBack = DailybeastAjax.videopageDate_callback;
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}
DailybeastAjax.videopageDate_callback = function(){
	initCalendar();
	checkVideopageOverlays();
}


DailybeastAjax.videopageNavigate = function(newPage) { 
    DailybeastAjax._xArgs.data = 'a=videopageNavigate';
    DailybeastAjax._xArgs.data += '&p_sDate='+document.g_sDate;
    DailybeastAjax._xArgs.data += '&p_sPage='+newPage;
	DailybeastAjax._xArgs.returnDiv = '#video_rows_outer';
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.callBack = DailybeastAjax.videopageNavigate_callback;
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
}
DailybeastAjax.videopageNavigate_callback = function(){
	checkVideopageOverlays();
}

DailybeastAjax.videopageNavigateByNewsmaker = function(newPage) { 
    DailybeastAjax._xArgs.data = 'a=videopageNavigateByNewsmaker';
    DailybeastAjax._xArgs.data += '&p_sNewsmaker='+document.newsmakerid;
    DailybeastAjax._xArgs.data += '&p_sPage='+newPage;
	DailybeastAjax._xArgs.returnDiv = '#video_rows_outer';
	DailybeastAjax._xArgs.requestType = "GET"; 
	DailybeastAjax._xArgs.callBack = DailybeastAjax.videopageNavigate_callback;
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
};_xRss = {
	
	_sCurrentRange: 'A-Z',
	
	getContributors : function(p_nPage){
		DailybeastAjax.setLoaderOverlay('#rsspage .contributors-holder-area');
		
		$('.contributors_range').each( function(){
			if($(this).attr('class') == 'contributors_range current'){
				_xRss._sCurrentRange = $(this).html();
			}
		});
		
		$.ajax({
			type:       "GET",
			url:        AJAX_URL,
			data:       'a=getContributorsRss&callback='+escape('_xRss.getContributors')+'&page='+p_nPage+'&range='+escape(_xRss._sCurrentRange),
			success:    function(p_sMsg) {
				$('#rsspage .contributors-holder-area').html(p_sMsg);
				setInfoInterace('');
			}
		});
	},
	
	
	getContributorsRange : function(p_xLink){
		$('.contributors_range').removeClass('current');
		$(p_xLink).addClass('current');
		this.getContributors(1);
	}
	
};acctpageToggleSingleEmail = function(rowLink){
	
	if(document.cookie.indexOf("tdb_info=") != -1){ /*if the user is logged in when you click*/
		$('.show_email').hide();
	} else {
		$('.show_email').show();
	}
	
	$(rowLink).siblings('.popup_sharelink').toggle() ;
	
	id = $(rowLink).attr('rel');
	
	resetShareLinkForm('form_sharelink_'+id);
	showAllFormElements('form_sharelink_'+id);
	
}

acctpageToggleShareAll = function(){
	
	if(document.cookie.indexOf("tdb_info=") != -1){ /*if the user is logged in when you click	*/
		$('.show_email').hide();
	} else {
		$('.show_email').show();
	}
	
	$('#shareall').toggle();
	resetShareLinkForm('form_sharelink_');
	showAllFormElements('form_sharelink_');
}




acctpageDeleteSingle = function(rowLink){
	
	theRow=  $(rowLink).parent().parent()  ;
	
    DailybeastAjax._xArgs.data = 'a=acctpageDeleteSingle';
    DailybeastAjax._xArgs.data += '&favoriteid='+$(theRow).attr('rel');
    DailybeastAjax._xArgs.data += '&accountId='+document.accountId;
	DailybeastAjax._xArgs.returnDiv = '.saved-pages-holder';
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
}





DailybeastAjax.getMoreRecentComments = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getMoreRecentComments';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&accountId='+document.accountId;
	DailybeastAjax._xArgs.returnDiv = '.recent-comment-holder';
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
}



DailybeastAjax.getMoreSavedPages = function(p_nPage){
	
    DailybeastAjax._xArgs.data = 'a=getMoreSavedPages';
    DailybeastAjax._xArgs.data += '&page='+p_nPage;
    DailybeastAjax._xArgs.data += '&accountId='+document.accountId;
	DailybeastAjax._xArgs.returnDiv = '.saved-pages-holder';
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
}



acctpageStartEdit = function(){
	$('#acctpageSwitch').attr('class','edit');

}


	
acctpageSave = function (){
	errors = validateUpdatePage();
	if(errors.length > 0)	{
		$('#accountpage_errors').html(_xGlobal.printErrors(errors));
		
	}else
	{
		
		DailybeastAjax.accountpageUpdate();
		disableAccountpageUpdateForm();
		$("#accountfb_submit").hide();
		$("#account_submit").hide();
		$("#btn_editid").show();
		$('#accountpage_errors').html('');	
	}
	return false;
}


acctpageDeleteAll = function(){
	
	if(!confirm("Are you sure you would like to remove all of your saved items?"))
		return;
	
    DailybeastAjax._xArgs.data = 'a=acctpageDeleteAll';
    /*DailybeastAjax._xArgs.data += '&favoriteid='+$(theRow).attr('rel');*/
    DailybeastAjax._xArgs.data += '&accountId='+document.accountId;
	DailybeastAjax._xArgs.returnDiv = '.saved-pages-holder';
	DailybeastAjax._xArgs.loader = true;
	
    DailybeastAjax.makeAjaxCall('/include/ajax.php');
	
};// JavaScript Document


$(document).ready(function(){
	if (document.isCultureBeast)
		_xCultureBeast.init();
		
	if (document._bIsNewsreel)
		_xNewsReel.init();
	
});

var _xNewsReel = {
	
	init : function(){
		this.setHovers();
		this.setSocialLinks();
		//if(document._bIsNewsreelFull)
		//	this.calcCommentCounts();
	},
	
	calcCommentCounts : function(){
		
		var l_sReels = '';
		var l_nCount = 0;
		$('#newsreelcontent_col1 .newsreel_item').each(function(){
			if(l_nCount)
				l_sReels += ',';
			l_sReels += $(this).attr('rel');
			l_nCount++;
		});
		
		if(l_sReels){
			DailybeastAjax._xArgs.data = 'a=getNewsreelComments';
			//DailybeastAjax._xArgs.data += '&p_nNewsmakerId='+document.newsmakerid
			DailybeastAjax._xArgs.data += '&p_sNewsreelArray='+l_sReels;
		
			DailybeastAjax._xArgs.returnDiv = '#return_div';	
			DailybeastAjax._xArgs.requestType = "GET"; 
			DailybeastAjax.makeAjaxCall(AJAX_URL);
		
		}
		
	},
	
	setHovers : function(){
		
		$('#custom_header .textlink a').hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
		
	},
	
	setSocialLinks : function(){
		
		$('.email_popup').live('click',function(){
			$(this).parent().siblings('.popup_sharelink').show();
			var rel = $(this).attr('rel');
			showAllFormElements('form_sharelink_'+rel);
			resetShareLinkForm('form_sharelink_'+rel);
			if(document.cookie.indexOf("tdb_info=") != -1){ 
				$('.show_email').hide();
			} else {
				$('.show_email').show();
			} 
		});
		
		$('.popup_sharelink .closebtn').live('click',function(){
			$(this).parent().parent().hide();
		});
		
		$('.icon_sharethis a').live('click',function(){
			_xNewsReel.updateShareThisLink($(this).attr('rel'));
		});
		
		
	},
	
	hideShareThisCheat : function(){
			$('#shareThisHolder').hide();
			$('#shareThisHolderIFrame').attr('src','');
	},
		
	updateShareThisLink : function( p_nCount ){
			//alert(p_nCount);
			var l_nLeft = $('#master').position();
			var l_nTop = 250;
			for(i=0; i< p_nCount; i++){ l_nTop += $('#newsreel_'+i).height() + 60;  }
			
			//var l_sBody = Base64.encode('test');
			var l_sBody = Base64.encode(strip_tags($('#newsreel_'+p_nCount+' .maintext').html()).substr(0,255));
			var l_sUrl = Base64.encode($('#newsreel_'+p_nCount+' .permalink').val());
			var l_sTitle = Base64.encode($('#newsreel_'+p_nCount+' .title').html());
		  
			$('#shareThisHolder').css('top',l_nTop+200).css('z-index','2000').css('left',l_nLeft['left']+50 ).show();
			$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?&beastfull=1&url='+l_sUrl+'&title='+l_sTitle+ '&encode=1&content=' +l_sBody );
			
	},
	
	getNewsreelFullOnPage : function(p_nPage){
		
		DailybeastAjax._xArgs.data = 'a=getNewsreelFullOnPage';
		DailybeastAjax._xArgs.data += '&page='+p_nPage;
		DailybeastAjax._xArgs.data += '&p_nId='+document.newsreelid;
		DailybeastAjax._xArgs.returnDiv = '#newsreelcontent_col1';
		DailybeastAjax._xArgs.requestType = "GET"; 
		DailybeastAjax._xArgs.loader = true;
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
	}
	
	
}



var _xCultureBeast = {

	_bAnimating:false,
	_bRotating:false,
	_nRotatedOn:0,
	_nTotal : 0,
	_nCurrentFrame : 0,
	_bIsHovered : false,
	_bQueueAdvance : false,
	_bAutoPlay : true,
	_nTimeout: 8000,
	_nScrollSpeed: 200, 
	_xTimer:null,
	
	init : function(){
		this.setTotalTopArea();
		//this.buildDuplicates();
		this.setTopAreaNavClicks();
		this.setTopAreaHovers();
		this.setTopAreaNavHeight(this._nCurrentFrame, false);
		this.showItemsContent(0);
		this.startTopAreaAutoPlay();
		
	},
	
	
	setTotalTopArea : function(){


		this._nTotal =  $('#toparea_nav_holder .navitem').length;
		//this._nTotal++;
		this._nTotal= parseInt($('#toparea_nav_holder').attr('total'));
		
			
		//alert(l_nRel);
		
	},
	
	buildDuplicates : function(){
		var l_nTotalItems = this._nTotal;			
		for(var i=0; i<l_nTotalItems; i++){
			var l_xNewItem = $('#navitem_'+i).clone(true).removeClass('navitem_'+i).addClass('navitem_'+i).attr('rel',l_nTotalItems+i).attr('id','navitem_'+(l_nTotalItems+i));
			$('#navitem_'+(l_nTotalItems-1+i)).after(l_xNewItem);
		}			
		// Needs second duplicate for odd case involving 3 total
		for(i=0; i<l_nTotalItems; i++){
			var l_xNewItem = $('#navitem_'+i).clone(true).removeClass('navitem_'+i).addClass('navitem_'+i).attr('rel',l_nTotalItems+l_nTotalItems+i).attr('id','navitem_'+(l_nTotalItems+l_nTotalItems+i));
			$('#navitem_'+(l_nTotalItems-1+l_nTotalItems+i)).after(l_xNewItem);
		}
	},
	
	
	startTopAreaAutoPlay:function(){
		setTimeout(function(){
			if(_xCultureBeast._bAutoPlay){
				_xCultureBeast._xTimer = setTimeout(function(){
					_xCultureBeast.executeAutoPlay();
				},_xCultureBeast._nTimeout);
			}
		},200);
	},
	
	
	executeAutoPlay:function(){
		if (this._nTotal == 1) return false;
		
		if(this._bAutoPlay){
			if(this._bIsHovered){
				this._bQueueAdvance = true;
			}else {
				this.advanceOneView();
			}
		}
	},
	
	setTopAreaHovers:function(){
		
		$('#toparea_nav_container, #toparea_content, #toparea_rightcol').hover(function(){
			_xCultureBeast._bIsHovered = true;
		},function(){
			_xCultureBeast._bIsHovered = false;
			setTimeout(function(){_xCultureBeast.checkIfHovering();},100);
		});
		
		
	},
	
	
	checkIfHovering:function(){
		if(!_xCultureBeast._bIsHovered){
			
			if(_xCultureBeast._bQueueAdvance){
				_xCultureBeast._bQueueAdvance = false;
				_xCultureBeast.advanceOneView();
			}
		}
	},
	
	
	setTopAreaNavClicks : function(){
		
		$('#toparea_arrowup').click(this.scrollTopAreaDown);
		$('#toparea_arrowdown').click(this.scrollTopAreaUp);
		$('#toparea_play').click(this.playTopArea);
		$('#toparea_pause').click(this.pauseTopArea);
		$('#toparea_nav_holder .navitem').click(this.clickNavItem);
		
	},
	
	pauseTopArea : function(){
		$('#toparea_play').show();
		$('#toparea_pause').hide();
		
		clearTimeout(_xCultureBeast._xTimer);
		_xCultureBeast._bQueueAdvance = false;
		_xCultureBeast._bAutoPlay = false;
		
	},
	
	playTopArea : function(){
		$('#toparea_pause').show();
		$('#toparea_play').hide();
		
		_xCultureBeast._bAutoPlay = true;
		_xCultureBeast.advanceOneView();
		
		
	},
	
	scrollTopAreaUp:function(){
		if(_xCultureBeast._nRotatedOn+4 >= _xCultureBeast._nTotal) return false;
		_xCultureBeast.rotateNavTo(_xCultureBeast._nRotatedOn+1);
	},
	
	scrollTopAreaDown:function(){
		if(_xCultureBeast._nRotatedOn == 0 ) return false;
		_xCultureBeast.rotateNavTo(_xCultureBeast._nRotatedOn-1);
	},
	
	/*
	scrollTopAreaUp : function(){
		_xCultureBeast.rotateNavTo(_xCultureBeast._nCurrentFrame + 1 ,true);
	},
	scrollTopAreaDown : function(){
		_xCultureBeast.rotateNavTo(_xCultureBeast._nCurrentFrame - 1 ,false);
	},
	
	*/
	
	displayView : function(p_nNewItem){
		
		if(_xCultureBeast._bAnimating)return false;
		_xCultureBeast._bAnimating = true;
		
		clearTimeout(this._xTimer);
		_xCultureBeast._bQueueAdvance = false;
		_xCultureBeast._nCurrentFrame = p_nNewItem;
		_xCultureBeast.showItemsContent(p_nNewItem);
	},
	
	advanceOneView : function(){
		if(_xCultureBeast._bAnimating)return false;
		
		var l_nNewItem = (parseInt(_xCultureBeast._nCurrentFrame) + 1 )%_xCultureBeast._nTotal
		_xCultureBeast.displayView(l_nNewItem);
	},
	
	
	clickNavItem:function(){
	 	var l_nNewItem = $(this).attr('rel');
		if(l_nNewItem != _xCultureBeast._nCurrentFrame){
			_xCultureBeast.displayView(l_nNewItem);
		}
		
	},
	
	rotateNavTo:function(p_nTarget){
		if(_xCultureBeast._bRotating) return false;
		_xCultureBeast._bRotating = true;
		var l_xPosition = null;
		p_nTarget = parseInt(p_nTarget);
		l_xPosition = $( '#navitem_'+p_nTarget ).position();
		$('#toparea_nav_scroller').animate( {'top':-l_xPosition.top} ,_xCultureBeast._nScrollSpeed,
			function(){
				_xCultureBeast._bRotating = false;;
				_xCultureBeast._nRotatedOn = p_nTarget;
				$('#toparea_arrowdown, #toparea_arrowup').removeClass('arrow_dim');
				if(_xCultureBeast._nRotatedOn+4 >= _xCultureBeast._nTotal){
					$('#toparea_arrowdown').addClass('arrow_dim');
				}
				if(_xCultureBeast._nRotatedOn == 0 ){
					$('#toparea_arrowup').addClass('arrow_dim');
				}
		});
	},
	
	/*
	rotateNavTo:function(p_nTarget, p_bForward ){
		
		if(_xCultureBeast._bAnimating)return false;
		_xCultureBeast._bAnimating = true;
		
		clearTimeout(this._xTimer);
		this._bQueueAdvance = false;
		
		var l_xPosition = null;
		p_nTarget = parseInt(p_nTarget);

		if(!p_bForward && p_nTarget == -1){
			l_xPosition = $( '#navitem_'+(this._nTotal) ).position();
			$('#toparea_nav_scroller').css('top',-l_xPosition.top+'px');	
			p_nTarget= (this._nTotal)-1;
		} 
		
		if(p_nTarget> (this._nTotal)&& p_bForward){
			//alert(this._nCurrentFrame);
			//l_xPosition = $( '#navitem_'+this._nCurrentFrame%_xCultureBeast._nTotal ).position();
			//$('#toparea_nav_scroller').css('top',-l_xPosition.top+'px');	
			//p_nTarget -= (this._nTotal);
		}
		   
		$('#toparea_nav_holder .navitem_selected').removeClass('navitem_selected');			
		$('#toparea_nav_holder .navitem_'+(p_nTarget%this._nTotal)).addClass('navitem_selected');
		l_xPosition = $( '#navitem_'+p_nTarget ).position();
	 
		$('#toparea_nav_scroller').animate( {'top':-l_xPosition.top} ,_xCultureBeast._nScrollSpeed, function(){
			if(p_nTarget >= _xCultureBeast._nTotal ){
				l_xPosition = $( '#navitem_'+p_nTarget%_xCultureBeast._nTotal ).position();
				$('#toparea_nav_scroller').css('top',-l_xPosition.top+'px');	
			}
			
			_xCultureBeast.showItemsContent(p_nTarget%_xCultureBeast._nTotal);
			
			
		});
		this.setTopAreaNavHeight( p_nTarget%_xCultureBeast._nTotal, true );
		
		this._nCurrentFrame = p_nTarget%this._nTotal;
		this.startTopAreaAutoPlay();
		
	},
	*/
showItemsContent : function(p_nId){
		
		var l_nRel = parseInt($('#navitem_'+p_nId).attr('rel'));		
	var totVar = parseInt($('#toparea_pagination').attr('total'));

		if (isNaN(l_nRel)){						
		  l_nRel = p_nId;
		}
		 
		if ($('#toparea_pagination').attr('position')) {
			var position= parseInt($('#toparea_pagination').attr('position'));
			//position--;
			//alert(position);
			if (position==p_nId){				
				$('#toparea_pagination').hide();
			}
			else{
				$('#toparea_pagination').show();
				pageNumber = l_nRel+1;
				if (position<p_nId)
					pageNumber--;
				$('#toparea_pagination').html((pageNumber) + ' of '+(totVar));
			}
		}
		else
		{
			$('#toparea_pagination').show();
			$('#toparea_pagination').html((l_nRel+1) + ' of '+(totVar));
		}
		//alert(itemData);
	    $('#toparea_content').html($('#navitem_'+l_nRel).data('itemData').middleData);
		$('#toparea_rightcol .toparea_boxarticle').fadeOut(300);
		$('#toparea_content .middle_feature_content').fadeOut(function(){800,
			setTimeout(function(){
				$('#toparea_boxarticle_'+l_nRel).fadeIn(300);
				$('#middle_feature_content_'+l_nRel).fadeIn(800,function(){
					_xCultureBeast._bAnimating = false;
					_xCultureBeast.startTopAreaAutoPlay();
				});
			},400);
		});
	},
	
	
	
	setTopAreaNavHeight :function(p_nStartOn, p_bAnimate){
		var l_nHeight = 0;
		if(this._nTotal <4)
			var l_nCount = this._nTotal;
		else l_nCount = 4;
				
		var partialHeight=0;
		for(var i=0; i<l_nCount; i++){
			//alert($('#navitem_'+((i+p_nStartOn)%( this._nTotal ))).height());
			partialHeight = $('#navitem_'+((i+p_nStartOn)%( this._nTotal ))).height();			
			if (partialHeight == 0 || partialHeight == null)
				partialHeight=72;
			l_nHeight += partialHeight;			

		}		
		
		
		if(!p_bAnimate){		
			$('#toparea_nav_holder').height(l_nHeight);	
			$('#toparea_tools').css('top',l_nHeight+'px');	
		}else{
			$('#toparea_nav_holder').animate( {'height':l_nHeight},_xCultureBeast._nScrollSpeed );
			$('#toparea_tools').animate( {'top':l_nHeight},_xCultureBeast._nScrollSpeed );
		}
		
	},
	
	loadTopAreaInhouseVideo : function(p_sData){
		_xCultureBeast.pauseTopArea();
		 eval(Base64.decode(p_sData));
	},
	
	loadTopAreaExternalVideo : function(p_sData){		
		_xCultureBeast.pauseTopArea();
		$('#toparea_videoholder').html( _xVideo.resizeCultureEmbeddedVideo(Base64.decode(p_sData)));
		
	}
	
};










_xCultureBeastPage = {

	_xCurrentHighlightVideoObj : null,
	_nSlideSpeed : 700,
	init : function(){
		
		$('#tweet-landing-item .linked_link').live('click',function(){
			var l_sNewLink = ($(this).attr('rel'));
			var newWindow = window.open(l_sNewLink, '_blank');
			newWindow.focus();
			return false;
		});
		
		$('.dim-the-lights').remove();
		$("#culture-video-player-holder").after('<div class="dim-the-lights"></div>');
		  
		$('#highlight-reel-holder .highlight-reel-item').click( function(){
			if($(this).find('.view-all-highlights').length != 0)
				return true;
			$('#highlight-reel-holder .highlight-reel-item').removeClass("highlight-reel-item-active");
			$(this).addClass("highlight-reel-item-active");
			var l_xThisObjData = $(this).data('videoData')
			
			
			if(l_xThisObjData.widescreen == 'Y'){
				$('#culture-video-player-holder').addClass('culture-video-player-holder-widescreen');
				$('#culture-video-player-spacer').addClass('culture-video-player-spacer-widescreen');
			}
			else{
				$('#culture-video-player-holder').removeClass('culture-video-player-holder-widescreen');
				$('#culture-video-player-spacer').removeClass('culture-video-player-spacer-widescreen');
			}
			
			$('#culture-video-player-holder').slideDown(_xCultureBeastPage._nSlideSpeed, function(){ _xCultureBeastPage.loadVideoInBox(l_xThisObjData) });
			$('#culture-video-player-spacer').slideDown(_xCultureBeastPage._nSlideSpeed);
			return false;
	     });
		
		$('#culture-video-player-holder .close-button').click( function(){
			$('#culture-video-player').empty()
			$('#culture-video-player-holder').slideUp(_xCultureBeastPage._nSlideSpeed, function(){ });	
			$('#culture-video-player-spacer').slideUp(_xCultureBeastPage._nSlideSpeed);
			$('#highlight-reel-holder .highlight-reel-item').removeClass("highlight-reel-item-active");
			$('#culture-video-player-holder .dim-lights-button').removeClass('raise-lights-button');
			_xCultureBeastPage.toggleDimLights(0);
			$('#shareThisHolder').hide();
			return false;												
		});340
		
		$('#culture-video-player-holder .dim-lights-button').click( function(){
			if( $(this).hasClass('raise-lights-button') ){
				$(this).removeClass('raise-lights-button');
				_xCultureBeastPage.toggleDimLights(0);
			}
			else{
				$(this).addClass('raise-lights-button');
				_xCultureBeastPage.toggleDimLights(1);
			}
			return false;
		});
		
		$('.second-feature-item p,.top-feature p').each( function(){
			if( $(this).next('.more').length > 0){
				var l_sTemp = $(this).next('.more');
				$(this).next('.more').remove();
				$(this).append(' ').append(l_sTemp);
			}
		});
		
		$('.second-feature-item, .top-feature').hover( function(){
				$(this).find('.more').css('background-position','0 -11px');					  
			}, function(){
				$(this).find('.more').css('background-position','0 0');					  
			}
			
		);
		
		$('#culture-video-player-holder .popup_sharelink .closebtn').live('click', function(){ 
				$(this).parents('.popup_sharelink').toggle().css('z-index',_nBFSInfoDepth++);
				$(this).parents('.popup_sharelink').siblings('.shareItPopup_link').children('.txt').toggleClass('txt_current');
		});
																				 
		$('#culture-video-player-holder .txt_email_dark').live('click', function(){
			
			var l_xObj = $(this).parent().next('.popup_sharelink');
			l_xObj.show();
			var l_nId = l_xObj.find('form').attr('id');
			showAllFormElements(l_nId);
			resetShareLinkForm(l_nId);
			l_xBounds =  $(this).position();
			var l_nTopOffset = 0;
			var l_nLeftOffset = 115;
			
			if(isUserLoged() && !isUserLogedAsFacebook()){ //if the user is logged in when you click	
				l_xObj.find('.show_email').hide();
			} else {
				l_xObj.find('.show_email').show();
			}
			 
			l_xObj.css('position','absolute').css('top',l_xBounds['top']+l_nTopOffset).css('left',l_nLeftOffset);
			 
		});
		 
		
		
		/*$('#culture-video-player-holder .popup_sharelink form').live('submit', function(){
			submitShareVideoItem($(this).attr('title'));
		});*/
		
		$('#culture-video-player-holder .sharethis').live('click', function(){ 
		 	l_xBounds =  $(this).position();
			var l_nTopOffset = 698;
			var l_nLeftOffset = $('#header').position();
			l_nLeftOffset = l_nLeftOffset['left'] + 300;
			  
			 
			$('#shareThisHolder').css('top',l_xBounds['top']+l_nTopOffset).css('z-index','9000').css('left',l_nLeftOffset).show();
			$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?&beastfull=1&culturevideo=1&url='+escape('https://web.archive.org/web/20110405084925/http://thedailybeast.com/video/item/' + _xCultureBeastPage._xCurrentHighlightVideoObj.assets_slug + '/') +'&title='+escape(_xCultureBeastPage._xCurrentHighlightVideoObj.title)+'&content='+escape(_xCultureBeastPage._xCurrentHighlightVideoObj.description)    );
		});
	
		
	},
	toggleDimLights : function(p_bShow){
		if(p_bShow){
			var l_nLeftOffset = $('#header').position();
			l_nLeftOffset = l_nLeftOffset['left'];
			console.log();
			
			var l_nWidthPadding = 0;
			if($.browser.safari)
				l_nWidthPadding = l_nLeftOffset/2;
				
			var l_nTopOffset = 400;
		 	$('#header').attr('org-z',$('#header').css('z-index'));
			$('#header').css('z-index',-1);
			$('.othernews').attr('org-z',$('.othernews').css('z-index'));
			$('.othernews').css('z-index',-1);
			$('#footer').attr('org-z',$('#footer').css('z-index'));
			$('#footer').css('z-index',-1);
			//dimLights
			positionContent = typeof(positionContent) != 'undefined' ? positionContent : $(".dim-the-lights").offset();
			$('.dim-the-lights').width($(window).width()).css({'opacity':0.90}).fadeIn('fast').height($(document).height() + l_nTopOffset).css('left',-positionContent.left);
		}else{
			$('.dim-the-lights').fadeOut('fast');
			$('#header').css('z-index',$('#header').attr('org-z'));
		}
			
	},
	
	loadVideoInBox : function(p_xJSONObject){

		 
		var l_bWidescreen = (p_xJSONObject.widescreen == 'Y');
		this._xCurrentHighlightVideoObj = p_xJSONObject;
		if(p_xJSONObject.video_type == 1){
			if(l_bWidescreen){
				_xVideo.addCultureTheatreInHouseWidescreenVideo(p_xJSONObject.uri,p_xJSONObject.still_uri,p_xJSONObject.title,'culture-video-player', true, true, true, p_xJSONObject.assets_id);
			}else{
				_xVideo.addCultureTheatreInHouseVideo(p_xJSONObject.uri,p_xJSONObject.still_uri,p_xJSONObject.title,'culture-video-player', true, true, true, p_xJSONObject.assets_id);
			}
		}else{
			if(l_bWidescreen){
				$('#culture-video-player').html(_xVideo.resizeCultureTheatreEmbeddedWidescreenVideo(p_xJSONObject.uri));
			}else{
				$('#culture-video-player').html(_xVideo.resizeCultureTheatreEmbeddedVideo(p_xJSONObject.uri));
			}
		}
		$('#shareThisHolder').hide();
		$('#culture-video-player-holder .mid-items').html(p_xJSONObject.div_meta_data); 
		$('#culture-video-player-holder .date').html(p_xJSONObject.div_date); 
		$('#culture-video-player-holder .video-description').html(p_xJSONObject.div_video_description);  
         	
	} 
	
};_xTweetSheet = {

	_nTopNumber : 0,
	_nTopTotalItems : 0,
	_nListingNumber : 1,
	_bAnimating : false,
	_bIsHovered : false,
	_bQueueAdvance : false,
	_bAutoPlay : true,
	_nTimeout: 6500,
	_nScrollSpeed: 200, 
	_xTimer:null,
	
	init : function(){
		
		$('#tweet-top-holder .linked_link, #tweet-rows .linked_link').live('click',function(){
			var l_sNewLink = ($(this).attr('rel'));
			var newWindow = window.open(l_sNewLink, '_blank');
			newWindow.focus();
			return false;
		});
		
		$('#tweet-top-holder .social_link_sharethis').click(function(){
			_xTweetSheet.updateShareThisLink();
		});
		
		$('#tweet-top-holder .social_link_email').click(function(){
			$(this).siblings('.popup_sharelink').show();
			var rel = $(this).attr('rel');
			showAllFormElements('form_sharelink_'+rel);
			resetShareLinkForm('form_sharelink_'+rel);
			if(isUserLoged() && !isUserLogedAsFacebook()){ 
				$('.show_email').hide();
			} else {
				$('.show_email').show();
			} 
			
		});
		$('#tweet-top-holder .popup_sharelink .closebtn').click(function(){
			$(this).parent().parent().hide();
		});
		
		$('#custom_header .textlink a').hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
		
		$('#tweet-top-holder .nav-items-holder a').live('click',function(){
			if(_xTweetSheet._bAnimating)
				return false;
			_xTweetSheet._bAnimating = true;
			var l_nDirection = parseInt($(this).attr('rel'));
			_xTweetSheet.animateTweetChange(l_nDirection);
			return false;
		});
		
		$('#tweet-rows .more-tweets a').click( function(){
			$('#tweet-rows .more-tweets .more-loader').show();
			_xTweetSheet.getFilteredResults(1);
			return false;
		});
		 
		
		$('#dropdown-list').jScrollPane({scrollbarWidth:22, scrollbarMargin:10});


		$('#tweet-cheet-holder .dropdown-selected-area').click( function(){
			$('#tweet-cheet-holder .dropdown-list-holder').toggle();
		});
		$('#tweet-cheet-holder .dropdown-list-holder').hide();
		$('#tweet-cheet-holder .dropdown-listing a').click( function(){
				
				$('#tweet-cheet-holder .dropdown-selected-area p').html($(this).html()).attr('rel',$(this).attr('rel'));
				$('#tweet-cheet-holder .dropdown-list-holder').hide();
				_xTweetSheet.getFilteredResults();
				return false;
		});
		
		$('#tweet-rotatecontrols .pause').live('click',function(){
			$('#tweet-cheet-holder').addClass('tweet-cheet-holder-pause');
			_xTweetSheet._bAutoPlay = false;
			_xTweetSheet._bQueueAdvance = false;
			clearTimeout(_xTweetSheet._xTimer);
		});
		$('#tweet-rotatecontrols .play').live('click',function(){
			$('#tweet-cheet-holder').removeClass('tweet-cheet-holder-pause');
			_xTweetSheet._bAutoPlay = true;
			_xTweetSheet.animateTweetChange(1);
		});
		
		this.startAutoPlay();
		this.setHovers();
	},
	
	
	setHovers:function(){
		
		$('#tweet-top-holder').hover(function(){
			_xTweetSheet._bIsHovered = true;
		},function(){
			_xTweetSheet._bIsHovered = false;
			setTimeout(function(){_xTweetSheet.checkIfHovering();},100);
		});
		
		
	},
	
	checkIfHovering:function(){
		if(!_xTweetSheet._bIsHovered){
			if(_xTweetSheet._bQueueAdvance && !_xTweetSheet._bAnimating&& !_xTweetSheet._bAutoPlay){
				_xTweetSheet.animateTweetChange(1);
			}
		}
	},
	
	
	
	
	startAutoPlay:function(){
		if($('#tweet-rotatecontrols').length)
			setTimeout(function(){
				if(_xTweetSheet._bAutoPlay){
					_xTweetSheet._xTimer = setTimeout(function(){
						_xTweetSheet.executeAutoPlay();
					},_xTweetSheet._nTimeout);
				}
			},200);
	},
	
	executeAutoPlay:function(){
		if (this._nTopTotalItems == 1) return false;
		
		if(this._bAutoPlay){
			if(this._bIsHovered){
				this._bQueueAdvance = true;
			}else {
				this.animateTweetChange(1);
			}
		}
	},
	
	animateTweetChange:function(p_nDirection){
		_xTweetSheet._bQueueAdvance = false;
		clearTimeout(_xTweetSheet._xTimer);
		var l_nNewsMakerId = $('#tweet-cheet-holder').attr('rel');
		_xTweetSheet._nTopNumber += p_nDirection;
		if(_xTweetSheet._nTopNumber < 0)
			_xTweetSheet._nTopNumber = _xTweetSheet._nTopTotalItems-1;
		else if(_xTweetSheet._nTopNumber == _xTweetSheet._nTopTotalItems )
			_xTweetSheet._nTopNumber = 0;
			
		$.ajax({
		   type: "GET",
		   url: "/include/ajax.php",
		   data: "a=getMoreTopTweets&p_nId="+l_nNewsMakerId+"&p_nOffset="+(_xTweetSheet._nTopNumber),
		   success: function(returnData){
			 $('.tweet-cheet-holder .tweet-top').fadeOut('slow', 
				function(){ $('#tweet-top-holder').html(returnData).fadeIn('fast',
					function(){
						_xTweetSheet._bAnimating = false;
						_xTweetSheet.startAutoPlay();
					}); 
				});
			
		   	}
		 }); 
	
		
	},
	
	
	
	calcCommentCounts : function(){
		
		var l_sReels = '';
		var l_nCount = 0;
		$('#tweet-rows-holder .tweet-item').each(function(){
			if(l_nCount)
				l_sReels += ',';
			l_sReels += $(this).attr('rel');
			l_nCount++;
		});
		
		if(l_sReels){
			DailybeastAjax._xArgs.data = 'a=getTwitterComments';
			//DailybeastAjax._xArgs.data += '&p_nNewsmakerId='+document.newsmakerid
			DailybeastAjax._xArgs.data += '&p_sTwitterArray='+l_sReels;
		
			DailybeastAjax._xArgs.returnDiv = '#return_div';	
			DailybeastAjax._xArgs.requestType = "GET"; 
			DailybeastAjax.makeAjaxCall(AJAX_URL);
		
		}
		
	},
	
	updateShareThisLink : function(){
		
		
		var l_sBody = Base64.encode(strip_tags($('#quotetext').html()).substr(0,255));
		var l_sUrl = Base64.encode($('.permalink').attr('value'));
		var l_sTitle = Base64.encode($('#tweet-top-holder .tweet-title').html());
	  
		var l_nLeft = $('#master').position();
		
		$('#shareThisHolder').css('top',550).css('z-index','1000').css('left',l_nLeft['left']+400 ).show();
		$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?&beastfull=1&url='+l_sUrl+'&title='+l_sTitle+ '&encode=1&content=' +l_sBody );
		
	},
	
	getFilteredResults : function(p_bMore){
		if(!p_bMore)
			this._nListingNumber = 0;
		else
			$('.tweet-rows .more-tweets .more-loader').show();
		
		var l_sExtra = '';
		var l_nId = $('.tweet-cheet-holder .dropdown-selected-area p').attr('rel');
		var l_nNewsMakerId = $('.tweet-cheet-holder').attr('rel');
		var l_bFromDom = (l_nId < 0 || l_nId > 0) ? 0 : 1;
		
		if(this._nListingNumber == 0 && !(l_nId < 0 || l_nId > 0) ) {
			l_bFromDom = 0;
			 l_sExtra ='&p_bFromLandingPage=1';
		}
		
			$.ajax({
			   type: "GET",
			   url: "/include/ajax.php",
			   data: "a=getMoreTweets&p_bFromDom="+l_bFromDom+"&p_nId="+l_nNewsMakerId+"&p_nAuthorId="+l_nId+"&p_nOffset="+(this._nListingNumber++)+l_sExtra,
			   success: function(returnData){
				 $('.more-tweets').before(returnData);
			   }
			 });
		return false;				
	}
	
};$(document).ready(function(){
	if(document._bIsNominates)
		_xNominates.init();
});


_xNominates = {
	_xCurrentVideoObj : null,
	_xDefaultVideoObj : null,
	_nSlideSpeed:400,
	_nFadeSpeed:350,
	
	init:function(){
		_xNominates.setHeaderButtons();
		_xNominates.setRollovers();
		_xNominates.setVideoClicks();
		_xNominates.setVideoOptions();
		_xNominates.setDefaultVideoObject();
		_xNominates.setPullquoteCredits();
		_xNominates.setHovers();
		_xNominates.setCenterPhotoHack();
	},
	
	setCenterPhotoHack:function(){
		$('#nominates_main .float_nominates-centerphoto').each(function(){
			
			var test = $(this).clone(true);
			$(this).parent().before(test).before('<div class="gap10"></div>');;
			$(this).remove();
			
		});
		
	},
	setHovers:function(){
		
		$('#custom_header .textlink a').hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
		
	},
	
	
	setPullquoteCredits:function(){
		
		$('.Nominates-PullQuote-Credit').each(function(){
			$(this).wrap('<div class="Nominates-Pullquote-Credit-holder"></div>');
			$(this).prepend('<div class="Nominates-Pullquote-Credit-before"></div>');
			$(this).append('<div class="Nominates-Pullquote-Credit-after"></div>');
			
		});
	},
	
	setHeaderButtons:function(){
		
		/*$('#custom_header .sharethis a').click(function(){
			var l_nLeftOffset = $('#header').position();
			l_nLeftOffset = l_nLeftOffset['left'] + 610;
			
			$('#shareThisHolder').css('top',250).css('z-index','9000').css('left',l_nLeftOffset).show();
			$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?&beastfull=1&culturevideo=1&url='+escape(window.location) +'&title='+escape($('#maintitle').html())+'&content='+escape( $('#nominates_main').html() )  );
			
		});*/
		
		
		
		$('#custom_header .icon_email_full').live('click', function(){
			
			var l_xObj = $(this).parent().next('.popup_sharelink');
			l_xObj.show();
			var l_nId = l_xObj.find('form').attr('id');
			showAllFormElements(l_nId);
			resetShareLinkForm(l_nId);
			l_xBounds =  $(this).position();
			var l_nTopOffset = 0;
			
			if(isUserLoged() && !isUserLogedAsFacebook()){ //if the user is logged in when you click	
				l_xObj.find('.show_email').hide();
			} else {
				l_xObj.find('.show_email').show();
			}
			 
			l_xObj.css('position','absolute').css('top',l_xBounds['top']+l_nTopOffset).css('right',0);
			 
		});
		 	
		
		
	},
	
	setDefaultVideoObject:function(){
		
		_xNominates._xDefaultVideoObj = $('#nominates_item_0').data('videoData')
		
	},
	
	
	
	rolloverPopIn:function(target){
		
		 var l_nHeight = $(target).height();
		 $(target).find('.min_height').height( l_nHeight );
		
		if($.browser.msie){
			$(target).find('.rollover_holder').show();
			$(target).find('.item_more').hide();
		}
		else{
			setTimeout(function(){
				if( $(target).hasClass('item_active') ){
					$(target).find('.rollover_holder').fadeIn(_xNominates._nFadeSpeed);
					$(target).find('.item_more').animate({
					  opacity: 0
					}, _xNominates._nFadeSpeed);
				}
			},250);
		}
		$(target).addClass('item_active');
		$(target).parent().addClass('nominates_row_active');
	},
	
	rolloverPopOut:function(target){
		$(target).find('.rollover_holder').hide();
		$(target).find('.item_more').stop().show().css('opacity',1);
		$(target).removeClass('item_active');
		$(target).parent().removeClass('nominates_row_active');
	},
	
	setRollovers : function(){
		$('#nominates_content .item_rollover').each(function(){
			
			
			$(this).hover(function(){
				_xNominates.rolloverPopIn(this);
			},function(){
				_xNominates.rolloverPopOut(this);
			});
			
		});
	},
	
	setVideoClicks : function(){
		
		$('#nominates_content .item_video a').click(function(){
			if(! $(this).parents('.item').hasClass('item_selected') ){
				$('#nominates_content .item_selected').removeClass("item_selected");
				$(this).parents('.item').addClass("item_selected");
				var l_xThisObjData = $(this).parents('.item').data('videoData')
				
				
				if(l_xThisObjData.widescreen == 'Y')
					$('#nominates-sliding-video-player-holder').addClass('nominates-video-player-holder-widescreen');
				else
					$('#nominates-sliding-video-player-holder').removeClass('nominates-video-player-holder-widescreen');
				
				$('#nominates-sliding-video-player-holder').slideDown(_xNominates._nSlideSpeed, function(){ _xNominates.loadVideoInBox(l_xThisObjData) });
				
				_xNominates.rolloverPopOut($(this).parents('.item'));
			}
			return false;
		});
		
	},
	
	loadVideoInBox: function(p_xJSONObject){
		 
		this._xCurrentVideoObj = p_xJSONObject;
		if(p_xJSONObject.video_type == 1){
			if(p_xJSONObject.widescreen == 'Y')
				_xVideo.addNominatedSlidingInHouseWidescreenVideo(p_xJSONObject.uri,p_xJSONObject.still_uri,p_xJSONObject.title,'nominates-sliding-video-player', true, true, true, p_xJSONObject.assets_id);
			else
				_xVideo.addNominatedSlidingInHouseVideo(p_xJSONObject.uri,p_xJSONObject.still_uri,p_xJSONObject.title,'nominates-sliding-video-player', true, true, true, p_xJSONObject.assets_id);
		}else{
			if(p_xJSONObject.widescreen == 'Y')
				$('#nominates-sliding-video-player').html(_xVideo.resizeNominatesEmbeddedWidescreenVideo(p_xJSONObject.uri));
			else 
				$('#nominates-sliding-video-player').html(_xVideo.resizeNominatesEmbeddedVideo(p_xJSONObject.uri));
		}
		
		if(p_xJSONObject.widescreen == 'Y')
			$('#nominates-sliding-video-player-holder').addClass('nominates-video-player-holder-widescreen');
		else
			$('#nominates-sliding-video-player-holder').removeClass('nominates-video-player-holder-widescreen');
		
		$('#shareThisHolder').hide();
		$('#nominates-sliding-video-player-holder .mid-items').html(p_xJSONObject.div_meta_data); 
		$('#nominates-sliding-video-player-holder .date').html(p_xJSONObject.div_date); 
		$('#nominates-sliding-video-player-holder .video-description').html(p_xJSONObject.div_video_description);  
         	
	} ,
	
	
	setVideoOptions:function(){
		
		$('#nominates-sliding-video-player-holder .close-button').click( function(){
			$('#nominates-sliding-video-player').empty()
			$('#nominates-sliding-video-player-holder').slideUp(_xCultureBeastPage._nSlideSpeed, function(){ });	
			$('#nominates-sliding-video-player-spacer').slideUp(_xCultureBeastPage._nSlideSpeed);
			$('#nominates_content .item_selected').removeClass("item_selected");
			$('#nominates-sliding-video-player-holder .dim-lights-button').removeClass('raise-lights-button');
			_xNominates.toggleDimLights(0); 
			$('#shareThisHolder').hide();
			return false;												
		});
		
		$('#nominates-sliding-video-player-holder .dim-lights-button').click( function(){
			if( $(this).hasClass('raise-lights-button') ){
				$(this).removeClass('raise-lights-button');
				$('#nominates-sliding-video-player-holder').css('z-index','9');
				_xNominates.toggleDimLights(0);
			}
			else{
				$(this).addClass('raise-lights-button');
				$("#nominates-sliding-video-player-holder").after('<div class="dim-the-lights" id="dim-the-lights"></div>');
				$('#nominates-sliding-video-player-holder').css('z-index','9899');
				_xNominates.toggleDimLights(1);
			}
			return false;
		});
		
		$('#nominates-native-video-player-holder .dim-lights-button').click( function(){
			if( $(this).hasClass('raise-lights-button') ){
				$(this).removeClass('raise-lights-button');
				$('#nominates-native-video-player-holder').css('z-index','9');
				_xNominates.toggleDimLights(0);
			}
			else{
				$(this).addClass('raise-lights-button');
				$("#nominates-native-video-player-holder").after('<div class="dim-the-lights" id="dim-the-lights"></div>');
				$('#nominates-native-video-player-holder').css('z-index','9899');
				_xNominates.toggleDimLights(1);
			}
			return false;
		});
		
		
		$('#custom_header .popup_sharelink .closebtn,#nominates-sliding-video-player-holder .popup_sharelink .closebtn, #nominates-native-video-player-holder .popup_sharelink .closebtn').live('click', function(){ 
				$(this).parents('.popup_sharelink').toggle().css('z-index',_nBFSInfoDepth++);
				$(this).parents('.popup_sharelink').siblings('.shareItPopup_link').children('.txt').toggleClass('txt_current');
		});

		$('#nominates-sliding-video-player-holder .txt_email_dark, #nominates-native-video-player-holder .txt_email_dark').live('click', function(){
			
			var l_xObj = $(this).parent().next('.popup_sharelink');
			l_xObj.show();
			var l_nId = l_xObj.find('form').attr('id');
			showAllFormElements(l_nId);
			resetShareLinkForm(l_nId);
			l_xBounds =  $(this).position();
			var l_nTopOffset = 0;
			var l_nLeftOffset = 115;
			
			if(isUserLoged() && !isUserLogedAsFacebook()){ //if the user is logged in when you click	
				l_xObj.find('.show_email').hide();
			} else {
				l_xObj.find('.show_email').show();
			}
			 
			l_xObj.css('position','absolute').css('top',l_xBounds['top']+l_nTopOffset).css('left',l_nLeftOffset);
			 
		});
		 	
		$('#nominates-sliding-video-player-holder .popup_sharelink form, #nominates-native-video-player-holder .popup_sharelink form').live('submit', function(){
			submitShareVideoItem($(this).attr('title'));
		});
		
		
		$('#nominates-sliding-video-player-holder .sharethis').live('click', function(){ 
		 	var l_xBounds =  $(this).position();
		 	var l_xHolderBounds =  $('#nominates-sliding-video-player-holder').position();
			var l_nTopOffset = 350;
			var l_nLeftOffset = $('#header').position();
			l_nLeftOffset = l_nLeftOffset['left'] + 300;
			  
			 
			$('#shareThisHolder').css('top',l_xBounds['top']+l_xHolderBounds['top']+l_nTopOffset).css('z-index','9000').css('left',l_nLeftOffset).show();
			$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?&beastfull=1&culturevideo=1&url='+escape('https://web.archive.org/web/20110405084925/http://thedailybeast.com/video/item/' + _xNominates._xCurrentVideoObj.assets_slug + '/') +'&title='+escape(_xNominates._xCurrentVideoObj.title)+'&content='+escape(_xNominates._xCurrentVideoObj.description)    );
		});	
		
		$('#nominates-native-video-player-holder .sharethis').live('click', function(){ 
		 	var l_xBounds =  $(this).position();
		 	var l_xHolderBounds =  $('#nominates-native-video-player-holder').position();
			var l_nTopOffset = 350;
			var l_nLeftOffset = $('#header').position();
			l_nLeftOffset = l_nLeftOffset['left'] + 300;
			  
			 
			$('#shareThisHolder').css('top',l_xBounds['top']+l_xHolderBounds['top']+l_nTopOffset).css('z-index','9000').css('left',l_nLeftOffset).show();
			$('#shareThisHolderIFrame').attr('src','/templates/sharethis.php?&beastfull=1&culturevideo=1&url='+escape('https://web.archive.org/web/20110405084925/http://thedailybeast.com/video/item/' + _xNominates._xDefaultVideoObj.assets_slug + '/') +'&title='+escape(_xNominates._xDefaultVideoObj.title)+'&content='+escape(_xNominates._xDefaultVideoObj.description)    );
		});	
		
		
	},
	
	
	toggleDimLights : function(p_bShow){
		if(p_bShow){
			var l_nLeftOffset = $('#header').position();
			l_nLeftOffset = l_nLeftOffset['left'] + $('#nominates_content .nominates_col1').width();
			
			var l_nWidthPadding = 0;
			if($.browser.safari)
				l_nWidthPadding = l_nLeftOffset/2;
				
			var l_nTopOffset = $('#nominates_content').position();
			var l_nTopOffset = l_nTopOffset['top'] + $('#header-spacer').height() ;
			$('#nominates_content').css('z-index',400);
			$('#nominates_content .nominates_col2').css('z-index',400);
		 	$('#header').attr('org-z',$('#header').css('z-index'));
			$('#header').css('z-index',-1);
	//		$('.othernews').attr('org-z',$('.othernews').css('z-index'));
	//		$('.othernews').css('z-index',-1);
			$('#footer').attr('org-z',$('#footer').css('z-index'));
			$('#footer').css('z-index',-1);
			
			$('#dim-the-lights').width($(document).width()).css('opacity',0.90).fadeIn('fast').height($(document).height() + l_nTopOffset).css('left',-l_nLeftOffset).css('top',-l_nTopOffset);
			
		 	$('#custom_header').attr('org-z',$('#custom_header').css('z-index'));
			$('#custom_header').css('z-index',1);
			
			$('#inner_comment_area').addClass('comment-z-hide');
			
			$('.nominates-heading-fix').css('z-index',-1);
			
		}else{
			$('#nominates_content .nominates_col2').css('z-index',2);
			$('#dim-the-lights').fadeOut('fast');
			$('#header').css('z-index',$('#header').attr('org-z'));
			$('#custom_header').css('z-index',100);
			$('#nominates_content').css('z-index',2);
			$('#dim-the-lights').remove();
			$('#inner_comment_area').removeClass('comment-z-hide');
			//$('.nominates-heading-fix').css('z-index',7777);
		}
			
	},
	
	getArchivePage:function(p_nPage){
		
		DailybeastAjax._xArgs.data = 'a=getNominatesArchivePage';
		DailybeastAjax._xArgs.data += '&p_nPage='+p_nPage;
		DailybeastAjax._xArgs.returnDiv = '#nominates_archive';
		//DailybeastAjax._xArgs.callBack = DailybeastAjax.getNewsmakerCheatsheetViewall_callback;
		//DailybeastAjax._xArgs.requestType = "GET"; 
		DailybeastAjax._xArgs.loader = true;
		DailybeastAjax.makeAjaxCall('/include/ajax.php');
		
	}
	
};/**
 * @author Andres Garcia - Zemoga Inc. - 11-13-09
 * @class specific code for the Header Top Nav
 * @version 1.0
 */

var num_timeout = 0;
		
		var STR_SEARCH_DEFAULT = "Search The Daily Beast";
		var STR_SEARCH_WEB_DEFAULT = "Search The Web";
		
		 $(
			 function(event){
			 	
				//Focus the search text field
				$("#header .menu_up input").focus(
					function(event){
						if ($(this).val() == STR_SEARCH_DEFAULT || $(this).val() == STR_SEARCH_WEB_DEFAULT) {
							$(this).val("");
							$(this).css("color","#000");
						}
					}
				);
				
				//Blur the search text field
				$("#header .menu_up input").blur(
					function(event){
						if ($(this).val() == "") {
							$(this).val($('#searchform #q').attr("rel"));
							$(this).css("color","#ccc");
						}
					}
				);
			 	
				//Top nav hover menus
				$("ul.top_menu li").hover(
					function(event){
						$(this).find("div:first").show();
						
						if($(this).parent("ul").hasClass("top_menu"))
							$(this).find("a:first").addClass("over");
							
						event.stopPropagation();	
					},
					function(event){
						$(this).find("div:first").hide();
						if($(this).parent("ul").hasClass("top_menu"))
							$(this).find("a:first").removeAttr("class");
					}
				);
				
				//Hide all menus
			 	$("ul.top_menu li div:first").hide();
				
				//Click on the search options button
				
				//$(".btn_placesearch").css("cursor","default");
				//$(".btn_placesearch").click(function(event){event.preventDefault();});
				
				
				$(".btn_placesearch").click(
					function(event){
						
						var obj_menu = $("ul#search_menu");
						
						
						if(obj_menu.css("display") == "none")
							obj_menu.slideDown();
						else
							obj_menu.slideUp();
						
						//Close the menu if the user clicks anywhere on the page
						$(document).mousedown(
							function(event){
								obj_menu.slideUp();
								$(document).unbind("mousedown");
							}
						);
						
						//make sure if the user clicks within the menu, it doesn't disappear
						$("ul#search_menu, ul#search_menu li, ul#search_menu li a").mousedown(
							function(event){
								event.stopPropagation();
								return false;
							}
						);			
						
						//Search Menu interaction
						$("ul#search_menu li a").bind(
							"click",
							function(event){
								event.preventDefault();
								var int_selectedIndex = $("ul#search_menu li a").index(this);
								
								if(int_selectedIndex == 0){
									$("#radio1").attr("checked", true);
									$('#searchform #q').attr("rel", STR_SEARCH_DEFAULT);
									
									if ($('#searchform #q').val() == STR_SEARCH_DEFAULT || $('#searchform #q').val() == STR_SEARCH_WEB_DEFAULT)
										$('#searchform #q').val(STR_SEARCH_DEFAULT);
								}else{
									$("#radio2").attr("checked", true);
									$('#searchform #q').attr("rel", STR_SEARCH_WEB_DEFAULT);
									
									if ($('#searchform #q').val() == STR_SEARCH_DEFAULT || $('#searchform #q').val() == STR_SEARCH_WEB_DEFAULT)
										$('#searchform #q').val(STR_SEARCH_WEB_DEFAULT);
								}
								
								obj_menu.slideUp();
							}
						);
					}
				);
				
				//Get more Menu interaction
				$(".get_more").click(
						function(event){
							$(".pop_getmore").show();
							$(document).mouseup(
								function(event){
									$(document).unbind("mouseup");
									$(".pop_getmore").hide();
								}
							);
						}
				);
			 }
		 );;/**
 * @Description:Initialize the Overlays and the secuence
 * @Date: Dec-21-09
 * @function:initPageLogin
 * */
function  initPageLogin()
{
	
	/*
	 * Show  menu login
	 * 
	 * **/
	if (getCookie('tdb_info')){
		$("#menuLogout").show();
		$("#menuLogin").hide();
	}else{
		$("#menuLogout").hide();
		$("#menuLogin").show();
	}
	
	//Fix for opera in MAC
	//if (($.browser.opera) &&  (navigator.appVersion.indexOf("Mac")!=-1)) { $("embed").css("visibility", "hidden");}
	$("embed").css("visibility", "visible");
	
	/*
	 * Show the comment pannel when the user is connected with facebook
	 * 
	 * */
	/*
	if($("#comment_facebook").val() != undefined)
	{
		if (!getCookie('flagtdb_login')){
			FB.Connect.get_status().waitUntilReady(function(stat) {
				 if (stat != FB.ConnectState.userNotLoggedIn) {
					 $(".comment_facebook").show();			 
				 }
			});
		
	}
	*/
	/*
	$(".chkcomments").each(function(){
		$(this).attr('checked',  true);
		
	});
	*/
	//$('#'+idCheckBox+":checkbox").attr('checked',  $('#' +idCheckBox).is(':checked'));
	
	
	//$("#menuLogout").show();
	
	
	 /*-------------------------------------------------*/
	 /* OVERLAYS EVENTS 								*/
	 /*-------------------------------------------------*/
	
	//LOGIN TRIGGER
	$("#fblogin_form").jqm({modal:false, 
		toTop:true, 
		overlay:60, 
		trigger: "#login_link2", 
		closeClass:"fb2_close, #loginButton",
		onShow:function(h){
			$('.fb_messages', h.w).hide();
			//$("embed").css("visibility", "visible");
			if (($.browser.opera) &&  (navigator.appVersion.indexOf("Mac")!=-1)) { $("embed").css("visibility", "hidden");}
			h.w.show();
			}, 
		onHide:function(h){
			clearFormRegister();
			clearFormLogin();
			clearFormAdd();
			clearFormExist();
			$("embed").css("visibility", "visible");
			h.w.hide();
			h.o.remove();
		}  
	});
	
		 
	//REGISTER TRIGGER
	
	$("#fbregister_form").jqm({modal:false, 
		toTop:true, 
		overlay:60,
		trigger: "#register_link2, #loginButton, #registerCheatSheetSignInForm, .popup_emailsignup .register_line register", 
		closeClass:"fb_close", 
		onShow:function(h){
			$('.fb_messages', h.w).hide();
			if (($.browser.opera) &&  (navigator.appVersion.indexOf("Mac")!=-1)) { $("embed").css("visibility", "hidden");}
			h.w.show();			
		},
		onHide:function(h){
			clearFormRegister();
			clearFormLogin();
			clearFormAdd();
			clearFormExist();
			$("embed").css("visibility", "visible");
			h.w.hide();
			h.o.remove();
		}
	});
	
	//ADD ACCOUNT TRIGGER
	$('#fbaddaccount_form').jqm({modal:false, 
		toTop:true, 
		overlay:60,
		trigger:"#existButton",
		closeClass:"fb_close, #link_existAccount",
		onShow:function(h){
			$('.fb_messages', h.w).hide();
			if (($.browser.opera) &&  (navigator.appVersion.indexOf("Mac")!=-1)) { $("embed").css("visibility", "hidden");}
			h.w.show();
			},
		onHide:function(h){
				clearFormRegister();
				clearFormLogin();
				clearFormAdd();
				clearFormExist();
				$("embed").css("visibility", "visible");
				h.w.hide();
				h.o.remove();
			}	
		});
	
	//EXIST ACCOUNT TRIGGER
	$("#fbexistaccount_form").jqm({modal:false, 
		toTop:true, 
		overlay:60, 
		trigger:"#link_existAccount", 
		closeClass:"fb2_close, #existButton", 
		onShow:function(h){
			$('.fb_messages', h.w).hide();
			if (($.browser.opera) &&  (navigator.appVersion.indexOf("Mac")!=-1)) { $("embed").css("visibility", "hidden");}
			h.w.show();
		},
		onHide:function(h){
			clearFormRegister();
			clearFormLogin();
			clearFormAdd();
			clearFormExist();
			$("embed").css("visibility", "visible");
			h.w.hide();
			h.o.remove();
		}
	});
	
	//CONFIRM MESSAGES TRIGGER
	$("#confirm_message").jqm({modal:false, 
		toTop:true, 
		overlay:60,
		closeClass:"title_confirm_message",
		onShow:function(h){
		if (($.browser.opera) &&  (navigator.appVersion.indexOf("Mac")!=-1)) { $("embed").css("visibility", "hidden");}
			h.w.show();
		},
		onHide:function(h){
			clearFormRegister();
			clearFormLogin();
			clearFormAdd();
			clearFormExist();
			$("embed").css("visibility", "visible");
			h.w.hide();
			h.o.remove();
		}
	});
	
	
	/*-------------------------------*/
	/*CLICK CALLS					 */
	/*-------------------------------*/	
	/*Popup saved links*/
	 $('#saved_link').click(function (){
		 $('#savedlinks').show();
		 $('#saved_link').addClass('button_current');
	})
	
	$("#close_savedlinks").click(function(){
		$('#savedlinks').hide();
		$('#saved_link').removeClass('button_current');
	}) ;
	 
	 
	 //Account page edit
	 $('#btn_editid').click(function (){
		$('#acctpageSwitch').attr('class','edit');
		//document.getElementById('acct_radio2').checked = true;
		//document.getElementById('acct_icon2').style.backgroundPosition = 'bottom';
		//document.getElementById('acct_icon1').style.backgroundPosition = 'top';
		 
		FB.getLoginStatus(function(response) {
			if (response.session) {
				$("#accountfb_submit").show();
				$("#account_submit").hide();
				$("#btn_editid").hide();
			 }
			 else
			 {			 
				$("#accountfb_submit").hide();
				$("#account_submit").show();
				$("#btn_editid").hide();
				 }
		});

	}) 
	
	//style for the account button in the account page
	/*
	if(document.accountId){
			$('#account_link').addClass('button_current');
		}	
	*/
			 
	//Event submit for the buttons of the FORMS
	 //Register
	$('#submit_Register').click(function (){
		formToValidate = document.getElementById('form_register');
		if (validateAge(formToValidate.elements['regyear'].value ))
		{
			$(".fb_messages").hide();
			$(".fb_messages").html(' ');
			$("#fbregister_form").jqmHide();
		}else
		{
			errors = validateRegister();
			if(showErrors(errors) <= 0)	{
				AjaxSaveRegisterForm();		
			}
		}
	});
	
	//Login
	$('#loginbutton_submit').click(function(){
		
		f = document.getElementById('form_login');
		if (f.elements['check_lostPassword'].checked)
		{
		//Rememeber Password
			 if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(f.elements['rempassword'].value)) == false)
				{
				 	$('.fbmessage_p').html("ERROR:<br>Please enter a valid Email Address.");
					$('.fb_messages').show();
				 }
			 else{
				 verifyMail(f.elements['rempassword'].value,1,'rempassword', 'form_login');
				 }
		}
		else if(f.elements['check_lostUsername'].checked)
		{
		//Remember Username
			if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(f.elements['remusername'].value)) == false)
			{
			 	$('.fbmessage_p').html("ERROR:<br>Please enter a valid Email Address.");
				$('.fb_messages').show();
			 }
			else{
				 verifyMail(f.elements['remusername'].value,2,'remusername','form_login');
		 	}			
		}
		else{
		//Login
			errors = validateLoginData();
			if(showErrors(errors) <= 0)	{
				
				AjaxLoginUser(f.elements['loginusername'].value, f.elements['loginpassword'].value);
			 }	
		}
		
	});
	
	
	
	//Exist account Form
	$('#existaccount_buton').click(function(){
		f = document.getElementById('form_existAccount');
		if (f.elements['exist_lostpassword'].checked)
		{
		//Rememeber Password
			 if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(f.elements['existusername'].value)) == false)
				{
				 	$('.fbmessage_p').html("ERROR:<br>Please enter a valid Email Address.");
					$('.fb_messages').show();
				 }
			 else{
				 verifyMail(f.elements['existusername'].value,1,'existusername','form_existAccount');
				 }
		}
		else if(f.elements['exist_lostusername'].checked)
		{
		//Remember Username
			if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(f.elements['existusername'].value)) == false)
			{
			 	$('.fbmessage_p').html("ERROR:<br>Please enter a valid Email Address.");
				$('.fb_messages').show();
			 }
			else{
				 verifyMail(f.elements['existusername'].value,2,'existusername','form_existAccount');
		 	}			
		}
		else{
		//Login
			errors = valideExistData();
			if(showErrors(errors) <= 0)	{
				
				AjaxExistUser(FB.getSession().uid);
			 }	
		}

	});
	

	//Addaccount button
	
	$('#addaccount_button').click(function(){
		errors = validateAddRegister();
		if(showErrors(errors) > 0)	{
			for (i=0;i<errors.length;i++)
			{
				if (errors[i] == "close")
				{
					$("#fbaddaccount_form").jqmHide();
				}
			}
		}
		else{		
			AjaxAddAccount(FB.getSession().uid);
		}
	});
	
	//ACCOUNT PAGE FORM
	$("#accountfb_submit").click(function(){
		errors = validateUpdateAccountFb();
		if(showErrorsAccount(errors) <= 0)	{
			AjaxUpdateFbUser(FB.getSession().uid);
			}		
		});
	
	
	//LOGOUT CALLL
	$("#signout_link").click(function(){
		if (getCookie('tdb_info') && getCookie('flagtdb_login')){
			logoutTDB();
		}
		else if (getCookie('tdb_info'))
		{	
			logoutFb();
		}	
		else
		{
			logoutTDB();
		}
	});

	
	/*Lost Password and Lost Username Functions*/
	$("#check_lostPassword").click(function(){
		f = document.getElementById('form_login');
		if (f.elements['check_lostPassword'].checked)
		{
			$("#listrempassword").show();
			$("#listpassword").hide();
			$("#listusername").hide();
			$("#listremusername").hide();
			$("#check_lostUsername").hide();
			$("#p_lostUsername").hide();
			
		}else{
			$("#listrempassword").hide();
			$("#listremusername").hide();
			$("#listpassword").show();
			$("#listusername").show();
			$("#check_lostUsername").show();
			$("#p_lostUsername").show();
		}
	});
	
	$("#check_lostUsername").click(function(){
		f = document.getElementById('form_login');
		if (f.elements['check_lostUsername'].checked)
		{
			$("#listrempassword").hide();
			$("#listpassword").hide();
			$("#listusername").hide();
			$("#listremusername").show();
			$("#check_lostPassword").hide();
			$("#p_lostPassword").hide();
			
		}else{
			$("#listrempassword").hide();
			$("#listremusername").hide();
			$("#listpassword").show();
			$("#listusername").show();
			$("#check_lostPassword").show();
			$("#p_lostPassword").show();
		}
	});
	
	//FOR THE EXIST ACCOUNT FORM
	$("#exist_lostusername").click(function(){
		f = document.getElementById('form_existAccount');
		if (f.elements['exist_lostusername'].checked)
		{
			$("#list_exusername").show();
			$("#p_lostusername").show();
			$("#list_expassword").hide();
			$("#p_lostpassword").hide();
			$("#list_exusername label").text('Email Address:');
			
		}else{
			$("#list_exusername").show();
			$("#p_lostusername").show();
			$("#list_expassword").show();
			$("#p_lostpassword").show();
			$("#list_exusername label").text('Username:');
			$('#existusername').text('');
		}
	});
	
	$("#exist_lostpassword").click(function(){
		f = document.getElementById('form_existAccount');
		if (f.elements['exist_lostpassword'].checked)
		{
			$("#list_exusername").show();
			$("#p_lostusername").hide();
			$("#list_expassword").hide();
			$("#p_lostpassword").show();
			$("#list_exusername label").text('Email Address:');
			
		}else{
			$("#list_exusername").show();
			$("#p_lostusername").show();
			$("#list_expassword").show();
			$("#p_lostpassword").show();
			$("#list_exusername label").text('Password:');
			$('#existusername').text('');
		}
	});

	//EXTENDED PERMISIONS AND CHECKBOX CALLS	
		verifyExtendedPermisions(''); 	
		showCheckUsersFb(); //show the checkboxes only for the Facebook Connected users
		//verifyCheckBoxes();
	
}
/*
 * Those three function work as javascript validation if the user is logged or no and
 * if those users have any relation with facebook.
 * 
 * 
 */


/*
 * Check if the user is logged
 * 
 */
function isUserLoged(){
	return getCookie('tdb_info')?true:false;
}

/*
* Check if the user is logged with facebook linked account or not.
* 
*/
function isUserLogedAsFacebook(){
	return getCookie('tdb_info') && !getCookie('flagtdb_login')?true:false;
}

/*
* Check if the user is logged with daily beast account.
* 
*/
function isUserLogedAsDailyBeast(){
	return getCookie('tdb_info') && getCookie('flagtdb_login')?true:false;
}

/*
* Check if the user has an account liked with facebook.
* 
*/
function userHasLinkedWithFacebook(){
	return false;
}



/*
 * Show Checkboxes only for the facebook users connected
 * */
function showCheckUsersFb()
{
	
	if (!getCookie('flagtdb_login')){
		FB.getLoginStatus(function(response) {
			if (response.session) {
			 	$('.comment_facebook').show();
					$('.aloneinput').show();
					$('.alonelabel').show();		 
			 }else{
				 	$('.comment_facebook').hide();
					$('.aloneinput').hide();
					$('.alonelabel').hide();
			 }
			 if (getCookie('tdb_info')){
				 setTimeout(function(){displayComment();},1500);
			 }else{
				$('#notloggedin_commentarea').show();
				displayNoComment();
			}
		});
	}else{
		$('.comment_facebook').hide();
		$('.aloneinput').hide();
		$('.alonelabel').hide();
		if (getCookie('tdb_info')){
			displayComment();
		}else
		{
			$('#notloggedin_commentarea').show();
			displayNoComment();
		}
		
	}
}

/*
 * Verify permisions
 * */
function verifyExtendedPermisions(idCheckBox)
{
	
	if (!getCookie('flagtdb_login'))
	{
		if (idCheckBox == "")
		{
			idCheckBox = "chk_comm_facebook";
		}else{
			
			idCheckBox = idCheckBox;
		}
		if(isUserLoged()){	
			AjaxShowCheckboxFb(idCheckBox);
		}
	}
	else{
		
		if (getCookie('tdb_info'))
		{
			showCheckUsersFb();	
		}
		
	}

	
}



function verifyPermisions(idcheckbox)
{
	FB.getLoginStatus(function(response) {
		  if (response.session) {
			 	sqlComm = "SELECT status_update FROM permissions WHERE uid ="+response.session.uid;	
			 	var query = FB.Data.query(sqlComm);
			 	query.wait(function(result) {
					if (result != null && result != undefined)
					{
						status = result[0].status_update;
						   if (status == 1)
						   {		
							   //$('input[name=chk_comm_facebook]').attr('checked', true);
							   $(idcheckbox).attr("checked", true);
						   }
						   else{
							   //$('input[name=chk_comm_facebook]').attr('checked', false);
							   $(idcheckbox).attr("checked", false);
								
						   }
					}else
					{
						//$('input[name=chk_comm_facebook]').attr('checked', false);
						$(idcheckbox).attr("checked", false);
					}
					   
				});
		 }
		 else
		 {
			//if usert not loged in, the checkbox is invisible
			 $(idcheckbox).hide();
			 }
	});
	
	
}
/*
 * Verify the state of the checkbox for comments
 * */ 
/*
function verifyCheckBoxes()
{
	
	FB.Connect.get_status().waitUntilReady(function(stat) {
		 if (stat != FB.ConnectState.userNotLoggedIn) {
			 	AjaxShowCheckboxFb();
		 }
	});
}
*/
/*-------------------------------*/
/*CLEAR FORMS					 */
/*-------------------------------*/
/*
 * Close all forms of the account process
 * */

function closeFormsAccount()
{
	$('#fblogin_form').hide();
	$('#fbregister_form').hide();
	$('#fbexistaccount_form').hide();
	$('#fbaddaccount_form').hide();
	$('#register_errors').hide();
}

/**
 * @Description: Clear the register form content
 * */
function clearFormRegister()
{
	f = document.getElementById('form_register');
	f.elements['regusername'].value = "";
	f.elements['regfirstname'].value = "";	
	f.elements['reglastname'].value = "";	
	f.elements['regzipcode'].value = "";	
	f.elements['regemail'].value = "";
	f.elements['regpassword'].value = "";
	f.elements['regpasswordconfirm'].value = "";
	f.elements['regyear'].selectedIndex = 0;
	f.elements['regmonth'].selectedIndex = 0;
	f.elements['regday'].selectedIndex = 0;		
	f.elements['country'].selectedIndex = 0;
	//f.elements['regsignup'].checked = false;
	f.elements['regoffers'].checked = false;
	//f.elements['regcultural'].checked = false;
	f.elements['regemailtype'].checked = false;

}
/**
 * @Description: Clear the login form content
 * */
function clearFormLogin()
{
	f=document.getElementById('form_login');
	f.elements['loginusername'].value = "";
	f.elements['loginpassword'].value = "";
	
}
/**
 * @Description: Clear the form add
 * */
function clearFormAdd()
{
	f = document.getElementById('formaddaccount');
	f.elements['adddisplayname'].value = "";
	f.elements['addfirstname'].value = "";	
	f.elements['addlastname'].value = "";	
	f.elements['addzipcode'].value = "";	
	f.elements['addemail'].value = "";
	f.elements['addyear'].selectedIndex = 0;
	f.elements['addmonth'].selectedIndex = 0;
	f.elements['addday'].selectedIndex = 0;		
	f.elements['country'].selectedIndex = 0;
	//f.elements['addchkmorningemails'].checked = false;
	f.elements['addchkocasionalemails'].checked = false;
//  	f.elements['addcultural'].checked = false;
	//f.elements['mailtypeAdd'].checked = false;
}

/*
 * Description:Clear the form Exist user
 * */
function clearFormExist()
{
	f=document.getElementById('form_existAccount');
	f.elements['existusername'].value = "";
	f.elements['existpassword'].value = "";
	
}

function messageShow(messageString)
{
	messageC = new Array();
	messageC.push(messageString);
	showErrors(messageC);

}


/*-------------------------------*/
/*AJAX FUNCTIONS    			 */
/*-------------------------------*/


function AjaxShowCheckboxFb(idCheckBox)
 {
	if(FB.getSession()==null)
		return;
	uid = "FB@"+FB.getSession().uid;
	
	msg=getCookie('numberOfComments');
	if (msg == 0)
	{
		//$('input[name='+idCheckBox+']').attr('checked', true);
		$('#'+idCheckBox+":checkbox").attr('checked',  $('#' +idCheckBox).is(':checked'));
		$('.reply_holder').show();
		$('#reply_comment').focus();
	}
	else
	{
		FB.getLoginStatus(function(response) {
			if ( response.session) {
				 	sqlComm = "SELECT status_update FROM permissions WHERE uid ="+response.session.uid;				 	
				 	var query = FB.Data.query(sqlComm);
				 	query.wait(function(result) {
				 		if (result != null && result != undefined)
						{
							status = result[0].status_update;
							
							   if (status == 1)
							   {		
								   //$('input[name='+idCheckBox+']').attr('checked', true);
								   $('#'+idCheckBox+":checkbox").attr('checked',  $('#' +idCheckBox).is(':checked'));
							   }
							   else{
								   //$('input[name='+idCheckBox+']').attr('checked', false);
								   $('#'+idCheckBox+":checkbox").attr('checked', false);
							   }
						}else
						{
							//$('input[name='+idCheckBox+']').attr('checked', false);
							$('#'+idCheckBox+":checkbox").attr('checked',  false);
						}
						 $('.reply_holder').show();
						 setTimeout(function(){$('#reply_comment').focus();});
						 
					});
				
			 }
				
			 
		});
		
	}
	
 }



//Register Form
function AjaxSaveRegisterForm()
{
	form = document.getElementById('form_register');
	birthday = form.elements['regyear'].value+"-"+form.elements['regmonth'].value+"-"+form.elements['regday'].value;
	typeEmail='text';
	typeEmail = $('input:radio[name=regemailtype]:checked').val();
	cultural='n';
	subscribe='n';
	shareinfo='n';
	if (form.elements['regcultural'].checked)
	{cultural='y';}else{cultural='n';}
	if (form.elements['regsignup'].checked)
	{subscribe='y';}else{subscribe='n';}
	if (form.elements['regoffers'].checked)
	{shareinfo='y';}else{shareinfo='n';}
	
	
		$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: 
        	  "typefunction=saveuserdb&username="+form.elements['regusername'].value+ 
        	  "&firstname="+form.elements['regfirstname'].value+
        	  "&lastname="+form.elements['reglastname'].value+
        	  "&email="+form.elements['regemail'].value+
        	  "&email_Type="+typeEmail+
        	  "&pass="+form.elements['regpassword'].value+
        	  "&birthday="+birthday+
        	  "&zip="+form.elements['regzipcode'].value+
        	  "&country="+form.elements['country'].value+
        	  "&subscribe="+subscribe+
        	  "&unshare_info="+shareinfo+
        	  "&subscribe_cultural="+cultural,
        	  beforeSend: function(objeto){
					$('.fb_messages').html('');
					$('.fb_messages').append('<div class="loadingdiv"><p>Confirming New Account...</p></div>')
					$('.fb_messages').show();
			   	},
        success:function(msg){
			if (msg.substr(0,2) =='OK')
			{
					$('#menuLogin').hide();
					$('#menuLogout').show();
					//showCheckUsersFb();
					verifyExtendedPermisions('');
					clearFormRegister();	
					$('.fb_messages').hide();
					$('#fbregister_form').jqmHide();
					$('#divconfirm').html('<h3 id="title_confirm_message" class="fb_final_confirmed"><span>THANK YOU, your user account has been created successfully!</span></h3>');
					$('#confirm_message').jqmShow();
						
					setTimeout(function(){
						$('#confirm_message').jqmHide();
					},2000);
				
			}else{
				$('.fb_messages').html('');
				$('.fb_messages').append('<p class="fbmessage_p">'+msg+'</p>');
				$('.fb_messages').show();
				//alert(msg);
			}			
		},
    	error: function(object, error, abohterobj){
         //   alert("Error: "+object+error+abohterobj);
        }               
   });
	 
}


//Login Form
function AjaxLoginUser(username, password)
{
	form = document.getElementById('form_login');
	$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: "typefunction=loginuser&username="+username+ 
        	  "&password="+password,
        success:function(msg){
			if (msg =='OK')
			{
				$('#menuLogin').hide();
				$('#menuLogout').show();
				$('#fblogin_form').jqmHide();
				
			
				if(commentScrollBack){
					commentScrollBack = false;
					$.scrollTo("#top_leavecomment",800);
				}
				//showCheckUsersFb();
				verifyExtendedPermisions('');
				
			}
			else
			{
				$('.fbmessage_p').text(msg);
				$('.fb_messages').fadeIn('slow');
			}
		},
    	error: function(object, error, abohterobj){
         //   alert("Error: "+object+' '+error+' '+abohterobj);
        }               
   });
}
/**
 * @Description: Exist account 
 * */
function AjaxExistUser(uid)
{
	form = document.getElementById('form_existAccount');
	$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: "typefunction=existuser&uid="+uid+"&username="+form.elements['existusername'].value+ 
        	  "&password="+form.elements['existpassword'].value,
        beforeSend: function(objeto){
		$('.fb_messages').html('');
		$('.fb_messages').append('<div class="loadingdiv"><p>In Progress. Please Be Patient...</p></div>')
		$('.fb_messages').show();
   		},
        success:function(msg){		
		if (msg =='OK')
			{
			//login process, create cookie
						
						logoutTDB(function(){
							//AjaxLoginUser(form.elements['existusername'].value, form.elements['existpassword'].value);
							facebook_accessFbFunction(FB.getSession().uid);
							showHideFunction();
							//showCheckUsersFb();
							verifyExtendedPermisions('');
							$('.fb_messages').hide();
							 $('#menuLogin').hide();
							 $('#menuLogout').show();
							$('#fbexistaccount_form').jqmHide();
							$('#divconfirm').html('<h3 id="title_confirm_message" class="fb_final_linked"><span>Your Daily Beast account has been associated with your Facebook account</span></h3>');
							$('#confirm_message').jqmShow();
						});
						setTimeout(function(){
							$('#confirm_message').jqmHide();
						},2000);

			}
			else
			{
				$('.fb_messages').html('');
				$('.fb_messages').append('<p class="fbmessage_p">'+msg+'</p>');
				$('.fb_messages').show();
			}
		},
    	error: function(object, error, abohterobj){
        //    alert("Error: "+object+' '+error+' '+abohterobj);
        }               
   });
}
/*
 * @decription: verify the email
 * */
function verifyMail(email, type, nameElement, nameForm){
	typeFunction='remember';
	
	if(type==2)
		typeFunction='rememberusername';
	//f = document.getElementById('form_login');
	f = document.getElementById(nameForm);
	$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: "typefunction="+typeFunction+"&email="+email, 
        success:function(msg){
			if (msg =='OK')
			{
				if (type == 1)
				{
					DailybeastAjax._xArgs.data = 'a=forgotPassword';
			 		DailybeastAjax._xArgs.data += '&encodeURIComponent='+encodeURIComponent(f.elements[nameElement].value);
			    	DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
			    	$('.fbmessage_p').html('Your password has been sent to the above email address');
					$('.fb_messages').fadeIn('slow');	
					setTimeout(function(){
						$('#fbexistaccount_form').jqmHide();
						$('#fblogin_form').jqmHide();
					},2000);
				}
				if (type == 2)
				{
					DailybeastAjax._xArgs.data = 'a=forgotUsername';
			    	DailybeastAjax._xArgs.data += '&encodeURIComponent='+encodeURIComponent(f.elements[nameElement].value);
			        DailybeastAjax.makeAjaxCall('/include/app/user/action.php');
			        $('.fbmessage_p').html('Your username has been sent to the above email address');
					$('.fb_messages').fadeIn('slow');
					setTimeout(function(){
						$('#fbexistaccount_form').jqmHide();
						$('#fblogin_form').jqmHide();
					},2000);
				}
					
			}
			else
			{				
					$('.fbmessage_p').html('The Email Address was not found, Please re-enter your Email Address.');
					$('.fb_messages').fadeIn('slow');	
				
			}
		},
    	error: function(object, error, abohterobj){
         //   alert("Error: "+object+error+abohterobj);
        }               
   });
}

/*
 * @Description:Function for add existing account to facebook account
 * */

function AjaxAddAccount(uid)
{
	if (uid == null)
	{
	  $('.fbmessage_p').text('Please connect first whit your facebook account');
	  $('.fb_messages').fadeIn('slow');
	}else
	{
	form = document.getElementById('formaddaccount');
	birthday = form.elements['addyear'].value+"-"+form.elements['addmonth'].value+"-"+form.elements['addday'].value;
	typeEmail='text';
	typeEmail = $('input:radio[name=regEmailtype]:checked').val();
	cultural='y';
	subscribe='y';
	shareinfo='n';
	if (form.elements['addcultural'].checked)
	{cultural='y';}else{cultural='n';}
	if (form.elements['addchkmorningemails'].checked)
	{subscribe='y';}else{subscribe='n';}
	if (form.elements['addchkocasionalemails'].checked)
	{shareinfo='y';}else{shareinfo='n';}
	$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: "typefunction=addaccountdb&uid="+uid+
        		"&displayname="+form.elements['adddisplayname'].value+
        		"&firstname="+form.elements['addfirstname'].value+
        		"&lastname="+form.elements['addlastname'].value+
        		"&zip="+form.elements['addzipcode'].value+
        		"&country="+form.elements['country'].value+
        		"&birthday="+birthday+
        		"&email="+form.elements['addemail'].value+
        		"&subscribe="+subscribe+
            	"&unshare_info="+shareinfo+
            	"&subscribe_cultural="+cultural+
            	"&email_Type="+typeEmail+"&active=y",
        beforeSend: function(objeto){
				$('.fb_messages').html('');
				$('.fb_messages').append('<div class="loadingdiv"><p>In Progress. Please Be Patient...</p></div>')
				$('.fb_messages').show();
   				},
        success:function(msg){
			if (msg =='OK')
			{
				$('.fb_messages').hide();
				$('#fbaddaccount_form').jqmHide();
				$('#divconfirm').html('<h3 id="title_confirm_message" class="fb_final_confirmed"><span>Your Daily Beast account has been associated with your Facebook account</span></h3>');
				$('#confirm_message').jqmShow();
				setTimeout(function(){
					$('#confirm_message').jqmHide();
				},2000);
			}
			else
			{
				$('.fb_messages').html('');
				$('.fb_messages').append('<p class="fbmessage_p">'+msg+'</p>');
				$('.fb_messages').show();
			}
		},
    	error: function(object, error, abohterobj){
         //  alert("Error: "+object+error+abohterobj);
        }    
	
   });
	}
}

function AjaxSetCommentsUsers(uid)
{
	$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: "typefunction=setComments&uid="+uid,
        success:function(msg){
			return msg;
		},
    	error: function(object, error, abohterobj){
        //    alert("Error: "+object+' '+error+' '+abohterobj);
        }               
   });
	}

/*
 * Update user account whit Facebook user
 * */
function AjaxUpdateFbUser(uid)
{
	form = document.getElementById('accountpage_form');
	birthday = form.elements['year'].value+"-"+form.elements['month'].value+"-"+form.elements['day'].value;
	if (document.getElementById('acct_radio2').checked)
	{
		typeEmail ="html";	
	}else{
		typeEmail ="text";
	}
	if (form.elements['cancel'].checked)
		{active='n';}else{active='y';}
	cultural='n';
	subscribe='n';
	shareinfo='n';
	if (form.elements['subscribe_cultural'].checked)
	{cultural='y';}else{cultural='n';}
	if (form.elements['subscribe'].checked)
	{subscribe='y';}else{subscribe='n';}
	
		$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: 
        	  "typefunction=updateuserfb&uid="+uid+ 
        	  "&firstname="+form.elements['firstName'].value+
        	  "&lastname="+form.elements['lastName'].value+
        	  "&email="+form.elements['email'].value+
        	  "&email_Type="+typeEmail+
        	  "&birthday="+birthday+
        	  "&zip="+form.elements['zip'].value+
        	  "&country="+form.elements['country'].value+
        	  "&subscribe="+subscribe+
        	  "&unshare_info="+shareinfo+
        	  "&subscribe_cultural="+cultural+
        	  "&active="+active,
        success:function(msg){
			if (msg =='OK')
			{
				if($(document).getUrlParam("redirectUrl")!=null){
					document.location.href=unescape(unescape($(document).getUrlParam("redirectUrl")));
				}
				else{
				
					enableAccountpageUpdateForm();	
					displayAccountPage();
					$('#acctpageSwitch').attr('class','view');
					$('#btn_editid').show();
					$('#accountpage_errors').html('');
					if (active == 'n')
					{
						logoutFb();
					}
				}

			}else{
				errors = new Array();
				errors.push(msg);
				showErrorsAccount(errors);
			}			
		},
    	error: function(object, error, abohterobj){
        //    alert("Error: "+object+error+abohterobj);
        }               
   });
}

function validateAge(year)
{
	actualYear = new Date();
	if((year > 0 )&&((actualYear.getFullYear() - year)<= 13 ))
	{
		alert("If you are under the age of 13, you may not register for this site.");
		return true;
	}else{
		return false;
	}
}

/**
 * @Description:validate the data form
 * */
function validateRegister()
{
	errors = new Array();
	actualYear = new Date();
	formToValidate = document.getElementById('form_register');
	
	
	if(/[a-zA-Z]{1}[-a-zA-Z0-9\s]{5}[-a-zA-Z0-9\s]*/.test($.trim(formToValidate.elements['regusername'].value)) == false)
		errors.push("Username must be greater than 5 characters a-z, 0-9, or - and begin with a letter.");
	if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,28}[a-zA-Z]{1}/.test($.trim(formToValidate.elements['regfirstname'].value)) == false)
		errors.push("First Name must be between 2 and 30 characters a-z.");			
	if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,27}[a-zA-Z]{1}/.test($.trim(formToValidate.elements['reglastname'].value)) == false)
		errors.push("Last Name must be between 2 and 30 characters a-z.");
	
	
	if(formToValidate.elements['country'].value=='USA' && (/(^\d{5}$)/.test(formToValidate.elements['regzipcode'].value) == false))
		errors.push("US Zip Code must be 5 numbers.");
	if((formToValidate.elements['regyear'].value > 0 )&&((actualYear.getFullYear() - formToValidate.elements['regyear'].value)<= 13 ))
		errors.push("If you are under the age of 13, you may not register for this site.");
	if( formToValidate.elements['regyear'].value == "0" || 
			formToValidate.elements['regday'].value == "0" || 
			formToValidate.elements['regmonth'].value == "0" || 
			formToValidate.elements['regyear'].value == "" || 
			formToValidate.elements['regday'].value == "" || 
			formToValidate.elements['regmonth'].value == "")
		errors.push("Please choose a birth Month, Day, and Year.");
	
	if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(formToValidate.elements['regemail'].value)) == false)
	//if(/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/.test($.trim(formToValidate.elements['regemail'].value)) == false)
		errors.push("Email Address is in an invalid format.");
	if(/[a-zA-Z0-9]{6,16}/.test(formToValidate.elements['regpassword'].value) == false)
		errors.push("Password must be between 6 and 16 alphanumeric characters.");			
	if(formToValidate.elements['regpassword'].value != formToValidate.elements['regpasswordconfirm'].value)
		errors.push("Password and Confirmation must match.");
	return errors;
}

/*
 * Update account whit facebook profile
 * */
function validateUpdateAccountFb()
{
	errors = new Array();
	actualYear = new Date();
	formToValidate = document.getElementById('accountpage_form');
	mailError = 0;

	if ( $("#acct_subscribe").attr('checked') || $("#acct_subscribe_cultural").attr('checked') || $("#acct_shareinfo").attr('checked') )
	{
		if(formToValidate.elements['email'].value.length==0){
			errors.push("Email Address is in an invalid format.");
			mailError = 1;	
		}
		if ((formToValidate.elements['email'].value.length)>0)
		{
			if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(formToValidate.elements['email'].value)) == false)
				errors.push("Email Address is in an invalid format.");
				mailError = 1;	
		}
	}
	else
	{
		if ((formToValidate.elements['email'].value.length)>0){
			if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(formToValidate.elements['email'].value)) == false)
				if (mailError != 1)
				{errors.push("Email Address is in an invalid format.");}
		}		
		
		if((formToValidate.elements['firstName'].value.length)>0){
			if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,28}[a-zA-Z]{1}/.test($.trim(formToValidate.elements['firstName'].value)) == false)
				errors.push("First Name must be between 2 and 30 characters a-z.");	
		}
		if((formToValidate.elements['lastName'].value.length)>0){
			if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,27}[a-zA-Z]{1}/.test($.trim(formToValidate.elements['lastName'].value)) == false)
				errors.push("Last Name must be between 2 and 30 characters a-z.");	
		}
		
		if((formToValidate.elements['year'].value > 0 )&&((actualYear.getFullYear() - formToValidate.elements['year'].value)<= 13 ))
			errors.push("If you are under the age of 13, you may not register for this site.");	
	
		if (formToValidate.elements['year'].value >0 || formToValidate.elements['month'].value > 0 || formToValidate.elements['day'].value >0){
			if( formToValidate.elements['year'].value == "0" || 
					formToValidate.elements['day'].value == "0" || 
					formToValidate.elements['month'].value == "0" || 
					formToValidate.elements['year'].value == "" || 
					formToValidate.elements['day'].value == "" || 
					formToValidate.elements['month'].value == "")
				errors.push("Please choose a birth Month, Day, and Year.");	
		}
	
	//if we choose the usa, we need a zipcode
		if((formToValidate.elements['zip'].value.length)>0){
			if(formToValidate.elements['country'].value=='USA' && (/(^\d{5}$)/.test(formToValidate.elements['zip'].value) == false))
				errors.push("US Zip Code must be 5 numbers.");	
		}
	}
	return errors;
}


/*
 * Validate Add account 
 * */
function validateAddRegister()
{
	errors = new Array();
	actualYear = new Date();
	formToValidate = document.getElementById('formaddaccount');
	var mailError = 0;

	
		if ((formToValidate.elements['addemail'].value.length)>0){
			if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(formToValidate.elements['addemail'].value)) == false)
			{
					mailError=1;
					errors.push("Email Address is in an invalid format.");
			}
		}		
		
		if ((formToValidate.elements['adddisplayname'].value.length)>0){
			if(/[a-zA-Z]{1}[-a-zA-Z0-9]{5}[-a-zA-Z0-9]*/.test($.trim(formToValidate.elements['adddisplayname'].value)) == false)
				errors.push("Display Name must be greater than 5 characters a-z, 0-9, or - and begin with a letter.");				
		}
		if((formToValidate.elements['addfirstname'].value.length)>0){
			if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,28}[a-zA-Z]{1}/.test($.trim(formToValidate.elements['addfirstname'].value)) == false)
				errors.push("First Name must be between 2 and 30 characters a-z.");	
		}
		if((formToValidate.elements['addlastname'].value.length)>0){
			if(/[a-zA-Z]{1}[-\'a-zA-Z ]{0,27}[a-zA-Z]{1}/.test($.trim(formToValidate.elements['addlastname'].value)) == false)
				errors.push("Last Name must be between 2 and 30 characters a-z.");	
		}
				
		if (formToValidate.elements['addyear'].value >0 || formToValidate.elements['addmonth'].value > 0 || formToValidate.elements['addday'].value >0){
			if( formToValidate.elements['addyear'].value == "0" || 
					formToValidate.elements['addday'].value == "0" || 
					formToValidate.elements['addmonth'].value == "0" || 
					formToValidate.elements['addyear'].value == "" || 
					formToValidate.elements['addday'].value == "" || 
					formToValidate.elements['addmonth'].value == "")
				errors.push("Please choose a birth Month, Day, and Year.");	
		}
	
	//if we choose the usa, we need a zipcode
		if((formToValidate.elements['addzipcode'].value.length)>0){
			if(formToValidate.elements['country'].value=='USA' && (/(^\d{5}$)/.test(formToValidate.elements['addzipcode'].value) == false))
				errors.push("US Zip Code must be 5 numbers.");	
		}
		
		if ( formToValidate.elements['addchkmorningemails'].checked || formToValidate.elements['addchkocasionalemails'].checked || formToValidate.elements['addcultural'].checked )
		{
			if(/[_a-zaA-Z0-9-]+([.+_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+([.a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/.test($.trim(formToValidate.elements['addemail'].value)) == false)
			{
				if (mailError != 1)
				{
					errors.push("Email Address is in an invalid format.");	
				}
				
					
			}
		}
		if (formToValidate.elements['addemail'].value.length == 0 && formToValidate.elements['adddisplayname'].value.length == 0 
				&& formToValidate.elements['addfirstname'].value.length == 0 && formToValidate.elements['addlastname'].value.length==0 
				&& formToValidate.elements['addzipcode'].value.length == 0	)
		{
				if ( !formToValidate.elements['addchkmorningemails'].checked  && !formToValidate.elements['addchkocasionalemails'].checked 
						&& !formToValidate.elements['addcultural'].checked)
				{
					if( formToValidate.elements['addyear'].value == "0" && 
							formToValidate.elements['addday'].value == "0" && 
							formToValidate.elements['addmonth'].value == "0" )
					{
						errors.push("close");	
					}
						
					
				}
		}
		
		
	return errors;
}

/**
 * @return:validate the data for the username and password
 * */
function validateLoginData()
{

	errors = new Array();
	formToValidate = document.getElementById('form_login');
	if ((/[a-zA-Z]{1}[-a-zA-Z0-9\s]{5}[-a-zA-Z0-9\s]*/.test($.trim(formToValidate.elements['loginusername'].value)) == false) ||	
		(/^[a-zA-Z0-9\s]{6,16}$/.test($.trim(formToValidate.elements['loginpassword'].value)) == false))
		errors.push("Your Username or Password were not recognized. Please enter a valid Username and Password.");
		
	return errors;
	
}

function valideExistData()
{
	errors = new Array();
	formToValidate = document.getElementById('form_existAccount');
	if((/^[a-zA-Z]{1}[-a-zA-Z0-9\s]{5}[-a-zA-Z0-9\s]*$/.test($.trim(formToValidate.elements['existusername'].value)) == false) ||
	(/^[a-zA-Z0-9\s]{6,16}$/.test($.trim(formToValidate.elements['existpassword'].value)) == false))
		errors.push("Your Username or Password were not recognized. Please enter a valid Username and Password.");
	return errors;
}

function validateExistAccount()
{
	errors = new Array();
	formToValidate = document.getElementById('form_existAccount');
	if((/^[a-zA-Z]{1}[-a-zA-Z0-9\s]{5}[-a-zA-Z0-9\s]*$/.test($.trim(formToValidate.elements['addusername'].value)) == false) ||
	(/^[a-zA-Z0-9\s]{6,16}$/.test($.trim(formToValidate.elements['addpassword'].value)) == false))
		errors.push("Your Username or Password were not recognized.Please enter a valid Username and Password.");
	return errors;
}

/**
 * @Description: Show the errors in a DIV
 * */
function showErrors(arrayErrors)
{
	if(errors.length > 0)	{
		var htmlinter='<strong>ERROR</strong>: '+'<br>';		
		for (i=0;i<arrayErrors.length;i++)
		{
			htmlinter=htmlinter+' '+arrayErrors[i]+'<br>';
		}
		$('.fbmessage_p').html(htmlinter);
		$('.fb_messages').fadeIn('slow');
		return errors.length;
	}
	else{
		return 0;
	}
}
/**
 * @Description: Show errors in a div for the account page
 * */
function showErrorsAccount(arrayErrors)
{
	if(errors.length > 0)	{
		var htmlinter='<strong>ERROR</strong>: '+'<br>';		
		for (i=0;i<arrayErrors.length;i++)
		{
			htmlinter=htmlinter+' '+arrayErrors[i]+'<br>';
		}
		$('#accountpage_errors').html(htmlinter);
		$('#accountpage_errors').show();
		return errors.length;
	}
	else{
		return 0;
	}
}

/**
 * @return: logout of the app
 * */
function logoutTDB(callbackFunction)
{
 	
		resetAccount(); // remove everything from the account drop down
	 	//$('#divaccount').show(); //switch the header to show reigster |  login
	 	//$('#divlogout').hide();	//switch the header to show reigster |  login
	 	$('#menuLogin').show();
		$('#menuLogout').hide();
	 	$('#email_signup_form_holder').show(); 
	 	displayNoComment();	//hide the comment box on the blogs & articles page
	 	closeFeedback(); //hide the feedback box on the homepage
	 	$('#popup_submitnewstory').hide(); //hide the submission box on the cheat sheat
	 	$('#popup_submitnewstory2').hide(); //hide the submission box on the cheat sheat
	 	$('.txt.txt_submitnewstory').removeClass('txt_current'); //change the font from black to red on cheat sheet
		$('.popup_gotbetterlink').hide(); //hide the better link box on the cheat sheet
	 	$('.txt.txt_gotbetterlink').removeClass('txt_current');//change the font from black to red on cheat sheet
	 	$('.popup_sharelink').hide(); //hide the share link box on the cheat sheet AND blogs & articles
	 	$('.txt.txt_shareit').removeClass('txt_current'); //change the font from black to red on cheat sheet
	 	$('.txt.txt_email').removeClass('txt_current'); //change the font from black to red on blogs & articles
	 	$('.txt_saveit').removeClass('saved'); //remove all saved items on cheat sheet
	 	$('#country').insertAfter('#country_register');//move country list from account
		$('#birthdate').insertAfter('#birthdate_register');//move birthday drop down lists from account
		$('#savedlinks').hide();	
		//delete cookie
		
		if(callbackFunction==undefined || !isFunction(callbackFunction)){
			AjaxlogoutUser();
		}
		else{
			AjaxlogoutUserCallback(callbackFunction)
		}
}

var isFunction = function(o) {
	return typeof(o) == 'function';
};


function logoutFb()
{
	
	FB.getLoginStatus(function(response) {
		if (response.session) {
			FB.logout(function(response) {
				logoutTDB();
			});
		}
	});
	
}

function AjaxlogoutUserCallback(callbackFunction)
{
	$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: "typefunction=logoutUser",
        success:callbackFunction,
    	error: function(object, error, abohterobj){
          //  alert("Error: "+object+' '+error+' '+abohterobj);
        }               
   });

}


function AjaxlogoutUser()
{
	kickapps=getCookie('kickapps');
	$.ajax({
        type: "POST",
        dataType:"JSON",
        url: "/include/accounts/processAccounts.php",
        async:true,
        data: "typefunction=logoutUser",
        success:function(msg){
			if (msg == 'OK')
			{
				
				if(document.accountId){
					//alert("https://web.archive.org/web/20110405084925/http://womenintheworld.thedailybeast.com/kickapps/user/logoutUser.kickAction?as=148833&redirectURL=http://www.thedailybeast.com/");
					if(kickapps){
						document.location.href="https://web.archive.org/web/20110405084925/http://womenintheworld.thedailybeast.com/kickapps/user/logoutUser.kickAction?as=148833&redirectURL=http://www.thedailybeast.com/";
					}
					else{
						document.location.href="/";
					}
				}
				else
				{
					if(kickapps){
						document.location.href="https://web.archive.org/web/20110405084925/http://womenintheworld.thedailybeast.com/kickapps/user/logoutUser.kickAction?as=148833&redirectURL="+document.location.href;
					}
					else{
						refresh_page();
					}

					//alert("https://web.archive.org/web/20110405084925/http://womenintheworld.thedailybeast.com/kickapps/user/logoutUser.kickAction?as=148833&redirectURL="+document.location.href);
//					refresh_page();	
				}
			}
			
		},
    	error: function(object, error, abohterobj){
          //  alert("Error: "+object+' '+error+' '+abohterobj);
        }               
   });

}


/*FACEBOOK API FUNCTIONS USES*/
/*
 * Do a page refresh after login state changes.
 * This is the easiest but not the only way to pick up changes.
 * If you have a small amount of Facebook-specific content on a large page,
 * then you could change it in Javascript without refresh.
 */
function refresh_page() {
 //window.location = location.'/';
	document.location.href =document.location.href ; 
	
}


/*
 * Verify the connection with FaceBook
 * */
function facebook_Connection()
{
	FB.getLoginStatus(function(response) {
		if (response.session) {
		 //logout
		// FB.Connect.logout(function() { facebook_activateMenuLogin();  });
			 if (confirm('You are already connected with Facebook. Do you want to continue using The Daily Beast with this account?'))
			 {
				 FB.login(function(response) {
					 callbackInitFacebook();
				 }, {perms:'publish_stream'});
				 
				 //FB.Connect.requireSession(function() { facebook_activateMenuLogin(function(){showHideFunction();}); });
			 }
		}
		else{//login			 
			//FB.Connect.requireSession(function() { facebook_activateMenuLogin(function(){showHideFunction();}); });
			FB.login(function(response) {
				callbackInitFacebook();
			 }, {perms:'publish_stream'});
		}
	});
}

function callbackInitFacebook()
{
	verifyStatusFacebookAccount('FB@'+FB.getSession().uid);
}

function verifyStatusFacebookAccount(username)
{

	$.ajax({
    type: "POST",
    dataType:"JSON",
    url: "/include/accounts/processAccounts.php",
    async:true,
    data: "typefunction=verifyStatusFb&username="+username,
    success:function(msg){
		//callbackVerifyStatusFacebookAccount(msg);
		if (msg == 'OK'){
			facebook_activateMenuLogin(function(){
				showHideFunction();
			});

		}
		else{
			alert('You Facebook account is disabled, please try with new Facebook Account.');
			logoutFb();
			
		}
	},
	error: function(object, error, abohterobj){
      //  alert("Error: "+object+' '+error+' '+abohterobj);
    }               
	});

}

/*
 * Get status of connection whit facebook
 * */
function facebook_activateMenuLogin()
{
	 FB.getLoginStatus(function(response) {
			if (response.session) {
			 //this verification is only whit facebook Connect		 
				//$('#divaccount').hide();
				//$('#divlogout').show();
				$('#menuLogin').hide();
				$('#menuLogout').show();
				
				$('#email_signup_form_holder').hide();
				$('#country').insertAfter('#country_account');
				$('#birthdate').insertAfter('#birthdate_account');
				//showCheckUsersFb();
				verifyExtendedPermisions('');
				$('#comment_facebook').show();
				facebook_accessFbFunction( FB.getSession().uid);
				//closeFormsAccount();
				//$.unblockUI({ message: $('#contentoverlays') });
				showHideFunction();

				
				
				
		 }else
		 {
		 
				$('#email_signup_form_holder').show();
				$('#country').insertAfter('#country_register');
				$('#birthdate').insertAfter('#birthdate_register');
				//showCheckUsersFb();
				verifyExtendedPermisions('');
			 
		 }
		 
	});
}

/*
 * Verify the access whit facebook Account, if is the first access, show the popup
 * if not is the first access, increment number logins and update the last access
 * */
function facebook_accessFbFunction(uid){
	 FB.getLoginStatus(function(response) {
			if (response.session) {
	
		sql = "SELECT name,first_name, last_name,pic_small, pic_small_with_logo FROM user WHERE uid ="+uid;
		friendsQuery = "SELECT uid2 FROM friend WHERE uid1="+uid;
		var query = FB.Data.query(sql);
		query.wait(function(result) {
			
		   usernameFb = result[0].name;
		   first_name = result[0].first_name;
		   last_name = result[0].last_name;
		   photoFb = escape(result[0].pic_small_with_logo);   
		   var query1 = FB.Data.query(friendsQuery);
		   query1.wait(function(result2) {
			   	
			     friendsFb = result2;
				   var friendsArray = new Array();
				   for (i = 0; i<result2.length;i++)
				   {
					   friendsArray[i] = result2[i].uid2;
				   }
			   $.ajax({
			        type: "POST",
			        dataType:"JSON",
			        url: "/include/lib/facebook/useFbUsers.php",
			        async:true,
			        data: "uid="+uid+"&username="+usernameFb+"&firstname="+first_name+"&lastname="+last_name+"&photo="+photoFb+"&friends="+friendsArray,			        
			        success:function(msg){
				   	if (msg == "POPUP")
						{						
							$('#fbaddaccount_form').jqmShow();
							$('#fblogin_form').jqmHide();
							$('#fbregister_form').jqmHide();
							
						
							
						}else{					
							$("#fblogin_form").jqmHide();
							$("#fbregister_form").jqmHide();
						}						
						if(commentScrollBack){
							commentScrollBack = false;
							$.scrollTo("#top_leavecomment",800);
						}
						showHideFunction();
						showCheckUsersFb();
						

					},
			    	error: function(object, error, abohterobj){
			            //alert("Error: "+object+error+abohterobj);
			        }               
			   });
			  });
			});
		 }
	});
}

/*
 * Publish a feed Message if the user is connected
 * */
function facebook_feed_Message(coments, title, description, direct)
{
	 FB.getLoginStatus(function(response) {
			if (response.session) {
			 var direction = document.location.href;
			 var attachment =
			 {
						'name': ''+title+'',
						'href': ''+direction+'',
						'caption':'Source: http://www.thedailybeast.com',
						'description': ''+description+'',
						'media':[{'type':'image', 'src':'https://web.archive.org/web/20110405084925/http://img188.imageshack.us/img188/9250/intento1g.png','href':'https://web.archive.org/web/20110405084925/http://www.thedailybeast.com'}]}; 
					
		 var coment=coments;
			 //FB.Connect.streamPublish(coment, attachment, null ,null,'Do you want to post this comment on your facebook wall?',messageOnload,direct,null);
			 FB.ui(
					   {
					     method: 'stream.publish',
					     message: coment,
					     attachment:attachment,
					     user_prompt_message: 'Do you want to post this comment on your facebook wall?'
					   },
					   function(response) {
					    
					   }
					 );

			 
			 
		 	}
	 });
	 
}


function verifyAccountFacebook(uid)
{
	
	$.ajax({
	        type: "POST",
	        dataType:"JSON",
	        url: "/include/accounts/processAccounts.php",
	        async:true,
	        data: "typefunction=verifyAccountFacebook&username="+uid,
	        success:function(msg){
				
				if (msg == '0')
				{
					//$("#userpass_account").hide();
					$("#dobid").text(" ");
					$("#countryid").text(" ");
					
				}else if (msg == '1')
				{
					//$("#userpass_account").show();
					//$("#dobid").text(" ");
				}else
				{
					//$("#userpass_account").show();
					//$("#lbusername").text(msg);
					//$("#dobid").text(" ");
				}
			
				
			},
	    	error: function(object, error, abohterobj){
	        //    alert("Error: "+object+' '+error+' '+abohterobj);
	        }               
	   });
	   
	
}


//FUNCTION LOADING FOR JQUERY
function showHideFunction(){	 
	if($("#header .loading-media").size() == 0 ){
		    var loading = $(document.createElement("div"));
		    loading.addClass("loading-media")
		    loading.css({
		        position:"absolute", 
		        "background":"red", 
		        "right" : 0, 
		        "color": "white", 
		        "width" : 230, 
		        "padding-left" : 10, 
		        "height" : 16});
		    loading.html("Loading...");
		    $("#header .top").append(loading);
		} else {
		    $("#header .loading-media").animate({
		        "width" : 1
		    }, function(){
		         $("#header .loading-media").remove();
		    });
		}
	
	
	}

/*
 * Verify if the comment is whit facebook
 * */
function commentWithFacebook(idchekbox, title, content, message)
{
/*
	title=decodeURI(title);
	content=decodeURI(content);	
	message=decodeURI(message);
	*/
	title = unescape(title);
	content =unescape(content);
	message=unescape(message);
	message=message.replace(/\\/g,""); //delete the / character 
	
	var checkeado=$(idchekbox).attr("checked");
	f = document.getElementById('form_blog_comment');
	if (idchekbox == '#chk_comm_facebook')
	{message == f.elements['comment'].value;} //if the message is a reply take message of the function
	
	
	if(checkeado)
	{
		
		 if (FB.getSession()) {
			 //verify extended permissions
			 
				sql = "SELECT status_update FROM permissions WHERE uid ="+FB.getSession().uid;
				var query = FB.Data.query(sql);
				query.wait(function(result) {
					if (result != null && result != undefined)
					{
					   status = result[0].status_update; //permissions or not permissions
								   $.ajax({
								        type: "POST",
								        dataType:"JSON",
								        url: "/include/accounts/processAccounts.php",
								        async:true,
								        data: "typefunction=getComments&uid="+FB.getSession().uid,
								        success:function(msg){								   
									   if (!getCookie('flagtdb_login')){
											if (msg == 0 && status == 0) //first comment, no permissions
											{											
												AjaxSetCommentsUsers(FB.getSession().uid);											
												facebook_feed_Message(message, title, content, false );
											}
											if (msg > 0 && status == 0) // other comment, no permissions
											{
												//after the comment, update comments in fb_users table
												AjaxSetCommentsUsers(FB.getSession().uid);
												facebook_feed_Message(message, title, content, false );
												
											}
											if (msg > 0 && status > 0) // other comments with permissions
											{
												AjaxSetCommentsUsers(FB.getSession().uid);
												facebook_feed_Message(message,title, content, true);
												
											}
											if (msg == 0 && status > 0) // other comments with permissions
											{
												AjaxSetCommentsUsers(FB.getSession().uid);
												alert('You already agreed to Facebook extended permissions for The Daily Beast, this message will be sent to your wall.');
												facebook_feed_Message(message,title, content, true);
											}
									   }
											
										},
								    	error: function(object, error, abohterobj){
								       //     alert("Error: "+object+' '+error+' '+abohterobj);
								        }               
								   });
					}else{
					//	alert('Error, please review your connection with Facebook');
						}
				});	
				
		 }
	}

};$(document).ready(function(){
	$('.sharethiselement').each(function(){
	
		tmpRel = $(this).attr('rel'); 
		//alert(unescape($("#share_this_title_"+tmpRel).val()));	
		var object=SHARETHIS.addEntry({
				url: $("#share_this_url_"+tmpRel).val(),
				title: unescape($("#share_this_title_"+tmpRel).val()),
				content: unescape($("#share_this_content_"+tmpRel).val())
		} , { button:false,onmouseover:false, embeds:true} );
		object.attachButton($(this).get(0));
	
	});
});;$(document).ready(function(){
	//Header Search 
	$("#q").focus(function(){
		if($(this).val()=='Search The Daily Beast'){
			$(this).val('');
		};
	});
	$("#q").blur(function(){
		if($(this).val()==''){
			$(this).val('Search The Daily Beast');
		};
	});	
});;
}

/*
     FILE ARCHIVED ON 08:49:25 Apr 05, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:12:42 Feb 16, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.797
  exclusion.robots: 0.033
  exclusion.robots.policy: 0.02
  esindex: 0.013
  cdx.remote: 30.171
  LoadShardBlock: 293.246 (3)
  PetaboxLoader3.resolve: 257.308 (4)
  PetaboxLoader3.datanode: 624.176 (4)
  load_resource: 894.462
*/