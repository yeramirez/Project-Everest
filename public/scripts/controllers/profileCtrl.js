'use strict';

console.log('ProfileCtrl has loaded');

choral.controller('ProfileCtrl', function UserInfoCtrl ($scope, auth) {
	$scope.profile = auth.profile;

	// Run this if you're unsure of you can use.
	console.log($scope.profile);
});