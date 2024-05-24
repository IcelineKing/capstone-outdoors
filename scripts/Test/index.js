"use strict";

const parksCategoryDropdown = document.getElementById("parksCategoryDropdown");
const parksList = document.getElementById("parksList");
const parksDetailRow = document.getElementById("parksDetailRow");
const parksName = document.getElementById("parksName");
const parksAddress = document.getElementById("parksAddress");
const parksCity = document.getElementById("parksCity");

window.onload = () => {
  console.log("onload");
  parksCategoryDropdown.onchange = onparksCategoryDropdownChange;
  parksList.onchange = onparksListChange;
};

function onparksCategoryDropdownChange() {
  console.log("onparksCategoryDropdownChange");

  //hide the details row to hide previous results
  hideDetailRow();

  //figure out what value was selected (which category)
  let selectedCategory = parksCategoryDropdown.value;
  console.log(selectedCategory);

  //clear out parksList from previous selection
  parksList.options.length = 0;

  //loop through correct array and add values to the parksList one at a time.
  let parkssInCategory = getparkssForCategoryCode(selectedCategory);

  console.log(parkssInCategory);

  for (let parks of parkssInCategory) {
    addparksNameToparksList(parks.name);
  }
}

function addparksNameToparksList(parksName) {
  let newOption = document.createElement("option");
  newOption.value = parksName;
  newOption.innerHTML = parksName;
  parksList.appendChild(newOption);
}

function getparkssForCategoryCode(categoryCode) {
  if (categoryCode == "action_figures") {
    return parkss.parkss["Action Figures"];
  } else if (categoryCode == "educational_parkss") {
    return parkss.parkss["Educational parkss"];
  } else if (categoryCode == "outdoor_parkss") {
    return parkss.parkss["Outdoor parkss"];
  } else {
    console.log("unrecognized category");
  }

  return [];
}

function getparksByName(parksName) {
  let selectedCategory = parksCategoryDropdown.value;
  let parkss = getparkssForCategoryCode(selectedCategory);

  for (let parks of parkss) {
    if (parks.name == parksName) {
      return parks;
    }
  }
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
  parksCity.innerHTML = selectedparks.City_range;

  //show detail row
  showDetailRow();
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
