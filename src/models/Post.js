'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema ({
	lyrics: String,
	author: String,
	mood: String
	upvotes: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
	date: { type: Date, default: Date.now },
	collab: { type: Boolean, default: true }
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
