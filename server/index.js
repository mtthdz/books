const express = require('express');
const path = require('path');

// app
const app = express();

app.get('/test', (req, res) => {
  res.send('She works!')
})


// port setup
const port = process.env.PORT || 8080;
app.listen(port);

console.log(`currently listening on port ${port}.`);
