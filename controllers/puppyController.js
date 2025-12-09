const Puppy = require('../models/Puppy');

exports.getEveryPuppy = async (req, res) => {
    try {
        const puppies = await Puppy.find();
        res.render('puppyList', { puppies });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getPuppyName = async (req, res) => {
    try {
        const name = req.params.name;
        const puppy = await Puppy.findOne({ name });
        if (!puppy) {
            return res.render('404'); 
        }
        res.render('puppy', { puppy });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
