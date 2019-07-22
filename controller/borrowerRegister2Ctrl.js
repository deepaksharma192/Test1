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
    Employmenttype:"Salaried",
    Business:"Business",
    Details_Salaried:{
    	
    	FirmName:"",
    	FirmType:"FMCG 1",
    	Designation:"",
    	EmployeedSince:"",
    	OfficialEmail:"",
    	OfficialContact:""
    },
    Details_Self_employed:{
      FirmName:"",
      FirmType:"FMCG 1",
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
      alert("Enter Address.")
    }else if(!d.address.pincode){
      alert("Enter Pin Code.")
    }else if(!d.address.City){
      alert("Enter City.")
    }else if(!d.address.State){
      alert("Enter State.")
    }else if(!d.address.Country){
      alert("Enter Country.")
    }else if(d.Employmenttype == "Salaried" && !d.Details_Salaried.FirmName){
	      alert("Enter Firm Name.")
	    }else if(d.Employmenttype == "Salaried" && !d.Details_Salaried.Designation){
	      alert("Enter Designation.")
	    }else if(d.Employmenttype == "Salaried" && !d.Details_Salaried.EmployeedSince){
	      alert("Enter Employeed Since.")
	    }
     //  else if(d.Employmenttype == "Salaried" && !d.Details_Salaried.OfficialEmail){
	    //   alert("Enter Official E-mail ID.")
	    // }
      else if(d.Employmenttype == "Salaried" && !d.Details_Salaried.OfficialContact){
	      alert("Enter valid Mobile No.")
	    }

      else if(d.Employmenttype == "Self-employed" && !d.Details_Self_employed.FirmName){
        alert("Enter Firm Name.")
      }
      else if(d.Employmenttype == "Self-employed" && !d.Details_Self_employed.PAN){
	      alert("Enter PAN number.")
	    }else if(d.Employmenttype == "Self-employed" && !d.Details_Self_employed.Operations){
	      alert("Enter Years Of Operations.")
	    }else if(d.Employmenttype == "Self-employed" && !d.Details_Self_employed.TurnOver){
	      alert("Enter Turn Over.")
	    }


      else if(d.Employmenttype == "Self-employed" && !d.Office.address1){
      alert("Enter Address.")
    }else if(d.Employmenttype == "Self-employed" && !d.Office.pincode){
      alert("Enter Pin Code.")
    }else if(d.Employmenttype == "Self-employed" && !d.Office.City){
      alert("Enter City.")
    }else if(d.Employmenttype == "Self-employed" && !d.Office.State){
      alert("Enter State.")
    }else if(d.Employmenttype == "Self-employed" && !d.Office.Country){
      alert("Enter Country.")
    }else{
      console.log($scope.formData)
      alert("done")
      //$location.path('/borrower-register/')
    }
  }

});