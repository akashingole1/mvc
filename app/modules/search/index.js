const BLManager = require("./BLManager");

module.exports = {
  /**
   * API->'get-content-list' Controller
   * @param req
   * @param res
   */
  search: async function (req, res) {
    let response = await BLManager.search(req);
    res.send(response);
  },
};
