
/*home page*/
function student_login()
{
        window.location.href = "intex.html";
}
 function teacher_login()
 {
        window.location.href = "login.html";
        row=0;
        localStorage.setItem("row", JSON.stringify(row));
}
/*intex page */
function getdata(){
        var std = document.getElementById("std").value; 
        var sec = document.getElementById("sec").value; 
        var medium = document.getElementById("medium").value;   
        var fname = document.getElementById("fname").value;
        var mname = document.getElementById("mname").value;
        var lname = document.getElementById("lname").value;
        var DOB = document.getElementById("dob").value; 
        var age = document.getElementById("age").value;
        var farname = document.getElementById("farname").value;
        var momname = document.getElementById("momname").value;
        var bldgp = document.getElementById("bldgp").value;
        var mrf = document.getElementById("mrf").value;
        var adds = document.getElementById("adds").value; 
        var adds2 = document.getElementById("adds2").value; 
        var cty = document.getElementById("cty").value;
        var dt = document.getElementById("dt").value; 
        var st = document.getElementById("st").value; 
        var pc = document.getElementById("pc").value;    
        var mf = document.getElementById("mf").value;
        var arrobj=[];
        var obj = localStorage.getItem("txtvalue");  
        let text={"std": std,"sec": sec,"medium": medium, "fname": fname,"mname": mname,"lname": lname, "DOB": DOB,"age": age,farname :farname,momname: momname ,"bldgp": bldgp ,"mrf": mrf,"adds": adds, "adds2":adds2, "cty": cty, "dt": dt,"st":st, "pc": pc, "mf":mf};
        if(obj)
        {
                var arr = JSON.parse(obj);     
                arr.push(text);
                localStorage.setItem("txtvalue", JSON.stringify(arr));
        }
        else
        {
               arrobj.push(text);
               localStorage.setItem("txtvalue", JSON.stringify(arrobj));
                location.reload();
        } 
        var row=0;
        localStorage.setItem("row",JSON.stringify(row));
        alert("application successfully submited")
}
/*edit page*/ 
function save() 
{
        var std =document.getElementById("std").value;
        var sec = document.getElementById("sec").value; 
        var medium = document.getElementById("medium").value;  
        var fname = document.getElementById("fname").value;
        var mname = document.getElementById("mname").value;
        var lname = document.getElementById("lname").value;
        var DOB =  document.getElementById("dob").value; 
        var age =  document.getElementById("age").value;
        var farname = document.getElementById("farname").value;
        var momname = document.getElementById("momname").value;
        var bldgp = document.getElementById("bldgp").value;
        var mrf = document.getElementById("mrf").value;
        var adds = document.getElementById("adds").value; 
        var adds2 = document.getElementById("adds2").value; 
        var cty = document.getElementById("cty").value;
        var dt = document.getElementById("dt").value ;
        var st = document.getElementById("st").value;
        var pc = document.getElementById("pc").value;   
        var mf = document.getElementById("mfedit").value;     
        let text={std: std,sec: sec,medium: medium, fname: fname,mname: mname,lname: lname, DOB: DOB,age: age,farname :farname,momname: momname ,bldgp: bldgp ,mrf: mrf,adds: adds, adds2:adds2, cty: cty, dt: dt,st:st, pc: pc, mf:mf};
        var obj = localStorage.getItem("txtvalue");  
        localStorage.removeItem("row");
        var arr = JSON.parse(obj);
        arr.splice(row-1,1,text);
        localStorage.setItem("txtvalue", JSON.stringify(arr));
}

/*output page*/
function btn() 
{
        var obj = localStorage.getItem("txtvalue");
        var arr = JSON.parse(obj);
        var delrow = localStorage.getItem("row");
        var row = JSON.parse(delrow);
        if (confirm("delete this application"))
        {
                if(arr[0]==null)
                {
                        alert("Their is no Data for delete");
                }
               else if (row !== 0 )
               {
                        arr.splice(row-1, 1);
                        localStorage.setItem("txtvalue",JSON.stringify(arr));
                        var row=0;
                        localStorage.setItem("row",JSON.stringify(row));
                        location.reload();
              } 
               else 
               {
                        alert("pls selsect the row");
               }
        }
}              
function btnedit() 
{
        var obj = localStorage.getItem("txtvalue");
        var arr = JSON.parse(obj);
        var editrow = localStorage.getItem("row");
        var row = JSON.parse(editrow);
        if (row !== null) 
        {
                if(arr[0]==null)
                 {
                        alert("Their is no Data for Edit")
                 }
                 else if(row !== 0)
                 {
                        window.location.href = "edit.html";
                     
                 }
                 else 
                 {
                         alert("pls select the row for Edit")
                 }  
        }
}
function home()
{
        window.location.href="home.html";
}
function highlight_row() 
{
        var table = document.getElementById('table');
        var cells = table.getElementsByTagName('td');  
        for (var i = 0; i < cells.length; i++) 
        {
                var cell = cells[i];
                cell.onclick = function () 
                {
                        var rowId = this.parentNode.rowIndex;
                        localStorage.setItem("row", JSON.stringify(rowId));
                        var rowsNotSelected = table.getElementsByTagName('tr');
                        for (var row = 0; row < rowsNotSelected.length; row++) 
                        {
                                rowsNotSelected[row].style.backgroundColor = "";
                                rowsNotSelected[row].classList.remove('selected');
                        }
                        var rowSelected = table.getElementsByTagName('tr')[rowId];
                        rowSelected.style.backgroundColor = "light blue";
                        rowSelected.className += " selected";    
                }
        } 
      
}window.onload = highlight_row;
function deselect(x)
{   
        x.style.background=" transparent";
        var row=0;
        localStorage.setItem("row",JSON.stringify(row));
        location.reload();
 }
 /*login page */
 function login_btn()
{
        var login_user=document.getElementById('login_user').value;
        var login_psw=document.getElementById('login_psw').value;
        var arr=localStorage.getItem('user');
        var obj = JSON.parse(arr);
        for(let i=0; i<obj.length;i++)
        {
                var user = obj[i];
                var check_user=user.username;
                var check_psw=user.psw; 
        }
        if(login_user === check_user && check_psw === login_psw )
        {
                alert("Successfully to logged in!");
                window.location.href="output.html";
                return 0;
        }
        else if(login_user === ""  && login_psw === "")
        {
                alert("pls enter the username and password");
        }          
        else 
        {
                alert("incorrect username and password!");
                return 0;
        } 
}
 function forget()
 {
        window.location.href="forget.html";
 }
 /*signup page */
 
function signup_btn()
{
        var username=document.getElementById('username').value;
        var psw=document.getElementById('psw').value;
        var email=document.getElementById('email').value;
        var phone=document.getElementById('phone').value;
        var cmpsw=document.getElementById('cmpsw').value;
        var arrobj=[];
        var obj = localStorage.getItem("user");  
        let text={"username": username,"email":email,"phone": phone,"psw": psw,"cmpsw": cmpsw};
        if(psw===cmpsw)
        {
                if(obj)
                {
                        var arr = JSON.parse(obj);     
                        arr.push(text);
                        localStorage.setItem("user", JSON.stringify(arr));
                }
                else
                {
                        arrobj.push(text);
                        localStorage.setItem("user", JSON.stringify(arrobj));
                        location.reload();
                }  
                window.location.href="login.html";
        }
        else
        {
                alert("incorrect password");
        }      
}
/*forget page */
function forget_btn()
{
        var forget_user=document.getElementById('login_user').value;
        var forget_phone=document.getElementById('phone').value;
        var arr=localStorage.getItem('user');
        var obj = JSON.parse(arr);
        for(let i=0; i<obj.length;i++)
        {
                var user = obj[i];
                var check_user=user.username;
                var check_phone=user.phone;
        }
        if(forget_user === check_user && forget_phone === check_phone )
        {
                alert("reset password send it your gmail");
                var forget_row=this.rowIndex;
                localStorage.setItem("forget_row", JSON.stringify(forget_row));
        }
        else if(forget_user === ""  && forget_phone === "")
        {
                alert("pls enter the username and password");
        }          
        else 
        {
                alert("incorrect username and phone number!");
        }
}
      
       
        

    



                                     


  