'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema ({
	lyrics: String,
	author: String,
	mood: String,
	upvotes: { type: Number, default: 0 },
	date: { type: Date, default: Date.now },
	collab: { type: Boolean, default: true },
	comments: Array
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
