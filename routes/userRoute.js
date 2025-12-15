const express = require('express');
const router = express.Router();
const loginController = require('../controllers/userController');

router.post('/users/create', userController.createUser);

module.exports = router;