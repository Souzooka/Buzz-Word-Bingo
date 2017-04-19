const express = require('express');
const router = express.Router();

function deleteAllBuzzWordsAndScore(req) {
  const buzzWordsArr = req.app.get('buzzWords').buzzWords;
  buzzWordsArr.splice(0, buzzWordsArr.length);
  req.app.set('score', 0);
}

router.route('/')
      .post((req, res) => {
        if (req.body.reset === 'true') {
          deleteAllBuzzWordsAndScore(req);
          res.send({success:true});
        } else {
          res.send({success:false});
        }
      });

module.exports = router;