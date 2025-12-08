const User = require('../models/user');

//AUTH
const autentiser = async (req, res, next) =>{
    console.info("Autentiserer bruker...");
    const user = req.session.user;
    if(!user) {
        console.warn("Autentisering feilet. Sender til Login page");
        res.redirect('/login');
        return;
    }

//USER
    const brukerFinnes = await user.findOne({username: user.username});
    if (!brukerFinnes) {
        console.warn('Valpebruker ble ikke funnet i databasen. Sender til Login Page');
        res.session.destroy();
        res.redirect('/login');
        return;
    }
};