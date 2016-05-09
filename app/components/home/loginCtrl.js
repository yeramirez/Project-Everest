choral.controller('LoginCtrl', function ($scope, auth, store, $location) {

  // When you hit the sign in button...
	$scope.signin = function() {

    // Set up information for Auth0
    auth.signin({
      // Telling it what I need
      authParams: {
        scope: 'openid name email' // Specify the scopes you want to retrieve
      }
    }, function(profile, idToken, accessToken, state, refreshToken) {
      // Take me to the dashboard when I sign in, please
      $location.path('/dashboard')
    }, function(err) {
      // Not the greatest error, but will do for now
      console.log("Error :(", err);
    });
  }

  // When you decide to sign out...
	$scope.logout = function() {
    // Call the Auth0 api to sign you out
		auth.signout();
		store.remove('profile');
		store.remove('token');
	}
});
