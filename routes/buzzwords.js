const express = require('express');
const router = express.Router();

function isValidNewBuzzword(buzzword) {
  return typeof buzzword.buzzWord === 'string' &&
         typeof buzzword.points === 'number';
}

router.route('/')
      .get((req, res) => {
        res.send(req.app.get('buzzwords'));
      });

module.exports = router;