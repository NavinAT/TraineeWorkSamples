var ls = localStorage.getItem("value1");
var obj = JSON.parse(ls);
var nk = localStorage.getItem("x");
var My = JSON.parse(nk);
var num = '';
num += My;
var nav = obj[My-1];
document.write('<tr><td>'+ num +'</td><td id="mem" contenteditable = "true">'+ nav.member +'</td><td id="name1" contenteditable = "true">'+nav.candidate+'</td><td id="select">'+'<span><select  id="sel"  required><option value="None">None</option><option value="Male">Male</option><option value="Female">Female</option></select></span>'+'</td><td id="name2" contenteditable = "true">'+nav.fathername+'</td><td id="name3" contenteditable = "true">'+nav.mothername+'</td><td id="completeyear" contenteditable = "true">'+nav.year+'</td><td id="adde" contenteditable = "true">'+nav.address+'</td><td id="email" contenteditable = "true">'+nav.mail+'</td><td id="mobile1" contenteditable = "true">'+nav.mobile1+'</td><td id="mobile" contenteditable = "true">'+nav.mobile+'</td><td id="status" contenteditable = "true">'+nav.status+'</td><td id="work" contenteditable = "true">'+nav.work+'</td><td id="card" contenteditable = "true">'+ nav.card +'</td></tr>');
document.getElementById('sel').value = nav.Gender;
function save()
{
    var member = document.getElementById('mem').innerHTML;
    var candidate = document.getElementById('name1').innerHTML;
    var Gender = document.getElementById('sel').value;
    var fathername = document.getElementById('name2').innerHTML;
    var mothername = document.getElementById('name3').innerHTML;
    var year = document.getElementById('completeyear').innerHTML;
    var address = document.getElementById('adde').innerHTML;
    var mail = document.getElementById('email').innerHTML;
    var mobile1 = document.getElementById('mobile1').innerHTML;
    var mobile = document.getElementById('mobile').innerHTML;
    var status = document.getElementById('status').innerHTML;
    var work = document.getElementById('work').innerHTML;
    var card = document.getElementById('card').innerHTML;
    let data = {member:member,candidate:candidate,Gender:Gender,fathername:fathername,mothername:mothername,year:year,address:address,mail:mail,mobile1:mobile1,mobile:mobile,status:status,work:work,card:card};
    obj.splice(My-1,1,data);
    location.reload();
    localStorage.setItem('value1',JSON.stringify(obj));
    location.href = "sample.html";
}
function cancel()
{
    location.href = "sample.html"
}
