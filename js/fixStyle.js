	
	var body=document.getElementsByTagName("body")[0];
	var hideable=document.getElementsByClassName("hideable");
	var popBox=document.getElementsByClassName("popBox");
	var androidBadge=document.getElementById("androidBadge");
	var wrapper=document.getElementById("wrapper");
	var overlay=document.getElementById("overlay");
	var menuIcon=document.getElementById("menuIconWrapper");
	var dropMenu=document.getElementById("topnavDropMenu");
	var menuMobile=document.getElementById("topnavDropMenuMobile");
	var navbar=document.getElementById("topnav");
	var dropMenuList=document.getElementById("dropMenuList");
	var mailBox=document.getElementById("mailBox");
	var formMailBox=document.getElementById("formMailBox");
	var tabContact=document.getElementById("tableContact");
	var menuList=document.getElementsByClassName("material-icons menuButton");
	var colors=["blue","green","red"];
	var icolo=0;
	var jobInfo = document.getElementById("responseLine");
	var responseHttp= document.getElementById("responseContainer");
	var overlayStack=['','overlay'];
	var mailBoxButton=document.getElementById("mailBoxButton");
	var animationBeats=["greenPulse","yellowPulse","redPulse","bluePulse"];
	var menuBtnMobile=document.getElementsByClassName("material-icons menuButtonMobile");
	var notMenuMobileOpen=false;
	var notificationBox=document.getElementsByClassName("notificationBox")[0];
	
	overlay.onclick=function() {OnclickOverlay()};
	function OnclickOverlay(){
		if (overlayStack[overlayStack.length-1]=='Menu'){if (dropMenu!=null){closeMenu();}}
		else if (overlayStack[overlayStack.length-1]!='Menu'){
			if (mailBox!=null ){closeMailBox();}
			if (responseHttp!=null){closeResponseHttp();}
			if (popBox!=null){closePopBox();}
		}
		if (overlayStack.length>2){overlayStack.pop();}
	}
	
	function dopopBoxWClicked(){
		if (mailBoxButton!=null){
			mailBoxButton.classList.add("fadeinBeat");
		}
	}
	
	var stopPopBox=false;
	slideBox=document.getElementsByClassName("slideBox")[0];
	wijaSlidesWrapper=document.getElementById("wijaSlidesWrapper");
	if (slideBox!=0){
		slideBox.addEventListener("webkitAnimationEnd", refreshStop);
		slideBox.addEventListener("animationend", refreshStop);
		//slideBox.onclick=function() {restartPopBox()};
		//wijaSlidesWrapper.onclick=function() {restartPopBox()};
	}	
	function refreshStop(){
		/*if (restartPopBox) {
			slideBox.classList.remove("spinableY");
			slideBox.classList.add("spinableY");
			restartPopBox=false;					
			}*/	
			stopPopBox=true;
	}
	
	function restartPopBox(){
		/*
		var content=document.getElementById("content");
		content.innerHTML+="/into restartBox : stop ="+stopPopBox+"\n"
		slideBox.style.WebkitAnimation="spinY 3s 1";
		slideBox.style.animation="spinY 3s 1";
		slideBox.addEventListener("webkitAnimationEnd", refreshStop);
		slideBox.addEventListener("animationend", refreshStop);
		stopPopBox=false;*/
		/*if (slideBox.classList.contains("spinableY")){	
			slideBox.classList.remove("spinableY");
			slideBox.classList.add("spinableY");
			stopPopBox=false;
		}*/
	}
	
	function openMenu(){
		if(dropMenu.style.display != "block")
			{
			overlay.style.display ="block";
			dropMenu.style.display="block";
			for (var i = 0; i < menuList.length; i++) {
					icolo=Math.floor(Math.random()*colors.length);
					menuList[i].style.color=colors[icolo%colors.length];
					menuList[i].style.fontSize="110%";
				}
			overlayStack.push('Menu');
			}
		else {closeMenu();overlayStack.pop();}
	}
	
	function closeMenu(){
		if (overlayStack[overlayStack.length-1]=='Menu'){
			if (dropMenu.style.display!="none"){
				closeOverlay();
			}
			dropMenu.style.display="none";
		}
	}
	
	function closeOverlay(){
		var tocloseOverlay=true;
		if (popBox!=null){
			for(var i=0;i<popBox.length;i++){
					if (popBox[i].style.display!="none"&popBox[i].style.display!="")
						{tocloseOverlay=false;}
				}
			if (tocloseOverlay){overlay.style.display ="none";}	
		}
		if (mailBox!=null){
			if (mailBox.style.display!="none"){tocloseOverlay=false;}
			else {overlay.style.display ="none";}
		}
		if (responseHttp!=null){
			if (responseHttp.style.display!="none"){tocloseOverlay=false;}
			else {overlay.style.display ="none";}
		}
		if (tocloseOverlay){overlay.style.display ="none";}
	}
	
	function openMailBox(){
		if(mailBox.style.display != "block")
		{
			overlay.style.zIndex="6";
			overlay.style.display ="block";
			tabContact.style.display="none";
			//overlayStack.push('mailBox');
		}
		mailBox.style.display="block";		
	}
	
	function closeMailBox(){
		if(mailBox.style.display!="none"){
			overlay.style.zIndex="1";
			overlay.style.display ="none";
			tabContact.style.display="block";
		}
		mailBox.style.display="none";
	}
	
	function closePopBox(){	
		for(var i=0;i<popBox.length;i++){
			if(popBox[i].style.display!="none"){
				if (popBox[i].classList.contains("fadein")){	
					popBox[i].classList.remove("fadein");				
				}
				overlay.style.display ="none";
			}
			popBox[i].style.display ="none";
		}
	}	
	
	function openResponseHttp(){
		if(responseHttp.style.display != "block")
			{
				overlay.style.zIndex="6";
				overlay.style.display ="block";
				tabContact.style.display="none";
				//overlayStack.push('responseHttp');
			}
			responseHttp.style.display="block";
	}
	
	function closeResponseHttp(){
		if(responseHttp.style.display!="none"){
			overlay.style.display ="none";
			overlay.style.zIndex="1";
			tabContact.style.display="block";
		}
		responseHttp.style.display ="none";		
	}
	
	function switchHideStatus(status1,status2){
		for (var i = 0; i < hideable.length; i++) {
			if (hideable[i].style.display==status1){
			hideable[i].style.display=status2;}
		}
	}
	
	var isMobileDevice=navigator.userAgent.match(/Android/i)
					 || navigator.userAgent.match(/webOS/i)
					 || navigator.userAgent.match(/iPhone/i)
					 || navigator.userAgent.match(/iPad/i)
					 || navigator.userAgent.match(/iPod/i)
					 || navigator.userAgent.match(/BlackBerry/i)
					 || navigator.userAgent.match(/Windows Phone/i);
	
	function computeWrapperDimensions(){
		var maxwidth=Math.min(900,window.innerWidth);
		maxwidth=Math.max(wrapper.style.minWidth,maxwidth);
		return maxwidth;
	}
	
	window.onload = function(){
		onloadAction();
	}
	
	//document.onload=function(){onloadAction();}
	
	function onloadAction(){
		//wrapper.innerHTML+="coucou onload\n"
		//var overlayStack=['','overlay'];
		//if (isMobileDevice){wrapper.style.minHeight=window.innerHeight;}
		wrapper.style.maxWidth=computeWrapperDimensions()+"px";
		if (isCrappyScreen()){packContent();}
	}
	
	//document.addEventListener('DOMContentLoaded', function() {onloadAction();}, false);
	
	window.onresize = function(){
		wrapper.style.maxWidth=computeWrapperDimensions()+"px"; 
/*		if (isMobileDevice){
			wrapper.style.minHeight=window.innerHeight+"px";
			wrapper.style.maxWidth=window.innerWidth+"px";
		}*/
		if (isCrappyScreen()){packContent();}
		else {unPackContent();}
	}
	
	function isCrappyScreen(){
		var orientation = screen.msOrientation || (screen.orientation 
							|| screen.mozOrientation || {}).type;
		//wrapper.innerHTML+="coucou Crappy : orientation="+orientation+"|width="+window.innerWidth+"\n";
		if (orientation == "portrait-secondary" || orientation == "portrait-primary" ||
			window.innerHeight>window.innerWidth || window.innerWidth<750 ||isMobileDevice) {
			//wrapper.innerHTML+="coucou Crappy : "+true+"\n";
			return true;
		} else {
			//wrapper.innerHTML+="coucou Crappy : "+false+"\n";
			return false;
		}

	}
	
	function packContent(){
		//wrapper.innerHTML+="coucou Pack / font-size="+body.style.fontSize+"\n";
		while (overlayStack.length>2){OnclickOverlay();}
		//var newFont=(int)(body.style.fontSize*1.5);
		body.style.fontSize="18px";
		androidBadge.style.display="none";
		menuIcon.style.display="none";
		menuMobile.style.display="inline-block";
		wrapper.style.maxWidth=(int)(window.innerWidth-wrapper.style.marginLeft-wrapper.style.marginRight)+"px";
		footer.style.marginTop=(int)(footer.style.marginTop+4)+"em";
		//wrapper.style.minHeight=window.innerHeight+"px";
		//navbar.style.position="fixed";
		navbar.style.overflow="hidden";
		//menuIcon.style.borderRadius="50%";
	}
	
	function unPackContent(){
		while (overlayStack.length>2){OnclickOverlay();}
		body.style.fontSize="16px";
		menuIcon.style.display="inline-block";
		androidBadge.style.display="inline-block";
		/*navbar.style.position="relative";
		dropMenu.style.position="absolute";		
		dropMenu.style.zIndex="5";
		overlay.style.zIndex="1";
		navbar.style.overflow="none";
		menuIcon.style.borderRadius="0%";*/
		menuMobile.style.display="none";
	}

	function openMenuMobile(){
		if (notMenuMobileOpen){
			for (var i = 0; i < menuBtnMobile.length; i++) {
				menuBtnMobile[i].classList.add("animatedButton");
				icolo=Math.floor(Math.random()*animationBeats.length);
				menuBtnMobile[i].classList.add(animationBeats[icolo%animationBeats.length]);
				//menuBtnMobile[i].classList.add("heartBeat");
				menuBtnMobile[i].classList.remove("disabledButton");
			}
			notMenuMobileOpen=false;
		}
		else{
			for (var i = 0; i < menuBtnMobile.length; i++) {
				menuBtnMobile[i].classList.remove("animatedButton");
				for (var j = 0; j < menuBtnMobile.length; j++){
					menuBtnMobile[i].classList.remove(animationBeats[j]);
				}
				//menuBtnMobile[i].classList.remove("heartBeat");
				menuBtnMobile[i].classList.add("disabledButton");
			}
			notMenuMobileOpen=true;
		}
	}
	
	function turnRed(elt){		
		turnColor(elt,"pink","red");
	}
	function turnWhite(elt){
		turnColor(elt,"white","black");
		color0=menuList[0].style.color+"";
		//jobInfo.innerHTML+="|"+color0+"\n";
		var sameColor=true;
		for (var i = 1; i < menuList.length; i++) {
			//jobInfo.innerHTML+=menuList[i].style.color+"-\n";
			if (menuList[i].style.color+""!=color0) {sameColor=false;}
		}
		if (sameColor) {
			//jobInfo.innerHTML+="pop the reward!";
			//body.style.backgroundColor=color0;
			wrapper.classList.remove("heartBeat");
			wrapper.classList.add("heartBeat");
			//body.style.fontColor=color0;
		} 
	}
	
	function turnBlue(elt){
		turnColor(elt,"lightblue","blue");
	}
	
	function turnGreen(elt){
		turnColor(elt,"lightgreen","green");
	}
	
	function turnGrey(elt){
		turnColor(elt,"lightgrey","black");
	}
	
	function turnColor(elt,color1,color2){
		elt.style.backgroundColor=color1;
		var eltBtn=elt.getElementsByClassName("material-icons menuButton");
		for (var i = 0; i < eltBtn.length; i++) {
			if (eltBtn[i].style.color=="black"){
				icolo=Math.floor(Math.random()*colors.length);
				eltBtn[i].style.color=colors[icolo%colors.length];
			}
			else{
				eltBtn[i].style.color=color2;
			}
		}		
	}
	