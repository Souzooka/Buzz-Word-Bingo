const express = require('express');
const router = express.Router();

function isValidNewBuzzword(req) {
  // Just a simple check to check if these properties exist
  return (req.body.buzzWord && req.body.points);
}

function addBuzzWord(req) {
  const buzzWords = req.app.get('buzzWords');
  buzzWords.buzzWords.push({"buzzWord": req.body.buzzWord,
                            "points": req.body.points});
}

function findBuzzWordIndex(req) {
  const buzzWordsObj = req.app.get('buzzWords');
  return buzzWordsObj.buzzWords.findIndex((obj) => {
    return obj.buzzWord === req.body.buzzWord;
  });
}

function updateBuzzWordAndScore(req, buzzWordIndex, score) {
  const buzzWordObj = req.app.get('buzzWords').buzzWords[buzzWordIndex];

  if (!buzzWordObj.heard) {
    score += buzzWordObj.points;
  }
  buzzWordObj.heard = req.body.heard;
  req.app.set('score', score);
}

function deleteBuzzWord(req, buzzWordIndex) {
  const buzzWordsArr = req.app.get('buzzWords').buzzWords;
  buzzWordsArr.splice(buzzWordIndex, 1);
}

function stringToBoolean(str) {
  switch (str.toLowerCase()) {
    case 'true': {
      return true;
    }
    case 'false': {
      return false;
    }
    default: {
      return undefined;
    }
  }
}

router.route('/')
      .post((req, res) => {
        if (isValidNewBuzzword(req)) {
          addBuzzWord(req);
          res.send({"success": true});
        } else {
          res.status(400);
          res.send({"success": false});
        }
      })
      .put((req, res) => {
        const buzzWordIndex = findBuzzWordIndex(req);
        let score = req.app.get('score');
        req.body.heard = stringToBoolean(req.body.heard);

        if (buzzWordIndex !== -1 && req.body.heard !== undefined) {
          updateBuzzWordAndScore(req, buzzWordIndex, score);
          res.send({"success": true});
        } else {
          res.status(400);
          res.send({"success": false});
        }
      })
      .delete((req, res) => {
        const buzzWordIndex = findBuzzWordIndex(req);
        if (buzzWordIndex === -1) {
          res.status(400);
          res.send({"success": false});
        } else {
          deleteBuzzWord(req, buzzWordIndex);
          res.send({"success": true});
        }
      });

module.exports = router;