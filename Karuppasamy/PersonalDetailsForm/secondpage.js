
let saveobj = localStorage.getItem("localstorage");
let obj = JSON.parse(saveobj);

for(let i=0;i<obj.length;i++)
{
	var user = obj[i];
	
	j=i+1;

	document.write('<tr><td>'+j
		+'</td><td>'+user.firstname
		+'</td><td>'+user.lastname
		+'</td><td>'+user.email
		+'</td><td>'+user.phone
		+'</td><td>'+user.dob
		+'</td><td>'+user.addressline1
		+'</td><td>'+user.addressline2
		+'</td><td>'+user.city
		+'</td><td>'+user.state
		+'</td><td>'+user.zip
		+'</td><td>'+user.country
		+'</td><td>'+user.gender
		+'</td><td>'+user.occupation
		+'</td><td>'+user.company
		+'</td></tr>');
}

function edit()
{
	var obj=JSON.parse(localStorage.getItem("localstorage"));
	var index=document.getElementById("noofuser").value;
	if(obj)
	{
		
		if(obj[0]==null)
		{
			alert("Empty arr[] but not an Edit")
		}
		else{
			if(index!=0)
			{
				var userlength=obj.length;
				var valid=index <=userlength;
				Boolean(valid);
				if(index && valid)
				{
					localStorage.setItem("getno",JSON.stringify(index));
					window.open("userEditpage.html",'_blank');
				}
				else
				{
					alert("Valid Number. Enter")
				}
			}
			else
			 {
				
				alert(" Enter UserRow Number.!");
			}
			
		}
	}
	
	
	else
	{
		alert("No Objects to the Localstorage")
	}
	
}

function remove()
{
	var obj=JSON.parse(localStorage.getItem("localstorage"));
	var row=document.getElementById("noofuser").value;
	if(obj)
	{
		if(row!=0)
		{
			var userlength=obj.length;
			var valid=row<=userlength;
			Boolean(valid);
			if(row && valid)
			{
				if(confirm("Are U sure U want to Remove this Row?"))

				obj.splice(row-1,1);
				localStorage.setItem("localstorage",JSON.stringify(obj));
				location.reload();
				
			} 
			else
			{
				alert("Valid Number Enter!");
			}
			
		}
		else
		{
			alert(" Enter UserRow Number.!");
		}
		
		
	}
	if(obj[0]==null)
	{
		
		alert("No Objects to the Localstorage");
	}
}



