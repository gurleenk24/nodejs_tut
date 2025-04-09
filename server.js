const express = require('express')
const app = express();
const port = 3000;
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // stores in req.body

const Person = require('./models/person');

app.get('/', (req, res) => {
  res.send('Welcome to my Hotel!!!!!');
})

// creating a post method on /person
app.post('/person', (req, res) => {
  try{
    app.post('/person', async (req, res) => {
      const data = req.body;  // getting the data from the request body
      // create a new Person document using Mongoose model
      const newPerson = new Person(data); // to avoid all the things down there we directly pass data to it!
      // saving the new person to the database
      const response = await newPerson.save();
      console.log("Data saved!!");
      res.status(200).json(response);
    })
  }catch(err){
      console.log(err);
      res.status(500).json({error : "Internal Server error"});
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})