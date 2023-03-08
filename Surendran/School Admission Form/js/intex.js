
    
                                         
                   
               
 function save() {


                    var std     =document.getElementById("std").value;
                     var sec     = document.getElementById("sec").value; 
                     var medium  = document.getElementById("medium").value;  
                     var fname   = document.getElementById("fname").value;
                     var mname   = document.getElementById("mname").value;
                     var lname   = document.getElementById("lname").value;
                     var DOB      =  document.getElementById("dob").value; 
                     var age      =  document.getElementById("age").value;
                     var farname  =  document.getElementById("farname").value;
                     var momname  =  document.getElementById("momname").value;
                     var bldgp    =  document.getElementById("bldgp").value;
                     var mrf      =  document.getElementById("mrf").value;
                     var adds     =  document.getElementById("adds").value; 
                     var adds2    =  document.getElementById("adds2").value; 
                     var cty      =  document.getElementById("cty").value;
                     var dt       =  document.getElementById("dt").value ;
                     var st       =  document.getElementById("st").value;
                     var pc       =  document.getElementById("pc").value;   
                     var mf       = document.getElementById("mf").value;     
                     
           


             let text={std: std,sec: sec,medium: medium, fname: fname,mname: mname,lname: lname, DOB: DOB,age: age,farname :farname,momname: momname ,bldgp: bldgp ,mrf: mrf,adds: adds, adds2:adds2, cty: cty, dt: dt,st:st, pc: pc, mf:mf};
                    var obj = localStorage.getItem("txtvalue");  
                     localStorage.removeItem("row");
                     var arr = JSON.parse(obj);
                     arr.splice(row-1,1,text);
                     localStorage.setItem("txtvalue", JSON.stringify(arr));
                 }




function student_login(){
            window.location.href = "intex.html";}
 function teacher_login(){
            window.location.href = "output.html";}







    function btn() {
          
          var obj = localStorage.getItem("txtvalue");
          var arr = JSON.parse(obj);
          var delrow = localStorage.getItem("row");
            var row = JSON.parse(delrow);


            if (confirm("delete this application")) {
           
             if(arr[0]==null){
              alert("Their is no Data for delete");}
                                  
               else if (row != null ){
                    arr.splice(row-1, 1);
                                    localStorage.setItem("txtvalue",JSON.stringify(arr));
                                   location.reload(); } 
               else {
                      alert("pls selsect the row"); }
                      
                               }} ;               


                                     


   function btnedit() {
           var obj = localStorage.getItem("txtvalue");
            var arr = JSON.parse(obj);
             var editrow = localStorage.getItem("row");
            var row = JSON.parse(editrow);


            if (confirm("edit this application")) {
                          if(arr[0]==null){
                                    alert("Their is no Data for Edit")
                                   }
                          else if(row !=null){
                                window.location.href = "edit.html"; }
                          else {
                                  alert("pls select the row for Edit")
                                    
                                       }  }};


                               


function select(x) {
 
    var obj = localStorage.getItem("txtvalue");
    var arr = JSON.parse(obj);
 

var row=x.rowIndex-0;

localStorage.setItem("row", JSON.stringify(row));
x.classList.toggle("select");}



  
 
 

 
 function home(){
   window.location.href="home.html";
 }                                              


                                     


  