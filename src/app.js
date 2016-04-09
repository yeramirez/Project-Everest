'use strict';

// Choral Application: Server

// application dependencies
var express = require('express');
var router = require('./api');
var app = express();
var mongoose = require('mongoose');
require('../models/Cards');
require('../models/Comments');

app.use('/', express.static('public'));

app.use('/api', router);

mongoose.connect('mongodb://localhost/test');

app.listen(5000, function() {
	console.log('Hello, coming in from Orlando on port 5000!');
})