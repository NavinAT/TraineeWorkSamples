function addrow()
{
    var member = document.getElementById('mem').value;
    var candidate = document.getElementById('name1').value;
    var Gender = document.getElementById('select').value;
    var fathername = document.getElementById('name2').value;
    var mothername = document.getElementById('name3').value;
    var year = document.getElementById('completeyear').value;
    var address = document.getElementById('adde').value;
    var mail = document.getElementById('email').value;
    var mobile1 = document.getElementById('mobile1').value;
    var mobile = document.getElementById('mobile').value;
    var status = document.getElementById('status').value;
    var work = document.getElementById('work').value;
    var card = document.getElementById('card').value;
    let data = {member:member,candidate:candidate,Gender:Gender,fathername:fathername,mothername:mothername,year:year,address:address,mail:mail,mobile1:mobile1,mobile:mobile,status:status,work:work,card:card};
    var varobj = [];
    var obj =  localStorage.getItem("value1");
    var jk = JSON.parse(obj);
    if(obj)
    {
        var arr = JSON.parse(obj);
        arr.push(data);
        localStorage.setItem("value1", JSON.stringify(arr));
    }
    else
    {
        varobj.push(data);
        localStorage.setItem("value1", JSON.stringify(varobj));
    }
    if(member === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(candidate === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(Gender === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(fathername === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(mothername === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(year === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(address === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(mail === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(mobile1 === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(mobile === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(status === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(work === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
    else if(card === '')
    {
        jk.splice(obj-1,0);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(jk));
    }
}
function viewData()
{
    location.href = "sample.html";
}
function validate()
{
    let a = document.forms["myform"]["mem"].value;
    let b = document.forms["myform"]["name1"].value;
    let c = document.forms["myform"]["name2"].value;
    let d = document.forms["myform"]["name3"].value;
    let e = document.forms["myform"]["gen"].value;
    let f = document.forms["myform"]["year"].value;
    let g = document.forms["myform"]["add"].value;
    let h = document.forms["myform"]["mail"].value;
    let k = document.forms["myform"]["mobileno"].value;
    let p = document.forms["myform"]["card"].value;
    if (a == "")
    {
        alert("Institude Name must be filled out");
        return false;
    }
    else if(b == '')
    {
        alert("Candidate Name must be filled out");
        return false;
    }
    else if(c == '')
    {
        alert("Father Name must be filled out");
        return false;
    }
    else if(d == '')
    {
        alert("Mother Name must be filled out");
        return false;
    }
    else if(e == '')
    {
        alert("Gender must be filled out");
        return false;
    }
    
    else if(f == '')
    {
        alert("Year must be filled out");
        return false;
    }
    else if(g == '')
    {
        alert("Address must be filled out");
        return false;
    }
    else if(h == '')
    {
        alert("Mail id must be filled out");
        return false;
    }
    else if(k == '')
    {
        alert("Mobile number must be filled out");
        return false;
    }
    else if(p == '')
    {
        alert("card must be filled out");
        return false;
    }
}
