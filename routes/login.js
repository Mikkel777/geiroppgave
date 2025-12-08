const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginPuppy');

router.get('/login', loginController.visLogin);
router.post('/login', loginController.doLogin);
router.get('/logout', loginController.logout);

module.exports = router;