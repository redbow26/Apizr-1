const mongoose = require('mongoose');

const LacanauConfig = new mongoose.Schema({
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

module.exports = mongoose.model('Lacanau', LacanauConfig );
