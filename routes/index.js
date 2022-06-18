const express = require('express')
const router = express.Router()

//route module
const order = require('./modules/order')

//use
router.use('/order', order)

module.exports = router