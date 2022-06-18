const express = require('express')
const router = express.Router()

//mongoose
const Order = require('../../models/order')

//API base: order

//Get order
router.get('/', async (req, res) => {
    try {
        const { patientId } = req.body
        const field = 'message createAt updateAt'
        const orders = await Order.find({ patientId }, field).lean()

        res.json(orders)
    } catch(e) {
        console.error(e)
        res.status(500).send('Error!')
    }
})

//Add order
router.post('/', async (req, res) => {
    try {
        const { message, patientId } = req.body
        await Order.create({ message, patientId })
        res.json({
            status: 'success'
        })
    } catch(e) {
        console.error(e)
        res.status(500).send('Error!')
    }
})

//Edit order
router.put('/', async (req, res) => {
    try {
        const { message, orderId } = req.body
        const order = await Order.findById(orderId)
        order.message = message
        order.save()
        res.json({
            status: 'success'
        })
    } catch(e) {
        console.error(e)
        res.status(500).send('Error!')
    }
})

//Delete order
router.delete('/', async (req, res) => {
    try {
        const { orderId } = req.body
        const order = await Order.findById(orderId)
        order.remove()
        res.json({
            status: 'success'
        })
    } catch(e) {
        console.error(e)
        res.status(500).send('Error!')
    }
})

module.exports = router