var gm = require('gm');
var mkdirp = require('mkdirp');

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

function generate(images) {
  images.forEach(function (image) {
    var background, sourceImage;

    sourceImage = image.source.filename;
    background = image.source.background;

    resize(image.width, image.height, '#' + background, sourceImage, image.filename, image.path);
  });
}

module.exports = {
  resize: resize,
  generate: generate
};