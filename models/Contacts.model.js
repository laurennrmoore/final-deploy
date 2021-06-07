const mongoose = require('mongoose')
const Schema = mongoose.Schema
const theContactSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
})
const Contact = mongoose.model('Contact', theContactSchema)
module.exports = Contact