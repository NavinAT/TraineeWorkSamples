let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);

for(let i=0;i<obj.length;i++){
    var client= obj[i];
    var S_no = 1;
    S_no+=i;
    document.write('<tr id="tr"><td >'+S_no+'</td><td id="data">'+client.fname+'</td><td id="data1">'+client.lname+
        '</td><td id="data2">'+client.email+'</td><td id="data3">'+client.dob+'</td><td id="data4">'+
    client.website+'</td><td id="data5">'+client.mobilenumber+'</td><td id="data6">'+client.work+
            '</td><td id="data7">'+client.Gender+'</td><td id="data8">'+client.Address+'</td><td id="data9">'
                +client.Groups+'</td><td id="data10">'+client.messager+'</td><td id="data11">'+client.state+'</td></tr>'
                   );
}
function deleteRow() {
  var users=document.getElementById("number").value;
  var text=localStorage.getItem("testJSON");
  var arr2=JSON.parse(text);
  var lengthoftable=arr2.length;
  if(users){
    var validation = lengthoftable>=users;
    Boolean(validation);
    if(0<users && validation){
      if (confirm("do u want to delete this row?")==true){
        arr2.splice(users -1, 1);
        location.reload();
        localStorage.setItem("testJSON",JSON.stringify(arr2));
      }
    }
    else{
      alert("enter the no inside the table");
    }
  }
    else{
      alert("First enter the number in the box");
    }
}

function edit(){
  var myobj9=JSON.parse(localStorage.getItem("testJSON"));
  var erow =document.getElementById("number1").value;
  var len2=myobj9.Length;

if(erow !=='')
{
  if( erow > len2)
    {
      alert("enter the valid row to edit");
    }
  else
  {
    localStorage.setItem("z",JSON.stringify(erow));
    window.open("index2.html","_blank");
  }
}
  else
  {
    alert("Enter The Row No To Edit");

  }
}

function undo(){
  window.location.href="contactform.html";
}