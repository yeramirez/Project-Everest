'use strict';

var express = require('express');

var app = express();
var router = require('./api');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(5000, function() {
	console.log('Hello, coming in from Orlando on port 5000!');
})