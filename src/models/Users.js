'use strict';

// Require our mongoose connection
var mongoose = require('mongoose');
// Set our schema to a var for easy access
var Schema = mongoose.Schema;

// Instantiate a new Schema for the Users
var UserSchema = new Schema ({
	firstname: String,
	lastname: String,
  username: String,
	bio: String,
	points: Number,
	followers: [],
	following: [],
	likes: {},
	isFollowing: { type: Boolean, default: false}
});

// Model compiling using our Schema!
var Users = mongoose.model('User', UserSchema);

// Don't forget to export, always
module.exports = Users;
