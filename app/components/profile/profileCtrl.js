'use strict';

choral.controller('ProfileCtrl', function UserInfoCtrl ($scope, auth) {

  // Get user information
	$scope.profile = auth.profile;
  $scope.nickname = auth.profile.nickname;


  // (function () {
	// 	CardSvc.get($scope.user_id)
	// 	.then(function () {
	// 		$scope.cards = cards.data;
	// 	});
	// })();

	// Run this if you're unsure of you can use.
	// console.log($scope.profile);
});
