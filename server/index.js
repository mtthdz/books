const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();

// dummy data
const books = [
  { name: "nice", author: "me" },
  { name: "dope", author: "also me" },
]

// CRUD
// always place body-parser before CRUD to enable the middleware
// urlencoded extracts form element data and adds to req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('She works!')
});

app.post('/', (req, res) => {
  console.log(nice);
})


// run
app.listen(port);

console.log(`currently listening on port ${port}.`);
