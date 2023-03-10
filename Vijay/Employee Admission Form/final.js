//Get Data frm LocalStorage
var save=localStorage.getItem("storage");
var obj = JSON.parse(save);

//Back Button
function backbut()
{
    window.location.href="employee.html";
}

//Delete Row
function delet() 
{
    var n =prompt('ENTER THE ROW');
    if(n>obj.length)
    {
        alert("User Not Found");               
    }
    else if(n == 0)
    {              
        alert('Please enter the row');
    }  
    else if(n==null)
    {
        alert("User Cancelled");
    }
    else
    {  
        var j=n;
        document.getElementById("table").deleteRow(j);
        var data1 = JSON.parse(save)
        data1.splice(j -1,1);      
        location.reload();       
        localStorage.setItem("storage",JSON.stringify(data1));
    }
}

//Edit Row
function editv() 
{ 
    var j = prompt('Enter the row number');
    if(j> obj.length)
    {
        alert("The User is not found");
        
    }
    else if(j ==''){
        alert('Please Enter the Row');
    }
    else if(j==null)
    {
        alert('User Cancelled');
    }
    else
    {
        localStorage.setItem('value1',JSON.stringify(j));
        window.location.href="sp.html";
    }      
}

//Display the Datas
for(let i=0;i<obj.length;i++)
{
    var display = obj[i];
    var num = 1;
    num +=i;
    document.write('<tr id="tabes1"><td>' + num +'</td><td>' + display.Resume + '</td><td>' + display.Fname + '</td><td>' + display.Lname + '</td><td>' + display.DOB + '</td><td>' + display.Contact + '</td><td>' + display.Address +
         '</td><td>' + display.Gmail + '</td><td>' + display.Gender + '</td><td>' + display.Qualification + '</td><td>' + display.Department + '</td><td>' + display.State + '</td><td>' + display.City + '</td></tr>');        
} 