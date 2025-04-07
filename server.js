const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chicken', (req, res) => {
  res.send("How can I help you??");
})

app.get('/idli', (req, res)=>{
  var customised_idli = {
    name: 'rava idli',
    size: '10 cm dia',
    is_sambhar : true,
    is_chutney: false
  }
  res.send(customised_idli);
})

app.post('/person',(req,res)=>{
  res.send("data is saved");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})