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
	var tabContact=document.getElementById("tableContact");
	var menuList=document.getElementsByClassName("material-icons menuButton");
	var colors=["blue","green","red"];
	var icolo=0;
	var jobInfo = document.getElementById("responseLine");
	var responseHttp= document.getElementById("responseContainer");
	var overlayStack=['','overlay'];
	var mailBoxButton=document.getElementById("mailBoxButton");

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
		wrapper.style.maxWidth=computeWrapperDimensions()+"px"; 
		var overlayStack=['','overlay'];
		if (isMobileDevice){wrapper.style.minHeight=window.innerHeight;}
		if (isCrappyScreen()){packContent();}
	}
	window.onresize = function(){
		wrapper.style.maxWidth=computeWrapperDimensions()+"px"; 
		if (isMobileDevice){
			wrapper.style.minHeight=window.innerHeight;
			wrapper.style.maxWidth=window.innerWidth;
		}
		if (isCrappyScreen()){packContent();}
		else {unPackContent();}
	}
	
	function isCrappyScreen(){
		var orientation = screen.msOrientation || (screen.orientation 
							|| screen.mozOrientation || {}).type;
		if (orientation == "portrait-secondary" || orientation == "portrait-primary" ||
			(window.innerHeight>window.innerWidth) || (window.innerWidth<750)) {
						//wrapper.innerHTML+="coucou Crappy\n"
			return true;
		} else {
			return false;
		}

	}
	
	function packContent(){
		//wrapper.innerHTML+="coucou Pack\n"
		androidBadge.style.display="none";
		menuIcon.style.display="none";
		menuMobile.style.display="inline-block";
		wrapper.style.maxWidth=(int)(window.innerWidth-wrapper.style.marginLeft-wrapper.style.marginRight)+"px";
		navbar.style.position="fixed";
		navbar.style.overflow="hidden";
		//menuIcon.style.borderRadius="50%";
	}
	
	function unPackContent(){
		androidBadge.style.display="inline-block";
		menuIcon.style.display="block";
		navbar.style.position="relative";
		menuIcon.style.borderRadius="0%";
		menuMobile.style.display="none";
	}
	
	function openMenuMobile(){
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
	