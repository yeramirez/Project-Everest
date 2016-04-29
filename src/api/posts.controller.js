'use strict';

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db = require('../db');
var Post = require('../models/Post.js');

router.get('/', function (req, res, next) {
	Post.find()
	.exec(function(err, posts) {
		if (err) return next(err);
		res.json(posts);
	});
});

router.post('/', function (req, res, next) {
	var post = new Post({
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

router.delete('/:id', function (req, res, next) {
	Post.find(req.params.id, function (err, post) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log('Deleted Successfully!');
	});
});

module.exports = router;