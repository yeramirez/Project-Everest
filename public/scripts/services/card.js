'use strict';

choral.factory('cards', ['$http', function ($http) {
	return $http.get('http://localhost:5000/api/posts')
	.success(function (data) {
		return data;
	})
	.error(function (err) {
		return err;
	})
}])