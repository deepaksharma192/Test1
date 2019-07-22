app.controller("notifyCtrl", function ($scope,$location) {
 
 $scope.Notify = function(){
      $location.path('/borrower-register/')
  }

  
});
