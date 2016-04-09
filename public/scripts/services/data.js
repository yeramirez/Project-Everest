'use strict';

var choral = angular.module('choralApp')

choral.service('dataService', function() {
	this.getLikes = function(cb) {
		$http.get('/api/todos').then(cb);
	}
})