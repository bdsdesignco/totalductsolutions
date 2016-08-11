$.autotab.selectFilterByClass = true;

app.controller('EmailController',['$scope', '$mdDialog', '$mdBottomSheet', function($scope, $mdDialog, $mdBottomSheet) {

  $scope.model = 0;

  $scope.initAutotab = function() {
    $(function() {
      // $('.number').autotab('number');
    });
  };

  $scope.phone = {areaCode: '', number1: '', number2: '', ext: ''};

  setTimeout(function() {
    $.autotab.refresh();
  }, 1);

  // Initializing JS injection
  $scope.initAutotab();

  $scope.image = null;
  $scope.imageFileName = '';
}]);
