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