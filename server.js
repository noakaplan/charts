// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
// var db = require('./db.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8000;        // set our port

//MIDDLEWARE API CALLS FOR REQUESTS

app.use(function(req,res) {
  //Do Logging on Every Request
  console.log('Something is happening');
});

//Test Ticker
app.get('/test', function (req,res) {
res.json({"message": "hello world"})

});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);





