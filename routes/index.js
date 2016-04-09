'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Card = mongoose.model('Card');
var Comment = mongoose.model('Comment');

router.get('/posts', function(req, res, next) {
	Card.find(function(err, cards){
		if(err) {
			return next(err);
		}
		res.json(cards);
	});
});

router.post('/posts/', function(req, res, next) {
	var card = new Card(req.body);

	card.save(function (err, card){
		if (err){
			return next(err);
		}

		res.json(post);
	});
});