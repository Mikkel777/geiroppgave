const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
    name: String,
    puppyPower: Number,
    bestFriend: String,
    birthYear: Number,
    imageUrl: String
});

module.exports = mongoose.model('Puppy', puppySchema);