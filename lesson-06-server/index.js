const express = require('express');
const app = express();
const {countChars} = require('./utils');

app.get('/', (req, res) => {
  res.send("Hi, I'm fine");
});

app.get('/countingChars/:word', (req, res) => {
  const {word} = req.params;
  const result = countChars(word);
  res.send(result);
});


app.listen(3000)
