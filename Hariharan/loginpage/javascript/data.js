var getdata = JSON.parse(localStorage.getItem("username1"));
var h5 = document.getElementById("h5");
h5.innerText = getdata[getdata.length - 1];

let fetcheddata = [...JSON.parse(localStorage.getItem("userdata"))];

var addbtn = document.getElementById("addbtn");


addbtn.addEventListener("click", function () {

  localStorage.removeItem("editing");
  window.location = "information Form.html";
})

//event Listioner
document.addEventListener("DOMContentLoaded", () => {
  var table = document.getElementById('list');



  for (var i = 0; i <= fetcheddata.length; i++) {

    var tr = `tr${i}`;
    var tr = document.createElement('tr');
    tr.setAttribute("id",i+1);
    tr.setAttribute("class","tr")
    
    var data = fetcheddata[i];
    var sno = document.createElement("td");
    var edit = document.createElement("td");

    sno.innerText = i + 1;
    tr.appendChild(sno);

    const btn = document.createElement("BUTTON");
    btn.innerHTML = "edit";
    btn.setAttribute("id", i);
    btn.setAttribute("class", "Editbutton");
    btn.addEventListener("click", function () {

      //editing(this.id);
      localStorage.setItem(
        "editing",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("editing") || '[]'), (this.id)]))

      window.location = "information Form.html"
    });
    edit.appendChild(btn);

    for (var x = 0; x < 11; x++) {
      var td = `td${x}`;

      td = document.createElement('td');


      let data2 = Object.values(data);

      td.append(data2[x]);
      tr.appendChild(td);
      tr.appendChild(edit);
      table.appendChild(tr);
    }

  }

  

})
//delete the table
function del() {
 

for(var i=0 ; i<fetcheddata.length;i++){

  var delele = document.getElementById(i+1);
}
  delele.remove(-1);


localStorage.removeItem("userdata");
 fetcheddata.splice(-1)
  let updated = fetcheddata
  localStorage.setItem(
    "userdata",
    JSON.stringify(
      ...JSON.parse(localStorage.getItem("userdata") || '[]'), (updated)))
  
  }

 
  function showTableData() {
   
    var myTab = document.getElementById('list');

   
    for (i = 1; i < myTab.rows.length; i++) {

       
        var objCells = myTab.rows.item(i).cells;

       
        for (var j = 0; j < objCells.length; j++) {
           console.log(objCells.item(j)); 
        }
       
    }
}


 










  





























