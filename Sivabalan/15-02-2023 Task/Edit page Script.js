var obj = localStorage.getItem("testJSON");
var arr = JSON.parse(obj);
var numberInsert = localStorage.getItem("numberEdit");
var No = JSON.parse(numberInsert);
var user = arr[No-1];
localStorage.removeItem("numberEdit");
document.getElementById("fname").value = user.fname;
document.getElementById("mname").value = user.mname;
document.getElementById("lname").value = user.lname;
document.getElementById("nameofcourt").value = user.Court_Name;
document.getElementById("dateofregistration").value = user.Registration_date;
if (user.Gender == "Male")
{
    document.getElementById("gendermale").checked = user.Gender;
}
else if (user.Gender == "Female")
{
    document.getElementById("genderfemale").checked = user.Gender;
}
else
{
    document.getElementById("genderboth").checked = user.Gender;
}
document.getElementById("mobile").value = user.Mobile_number;
document.getElementById("address").value = user.Address;
document.getElementById("email").value = user.Email;
function updateDetails()
{
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var Court_Name = document.getElementById("nameofcourt").value; 
    var Registration_date = document.getElementById("dateofregistration").value;
    var Mobile_number = document.getElementById("mobile").value; 
    var Address = document.getElementById("address").value;
    var email = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
        var Email = document.getElementById("email").value;
    }
    else
    {
        alert("Invalid email address!");
        var Email = "";                        
    }
            
    if (document.getElementById('gendermale').checked == true)
    {
        var Gender = document.getElementById("gendermale").value;
    }
    else if (document.getElementById('genderfemale').checked == true)
    {
        var Gender = document.getElementById("genderfemale").value;
    }
    else
    {
        var Gender = document.getElementById("genderboth").value;
    }
    if(fname != "" && lname != "" && Court_Name != "" && Registration_date != "" && Mobile_number != "" && Address != "" && Email != "" && Gender != "")
    {
        var myObj = {fname: fname, mname: mname, lname: lname, Court_Name:Court_Name, Registration_date:Registration_date, Gender:Gender, 
                    Mobile_number:Mobile_number, Address:Address, Email:Email};
        var obj = localStorage.getItem("testJSON");
        var arr = JSON.parse(obj);
        arr.splice(No-1,1,myObj);
        localStorage.setItem("testJSON", JSON.stringify(arr));
        window.open("Next page.html", '_blank');
    }
}
function cancelEdit()
{
    window.location.href = "Next page.html";
}