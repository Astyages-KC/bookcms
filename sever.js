const express = require('express')
const app = express()
const PORT = 7000
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware for every request
app.use(express.json())
app.use(morgan('dev')) //gives updates when using CRUD

//routes
app.use('/bookscms', require('./routes/bookRouter.js'))

//DB collection
mongoose.connect('mongodb://localhost:27017/bookscmsdb',
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => console.log("Connected to BooksCMS DB"))

//Global Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
app.listen(PORT, () => {
    console.log(`Server running on Port : ${PORT}`)
})