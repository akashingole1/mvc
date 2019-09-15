const {User} = require('../app/model/user');
const login = require('../app/modules/login/index')
const constants = require('../app/common/constants');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async function f(req, res) {
    login.login(req, res);

});

module.exports = router;