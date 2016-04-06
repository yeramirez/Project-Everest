'use strict';

angular.module('choralApp')
.service('dataService', function() {
	this.getLikes = function(cb) {
		$http.get('/api/todos').then(cb);
	}
})