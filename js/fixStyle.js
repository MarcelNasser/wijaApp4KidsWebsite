	
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
	var content=document.getElementById("content");
	var colors=["blue","green","red"];
	var icolo=0;
	var jobInfo = document.getElementById("responseLine");
	var responseHttp= document.getElementById("responseContainer");
	var overlayStack=['','overlay'];
	var mailBoxButton=document.getElementById("mailBoxButton");
	var animationBeats=["greenPulse","yellowPulse","redPulse","bluePulse"];
	var menuBtnMobile=document.getElementsByClassName("material-icons menuButtonMobile");
	var switchBtnMobile=document.getElementsByClassName("material-icons animatedButton")[0];
	var notMenuMobileOpen=true;
	var notificationBox=document.getElementsByClassName("notificationBox")[0];
	var submitButton=document.getElementById("submitButton");
	var mailBoxItems=document.getElementsByClassName("mailBoxItem");
	for (var j = 0; j < mailBoxItems.length; j++){
		mailBoxItems[j].onmouseenter=function(){
		this.classList.remove("flipableY");
		this.classList.add("flipableY");
		}
	}
	/*function flipY(obj){
		//obj.classList.remove("flipableY");
		obj.classList.add("flipableY");
	}*/
	var previousStateOfScreen;
	
	function disableButton(btn){
		btn.classList.remove("enabledBtn");
		btn.classList.add("disabledBtn");
		btn.onclick=null;
	}
	
	function resetForm(formX,args){
		//formX.innerHTML+=formX+"\n";
		var formData=formX.elements;
		for(var i=0;i<formData.length;i++){
		if(args.includes(formData[i].name)){
			//formX.innerHTML+=formData[i].type+"\n";
			if (formData[i].type=="textarea"){
				//formX.innerHTML+=formData[i]+"\n";
				formData[i].value="";
			}
			if (formData[i].type=="button"){
				formData[i].classList.remove("disabledBtn");
				formData[i].classList.add("enabledBtn");
				formData[i].onclick=function() {submitComment();}
			}
		}
	}
	}
	
	overlay.onclick=function() {OnclickOverlay()};
	function OnclickOverlay(){
		if (overlayStack==null){overlayStack=['','overlay'];}
		if (overlayStack[overlayStack.length-1]=='Menu'){if (dropMenu!=null){closeMenu();}}
		else if (overlayStack[overlayStack.length-1]!='Menu'){
			if (mailBox!=null ){closeMailBox();}
			if (responseHttp!=null){closeResponseHttp();}
			if (popBox!=null){closePopBox();}
		}
		if (overlayStack.length>2){overlayStack.pop();}
	}
	
	function dopopBoxWClicked(){
		// if (mailBoxButton!=null){
			// mailBoxButton.classList.add("fadeinBeat");
		// }
		window.scrollBy(0, 400);
		showHiddenText('Text011');
		closePopBox();
	}
	
	function dopopBoxJClicked(){
		window.scrollBy(0, 600);
		showHiddenText('Text012');
		showHiddenText('Text013');
		showHiddenText('Text014');
		closePopBox();
	}
	
	var stopPopBox=false;
	slideBox=document.getElementsByClassName("slideBox")[0];
	wijaSlidesWrapper=document.getElementById("wijaSlidesWrapper");

	function openMenu(){
		if(dropMenu.style.display != "block")
			{
			overlay.style.display ="block";
			dropMenu.style.display="block";
			for (var i = 0; i < menuList.length; i++) {
					menuList[i].style.color=computeRandomValue(colors);
					menuList[i].style.fontSize="110%";
				}
			overlayStack.push('Menu');
			}
		else {closeMenu();overlayStack.pop();}
	}
	
	function closeMenu(){
		if (overlayStack[overlayStack.length-1]=='Menu'){
			if(dropMenu.style.display===undefined|dropMenu.style.display==""){dropMenu.style.display="none";}
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
			overlayStack.push('mailBox');
			if (formMailBox!=null){resetForm(formMailBox,['comment','submitButton']);}
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
		entryScene();
		onloadAction();
	}
	
	function entryScene(){
		overlay.style.display="block";
		overlay.style.backgroundColor="rgba(0,0,0,0.9)";
		overlay.style.zIndex="15";
		overlay.classList.add('fadein');
		bubbleAnimation();	
	}
	
	function ballAnimation(){
		var ball = document.createElement('div');
		ball.classList.add("entryElementBall");
		ball.classList.add("fadein");
		ball.style.animationDelay="500ms";
		ball.style.left="20%";
		var tNew = document.createTextNode("W");
		ball.appendChild(tNew);
		body.appendChild(ball);
		var ball = document.createElement('div');
		ball.classList.add("entryElementBall");
		ball.classList.add("fadein");
		ball.style.animationDelay="800ms";
		ball.style.left="40%";
		var tNew = document.createTextNode("I");
		ball.appendChild(tNew);
		body.appendChild(ball);
		var ball = document.createElement('div');
		ball.classList.add("entryElementBall");
		ball.classList.add("fadein");
		ball.style.animationDelay="1200ms";
		ball.style.left="60%";
		var tNew = document.createTextNode("J");
		ball.appendChild(tNew);
		body.appendChild(ball);
	}
	
	function hideElement(){
		this.style.display="none";
		body.removeChild(this);
		countBubble++;
		if (countBubble==bubbleRound){ballAnimation();}
	}
	function showElement(){
		this.style.display="block";
	}
	function doUpMotion(){
		this.style.opacity="1";
		this.classList.remove("fadein");
		this.classList.add("upwardMotion");
		this.style.animationDelay="0ms";
		this.addEventListener("webkitAnimationEnd", hideElement);
		this.addEventListener("animationend", hideElement);
	}
	var animationTime=2000;
	var bubbleRound=20;
	var countBubble=0;
	function bubbleAnimation(){
		var bubble,radius,posX,delay;
		var zIndex=19;
		for (var i=0;i<bubbleRound;i++){
			bubble=document.createElement('div');
			body.appendChild(bubble);
			bubble.style.opacity="0";
			zIndex++;
			bubble.style.zIndex=zIndex;
			bubble.classList.add("entryElementBubble");
			bubble.classList.add("fadein");
			radius=2+Math.random()*4;
			posX=20+Math.floor(Math.random()*60);
			delay=Math.floor(Math.random()*animationTime);
			bubble.style.width=radius+"em";
			bubble.style.height=radius+"em";
			bubble.style.left=posX+"%";
			bubble.style.animationDelay=delay+"ms";
			bubble.addEventListener("webkitAnimationStart", showElement);
			bubble.addEventListener("animationStart", showElement);
			bubble.addEventListener("webkitAnimationEnd", doUpMotion);
			bubble.addEventListener("animationend", doUpMotion);
		}
	}

	function onloadAction(){
		wrapper.style.maxWidth=computeWrapperDimensions()+"px";
		previousStateOfScreen=isCrappyScreen();
		if (previousStateOfScreen){packContent();}
	}
		
	window.onresize = function(){
		onResizeAction();
	}
	
	function onResizeAction(){
		wrapper.style.maxWidth=computeWrapperDimensions()+"px"; 
		var nextStateOfScreen=isCrappyScreen();
		if (previousStateOfScreen!=nextStateOfScreen){
			if (nextStateOfScreen){packContent();}
			else {unPackContent();}
			previousStateOfScreen=nextStateOfScreen;
		}
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
	var idealInline="1.8em";
	if (isMobileDevice){idealInline="1.8em";}
	function packContent(){
		while (overlayStack.length>2){OnclickOverlay();}
		if(wijaSlidesWrapper!=null){wijaSlidesWrapper.style.marginTop="3em";}
		body.style.fontSize="18px";
		androidBadge.style.display="none";
		menuIcon.style.display="none";
		menuMobile.style.display="inline-block";
		pElements=content.getElementsByTagName("p");
		if (pElements!=null){
			for(var i=0;i<pElements.length;i++){
				pElements[i].style.fontSize="135%";
				pElements[i].style.lineHeight=idealInline;
			}
		}
		h5Elements=content.getElementsByTagName("h5");
		if (pElements!=null){
			for(var i=0;i<h5Elements.length;i++){
				h5Elements[i].style.fontSize="145%";
			}
		}
		navbar.style.position="fixed";
		navbar.style.width=wrapper.style.width+"px";
		navbar.style.zIndex="99";
		wrapper.style.margin="0px -3em";
		wrapper.style.padding="0 4em 0 3em";
		body.style.width="100%";
		navbar.style.overflow="hidden";
		content.style.marginTop="11.2em";
	}
	
	function unPackContent(){
		while (overlayStack.length>2){OnclickOverlay();}
		body.style.fontSize="16px";
		menuIcon.style.display="inline-block";
		androidBadge.style.display="inline-block";
		if(wijaSlidesWrapper!=null){wijaSlidesWrapper.style.marginTop="3em";}
		pElements=content.getElementsByTagName("p");
		if (pElements!=null){
			for(var i=0;i<pElements.length;i++){
				pElements[i].style.fontSize="120%";
				pElements[i].style.lineHeight="1.2em";
			}
		}
		h5Elements=content.getElementsByTagName("h5");
		if (pElements!=null){
			for(var i=0;i<h5Elements.length;i++){
				h5Elements[i].style.fontSize="130%";
			}
		}
		navbar.style.position="initial";
		navbar.style.zIndex="5";
		wrapper.style.margin="0px auto";
		wrapper.style.padding="0";
		menuMobile.style.display="none";
		content.style.marginTop="0px";
	}

	function openMenuMobile(){
		// if (sessionStorage.menuMobileStatus===undefined|sessionStorage.menuMobileStatus=="")
		// {sessionStorage.menuMobileStatus="hidden";}
		// if (sessionStorage.menuMobileStatus=="hidden"){
		if (notMenuMobileOpen==null|notMenuMobileOpen===undefined){notMenuMobileOpen=false;}
		if (notMenuMobileOpen){
			for (var i = 0; i < menuBtnMobile.length; i++) {
				switchBtnMobile.style.color="green";
				menuBtnMobile[i].classList.add("animatedButton");
				menuBtnMobile[i].classList.add(computeRandomValue(animationBeats));
				//menuBtnMobile[i].classList.add("heartBeat");
				menuBtnMobile[i].classList.remove("disabledButton");
			}
			if (mailBoxItems!=null){
				for (var j = 0; j < mailBoxItems.length; j++){
					if (j%4<2){mailBoxItems[j].classList.add("blueBeat");}
					else{mailBoxItems[j].classList.add("redBeat");}
				}
			} 			
			notMenuMobileOpen=false;
			// sessionStorage.menuMobileStatus="visible";
		}
		else{
			for (var i = 0; i < menuBtnMobile.length; i++) {
				switchBtnMobile.style.color="red";
				menuBtnMobile[i].classList.remove("animatedButton");
				for (var j = 0; j < menuBtnMobile.length; j++){
					menuBtnMobile[i].classList.remove(animationBeats[j]);
				}
				//menuBtnMobile[i].classList.remove("heartBeat");
				menuBtnMobile[i].classList.add("disabledButton");
			}
			if (mailBoxItems!=null){
				for (var j = 0; j < mailBoxItems.length; j++){
					if (j%4<2){mailBoxItems[j].classList.remove("blueBeat");}
					else{mailBoxItems[j].classList.remove("redBeat");}
				}
			} 
			notMenuMobileOpen=true;
			// sessionStorage.menuMobileStatus="hidden";
		}
		//sessionStorage.removeItem("menuMobileStatus");
				
	}
	
	var tmp_array=[];
	function computeRandomValue(tab){
		var toResetArray=true;
		//console.log(tmp_array);
		if (tmp_array!=null){
			var allintab=true;
			for (var j = 0; j < tmp_array.length; j++){
				if (!tab.includes(tmp_array[j])){
						allintab=false; break;
					}
			}
			if (allintab & tmp_array.length>0){toResetArray=false;}
		}
		if (toResetArray){
			tmp_array=[];
			for (var i= 0; i < tab.length; i++){tmp_array.push(tab[i]);}
		}
		//console.log(tmp_array);
		//wrapper.innerHTML+=tmp_array+"\n";
		var irand;
		irand=Math.floor(Math.random()*tmp_array.length);
		out=tmp_array[irand%tmp_array.length];
		tmp_array.splice(irand,1);
		return out;
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
				eltBtn[i].style.backgroundColor=color1;
			}
			else{
				eltBtn[i].style.color=color2;
				eltBtn[i].style.backgroundColor=color1;
			}
		}		
	}
	