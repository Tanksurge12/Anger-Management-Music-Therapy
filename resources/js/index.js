function mouseDown(EID){
	e=getEByID(EID).style;
	e.backgroundColor="black";
	e.borderLeftColor="white";
	e.borderRightColor="white";
	e.color="white";
}
function mouseUp(EID,isContent){
	e=getEByID(EID).style;
	if(!isContent){
		e.borderTopColor="#555";
		e.borderBottomColor="#555";
		e.backgroundColor="#555";
		e.color="white";
	}else{
		e.borderTopColor="#555";
		e.borderBottomColor="#555";
		e.backgroundColor="#555";
		e.color="white";
	}
}
function mouseClick(EID){
	e=document.getElementById(EID).style;
	e.backgroundColor="black";
}

function resetOutline(EID,isWhite){
	e=getEByID(EID).style;
	if(isWhite){
		e.borderTopColor="white";
		e.borderBottomColor="white";
		e.borderLeftColor="white";
		e.borderRightColor="white";
	}
	e.borderTopColor="#555";
	e.borderBottomColor="#555";
	e.borderLeftColor="#555";
	e.borderRightColor="#555";
}

function setBorderColor(EID,side,color){
	e=document.getElementById(EID).style
	switch(side){
		case"top": e.borderTopColor=color; break;
		case"bottom": e.borderBottomColor=color; break;
		case"right": e.borderRightColor=color; break;
		case"left":e.borderLeftColor=color; break;
		default: log("side: "+side+" is invalid"); break;
	}
}

function hoveree(EID){
	setBorderColor(EID,"top","white");
	setBorderColor(EID,"bottom","white");
}

function setVisibility(EID,Visibility){
	document.getElementById(EID).style.visibility=Visibility;
}

function selectElement(EID){
	getEByID(EID).selected=true;
	getEByID(EID).focus();
}
function deSelectElement(EID){
	document.getElementById(EID).selected=false;
	document.getElementById(EID).blur();	
}

function isSelected(EID){
	return document.getElementById(EID).selected;
}
function isDisplayed(EID){
	if(document.getElementById(EID).visibility=="visible"){
		return true;
	}else{
		return false;
	}
}

function showItem(EID){
	document.getElementById(EID).style.visibility="visible";
}
function showElement(e){
	e.style.visibility="visible";
}
function hideItem(EID){
	document.getElementById(EID).style.visibility="hidden";
}
function hideElement(e){
	e.style.visibility="visible";
}

function setText(EID,Text){
	document.getElementById(EID).innerHTML=Text;
}

/*
function showItemAccessible(EID,visible){
	e=document.getElementById(EID);
	if(visible){
		setText(EID,">"+e.innerHTML"<");
	}else{
		setText(EID,slice(e.innerHTML,1,innerHTML.length-1);
	}
}
*/

function switchPage(pageID){
	hideElement(getEByID("main"));
	hideElement(getEByID("overview"));
	hideElement(getEByID("in-depth"));
	hideElement(getEByID(pageID));
}

function getEByID(EID){
	return document.getElementById(EID);
}