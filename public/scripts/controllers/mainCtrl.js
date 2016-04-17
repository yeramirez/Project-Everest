'use strict';
console.log('MainCtrl loaded');

choral.controller('MainCtrl', ['$scope', 'cards', function ($scope, cards) {
	cards.success(function (data) {
		$scope.posts = data;
	})
}]);