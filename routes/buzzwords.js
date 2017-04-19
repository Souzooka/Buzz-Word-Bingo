const express = require('express');
const router = express.Router();

router.route('/')
      .get((req, res) => {
        res.send(req.app.get('buzzwords'));
      });

module.exports = router;