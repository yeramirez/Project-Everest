(function() {
  'use strict';

  angular
    .module('choralApp')
    .directive('toolbar', toolbar);

  function toolbar () {
    return {
      templateUrl: 'components/toolbar/toolbar.tpl.html',
      controller: toolbarCtrl,
      controllerAs: 'toolbar'
    }
  }

  function toolbarCtrl (auth, store, $location, $scope) {
    var vm = this;
    vm.login = login;
    vm.logout = logout;
    vm.auth = auth;

    $scope.user = vm.auth.profile;

    function login () {
      auth.signin({}, function (profile, token) {
        store.set('profile', profile);
        store.set('token', token);
        $location.path('/dashboard');
      }, function (error) {
        console.log(error);
      });
    }

    function logout () {
      store.remove('profile');
      store.remove('token');
      auth.signout();
      $location.path('/home');
    }
  }
})();
