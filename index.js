const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Getting api endpoing as /shout?name={name}
app.get('/shout', (req, res) => {
  res.send(req.query.name.toUpperCase());
});
// Getting api endpoing as /fullname?firstname={firstname}&lastname={lastname}
app.get('/fullname', (req, res) => {
  res.send(req.query.firstname + ' ' + req.query.lastname);
});
// Getting api endpoing as /date?month={month}&year={year}
app.get('/date', (req, res) => {
  res.send(req.query.month + ', ' + req.query.year);
});
// Getting api endpoing as /greet?name={name}
app.get('/greet', (req, res) => {
  res.send('Namaste, ' + req.query.name + '!');
});
// Getting api endpoing as /address?street={street}&city={city}&state={state}
app.get('/address', (req, res) => {
  res.send(req.query.street + ', ' + req.query.city + ', ' + req.query.state);
});
// Getting api endpoing as /email?username={username}&domain={domain}
app.get('/email', (req, res) => {
  res.send(req.query.username + '@' + req.query.domain);
});
// It is used to make this endpoing listen to the below port, here itis 3000.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
