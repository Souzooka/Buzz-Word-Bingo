const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.js');

const rootDir = 'public';

// Serve files from the public directory
app.use(express.static(rootDir));

// parse application/x-www-form-urlencoded
// attach to req.body
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use(rootDir, indexRoutes);

  // 404 Route
app.get('*', (req, res) => {
  res.status(404);
  res.sendFile(`${rootDir}/404.html`, {root: './'});
});

// Initialize server
const server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});

// For testing
module.exports = server;