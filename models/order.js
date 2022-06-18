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
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
})

orderSchema.pre('save', (next) => {
    let now = new Date()
    this.updateAt = now
    if(this.createAt) {
        this.createAt = now
    }
    next()
})

module.exports = mongoose.model("Order", orderSchema)