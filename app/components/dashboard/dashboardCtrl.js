'use strict';
console.log('DashboardCtrl loaded');

choral.controller('DashboardCtrl', ['$scope', 'cards', function ($scope, cards, auth, $mdOpenMenu) {
	cards.success(function (data) {
		$scope.posts = data;
	});

	$scope.addOne = function(posts) {
		// adds one
		posts.upvotes += 1;
	};
}]);
