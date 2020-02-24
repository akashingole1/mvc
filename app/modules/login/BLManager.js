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
    login: async function (req, res) {
        const {error} = loginValidation(req.body);
        if (error) return error.details[0].message;

         let findUser = await User.findOne({email: req.body.email});
         console.log('findUser', findUser)
        if (!findUser) return utils.createResponseObject(null, constants.INVALID_EMAIL_OR_PASSWORD, 400);

        const validpassword = await bcrypt.compare(req.body.password, findUser.password)
        if (!validpassword) return utils.createResponseObject(null, constants.INVALID_EMAIL_OR_PASSWORD, 400);

        const result = jwt.sign({_id: findUser._id}, config.get(constants.PRIVATE_KEY));
        return utils.createResponseObject(result, constants.LOGGED_IN_SUCCESSFULLY, 200);

        //JSON Web Token is a long string for identifying the user
        /**
         * client logs in to server and server sends a JWT to client for the first time
         * client saves JWT in local storage and next when wants to make api call,
         * the client should show JWT to the server as a proof.
         * JWT has header, payload and verifying signature.
         */
    },
};

