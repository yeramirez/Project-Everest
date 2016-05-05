'use strict';

choral.factory('cards', function ($http) {
	return $http.get('http://localhost:5000/api/cards')
	.success(function (data) {
		return data;
	})
	.error(function (err) {
		return err;
	})
});
