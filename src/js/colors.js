require('electron-titlebar')

//Colour switching code for header
function changeColor(){
  var newColor = document.getElementById('background').value;
	document.getElementById('header').style.background = newColor;
  document.getElementById('frame-bar').style.background = newColor;
}

//Frameless window buttons and actions
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

//CSS Card Animation Delay
document.documentElement.className += "preloader";

window.addEventListener("load", showPage, false);

function showPage() {
  document.documentElement.className = document.documentElement.className.replace("preloader","");
}
