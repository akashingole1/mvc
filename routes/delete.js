const remove = require("../app/modules/delete/index");
const express = require("express");
const router = express.Router();

router.delete("/", function (req, res) {
  remove.delete(req, res);
});
module.exports = router;
