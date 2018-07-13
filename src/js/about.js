const shell = require('electron').shell;

// assuming $ is jQuery
$(document).on('click', 'a[href^="http"]', function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
});

(function () {
      const remote = require('electron').remote;
      function init() {
        document.getElementById("aboutClose").addEventListener("click", function (e) {
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
