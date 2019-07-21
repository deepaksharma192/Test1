app.controller("borrowerRegister2Ctrl", function ($scope,$location) {
   $scope.formData =
  {
    Loan_amount:"",
    Loan_tenure:"",
    Loan_Purpose:"Medical Emergency",
    Loan_Affordable:"",
    Gender:"Male",
    Marital:"Single",
    Spouse_Working:"No",
    Spouse_Monthly_Income:"",
    Working_Parents:"Yes",
    Parent_Monthly_Income:"",
    other_source:"No",
    other_Income_Amount:"",
    Education:"Graduation",
    Kids:""	    
  }
   $scope.register = function(){
    var d = $scope.formData;
    if(!d.Loan_amount){
      alert("Enter Loan_amount.")
    }else if(!d.Loan_tenure){
      alert("Enter Loan_tenure.")
    }else if(!d.Loan_Purpose){
      alert("Enter Loan_Purpose.")
    }else if(!d.Loan_Affordable){
      alert("Enter Loan_Affordable EMI.")
    }else if(d.Marital == "Married" && d.Spouse_Working == "Yes" && d.Spouse_Monthly_Income ==""){
      alert("Enter Spouse_Monthly_Income.")
    }else if(d.Working_Parents == "Yes" && d.Parent_Monthly_Income ==""){
      alert("Enter Parent_Monthly_Income.")
    }else if(d.other_source == "Yes" && d.other_Income_Amount ==""){
      alert("Enter other_Income_Amount.")
    }else if(!d.Education){
      alert("Select Education.")
    }else if(d.Marital == "Married" && d.Kids == ""){
       alert("Enter Kids.")
    }else{
      console.log($scope.formData)
      $location.path('/borrower-register2/')
    }
  }

});