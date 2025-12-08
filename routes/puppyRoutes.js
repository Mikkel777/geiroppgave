const express = require('express');
const router = require('express').Router();
const puppyController = require('../controllers/puppyController');


router.get('/puppies', puppyController.getEveryPuppy);

router.get('/puppy/:name', puppyController.getPuppyName);

module.exports = router;