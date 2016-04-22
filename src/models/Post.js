'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema ({
	lyrics: String,
	author: String,
	mood: String,
	upvotes: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
	date: { type: Date, default: Date.now },
	collab: { type: Boolean, default: true }
});

var Posts = mongoose.model('Post', PostsSchema);

module.exports = Posts;
