function signins()
{
    var use = document.getElementById("use").value;
    var pas = document.getElementById("pas").value;
    var max = localStorage.getItem("value3");
    var nag = JSON.parse(max);
    for(var i=0;i < nag.length;i++)
    {
        var arr = nag[i];
        var Use1 = arr.email;
        var Pas1 = arr.pass;
        if(use =='' || pas =='')
        {
            location.reload();
            alert('Please enter user id or password');
            return 0;
        }
        else if(use != Use1 || pas != Pas1)
        {
            location.reload();
            alert('logined not successfully');
            return 0;
        }
        else if(use == Use1 && pas == Pas1)
        {
            location.href="index.html";
            alert('logined successful');      
        }
    }
}
function back()
{
    location.href = "login.html";
}