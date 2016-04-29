'use strict';

console.log('User Service Loaded');

choral.service('UserSvc', function ($http) {
	this.fetch = function () {
		return $http.get('/users');
	};

	this.add = function (user) {
		return $http.post('/users', user);
	};
});