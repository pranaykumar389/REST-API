var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Genre = require('./models/genre-model'),
    Book = require('./models/book-model');

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

app.get('/api/books', (req, res) => {
    Book.getBooks((err, books) => {
        if(err) throw err;
        res.json(books);
    });
});

app.get('/api/books/:id', (req, res) => {
    Book.getBookById(req.params.id, (err, book) => {
        if(err) throw err;
        res.json(book);
    });
});

//Server Connection
app.listen(3000, function() {
    console.log('Listening on port 3000!');
});