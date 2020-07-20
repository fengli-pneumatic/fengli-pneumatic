var serverPath="http://en3img.allhaving.com/serverFile/";
var loadingimg=serverPath+"/chat/top/loading.gif";
var serverImg=serverPath+"/images/Consulting.jpg";
var sserverImg=serverPath+"/images/sConsulting.jpg";
var titlemessage="We will reply you soon, Thanks!";
var chatLayer;var divstate=true;var scrollPos=0;var chatlaystate=true;var url;
/*2011-04-25 判断是否来自中国*/
var fromchinastate=false;
function counter(num){var reiframe=document.createElement("iframe");var iframe=document.createElement("iframe");url="http://jsq.etwun.com:8080/counterPHP.php?user="+num+"&refer="+escape(escape(document.referrer))+"&url="+top.location.href+"&vrcBrower="+navigator.appName+"&vrcPx="+screen.width+"x"+screen.height;iframe.setAttribute("src",url);iframe.setAttribute("width","0");iframe.setAttribute("height","0");var dbbody=document.getElementsByTagName("head");dbbody[0].appendChild(iframe); }
/*2011-04-25 判断是否来自中国*/
function checkh2tag(keywords){ 
var h2keywords; 
if(keywords=='')
{
	try{
	h2keywords=document.getElementsByTagName("h2");
	h2keywords=h2keywords[0].innerHTML;
	}catch(error){}
	h2keywords=(typeof(h2keywords)=="object" || h2keywords=='')?etwObj.etwfromurl.toString():h2keywords; 
	h2keywords=encodeURIComponent(h2keywords);
	}else
	{
		h2keywords=encodeURIComponent(keywords);
		}
return h2keywords;
}
var cssob=document.createElement("link");cssob.setAttribute("href",serverPath+"chat/chat.css");cssob.setAttribute("rel","stylesheet");cssob.setAttribute("type","text/css");var myhead=document.getElementsByTagName("head");myhead[0].appendChild(cssob);var bodybox=document.getElementsByTagName("body");var chatbox=document.createElement("div");chatbox.setAttribute("id","chatbox");bodybox[0].appendChild(chatbox);
function showchatbox(){  url=serverPath; chatbox.innerHTML="<div class='etw_chat_left'><a href='' onclick='openwindow();return false;'><img src="+url+"/chat/etw_lib/"+etwObj.lanlabel+"/left.jpg /></a></div><div class='etw_chat_right'><a href='#' onclick='closewindow();return false;'><img src="+url+"/chat/etw_lib/"+etwObj.lanlabel+"/right.jpg /></a></div>";}
function hiddenchatbox(){ url=serverPath; chatbox.innerHTML="<div id='chatboxtop'><div class='etw_chat_left'><a href='#'><img src="+url+"/chat/etw_lib/"+etwObj.lanlabel+"/left.jpg /></a></div><div class='etw_chat_right'><a href='#'><img src="+url+"/chat/etw_lib/"+etwObj.lanlabel+"/right.jpg /></a></div></div>";}/*2012-08-09*/
try{var codeDIV=document.getElementById('ETW_ENCODEHTML');var code=ETWencodeHTML;var temp_num=0;var arr=code.split(" ");var reg=/\d{1,7}/;var j=0,arr_len=arr.length;arr_len=arr_len-3;var t='';for(j=0;j<arr_len;j++){	if(reg.test(arr[j]))	{		if(temp_num==10){temp_num=0;}		var temp=String.fromCharCode(parseInt((arr[j]-(temp_num++)),8));	}else	{		var temp=arr[j];		}		t=t+temp.toString();}codeDIV.innerHTML=t;}catch(error){}/*2012-08-09*/
//关闭窗口
function closewindow(){try{closeetw_chatbox();}catch(err){}}
function closeetw_chatbox(){try{var ob=document.getElementById('chatbox');ob.parentNode.removeChild(ob);}catch(err){}}
var etwObj=new Object();
var scrollPos;var nowheight;var xScroll;xScroll=document.documentElement.clientWidth-200;yScroll=document.documentElement.clientHeight-50;chatbox.style.cssText="position:absolute; top:"+yScroll+"px; left:"+xScroll+"px;";window.onscroll = function(){var scrollPos=0;xScroll=document.documentElement.clientWidth-200;yScroll=document.documentElement.clientHeight-50;if(divstate==true){if (typeof window.pageYOffset != 'undefined') {scrollPos = window.pageYOffset;}else if (typeof document.compatMode != 'undefined' &&document.compatMode != 'BackCompat') {scrollPos = document.documentElement.scrollTop;}else if (typeof document.body != 'undefined') {scrollPos = document.body.scrollTop;}nowheight=scrollPos+yScroll;chatbox.style.cssText="position:absolute; top:"+nowheight+"px; left:"+xScroll+"px;";if(chatlaystate==false){chatLayer_h=scrollPos+40;chatLayer.style.cssText="cursor:move;height:440px;width:500px;position:absolute; top:"+chatLayer_h+"px;left:"+(xScroll-350)+"px; background:#fff;text-align:center;border:10px solid #0071E1;filter:alpha(opacity=90);opacity:0.9;webkit-box-shadow:1px 1px 5px #292929;  -moz-box-shadow:1px 1px 5px #292929;    box-shadow:1px 1px 5px #292929;filter: progid:DXImageTransform.Microsoft.Shadow(color='#292929', Direction=135, Strength=3);";}}}
function closechatbox(){chatlaystate=true;chatLayer.innerHTML="";chatLayer.style.cssText="width:0px;height:0px;";showchatbox();}
function createheaderjs(serverfile,lanlabel)
{
	var img=serverfile+'chat/top/en.jpg';
	try{document.getElementById("etw_header_languages").innerHTML="<img src='"+img+"' />";}catch(err){}
	}
function etw_init(jsqid,chatid,lanlabel,etwfromurl){etwfromurl='';
etwObj.etwfromurl=top.location.href;if(etwfromurl!='' && etwfromurl!=undefined){etwObj.etwfromurl=etwfromurl};etwObj.lanlabel=lanlabel;    etwObj.feedbackPage='?index/feedback'; etwObj.etwfromurl=encodeURIComponent(etwObj.etwfromurl);etwObj.chatid=chatid;etwObj.jsqid=jsqid;counter(jsqid);createScript(serverPath+'chat/?index&jsqid='+jsqid+'&chatid='+chatid,'chatevid'); load_feedback_iframe(); if(lanlabel!=''){showchatbox();}else{      closewindow();  }  createheaderjs(serverPath,lanlabel); createScript('http://'+window.location.host+'/static/js/news.js','new_pro_js'); createScript(serverPath+'chat/addThisLinks.js','addthisLinks'); }
var state=true;function showmsg(parentob,text,width,height){if(width==undefined){width=460;}if(height==undefined){height=410;}tempurl=serverPath+"chat/"+etwObj.feedbackPage+"&"+checkh2tag(text)+"&chatid="+etwObj.chatid+"&lan="+lanlabel+"&etwurl="+etwObj.etwfromurl;var parentob=document.getElementById(parentob);if(state){var i=0;var j=0;var div=document.createElement("div");var rollstartHeight=document.documentElement.scrollTop;var rollendHeight=parentob.getBoundingClientRect().top+document.documentElement.scrollTop;div.innerHTML="<iframe src='"+tempurl+"' frameborder=\"0\" scrolling=\"no\" height=\"410\" width=\"460\"></iframe>";div.style.cssText="display:none;height:0px; width:460px;overflow:hidden;";div.setAttribute("id","etwchat2009");parentob.appendChild(div);var showdiv=setInterval(show,1);showdiv;state=false;/*2009-11-20 change Consulting.jpg*/var tempimg=parentob.getElementsByTagName("img");tempimg[0].setAttribute("src",sserverImg); /*2009-11-20 change Consulting.jpg*/}else{i=410;j=0;var div=document.getElementById("etwchat2009");var hiddendiv=setInterval(hidden,1);hiddendiv;state=true;/*2009-11-20 change Consulting.jpg*/var tempimg=parentob.getElementsByTagName("img");tempimg[0].setAttribute("src",serverImg); /*2009-11-20 change Consulting.jpg*/}function show(){j=j+1;i=i+j;if(document.documentElement.scrollTop<=rollendHeight){document.documentElement.scrollTop=rollstartHeight+i;}if(i<=410){div.style.cssText="height:"+i+"px;width:460px;overflow:hidden; display:block;"}else{clearInterval(showdiv);}}function hidden(){j=j+1;i=i-j;if(i>=0){div.style.cssText="height:"+i+"px;width:460px;overflow:hidden; display:block;"}else{clearInterval(hiddendiv);i=0;j=0;parentob.removeChild(div);}}}

function openwindow(ob){
	if (typeof window.pageYOffset != 'undefined') {scrollPos = window.pageYOffset;}else if (typeof document.compatMode != 'undefined' &&document.compatMode != 'BackCompat') {scrollPos = document.documentElement.scrollTop;}else if (typeof document.body != 'undefined') {scrollPos = document.body.scrollTop;}
etwObj.tempimg=(etwObj.tempimg==undefined || etwObj.tempimg=="")?"":";Photos:"+etwObj.tempimg;
var keywords="";
keywords=checkh2tag(ob)+etwObj.tempimg;
var tempurl;tempurl=serverPath+"chat/"+etwObj.feedbackPage+"&"+keywords+"&chatid="+etwObj.chatid+"&lan="+etwObj.lanlabel+"&etwurl="+etwObj.etwfromurl;chatlaystate=false;
openwindow_x=(xScroll/2)-100;nowheight=scrollPos+40;chatLayer=document.createElement("div");chatLayer.setAttribute('id','chat2012');chatLayer.style.cssText="cursor:move;height:440px;width:500px;position:absolute; top:"+nowheight+"px;left:"+(xScroll-350)+"px; background:#fff;text-align:center;border:10px solid #0071E1;filter:alpha(opacity=90);opacity:0.9; webkit-box-shadow:1px 1px 5px #292929;  -moz-box-shadow:1px 1px 5px #292929;    box-shadow:1px 1px 5px #292929;filter: progid:DXImageTransform.Microsoft.Shadow(color='#292929', Direction=135, Strength=3); ";var getframe=document.createElement("iframe");getframe.setAttribute("width","460");getframe.setAttribute("id","chatiframe");getframe.setAttribute("height","410");getframe.setAttribute("scrolling","no");getframe.setAttribute("frameBorder","0");getframe.setAttribute("src",tempurl);var closewindow=document.createElement("div");closewindow.innerHTML="<div id=\'etwchatbox_style\'><div class=\'textstyle\'>"+titlemessage+"</div><div class=\'etwchatboxclosebox\'><a href=\'\' onclick=\'closechatbox();return false;\'><img src="+serverPath+"chat/close.jpg /></a></div></div>";chatLayer.appendChild(closewindow);chatLayer.appendChild(getframe);document.body.appendChild(chatLayer);hiddenchatbox();try{new SimpleDrag("chat2012");}catch(err){}}

function closewindowopennew(){ try{ etwObj.newwindow.close(); }catch(err){} }
window.onbeforeunload=function(){closewindowopennew();}
/*2011-10-31*/

function get_html_result(url,reg,divob){try{createxmlhttp();xmlhttp.open("GET",url,true);xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){    if(xmlhttp.status==200)    {    var html=xmlhttp.responseText;    if(reg!=''){    html=html.toString();    var gethtml=html.match(reg);    var ob=document.getElementById(divob);    if(ob!=null)    {    if(gethtml!=null){ob.innerHTML=gethtml;}    }    }    }}}
xmlhttp.send(null);}catch(err){}}
function load_feedback_iframe(){
etwObj.etwfromurl=etwObj.etwfromurl==undefined?encodeURIComponent(window.location.href):etwObj.etwfromurl;
var feedbackiframe=serverPath+'chat/'+etwObj.feedbackPage+'&'+encodeURIComponent(window.location.href)+'&etwurl='+etwObj.etwfromurl+'&chatid=427';
try{
var set_this_form=document.getElementById('set_this_form'); var iframe=document.createElement('iframe'); iframe.setAttribute('width','90%'); iframe.setAttribute('height','400'); iframe.setAttribute('frameBorder','0'); iframe.setAttribute('scrolling','no'); iframe.setAttribute('src',feedbackiframe); set_this_form.appendChild(iframe);
}catch(error){}
try{var getframe=document.getElementById('floatchatiframe2011');var getsrc=getframe.getAttribute('src');getsrc=getsrc.replace(/feedback\.html?.*&chatid=/ig,'feedback.html?'+etwObj.etwfromurl+'&chatid=');getframe.setAttribute('src',getsrc);}catch(err){}
}
function createScript(src,id,obj)
{
    var script=document.createElement('script');
    script.setAttribute("src",src);
    script.setAttribute('id',id);
    if(obj=='' || obj==undefined){
        document.body.appendChild(script);
    }else
    {
        var tempdiv=document.getElementById(obj);
        tempdiv.appendChild(script);
    }
}
 function set_show(ob)	  {	  document.getElementById(ob).style.cssText='display:block';	  }
 function hidden_menu(ob)  {	  document.getElementById(ob).style.cssText='display:none';	  }
function createStyle(style)
{
	linkstyle=document.createElement('link');
	linkstyle.setAttribute('href',style);
	linkstyle.setAttribute('type','text/css');
	linkstyle.setAttribute('rel','stylesheet');
	document.body.appendChild(linkstyle);
	}