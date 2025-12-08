const User = require('../models/user');

const autentiser = async (req, res, next) =>{
    console.info("Autentiserer bruker...");
    const user = req.session.user;
    if(!user) {
        console.warn("Autentisering feilet. Sender til Login page");
        res.redirect('/login');
        return;
    }
}