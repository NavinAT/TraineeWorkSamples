var m1 = localStorage.getItem("testJSON");
var max = JSON.parse(m1);
var len0 = localStorage.getItem("z");
var len2 = JSON.parse(len0);
localStorage.removeItem("z");
document.getElementById("fname").value=max[len2-1].fname;
document.getElementById("lname").value=max[len2-1].lname;
document.getElementById("email").value=max [len2-1].email;
document.getElementById("dob").value=max[len2-1].dob;
document.getElementById("website").value=max[len2-1].website;
document.getElementById("mobilenumber").value=max[len2-1].mobilenumber;
document.getElementById("work").value=max[len2-1].work;
document.getElementById("Gender").value=max[len2-1].Gender;
document.getElementById("address").value=max[len2-1].Address;
document.getElementById("Groups").value=max[len2-1].Groups;
document.getElementById("messager").value=max[len2-1].messager;
document.getElementById("state").value=max[len2-1].state;


function savebutton(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;
    var website=document.getElementById("website").value;
    var mobilenumber=document.getElementById("mobilenumber").value;
    var work=document.getElementById("work").value;
    var Gender=document.getElementById("Gender").value;
    var Address=document.getElementById("address").value;
    var Groups=document.getElementById("Groups").value;
    var Messager=document.getElementById("messager").value;
    var state=document.getElementById("state").value;

    var myobj7 = {fname: fname, lname: lname, email: email,dob:dob, website:website,mobilenumber:mobilenumber,
        Address:Address, work:work,Groups:Groups,messager:Messager,state:state,Gender:Gender};
           
    var obj6 = localStorage.getItem("testJSON");
    localStorage.removeItem("z");
    var arr6= JSON.parse(obj6);
    arr6.splice(len2-1,1,myobj7);
    localStorage.setItem("testJSON", JSON.stringify(arr6));  

}

function cancelbutton(){
    window.location.href="index.html";
}

   