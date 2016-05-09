'use strict';

if (!process.env.PORT) require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Card = require('../models/Card.js');
var Comments = require('../models/Comments.js');
var db = require('../db');
var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer(process.env.AUTH_SECRET, 'base64'),
  audience: 'Cc17tiuA3SGvx4NR3OHztSuXXKKZlRmU'
});

router.get('/', function (req, res, next) {
	Card.find(function (err, cards) {
    if(err) {
      return next(err);
    }
    res.json(cards);
  });
});

router.post('/', authCheck, function (req, res, next) {
  console.log("---------- The Body ----------");
  console.log(req.body);

  if (req.body.lyrics) {
    var card = new Card({
  			lyrics: req.body.lyrics,
  			author: req.body.author,
  			mood: req.body.mood,
        user_id: req.body.user_id
  		});

  	card.save(function(err, card) {
  		if (err) return next(err);
  		res.sendStatus(201);
  		console.log(`added ${card.lyrics}`);
  	});
  } else {
    console.log('Sorry, nothing was entered.');
  }

});

// router.delete('/:id', function (req, res, next) {
// 	Card.find(req.params.id, function (err, card) {
// 		if (err) return next(err);
// 		res.sendStatus(201);
// 		console.log('Deleted Successfully!');
// 	});
// });

// router.get('/:id', function(req, res, next) {
//   console.log(req.body);
//   // get the user starlord55
//   Card.find({ _id: req.body.id }, function(err, id) {
//     if (err) throw err;
//     // object of the user
//     console.log(id);
//   });
// })

router.param('card', function(req, res, next, id) {
  var query = Card.findById(id);

  query.exec(function (err, card){
    if (err) { return next(err); }
    if (!card) { return next(new Error("can't find card")); }

    req.card = card;
    return next();
  });
});

/////////

router.param('comment', function(req, res, next, id) {
  var query = Comment.findById(id);

  query.exec(function (err, comment){
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find comment")); }

    req.comment = comment;
    return next();
  });
});

router.get('/:card', function(req, res, next) {
  req.card.populate('comments', function(err, card) {
    res.json(card);
  });
});

router.put('/:card/upvote', function(req, res, next) {
  req.card.upvote(function(err, card){
    if (err) { return next(err); }
    res.json(card);
  });
});

router.put('/:card/downvote', function(req, res, next) {
  req.card.downvote(function(err, card){
    if (err) { return next(err); }
    res.json(card);
  });
});

router.post('/:card/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.card = req.card;

  comment.save(function(err, comment){
    if(err){ return next(err); }

    req.card.comments.push(comment);
    req.card.save(function(err, card) {
      if(err){ return next(err); }

      res.json(comment);
    });
  });
});

router.put('/:card/comments/:comment/upvote', function(req, res, next) {
  req.comment.upvote(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});

router.put('/:card/comments/:comment/downvote', function(req, res, next) {
  req.comment.downvote(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});

module.exports = router;
