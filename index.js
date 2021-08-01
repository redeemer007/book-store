const express = require('express')
const app = express()
require("dotenv").config()

const orderRouter = require('./routes/orders')
// const authorRouter = require('./routes/authors')
// const bookRouter = require('./routes/books')

app.use(express.json());
app.use(orderRouter);

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});