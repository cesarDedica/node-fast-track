const express = require('express');
const app = express();
const {countChars, summary} = require('./utils');

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hi, I'm fine");
});

app.get('/countingChars/:word', (req, res) => {
  const {word} = req.params;
  const result = countChars(word);
  res.send(result);
});

app.post('/summary', (req, res) => {
  const {data} = req.body;
  res.send(summary(data));
});


app.listen(3000)
