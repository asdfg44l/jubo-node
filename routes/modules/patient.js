const express = require('express')
const router = express.Router()

//mongoose
const Patient = require('../../models/patient')

router.get('/', async (req, res) => {
    try {
        const field = "_id name"
        const Patients = await Patient.find({}, field).lean()

        res.json(Patients)
    } catch(e) {
        console.error(e)
        res.status(500).send('Error!')
    }
})

module.exports = router