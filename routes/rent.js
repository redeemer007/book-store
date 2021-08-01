const express = require('express')
const rentRouter = express.Router()
const RentDetails = require('../models/RentDetails')
const db = require('../models/DBConnect')
const { v4: uuidv4 } = require('uuid');

//Create Rent Route
rentRouter.post('/rent', async (req, res) => {
  try {
      for(let book of req.body){
       const rentDetails = new RentDetails({
        type: book.type,
        rentalCharge: book.rentalCharge
      })
      await rentDetails.save();
    }
    res.json({ message: "rental details added!!" });
  } catch (err) {
    res.json({ message: err.message });
  }
})

module.exports = rentRouter