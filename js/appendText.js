function appendText(id_target){
	var next=document.getElementById(id_target+"_next");
	var more=document.getElementById(id_target+"_more");
	if (next!=null){next.style.display="block";}
	if (more!=null){more.style.display="none";}
}

function hideText(id_target){
	var next=document.getElementById(id_target+"_next");
	var more=document.getElementById(id_target+"_more");
	if (next!=null){next.style.display="none";}
	if (more!=null){more.style.display="inline-block";}
}

function showHiddenText(id_target){
	var textDiv=document.getElementById(id_target);
	if(textDiv.style.display===undefined|textDiv.style.display==""){textDiv.style.display="none";}
	if (textDiv.style.display=="none"){
		textDiv.style.display="block";
		if (isCrappyScreen()){
			textDiv.style.fontSize="1.35em";
			textDiv.style.lineHeight="1.8em";
		}
	} else { textDiv.style.display="none";}		
}

function showOnlyText(id_target){
	var textDiv=document.getElementById(id_target);
	textDiv.style.display="block";
	if (isCrappyScreen()){
		textDiv.style.fontSize="1.35em";
		textDiv.style.lineHeight="1.8em";
	}
}

function hideOnlyText(id_target){
	var textDiv=document.getElementById(id_target);
	textDiv.style.display="none";
}

