
const express = require('express');
const _ = require('lodash');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is a vulnerable Node.js project!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
