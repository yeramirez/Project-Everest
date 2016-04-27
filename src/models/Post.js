'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema ({
	lyrics: String,
	author: String,
	mood: String,
	upvotes: { type: Number, default: 0 },
	date: { type: Date, default: Date.now },
	collab: { type: Boolean, default: true },
	comments: Array
});

var Posts = mongoose.model('Post', PostsSchema);

module.exports = Posts;
