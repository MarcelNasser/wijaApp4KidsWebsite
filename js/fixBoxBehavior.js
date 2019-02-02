var jobInfo = document.getElementById("responseLine");
var overlay=document.getElementById("overlay");

// overlay.onclick = function(event) {
	// overlay.style.display ="none";
// }
// jobInfo.innerHTML+="- coucou -\n";
// var spinableY=document.getElementsByClassName("spinableY");
// jobInfo.innerHTML+="-"+spinableY[0].style.animation+"-\n";
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

function showDivContent(obj){
	var faceName,poBox;	
	var faceName=obj.innerHTML;
	var popBox=document.getElementById("wijaBox_"+faceName);		
	overlay.style.display ="block";
	popBox.style.display ="block";
	popBox.classList.add("fadein");
	popBox.style.transform="translateX("+Math.random()*25+"em) "+"translateY("+Math.random()*5+"em)";
	/*if (popBox.classList.contains("fadein")){		
		popBox.classList.remove("fadein");
	} else {popBox.classList.add("fadein");}*/		
}

function stopSpin(obj){
	// box.body.classList.remove("spinableY");
	// box.body.animate(
		// [{ transform: 'rotateY(0)'},{ transform: 'rotateY(-360deg)' }],
		// {duration:3,iterations:Infinity},
	// );
	// box.body.classList.add("spinableY");
	// jobInfo.innerHTML+="- "+obj.className+" -\n";
	// if (box.body.classList.contains("spinableY")){
		// box.body.classList.remove("spinableY");
		// if (obj.className=="left"){
			// box.body.style.transform="rotateY(-270deg)";
		// } else if (obj.className=="right"){
			// box.body.style.transform="rotateY(-90deg)";
		// } else if (obj.className=="back"){
			// box.body.style.transform="rotateY(180deg)"; 	
		// }
	// }
}

function restartSpin(obj){
	// box.body.animate(
		// [{ transform: 'rotateY(0)'},{ transform: 'rotateY(-360deg)' }],
		// {duration:30,iterations:Infinity},
	// );
	// if (!box.body.classList.contains("spinableY")){
		// box.body.classList.add("spinableY");
		// if (obj.className=="left"){
			// box.body.style.transform="rotateY(-270deg)";
		// } else if (obj.className=="right"){
			// box.body.style.transform="rotateY(-90deg)";
		// } else if (obj.className=="back"){
			// box.body.style.transform="rotateY(180deg)"; 	
		// }
	// }		
}