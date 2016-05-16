'use strict';

if (!process.env.PORT) {
  require('dotenv').config();
}
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Card = require('../models/Card.js');
var Collabs = require('../models/Collabs.js');
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

router.param('card', function(req, res, next, id) {
  var query = Card.findById(id);

  query.exec(function (err, card){
    if (err) {
      return next(err);
    }
    if (!card) {
      return next(new Error("can't find card"));
    }

    req.card = card;
    return next();
  });
});

router.param('user', function(req, res, next, nickname) {
  var query = Card.find({ author: nickname });

  query.exec(function (err, card){
    if (err) {
      return next(err);
    }
    if (!card) {
      return next(new Error("can't find card"));
    }

    req.card = card;

    return next();
  });
});

router.get('/user/:user', function (req, res) {
  res.json(req.card);
});

router.param('collab', function(req, res, next, id) {
  var query = Collabs.findById(id);

  query.exec(function (err, collab){
    if (err) { return next(err); }
    if (!collab) { return next(new Error("We're sorry, that collaboration does not exist.")); }

    req.collab = collab;
    return next();
  });
});

router.get('/:card', function(req, res, next) {
  req.card.populate('collabs', function(err, card) {
    res.json(card);
  });
});

router.put('/:card/likes', function(req, res, next) {
  req.card.like(function(err, card){
    if (err) { return next(err); }
    res.json(card);
  });
});

router.get('/:card/likers', function(req, res, next) {
  req.card.populate('likers', function(err, card) {
    res.json(card.likers);
  });
});

router.put('/:card/dislike', function(req, res, next) {
  req.card.dislike(function(err, card){
    if (err) { return next(err); }
    res.json(card);
  });
});

router.post('/:card/collabs', function(req, res, next) {
  var collab = new Collabs(req.body);
  collab.card = req.card;

  collab.save(function(err, collab){
    if(err){ return next(err); }

    req.card.collabs.push(collab);
    req.card.save(function(err, card) {
      if(err){ return next(err); }

      res.json(collab);
    });
  });
});

router.put('/:card/collabs/:collab/likes', function(req, res, next) {
  req.collab.like(function(err, collab){
    if (err) { return next(err); }

    res.json(collab);
  });
});

router.put('/:card/collabs/:collab/dislikes', function(req, res, next) {
  req.collab.dislike(function(err, collab){
    if (err) { return next(err); }

    res.json(collab);
  });
});

module.exports = router;
