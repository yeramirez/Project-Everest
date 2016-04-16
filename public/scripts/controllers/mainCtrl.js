'use strict';
console.log('MainCtrl loaded');

choral.controller('MainCtrl', ['$scope', 'cards', function ($scope, cards) {
	$scope.posts = [{title: 'Billionaire', lyrics: 'I wanna be a billionare, so freaking bad.'}, {title: 'Respect', lyrics: 'R-E-S-P-E-C-T'}];

	cards.success(function (data) {
		$scope.posts = data;
	})
}]);