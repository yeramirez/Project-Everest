'use strict';
console.log('DashboardCtrl loaded');

choral.controller('DashboardCtrl', ['$scope', 'cards', 'auth', function ($scope, cards, auth, $mdOpenMenu) {

  $scope.profile = auth.profile;

	cards.success(function (data) {
		$scope.cards = data;
	});

	$scope.addOne = function(cards) {
		// adds one
		cards.upvotes += 1;
	};
}]);
