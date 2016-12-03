var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    paperback: {
        type: Number,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    buyAt: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get All Books
module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit);
};

//Get Single Book
module.exports.getBookById = (book, callback) => {
    Book.findById(id, callback);
}