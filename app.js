(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.displayMessage = function () {
      var messageValue = calculatMessage($scope.lunchMenu);
      $scope.message = messageValue;
    };
  }

  function calculatMessage(string) {
       if (string.trim().length == 0 ) {
         addColors( '#lunch-menu', 'green-box', 'red-box');
         addColors( '#div1', 'green', 'red');
         return "Please enter data first";
       }

       addColors( '#lunch-menu', 'red-box', 'green-box');
       addColors( '#div1', 'red', 'green');
       var arrayOfStrings = string.split(/[\s,]+/);
       if (arrayOfStrings.length <= 3){
         return "Enjoy!";
       }else {
         return "Too much!";
       }
  }

  function addColors(id, oldClass, newClass){
    var myEl = angular.element( document.querySelector(id ) );
    myEl.removeClass(oldClass);
    myEl.addClass(newClass);
  }


})();
