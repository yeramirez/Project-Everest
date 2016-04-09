var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
	lyrics: String,
	link: String,
	upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Card', CardSchema);