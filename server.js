var express = require('express');
var app = express();
const routermembers = require('./routemembers');



app.get('/', function(req, res) {
  res.send('hello world');
});

app.use('/members',routermembers)

app.listen(5000,()=>{
  console.log('http:/localhost:5000');
})