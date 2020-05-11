const BLManager = require("./BLManager");

module.exports = {
  /**
   * API->'get-content-list' Controller
   * @param req
   * @param res
   */
  delete: async function (req, res) {
    let response = await BLManager.delete(req);
    res.send(response);
  },
};
