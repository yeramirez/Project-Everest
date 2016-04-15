'use strict';

// Make sure it's loaded
console.log('Loaded the DataService');

// Get the items at this endpoint
choral.service('dataService', function() {
	this.getLikes = function(cb) {
		$http.get('/api/posts').then(cb);
	}
})