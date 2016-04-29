'use strict';

require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var http = require('http');

var app = express();

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
var posts = require('./src/api/posts.controller.js');
var users = require('./src/api/user.controller.js');
app.use('/api/posts', posts);
app.use('/api/users', users);



// listen on $PORT or 3000
// this makes the app work on heroku
var port = process.env.PORT || 5000;

http.createServer(app).listen(port, function (err) {
  console.log('Coming to you from Orlando from port ' + port);
});