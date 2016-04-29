console.log('loginCtrl has loaded');
choral.controller('LoginCtrl', function ($scope, auth, store) {
	
	$scope.auth = auth;

	$scope.logout = function() {
		auth.signout();
		store.remove('profile');
		store.remove('token');
	}
});