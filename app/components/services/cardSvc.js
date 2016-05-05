'use strict';

// Making sure it loads
console.log('service loaded');

// The actual service: will make a call to the api
choral.service('CardSvc', function ($http) {
	this.getCards = function () {
		return $http.get('/api/cards');
	};

	this.add = function (card) {
		return $http.post('/api/cards', card);
	};

	this.delete = function (card) {
		return $http.delete('/api/cards', card);
	};
});
