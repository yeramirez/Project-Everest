choral.config(function ($stateProvider, $urlRouterProvider) {
  // We are using ui.router for this routing

  // Setting up our states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'dashCtrl'
    })

  $urlRouterProvider.otherwise('dashboard');

});