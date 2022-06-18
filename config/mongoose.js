const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/jubo-test")

const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error')
})

db.on('open', () => {
    console.log('mongodb connected')
})

module.exports = db