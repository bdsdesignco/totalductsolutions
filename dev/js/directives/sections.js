app.directive('sections', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/sections.html'
  }
});
