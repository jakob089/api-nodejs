const User = require('./../models/User');

exports.findAll = async (req, res) => {
    const users =  User.findAll();
    res.json(users);
}