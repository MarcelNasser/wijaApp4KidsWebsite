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
	/*if (popBox.classList.contains("fadein")){		
		popBox.classList.remove("fadein");
	} else {popBox.classList.add("fadein");}*/		
}

function computeCoordinates(txt){
	if (txt=='W' || txt=='J'){
		X=Math.random()*15;
		Y=Math.random()*5;
	}else {
		X=20+Math.random()*15;
		Y=Math.random()*5;
	}
	return [X,Y];
}

function stopSpin(obj){

}

function restartSpin(obj){
		
}