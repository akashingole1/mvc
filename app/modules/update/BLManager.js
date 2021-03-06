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
  update: async function (req, res) {
    let updateUser = await User.updateOne(
      { name: "Akash Ingole" },
      { email: "ingoleakash19@gmail.com" }
    );
    console.log("updateUser", updateUser);
    return utils.createResponseObject({}, "user updated successfully", 200);
  },
};
