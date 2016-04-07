app.directive('info', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/info.html'
  }
});
