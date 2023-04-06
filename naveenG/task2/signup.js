function signupsave()
{
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var store = {firstname:firstname,lastname:lastname,email:email,pass:pass};
    var empty = [];
    var mine = localStorage.getItem("value3");
    var arr_two = JSON.parse(mine);
    if(firstname==''|| lastname == ''|| email == ''|| pass == '')
    {
        alert('Please fill all the given details');
        arr_two.splice(mine-1,0);
        localStorage.setItem("value3",JSON.stringify(arr_two));
    }
    else if(mine)
    { 
        var arr_one = JSON.parse(mine);
        arr_one.push(store);
        localStorage.setItem("value3",JSON.stringify(arr_one));
        alert('Sign up successful');
        window.location.href="login.html";
    }
    else
    {
        empty.push(store);
        localStorage.setItem("value3",JSON.stringify(empty));
    }
}
function back()
{
    location.href="login.html";
}

