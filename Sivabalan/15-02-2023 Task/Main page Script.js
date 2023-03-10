function submitForm()
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
        if(obj)
        {
            var arr = JSON.parse(obj);     
            arr.push(myObj);
            localStorage.setItem("testJSON", JSON.stringify(arr));
            window.open("Next page.html", '_blank');
        }
        else
        {
            var arrObj = [];
            arrObj.push(myObj);
            localStorage.setItem("testJSON", JSON.stringify(arrObj));
            window.open("Next page.html", '_blank');
        }
    }
}
function resetlocalStorage()
{
localStorage.clear();
}
function userDetails()
{
window.open("Next page.html", '_blank');
}