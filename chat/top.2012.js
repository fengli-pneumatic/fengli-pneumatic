var etwserverurl='http://en3img.allhaving.com/serverFile/';
var etw_server_url='http://en3img.allhaving.com';
var etwURL='http://www.allhaving.com/';
var dragjs='chat/top/dragDiv.js';
var favorite_msg='Fail,Add to favorite fails, please use Ctrl D';
var skype_msg="Please click 'ok' if you have installed a Skype and have a Skype account, otherwise, please click 'Cancel'";
var msn_msg="Please click 'ok' if you have installed a Skype and have a Skype account, otherwise, please click 'Cancel'";
var support_javascript="Your browser doesn't support Javascript";
var pdf_msg="Please click 'OK' to open the file using Adobe Reader, \n\rif you do not want to open the file or have not installed Adobe Reader, please click the 'Cancel'.";
var mail_msg="Send an email with Microsoft Outlook, \n\rplease click 'OK' if you have an Outlook account,\n\r otherwise, please click 'Cancel' and contact us via Feedback Form.";
var jsq_url='http://jsq.etwun.com';
var tmp_url_base=window.location.host;
var etwObj=new Object();
etwObj.state=true;

function post_result_to_element_by_match(url,string,showdiv,matcher)
{
	/*传入正则式，可以获取指定页面的指定部分的内容*/
	var xmlhttp;
	function createxmlhttp(){if(window.ActiveXObject){xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}else{xmlhttp=new XMLHttpRequest()}}
	createxmlhttp();
	xmlhttp.open('POST',url,true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	xmlhttp.onreadystatechange=function(){
					if(xmlhttp.readyState==4)
					{
						if(xmlhttp.status==200)
						{
							var result=xmlhttp.responseText;
							var str='';
							var matcheritem=matcher.split('|');
							var matchernums=matcheritem.length;
							for(var i=0;i<matchernums;i++)
							{
								var reg=RegExp(matcheritem[i],'gm');
								if(result.match(reg))
								{
									str+=result.match(reg);
									}
								}
							document.getElementById(showdiv).innerHTML=str;	
						}
					}
				}
		xmlhttp.send(string)
	}
var etw_tmo_obj=new Object();
function post_and_return_data(url,string)
{
	var xmlhttp;
	function createxmlhttp(){if(window.ActiveXObject){xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}else{xmlhttp=new XMLHttpRequest()}}
	createxmlhttp();
	xmlhttp.open('POST',url,false);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	xmlhttp.onreadystatechange=function(){
					if(xmlhttp.readyState==4)
					{
						if(xmlhttp.status==200)
						{
							etw_tmo_obj.result=xmlhttp.responseText;
						}
					}
				}
		xmlhttp.send(string)
	}

function showopenwindow(url) {var iTop=(window.screen.height-500)/2; var iLeft=(window.screen.width-500)/2; window.open(url,"Detail","Scrollbars=no,Toolbar=no,Location=no,Direction=no,Resizeable=no,Width="+500+" ,Height="+500+",top="+iTop+",left="+iLeft);} 
function writejs(src,id){ 	var script=document.createElement('script'); script.setAttribute('src',src);  script.setAttribute('id',src);  document.body.appendChild(script); }
function write_top_js(){ writejs(etwserverurl+topjs,'settopjs');}
writejs(etwserverurl+dragjs,'setdrag');
function showopenwindow(url) {
var iTop=(window.screen.height-500)/2;
var iLeft=(window.screen.width-500)/2;
window.open(url,"Detail","Scrollbars=no,Toolbar=no,Location=no,Direction=no,Resizeable=no,Width="+500+" ,Height="+500+",top="+iTop+",left="+iLeft);
}
function skype(user){if(confirm(skype_msg)){var userac="skype:"+user+"?call";window.open(userac)}}
function msn(user){if(confirm(msn_msg)){var userac="msnim:chat?contact="+user;window.open(userac)}}
function gotopage(myurl){window.location.href=myurl.value}
function checkaddtofaver(url){var tempurl=jsq_url+"/query/doc.php?url="+url;var reiframe=document.createElement("iframe");reiframe.setAttribute("width",0);reiframe.setAttribute("height",0);reiframe.setAttribute("frameBorder",0);reiframe.setAttribute("scrolling","no");reiframe.setAttribute("src",tempurl);document.body.appendChild(reiframe);}

function AddFavorite(sURL, sTitle){checkaddtofaver(sURL);    try    {        window.external.addFavorite(sURL, sTitle);    }    catch (e)    {        try        {            window.sidebar.addPanel(sTitle, sURL, "");        }        catch (e)        {            alert(favorite_msg);        }    }}function SetHome(obj,vrl){ try{checkaddtofaver(vrl)}catch(err){}        try{                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);       }        catch(e){                if(window.netscape) {                        try {                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");                        }                        catch (e) {                                alert(support_javascript);                        }                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);                        prefs.setCharPref('browser.startup.homepage',vrl);                 }        }}
function setBigPic(bigpic,width,height,moveX,moveY,borderWidth,borderColor,ob,obWidth,obHeight,obborder){var str="position:relative;z-index:999;width:"+(obWidth+obborder*2)+"px;height:"+(obHeight+obborder*2)+"px";ob.parentNode.style.cssText=str;ob.style.cssText="position:absolute;left:"+moveX+"px; top:"+moveY+"px;border:"+borderWidth+"px solid "+borderColor;ob.setAttribute("src",bigpic);ob.setAttribute("width",width);ob.setAttribute("height",height);}
function ResetPic(smallPic,ob){ob.setAttribute("src",smallPic);ob.removeAttribute("width");ob.removeAttribute("height");ob.removeAttribute("border");ob.style.cssText="position:inherit;";ob.parentNode.style.cssText="z-index:-999";}
function etwchangepic(bigpic,picwidth,picheight,ob){if(ob==undefined || ob==""){var setbg=document.getElementById("imgpro");}else{var setbg=document.getElementById(ob);}setbg.setAttribute("src",bigpic);if(picwidth!="" || picwidth!=null){setbg.setAttribute("width",picwidth);}if(picheight!="" || picheight!=null){setbg.setAttribute("height",picheight);}}

/*定义在div中动态显示内容用*/
function doget(url,mydiv)
{
	var xmlhttp;
	xmlhttp=null;if(window.ActiveXObject){xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}else{xmlhttp=new XMLHttpRequest();}
	xmlhttp.open("GET",url,true);
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				try{
				var tempdiv=document.getElementById(mydiv);
				tempdiv.innerHTML='';
				tempdiv.innerHTML=xmlhttp.responseText;
				}catch(err){}
				}
			}
		}
	xmlhttp.send(null);
	}
/*定义在div中动态显示内容用,调用方式<a href="hp.html" onmouseover="doget('hp.html','msg');return false;">Ink Cartridge for HP</a>*/

function etw_pdf_download(pdf_url){if(confirm(pdf_msg)){/*2011-05-24pdf?ú×?*/var thisurl=window.location.href; thisurl=thisurl.toString(); var url=jsq_url+'/query/doc.php?type=pdf&url='+thisurl+'&pdf_name='+pdf_url; var pdf_down_iframe=document.createElement('iframe'); pdf_down_iframe.setAttribute('frameBorder','0'); pdf_down_iframe.setAttribute('scrolling','none'); pdf_down_iframe.setAttribute('width','0'); pdf_down_iframe.setAttribute('height','0'); 	pdf_down_iframe.setAttribute('src',url); document.body.appendChild(pdf_down_iframe);/*2011-05-24pdf?ú×?*/ window.open(pdf_url)}}

function etw_mail_to(mail,contact){if(confirm(mail_msg)){var url="mailto:"+mail; window.location=url+"?subject=Inquery Form From "+window.location+"&body=Time:"+new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate();}else{contact='http://'+window.location.host+"/add/contact";window.open(contact);}}

function showAdvertising(width,height,left,top,str){ var script=document.createElement("script");script.setAttribute("src",etwserverurl+"/chat/top/showAdvertising.php?w="+width+"&h="+height+"&l="+left+"&t="+top+"&img="+str+"&closeimg="+etwserverurl+"/chat/close.gif&time="+new Date().getTime()); document.body.appendChild(script); }
function icq(num){var userac="http://www.icq.com/people/cmd.php?uin="+num+"&action=messag";window.open(userac);}

function createiframe(parendnodeID,src,width,height,scrolling){	iframe=document.createElement("iframe");	iframe.setAttribute("frameBorder",0);	iframe.setAttribute("scrolling",scrolling);	iframe.setAttribute("width",width);	iframe.setAttribute("height",height);	iframe.setAttribute("src",src);		document.getElementById(parendnodeID).appendChild(iframe);	}
function etw_search_box(parendnodeID,actionPage,domain,width,height){domain=domain==""?window.location.host:domain;	var url="http://"+actionPage+"/iframe/iframe_left"+width+".aspx?website="+domain;	createiframe(parendnodeID,url,width,height,'no');	}
function getelementbyid(div)
{
	return document.getElementById(div);
	}
function set_img_src_links(divId,src,links)
{
	var div=getelementbyid(divId);
	div.setAttribute('src',src);
	try{
		var pardiv=div.parentNode;
		pardiv.setAttribute('href',links)
	}catch(error){}
	}
function hiddenItemandShowItem(show,hiddenstr)
{//hidden one or more div,and show one div
	var showarr=show.split('|');
	var showarrlen=showarr.length;
	for(var i=0;i<showarrlen;i++)
	{
		try{
			document.getElementById(showarr[i]).style.cssText='display:inline';
		}catch(error){}
		}
	var hiddenarr=hiddenstr.split('|');
	var hiddenarrlen=hiddenarr.length;
	for(var j=0;j<hiddenarrlen;j++)
	{
		try{
			document.getElementById(hiddenarr[j]).style.cssText='display:none';
		}catch(error){}
		}
	}
/*    2013-05-21   */
//获取id
function $(id){
	return typeof id === "string" ? document.getElementById(id) : id;
}
//获取tagName
function $$(oParent, elem){
	return (oParent || document).getElementsByTagName(elem);
}
//获取className
function $$$(oParent, sClass){
	var aElem = $$(oParent, '*');
	var aClass = [];
	var i = 0;
	for(i=0;i<aElem.length;i++)if(aElem[i].className == sClass)aClass.push(aElem[i]);
	return aClass;
}
function getversionofIE()
{
	var version=navigator.userAgent;
	var v='';
	if(version.match(/MSIE 6\.0/))
	{
		v=6;
		}
	return v;
	}
/*    2013-05-21   */
/*2014-08-29*/
etwObj.$=function(id){return typeof id === "string" ? document.getElementById(id) : id;}
etwObj.$$=function(oParent, elem){return (oParent || document).getElementsByTagName(elem);}
etwObj.$$$=function(oParent, sClass){var aElem = etwObj.$$(oParent, '*');    var aClass = [];   var i = 0;     for(i=0;i<aElem.length;i++)if(aElem[i].className == sClass)aClass.push(aElem[i]);     return aClass;}
/*2014-08-29*/
/*2013-05-27*/
function closedivbox(div){ var ob=etwObj.$(div); ob.parentNode.removeChild(ob); }
function clickshowbigpics(div,className,movex,movey)
{
	var obj=etwObj.$(div); var eachimg=etwObj.$$$(obj,className); var eachimgnums=eachimg.length;
	for(var i=0;i<eachimgnums;i++)
	{
		eachimg[i].onclick=function()
		{
			var temp=i;
			return function()
			{
				 try{
					var tmpdelobj			=	etwObj.$('ETWopenboxDiv');
					tmpdelobj.parentNode.removeChild(tmpdelobj);
					}catch(e){}
				var bigimg=this.getAttribute('bigimg'); var closeImg=etwserverurl+'images/closebox.png'; 	var bigsize=eachimg[temp].getAttribute('setsize'); 	var showText=eachimg[temp].getAttribute('title'); 	showText=(showText=='' || showText==null)?eachimg[temp].getAttribute('alt'):showText; 	showText=(showText=='' || showText==null)?'':showText; 	bigsize=bigsize.split(','); var bigwidth=bigsize[0]; 	var bigheight=parseInt(bigsize[1])+50; 	var photopar=eachimg[temp].parentNode;
				if(photopar.nodeName=='A' || photopar.nodeName=='a') { photopar=photopar.parentNode; }
				var screenWidth=getWindowSize('w');
				var screenHeight=getWindowSize('h');
				var screenposx=(parseInt(screenWidth)-parseInt(bigwidth))/2;
				var screenposy=(parseInt(screenHeight)-parseInt(bigheight))/2;
				var newdiv=document.createElement('div'); newdiv.setAttribute('id','ETWopenboxDiv'); newdiv.style.cssText="z-index:999;width:"+bigwidth+"px; height:"+bigheight+"px; position:absolute;left:"+screenposx+"px;top:"+screenposy+"px; border:1px solid #ccc; background:#fff; box-shadow:3px 3px 3px #ccc; -moz-box-shadow:3px 3px 3px #ccc; -webkit-box-shadow:3px 3px 3px #ccc; padding:3px;overflow:hidden;"; 	newdiv.innerHTML='<div class="big_show_img_close"><a class="big_show_img_close_link" href="#" onclick=\'closedivbox("ETWopenboxDiv");return false;\'><img border="0" src="'+closeImg+'" /></a></div><div class="big_show_img_src" style="overflow:hidden;"><img onclick=\'closedivbox("ETWopenboxDiv")\' style="cursor:pointer;" class="big_show_img_o" src="'+bigimg+'" /></div><div class="big_show_img_txt" style="font-size:12px; color:#666; overflow:hidden;font-family:arial; text-align:center;">'+showText+'</div>'; photopar.appendChild(newdiv);
				return false;
				}
			}()
		}
	}
/*2013-05-27  clickshowbigpics('allphotos','showibgpic','-20','-20'); */
/*2013-07-15   windowOpenBox(this,800,300,-20,-120,'myobk') */
function windowOpenBox(obj,width,height,moveX,moveY,divId){	var closeImg=etwserverurl+'images/closebox.png';var screenw=document.body.clientWidth;var screenh=window.screen.height; width=parseInt(width)>parseInt(screenw)?screenw:width; 	height=parseInt(height)>parseInt(screenh)?screenh:height; 	var xpos=(parseInt(screenw)-parseInt(width))/2; var ypos=(parseInt(screenh)-parseInt(height))/2; 	var div=document.createElement('div'); 	div.setAttribute("id","openNewWindow"); 	div.style.cssText='position:absolute; left:'+(parseInt(xpos)+parseInt(moveX))+'px;top:'+(parseInt(ypos)+parseInt(moveY))+'px;z-index:999; width:'+width+'px; height:'+height+'px;border:1px solid #ccc; background:#fff; box-shadow:3px 3px 3px #ccc; -moz-box-shadow:3px 3px 3px #ccc; -webkit-box-shadow:3px 3px 3px #ccc; padding:3px 20px;overflow:hidden;border:1px solid #ccc; background:#fff; box-shadow:3px 3px 3px #ccc; -moz-box-shadow:3px 3px 3px #ccc; -webkit-box-shadow:3px 3px 3px #ccc; padding:3px 20px;overflow:auto;';	var html=$(divId).innerHTML;	div.innerHTML='<div class="show_html_close"><a class="html_close_bt" href="#" onclick=\'closedivbox("openNewWindow");return false;\'><img border="0" src="'+closeImg+'" /></a></div><div class="show_html_content">'+html+'</div>';	document.body.appendChild(div);	}
/*2013-07-15*/
function setStyleByJs(show,hiddenstr,thisob,parob,divclass,defaultstyle,setTostyle)
{
	var pardiv=etwObj.$(parob);
	var styleob=etwObj.$$$(pardiv,divclass);
	var styleobnums=styleob.length;
	for(var i=0;i<styleobnums;i++)
	{
		styleob[i].style.cssText=defaultstyle;
		}
	thisob.style.cssText=setTostyle;
	var theSameTitle=thisob.getAttribute("title");
	if(theSameTitle!=null && theSameTitle!='' && theSameTitle!=undefined)
	{
		var styleobSame=etwObj.$$$(pardiv,divclass);
		var styleobnumsSame=styleobSame.length;
		for(var i=0;i<styleobnumsSame;i++)
		{
			if(styleobSame[i].getAttribute('title')==theSameTitle)
			{
				styleobSame[i].style.cssText=setTostyle;
				}
			}
		}
	hiddenItemandShowItem(show,hiddenstr);
	}
function setInquiryForm()
{
	var element=document.getElementsByTagName('inquiry');
	var nums=element.length;
	var h2Tag=document.getElementsByTagName('h2');
	try{h2Tag=h2Tag[0].innerHTML;
	}catch(error)
	{
		h2Tag=window.location.href;
		}
	for(var i=0;i<nums;i++)
	{
		var showName=h2Tag+":"+element[i].innerHTML;
		showName=encodeURIComponent(showName);
		try{element[i].innerHTML="<a href='#' onclick=\"openwindow('"+showName+"');return false;\"><u class='inquiry'>"+element[i].innerHTML+"</u></a>";}catch(error){}
		}
	}
function clearInnerHtmlBySelect(first,startNum)
{
	if(first!='')
	{
		etwObj.$(first).innerHTML='';
		}
	if(startNum!='')
	{
		for(var i=startNum;i<4;i++)
		{
			etwObj.$('selectblock_'+i).innerHTML='';
			}
		}
	}
function JoinSearch(parobj,showdiv)
{
	var inputboxPar=etwObj.$(parobj);
	var inputBox=etwObj.$$(inputboxPar,'select');
	var nums=inputBox.length;
	var poststr='';
	for(var i=0;i<nums;i++)
	{
		if(inputBox[i].value!='')
		{
			poststr=poststr+encodeURIComponent(inputBox[i].value)+'|';
			}
		}
	doget('/JoinSearch.php?id='+poststr,showdiv);
	}
function setItemByDivId(parentDiv,divStr,titleDiv,defaultStyle,setStyle,setClass)
{
	var jsstr='<ul class="ItemHiddenShow">';
	var divs=divStr.split('|');
	var divnums=divs.length;
	for(var i=0;i<divnums;i++)
	{
		var h3par=etwObj.$(divs[i]);
		
		var h3html='';
		try{
			var h3=h3par.getElementsByTagName('h3');
			h3html=h3[0].innerHTML;
		
			var otherdiv=divStr.replace(divs[i],'');
			otherdiv=otherdiv.replace('||','|');
			otherdiv=otherdiv.replace(/^(\|)|(\|$)/ig,'');
			if(h3html!=''){
				var links="<li class=\"ItemHiddenShow_"+i+"\"><a href=\"#\" onclick=\"setStyleByJs('"+divs[i]+"','"+otherdiv+"',this,'"+parentDiv+"','"+setClass+"','"+setStyle+"','"+defaultStyle+"');return false;\" class=\""+setClass+"\">"+h3html+"</a></li>";
				if(i!=0)
				{
					h3par.style.cssText='display:none';
					}
			}
			jsstr+=links;
		}catch(error)
		{
			h3html='';
			}
		}
	jsstr+='</ul>';
	try{etwObj.$(titleDiv).innerHTML=jsstr;}catch(e){}
	}
function getWindowSize(type)
{   /*type =w | h*/
	var winWidth = 0;
	var winHeight= 0;
	var scrollPos=	0;
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		winWidth = document.body.clientWidth;
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight = document.body.clientHeight;
	if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
	{
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
	}
	var yScroll=document.documentElement.clientHeight-50;
	if (typeof window.pageYOffset != 'undefined') {scrollPos = window.pageYOffset;}else if (typeof document.compatMode != 'undefined' &&document.compatMode != 'BackCompat') {scrollPos = document.documentElement.scrollTop;}else if (typeof document.body != 'undefined') {scrollPos = document.body.scrollTop;}
	winHeight=scrollPos+yScroll;
	winHeight=parseInt(winHeight)+parseInt(scrollPos);
	var getsize=type=='w'?winWidth:winHeight;
	return getsize;
}
function post_result_to_element(url,string,showdiv,attribute,jsevent){var body=document.getElementsByTagName('body');var xmlhttp;function createxmlhttp(){if(window.ActiveXObject){xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}else{xmlhttp=new XMLHttpRequest()}}    createxmlhttp();xmlhttp.open('POST',url,true);xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4)	{if(xmlhttp.status==200)	{var returntxt=xmlhttp.responseText;if(attribute==''){try{document.getElementById(showdiv).innerHTML=returntxt;}catch(err){}}else	{document.getElementById(showdiv).setAttribute(attribute,returntxt)}	    if(jsevent!=undefined)    {var js='';var reg=/<script id="getjs"[\S\s]*?<\/script>/igm;if(returntxt.match(reg))    {var tempjs=returntxt.match(reg);tempjs=tempjs.toString();tempjs=tempjs.replace(/(<script[\S\s]*?>)|(<\/script>)/ig,'');js+=tempjs;}        var script=document.createElement('script');script.setAttribute('id','addjs');try{script.innerHTML=eval(js);}    catch(e){}        body[0].appendChild(script);}}}}
    xmlhttp.send(string)}
function initSpeech()
{
	var imgspeech						=	document.getElementsByTagName('img');
	var imgspeechnums				=	imgspeech.length;
	for(i=0;i<imgspeechnums;i++)
	{
	//var txt=imgspeech[i].getAttribute('title');
	imgspeech[i].onmouseover=function(){
		return function(){
			var tmpjs				=	this.getAttribute('onmouseover');
			if(tmpjs!='' && tmpjs!=null)
			{
				eval(tmpjs);
				return false;
				}
			var speechtext			=	this.getAttribute('speech');
			if(speechtext!=null && speechtext!='')
			{
				switch(etwObj.lanlabel){
				case 'en':
				case 'fr':
				case 'es':
				case 'pt':
				case 'ru':
				case 'de':
					setSpeech(etwObj.lanlabel,speechtext)
				break;
				case 'jp':
					setSpeech('ja',speechtext)
					break;
				case 'cn':
					setSpeech('zh-CHS',speechtext)
					break;
				}
			}
			return false;
		}
	}()
}
}
function setSpeech(lang,txt){
	try{
	var tmpspan					=	document.getElementById('etw-speech');
	tmpspan.parentNode.removeChild(tmpspan);
	}catch(e){}
	var srcfile					=	'/static/speech/?pname='+txt+'&lang='+lang;
	var source						=	document.createElement('source');
	source.setAttribute('type','audio/mp3');
	source.setAttribute('src',srcfile);
	var audio						=	document.createElement('audio');
	audio.setAttribute('controls','controls');
	audio.setAttribute('autoplay','autoplay');
	audio.appendChild(source);
	audio.style.cssText		="display:none;";
	var obj							=	document.createElement('span');
	obj.setAttribute('id','etw-speech');
	obj.appendChild(audio);
	try{
	var container					=	document.getElementById('footer');
	container.appendChild(obj);
	}catch(e){}
}
initSpeech();
setInquiryForm();
createStyle('/static/css/helpus.css?id=1');
