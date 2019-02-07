function load_Menu(){
	var xhttp;
	if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
	xhttp.onreadystatechange=function(){
		var state=xhttp.readyState;
		var statut;
		switch (state){
			case 0: /* nothing to do*/ break;
			case 1: /* nothing to do*/ break;
			case 2: /* nothing to do*/ break;
			case 3: /* nothing to do*/ break;
			case 4: 
				statut=xhttp.status;
				if(statut==200){
					//wrapper.innerHTML+=xhttp.responseXML;
					document.getElementById("topnav").innerHTML+=xhttp.responseXML.getElementById("topnav").innerHTML;
				}
				else{
					/* nothing to do*/														
				}
				break;
		}	
	}
	xhttp.open("GET","http://wijaapp4kids.com/index.html");
	xhttp.responseType = "document";
	xhttp.send();
}