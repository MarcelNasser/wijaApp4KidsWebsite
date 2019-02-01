var jobInfo = document.getElementById("responseLine");
var storyW=document.getElementById("storyW");
var overlay=document.getElementById("overlay");
var popBox=document.getElementsByClassName("popBox")[0];

function openStoryW(){
	// overlay.style.display ="block";
	// storyW.style.display ="block";	
}

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
// overlay.onclick=function(){closeDiv()};

function closeDiv(){
	overlay.style.display ="none";
	popBox.style.display ="none";
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
	var face=obj.innerHTML;
	// box.body.style.visibility="hidden";
	//overlay.style.zIndex="1";
	//popBox.style.zIndex="5";
	overlay.style.display ="block";
	popBox.style.display ="inline-block";
	popBox.classList.add("fadein");
	//popBox.style.width=(int)(wrapper.style.width/3);
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