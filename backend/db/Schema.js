const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: false
    },
    permit: {
        type: String,
        required: false
    }
})

module.exports = Schema;