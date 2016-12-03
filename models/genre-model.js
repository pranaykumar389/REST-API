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

//Get Single Genre
module.exports.getGenreById = (id, callback) => {
    Book.findById(id, callback);
};

//Add Genre
module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback);
};


//Update Genre
module.exports.updateGenre = (id, genre, options, callback) => {
    var query = {_id: id},
        update = {
            name: genre.name
        };
    Genre.findOneAndUpdate(query, update, options, callback);
};

//Delete Genre
module.exports.deleteGenre = (id, callback) => {
    var query = {_id: id};
    Genre.remove(query, callback);
}