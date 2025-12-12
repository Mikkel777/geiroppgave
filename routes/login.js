const express = require('express');
const router = express.Router();

const {
    getlogin,
    postlogin,
    logout,
    profile
} = require ('../controllers/loginPuppy');

const auth = require('../middleware/auth');

router.get('/login', getlogin);
router.post('/login', postlogin);
router.get('/logout', logout);
router.get('/profile', profile);

module.exports = router;