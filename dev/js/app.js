// var carousel = require('angular-carousel');

var app = angular.module('totalductsolutions', ['ui.router', 'ngMaterial', 'ngMessages', 'angular-carousel', 'ngDroplet']);

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
