var ls = localStorage.getItem("value1");
var obj = JSON.parse(ls);
var i;
for( var i=0;i<obj.length; i++)
{
    var nav = obj[i];
    var num = 1;
    num +=i;
    document.write('<tr><td>'+ num +'</td><td id="mem">'+ nav.member +'</td><td id="name1">'+nav.candidate+'</td><td id="select">'+nav.Gender+'</td><td id="name2">'+nav.fathername+'</td><td id="name3">'+nav.mothername+'</td><td id="completeyear">'+nav.year+'</td><td id="adde">'+nav.address+'</td><td id="email">'+nav.mail+'</td><td id="mobile1">'+nav.mobile1+'</td><td id="mobile">'+nav.mobile+'</td><td id="status">'+nav.status+'</td><td id="work">'+nav.work+'</td><td id="card">'+ nav.card +'</td></tr>');
}
function delRow()
{
    var numberofuser = document.getElementById("number").value;
    if(numberofuser == '')
    {
        alert('please enter the delete row');
    }
    else if(numberofuser > obj.length)
    {
        alert('There is no data in this table')
    }else
    {
        obj.splice( numberofuser-1, 1);
        location.reload();
        localStorage.setItem("value1",JSON.stringify(obj));
    }
}
function edit()
{
    var editrow = document.getElementById('edituser').value;
    if(editrow > obj.length)
    {
        alert('Data not Found');
    }
    else if(editrow == '')
    {
        alert('Please Enter the Edit Row')
    }else
    {
        localStorage.setItem('x', JSON.stringify(editrow));
        location.href="edit.html";
    }
}
function back()
{
    location.href="index.html";
}



      
 