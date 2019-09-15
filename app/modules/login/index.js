/**Require node-modules**/
const Mongoose = require('mongoose');
/**Require models/files**/
const BLManager = require('./BLManager');
const {User} = require('../../../app/model/user');

module.exports = {
    /**
     * API->'get-content-list' Controller
     * @param req
     * @param res
     */
    login: async function (req, res) {
        let response = await BLManager.login(req);
        res.send(response);
    },
};

