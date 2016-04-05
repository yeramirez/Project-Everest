'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

app.get('/todos', function(req, res) {
	res.send('These are the to-do\'s');
})

app.listen(5000, function() {
	console.log("Hello, coming in from Orlando on port 5000!");
})