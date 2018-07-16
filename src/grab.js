//setup
const electron = require('electron');
const path = require('path');
const fs = require('fs');

//grab xml from mal and save to appdata
var appdata = app.getPath

console.log(appdata)

//copy mal.xml to altair.xml and fill with extra data (image paths, descriptions, etc. ).  Also, scrape images to appdata
