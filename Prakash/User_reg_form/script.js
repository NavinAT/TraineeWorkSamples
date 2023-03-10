function myfun()
{    
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var cno = document.getElementById("cno").value;
    var city = document.getElementById("city").value;
    var State = document.getElementById("State").value;
    var age = document.getElementById("age").value;
    var object1={fname:fname,email:email,cno:cno,city:city,State:State,age:age};
    var arrobj=[];
    var obj=localStorage.getItem("testJSON");
    if(obj)
        {
            var arr=JSON.parse(obj);
            arr.push(object1)
            localStorage.setItem("testJSON",JSON.stringify(arr));
        }
        else
        {
            arrobj.push(object1);
            localStorage.setItem("testJSON",JSON.stringify(arrobj));
        }
            alert("Sucessfull");
}
function viewform()
{
    window.location.href ="output.html";
}