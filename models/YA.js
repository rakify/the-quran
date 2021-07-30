const mongoose = require('mongoose');

//Yousuf Ali translation schema
const YASchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    sura: {
        type: String,
        required: true
    },
    aya: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    collection: 'en_yousuf_ali'
})


module.exports = mongoose.model('YA', YASchema);