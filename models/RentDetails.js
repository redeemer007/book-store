const mongoose = require('mongoose')
const path = require('path')

const rentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  rentalCharge: {
    type: String,
    required:true
  }
})

module.exports = mongoose.model('Rent', rentSchema)