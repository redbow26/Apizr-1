require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Beach = require('./db/schemas/BeachData');
const Lacanau = require('./db/schemas/LacanauData');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json())

//app.get('/beach', (req, res) => {

//});

app.post('/Lacanau', (req, res) => {
    const lacanau = new Lacanau({
        quality: req.body.quality
    });
    lacanau.save()
        .then(data => res.json(data))
        .catch(err => res.json( { message: err }));
});

app.post('/add/beach', (req, res) => {
    const beach = new Beach({
        name: req.body.name,
        quality: req.body.quality
    });
    beach.save()
        .then(data => res.json(data))
        .catch(err => res.json( { message: err }));
});

// MongoCB connection
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( () => console.log("mongodb connected"))

// Launch express app
app.listen(PORT);
