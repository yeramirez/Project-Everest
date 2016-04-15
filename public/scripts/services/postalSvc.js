'use strict';

// Making sure it loads
console.log('service loaded');

// The actual service: will make a call to the api
choral.service('PostSvc', function ($http) {
	this.add = function (post) {
		return $http.post('/api/posts', post);
	};
});