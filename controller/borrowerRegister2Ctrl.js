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
    	OfficialContact:"",
    	PAN:"",
    	Operations:"",
    	TurnOver:""
    },
    Office:{
    	address1:"" ,
	    address2:"" ,
	    pincode:"" ,
	    City:"",
	    State:"",
	    Country:"",
	    AddressType:"Owned"
    }
    
  }
   $scope.register = function(){
   	var check1=false;
   	var check2=false;
    var d = $scope.formData;
    if(d.houseType == 'Rented' && d.rent == ""){
      alert("Enter Rented.")
    }else if(!d.address.address1){
      alert("Enter address1.")
    }else if(!d.address.pincode){
      alert("Enter pincode.")
    }else if(!d.address.City){
      alert("Enter City.")
    }else if(!d.address.State){
      alert("Enter State.")
    }else if(!d.address.Country){
      alert("Enter Country.")
    }else if(d.Details.Employmenttype != "Salaried" && !d.Details.FirmName){
	      alert("Enter FirmName.")
	    }else if(d.Details.Employmenttype != "Salaried" && !d.Details.Designation){
	      alert("Enter Designation.")
	    }else if(d.Details.Employmenttype != "Salaried" && !d.Details.EmployeedSince){
	      alert("Enter EmployeedSince.")
	    }else if(d.Details.Employmenttype != "Salaried" && !d.Details.OfficialEmail){
	      alert("Enter OfficialEmail.")
	    }else if(d.Details.Employmenttype != "Salaried" && !d.Details.OfficialContact){
	      alert("Enter OfficialContact.")
	    }else if(d.Details.Employmenttype != "Salaried" && !d.Details.PAN){
	      alert("Enter PAN.")
	    }else if(d.Details.Employmenttype != "Salaried" && !d.Details.Operations){
	      alert("Enter Operations.")
	    }else if(d.Details.Employmenttype != "Salaried" && !d.Details.TurnOver){
	      alert("Enter TurnOver.")
	    }else if(!d.Office.address1){
      alert("Enter Office address1.")
    }else if(!d.Office.pincode){
      alert("Enter Office pincode.")
    }else if(!d.Office.City){
      alert("Enter Office City.")
    }else if(!d.Office.State){
      alert("Enter Office State.")
    }else if(!d.Office.Country){
      alert("Enter Office Country.")
    }else{
      console.log($scope.formData)
      //$location.path('/borrower-register/')
    }
  }

});