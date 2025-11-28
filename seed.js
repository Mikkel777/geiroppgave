const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
    name: String,
    puppyPower: Number,
    bestFriend: String,
    birthYear: Number,
    imageUrl: String
});

const Puppy = mongoose.model('Puppy', puppySchema);

