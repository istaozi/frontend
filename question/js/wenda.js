var box = document.getElementsByClassName("title_box")[0];
var content = document.getElementsByClassName("title_con")[0];
var soilderbox = document.getElementsByClassName("soilbox")[0];
var soilder = document.getElementsByClassName("soilder")[0];

soilder.onmousedown=function(e){
	var ev=e||window.event;
	var disY=ev.clientY-soilder.offsetTop;
	document.onmousemove=function(e){

		var ev=e||window.event;
		var y=ev.clientY-disY;
		var t=soilderbox.clientHeight-soilder.offsetHeight;

		if (y <= 0) {
			y = 0;
		}else if (y >= t) {
			y = t;
		}

		var scale=y/t;
		var maxHeight=content.clientHeight-box.offsetHeight;

		content.style.top= -scale*maxHeight +"px";
		soilder.style.top= y+ "px";

	}
	document.onmouseup=function(){
		document.onmousemove=null;
	}
	return false;
}
var speed = 2;
soilder.onmousewheel=function(e){
	var ev=e||window.event;
	var disY=ev.clientY-soilder.offsetTop;
	if (ev.wheelDelta<0) {
		var y=ev.clientY-disY;
		var t=soilderbox.clientHeight-soilder.offsetHeight;
		var scale=y/t;
		var maxHeight=content.clientHeight-box.offsetHeight;

		content.style.top= -scale*maxHeight +"px";
		soilder.style.top= y+ "px";
	}else{
		//alert("向上");
		//tt = tt - speed + "px";
	}
}
