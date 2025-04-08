const express = require('express')
const app = express();
const port = 3000;
const db = require('./db');

app.get('/', (req, res) => {
  res.send('Welcome to my Hotel!!!!!');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})