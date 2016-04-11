'use strict'

var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
	lyrics: String,
	link: String,
	upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

var Card = mongoose.model('Card', CardSchema);

module.exports = Card;