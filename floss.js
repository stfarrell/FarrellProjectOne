let submitbtn = document.querySelector("#submit");
let textinput = document.querySelector("#textinput");
let goeshere = document.querySelector("#goeshere");


submitbtn.addEventListener("click", e=> {
    console.log(textinput.value);
    goeshere.innerHTML +=`<br>${textinput.value}`;
    textinput.value = "";
})