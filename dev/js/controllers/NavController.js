app.controller('NavController',['$scope', '$mdDialog', function($scope, $mdDialog) {
  $scope.showEmailModal = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/body/modals/emailmodal.html',
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
}]);

DialogController.$inject = ['$scope', '$mdDialog'];

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};
