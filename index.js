const gm = require("gm").subClass({ imageMagick: true });
require("gm-base64");

exports.dynamicImage = (event, context, callback) => {
  gm(200, 30, "#fff")
    .drawText(10, 20, decodeURI(event.text))
    .border(2, 2)
    .borderColor("#ff0000")
    .toBase64("png", function(err, base64) {
      callback(null, base64);
    });
};
