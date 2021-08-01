const mongoose = require('mongoose')
const path = require('path')

const customerSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
      },
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
      type:String,
      required: true
  }
})

module.exports = mongoose.model('Customer', customerSchema)