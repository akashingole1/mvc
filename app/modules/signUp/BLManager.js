/**Require node-modules**/
const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');
/**Require models/files**/
const {User, validateUser} = require('../../model/user');
const constant = require('../../common/constants');
const utils = require('../../utils/index')

module.exports = {
    /**
     * API->'get-content-list' Controller
     * @param req
     * @param res
     */
    signUp: async function (req, res) {
         const {error} = validateUser(req.body);
         if (error) return error.details[0].message;

        let findUser = await User.findOne({email: req.body.email});
        if (findUser) return utils.createResponseObject(null, constant.USER_ALREADY_REGISTERED, 400);

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const salt = await bcrypt.genSalt(10,);
        user.password = await bcrypt.hash(user.password, salt);

        user = await user.save();
        return utils.createResponseObject(user, constant.USER_SAVED, 200);

    },
};

