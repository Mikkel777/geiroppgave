const User = require('../models/user');

const visLogin = async (req, res) => {
    res.render('login', { error:null });
};

const doLogin = async (req, res) => {
    const {username, password} = req.body;
    console.log("Prøver å logge inn for:", username);
    const user = await User.findOne({username});
    if (!user) {
        return res.render('login', {error: "Valpbruker ble ikke funnet"});
    }
    if(user.password !== password) {
        return res.render('login', {error: "Feil passord"});
    }
    req.session.user = {username};
    res.redirect('/profile');
};

const logout = (req, res) => {
    req.session.destroy(()=> {
        res.redirect('/login');
    });
};

module.exports = {visLogin, doLogin, logout};