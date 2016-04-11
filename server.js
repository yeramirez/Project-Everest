'use strict';

// Choral Application: Server

// application dependencies
var express = require('express');
var router = require('./src/api');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use('/', express.static('public'));

app.use('/api', router);
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/landing', function (req, res) {
  res.render('landing.html');
});

app.get('/index', function (req, res) {
  res.render('index.html');
});

app.get('/dashboard', function (req, res) {
	res.render('views/dashboard.html');
});

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

mongoose.connect('mongodb://localhost/choralapp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '))
db.once('open', function() {
	console.log('We are connected!');
});

app.listen(5000, function() {
	console.log('Hello, coming in from Orlando on port 5000!');
})