/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    //write your code here
    let form = document.querySelector("form");
    form.addEventListener("submit", enviarDatos);
};

function enviarDatos(e) {
    e.preventDefault(); // detiene tu comportamiento predeterminado del formulario e interpretado mi codigo
    let card = document.getElementById("card");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let FirstName = document.getElementById("FirstName");
    let LastName = document.getElementById("LastName");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let PostalCode = document.getElementById("PostalCode");
    let message = document.getElementById("message");
    let alert = document.getElementById("aler alert-danger");

    console.log(card.value);
    console.log(cvc.value);
    console.log(amount.value);
    console.log(FirstName.value);
    console.log(LastName.value);
    console.log(city.value);
    console.log(state.value);
    console.log(PostalCode.value);
    console.log(message.value);

    if (card === "") {
        //console.log("El campo email está vacio");
        document.getElementById("card").style.backgroud = "red";
        document.getElementById("alert");
    } else {
        document.getElementById("alert") = hidden
    }