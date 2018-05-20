const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')

  // timestamping console
  var log = console.log;
  console.log = function() {
    var first_parameter = arguments[0];
    var other_parameters = Array.prototype.slice.call(arguments, 1);

    function formatConsoleDate (date) {
      var hour = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var milliseconds = date.getSeconds();

      return '[' +
             ((hour < 10) ? '0' + hour: hour) +
             ':' +
             ((minutes < 10) ? '0' + minutes: minutes) +
             ':' +
             ((seconds < 10) ? '0' + seconds: seconds) +
             '.' +
             ('00' + milliseconds).slice(-3) +
             '] ';
    }
    log.apply(console, [formatConsoleDate(new Date()) + first_parameter].concat(other_parameters))
  }

  // BrowserWindow script
  function createWindow () {
    win = new BrowserWindow({
      show: false,
      width: 800,
      height: 600,
      minWidth: 800,
      minHeight: 600,
      fullscreenable: false,
      'web-preferences': {
        'web-security': false,
        nodeIntegration: false,
        preload: path.join(__dirname, 'js/preload.js')
      }
    })
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    }))
    win.once('ready-to-show', () => {
      win.maximize()
      win.show()
    })
    win.webContents.openDevTools()

    win.on('closed', () => {
      win = null
      console.log('Altair Closed')
    })
  }

  app.on('ready', () => {
    createWindow()
    console.log('Altair Loaded')
  })

  app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()

    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
