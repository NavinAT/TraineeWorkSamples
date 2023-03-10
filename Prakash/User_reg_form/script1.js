let myjson = localStorage.getItem("testJSON");
let myobj = JSON.parse(myjson);
for(let i=0;i<myobj.length;i++)
{
    var data=myobj[i];
    document.write('<tr><td>'+ data.fname+'</td><td>'+data.email+'</td><td>'+ data.cno+'</td><td>'+ data.city+'</td><td>'+ data.State+'</td><td>'+ data.age+'</tr><br>');   
}
function viewform()
{
    alert("back To Form");
    window.location.href ="index.html";
}
function mydel()
{  
    var myobj1=JSON.parse(localStorage.getItem("testJSON"));
    var d_row = document.getElementById("delete_row").value;
    var len=myobj1.length;
    if (d_row !== '' )
    {   
        if( d_row > len)
        {            
            alert('Enter The  Valid Row To Delete');
        }
        else
        {
            myobj1.splice(d_row-1,1);
            localStorage.setItem("testJSON",JSON.stringify(myobj1));
            location.reload();
        }
    }
    else
    {            
        alert('Enter The Row No To Delete');
    }
} 
function myedit()
{  
    var myobj2=JSON.parse(localStorage.getItem("testJSON"));
    var erow = document.getElementById("editrow").value;
    var len=myobj2.length; 
    if (erow !=='')
    {   
        if( erow > len)
        {            
            alert('Enter The  Valid Row To Edit');
        }
        else
        {
            localStorage.setItem("et_row",JSON.stringify(erow));
            window.open("edit.html",'_blank');
        }
    }
    else
    {            
        alert("Enter The Row No To Edit");
    }          
}