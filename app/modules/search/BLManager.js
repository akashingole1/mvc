/**Require node-modules**/
const Mongoose = require("mongoose");
/**Require models/files**/
const { User } = require("../../../app/model/user");
const utils = require("../../utils/index");

module.exports = {
  /**
   * API->'get-content-list' Controller
   * @param req
   * @param res
   */
  search: async function (req, res) {
    let findUser = await User.find({
      name: { $regex: req.body.search, $options: "i" },
    });
    return utils.createResponseObject(findUser, "Search Successful", 200);
  },
};
