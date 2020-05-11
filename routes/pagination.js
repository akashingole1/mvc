const pagination = require("../app/modules/pagination/index");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  pagination.pagination(req, res);
});
module.exports = router;
