let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
for(let i=0; i<obj.length; i++)
{
    var user = obj[i];
    j = i+1;
    document.write('<tr><td>'+j+'</td><td>'+ user.fname+'</td><td>'+user.mname+'</td><td>'+user.lname+'</td><td>'+user.Court_Name+'</td><td>'+user.Registration_date+'</td><td>'
                    +user.Gender+'</td><td>'+user.Mobile_number+'</td><td>'+user.Address+'</td><td>'+user.Email+'</td></tr>');
}
function editUser()
{
    var obj = localStorage.getItem("testJSON");
    var arr = JSON.parse(obj);
    if(obj)
    {
        if(arr[0] == null)
        {
            alert("Their is no Data for Edit");
        }
            else
            {
              var numberofuser = document.getElementById("numberofuser").value;
              var lengthoftable = arr.length;
              if (numberofuser)
              {
                var valid = lengthoftable>=numberofuser;
                Boolean(valid);
                if(0 < numberofuser && valid)
                {
                  var numberofuser = document.getElementById("numberofuser").value;
                  localStorage.setItem("numberEdit",JSON.stringify(numberofuser));
                  window.open("User Edit Page.html", '_blank');
                }
                else
                {
                  alert("Enter valid number");
                }
              }
              else
              {
                alert("Enter valid number");
              }
            }
          }
          else
          {
            alert("Their is no Data for Edit");
          }
        }
        function deleteUser()
        {
          var numberofuser = document.getElementById("numberofuser").value;
          let text = localStorage.getItem("testJSON");
          let obj = JSON.parse(text);
          var lengthoftable = obj.length;
          if (numberofuser)
          {
            var valid = lengthoftable>=numberofuser;
            Boolean(valid);
            if(0 < numberofuser && valid)
            {
              if (confirm("Do you want to Delete?") == true)
              {
                var arr = JSON.parse(text);
                arr.splice(numberofuser-1, 1);
                location.reload();
                localStorage.setItem("testJSON",JSON.stringify(arr));
              }
            }
            else
            {
              alert("Enter valid number");
            }
          }
          else
          {
            alert("Enter valid number");
          }
        }