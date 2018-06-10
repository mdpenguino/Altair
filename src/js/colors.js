//Colour switching code for header
function changeColor(){
  var newColor = document.getElementById('background').value;
	document.getElementById('header').style.background = newColor;
}

//CSS Card Animation Delay / Wait for Page Load
document.documentElement.className += "preloader";

window.addEventListener("load", showPage, false);

function showPage() {
  document.documentElement.className = document.documentElement.className.replace("preloader","");
}
