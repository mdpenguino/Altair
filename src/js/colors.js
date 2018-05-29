//function updateBackgroundColour(selectElem) {
//  var i = selectElem.selectedIndex; // Get the selected option's index.
//  if (i < 0) {
//    console.error('ovo') // Nothing is selected.
//  }
  // Set the background-color CSS attribute of the <body> element to
  // the value attribute of the selected option in our <select> element.
  // document.body.style.backgroundColor = selectElem.options[i].value;
//  document.getElementsByClassName('.title').style.backgroundColor = selectElem.options[i].value;
// }

// var myElement = document.querySelector(".title");
// myElement.style.backgroundColor = "#FFFFFF"


function changeColor(){
  var newColor = document.getElementById('background').value;
	document.getElementById('header').style.background = newColor;
}
