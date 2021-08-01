const express = require('express')
const orderRouter = express.Router()
const Order = require('../models/Order')
const db = require('../models/DBConnect')
const { v4: uuidv4 } = require('uuid');
const RentDetails = require('../models/RentDetails');

//Create Orders Route
orderRouter.post('/orders', async (req, res) => {
  try {
    for (let bookId of req.body.books) {
      const order = new Order({
        orderId: uuidv4(),
        customerId: req.body.customerId,
        bookId: bookId,
        type: req.body.type
      })
      await order.save();
    }
    res.json({ message: "order placed!!" });
  } catch (err) {
    res.json({ message: err.message });
  }
})

//Update Orders Route
orderRouter.put('/orders', async (req, res) => {
  try {
    for (let bookId of req.body.books) {
      const filter = { customerId: req.body.customerId, bookId: bookId };
      let order = await Order.findOne(filter);
      let rentDetails = await RentDetails.findOne({type: req.body.type });
      order.returnedDate = Date.now();

      let duration = Math.round(Math.abs((order.returnedDate - order.issueDate) / (24 * 60 * 60 * 1000)));

      //calculating amount
      if(rentDetails.type == "regular"){        
        if(duration == 1 || duration == 2){
          order.totalAmount =  2;
        }else{
          duration = duration - 2;
          order.totalAmount = 2 + (duration * rentDetails.rentalCharge);
        }
      }else if(rentDetails.type == "novel"){
        if(duration < 3){
          order.totalAmount = 4.5;
        }else{
          order.totalAmount = duration * rentDetails.rentalCharge;
        }
      }else{
        order.totalAmount = duration * rentDetails.rentalCharge;
      }
      order.status = "closed";
      await Order.findOneAndUpdate(filter, order);
    }

    res.json({ message: "order updated!!" });
  } catch (err) {
    res.json({ message: err.message });
  }
})

module.exports = orderRouter