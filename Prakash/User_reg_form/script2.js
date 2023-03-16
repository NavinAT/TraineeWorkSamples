var m1 = localStorage.getItem("prakshJSON");
var myobj2 = JSON.parse(m1);
var len0 = localStorage.getItem("et_row");
var len1 = JSON.parse(len0);      
localStorage.removeItem("et_row");
document.getElementById("fname").value=myobj2[len1-1].fname;
document.getElementById("email").value=myobj2[len1-1].email;
document.getElementById("cno").value=myobj2[len1-1].cno;
document.getElementById("age").value=myobj2[len1-1].age;
document.getElementById("gender").value=myobj2[len1-1].gender;
document.getElementById("dob").value=myobj2[len1-1].dob;
document.getElementById("address").value=myobj2[len1-1].address;
function fsave()
{
    var fname=document.getElementById("fname").value;
    var email=document.getElementById("email").value;
    var cno=document.getElementById("cno").value;
    var age=document.getElementById("age").value;
    var gender=document.getElementById("gender").value;
    var dob=document.getElementById("dob").value;
    var address=document.getElementById("address").value;
    var details =
    {   
        fname:fname,email:email,cno:cno,age:age,
        gender:gender,dob:dob,cno:cno,address:address
    };
    var myobj2=JSON.parse(localStorage.getItem("prakshJSON"));
    myobj2.splice(len1-1,1,details);
    localStorage.setItem("prakshJSON",JSON.stringify(myobj2));
    alert(":) changes Updated\n:) verify In Details Page");
    window.open("output.html");
}
function details_table()
{
    window.location.href="output.html";
}
function main_form()
{
    window.location.href="index.html";
}
function validateForm()
{
    let x = document.forms["myform"]["fname"].value;
    let y = document.forms["myform"]["email"].value;
    let z = document.forms["myform"]["cno"].value;
    let w = document.forms["myform"]["age"].value;
    if (x != "")
    {
        if (y != "")
        {
            if (z != "")
            {
                if (w != "")
                {
                    fsave();
                }
                else
                {
                    alert("Age must be filled out");
                    return false;
                }
            }
            else
            {
                alert("Contact No must be filled out");
                return false;
            }
        }
        else
        {
            alert("Email must be filled out");
            return false; 
        }   
    }
    else
    {
        alert("Name must be filled out");
        return false;
    }    
}