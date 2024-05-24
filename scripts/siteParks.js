"use strict";

const nationalParksCategoryDropdown = document.getElementById("LocationID");
const nationalParksList = document.getElementById("parksList");
const nationalParksDetailRow = document.getElementById("parksDetailRow");
const nationalParksName = document.getElementById("LocationName");
const nationalParksAddress = document.getElementById("parksAddress");
const nationalParksCity = document.getElementById("parksCity");
const nationalParksState = document.getElementById("parksState");
const nationalParksZipCode = document.getElementById("parksZipCode");
const nationalParksPhone = document.getElementById("parksPhone");
const nationalParksFax = document.getElementById("parksFax");
const nationalParksLatitude = document.getElementById("parksLatitude");
const nationalParksLongitude = document.getElementById("parksLongitude");
const nationalParksCoordinates = document.getElementById("parksCoordinates");

window.onload = () => {
  console.log("onload");
  nationalParksCategoryDropdown.onchange = onParksCategoryDropdownChange;
  nationalParksList.onchange = onParksListChange;
};

function nationalParksCategoryDropdownChange() {
  console.log("onParksCategoryDropdownChange");

  //hide the details row to hide previous results
  hideDetailRow();

  //figure out what value was selected (which category)
  let selectedCategory = nationalParksCategoryDropdown.value;
  console.log(selectedCategory);

  function getparksForCategoryCode(categoryCode) {
    if (categoryCode == "Name") {
      return parks.LocationName["Hodgenville"];
    } else if (categoryCode == "State") {
      return parks.State["Kentucky"];
    } else if (categoryCode == "LocationName") {
      return parks.LocationName[
        "Abraham Lincoln Birthplace National Historical Park"
      ];
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

  //look up selected parks
  let selectedparks = getparksByName(selectedparksName);

  //set detail row elements to represent this parks.
  parksName.innerHTML = selectedparks.name;
  parksAddress.innerHTML = selectedparks.Address;
  parksCity.innerHTML = selectedparks.City;

  //show detail row
  showDetailRow();
}

function getparksByName(parksName) {
  let selectedCategory = parksCategoryDropdown.value;
  let parks = getparksForCategoryCode(selectedCategory);

  for (let parks of parks) {
    if (parks.name == parksName) {
      return parks;
    }
  }
}

function showDetailRow() {
  parksDetailRow.style.display = "block";
}

function hideDetailRow() {
  parksDetailRow.style.display = "none";
  parksName.innerHTML = "";
  parksAddress.innerHTML = "";
  parksCity.innerHTML = "";
}
