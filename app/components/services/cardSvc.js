'use strict';

// The actual service: will make a call to the api
choral.service('CardSvc', ['$http', 'auth', function ($http, auth) {

  var y = { // for yanely
    cards: [],
    users: []
  };

  // Get the cards from the api
  y.getAll = function () {
    // pulling from /api/cards and returning values
    return $http.get('/api/cards')
      .success(function (data) {
        angular.copy(data, y.cards);
    });
  };

  // uses router.post in index.js to create a new card model to mongoDB
  y.add = function (card) {
    // pullling from /api/cards/1234 (example num)
    return $http.post('/api/cards', card)
      // when $http is successful, it adds this card to the card object in array
      .success(function (data) {
        y.cards.push(data);
    });
  };

  y.getUser = function (nickname) {
    return $http.get('/api/user/' + nickname)
  };

  y.like = function (card) {
    // pulling from /api/cards/1234/likes
    return $http.put('/api/cards/' + card._id + '/likes')
      // on success add it brotha
      .success(function (data) {
        card.likes += 1;
      });
  };

  // y.dislike = function (card) {
  //   return $http.put('/api/cards/' + card._id + '/dislikes')
  //     .success(function(data) {
  //       card.likes -= 1;
  //     });
  // };

  // grab a single card from server
  y.get = function (id) {
    return $http.get('/api/cards/' + id)
      .then(function (res) {
        return res.data;
    });
  };

  // add a collaboration to the post
  y.addCollab = function (id, collab) {
      // pulling from /api/cards/1234/collabs
      return $http.post('/api/cards/' + id + '/collabs', collab)
        .success(function () {
          // confirms that the collaborations has been added
          console.log('Added collaboration!');
        })
  };

  // like a collaboration on a post
  y.likeCollab = function (card, collab) {
    // same as card => /api/cards/1234/collabs/1234/likes
    return $http.put('/api/cards/' + card._id + '/collabs/' + collab._id + '/likes')
      // another one
      .success(function (data) {
        collab.likes += 1;
      });
  };

  // y.dislikeCollab = function (card, collab) {
  //   return $http.put('/api/cards/' + card._id + '/collabs/' + collab._id + '/dislikes')
  //     .success(function (data) {
  //       collab.likes -= 1;
  //     });
  // };
  // and most importantly
  return y;
}]);
