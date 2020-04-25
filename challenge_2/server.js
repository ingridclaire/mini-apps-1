const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('client'));
const PORT = 2020;


app.get('/', (req, res) => {
  console.log('hello everybody!!!!');
  res.send('Yes it works!!!')
})

app.listen(PORT, () => console.log(`Express app is listening at http://localhost:${PORT}`))

