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

window.onload = function(){
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var a = document.getElementById("modallink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
a.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

$(function () {
    // Score Color
    var score = parseInt($('#score').text().trim());
    var color = 'red';
    if (!isNaN(score)) {
        if (score >= 0) {
            color = '#cc3232';
        }
        if (score >= 3) {
            color = '#e8812c';
        }
        if (score >= 7) {
            color = '#99c140';
        }

        $('#score').css('background', color);
    }
});

// jQuery Spoiler

$(document).ready(function (removespoiler) {

  $(document).on('click', '.spoilertext', function(removespoiler) {
    $(this).removeClass('on');
  });
});
