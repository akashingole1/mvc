const BLManager = require("./BLManager");

module.exports = {
  /**
   * API->'get-content-list' Controller
   * @param req
   * @param res
   */
  pagination: async function (req, res) {
    let response = await BLManager.pagination(req);
    res.send(response);
  },
};
