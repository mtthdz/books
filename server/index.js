const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

// app
const books = [
  { name: "nice", author: "me" },
  { name: "dope", author: "also me" },
]

const app = express();

app.get('/test', (req, res) => {
  res.send('She works!')
  res.json(books)
})


// run
app.listen(port);

console.log(`currently listening on port ${port}.`);
