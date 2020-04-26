const express = require('express');
const app = express();
const port = 3000;
const db = require('./db.js');
// app.use(express.static('public'));



app.get('/', (req, res) => {

    res.send('hi')
})

app.post('/', (req.res) => {
  //set userData variable using req.body
  //first check if user.email exists
  //if it exists, post will update record
  //if it does not exist, post will save a new user
  db.saveNewUser(newUser, (err) => {
    if (err) {
      console.error(err)
      res.sendStatus(500);
    } else {
      res.redirect('/');
      res.sendStatus(201);
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))

