const Puppy = require('../models/Puppy');

exports.getPuppy = async (req, res)=> {
    const name = req.params.name;
    const puppy = await Puppy.findOne({name});

    if(!Puppy) {
        return res.status(404).send("Puppy is gone");
    }

    res.render('puppy', {puppy});
};