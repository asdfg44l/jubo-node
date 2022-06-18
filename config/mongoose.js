const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/jubo-test"
mongoose.connect(MONGODB_URI)

const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error')
})

db.on('open', () => {
    console.log('mongodb connected')
})

module.exports = db