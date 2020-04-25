const express = require('express');
const app = express();
const PORT = 2020;

app.get('/', (req, res) => {
  res.send("Hello everybody!!!")
})

app.listen(PORT, () => console.log(`Express app is listening at http://localhost:${PORT}`))

