//Colour switching code for header
function changeColor(){
  var newColor = document.getElementById('background').value;
//  var backColor = document.getElementById('color').value;
	document.getElementById('header').style.background = newColor;
  document.getElementById('title-bar').style.background = newColor;
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

// jQuery Spoiler

$(document).ready(function (removespoiler) {

  $(document).on('click', '.spoilertext', function(removespoiler) {
    $(this).removeClass('on');
  });
});


(function () {

      const remote = require('electron').remote;

      function init() {
        document.getElementById("min-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize();
        });

        document.getElementById("max-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }
        });

        document.getElementById("close-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.close();
        });
      };

      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init();
        }
      };
})();

$( document ).ready(function() {
    $('span#score').each(function( index ) {
          if($( this ).text()== '10'){
            $(this).css("background-color","#99C13F");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(153,193,63,0.3)");
          }
          if($( this ).text()== '9'){
            $(this).css("background-color","#ACC23E");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(172,194,62,0.3)");
          }
          if($( this ).text()== '8'){
            $(this).css("background-color","#C0C33D");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(192,195,61,0.3)");
          }
          if($( this ).text()== '7'){
            $(this).css("background-color","#C4B33B");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(196,179,59,0.3)");
          }
          if($( this ).text()== '6'){
            $(this).css("background-color","#C59F3A");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(197,159,58,0.3)");
          }
          if($( this ).text()== '5'){
            $(this).css("background-color","#C78B38");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(199,139,56,0.3)");
          }
          if($( this ).text()== '4'){
            $(this).css("background-color","#C87636");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(200,118,54,0.3)");
          }
          if($( this ).text()== '3'){
            $(this).css("background-color","#C96035");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(201,96,53,0.3)");
          }
          if($( this ).text()== '2'){
            $(this).css("background-color","#CA4933");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(202,73,51,0.3)");
          }
          if($( this ).text()== '1'){
            $(this).css("background-color","#CC3232");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(204,50,50,0.3)");
          }
          if($( this ).text()== '0'){
            $(this).css("background-color","grey");
            $(this).css("box-shadow","0px 0px 20px 10px rgba(128,128,128,0.3)");
          }
    });
});

$('span#score').bind('DOMNodeInserted DOMNodeRemoved', function(){
  $('span#score').each(function( index ) {
        if($( this ).text()== '10'){
          $(this).css("background-color","#99C13F");
        }
        if($( this ).text()== '9'){
          $(this).css("background-color","#ACC23E");
        }
        if($( this ).text()== '8'){
          $(this).css("background-color","#C0C33D");
        }
        if($( this ).text()== '7'){
          $(this).css("background-color","#C4B33B");
        }
        if($( this ).text()== '6'){
          $(this).css("background-color","#C59F3A");
        }
        if($( this ).text()== '5'){
          $(this).css("background-color","#C78B38");
        }
        if($( this ).text()== '4'){
          $(this).css("background-color","#C87636");
        }
        if($( this ).text()== '3'){
          $(this).css("background-color","#C96035");
        }
        if($( this ).text()== '2'){
          $(this).css("background-color","#CA4933");
        }
        if($( this ).text()== '1'){
          $(this).css("background-color","#CC3232");
        }
        if($( this ).text()== '0'){
           $(this).css("background-color","grey");
        }
    });
});


/* Currently Disabled */
