'use strict';

if (!process.env.PORT) require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('../models/Users.js');
var Comments = require('../models/Comments.js');
var db = require('../db');

router.post('/', function (req, res, next) {
  console.log("---------- The Body ----------");
  console.log(req.body);

  var user = new User();

	user.save(function(err, card) {
		if (err) return next(err);
		res.sendStatus(201);
		console.log(`added ${user.lyrics}`);
	});
});

module.exports = router;
