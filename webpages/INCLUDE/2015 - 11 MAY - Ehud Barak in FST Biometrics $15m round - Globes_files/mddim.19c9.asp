
var shalter = {dfp:true}
// alert(ad_handler.google_div({'url':'---','failed':'he.bar_right..'}))
if (document.domain.indexOf("globes.co.il") != -1) {
   //document.domain = "globes.co.il";
}

var dcSite = 'glo', dcCG = 'en' // totalmedia

sp500 = 'S&P 500';
dj       = 'Dow';
nbi      = 'Nasdaq-Bio'
bkx      = 'Nasdaq-Bank'
tltk     = 'Tel-Tech';
tltk15   = 'Tel-Tech 15';
tabluet  = 'TA Bluet';
nsdk     = 'Nasdaq';
ta100    = 'TA125';
ta25     = 'TA35';
dollarbb = 'NIS/USD' // Shekel/$';
euro	 = 'NIS/EUR' // 'Euro';
euro_dollar = "USD/EUR" // "Euro/Dollar";

ci = 0 // (screen.width > 800) ? 0 : 1;
colors = [ "ffffff" , "eaeaea" ];
function dw(s) {document.write(s);}
function close_frame() {if (top != this) {parent.close_frame();}}
function reload() {
	var i = new Image()
	i.src = 'https://imagesen.globes.co.il/images/Site2/images/pixel.gif?' + (new Date()).getTime()
	i.onload = function(){location.reload()}
} setTimeout('reload()',5 * 60 * 1000)
function maximaze() {window.open ("http://en.globes.co.il/serve/inc/sleep.htm",null,"scrollbars=no,fullscreen=yes")}
function OpenWin1() {window.open("http://en.globes.co.il/serveEN/globes/terms.html","terms","width=380,height=280,left=100,top=100,scrollbars=yes,resizable=no");}
var dcelled = false
function in_list(item,list) {for(var i in list) {if (list[i] == item) {return i}} return -1}
function bin_list(item,list) {return in_list(item,list) > -1}
function dcell(n,d,t,c,v,a) {
	if (!bin_list(n,[ta25,tabluet,nsdk,sp500,bkx,nbi,euro_dollar,euro,dollarbb])) return
	if (bin_list(n,[nbi,bkx,sp500,euro_dollar]) && screen.width <= 800) {return}
	var fc = "";
	var clsn = "btext";
	dcelled = true
	switch(a) {
		case '+' :
			a = '<img src="https://imagesen.globes.co.il/images/Site2/mddim/tri_green.gif" border="0">';
			fc = ' color=green ';
			clsn = "gtext";
			break;
		case '-' :
			a = '<img src="https://imagesen.globes.co.il/images/Site2/mddim/tri_red.gif" border="0">';
			fc = ' color=red ';
			clsn = "rtext";
			break;
		default  :
			a = '&nbsp;';
			fc = ' color=green ';
	}
	dw('<td bgcolor="#' + colors[ci++ % 2] + '" align=center>');
	dw('<span class="btext"><b>' + n + '</b>&nbsp;&nbsp;' + d + '&nbsp;&nbsp;<u>' + t + '</u></span><br>');
	dw(a + '<span class="' + clsn + '">&nbsp;&nbsp;' + c + '&nbsp;&nbsp;' + v + '</span>');
	if (n == euro) {dw('<td bgcolor="#' + colors[(ci-1) % 2] + '" align=center valign=top></td>')}
	dw('</td>');
}

function OpenSmallWin(winUrl,title) {window.open(winUrl,title,"width=420,height=250,left=100,top=100,scrollbars=yes,resizable=no");} //
function bot() {
	dw('<table width="100%" border="0" cellpadding="0" cellspacing="0">'
	+ '<tr bgcolor="#ffffff"><td><img src="https://imagesen.globes.co.il/images/Site2/images/pixel.gif" width="1" height="1" hspace="0" vspace="0" border="0" alt></td></tr>'
	+ '<tr align="right" valign="top">'
	+ 	'<td>'
	+		'<table width="100%" border="0" cellpadding="0" cellspacing="0">'
	+ 		'<tr valign="top">'
	+			'<td align="center" valign="top" nowrap bgcolor="#ffffff" title="Close Frame" width="20">'
	+			'</td>')
}
function eot() {
	var s = '</tr>'
	+		'</table>'
	+	'</td>'
//	+	'<td width="70"><div id="ads.bar.1"></div></td>'
	+	'<td></td>' // + ad_handler.google_div({'url':'/22932857709/en_globes_desktop/Bar_madadim/Bar_madadim.Right','sizes':'[70,33]','local' : 'en.bar_right..'}) + '</td>'
	+ '</tr>'
	+ '</table>'
//	alert(s)
	dw(s)
	if (dcelled == false) setTimeout('location.reload()',2000)
	ad_handler.activate()
}
