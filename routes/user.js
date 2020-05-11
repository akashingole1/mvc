const signup = require("../app/modules/signUp/index");
const express = require("express");
const router = express.Router();

router.post("/", async function f(req, res) {
  signup.signUp(req, res);
});

module.exports = router;
