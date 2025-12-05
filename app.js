const express = require('express');
const mongoose = require('mongoose');
const puppyRoutes = require('./routes/puppyRoutes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

mongoose.connect("mongodb://10.12.7.102:27017/rainbow-puppies")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use('/api', puppyRoutes);

app.use('/img', express.static('/var/www/rainbow-puppies/img'));

app.get('/', (req, res) => {
    res.send('');
});

app.listen(3000, ()=> {
    console.log("Serveren er online på localhost:3000!");
});
