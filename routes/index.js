const express = require('express');
const router = express.Router();

// If an empty URI GET is requested
// serve index.html
router.route('/')
      .get((req, res) => {
        res.sendfile('index.html');
      });

module.exports = router;