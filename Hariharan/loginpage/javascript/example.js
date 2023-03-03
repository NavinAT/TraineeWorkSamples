let btnin = document.getElementById("btn");
let formel = document.forms.info;


const hand = (event) => {

    // event.preventDefault();

    let formdata = ([...new FormData(formel)]);

    let json = {};
    formdata.forEach((e) => {

        json[e[0]] = e[1];
    })
    localStorage.setItem(
        "userdata",
        JSON.stringify([
            ...JSON.parse(localStorage.getItem("userdata") || '[]'), (json)]))


}
//form submit event
formel.addEventListener('submit', hand);

let firstnamein = document.getElementById("firstname");
let lable = document.getElementById("lable");


firstnamein.addEventListener("change", () => {
    lable.innerText = `Welcome ${firstnamein.value} `;
})

document.addEventListener("DOMContentLoaded", () => {
    let fetcheddata = [...JSON.parse(localStorage.getItem("userdata"))];
    let fetchedid = [...JSON.parse(localStorage.getItem("editing"))];
    let x = fetchedid[fetchedid.length - 1];
    var data = fetcheddata[x];

    const data2 = Object.values(data);
    console.log(data2);

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
    studtinst.value = data2[8]
    cmts.value = data2[10];

    //To get the edting data and clear it from local storage    
    localStorage.removeItem("userdata");
    fetcheddata.splice(x, 1);
    let updated = fetcheddata
    localStorage.setItem(
        "userdata",
        JSON.stringify(
            ...JSON.parse(localStorage.getItem("userdata") || '[]'), (updated)))

});


// const data = [...formdata.entries()];
    // console.log(data);

    //json
    // const datastring2 = JSON.stringify(Object.fromEntries(formdata));
    // console.log(datastring2);
    // const xhr = new XMLHttpRequest();
    // xhr.open("get", "https://reqres.in/api/users/2", true);
    // xhr.onload = function () {
    //     const obj = JSON.parse(xhr.responseText);
    //     console.log(obj.data);
    // }
    // xhr.send();

    // fetch("https://reqres.in/api/users/2", {
    //     method: "get"


    // })
    //     .then((res) => res.json())

    //     .then((data) => {
    //         console.log(data)

    //     })






