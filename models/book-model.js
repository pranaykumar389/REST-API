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
module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback);
}

//Add Single Book
module.exports.addBook = (book, callback) => {
    Book.create(book, callback);
};

//Update Book
module.exports.updateBook = (id, book, options, callback) => {
    var query = {_id: id},
        update = {
            title: book.title,
            genre: book.genre,
            description: book.description,
            author: book.author,
            publisher: book.publisher,
            paperback: book.paperback,
            images: book.images,
            buyAt: book.buyAt
        };
    Book.findOneAndUpdate(query, update, options, callback);
};

//Delete Book
module.exports.deleteBook = (id, callback) => {
    var query = {_id: id};
    Book.remove(query, callback);
}