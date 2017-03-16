var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend :false}));

app.get('/', function (req, res) {
	res.send('Hello World');
})

app.listen(3000);
console.log('Server is running on port 3000');