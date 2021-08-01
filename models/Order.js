const mongoose = require('mongoose')
const path = require('path')

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  customerId: {
    type: String,
    required: true
  },
    bookId: {
      type: String,
      required: true
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    returnedDate: {
      type: Date,
      default: null
    },
    type: {
      type: String,
      required: true
    },
  status: {
    type: String,
    required: true,
    default: "open"
  },
  totalAmount: {
    type: Number,
    required: true,
    default: 0
  }  
})

module.exports = mongoose.model('Order', OrderSchema)