'use strict';
console.log('loginCtrl loaded');
choral.controller('loginCtrl', ['$scope', function ($scope) {
	$scope.hello = "hello";

	$scope.signUserIn = function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());
	}

	$scope.signUserOut = function signOut() {
		var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
			console.log('User signed out.');
		});
	}
}]);