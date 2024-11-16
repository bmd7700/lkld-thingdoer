const title = document.getElementById("title");
title.innerText = "Lakeland Thing-Doer";

const container = document.querySelector("#container");

const pageHeader = document.createElement("h1");
pageHeader.classList.add("pageHeader");
pageHeader.textContent = "Welcome to the Lakeland Thing-Doer."

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Here, we help you decide what to do in Lakeland.";

//buttons: random experience, food, parks, activities, shopping

//each button on click should select a random event from the appropriate category

//each category contains an array of endpoints. For now, just strings. Phase II: make it return objects with phone, address, etc etc. 



container.appendChild(pageHeader);
container.appendChild(content);

