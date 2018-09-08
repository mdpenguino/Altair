module.exports = {
  begin: function() {
    //setup
    const path = require('path');
    const fs = require('fs');
    const {app, BrowserWindow, ipc} = require('electron');
    const xml2js = require('xml2js');
    const util = require('util');
    const malScraper = require('mal-scraper');
    const http = require('http')
    console.log("grab module is loaded");

    //grab xml from mal and save to appdata
    var appdata = app.getPath('userData');
    var apppath = app.getAppPath();

    console.log("appdata location is: "+appdata);
    console.log("appppath is: "+apppath);

    fs.copyFile(apppath+"/src/local.xml", appdata+"/mal.xml", (err) => {
      if (err) throw err;
      console.log("MAL xml has been copied to "+appdata+"/mal.xml");
      console.log("Welcome to Rock'n Roll Night");
      console.log("Welcome to Rock'n Roll Fight");
      console.log("I'm Just a Rock'n Roll Man");
      console.log("We're Just a Rock'n Roll Band");
    });

    //convert mal.xml to altair.json
    var parseString = require('xml2js').parseString;
    var xml = ""
    parseString(xml, function (err, result) {
        console.log(util.inspect(result, false, null));
});

var parser = new xml2js.Parser();
fs.readFile(appdata + '/mal.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
//        console.dir(result);
        console.log('Done');
        var jsonData = JSON.stringify(result, null, 3);
        fs.writeFile(appdata + "/test.json", jsonData, function(err) {
            if (err) {
                console.log(err);
            }
        });
    });
});




    //fill with extra data (image paths, descriptions, etc. ).  Also, scrape images to appdata


    //scrape images
    var url = "https://myanimelist.net/anime/" + "20047"
    var iddata

    malScraper.getInfoFromURL(url)
      .then((data) => console.log(JSON.stringify(data.title)))
      .catch((err) => console.log(err))
      .then((data) => {
          // fulfillment
          if (fs.existsSync(appdata + "/covers/" + "20047" + ".jpg")) {
            // Do something
            console.log("A file already exists at location: " + appdata + "/covers/" + "20047" + ".jpg" + " - SKIPPING")
          } else {
              // Do something
              console.log(JSON.stringify(data.title))
              console.log("No file exists at location: " + appdata + "/covers/" + "20047" + ".jpg" + " - GRABBING")
              var request = http.get(JSON.stringify(data.picture), function(response) {
                response.pipe(appdata + "/covers/" + "20047" + ".jpg");
              })
            }
        }, (reason) => {
          // rejection
        });



  }
}
