module.exports = function(projectName, iconSource, splashSource) {
  iconSource = process.argv[2] || config.icon || config.image;
  splashSource = process.argv[2] || config.splash || config.image;

  return [
    //IOS Icons
    {
      width: 180,
      height: 180,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-60@3x.png',
      source: iconSource
    },
    {
      width: 120,
      height: 120,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-60@2x.png',
      source: iconSource
    },
    {
      width: 40,
      height: 40,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-40.png',
      source: iconSource
    },
    {
      width: 80,
      height: 80,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-40@2x.png',
      source: iconSource
    },
    {
      width: 120,
      height: 120,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-40@3x.png',
      source: iconSource
    },
    {
      width: 50,
      height: 50,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-50.png',
      source: iconSource
    },
    {
      width: 100,
      height: 100,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-50@2x.png',
      source: iconSource
    },
    {
      width: 60,
      height: 60,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-60.png',
      source: iconSource
    },
    {
      width: 72,
      height: 72,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-72.png',
      source: iconSource
    },
    {
      width: 144,
      height: 144,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-72@2x.png',
      source: iconSource
    },
    {
      width: 76,
      height: 76,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-76.png',
      source: iconSource
    },
    {
      width: 152,
      height: 152,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-76@2x.png',
      source: iconSource
    },
    {
      width: 120,
      height: 120,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-120.png',
      source: iconSource
    },
    {
      width: 29,
      height: 29,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-small.png',
      source: iconSource
    },
    {
      width: 58,
      height: 58,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-small@2x.png',
      source: iconSource
    },
    {
      width: 87,
      height: 87,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon-small@3x.png',
      source: iconSource
    },
    {
      width: 57,
      height: 57,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 114,
      height: 114,
      path: 'ios/' + projectName + '/Resources/icons',
      filename: 'icon@2x.png',
      source: iconSource
    },

    //iOS Spash
    {
      width: 640,
      height: 1136,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default-568h@2x~iphone.png',
      source: splashSource
    },
    {
      width: 2048,
      height: 1536,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default-Landscape@2x~ipad.png',
      source: splashSource
    },
    {
      width: 1024,
      height: 768,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default-Landscape~ipad.png',
      source: splashSource
    },
    {
      width: 1536,
      height: 2048,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default-Portrait@2x~ipad.png',
      source: splashSource
    },
    {
      width: 768,
      height: 1024,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default-Portrait~ipad.png',
      source: splashSource
    },
    {
      width: 640,
      height: 960,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default@2x~iphone.png',
      source: splashSource
    },
    {
      width: 320,
      height: 480,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default~iphone.png',
      source: splashSource
    },
    {
      width: 750,
      height: 1344,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default-667h.png',
      source: splashSource
    },
    {
      width: 1242,
      height: 2208,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default-736h.png',
      source: splashSource
    },
    {
      width: 2208,
      height: 1242,
      path: 'ios/' + projectName + '/Resources/splash',
      filename: 'Default-Landscape-736h.png',
      source: splashSource
    },

    //Android Icon & Splash
    {
      width: 96,
      height: 96,
      path: 'android/res/drawable',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 72,
      height: 72,
      path: 'android/res/drawable-hdpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 800,
      height: 480,
      path: 'android/res/drawable-land-hdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 320,
      height: 200,
      path: 'android/res/drawable-land-ldpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 480,
      height: 320,
      path: 'android/res/drawable-land-mdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 1280,
      height: 720,
      path: 'android/res/drawable-land-xhdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 36,
      height: 36,
      path: 'android/res/drawable-ldpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 48,
      height: 48,
      path: 'android/res/drawable-mdpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 480,
      height: 800,
      path: 'android/res/drawable-port-hdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 200,
      height: 320,
      path: 'android/res/drawable-port-ldpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 320,
      height: 480,
      path: 'android/res/drawable-port-mdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 720,
      height: 1280,
      path: 'android/res/drawable-port-xhdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 96,
      height: 96,
      path: 'android/res/drawable-xhdpi',
      filename: 'icon.png',
      source: iconSource
    },


    //Android Icon & Splash (/bin/res)
    {
      width: 96,
      height: 96,
      path: 'android/bin/res/drawable',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 72,
      height: 72,
      path: 'android/bin/res/drawable-hdpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 800,
      height: 480,
      path: 'android/bin/res/drawable-land-hdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 320,
      height: 200,
      path: 'android/bin/res/drawable-land-ldpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 480,
      height: 320,
      path: 'android/bin/res/drawable-land-mdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 1280,
      height: 720,
      path: 'android/bin/res/drawable-land-xhdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 36,
      height: 36,
      path: 'android/bin/res/drawable-ldpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 48,
      height: 48,
      path: 'android/bin/res/drawable-mdpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 480,
      height: 800,
      path: 'android/bin/res/drawable-port-hdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 200,
      height: 320,
      path: 'android/bin/res/drawable-port-ldpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 320,
      height: 480,
      path: 'android/bin/res/drawable-port-mdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 720,
      height: 1280,
      path: 'android/bin/res/drawable-port-xhdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 96,
      height: 96,
      path: 'android/bin/res/drawable-xhdpi',
      filename: 'icon.png',
      source: iconSource
    },

    //Android Icon & Splash (/ant-build/res)
    {
      width: 96,
      height: 96,
      path: 'android/ant-build/res/drawable',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 72,
      height: 72,
      path: 'android/ant-build/res/drawable-hdpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 800,
      height: 480,
      path: 'android/ant-build/res/drawable-land-hdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 320,
      height: 200,
      path: 'android/ant-build/res/drawable-land-ldpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 480,
      height: 320,
      path: 'android/ant-build/res/drawable-land-mdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 1280,
      height: 720,
      path: 'android/ant-build/res/drawable-land-xhdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 36,
      height: 36,
      path: 'android/ant-build/res/drawable-ldpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 48,
      height: 48,
      path: 'android/ant-build/res/drawable-mdpi',
      filename: 'icon.png',
      source: iconSource
    },
    {
      width: 480,
      height: 800,
      path: 'android/ant-build/res/drawable-port-hdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 200,
      height: 320,
      path: 'android/ant-build/res/drawable-port-ldpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 320,
      height: 480,
      path: 'android/ant-build/res/drawable-port-mdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 720,
      height: 1280,
      path: 'android/ant-build/res/drawable-port-xhdpi',
      filename: 'screen.png',
      source: splashSource
    },
    {
      width: 96,
      height: 96,
      path: 'android/ant-build/res/drawable-xhdpi',
      filename: 'icon.png',
      source: iconSource
    },

    //Android Store Icons
    {
      width: 512,
      height: 512,
      path: '../Media/android/store',
      filename: '512.png',
      source: iconSource
    },
    {
      width: 1024,
      height: 500,
      path: '../Media/android/store',
      filename: '1024x500.png',
      source: splashSource
    },
    {
      width: 180,
      height: 120,
      path: '../Media/android/store',
      filename: '180x120.png',
      source: splashSource
    },

    //Apple store icons
    {
      width: 1024,
      height: 1024,
      path: '../Media/ios/store',
      filename: '1024x1024-AppIcon.jpg',
      source: iconSource
    }
  ];
};