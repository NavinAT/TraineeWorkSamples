let btnin = document.getElementById("btn");
let formel = document.forms.info;

const hand = (event) => 
{
    let formdata = ([...new FormData(formel)]);
    let json = {};
    formdata.forEach((e) =>
    {
        json[e[0]] = e[1];
    });
    localStorage.setItem(
        "userdata",
        JSON.stringify([
            ...JSON.parse(localStorage.getItem("userdata") || '[]'), (json)]));
}

//FORM SUBMIT EVENT
formel.addEventListener('submit', hand);
let firstnamein = document.getElementById("firstname");
let lable = document.getElementById("lable");

//NAME CHANGEING
firstnamein.addEventListener("change", () =>
{
    lable.innerText = `Welcome ${firstnamein.value} `;
});

//EDITING
document.addEventListener("DOMContentLoaded", () => {
    let fetcheddata = [...JSON.parse(localStorage.getItem("userdata"))];
    let fetchedid = [...JSON.parse(localStorage.getItem("editing"))];
    let x = fetchedid[fetchedid.length - 1];
    var data = fetcheddata[x];
    const data2 = Object.values(data);
    let firstnamein = document.getElementById("firstname");
    let lastnamein = document.getElementById("lastname");
    let btnin = document.getElementById("btn");
    var age = document.getElementById("age");
    let dob = document.getElementById("dob");
    let edu = document.getElementById("education");
    let domain = document.getElementById("domain");
    let email = document.getElementById("email");
    let ele = document.getElementsByName('Gender');
    let studtinst = document.getElementsByName("yes");
    let resume = document.getElementById("Resume");
    let cmts = document.getElementById("comments");

    firstnamein.value = data2[0];
    lastnamein.value = data2[1];
    ele.value = data2[2];
    age.value = data2[3];
    dob.value = data2[4];
    edu.value = data2[5];
    domain.value = data2[6];
    email.value = data2[7];
    studtinst.value = data2[8];
    cmts.value = data2[10];

    //To get the edting data and clear it from local storage    
    localStorage.removeItem("userdata");
    fetcheddata.splice(x, 1);
    let updated = fetcheddata
    localStorage.setItem(
        "userdata",
        JSON.stringify(
            ...JSON.parse(localStorage.getItem("userdata") || '[]'), (updated)));
    localStorage.removeItem("editing");
});






