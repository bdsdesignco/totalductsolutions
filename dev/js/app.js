var app = angular.module('totalductsolutions', ['ui.router', 'ngMaterial', 'angular-parallax', 'ngAnimate', 'ui.bootstrap']);

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
