'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema ({
	lyrics: String,
	author: String,
	mood: String,
  following: {type: Boolean, default: false},
	upvotes: { type: Number, default: 0 },
	created: { type: Date, default: Date.now },
	collab: { type: Boolean, default: false },
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

var Card = mongoose.model('Card', CardSchema);

module.exports = Card;
