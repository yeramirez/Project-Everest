'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a new schema
var CardSchema = new Schema ({
	lyrics: String,
	author: String,
	mood: String,
  user_id: String,
	likes: { type: Number, default: 0 },
	created: { type: Date, default: Date.now },
	collabs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collab'}]
});

CardSchema.methods.like = function(cb) {
  this.likes += 1;
  this.save(cb);
};

CardSchema.methods.dislike = function(cb) {
  this.likes -= 1;
  this.save(cb);
}

// Create a model out of the schema
var Card = mongoose.model('Card', CardSchema);

module.exports = Card;
