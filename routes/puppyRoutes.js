const express = require('express');
const router = express.Router();
const puppyController = require('../controllers/puppyController');
const {authenticateJwt} = require('../middleware/auth');

router.get('/puppies', puppyController.getEveryPuppy);
router.get('/puppy/:name', puppyController.getPuppyName);

module.exports = router;