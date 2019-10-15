const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: String,
    author: {
        type: String,
        required: true
    },
    price: Number,
    cost: Number,
    isbn: {
        type: Number,
        unique: true
    }
})

module.exports = mongoose.model("Book", bookSchema)
