'use strict';

// The actual service: will make a call to the api
choral.service('CardSvc', ['$http', function ($http) {

  var x = {
    cards: []
  };
  // Get the cards from the api
  x.getAll = function () {
    return $http.get('/api/cards')
      .success(function (data) {
        angular.copy(data, x.cards);
    });
  };
  // uses router.post in index.js to card a new card model to mongoDB
  // when $http gets success, it adds this card to the card object in local factory
  x.add = function (card) {
    return $http.post('/api/cards', card)
      .success(function (data) {
        x.cards.push(data);
    });
  };

  x.like = function (card) {
    //use express route for this card's id to add like to mongo model
    return $http.put('/api/cards/' + card._id + '/likes')
      .success(function (data) {
        card.votes += 1;
      });
  };

  x.dislike = function (card) {
    return $http.put('/api/cards/' + card._id + '/dislikes')
      .success(function(data) {
        card.votes -= 1;
      });
  };

  // grab a single card from server
  x.get = function (id) {
    return $http.get('/api/cards/' + id)
      .then(function (res) {
        return res.data;
    });
  };

  x.addComment = function (id, comment) {
      return $http.post('/api/cards/' + id + '/comments', comment);
  };

  x.likeComment = function (card, comment) {
    return $http.put('/api/cards/' + card._id + '/comments/' + comment._id + '/likes')
      .success(function (data) {
          comment.votes += 1;
      });
  };

  x.dislikeComment = function (card, comment) {
    return $http.put('/api/cards/' + card._id + '/comments/' + comment._id + '/dislikes')
      .success(function (data) {
        comment.votes -= 1;
      });
  };
  return x;
}]);
