'use strict';
console.log('MainCtrl loaded');

choral.controller('MainCtrl', ['$scope', 'cards', function ($scope, cards, auth, $mdOpenMenu) {
	cards.success(function (data) {
		$scope.posts = data;
	});

	$scope.addOne = function(posts) {
		// adds one
		posts.upvotes += 1;
	};
}]);
