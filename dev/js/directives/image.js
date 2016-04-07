app.directive('image', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/image.html'
  }
});
