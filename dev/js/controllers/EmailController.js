$.autotab.selectFilterByClass = true;

app.controller('EmailController',['$scope', '$mdDialog', '$mdBottomSheet', '$timeout',
function($scope, $mdDialog, $mdBottomSheet, $timeout) {

  $scope.model = 0;

  $scope.initAutotab = function() {
    $(function() {
      $('.number').autotab('number');
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

  // Setting up the droplet for file uploading
  /**
         * @property interface
         * @type {Object}
         */
        $scope.interface = {};

        /**
         * @property uploadCount
         * @type {Number}
         */
        $scope.uploadCount = 0;

        /**
         * @property success
         * @type {Boolean}
         */
        $scope.success = false;

        /**
         * @property error
         * @type {Boolean}
         */
        $scope.error = false;

        // Listen for when the interface has been configured.
        $scope.$on('$dropletReady', function whenDropletReady() {

            $scope.interface.allowedExtensions(['png', 'jpg', 'bmp', 'gif', 'pdf']);
            $scope.interface.setRequestUrl('upload.html');
            $scope.interface.defineHTTPSuccess([/2.{2}/]);
            $scope.interface.useArray(false);

        });

        // Listen for when the files have been successfully uploaded.
        $scope.$on('$dropletSuccess', function onDropletSuccess(event, response, files) {

            $scope.uploadCount = files.length;
            $scope.success     = true;
            console.log(response, files);

            $timeout(function timeout() {
                $scope.success = false;
            }, 5000);

        });

        // Listen for when the files have failed to upload.
        $scope.$on('$dropletError', function onDropletError(event, response) {

            $scope.error = true;
            console.log(response);

            $timeout(function timeout() {
                $scope.error = false;
            }, 5000);

        });
}]);
