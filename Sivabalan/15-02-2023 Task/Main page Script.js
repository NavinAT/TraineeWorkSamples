function onLoad()
{
    dateofregistration.min = new Date().toISOString().split("T")[0];
}
window.onload = onLoad;

function onlyNumberKey(evt)
{
    var ASCIICode = evt.which;
    if (ASCIICode < 48 || ASCIICode > 57)
        return false;
    return true;
}

function onlyLetterKey(evt)
{
    var ASCIICode = evt.which;
    if ((ASCIICode < 65 || ASCIICode > 90) && (ASCIICode < 97 || ASCIICode > 122))
        return false;
    return true;
}

function submitForm()
{
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var Court_Name = document.getElementById("nameofcourt").value; 
    var Registration_date = document.getElementById("dateofregistration").value;
    var mobile_number = document.getElementById("mobile").value;
    String(mobile_number);
    if(mobile_number.length == 10)
    {
        var Mobile_number = document.getElementById("mobile").value;
    }
    else
    {
        if(mobile_number == "")
        {
            var Mobile_number = "";
        }
        else
        {
            var Mobile_number = "";
            alert("Invalid Mobile Number");
        }
    }

    var Address = document.getElementById("address").value;
    var email = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
        var Email = document.getElementById("email").value;
    }
    else
    {
        if(email.value == "")
        {
            var Email = "";
        }
        else
        {
            var Email = "";
            alert("Invalid email address!");
        }
    }

    if (document.getElementById('gendermale').checked == true)
    {
        var Gender = document.getElementById("gendermale").value;
    }
    else if (document.getElementById('genderfemale').checked == true)
    {
        var Gender = document.getElementById("genderfemale").value;
    }
    else if (document.getElementById('genderboth').checked == true)
    {
        var Gender = document.getElementById("genderboth").value;
    }
    else
    {
        var Gender = "";
    }

    if(fname == "" || lname == "" || Court_Name == "" || Registration_date == "" || Mobile_number == "" || Address == "" || Email == "")
    {
        if(fname == "")
        {
            alert("Enter First Name");
        }
        else if(lname == "")
        {
            alert("Enter Last Name");
        }
        else if(Court_Name == "")
        {
            alert("Select Court");
        }
        else if(Registration_date == "")
        {
            alert("Enter Registration Date");
        }
        else if(Gender == "")
        {
            alert("Select Gender");
        }
        else if(Mobile_number == "")
        {
            alert("Enter Mobile Number");
        }
        else if(Address == "")
        {
            alert("Enter Address");
        }
        else
        {
            alert("Enter Mail ID")
        }
    }

    if(fname != "" && lname != "" && Court_Name != "" && Registration_date != "" && Mobile_number != "" && Address != "" && Email != "" && Gender != "" && Email != undefined)
    {
        var obj = localStorage.getItem("testJSON");
        var mail_phone = JSON.parse(obj);
        if(obj)
        {
            for(let i=0; i<mail_phone.length; i++)
            {
                var user = mail_phone[i];
                if(user.Email == Email || user.Mobile_number == Mobile_number)
                {
                    if(user.Email == Email && user.Mobile_number == Mobile_number)
                    {
                        alert("Mail ID and Mobile Number are already taken");
                        return;
                    }
                    else if(user.Email == Email)
                    {
                        alert("Mail ID is already taken");
                        return;
                    }
                    else
                    {
                        alert("Mobile Number is already taken");
                        return;
                    }
                }
            }
            for(let i=0; i<mail_phone.length; i++)
            {
                var court_date = mail_phone[i];
                if(court_date.Court_Name == Court_Name && court_date.Registration_date == Registration_date)
                {
                    alert("At the date the Court is already Booked");
                    return;
                }
            }
        }
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
    if (confirm("Do you want to Delete Local Storage?") == true)
    {
        localStorage.clear();
    }
}
function userDetails()
{
    var myObject = localStorage.getItem("testJSON");
    var details = JSON.parse(myObject);
    if(myObject)
    {
        if(details[0] == null)
        {
            alert("Their is no data to View")
        }
        else
        {
            window.open("Next page.html", '_blank');
        }
    }
    else
    {
        alert("Their is no data to View")
    }
}