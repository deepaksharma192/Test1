app.controller("borrowerRegisterCtrl", function ($scope) {

  $scope.show_verify = false;
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
		employment_type:"",
		mode_of_salary:"",
		mode_of_salary_aadhar:"",
		mode_of_salary_ITR:""
	},
	is_terms_of_privacy_policy:""		  
  }
  $scope.validateEntryOfDetail = function($event){
  	var str = $($event.target).val();
  	var patt = new RegExp("^[a-zA-Z0-9]+[a-zA-Z0-9._]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,5}$");
	var status = patt.test(str);
	if(!status){
		console.log("validateEntryOfDetail")
	}
  }
  $scope.sendOtp = function () {
        if ($scope.formData && $scope.formData.mobile) {
   			 $scope.show_verify = true;
        }
    };
  $scope.registerFn = function(){
  	console.log($scope.formData)
  }
  
});
