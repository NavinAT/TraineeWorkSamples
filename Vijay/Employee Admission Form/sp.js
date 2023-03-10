//Back Button
function back()
{
  window.location.href="final.html";
}

//Get Data from LocalStorage
var save=localStorage.getItem("storage");
var obj = JSON.parse(save);

//Get the Particular Row Data
var val = localStorage.getItem('value1');
var i = JSON.parse(val);
var display = obj[i-1];
var num = 0;
num +=i;

document.write('<tr><td>' +num +'</td><td id="Resume">' + display.Resume + '</td><td id="Fname"  contenteditable="true">' + display.Fname + '</td><td id="Lname"  contenteditable="true">' + display.Lname + '</td><td>' + '<span><input type="date" id="Dob"></span>'  + '</td><td id="Contact"  contenteditable="true">' + display.Contact + '</td><td id="Address"  contenteditable="true">' + display.Address +
     '</td><td id="Gmail"  contenteditable="true">' + display.Gmail + '</td><td>' + '<span ><select name="gend" id="Gender"><option value="MALE">MALE</option><option value="FEMALE">FEMALE</option></select></span>' +  
     '</td><td>' + '<span><select name="qua" id="Qualification"><option value="B.E">B.E</option><option value="M.E">M.E</option></select></span>' + 
     '</td><td>' + '<span><select name="dept" id="Department"><option value="CSE">CSE</option><option value="ECE">ECE</option><option value="EEE">EEE</option><option value="CIVIL">CIVIL</option><option value="MECH">MECH</option></select></span>' + '</td><td id="State"  contenteditable="true">' + display.State + '</td><td  id="City"  contenteditable="true">' + display.City + '</td></tr>');
document.getElementById('Dob').value = display.DOB;
document.getElementById('Gender').value = display.Gender;
document.getElementById('Qualification').value = display.Qualification;
document.getElementById('Department').value = display.Department;

//Edit and Save Data
function savedat() 
{
  if (document.getElementById('Fname').innerHTML===""){  
    alert("Please Fill the FirstName");
    return false;    
  }
  if (document.getElementById('Lname').innerHTML===""){  
    alert("Please Fill the LastName");
    return false;    
  } 
  if (document.getElementById('Contact').innerHTML===""){  
    alert("Please Fill the Contact");
    return false;    
  }
  if (document.getElementById('Address').innerHTML===""){  
    alert("Please Fill the Address");
    return false;    
  }
  if (document.getElementById('Gmail').innerHTML===""){  
    alert("Please Fill the Gmail");
    return false;    
  }
  if (document.getElementById('State').innerHTML===""){  
    alert("Please Fill the State");
    return false;    
  }
  if (document.getElementById('City').innerHTML===""){  
    alert("Please Fill the City");
    return false;    
  }

   var Resume = document.getElementById('Resume').innerHTML;
   var Fname = document.getElementById('Fname').innerHTML;
   var Lname = document.getElementById('Lname').innerHTML;
   var DOB = document.getElementById('Dob').value;
   var Contact = document.getElementById('Contact').innerHTML;
   var Address = document.getElementById('Address').innerHTML;
   var Gmail = document.getElementById('Gmail').innerHTML;
   var Gender = document.getElementById('Gender').value; 
   var Qualification = document.getElementById('Qualification').value;
   var Department = document.getElementById('Department').value;
   var State = document.getElementById('State').innerHTML;
   var City = document.getElementById('City').innerHTML;
   let text = {Resume:Resume,Fname:Fname,Lname:Lname,DOB:DOB,Contact:Contact,Address:Address,
   Gmail:Gmail,Gender:Gender,Qualification:Qualification,Department:Department,State:State,City:City};
   obj.splice(i-1, 1,text);
   var save1 = JSON.stringify(obj);
   localStorage.setItem("storage",save1);
   window.location.href="final.html";
}