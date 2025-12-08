const User = require('../models/user');

const profile = (req, res) => {
    console.info('Profile endpoint reached, rendering user...');
    res.render('profile', {user: req.session.user});
}
const logout = (req, res) => {
    console.info('Logout endpoint reached, logging out user...');
    req.session.destroy();
    // Implement logout logic here
    res.redirect('/login');
}

const getlogin = (req, res) => {
    console.info('Login page requested');
    if(req.session.flash) {
        console.log('Flash message:', req.session.flash);
    }
    // Implement login logic here
    res.render('login', {flash: req.session.flash || null});
}
const postlogin = async (req, res) => {
    console.info('Login form submitted');
    // Implement login logic here
    const {username, password} = req.body;

    try {   
        const user = await User.findOne({username});
        if (user && user.password === password) {
            req.session.user = {username: user.username};
            res.redirect('/profile');
            return;
        }
    } catch (error) {
        console.error('Error during login:', error);
        createFlashMessage(req, 'error', 'An error occurred. Please try again.');
        res.redirect('/login');
        return;
    }

    if (!username || !password) {
        console.warn('Login failed: Missing username or password');
        createFlashMessage(req, 'error', 'Please provide both username and password.');
        res.redirect('/login');
        return;
    }

    console.warn('Login failed: Invalid credentials');    
    createFlashMessage(req, 'error', 'Wrong username or password! Please try again.');
    res.redirect('/login');
}

function createFlashMessage(req, type, message) {
    req.session.flash = {type, message};
}
module.exports = {profile,getlogin,postlogin,logout};


//MIN KODe

// module.exports.visLogin = (req, res) => {
//     res.render('login');
// };

// module.exports.doLogin = async (req, res) => {
//     const {username, password} = req.body;
//     const user = await User.findOne({username});

//     if (!user || user.password !== password) {
//         return res.render('login', {error: "feil brukernavn eller passord"});
//     }
// }

// const doLogin = async (req, res) => {
//     const {username, password} = req.body;
//     console.log("Prøver å logge inn for:", username);
//     const user = await User.findOne({username});
//     if (!user) {
//         return res.render('login', {error: "Valpbruker ble ikke funnet"});
//     }
//     if(user.password !== password) {
//         return res.render('login', {error: "Feil passord"});
//     }
//     req.session.user = {username};
//     res.redirect('/profile');
// };

// const logout = (req, res) => {
//     req.session.destroy(()=> {
//         res.redirect('/login');
//     });
// };