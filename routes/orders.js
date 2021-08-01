const express = require('express')
const orderRouter = express.Router()
const Order = require('../models/Order')
const db = require('../models/DBConnect')
const { v4: uuidv4 } = require('uuid');

//Create Orders Route
orderRouter.post('/orders', async (req, res) => {
  try {
    for (let bookId of req.body.books) {
      const order = new Order({
        orderId: uuidv4(),
        customerId: req.body.customerId,
        bookId: bookId
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
      order.returnedDate = Date.now();

      const duration = Math.round(Math.abs((order.returnedDate - order.issueDate) / (24 * 60 * 60 * 1000)));

      //calculating amount
      order.totalAmount = duration * 1;
      order.status = "closed";
      await Order.findOneAndUpdate(filter, order);
    }

    res.json({ message: "order updated!!" });
  } catch (err) {
    res.json({ message: err.message });
  }
})

module.exports = orderRouter