const mongoose = require('mongoose');
const Schema = mongoose.Schema

const theAttractionSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },   
})

const Attraction = mongoose.model('Attraction', theAttractionSchema)
module.exports = Attraction