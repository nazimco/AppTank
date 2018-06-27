const express = require('express');
const axios = require('axios');
const data = require('./db');

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.get('/', (req, res) => {
  res.end();
})

app.get('/dj', (req, res) => {
  res.send(data.dj.youtube);
})

app.listen(5000, () => console.log("Im listening on port 5000"));
