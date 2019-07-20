app.controller("borrowerRegisterCtrl", function ($scope) {
  $scope.DatePicker = false;		
  $scope.show_verify = false;
  $scope.popup2 = {
    opened: false
  };
$scope.Salaried=true;

  $scope.formData =
  {
	first_name:"",
	email:"",
	mobile:"",
	otp:"",
	pan_no:"",
	dob:"",
	partner_referral_id:"",
	personal_detail:{
		pincode:"",
		employment_type:"SALARIED",
		mode_of_salary:"CHEQUE_OR_ONLINE_TRANSFER",
		mode_of_salary_aadhar:"no",
		mode_of_salary_ITR:"no"
	},
	is_terms_of_privacy_policy:""		  
  }
    $scope.open2 = function() {
    $scope.popup2.opened = true;
  };
  $scope.validateEntryOfDetail = function($event){
  	var str = $($event.target).val();
  	var patt = new RegExp("^[a-zA-Z0-9]+[a-zA-Z0-9._]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,5}$");
	var status = patt.test(str);
	if(!status){
		console.log("validateEntryOfDetail")
	}
  }
  $scope.OpenDatePicker = function () {
  	$scope.DatePicker = true;
};
  $scope.sendOtp = function () {
        if ($scope.formData && $scope.formData.mobile) {
   			 $scope.show_verify = true;
        }
    };
  $scope.register = function(){
  	console.log($scope.formData)
  }
  
});
