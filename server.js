const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up static file serving for the 'public' directory

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/public', function(req, res) {
  res.sendFile(path.join(__dirname, './public.html'));
});

app.get('/register', function(req, res) {
  res.sendFile(path.join(__dirname, './register.html'));
});



app.listen(port, () => {
  console.log('Server started at http://localhost:' + port);
});