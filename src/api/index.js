'use strict';

var express = require('express');
var posts = require('../../mock/todos.json');

var router = express.Router();

router.get('/posts', function (req, res) {
	res.json({posts: posts});
});

router.get('/users', function (req, res) {
	res.json({users: users});
})

module.exports = router;