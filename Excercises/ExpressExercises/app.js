var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.send('go to http://localhost:3000/api/calculator/ "operation" / "number"/ "number"  ');
});

app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next) {
  var calcu = {
      operation: req.params.operation,
      n1: Number(req.params.n1),
      n2: Number(req.params.n2)
  };
  let opera;
  let result;
  switch (calcu.operation) {
      case 'add':
          result = calcu.n1 + calcu.n2;
          opera = '+';
          break;
      case 'multiply':
          result = calcu.n1 * calcu.n2;
          opera = '*';
          break;
      case 'divide':
          result = calcu.n1 / calcu.n2;
          opera = '/';
          break;
      case 'minus':
          result = calcu.n1 - calcu.n2;
          opera = '-';
          break;
      default:
          result = 'invalid operation';
          opera = 'invalid';
          break;
  }
  req.calculation = `The result of: ${calcu.n1} ${opera} ${calcu.n2} is: ${result}`;
  next();
  console.log("got called");
});

app.get("/api/calculator/*", function (req, res) {
  res.send(req.calculation);
});

app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
});