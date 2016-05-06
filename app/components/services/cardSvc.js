'use strict';

// The actual service: will make a call to the api
choral.service('CardSvc', function ($http) {

  // Get the cards from the api
	this.get = function () {
    return $http.get('http://localhost:5000/api/cards')
  	.success(function (data) {
  		return data;
  	})
  	.error(function (err) {
  		return err;
  	})
	};

  // Add the cards to the api
	this.add = function (card) {
		return $http.post('/api/cards', card);
	};

  // Delete the card from the api
	this.delete = function (card) {
		return $http.delete('/api/cards', card);
	};
});
