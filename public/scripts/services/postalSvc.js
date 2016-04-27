'use strict';

// Making sure it loads
console.log('service loaded');

// The actual service: will make a call to the api
choral.service('PostSvc', function ($http) {
	this.fetch = function () {
		return $http.get('/api/posts');
	};

	this.add = function (post) {
		return $http.post('/api/posts', post);
	};

	this.delete = function (post) {
		return $http.delete('/api/posts', post);
	};
});