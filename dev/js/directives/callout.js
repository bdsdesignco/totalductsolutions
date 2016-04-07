app.directive('callout', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/callout.html'
  }
});
