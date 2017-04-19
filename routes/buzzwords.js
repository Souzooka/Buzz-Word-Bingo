const express = require('express');
const router = express.Router();

function isValidNewBuzzword(buzzword) {
  // Just a simple check to check if these properties exist
  return (buzzword.buzzWord && buzzword.points);
}

function addBuzzword(req) {
  const buzzwords = req.app.get('buzzwords');
  buzzwords.buzzwords.push({"buzzword": req.body.buzzWord,
                            "points": req.body.points});
}

router.route('/')
      .get((req, res) => {
        res.send(req.app.get('buzzwords'));
      })
      .post((req, res) => {
        if (isValidNewBuzzword(req.body)) {
          addBuzzword(req);
          res.send({"success": true});
        } else {
          res.send({"success": false});
        }
      });

module.exports = router;