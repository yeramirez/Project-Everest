'use strict';

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Card = require('../models/Card.js');
var Comments = require('../models/Comments.js');
var db = require('../db');

router.get('/', function (req, res, next) {
	Card.find(function (err, cards) {
    if(err) {
      return next(err);
    }
    res.json(cards);
  });
});

router.get('/:id', function (req, res, next) {
	Card.find(req.params.id, function (err, card) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log('Found Successfully!');
	});
});

router.post('/', function (req, res, next) {
  console.log("---------- The Body ----------");
  console.log(req.body);
	var card = new Card({
			lyrics: req.body.lyrics,
			author: req.body.author,
			mood: req.body.mood,
      collab: req.body.collab
		});

	card.save(function(err, card) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log(`added ${card.lyrics}`);
	});
});

router.delete('/:id', function (req, res, next) {
	Card.find(req.params.id, function (err, card) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log('Deleted Successfully!');
	});
});

module.exports = router;
