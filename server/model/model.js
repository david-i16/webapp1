const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    profile_picture: {
        data: Buffer, 
        contentType: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    favorite_movies: {
        type: String,
        text: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;