var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Genre = require('./models/genre-model'),
    Book = require('./models/book-model');

app.use(bodyParser.json());

//Mongoose Connection
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//GET Home page
app.get('/', (req, res) => {
    res.send('This is a Home Page!');
});

//GET Genres Page
app.get('/api/genres', (req, res) => {
    Genre.getGenres((err, genres) => {
        if(err)  throw err;
        res.json(genres);
    });
});

//GET a Specific Book Page
app.get('/api/books/:id', (req, res) => {
    var id = req.params.id;
    Genre.getGenreById(id, (err, genre) => {
        if(err) throw err;
        res.json(genre);
    });
});

//POST Add a Genre
app.post('/api/genres', (req, res) => {
    var genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if(err) throw err;
        res.json(genre);
    })
});

//PUT Update a Genre
app.put('/api/genres/:_id', (req, res) => {
    var id = req.params._id,
        genre = req.body;
    Genre.updateGenre(id, genre, {}, (err, genre) => {
        if(err) throw err;
        res.json(genre);
    });
});

//DELETE Genre
app.delete('/api/genres/:_id', (req, res) => {
    var id = req.params._id;
    Genre.deleteGenre(id, (err, genre) => {
        if(err) throw err;
        res.json(genre);
    });
});

//GET Books Page
app.get('/api/books', (req, res) => {
    Book.getBooks((err, books) => {
        if(err) throw err;
        res.json(books);
    });
});

//GET a Specific Book Page
app.get('/api/books/:id', (req, res) => {
    var id = req.params.id;
    Book.getBookById(id, (err, book) => {
        if(err) throw err;
        res.json(book);
    });
});

//POST Add a Book
app.post('/api/books', (req, res) => {
    var book = req.body;
    Book.addBook(book, (err, book) => {
        if(err) throw err;
        res.json(book);
    });
});

//PUT Update Book
app.put('/api/books/:_id', (req, res) => {
    var id = req.params._id,
        book = req.body;
    Book.updateBook(id, book, {}, (err, book) => {
        if(err) throw err;
        res.json(book);
    });
});

//DELETE Book
app.delete('/api/books/:id', (req, res) => {
    var id = req.params._id;
    Book.deleteBook(id, (err, book) => {
        if(err) throw err;
        res.json(book);
    });
});

//Server Connection
app.listen(3000, function() {
    console.log('Listening on port 3000!');
});