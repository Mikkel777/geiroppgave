const User = require('../models/user');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'endre';
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1h';

module.exports.getlogin = (req, res) => {
    res.render('login', {flash:req.session?.flash || null});
};
//post
module.exports.postlogin = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        req.session.flash = {type: 'error', message: 'Du mangler bruker navn og passord'};
        return res.redirect('/login');
    }

    try {
        const user = await User.findOne({username});
        if (!user || user.password !== password) {
            req.session.flash = {type: 'error', message: 'feil brukernavn eller passord'};
            return res.redirect('/login');
        }
        const payload = { id: user._id, username: user.username };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'static',
            maxAge: 1000 * 60 * 60
        });

        req.session.flah = null;
        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        req.session.flash = {type: 'error', message: 'server problem'};
        res.redirect('/login');
   }
};
//logout
module.exports.logout = (req, res) => {
    res.clearCookie('token');
    if (req.session) req.session.destroy(()=> {});
    res.redirect('/login');
};


module.exports.profile = (req, res) => {
    res.render('profile', {user: req.user});
};