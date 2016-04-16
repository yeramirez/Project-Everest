choral.config(function ($stateProvider, $urlRouterProvider) {
  // We are using ui.router for this routing

  // Setting up our states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'loginCtrl'
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

  $urlRouterProvider.otherwise('dashboard');

});