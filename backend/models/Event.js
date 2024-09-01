const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    art: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('Event', EventSchema);