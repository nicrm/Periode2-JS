var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/', function (req, res, next) {
  res.render('joke', { title: 'joke', joke: jokes.getRandomJoke() });
});

module.exports = router;
