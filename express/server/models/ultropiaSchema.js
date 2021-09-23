const mongoose = require('mongoose')

const ultSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    },
    dateAdded: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('ultropia', ultSchema)
