function setNotMouseEvent()
{
	document.getElementById("container").setAttribute("unselectable","on");
	document.getElementsByTagName("body")[0].style.cssText="-moz-user-select:none;";
	var obj=document
	obj.oncontextmenu=function(){return false;}
	obj.onselectstart=function(){return false;}
	obj.ondragstart=function(){return false;}
	obj.oncopy=function(){document.selection.empty() ;}
	obj.onbeforecopy=function(){return false;}
	obj.onselect=function(){document.selection.empty()}
	}
setNotMouseEvent();
setInterval("setNotMouseEvent",1000);
if(window.opera)
{
	document.body.innerHTML='<h1>This Website works On Google Chorme,IE,FF in China</h1>';
	}