app.directive('carousel', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/body/carousel.html'
  }
});
