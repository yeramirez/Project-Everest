'use strict'

var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
	name: String
});

var Users = mongoose.model('User', UsersSchema);

module.exports = Users;