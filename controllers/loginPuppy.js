const User = require('../models/user');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'endre';
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1h';

module.exports.getLogin = (req, res) => {
    res.render('login', {flash:req.session?.flash || null});
};
