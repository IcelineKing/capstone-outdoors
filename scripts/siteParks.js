"use strict";

const nationalParksCategoryDropdown = document.getElementById(
  "nationalParksCategoryDropdown"
);
const nationalParksList = document.getElementById("nationalParksArray");
const parksLocations = document.getElementById("locationsArray");
const parksTypes = document.getElementById("parkTypesArray");

// const nationalParksDetailRow = document.getElementById("parksDetailRow");
// const nationalParksLocationName = document.getElementById("LocationName");
// const nationalParksAddress = document.getElementById("Address");
// const nationalParksCity = document.getElementById("City");
// const nationalParksState = document.getElementById("State");
// const nationalParksZipCode = document.getElementById("parksZipCode");
// const nationalParksPhone = document.getElementById("parksPhone");
// const nationalParksFax = document.getElementById("parksFax");
// const nationalParksLatitude = document.getElementById("parksLatitude");
// const nationalParksLongitude = document.getElementById("parksLongitude");
// const nationalParksCoordinates = document.getElementById("parksCoordinates");

window.onload = () => {
  console.log("onload");
  nationalParksCategoryDropdown.onchange =
    onNationalParksCategoryDropdownChange;
  nationalParksList.onchange = onParksListChange;
};

function nationalParksCategoryDropdownChange() {
  console.log("onParksCategoryDropdownChange");

  //hide the details row to hide previous results
  hideDetailRow();

  //figure out what value was selected (which category)
  let selectedCategory = ParksCategoryDropdown.value;
  console.log(selectedCategory);

  function getparksForCategoryCode(categoryCode) {
    if (categoryCode == "locations") {
      return parks.LocationsArray["locationsArray"];
    } else if (categoryCode == "parktypes") {
      return parks.parktypes["parkTypesArray"];
    } else if (categoryCode == "allNationalParks") {
      return parks.LocationName["nationalParksArray"];
    } else {
      console.log("unrecognized category");
    }

    return [];
  }

  //clear out parksList from previous selection
  nationalParksList.options.length = 0;

  //loop through correct array and add values to the parksList one at a time.
  let nationalParksInCategory =
    getnationalParksForCategoryCode(selectedCategory);

  console.log(nationalParksInCategory);

  for (let parks of nationalParksInCategory) {
    addparksNameToParksList(nationalParks.name);
  }
}

function addnationalParksNameToParksList(ParksName) {
  let newOption = document.createElement("option");
  newOption.value = ParksName;
  newOption.innerHTML = ParksName;
  ParksList.appendChild(newOption);
}

function onparksListChange() {
  console.log("onparksListChange");

  let selectedparksName = parksList.value;
  console.log(selectedparksName);
}
