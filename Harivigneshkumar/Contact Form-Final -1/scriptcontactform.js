function myfun()
{
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;
    var website=document.getElementById("website").value;
    var mobilenumber=document.getElementById("mobilenumber").value;
    var work=document.getElementById("work").value;
    var Gender=document.getElementById("Gender").value
    var Address=document.getElementById("address").value;
    var Groups=document.getElementById("Groups").value;
    var Messager=document.getElementById("messager").value;
    var state=document.getElementById("state").value;
    if(fname != "" && lname != "" && email != "" && dob != "" && mobilenumber != "" && work != ""  && Address !="")
    {
        var myObj = {"fname": fname, "lname": lname, "email": email, "dob":dob, "website":website,"mobilenumber":mobilenumber,
        "Address":Address, "work":work,"Groups":Groups,"messager":Messager,"state":state,"Gender":Gender};
        var arrObj=[];
        var object=localStorage.getItem("testJSON");
        if(object)
        {
            var arr=JSON.parse(object);
            arr.push(myObj);
            localStorage.setItem("testJSON",JSON.stringify(arr));
        }
        else
        {
            arrObj.push(myObj);
            localStorage.setItem("testJSON",JSON.stringify(arrObj));
        }
        function resetlocalstorage()
        {
            localStorage.clear();
        }
    }
}