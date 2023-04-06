var getdata = JSON.parse(localStorage.getItem("username1"));
var h5 = document.getElementById("h5");
h5.innerText = getdata[getdata.length - 1];
var addbtn = document.getElementById("addbtn");
let fetcheddata = [...JSON.parse(localStorage.getItem("userdata"))];

//ADD EVENT
addbtn.addEventListener("click", function()
{
    window.location = "information Form.html";
});

//EVENT LISTIENER
document.addEventListener("DOMContentLoaded", () =>
{
    var table = document.getElementById('list');

    for(var i = 0; i <= fetcheddata.length; i++)
    {
        var tr = `tr${i}`;
        var tr = document.createElement('tr');

        tr.setAttribute("onclick", "RowSelction()");
        tr.setAttribute("id", i + 1);
        tr.setAttribute("class", "tr");
        var data = fetcheddata[i];
        var sno = document.createElement("td");

        sno.innerText = i + 1;
        tr.appendChild(sno);

        for(var x = 0; x <= 10; x++)
        {
            var td = `td${x}`;
            td = document.createElement('td');
            let data2 = Object.values(data);
            td.append(data2[x]);
            tr.appendChild(td);
            table.appendChild(tr);
        }

    }
});

//ROW SELCTION

function RowSelction()
{
  var table = document.getElementById('list');
  var cells = table.getElementsByTagName('td');

    for(var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function () {
        var rowId = this.parentNode.rowIndex;
        var rowsNotSelected = table.getElementsByTagName('tr');
        for(var row = 0; row < rowsNotSelected.length; row++)
        {
            rowsNotSelected[row].style.backgroundColor = "";
            rowsNotSelected[row].classList.remove('selected');
        }
        var rowSelected = table.getElementsByTagName('tr')[rowId];
        rowSelected.className += " selected";
        msg = rowId;
        }
    }
}

//DELETE EVENT
function del() 
{
    var delele = document.getElementById(msg);
    delele.remove(-1);
    localStorage.removeItem("userdata");
    fetcheddata.splice(-1)
    let updated = fetcheddata
    localStorage.setItem(
        "userdata",
        JSON.stringify(
            ...JSON.parse(localStorage.getItem("userdata") || '[]'), (updated)));

}


//EDIT EVENT
function editing() 
{
    localStorage.setItem(
        "editing",
        JSON.stringify([
            ...JSON.parse(localStorage.getItem("editing") || '[]'), (msg - 1)]));
    window.location = "information Form.html"
}













































