const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginPuppy');
const { authenticateJwt } = require('../middleware/auth');

const {
    getlogin,
    postlogin,
    logout,
    profile
} = require ('../controllers/loginPuppy');

const auth = require('../middleware/auth');

router.get('/login', loginController.getlogin);
router.post('/login', loginController.postlogin);
router.get('/logout', loginController.logout);
router.get('/profile', authenticateJwt, loginController.profile);

module.exports = router;