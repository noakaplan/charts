// call the packages we need for server
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');

//Call EthScan.io Packages
var ethCred = require('./ethCred.json');
var ethToken = ethCred.ethScanToken;
var api = require('etherscan-api').init(ethToken);
var address = require('./testAddr.json');

//Call Passwords (DON'T LIST THESE FILES ON GITHUB)

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8000;        // set our port

//---ETHSCAN.IO API STUFF--//

var balance = api.account.balance(address[0].location);
balance.then(function(balanceData){
console.log(address[0].name + ': ' + (balanceData.result/address[0].decimals));
  // console.log(balanceData);
});

//MIDDLEWARE API CALLS FOR REQUESTS

app.use(function(req,res,next) {
  //Do Logging on Every Request
  console.log('Something is happening');
  next();
});

//Test Connection
app.use('/test', function(req, res, next) {
    // Do Logging on every request
    console.log('test test test');
    res.json({message:"success bitch"});
    next();
});

app.get('/apiKey', function(req,res) {
	res.json({message:ethToken});
})

app.get('/ethInfo', function(req,res) {
	res.json({name:address[0].name, location:address[0].location, decimals:address[0].decimals});
})

app.get('/ethTokenInfo', function(req,res) {
	 var reg = new RegExp('/contract/');
	 var tokensToSend = [];
	

for (item of address) {
	var reg = new RegExp('contract', 'm');
	if(reg.test(item.type)) {
		tokensToSend.push(item);
	}
}

	 res.json(tokensToSend);
})



// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);





