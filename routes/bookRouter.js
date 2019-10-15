//This is where the routes go for the POST, GET, PUT, DELETE

const express = require('express');
const bookRouter = express.Router();
const Book = require('../models/books.js');

// GET request
bookRouter.get("/", (req, res, next) => {
	Book.find((err, books) => {
		if(err){
			Response.status(500)
			return next(err)
		}
		return res.status(200).send(books)
	})
})


// POST request
bookRouter.post("/", (req, res, next) => {
    const newBook = new Book(req.body);
    newBook.save((err, newBook) => {
        if (err) {
            res.send(500);
            return next(err);
        }
    })
    return res.send(newBook);
})

module.exports = bookRouter