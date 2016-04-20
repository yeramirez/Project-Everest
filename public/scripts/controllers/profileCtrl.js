'use strict';

console.log('ProfileCtrl has loaded');

choral.controller('ProfileCtrl', function UserInfoCtrl ($scope, auth) {
		$scope.auth = auth;
	});