var IEVersion;
var notificationBox=document.getElementsByClassName("notificationBox")[0];
var	wijaSlidesWrapper=document.getElementById("wijaSlidesWrapper");
try {
	//IEVersion = window.navigator.userAgent.indexOf('MSIE ');
	IEVersion = document.documentMode;
	if ( !!IEVersion){
		notificationBox.style.display="block";
		notificationBox.style.position="relative";
		notificationBox.style.backgroundColor="red";
		notificationBox.style.transform="translate(0%,0%)";
		notificationBox.style.top="auto";
		notificationBox.style.left="auto";
		notificationBox.style.padding="1em 3em";
		notificationBox.style.margin="3em auto";
		notificationBox.style.zIndex="20";
		if (wijaSlidesWrapper!=null){wijaSlidesWrapper.style.display="none";}
	}
} catch (error){IEVersion =null;}