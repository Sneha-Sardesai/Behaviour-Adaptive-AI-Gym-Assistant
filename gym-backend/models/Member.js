const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 0
        },

        active: {
            type: Boolean,
            default: true
        },

        joinedOn: {
            type: Date,
            default: Date.now
        }
})

module.exports = mongoose.model('Member', memberSchema);