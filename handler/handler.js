const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://10.12.7.102:27017/rainbow-puppies")
        console.log("MongoDB koblet tiil");
    } catch (err) {
        console.error("Error med mongodb kobling", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;