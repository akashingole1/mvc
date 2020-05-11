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
  pagination: async function (req, res) {
    console.log("req...", req.query);
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let findUser = await User.find().limit(5).skip(startIndex);
    return utils.createResponseObject(
      findUser,
      "user updated successfully",
      200
    );

    // let findUser = await User.find();
    // console.log("finduser", findUser);
  },
};
