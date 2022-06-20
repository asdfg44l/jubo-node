const express = require('express')
const router = express.Router()

//route module
const order = require('./modules/order')
const patient = require('./modules/patient')

//use
router.use('/order', order)
router.use('/patient', patient)
//error
router.use('*', (req, res) => {
    res.status(404).send('No such route')
})

module.exports = router