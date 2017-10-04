var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/', function (req, res, next) {
  res.render('jokes', { title: 'jokes', jokes: jokes.allJokes });
});

module.exports = router;
