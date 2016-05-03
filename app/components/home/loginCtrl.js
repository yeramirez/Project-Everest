console.log('loginCtrl has loaded');
choral.controller('LoginCtrl', function ($scope, auth, store, $location) {
	$scope.signin = function() {
    auth.signin({
      authParams: {
        scope: 'openid name email' // Specify the scopes you want to retrieve
      }
    }, function(profile, idToken, accessToken, state, refreshToken) {
      $location.path('/dashboard')
    }, function(err) {
      console.log("Error :(", err);
    });
  }

	$scope.logout = function() {
		auth.signout();
		store.remove('profile');
		store.remove('token');
	}
});