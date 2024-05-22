"use strict";




const iceCreamConeRadio = document.getElementById("iceCreamConeRadio");

const iceCreamCupRadio = document.getElementById("iceCreamCupRadio")

const toppingsRow = document.getElementById("toppingsRow");

window.onload = function () {

    iceCreamConeRadio.onclick = toggleToppingsRowVisibility;
    iceCreamCupRadio.onclick = toggleToppingsRowVisibility;

};


function toggleToppingsRowVisibility(){
    console.log("toggle");

    let shouldBeVisible = iceCreamCupRadio.checked;

    console.log(shouldBeVisible);

    if(shouldBeVisible){
        //toppingsRow.style.display = "block";
        toppingsRow.style.visibility = "visible";
    }
    else {
        //toppingsRow.style.display = "none";
        toppingsRow.style.visibility = "hidden";
    }

};
