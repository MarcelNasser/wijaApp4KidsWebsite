// Loading ratings on DynamoDB
loadCommunityRatings();
var CommunityRatings=document.getElementById("CommunityRatings");
function loadCommunityRatings(){
	var xhttp;
	if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
	var pElement = document.createElement('p');
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
				//console.log(xhttp)
				var textElement = document.createTextNode("-"+xhttp.response+"|"+xhttp.responseText+"-");
				pElement.appendChild(textElement);
				CommunityRatings.appendChild(pElement);
				//CommunityRatings.innerHTML+="<p>"+xhttp.response+"</p>";
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
	xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
	var data={queryType:'GetCommentInTable'};
	try {
		xhttp.send(JSON.stringify(data));
	} catch(err) {
		/* do something */
	}
}