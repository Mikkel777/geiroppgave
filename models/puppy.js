const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
    name: String,
    puppyPower: Number,
    bestFriend: String,
    birthYear: Number,
    imageUrl: String
}, { collection: "rainbow-puppies"});

module.exports = mongoose.model('Puppy', puppySchema);