app.controller("CongratulationsCtrl", function ($scope,$location) {
 
  $scope.Proceed = function(){
      $location.path('/borrower-register2/')
  }
  
});
