const express = require("express");
const router = express.Router();
const uploadImage = require("../app/modules/upload/BLManager");
const utils = require("../app/utils");

router.post(
  "/",
  uploadImage.uploadImage.single("profileImage"),
  async function f(req, res, next) {
    console.log("./", req.file);
    if (!req.file) {
      res.status(500);
      return next(err);
    } else {
      res.send(
        utils.createResponseObject(req.file.path, "Upload Successful", 200)
      );
    }
  }
);

module.exports = router;
