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
  delete: async function (req, res) {
    let removeUser = await User.deleteOne({ email: "johndoe@gmail.com" });
    return utils.createResponseObject(
      removeUser,
      "User removed successfully",
      200
    );

    // let removeUser = await User.deleteMany({ age: { $eq: 18 } });
    // return utils.createResponseObject(removeUser, "User removed successfully", 200);
  },
};
