'use strict';

// The actual service: will make a call to the api
choral.service('CardSvc', ['$http', function ($http) {

  var y = {
    cards: []
  };
  // Get the cards from the api
  y.getAll = function () {
    return $http.get('/api/cards')
      .success(function (data) {
        angular.copy(data, y.cards);
    });
  };
  // uses router.post in index.js to card a new card model to mongoDB
  // when $http gets success, it adds this card to the card object in local factory
  y.add = function (card) {
    return $http.post('/api/cards', card)
      .success(function (data) {
        y.cards.push(data);
    });
  };

  y.like = function (card) {
    return $http.put('/api/cards/' + card._id + '/likes')
      .success(function (data) {
        card.likes += 1;
      });
  };

  y.dislike = function (card) {
    return $http.put('/api/cards/' + card._id + '/dislikes')
      .success(function(data) {
        card.likes -= 1;
      });
  };

  // grab a single card from server
  y.get = function (id) {
    return $http.get('/api/cards/' + id)
      .then(function (res) {
        return res.data;
    });
  };

  y.addComment = function (id, comment) {
      return $http.post('/api/cards/' + id + '/comments', comment)
        .success(function () {
          console.log('Added comment');
        })
  };

  y.likeComment = function (card, comment) {
    return $http.put('/api/cards/' + card._id + '/comments/' + comment._id + '/likes')
      .success(function (data) {
        comment.likes += 1;
      });
  };

  y.dislikeComment = function (card, comment) {
    return $http.put('/api/cards/' + card._id + '/comments/' + comment._id + '/dislikes')
      .success(function (data) {
        comment.likes -= 1;
      });
  };
  return y;
}]);
