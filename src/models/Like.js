var mongoose = require('mongoose');

var LikeSchema = new mongoose.Schema({
  user: String,
  user_id: String,
  card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' }
});

var Like = mongoose.model('Like', LikeSchema);

module.exports = Like;
