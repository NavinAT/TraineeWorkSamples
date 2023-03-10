var m1 = localStorage.getItem("testJSON");
var myobj2 = JSON.parse(m1);
var len0 = localStorage.getItem("et_row");
var len1 = JSON.parse(len0);      
localStorage.removeItem("et_row");

document.getElementById("fname").value=myobj2[len1-1].fname;
document.getElementById("email").value=myobj2[len1-1].email;
document.getElementById("cno").value=myobj2[len1-1].cno;
document.getElementById("city").value=myobj2[len1-1].city;
document.getElementById("State").value=myobj2[len1-1].State;
document.getElementById("age").value=myobj2[len1-1].age;
function fsave()
{
    var fname=document.getElementById("fname").value;
    var email=document.getElementById("email").value;
    var cno=document.getElementById("cno").value;
    var city=document.getElementById("city").value;
    var State=document.getElementById("State").value;
    var age=document.getElementById("age").value;
    var details =
    {   
        fname:fname,email:email,cno:cno,city:city,State:State,age:age           
    };
    var myobj2=JSON.parse(localStorage.getItem("testJSON"));
    myobj2.splice(len1-1,1,details);
    localStorage.setItem("testJSON",JSON.stringify(myobj2));
    alert(":) changes Updated\n:) verify In Details Page");
    window.location.href=("output.html");
}