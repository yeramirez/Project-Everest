'use strict';

choral.controller('ProfileCtrl', function UserInfoCtrl ($scope, auth) {

  // Get user information
	$scope.profile = auth.profile;

	// Run this if you're unsure of you can use.
	// console.log($scope.profile);
});
