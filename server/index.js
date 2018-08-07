const express = require('express');
const axios = require('axios');
const data = require('./db');

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.get('/', (req, res) => {
  console.log("=======Request Received!=======")
  res.end();
})

app.get('/dj', (req, res) => {
  res.send(data.dj.youtube);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("Im listening on port " + PORT));
