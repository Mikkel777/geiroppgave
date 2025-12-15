const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.createUser = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).send("mangler navn eller passord");
    }

    const existing = await User.findOne({username});
    if (existing) {
        return res.status(400).send("bruker finnes allerde");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
        username,
        password: hashedPassword
    });

    res.send("bruker opprettet");
};