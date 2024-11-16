const title = document.getElementById("title");
title.innerText = "Lakeland Thing-Doer";

const banner = document.querySelector("#banner");
const container = document.querySelector("#container");

const pageHeader = document.createElement("h1");
pageHeader.classList.add("pageHeader");
pageHeader.textContent = "Welcome to the Lakeland Thing-Doer"

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Helping YOU decide what to do in Lakeland!";

//buttons: random experience, food, parks, activities, shopping
//

const buttons = document.createElement("div");
buttons.classList.add("buttons");

//each button on click should select a random event from the appropriate category
const randomButton = document.createElement("button");
randomButton.classList.add("buttons");
randomButton.textContent = "RANDOM CHOICE";

//each category contains an array of endpoints. For now, just strings. Phase II: make it return objects with phone, address, etc etc. 

// use the appendChild method to add children to a div


banner.appendChild(pageHeader);
buttons.appendChild(randomButton);
container.appendChild(content);
container.appendChild(buttons);

