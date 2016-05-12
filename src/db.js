'use strict';
var mongoose = require('mongoose');

// make the connection to your db
mongoose.connect(process.env.MONGODB_URI);

//check the connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function() {
	console.log('We are connected to test!');
});

module.exports = db;
