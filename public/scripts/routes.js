choral.config(function ($stateProvider, $urlRouterProvider, authProvider, $httpProvider, jwtInterceptorProvider) {

  // Using the satellizer
  // $authProvider.google({
  //     clientId: '38825868046-u1v5rvh3quhji1td6rblpg4phmt1t3lq.apps.googleusercontent.com'
  // });

  authProvider.init({
    domain: 'yeramirez.auth0.com',
    clientID: 'Cc17tiuA3SGvx4NR3OHztSuXXKKZlRmU'
  });

  authProvider.on('loginSuccess', function ($location, profilePromise, idToken, store) {
    console.log("Login Success");
    profilePromise.then(function(profile) {
      store.set('profile', profile);
      store.set('token', idToken);
    });
    $location.path('/');
  });

  authProvider.on('loginFailure', function() {
     // Error Callback
  });

  jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    // Return the saved token
    return store.get('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');

  // We are using ui.router for this routing

  // Setting up our states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'LoginCtrl'
    })

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'MainCtrl'
    })

    .state('create', {
      url: '/create',
      templateUrl: 'views/newPost.html',
      controller: 'PostCtrl'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    })

  $urlRouterProvider.otherwise('dashboard');

});

choral.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});