var favicon   = require('serve-favicon');
var path      = require('path');
var express   = require('express');
var logger    = require('morgan');
var bodyPar   = require('body-parser');
var cookiePar = require('cookie-parser');

var app       = express();

app.set('views', path.join(__dirname, 'views'));//Actually the default view folder
app.set('view engine', 'jade');//allow us to leave out the extension

app.use(cookiePar());
app.use(express.static(path.join(__dirname, 'public')));

var names     = [];

app.use(favicon(path.join(__dirname, 'public','images','QoB.png')));
app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyPar.urlencoded({ extended: false }));
// parseing json
app.use(bodyPar.json());
// what it does when hitting the root web
app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
  // res.send('hello world or noot noot');
  // throw new Error("fuck");
});
app.get('/form', function (req, res) {
  res.send("Hi: "+names.join(",")+"<form method='post'><input name='name'></form>");
});
// handle the post req res from form
app.post('/form', function (req, res) {
  names.push(req.body.name);
  res.redirect('/form');
});
// handle the post-json req res from form
app.post('/names', function (req, res) {
  names.push(req.body); //We receive it as a JavaScript object
  console.log(JSON.stringify(req.body)); 
  res.redirect('/form');
});
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);  //Make sure you understand this line
});
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.stack + "</p>");
  });
}
//Will not print stacktrace
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.message + "</p>");
});
module.exports= app;