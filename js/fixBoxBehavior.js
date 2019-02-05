var jobInfo = document.getElementById("responseLine");
var box={body:null,faces:{front:null,right:null,back:null,left:null}};
box.body=document.getElementsByClassName("slideBox")[0];
box.faces.front=document.getElementsByClassName("front")[0];
box.faces.back=document.getElementsByClassName("back")[0];
box.faces.right=document.getElementsByClassName("right")[0];
box.faces.left=document.getElementsByClassName("left")[0];
for (var face in box.faces){
	box.faces[face].onmouseover=function() {fadeOut(this)};
	box.faces[face].onmouseout=function() {restartSpin(this)};
	box.faces[face].onclick=function() {showDivContent(this)};
	box.faces[face].ondblclick=function() {fadeOut2(this)};	
}
var isMobileDevice=navigator.userAgent.match(/Android/i)
				 || navigator.userAgent.match(/webOS/i)
				 || navigator.userAgent.match(/iPhone/i)
				 || navigator.userAgent.match(/iPad/i)
				 || navigator.userAgent.match(/iPod/i)
				 || navigator.userAgent.match(/BlackBerry/i)
				 || navigator.userAgent.match(/Windows Phone/i);

function fadeOut(obj){
	if (obj.classList.contains("fadeable")){		
		obj.classList.remove("fadeable");
	} else {obj.classList.add("fadeable");}
}

function fadeOut2(obj){
	if (!obj.classList.contains("fadeable")){		
		obj.classList.add("fadeable");
	}
}
var coor;
function showDivContent(obj){
	var faceName,poBox;	
	var faceName=obj.innerHTML;
	var popBox=document.getElementById("wijaBox_"+faceName);		
	overlay.style.display ="block";
	popBox.style.display ="block";
	popBox.classList.add("fadein");
	coor=computeCoordinates(faceName);
	popBox.style.transform="translateX("+coor[0]+"em) "+"translateY("+coor[1]+"em)";
	popBox.style.webkitTransform="translateX("+coor[0]+"em) "+"translateY("+coor[1]+"em)";
	//popBox.onclick=function(){popBoxClicked();}
}

function computeCoordinates(txt){
	if (txt=='W' || txt=='J'){
		if (isMobileDevice & window.innerWidth<600){
			X=-6+Math.random()*1;
			Y=Math.random()*2;			
		}
		else{
			X=2+Math.random()*5;
			Y=Math.random()*5;
		}
	}
	else {
		if (isMobileDevice &window.innerWidth<600){
			X=-6+Math.random()*1;
			Y=Math.random()*2;			
		}
		else{
			X=25+Math.random()*5;
			Y=Math.random()*5;
		}
	}
	return [X,Y];
}

function popBoxClicked(){
	if (dropMenu!=null){
		if (dropMenu.style.display!="none"){
			closeMenu();
			overlayStack.pop();
		}
	}
}

function socialMediaClicked(){
	window.open("https://facebook.com");
}

function stopSpin(obj){
	//
}

function restartSpin(obj){
	//
}