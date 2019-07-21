app.controller("borrowerRegister1Ctrl", function ($scope) {
  $scope.formData =
  {
    Loan_amount:"",
    Loan_tenure:"",
    Loan_Purpose:"",
    Loan_Affordable:"",
    Gender:"Male",
    Marital:"Single",
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
});