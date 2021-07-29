const mongoose = require('mongoose');

//url schema
const SuraSchema = mongoose.Schema({

    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    transliteration_en: {
        type: String,
        required: true
    },
    translation_en: {
        type: String,
        required: true
    },
    total_verses: {
        type: Number,
        required: true
    },
    revelation_type: {
        type: String,
        required: true
    },
}, {
    collection: 'surahs'
})


module.exports = mongoose.model('Sura', SuraSchema);