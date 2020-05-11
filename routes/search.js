const search = require("../app/modules/search/index");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  search.search(req, res);
});
module.exports = router;
