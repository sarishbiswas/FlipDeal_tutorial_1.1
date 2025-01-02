const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/shout', (req, res) => {
  res.send(req.query.name.toUpperCase());
});

app.get('/fullname', (req, res) => {
  res.send(req.query.firstname + ' ' + req.query.lastname);
});

app.get('/date', (req, res) => {
  res.send(req.query.month + ', ' + req.query.year);
});

app.get('/greet', (req, res) => {
  res.send('Namaste, ' + req.query.name + '!');
});

app.get('/address', (req, res) => {
  res.send(req.query.street + ', ' + req.query.city + ', ' + req.query.state);
});

app.get('/email', (req, res) => {
  res.send(req.query.username + '@' + req.query.domain);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
