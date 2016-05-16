'use strict';

choral.controller('ProfileCtrl', ['$scope', 'auth', 'user', 'CardSvc', function UserInfoCtrl ($scope, auth, user, CardSvc) {

  // $scope.nickname = user;
  // Get user information
  $scope.user = user;
  console.log($scope.user);
  // $scope.picture = $scope.user.data;

  (function () {
		CardSvc.getUser($scope.user.data[0].author).then(function (cards) {
			$scope.cards = cards.data;
      console.log(cards);
		});
	})();

	// Run this if you're unsure of you can use.
	// console.log($scope.profile);
}]);
