var mongoose = require('mongoose');

//Genres Schema
var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get All Genres
module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);
};