'use strict';

if (!process.env.PORT) {
  require('dotenv').config();
};
// dotenv.load();
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var http = require('http');
var jwt = require('express-jwt');

var app = express();

var authCheck = jwt({
  secret: new Buffer(process.env.AUTH_SECRET, 'base64'),
  audience: process.env.AUTH_AUDIENCE
});

app.use(morgan('dev'));
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents
app.use('/node_modules',  express.static(__dirname + '/node_modules')); // Use Node Modules

app.use(express.static(__dirname + '/app'));
app.set('views', __dirname + '/app/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//routes
var cards = require('./src/api/cards.controller.js');
app.use('/api/cards', authCheck, cards);

// listen on $PORT or 3000
// this makes the app work on heroku
var port = process.env.PORT || 5000;

http.createServer(app).listen(port, function (err) {
  console.log('Yello! Coming at you with ' + port + ' hugs!');
});
