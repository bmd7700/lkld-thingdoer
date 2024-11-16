const title = document.getElementById("title");
title.innerText = "Lakeland Thing-Doer";

let placeholder = ""; 

const foods = ['Il Forno', 'Taco Bell', 'Jet\'s Pizza', 'Mellow Mushroom', 'Thai Oishi', 'Palace', 'Black and Brew', 'Cob and Pen', ''];
const parks = [];
const activities = [];
const shopping = [];

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

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons");

//each button on click should select a random event from the appropriate category
const randomButton = document.createElement("button");
randomButton.classList.add("buttons");
randomButton.setAttribute("id", "randomButton");
randomButton.textContent = "RANDOM CHOICE";

const foodButton = document.createElement("button");
foodButton.classList.add("buttons");
foodButton.setAttribute("id", "foodButton");
foodButton.textContent = "FOODS";

const parksButton = document.createElement("button");
parksButton.classList.add("buttons");
parksButton.setAttribute("id", "parksButton");
parksButton.textContent = "PARKS";

const activitiesButton = document.createElement("button");
activitiesButton.classList.add("buttons");
activitiesButton.setAttribute("id", "activitiesButton");
activitiesButton.textContent = "ACTIVITIES";

const shoppingButton = document.createElement("button");
shoppingButton.classList.add("buttons");
shoppingButton.setAttribute("id", "shoppingButton");
shoppingButton.textContent = "SHOPPING";

const resultContent = document.createElement("p");
resultContent.classList.add('content');
resultContent.innerText = placeholder;
//each category contains an array of endpoints. For now, just strings. Phase II: make it return objects with phone, address, etc etc. 



banner.appendChild(pageHeader);
buttonContainer.appendChild(randomButton);
buttonContainer.appendChild(foodButton);
buttonContainer.appendChild(parksButton);
buttonContainer.appendChild(activitiesButton);
buttonContainer.appendChild(shoppingButton);
container.appendChild(content);
container.appendChild(buttonContainer);
container.appendChild(resultContent);


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        let selection = button.id;
        placeholder = selectList(selection);
        resultContent.innerText = placeholder.toString();
    })
})

function selectList(selection){
    switch (selection){
        case 'foodButton':
            let length = foods.length;
            let choice = randomNumber((length));
            let result = foods[choice];
            return result;
            break;
    }}

function randomNumber(limit){
    return Math.floor((Math.random() * limit));
}






/**
 * 
 * e references the event and unlocks a number of properties and methods we can use to parse the event
const callback = document.querySelector("#callback");
callback.addEventListener("click", function(e){
    console.log(e.target.style.background = "blue");
});

//using the querySelectorAll tool we can apply code to all elements of the selected type
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        alert(button.id);
    });
}); */