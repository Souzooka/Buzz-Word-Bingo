const express = require('express');
const router = express.Router();

let buzzwords = {'buzzwords': []};

router.route('/')
      .get((req, res) => {
        console.log('test')
        res.send(buzzwords);
      });

module.exports = router;