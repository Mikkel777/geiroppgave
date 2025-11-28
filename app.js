const express = require('express');
const mongoose = require('mongoose');
const puppyController = require('./controllers/puppyController');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(3000, ()=> {
    console.log("Serveren er online på localhost:3000!");
});
