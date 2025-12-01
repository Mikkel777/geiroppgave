const Puppy = require('../models/Puppy');

exports.getPuppy = async (req, res)=> {
    try {
        const puppy = await Puppy.findOne({ name: req.params.navn});

        if (!puppy) {
            return res.status(404).render('error', {message: "puppies finnes ikke?"});
        }

        res.render('puppy', {puppy});
    } catch (err) {
        res.status(500).render('error', {message: "error"});
    }
};