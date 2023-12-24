const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up static file serving for the 'public' directory

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});
  console.log("There's no error")