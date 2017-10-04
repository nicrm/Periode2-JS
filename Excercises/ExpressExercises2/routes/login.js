var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/', function (req, res, next) {
  res.render('login', { title: 'login' });
});

router.post('/', function (req, res) {
  res.redirect('/');
});

module.exports = router;
