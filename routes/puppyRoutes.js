const express = require('express');
const router = express.Router();
const Puppy = require('../models/Puppy');

router.get('/puppies', async(req, res)=> {
    try {
        const puppies = await Puppy.find();
        res.json(puppies);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
});

router.get('/puppies/:name', async (req, res)=> {
    try {
        const name = req.params.name;
        const puppy = await Puppy.findOne({name});

        if (!puppy) {
            return res.status(404).json({error: "puppy gone"});
        }
        res.json(puppy);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;