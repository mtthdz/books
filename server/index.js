const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();

// dummy data
const books = [];

// CRUD functions
// always place body-parser before CRUD to enable the middleware
// urlencoded extracts form element data and adds to req.body
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('She works!')
});

app.get('/api/books/all', (req, res) => {
  console.log('calling for all books');
  res.json(books);
})

app.post('/api/books/add', (req, res) => {
  const newBook = req.body.book;
  console.log(newBook);
  books.push(newBook);
  res.json('book added');
})

// run
app.listen(port);

console.log(`currently listening on port ${port}.`);
