const Puppy = require('../models/Puppy');

exports.getEveryPuppy = async (req, res) => {
    try {
        const puppies = await Puppy.find();
        res.join(puppies);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getPuppyName = async (req, res) => {
    try {
        const name = req.params.name;
        const puppy = await Puppy.findOne({name});

        if (!puppy) {
            return res.status(404).send("puppy gone");
        }
        res.render('puppy', {puppy});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
;}