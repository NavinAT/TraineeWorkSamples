var username = document.getElementById("username");
var password = document.getElementById("password");




function next() {
   
window.location = "information List.html"
if(username.value === ""&& username.value.length < 5 || password.value==="" )
  alert ("this item cannot be blank")  ;


else (  localStorage.setItem("username1",
JSON.stringify([
...JSON.parse(localStorage.getItem("username1")||'[]'),(username.value).toUpperCase()])
))



}