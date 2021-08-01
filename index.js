const express = require('express')
const app = express()
require("dotenv").config()

const orderRouter = require('./routes/orders')
const rentRouter = require('./routes/rent')

app.use(express.json());
app.use(orderRouter);
app.use(rentRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});