const mongoose = require('mongoose');

//Sahih International schema
const SISchema = mongoose.Schema({

    surah_number: {
        type: Number,
        required: true
    },
    verse_number: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    }
}, {
    collection: 'en'
})


module.exports = mongoose.model('SI', SISchema);