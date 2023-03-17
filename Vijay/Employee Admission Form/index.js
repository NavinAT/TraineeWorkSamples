// go to signup page
function signuppage() 
{
    window.location.href="signup.html"
}
//go to signin page
function signin()
{
    window.location.href="login.html";
}
// go to login page
function cancelbutton()
{
    location.href="login.html";
}
//Signup function
function signup() 
{
    var username = document.getElementById("username1").value;
    var gmail = document.getElementById("gmail1").value;
    var password = document.getElementById("password1").value;
    var signupdata1 = {username:username,gmail:gmail,password:password};   
    var log = [];          
    var logdat = localStorage.getItem("signupstorage");
    var store = JSON.parse(logdat);
    if(username==''|| gmail == ''|| password == '')
    {
        alert('Please complete the details');
        store.splice(logdat-1,0);
        localStorage.setItem("signupstorage",JSON.stringify(store));
    }
    else if(logdat)
    { 
        var store1 = JSON.parse(logdat);
        store1.push(signupdata1);
        localStorage.setItem("signupstorage",JSON.stringify(store1));
        alert('Signup successful');
        window.location.href="login.html";
    }
    else
    {
        log.push(signupdata1);
        localStorage.setItem("signupstorage",JSON.stringify(log));
    } 
    var store2 = JSON.parse(logdat);
    for(var i=0; i <= store2.length; i++)
    {
        var gmailname = store2[i];
        var Gmail1 = gmailname.gmail;
        if(document.getElementById('gmail1').value === Gmail1) 
        {
            alert('Please Provide Different GmailId');
            store.splice(logdat-1,0);
            localStorage.setItem("signupstorage",JSON.stringify(store));
            return;       
        }
    }
}
//login
function login() 
{
    var loger = localStorage.getItem('signupstorage');
    var logstore = JSON.parse(loger);
    for (var i = 0; i <= logstore.length; i++) 
    {
        var checklog = logstore[i];
        var Username = checklog.username;
        var Password = checklog.password;      
        if(document.getElementById('username').value === "" && document.getElementById('password').value === "")
        {
            alert("Please Provide the Details!");
            return 0;
        }
        else if(document.getElementById('username').value != Username && document.getElementById('password').value != Password) 
        {
            alert("Failed logged in!");
            location.reload();
            return 0;
        }
        else if(document.getElementById('username').value === Username && document.getElementById('password').value === Password)
        {
            alert("Successfully logged in!");
            window.location.href="employee.html";
            return;
        }       
    }
}
//newpassword
function nextfunction() {
    var forgot = localStorage.getItem('signupstorage');
    var forgotdat = JSON.parse(forgot);
    for (var i = 0; i <= forgotdat.length; i++) 
    {
        var checkfor = forgotdat[i];
        var forUser = checkfor.username;
        var forGmail = checkfor.gmail;       
        if(document.getElementById('forgotname').value === "" && document.getElementById('forgotgmail').value === "")
        {
            alert("Please Provide the Details!");
            return 0;
        }
        else if(document.getElementById('forgotname').value != forUser && document.getElementById('forgotgmail').value != forGmail) 
        {
            alert("Provide Right Details");
            return;
        } 
        else if(document.getElementById('forgotname').value === forUser && document.getElementById('forgotgmail').value === forGmail)
        {
            alert("Successfully logged in!");
            return 0;
        }      
    }
}