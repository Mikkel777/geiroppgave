const express = require('express');
const router = express.Router();
const puppyController = require('../controllers/puppyController');


router.get('/puppies', puppyController.getEveryPuppy);

router.get('/puppy/:name', puppyController.getPuppyName);

module.exports = router;