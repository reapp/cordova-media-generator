#! /usr/bin/env node

var fs = require('fs');
var config;

function genConfig() {
  var deferred = q.defer();
  var destFile = path.join(process.cwd(), "mediagen-config.json");

  fs.writeFile(destFile, JSON.stringify({
    "icon": {"filename":"icon.png","background":"fff"},
    "splash": {"filename":"splash.png","background":"fff"},
    "customImages": [
      {"width": 120, "height": 120, "path": "../Media/custom", "filename":"outputFilename.png", "source":{"filename":"image.png","background":"fff"}}
    ],
  }, null, 4), function(err){
    deferred.resolve("success");
  });
  console.log("Created `mediagen-config.json` file in the current directory.");
  return deferred.promise;
}

function generate() {
  var iosPath = path.join(process.cwd(), 'platforms', 'ios');

  fs.readdir(iosPath, function(err, result) {
    if (err) {
      return cb(err);

    result.forEach(function (item) {
      var match = item.match(/(.+?)(\.[^.]*$|$)/i);
      if (match[2] == '.xcodeproj')
        iOSProjectName = match[1];
    });

    if (!config && config.image)
      config.image ={ filename: './icon.png' };

    if (config.customImages)
      config.customImages.forEach(function (item) {
        images.push(item);
      });

    if (!process.argv[2] && !config.image && (!config.icon && !config.splash)) {
      console.log('You must specify a filename as the second argument, or in a config file');
    } else if (!process.argv[3] && !config.background && (!config.icon && !config.splash)) {
      console.log('Please specify a background colour in hex values as the third argument, or in a config file');
    } else {

      var totalImages = images.length;
      console.log('------------------------------');
      console.log('   cordova-media-generator');
      console.log('------------------------------');
      console.log('Generating ' + totalImages + ' images so you don\'t have to');
      console.log('------------------------------');
      images.forEach(function (image) {
        var background, sourceImage;

        sourceImage = image.source.filename;
        background = image.source.background;

        resize(image.width, image.height, '#' + background, sourceImage, image.filename, image.path);
      });

      deferred.resolve();
    }
  });
  return deferred.promise;
}

try {
  config = require(process.cwd() + "/mediagen-config");
} catch (e) {
  if (process.argv[2] !== "init") {
    console.log("Could not find configuration file. To create one run `$ mediagen init`");
  }
}

switch (process.argv[2]) {
  case "init":
    genConfig();
    break;
  default:
    generate();
}