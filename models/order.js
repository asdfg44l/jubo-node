const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
    message: {
        type: String,
        require: true
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        index: true,
        require: true
    }
})

module.exports = mongoose.model("Order", orderSchema)