app.controller("borrowerRegister2Ctrl", function ($scope,$location) {
   $scope.formData =
  {
    houseType:"Owned",
    rent:"",  
    address:{
    	address1:"" ,
	    address2:"" ,
	    pincode:"" ,
	    City:"",
	    State:"",
	    Country:""
    },
    Details:{
    	Employmenttype:"Salaried",
    	Business:"Business",
    	FirmName:"",
    	FirmType:"FMCG 1",
    	Designation:"",
    	EmployeedSince:"",
    	OfficialEmail:"",
    }
    
  }
   $scope.register = function(){
    var d = $scope.formData;
    if(d.houseType == 'Rented' && d.rent == ""){
      alert("Enter Rented.")
    }else if(!d.address1){
      alert("Enter address1.")
    }else if(!d.pincode){
      alert("Enter pincode.")
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