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
    House_Type:"Owned",
    personal_detail:{
      pincode:"",
      employment_type:"SALARIED",
      mode_of_salary:"CHEQUE_OR_ONLINE_TRANSFER",
      mode_of_salary_aadhar:"no",
      mode_of_salary_ITR:"no"
    },
    is_terms_of_privacy_policy:""     
  }
  $scope.register = function(){
    var d = $scope.formData;
    if(!d.first_name){
      alert("Enter Name.")
    }else if(!d.email){
      alert("Enter email.")
    }else if(!d.mobile){
      alert("Enter mobile.")
    }else if(!d.otp){
      alert("Enter otp.")
    }else if(!d.pan_no){
      alert("Enter pan no.")
    }else if(!d.dob){
      alert("Enter dob.")
    }else if(!d.partner_referral_id){
      alert("Enter partner referral id.")
    }else if(!d.personal_detail.pincode){
       alert("Enter pincode.")
    }else if(!d.is_terms_of_privacy_policy){
      alert("Select is_terms_of_privacy_policy.")
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
    alert(222)
       // if ($scope.formData && $scope.formData.mobile) {
   			 $scope.show_verify = true;
       // }
    };
 
  
});
