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

//each category contains an array of endpoints. For now, just strings. Phase II: make it return objects with phone, address, etc etc. 

// when each button is clicked, a new div should populate with the selected item
const resultDiv = document.createElement("div");
resultDiv.classList.add("content");

let placeholder = ""; // this to be populated with result frm selectList

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        let selection = button.id;
        selectList(selection);
    })
})

function selectList(selection){
    // selection is button id. Button id indicates user choice.
    // since limited number of options, build switch for each case.
    // when case selected: call random number function with length of array (build arrays)
    // let i = random number function with length of array
    // placeholder = array[i]
    //return placeholder;
   }

const resultContent = document.createElement("p");
resultContent.innerText = placeholder;


resultDiv.appendChild(resultContent);

banner.appendChild(pageHeader);
buttonContainer.appendChild(randomButton);
buttonContainer.appendChild(foodButton);
buttonContainer.appendChild(parksButton);
buttonContainer.appendChild(activitiesButton);
buttonContainer.appendChild(shoppingButton);
container.appendChild(content);
container.appendChild(buttonContainer);
container.appendChild(resultDiv);

/**
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