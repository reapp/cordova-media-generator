var gm = require('gm');
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs');
var config, iOSProjectName;

function resize(opts, cb) {
  var width = opts.width,
  var height = opts.height,
  var bgColour = opts.bgColour,
  var imagePath = opts.imagePath,
  var outputFilename = opts.outputFilename,
  var outputPath = opts.outputPath;

  var imagePath = path.join(process.cwd(), imagePath);

  gm(imagePath).size(sizeImages);

  function sizeImages(error, size) {
    if (error)
      return cb(error);

    // current image size
    var imageWidth = size.width;
    var imageHeight = size.height;
    var ratio = width / height;
    var imageRatio = imageWidth / imageHeight;
    var image = this;

    // center placement
    if (ratio >= 1) {
      //Landscape or square
      var newWidth = height * imageRatio;

      if (newWidth >= width) {
        this.resize(width);
      } else {
        this.resize(null, height);
      }
    }
    else {
      var newHeight = width / imageRatio;

      if (newHeight >= height)
        this.resize(null, height);
      else
        this.resize(width);
    }

    var x = (width / 2) - (imageWidth / 2);
    var y = (height / 2) - (imageHeight / 2);

    var fullOutputPath = path.join(process.cwd(), 'platforms', outputPath);

    mkdirp(fullOutputPath, writeImage.bind(this, image));
  }

  function writeImage(image, err) {
    if (err)
      return cb(err);

    var fulloutputFilename = path.join(process.cwd(), 'platforms', outputPath, outputFilename);

    image
      .background(bgColour)
      .gravity('Center')
      .extent(width, height)
      .write(fulloutputFilename, function (error) {
        if (error)
          return cb(error);

        cb(this.outname);
      });
  }

  cb(null);
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

    var images = [
      //IOS Icons
      {
        width: 180,
        height: 180,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-60@3x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 120,
        height: 120,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-60@2x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 40,
        height: 40,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-40.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 80,
        height: 80,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-40@2x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 120,
        height: 120,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-40@3x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 50,
        height: 50,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-50.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 100,
        height: 100,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-50@2x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 60,
        height: 60,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-60.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 72,
        height: 72,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-72.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 144,
        height: 144,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-72@2x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 76,
        height: 76,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-76.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 152,
        height: 152,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-76@2x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 120,
        height: 120,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-120.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 29,
        height: 29,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-small.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 58,
        height: 58,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-small@2x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 87,
        height: 87,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon-small@3x.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 57,
        height: 57,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon.png',
        source: process.argv[2] || config.icon || config.image
      },
      {
        width: 114,
        height: 114,
        path: 'ios/' + iOSProjectName + '/Resources/icons',
        filename: 'icon@2x.png',
        source: process.argv[2] || config.icon || config.image
      },

        //iOS Spash
        {
          width: 640,
          height: 1136,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default-568h@2x~iphone.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 2048,
          height: 1536,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default-Landscape@2x~ipad.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 1024,
          height: 768,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default-Landscape~ipad.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 1536,
          height: 2048,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default-Portrait@2x~ipad.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 768,
          height: 1024,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default-Portrait~ipad.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 640,
          height: 960,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default@2x~iphone.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 320,
          height: 480,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default~iphone.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 750,
          height: 1344,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default-667h.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 1242,
          height: 2208,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default-736h.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 2208,
          height: 1242,
          path: 'ios/' + iOSProjectName + '/Resources/splash',
          filename: 'Default-Landscape-736h.png',
          source: process.argv[2] || config.splash || config.image
        },

        //Android Icon & Splash
        {
          width: 96,
          height: 96,
          path: 'android/res/drawable',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 72,
          height: 72,
          path: 'android/res/drawable-hdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 800,
          height: 480,
          path: 'android/res/drawable-land-hdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 320,
          height: 200,
          path: 'android/res/drawable-land-ldpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 480,
          height: 320,
          path: 'android/res/drawable-land-mdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 1280,
          height: 720,
          path: 'android/res/drawable-land-xhdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 36,
          height: 36,
          path: 'android/res/drawable-ldpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 48,
          height: 48,
          path: 'android/res/drawable-mdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 480,
          height: 800,
          path: 'android/res/drawable-port-hdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 200,
          height: 320,
          path: 'android/res/drawable-port-ldpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 320,
          height: 480,
          path: 'android/res/drawable-port-mdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 720,
          height: 1280,
          path: 'android/res/drawable-port-xhdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 96,
          height: 96,
          path: 'android/res/drawable-xhdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },


        //Android Icon & Splash (/bin/res)
        {
          width: 96,
          height: 96,
          path: 'android/bin/res/drawable',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 72,
          height: 72,
          path: 'android/bin/res/drawable-hdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 800,
          height: 480,
          path: 'android/bin/res/drawable-land-hdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 320,
          height: 200,
          path: 'android/bin/res/drawable-land-ldpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 480,
          height: 320,
          path: 'android/bin/res/drawable-land-mdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 1280,
          height: 720,
          path: 'android/bin/res/drawable-land-xhdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 36,
          height: 36,
          path: 'android/bin/res/drawable-ldpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 48,
          height: 48,
          path: 'android/bin/res/drawable-mdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 480,
          height: 800,
          path: 'android/bin/res/drawable-port-hdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 200,
          height: 320,
          path: 'android/bin/res/drawable-port-ldpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 320,
          height: 480,
          path: 'android/bin/res/drawable-port-mdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 720,
          height: 1280,
          path: 'android/bin/res/drawable-port-xhdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 96,
          height: 96,
          path: 'android/bin/res/drawable-xhdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },

        //Android Icon & Splash (/ant-build/res)
        {
          width: 96,
          height: 96,
          path: 'android/ant-build/res/drawable',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 72,
          height: 72,
          path: 'android/ant-build/res/drawable-hdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 800,
          height: 480,
          path: 'android/ant-build/res/drawable-land-hdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 320,
          height: 200,
          path: 'android/ant-build/res/drawable-land-ldpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 480,
          height: 320,
          path: 'android/ant-build/res/drawable-land-mdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 1280,
          height: 720,
          path: 'android/ant-build/res/drawable-land-xhdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 36,
          height: 36,
          path: 'android/ant-build/res/drawable-ldpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 48,
          height: 48,
          path: 'android/ant-build/res/drawable-mdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 480,
          height: 800,
          path: 'android/ant-build/res/drawable-port-hdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 200,
          height: 320,
          path: 'android/ant-build/res/drawable-port-ldpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 320,
          height: 480,
          path: 'android/ant-build/res/drawable-port-mdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 720,
          height: 1280,
          path: 'android/ant-build/res/drawable-port-xhdpi',
          filename: 'screen.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 96,
          height: 96,
          path: 'android/ant-build/res/drawable-xhdpi',
          filename: 'icon.png',
          source: process.argv[2] || config.icon || config.image
        },

        //Android Store Icons
        {
          width: 512,
          height: 512,
          path: '../Media/android/store',
          filename: '512.png',
          source: process.argv[2] || config.icon || config.image
        },
        {
          width: 1024,
          height: 500,
          path: '../Media/android/store',
          filename: '1024x500.png',
          source: process.argv[2] || config.splash || config.image
        },
        {
          width: 180,
          height: 120,
          path: '../Media/android/store',
          filename: '180x120.png',
          source: process.argv[2] || config.splash || config.image
        },

        //Apple store icons
        {
          width: 1024,
          height: 1024,
          path: '../Media/ios/store',
          filename: '1024x1024-AppIcon.jpg',
          source: process.argv[2] || config.icon || config.image
        }

      ];


    if (config.customImages) {
      config.customImages.forEach(function (item) {
        images.push(item);
      });
    }

    if (!process.argv[2] && !config.image && (!config.icon && !config.splash)) {
      console.log('You must specify a filename as the second argument, or in a config file');
    } else if (!process.argv[3] && !config.background && (!config.icon && !config.splash)) {
      console.log('Please specify a background colour in hex values as the third argument, or in a config file');
    } else {

      var totalImages = images.length;
      console.log('------------------------------');
      console.log('   cordova-media-generator');
      console.log('------------------------------');
      console.log('Generating ' + totalImages + ' images so you don't have to');
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

module.exports = {
  resize: resize,
  generate: generate
}
