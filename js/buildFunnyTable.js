// var tabContactDiv=document.getElementById("tableContactWrapper");

// tabContactDiv.innerHTML="<table id=\"tableContact\" class=\"hideable\" onsubmit=\"\">\n"+
						// "<tbody>";
var tabContact=document.getElementById("tableContact");
tabBody=tabContact.getElementsByTagName("tbody");
for (var i=0;i<2;i++){
	tabBody.innerHTML+="<tr>\n";
	for (var j=0;j<2;j++){
		tabBody.innerHTML+="<td> <div class=\"mailBoxItem\">\n";
		tabBody.innerHTML+=
		"<a href= \"javascript:void(0);\"><div class=\"focusable\">"+
		"<img src=\"icons/work.png\" /></div></a>\n";
		tabBody.innerHTML+="</div></td>\n";
	}
	tabBody.innerHTML+="</tr>\n";
}
// tabContactDiv.innerHTML+="</tbody>\n"+"</table>";
