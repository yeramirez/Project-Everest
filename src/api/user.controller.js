'use strict';

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db = require('../db');
var User = require('../models/Users.js');

router.get('/', function (req, res, next) {
	User.find()
	.exec(function(err, users) {
		if (err) return next(err);
		res.json(users);
	});
});

router.post('/', function (req, res, next) {
	var user = new User({
			lyrics: req.body.lyrics,
			author: req.body.author,
			mood: req.body.mood
		});
	
	user.save(function(err, user) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log(`added ${user.name}`);
	});
});

router.delete('/:id', function (req, res, next) {
	User.find(req.params.id, function (err, user) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log('Deleted User Successfully!');
	});
});

module.exports = router;