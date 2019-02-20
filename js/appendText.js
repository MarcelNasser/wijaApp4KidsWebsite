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
//var textDiv=document.getElementById("Text011");
//var clicked=0;
function showHiddenText(id_target){
	var textDiv=document.getElementById(id_target);
	if(textDiv.style.display===undefined|textDiv.style.display==""){textDiv.style.display="none";}
	if (textDiv.style.display=="none"){
		textDiv.style.display="block";
	} else { textDiv.style.display="none";}		
}