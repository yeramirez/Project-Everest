choral.controller('LoginCtrl', function ($scope, auth, store) {
	console.log('CONTROLLER HAS LOADED');
	$scope.auth = auth;

	$scope.logout = function() {
		auth.signout();
		store.remove('profile');
		store.remove('token');
	}
});