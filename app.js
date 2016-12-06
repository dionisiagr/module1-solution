(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";
    $scope.classMessage = "";
    $scope.classBox = "";

    $scope.displayMessage = function () {
      var messageValue = $scope.lunchMenu;
      if (messageValue.trim().length == 0 ) {
        $scope.classMessage = "red";
        $scope.classBox = "red-box";
        $scope.message = "Please enter data first";
      }else{

        $scope.classMessage = "green";
        $scope.classBox = "green-box";
        var arrayOfStrings = messageValue.split(/[\s,]+/);
        if (arrayOfStrings.length <= 3){
          $scope.message = "Enjoy!";
        }else {
          $scope.message = "Too much!";
        }
      }

    };
  }

  function calculateMessage(string) {
       if (string.trim().length == 0 ) {
  //       $scope.classMessage = "red";
  //       $scope.classBox = "red-box";
         return "Please enter data first";
       }

  //     $scope.classMessage = "green";
  //     $scope.classBox = "green-box";
       var arrayOfStrings = string.split(/[\s,]+/);
       if (arrayOfStrings.length <= 3){
         return "Enjoy!";
       }else {
         return "Too much!";
       }
  }


})();
