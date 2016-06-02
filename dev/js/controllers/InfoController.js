app.controller('InfoController',['$scope', '$mdDialog', function($scope, $mdDialog) {
  $scope.slides = [
    {
      desc: "We are able to fulfill any of your custom HVAC needs. Check out our common fitting list by clicking button below.",
      icon: "more_horiz",
      tooltip: "View Here",
      modal: "showModal1($event)"
    }, {
      desc: "We offer a variety of different custom duct solutions. Whether it's a standard or custom order, we will find a solution to fit your job's requirements.",
      icon: "email",
      tooltip: "Contact Us!",
      modal: "showModal2($event)"
    }, {
      desc: "Our fabrication shop provides all of the equipment capable of manufacturing any of your needs. Our licensed fabricators' attention to detail ensures your fittings are done correctly.",
      icon: "arrow_forward",
      tooltip: "View Equipment List",
      modal: "showModal3($event)"
    }
  ];

  $scope.showModal1 = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/body/modals/modal1.html',
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };

  $scope.showModal2 = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/body/modals/modal2.html',
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };

  $scope.showModal3 = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/body/modals/modal3.html',
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
