function requestSomething(){
	var jobInfo = document.getElementById("responseLine");
	if (jobInfo.innerText.length>100){
		return false;
	}
	else {
			jobInfo.innerHTML="";
	}
	var xhttp;
	if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
	jobInfo.style.textAlign = "left";
	jobInfo.innerHTML+=" >>>  Requesting from host the Webmaster's e-mail ... <br\>";
	jobInfo.innerHTML+="--------------------------------------------------";
	xhttp.onreadystatechange=function(){
		var state=xhttp.readyState;
		var statut;
		switch (state){
			case 0: jobInfo.innerHTML+="<br\> ->  Sending request to host ";break;
			case 1: jobInfo.innerHTML+="<br\> ->  Host connection established";break;
			case 2: jobInfo.innerHTML+="<br\> ->  Host has received the request";break;
			case 3: jobInfo.innerHTML+="<br\> ->  Host finished, response ready";break;
			case 4: 
				statut=xhttp.status;
				jobInfo.innerHTML+="<br\> -> Host sent the response with status:: "+statut;
				//jobInfo.innerHTML+="<br\> -> Host sent the response with headers:: "+xhttp.getResponseHeader('Content-Type');

				if(statut==200){
					jobInfo.innerHTML+="<br\>--------------------------------------------------";
					jobInfo.innerHTML+="<br\> -- Summary --"
					jobInfo.innerHTML+="<br\> The fire/response test performed well. AWS services S3, Lambda and API Gateway are well configured."+
					"The pipeline with the host is ready for datastreaming and further implements. By the way, the Webmaster's message output :: ";
					jobInfo.innerHTML+="<br\>"+xhttp.responseText;
					//jobInfo.innerHTML+="<br\> Webmaster's response:: "+xhttp.responseXML;

				}
				else{
					jobInfo.innerHTML+="<br\>--------------------------------------------------";
					jobInfo.innerHTML+="<br\> -- Summary --"
					jobInfo.innerHTML+="<br\> Diagnosis : <br\> the HTTP request exited with an error status ("+statut+")";
					jobInfo.innerHTML+="\ :: something went wrong while your browser was listening to the server.";
					jobInfo.innerHTML+="<br\> Debug:";
					jobInfo.innerHTML+="<br\> -1- Try switching browsers to confirm the behavior.";										
					jobInfo.innerHTML+="<br\> -2- Authorize the current webpage to run embeded scripts.";															
				}
				break;
		}	
	}
	xhttp.open("GET","https://inh6ay75eg.execute-api.eu-west-3.amazonaws.com/pre-prod/WijaLambda",true);
	xhttp.send(null);
	return false;
}

function submitComment(obj){
	closeMailBox();
	var xhttp;
	var data={firstname:null,lastname:null,'e-mail':null};;
	data.firstname="bob";
	data.lastname="mande";
	data['e-mail']="bob.mande@wijaapp4kids.com";
	var notificationBox=document.getElementsByClassName("notificationBox")[0];
	notificationBox.style.display="block";
	notificationBox.innerHTML="<h5>** info **</h5>"
	notificationBox.innerHTML+="<p>> sending comment to host...</p>"
	//notificationBox.innerHTML+="into request/"+JSON.stringify(data)+"\n";
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
			case 0: break;
			case 1: break;
			case 2: break;
			case 3: break;
			case 4: 
				statut=xhttp.status;
				notificationBox.innerHTML+="<p>> response Text: "+xhttp.reponseText+"<\p>";
				notificationBox.innerHTML+="<p>> response Json: "+xhttp.reponseJSON+"<\p>";
				notificationBox.classList.add("slowFadeOut");
				notificationBox.onanimationend = function(event) {
					notificationBox.style.display="none";
				};
				if(statut==200){
					/* do something */																			
				}
				else{
					/* do something */														
				}
				break;
		}	
	}
	xhttp.open("POST","https://inh6ay75eg.execute-api.eu-west-3.amazonaws.com/pre-prod/WijaLambda",true);
	xhttp.responseType="json";
	//xhttp.setRequestHeader("Access-Control-Allow-Origin", "*")
	xhttp.send(JSON.stringify(data));
}