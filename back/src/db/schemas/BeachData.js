const mongoose = require('mongoose');

const BeachConfig = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    quality: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Beach', BeachConfig );
