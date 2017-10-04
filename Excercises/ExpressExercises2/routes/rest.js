
var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/joke/random', function (req, res, next) {
  res.json(jokes.getRandomJoke());
});
router.get('/jokes', function (req, res, next) {
  res.json(jokes.allJokes);
});
router.post('/joke', function (req, res, next) {
  if (req.body.joke) {
    jokes.addJoke(req.body.joke);
    res.send('OK');
  } else {
    res.send('FUCK');
  }
});

module.exports = router;



