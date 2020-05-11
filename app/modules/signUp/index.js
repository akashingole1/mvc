/**Require node-modules**/
const Mongoose = require("mongoose");
const _ = require("lodash");
/**Require models/files**/
const BLManager = require("./BLManager");

module.exports = {
  /**
   * API->'get-content-list' Controller
   * @param req
   * @param res
   */
  signUp: async function (req, res) {
    let userResponse = await BLManager.signUp(req);
    console.log("userResponse", userResponse);

    res.send(userResponse);
    //res.send(_.pick(user, ['_id', 'name', 'email', 'password']));
  },
};
