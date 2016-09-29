app.controller('NavController',['$scope', '$mdDialog', function($scope, $mdDialog) {
  $scope.links = [
    {
      name: "Services",
      path: "",
      click: "",
      styling: ""
    }, {
      name: "About",
      path: "",
      click: "",
      styling: ""
    }, {
      name: "Contact",
      path: "",
      click: "",
      styling: ""
    }, {
      name: "Order",
      path: "",
      click: "showEmailModal($event)",
      styling: "md-raised"
    }
  ];

  $scope.showEmailModal = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/body/modals/emailmodal.html',
      targetEvent: ev,
      clickOutsideToClose: false
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
