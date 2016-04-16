'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan')

var app = express();

app.use(morgan('dev'));

// make the connection to your db
mongoose.connect('mongodb://localhost/test');

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

// create a database model
var Post = mongoose.model('Post', {
	lyrics: String,
	author: String
});

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
			author: req.body.author
		});
	
	post.save(function(err, post) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log(`added ${post.title}`);
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