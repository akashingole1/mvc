const remove = require("../app/modules/delete/index");
const express = require("express");
const router = express.Router();

// router.delete("/:id", function (req, res) {
//   console.log("req..//", req.params);
//   remove.delete(req, res);
// });

router.delete("/", function (req, res) {
  remove.delete(req, res);
});
module.exports = router;
