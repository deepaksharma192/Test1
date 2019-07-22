app.controller("borrowerRegisterCtrl", function ($scope,$location) {
  $scope.DatePicker = false;		
  $scope.show_verify = false;
  $scope.Salaried=true;
  $scope.popup2 = {opened: false};
  $scope.formData =
  {
    first_name:"",
    email:"",
    mobile:"",
    otp:"",
    pan_no:"",
    dob:"",
    partner_referral_id:"",
    House_Type:"null",
    personal_detail:{
      pincode:"",
      employment_type:"SALARIED",
      mode_of_salary:"CHEQUE_OR_ONLINE_TRANSFER",
      mode_of_salary_aadhar:"no",
      mode_of_salary_ITR:"no"
    },
    Monthly_Income:"",
    is_terms_of_privacy_policy:""     
  }
  $scope.register = function(){
    var d = $scope.formData;
    if(!d.first_name){
      alert("Enter First Name.")
    }
    // else if(!d.email){
    //   alert("Enter email.")
    // }
    else if(!d.mobile){
      alert("Enter Mobile No.")
    }else if(!d.otp){
      alert("Enter OTP.")
    }else if(!d.pan_no){
      alert("Enter PAN number.")
    }else if(!d.dob){
      alert("Enter D.O.B.")
    }
    else if(d.House_Type == "null"){
      alert("Select House Type.")
    }
    // else if(!d.partner_referral_id){
    //   alert("Enter partner referral id.")
    // }
    else if(!d.personal_detail.pincode){
       alert(" Enter Pin code.")
    }else if(!d.Monthly_Income){
       alert("Enter Monthly Income.")
    }else if(!d.is_terms_of_privacy_policy){
      alert("Select the checkbox to accept the terms and conditions.")
    }else{
      console.log($scope.formData)
      $location.path('/borrower-register1/')
    }
  }


  
  $scope.openCalendar = function() {
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
    //alert(222)
       // if ($scope.formData && $scope.formData.mobile) {
   			 $scope.show_verify = true;
       // }
    };
 
  
});
