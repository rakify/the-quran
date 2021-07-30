const mongoose = require('mongoose');

//Bangla translation schema
const BNSchema = mongoose.Schema({
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
    collection: 'bn'
})


module.exports = mongoose.model('BN', BNSchema);