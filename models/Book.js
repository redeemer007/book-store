const mongoose = require('mongoose')
const path = require('path')

const bookSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true
      },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  author: {
    type: String
  }
})

module.exports = mongoose.model('Book', bookSchema)