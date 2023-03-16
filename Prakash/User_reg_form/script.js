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
                    myfun();
                }
                else{
                    alert("Age must be filled out");
                    return true;
                    
                }
            }
            else
            {
                alert("Contact No must be filled out");
                return true;
            }
        }
        else
        {
            alert("Email must be filled out");
            return true; 
        }   
    }
    else
    {
        alert("Name must be filled out");
        return true;
    }    
}
function myfun()
{    
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var cno = document.getElementById("cno").value;
    var age = document.getElementById("age").value;
    var gender  = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var object1=
        {   
            fname:fname,email:email,cno:cno,age:age,
            gender:gender,dob:dob,address:address
        };
    var arrobj=[];
    var obj=localStorage.getItem("prakshJSON");
    if(obj)
    {
        var arr=JSON.parse(obj);
        arr.push(object1)
        localStorage.setItem("prakshJSON",JSON.stringify(arr));
    }
    else
    {
        arrobj.push(object1);
        localStorage.setItem("prakshJSON",JSON.stringify(arrobj));
    }
    alert("Form Submitted");
    details_table1();
}
function details_table()
{  
    let dform = localStorage.getItem("prakshJSON");
    let dform1 = JSON.parse(dform);   
    if(dform1.length == 0)
    {        
        alert("Table Is Empty\nPlease Fill the Form")
    }
    else
    {
        window.open("output.html");
    }      
}
function main_form()
{
    window.open("Welcome.html");
}
function details_table1()
{
    details_table();
}
function edit()
{
    details_table();
}
function about_form()
{
    window.open("about.html");
}
