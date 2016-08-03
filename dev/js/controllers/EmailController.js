$.autotab.selectFilterByClass = true;

app.controller('EmailController',['$scope', '$mdDialog', function($scope, $mdDialog) {

  $scope.model = 0;

  $scope.initAutotab = function() {
    $(function() {
      $('.number').autotab('number');
    });
  };

  $scope.phone = {areaCode: '', number1: '', number2: ''};

  setTimeout(function() {
    $.autotab.refresh();
  }, 1);
  $scope.initAutotab();
}]);
