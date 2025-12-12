const User = require('../models/user');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'endre';

const authenticateJwt = async (req, res, next) => {
    try {
        let token = null;
        if (req.cookies && req.cookies.token) token = req.cookies.token;
        else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split('')[1];
        }
        if(!token) {
            return res.redirect('/login');
        }

        const decoded = jwt.verify(token, jwtSecret);
        const user = await user.findById(decoded.id).lean();
        if(!user) {
            res.clearCookie('token');
            return res.redirect('/login');
        }

        req.user = {id:user._id, username: user.username};
        next();
    } catch (err) {
        console.warn('JWT auth feilet', err.message);
        res.clearCookie('token');
        return res.redirect('/login');
    }
};

module.exports = {authenticateJwt};