const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginPuppy');

router.get('/login', getlogin);

router.post('/login', postlogin);

router.get('/profile', authenticate, profile);

router.post('/logout', logout);

module.exports = router;