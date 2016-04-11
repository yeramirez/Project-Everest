'use strict';

// Choral Application: Server

// application dependencies
var express = require('express');
var router = require('./src/api');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Route to our api
app.use('/api', router);

// Spit out useful information
app.use(morgan('dev'));

//Use the static directory of publc
app.use(express.static(__dirname + '/public'));

// Use views for our views
app.set('views', __dirname + '/public');

//Use html instead of ejs!!! YAS GIRL!
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// use the body parser stated above :-)
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/api/todos', function (req, res, next) {
	Todo.find()
	.exec(function(err, todos) {
		if (err) return next(err);
		res.json(todos);
	});
});

app.post('/api/todos', function (req, res, next) {
	var todo = new Todo({title: req.body.title});
	todo.save(function(err, todo) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log(`added ${todo.title}`);
	});
});

app.delete('/api/todos/:id', function (req, res, next) {
	Todo.find(req.params.id, function (err, todo) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log('Deleted Successfully!');
	});
});

// Connect to the database named choralapp
mongoose.connect('mongodb://localhost/choralapp');

// Console out the connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '))
db.once('open', function() {
	console.log('We are connected!');
});

// Shh, the port is listening... :-)
app.listen(5000, function() {
	console.log('Hello, coming in from Orlando on port 5000!');
})