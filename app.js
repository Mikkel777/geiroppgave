const express = require('express');
const mongoose = require('mongoose');
const puppyRoutes = require('./routes/puppyRoutes');
const login = require('./routes/login');
const Puppy = require('./models/Puppy');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

app.use(session({
    secret: 'supersecretkey',
    resave: false,
    saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', login);
app.use('/', puppyRoutes);

app.get('/', (req, res) => {
    res.render('homepage');
});

app.use((req, res) => {
    res.render('404');
});

app.listen(3000, ()=> {
    console.log("Serveren er online på localhost:3000!");
});