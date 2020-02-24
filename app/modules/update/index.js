const BLManager = require('./BLManager');

module.exports = {
    /**
     * API->'get-content-list' Controller
     * @param req
     * @param res
     */
    update: async function (req, res) {
        let response = await BLManager.update(req);
        res.send(response);
    },
};

