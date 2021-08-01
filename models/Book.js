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

// bookSchema.virtual('coverImagePath').get(function() {
//   if (this.coverImageName != null) {
//     return path.join('/', coverImageBasePath, this.coverImageName)
//   }
// })

module.exports = mongoose.model('Book', bookSchema)