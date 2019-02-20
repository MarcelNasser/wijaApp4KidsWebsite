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
	//wrapper.innerHTML+=textDiv;
	if ("none"!=textDiv.style.display){
		textDiv.style.display="none";
	} else { textDiv.style.display="block";}		
}