const {app, BrowserWindow, ipc} = require('electron')
const path = require('path')
const url = require('url')
const Store = require('../src/js/datastore.js');

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

  //Version to console (from json)
  var pjson = require('../package.json');
  console.log("Altair version "+pjson.version);

  const windowSettings = {
    alwaysOnTop: true,
    autoHideMenuBar: true,
    'webPreferences': {
      nodeIntegration: false,
      nodeIntegrationInWorker: true,
      offscreen: true,
    },
  };

const store = new Store({
  configName: 'user-preferences',
  defaults: {
    windowBounds: {
      width: 800,
      height: 600,
      x: 0,
      y: 0
    }
  }
});

  // BrowserWindow script
  function createWindow () {
    win = new BrowserWindow({
      show: false,
      icon: path.join(__dirname, 'assets/icons/png/256x256.png'),
      width: 800,
      height: 600,
      minWidth: 800,
      minHeight: 600,
      x: 0,
      y: 0,
      fullscreenable: true,
      frame: false,
      'web-preferences': {
        'web-security': false,
        nodeIntegration: false,
        nodeIntegrationInWorker: true,
        offscreen: true,
        preload: path.join(__dirname, 'js/preload.js')
      }
    })
//    win.setMenu(null);
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    }))
    win.once('ready-to-show', () => {
      win.maximize()
      win.show()
      //splash.destroy()
    })
    win.webContents.setFrameRate(60)
    win.webContents.openDevTools({mode: 'detach'})
    win.webContents.focus()


    win.on('closed', () => {
      win = null
      console.log('Altair Closed')
    })
  }

function createSplash () {
  splash = new BrowserWindow({
    show: false,
    width: 256,
    height: 256,
    minWidth: 256,
    minHeight: 256,
    maxWidth: 256,
    maxHeight: 256,
    fullscreenable: false,
    maximizable: false,
    frame: false,
    transparent: true,
    resizable: false,
    icon: path.join(__dirname, 'assets/icons/png/256x256.png')
  })
  splash.once('ready-to-show', () => {
    splash.show()
    console.log('Altair Splash Loaded')
  })
  splash.loadURL(url.format({
    pathname: path.join(__dirname, 'splash.html'),
    protocol: 'file',
    slashes: true
  }))
  splash.on('closed', () => {
    splash = null
    console.log('Altair Splash Closed')
  })
}

function createInfo () {
  info = new BrowserWindow({
    show: false,
    width: 384,
    height: 384,
    minWidth: 384,
    minHeight: 384,
    maxWidth: 384,
    maxHeight: 384,
    fullscreenable: false,
    maximizable: false,
    frame: false,
    resizable: false,
    icon: path.join(__dirname, 'assets/icons/png/256x256.png')
  })
  info.once('ready-to-show', () => {
    info.show()
    console.log('Altair Info Loaded')
  })
  info.loadURL(url.format({
    pathname: path.join(__dirname, 'about.html'),
    protocol: 'file',
    slashes: true
  }))
  info.on('closed', () => {
    splash = null
    console.log('Altair Info Closed')
  })
}

app.on('ready', () => {
  createSplash()
  createWindow()
  createInfo()
  console.log('Altair Loaded')
})
/*
  app.on('ready', function() {
    win = new BrowserWindow(store.get('windowBounds'));

    function saveWindowBounds() {
      store.set('windowBounds', win.getBounds());
    }
    win.on('resize', saveWindowBounds);
    win.on('move', saveWindowBounds);
  }); */

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
