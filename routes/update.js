const update = require('../app/modules/update/index')
const express = require('express');
const router = express.Router();

router.post('/', async function f(req, res) {
    update.update(req, res);

});

module.exports = router;