'use strict';

var express = require('express');
var posts = require('../../mock/todos.json');

var router = express.Router();

router.get('/posts', function(req, res) {
	res.json({posts: posts});
})

module.exports = router;