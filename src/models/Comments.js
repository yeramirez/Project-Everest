var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  user_id: String,
  likes: {type: Number, default: 0},
  card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' }
});

CommentSchema.methods.like = function(cb) {
  this.likes += 1;
  this.save(cb);
};

CommentSchema.methods.dislike = function(cb) {
  this.likes -= 1;
  this.save(cb);
}

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
