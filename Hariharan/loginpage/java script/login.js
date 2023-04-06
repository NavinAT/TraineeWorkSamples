
//USER VALIDATION
function next()

{
  var checkDetail = false;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  let fetcheddata = [...JSON.parse(localStorage.getItem("userdata1"))];

    for(i = 0; i < fetcheddata.length; i++) 
    {
        let checkname = fetcheddata[i].username;
        let checkpass = fetcheddata[i].password;
        if(username === checkname && password === checkpass) 
        {
        checkDetail = true;
        }
    }

    if(checkDetail === true) 
    {
        (localStorage.setItem("username1",
            JSON.stringify([
                ...JSON.parse(localStorage.getItem("username1") || '[]'), (username)])));
        window.location = "information List.html"
    }
    else
    {
        window.alert("❌user name and password incorrect...Try again❌");
    }
}

//RIGISTER EVENT
function Rigister() 
{
  window.open("Register.html", "_self");
}