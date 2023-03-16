// Submit button Enable Disable
function checkfields() 
{
    if(document.getElementById("resume").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    }
    else if(document.getElementById("fname").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    } 
    else if(document.getElementById("lname").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    }
    else if(document.getElementById('dob').value==="")
    {
        document.getElementById('submit').disabled = true;
    }
    else if(document.getElementById("cont").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    } 
    else if(document.getElementById("address").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    } 
    else if(document.getElementById("gmail").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    } 
    else if(document.getElementById("gend").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    }
    else if(document.getElementById("qua").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    }
    else if(document.getElementById("dept").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    }
    else if(document.getElementById("state").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    }
    else if(document.getElementById("city").value==="") 
    { 
        document.getElementById('submit').disabled = true; 
    }
    else
    { 
        document.getElementById('submit').disabled = false;
    }
}
//View Button
function View ()
{
    var checkstorage = localStorage.getItem("storage")
    var checksto = JSON.parse(checkstorage);
    if(checksto == "" || checksto == null)
    {
        location.reload();
    }
    else
    {
        window.location.href="final.html";
    }  
}
//Form Submission
function submitForm() 
{
    var Resume = document.getElementById("resume").value;
    var Fname = document.getElementById("fname").value;
    var Lname = document.getElementById("lname").value;
    var DOB = document.getElementById("dob").value; 
    var Contact = document.getElementById("cont").value;  
    var Address = document.getElementById("address").value; 
    var Gmail = document.getElementById("gmail").value; 
    var Gender = document.getElementById("gend").value;          
    var Qualification = document.getElementById("qua").value; 
    var Department = document.getElementById("dept").value;
    var State = document.getElementById("state").value; 
    var City = document.getElementById("city").value; 
    let data = {Resume:Resume,Fname:Fname,Lname:Lname,DOB:DOB,Contact:Contact,Address:Address,
    Gmail:Gmail,Gender:Gender,Qualification:Qualification,Department:Department,State:State,City:City};
    var arrObj = [];          
    var obj = localStorage.getItem("storage");
    if(obj)
    {
      var set = JSON.parse(obj);   
      set.push(data);
      localStorage.setItem("storage", JSON.stringify(set));
    }
    else
    {
      arrObj.push(data);
      localStorage.setItem("storage", JSON.stringify(arrObj));
    }         
}
// signout button
function signoutbutton() 
{
    window.location.href="login.html";
} 