let rigisterbtn = document.getElementById("registerbtn");


var username = document.getElementById("username");
if(localStorage.getItem("userdata1") == undefined){
    document.addEventListener("DOMContentLoaded", () => {
        localStorage.setItem(
            "userdata1",
            JSON.stringify([
                ...JSON.parse(localStorage.getItem("userdata1") || '[]'), '']))
    })
}

//RIGISTER BUTTON CLICK EVENT
rigisterbtn.addEventListener("click", () => {
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    var mail = document.getElementById("email").value;
    let username = document.getElementById("username").value;

    let fetcheddata = [...JSON.parse(localStorage.getItem("userdata1"))];

    var mailcheck = false;
    let usercheck = false;

    for(i = 0; i < fetcheddata.length; i++) 
    {

        let checkname = fetcheddata[i].username;
        let checkmail = fetcheddata[i].email;

        if(username === checkname) 
        {
            usercheck = true;
        }

        else if(mail === checkmail) 
        {
            mailcheck = true;
        }
        else 
        {
            continue;
        }
    }

    if(usercheck === true) 
    {

        window.alert("Username not valid or already exists");
    }

    else if(username.length < 4) 
    {
        window.alert("username must be more than 4 letters");
    }

    else if(mailcheck === true) 
    {
        window.alert("Given mail is already exsits")
    }

    else if(mail != "" && pass1 != "" && pass1 === pass2 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) 
    {
        let formel = document.forms.rig;
        let formdata = ([...new FormData(formel)]);
        let json = {};
         formdata.forEach((e) =>
            {
                json[e[0]] = e[1];
            })
              localStorage.setItem(
                "userdata1",
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem("userdata1") || '[]'), (json)]));

        window.open("loginpage.html", "_self");
    }
    else 
    {
        window.alert("❌input values Are not valid...❌");
    }
});

//USERNAME CHECK WHEN AFTER TYPING
username.addEventListener("change", () => {
    for (i = 0; i < fetcheddata.length; i++) {
        let checkname = fetcheddata[i].username;
        if (username.value === checkname) {
            window.alert("Username not valid or already exists");
        }
    }
})

//SIGN IN BUTTON
function signin() 
{
    window.open("Loginpage.html", "_self");
}




