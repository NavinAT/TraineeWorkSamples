function saveFormData() 
{
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var Email = document.getElementById("email");
	var emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

	if (Email.value.match(emailFormat)) 
	{
		var email = document.getElementById("email").value;
	} 
	else 
	{
		if(Email.value=="")
		{
		var email="";
		}
		else
		{
			var email="";
			alert("Invalid address!");
    	}
 	}

	var Phone = document.getElementById("phone");
	var Format =  /^\d{10}$/;
	if (Phone.value.match(Format)) 
	{
		var phone = document.getElementById("phone").value;
	} 

	else 
		{   
			if(Phone.value=="")
			{
				var phone="";
    		}
			else
			{
				var phone="";
				alert("Invalid phone no");
			}
		}

	var dob = document.getElementById("dob").value;
	var  addressline1= document.getElementById("addressline1").value;
	var addressline2= document.getElementById("addressline2").value;
	var city = document.getElementById("city").value;
	var  state= document.getElementById("state").value;
	var zip= document.getElementById("zip").value;
	var  country= document.getElementById("country").value;
	var  gender= document.getElementById("gender").value;
	var  occupation= document.getElementById("occupation").value;
	var company = document.getElementById("company").value;

	if (firstname !="" && lastname !="" && email !="" && phone !="" && dob !="" && addressline1 !=""
	 && addressline2 !="" && city !="" && state !="" && zip !="" && country !="" && gender !="" && occupation !="" 
	 && company !="" ) {
	
		var personaldetails={firstname: firstname,
		lastname: lastname,
		email: email,phone:phone,
		dob:dob,
		addressline1:addressline1,
		addressline2:addressline2,
		city:city,state:state,
		zip:zip,country:country,
		gender:gender,
		occupation:occupation,
		company:company};
	
	var obj=localStorage.getItem("localstorage");
	var arr=[];

	if(obj)
	{
		var arrObj=JSON.parse(obj);
		arrObj.push(personaldetails);
		localStorage.setItem("localstorage", JSON.stringify(arrObj));
	}

	else
	{
		arr.push(personaldetails);
		localStorage.setItem("localstorage", JSON.stringify(arr));
	}
    }
	
}

function myFunction() 
{
	location.reload();
	alert("The form successfully submitted");
}

function localStorageclear()
{
	localStorage.clear();
	alert("Local storage Cleared")
}

function tableview()
{
	var obj=JSON.parse(localStorage.getItem("localstorage"));
	
	if(obj)
	{
		
		if(obj[0]==null)
		{
			alert("Empty arr[] but not an View");
		}
		else
		{
			window.open("tablestoredpage.html");
		}
	}
	else
	{
		alert("No Data For View")
	}
}


