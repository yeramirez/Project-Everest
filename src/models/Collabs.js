var mongoose = require('mongoose');

var CollabSchema = new mongoose.Schema({
  body: String,
  author: String,
  user_id: String,
  likes: {type: Number, default: 0},
  card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' }
});

CollabSchema.methods.like = function(cb) {
  this.likes += 1;
  this.save(cb);
};

CollabSchema.methods.dislike = function(cb) {
  this.likes -= 1;
  this.save(cb);
}

var Collab = mongoose.model('Collab', CollabSchema);

module.exports = Collab;
