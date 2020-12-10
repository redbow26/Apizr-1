require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Beach = require('./db/schemas/BeachData');
const Lacanau = require('./db/schemas/LacanauData');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json())

// Get all the beach
app.get('/beach', async(req, res) => {
    try {
        const beach = await Beach.find();
        res.json(beach)
    } catch (err) {
        res.json({message: err})
    }
});

// Submit lacanau data
app.post('/Lacanau', async (req, res) => {
    const lacanau = new Lacanau({
        quality: req.body.quality
    });

    try {
        await lacanau.save();
        res.json(lacanau);
    } catch (err) {
        res.json({message: err})
    }
});

// Add beach (Dev)
app.post('/add/beach', async (req, res) => {
    const beach = new Beach({
        name: req.body.name,
        quality: req.body.quality
    });
    try {
        await beach.save();
        res.json(beach);
    } catch (err) {
        res.json({message: err})
    }
});

// MongoCB connection
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( () => console.log("mongodb connected"))

// Launch express app
app.listen(PORT);
