const express = require('express')
const router = express.Router()

//route module
const order = require('./modules/order')

//use
router.use('/order', order)
router.use('*', (req, res) => {
    res.status(404).send('No such route')
})

module.exports = router