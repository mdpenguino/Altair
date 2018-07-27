module.exports = {
  begin: function() {
    //setup
    const path = require('path');
    const fs = require('fs');
    const {app, BrowserWindow, ipc} = require('electron');
    const xml2js = require('xml2js');
    console.log("grab module is loaded");

    //grab xml from mal and save to appdata
    var appdata = app.getPath('userData');
    var apppath = app.getAppPath();

    console.log("appdata location is: "+appdata);
    console.log("appppath is: "+apppath);

    fs.copyFile(apppath+"/src/local.xml", appdata+"/mal.xml", (err) => {
      if (err) throw err;
      console.log("MAL xml has been copied to "+appdata+"/mal.xml");
    });

    //convert mal.xml to altair.json

    //fill with extra data (image paths, descriptions, etc. ).  Also, scrape images to appdata


  }
}
