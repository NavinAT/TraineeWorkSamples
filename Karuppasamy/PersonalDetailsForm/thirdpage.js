var obj=JSON.parse(localStorage.getItem("localstorage"));
var index=JSON.parse(localStorage.getItem("getno"));

document.getElementById("firstname").value=obj[index-1].firstname;
document.getElementById("lastname").value=obj[index-1].lastname;
document.getElementById("email").value=obj[index-1].email;
document.getElementById("phone").value=obj[index-1].phone;
document.getElementById("dob").value=obj[index-1].dob;
document.getElementById("addressline1").value=obj[index-1].addressline1;
document.getElementById("addressline2").value=obj[index-1].addressline2;
document.getElementById("city").value=obj[index-1].city;
document.getElementById("state").value=obj[index-1].state;
document.getElementById("zip").value=obj[index-1].zip;
document.getElementById("country").value=obj[index-1].country;
document.getElementById("gender").value=obj[index-1].gender;
document.getElementById("occupation").value=obj[index-1].occupation;
document.getElementById("company").value=obj[index-1].company;

function update()
 {
	var firstname=document.getElementById("firstname").value;
	var lastname=document.getElementById("lastname").value;
	var email=document.getElementById("email").value;
	var phone=document.getElementById("phone").value;
	var dob=document.getElementById("dob").value;
	var addressline1=document.getElementById("addressline1").value;
	var addressline2=document.getElementById("addressline2").value;
	var city=document.getElementById("city").value;
	var state=document.getElementById("state").value;
	var zip=document.getElementById("zip").value;
	var country=document.getElementById("country").value;
	var gender=document.getElementById("gender").value;
	var occupation=document.getElementById("occupation").value;
	var company=document.getElementById("company").value;
	
	var personaldetails ={firstname:  firstname,
		lastname:  lastname,
		email:  email,
		phone: phone,
		dob: dob,
		addressline1: addressline1,
		addressline2: addressline2,
		city: city,
		state: state,
		zip: zip,
		country: country,
		gender: gender,
		occupation: occupation,
		company: company};
	
	var obj=JSON.parse(localStorage.getItem("localstorage"));
	obj.splice(index-1,1,personaldetails);
	localStorage.setItem("localstorage",JSON.stringify(obj));
}

function cancel()
{
	window.location.href="tablestoredpage.html";
}

function myFunction() 
{
	location.reload();
	alert("successfully Edited");
}
