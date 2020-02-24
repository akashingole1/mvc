/**Require node-modules**/
const Mongoose = require('mongoose');
/**Require models/files**/
const {User, loginValidation} = require('../../../app/model/user');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const config = require('config');
const utils = require('../../utils/index');
const jwt = require('jsonwebtoken');
const constants = require('../../../app/common/constants');

module.exports = {
    /**
     * API->'get-content-list' Controller
     * @param req
     * @param res
     */
    update: async function (req, res) {
        // let findUser = await User.findOne({name: 'Akash Ingole'})
        // console.log('finduser', findUser)
       let updateUser = await User.updateOne({name: 'Akash Ingole'}, {email: 'ingoleakash19@gmail.com'})
       console.log('updateUser', updateUser)
       return utils.createResponseObject({}, 'user updated successfully', 200);
    },
};

