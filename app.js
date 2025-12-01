const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect("mongodb://10.12.7.102:27017/rainbow-puppies")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Rainbowpuppies hjemmeside :=)");
});

app.get("/puppy/:navn", puppyController.getPuppy);

app.use(express.static('public'));


app.listen(3000, ()=> {
    console.log("Serveren er online på localhost:3000!");
});
