'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var Post = require('./src/models/Post.js');
var Users = require('./src/models/Users.js');

var app = express();

app.use(morgan('dev'));
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents

// make the connection to your db
mongoose.connect('mongodb://localhost/choralapp');

//check the connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function() {
	console.log('We are connected to test!');
});

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/api/posts', function (req, res, next) {
	Post.find()
	.exec(function(err, posts) {
		if (err) return next(err);
		res.json(posts);
	});
});

app.post('/api/posts', function (req, res, next) {
	var post = new Post(
		{
			lyrics: req.body.lyrics,
			author: req.body.author,
			mood: req.body.mood
		});
	
	post.save(function(err, post) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log(`added ${post.lyrics}`);
	});
});

app.delete('/api/posts/:id', function (req, res, next) {
	Post.find(req.params.id, function (err, post) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log('Deleted Successfully!');
	});
});

app.use(express.static('public'));

// listen on $PORT or 3000
// this makes the app work on heroku
app.listen(process.env.PORT || 5000);