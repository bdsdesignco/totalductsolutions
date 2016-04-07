var app = angular.module('totalductsolutions', ['ui.router', 'ngMaterial', 'duScroll']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html'
      });

    $urlRouterProvider.otherwise('/');
  }
]);
