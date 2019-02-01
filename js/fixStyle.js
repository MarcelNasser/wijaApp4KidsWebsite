	var body=document.getElementsByTagName("body")[0];
	var hideable=document.getElementsByClassName("hideable");
	var popBox=document.getElementsByClassName("popBox")[0];
	var androidBadge=document.getElementById("androidBadge");
	var wrapper=document.getElementById("wrapper");
	var overlay=document.getElementById("overlay");
	var menuIcon=document.getElementById("menuIconWrapper");
	var dropMenu=document.getElementById("topnavDropMenu");
	var dropMenuList=document.getElementById("dropMenuList");
	var mailBox=document.getElementById("mailBox");
	var tabContact=document.getElementById("tableContact");
	var menuList=document.getElementsByClassName("material-icons menuButton");
	var colors=["blue","green","red"];
	var icolo=0;
	var jobInfo = document.getElementById("responseLine");
	var responseHttp= document.getElementById("responseContainer");
	
	function openMenu(){
		if(dropMenu.style.display == "none")
			{
			overlay.style.display ="block";
			dropMenu.style.display="block";
			//jobInfo.innerHTML+="-"+wrapper.style.height+"-\n";
			// dropMenu.style.height=wrapper.style.height+"";
			for (var i = 0; i < menuList.length; i++) {
					icolo=Math.floor(Math.random()*colors.length);
					menuList[i].style.color=colors[icolo%colors.length];
					menuList[i].style.fontSize="110%";
				}        
			}
		else {closeMenu();}
	}
	
	function closeMenu(){
		if (dropMenu.style.display!="none"){
		closeOverlay();
		dropMenu.style.display="none";
		return true;
		}else{return false;}
	}
	
	function closeOverlay(){
		if (popBox!=null){
			if (popBox.style.display=="none"){overlay.style.display ="none";}
		}
		if (mailBox!=null){
			if (mailBox.style.display=="none"){overlay.style.display ="none";}
		}
		if (responseHttp!=null){
			if (responseHttp.style.display=="none"){overlay.style.display ="none";}
		}
	}
	
	function sendMail(){
		if(mailBox.style.display == "none")
		{
			overlay.style.zIndex="6";
			overlay.style.display ="block";
			mailBox.style.display="block";
			tabContact.style.display="none";			
		}
		else{closeMailBox();}		
	}
	
	function closeMailBox(){
		if(mailBox.style.display!="none"){
		mailBox.style.display="none";
		closeOverlay();
		overlay.style.zIndex="1";
		tabContact.style.display="block";
		return true;
		}
		else{return false;}
	}
	
	function closePopBox(){
		if(popBox.style.display!="none"){
			overlay.style.display ="none";
		}
		popBox.style.display ="none";
	}	
	
	function openResponseHttp(){
		if(responseHttp.style.display == "none")
			{
			overlay.style.zIndex="6";
			overlay.style.display ="block";
			responseHttp.style.display="block";
			tabContact.style.display="none";
			}
		//else{closeResponseHttp();}			
	}
	
	function closeResponseHttp(){
		if(responseHttp.style.display!="none"){
			responseHttp.style.display ="none";		
			closeOverlay();
			overlay.style.zIndex="1";
			tabContact.style.display="block";
			return true;
		}
		else{return false;}
	}
	
	function switchHideStatus(status1,status2){
		for (var i = 0; i < hideable.length; i++) {
			if (hideable[i].style.display==status1){
			hideable[i].style.display=status2;}
		}
	}		
	window.onclick = function(event) {
		if(overlay.style.display != "none"){
			if (event.target == overlay) {
				if (dropMenu!=null){closeMenu();}
				if (mailBox!=null ){closeMailBox();}
				if (responseHttp!=null){closeResponseHttp();}
				if (popBox!=null){closePopBox();}
				// switchHideStatus("block","none");
			}
			else if (event.target == wrapper) {
				if (dropMenu!=null){closeMenu();}
				if (mailBox!=null ){closeMailBox();}
				if (responseHttp!=null){closeResponseHttp();}
				if (popBox!=null){closePopBox();}
				// switchHideStatus("block","none");
			}
		}
	}
	window.onload = function(){
		var maxwidth=Math.min(900,window.innerWidth);
		wrapper.style.width=maxwidth+"px"; 
		//body.style.fontSize=((int)(maxwidth/10))+"px";
	}
	window.onresize = function(){
		var maxwidth=Math.min(900,window.innerWidth);
		wrapper.style.width=maxwidth+"px"; 
		//var body=document.getElementsByTagName("body")[0];
		//jobInfo.innerHTML+=body.style.fontSize+"px";
		//jobInfo.innerHTML+=androidBadge.style;
		//androidBadge.style.maxHeight=((int)100*maxwidth/900)+"px";
		//body.style.fontSize=((int)(maxwidth/40))+"px";
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
	