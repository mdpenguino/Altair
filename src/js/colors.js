function updateBackgroundColour(selectElem) {
  var i = selectElem.selectedIndex; // Get the selected option's index.
  if (i < 0) {
    return; // Nothing is selected.
  }
  // Set the background-color CSS attribute of the <body> element to
  // the value attribute of the selected option in our <select> element.
  document.body.style.backgroundColor = selectElem.options[i].value;
}
