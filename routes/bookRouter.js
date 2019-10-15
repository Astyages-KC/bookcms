//This is where the routes go for the POST, GET, PUT, DELETE

const express = require('express');
const bookRouter = express.Router();
const Book = require('../models/books.js');

// GET All Request
bookRouter.get("/", (req, res, next) => {
	Book.find((err, books) => {
		if(err){
			res.status(500)
			return next(err)
		}
		return res.status(200).send(books)
	})
})
// GET by isbn, title, subTitle, author all in one.
bookRouter.get("/search", (req, res, next) => {
    // deletes empty/undefinded search fields from the query
    for(let i in req.query){
        if(req.query[i] === "undefined"){
            delete req.query[i]
        }
    }
    //searches books based on req.query
    Book.find(req.query, (err, book) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(book) 
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


// Delete
bookRouter.delete("/:_id", (req, res, next) => {
    Book.findOneAndRemove(
        { _id: req.params._id },
        (err, book) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(book);
        })
})


module.exports = bookRouter