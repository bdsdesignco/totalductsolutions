app.controller('InfoController',['$scope', '$mdDialog', function($scope, $mdDialog) {
  $scope.slides = [
    {
      desc: "We are able to fulfill any of your HVAC needs; whether it be standard duct size and fittings or a custom job.",
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
}]);
