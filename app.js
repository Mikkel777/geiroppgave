const express = require('express');
const mongoose = require('mongoose');
const puppyRoutes = require('./routes/puppyRoutes');
const Puppy = require('./models/Puppy');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', __dirname + '/views');

app.use('/api', puppyRoutes);

app.get('/puppies', async (req, res) => {
    try {
        const puppies = await Puppy.find();
        res.render('puppyList', { puppies});
    } catch (err) {
        res.status(500).send(err.message);
    }
});

mongoose.connect("mongodb://10.12.7.102:27017/rainbow-puppies")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));


app.use('/img', express.static('/var/www/rainbow-puppies/img'));

app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(3000, ()=> {
    console.log("Serveren er online på localhost:3000!");
});

app.use((req, res) => {
    res.status(404).send("<h1>404 – Denne siden finnes ikke</h1>");
});
