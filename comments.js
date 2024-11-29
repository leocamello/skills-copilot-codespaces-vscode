// Create web server
const express = require('express');
const app = express();

// Create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is a route for comments');
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});