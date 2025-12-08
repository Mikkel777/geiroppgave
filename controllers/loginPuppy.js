const User = require('../models/user');

const visLogin = async (req, res) => {
    res.render('login', { error:null });
};

const doLogin = async (req, res) => {
    const {username, password} = req.body;
    console.log("Prøver å logge inn for:", username);
}