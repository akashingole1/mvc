/**Require node-modules**/
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/images");
  },
  filename: function (req, file, cb) {
    console.log("file", file);
    cb(null, Date.now() + file.originalname);
  },
});

var uploadImage = multer({
  storage: storage,
});
// can use array also

module.exports = {
  uploadImage: uploadImage,
};
