const title = document.getElementById("title");
title.innerText = "Lakeland Thing-Doer";

let placeholder = ""; 

const foods = ['Il Forno', 'Taco Bell', 'Jet\'s Pizza', 'Mellow Mushroom', 'Thai Oishi', 'Palace', 'Black and Brew', 
    'Cob and Pen', 'Curry Mango', 'Culver\'s', 'Cafe Zuppina', 'Bedrock', 'The Joinery', 'Harry\'s', '1961', 'LoveBird', 'Chick-Fil-A', 'Ford\'s Garage', 
    'Olive Garden', 'Walk Ons', 'Michi Ramen', 'Oksumi Ramen', 'Frescos', 'Miller\'s Ale House', 'Smiths American Tavern', 'Mojo Federal', 'Texas Cattle Co.', 
    'Peach House', 'Mr. Fish', 'Scarpa\'s', 'Beef O\' Brady\'s', 'K-Pot Korean BBQ'];
const parks = ['Bonnet Springs', 'Lake Parker Park', 'Lakeland Highlands Scrub', 'Barnett Park', 'Munn Park', 'Lake Mirror', 'Lake Morton', 'Circle Bar B', 
    'Common Ground Park', 'Peterson Park', 'Lake Crago', 'Colt Creek State Park', 'Gator Creek Reserve'];
const activities = ['Wander around downtown', 'Wander around Dixieland', 'Walk around Hollingsworth', 'Kitty Kat Lounge', 'Urban Air', 'SkyZone', 'Picassoz Cup', 
    'Painting with a Twist', 'Escape Room', 'Ax-Caliber', 'Shoot Straight Gun Range', 'Planet Fitness', 'Tienda Studio', 'Melting Spot'];
const shopping = ['Amelia Page Boutique', 'Antique Mall', 'Lakeside Village', 'Pressed', 'Books a Million', 'Target', 'Lakeland Square Mall', 'Goodwill', 
    'Lighthouse Ministries', 'Brandon Mall', 'Tampa International Plaza', 'Scout and Tag', 'Inklings', 'Hobby Lobby', 'Michaels', 'Old Navy'];
// add array of coffee shops
const coffeeShops = ['Black and Brew', 'Mittchell\'s Coffee House', 'Hillcrest Coffee', 'Concord Coffee', 'Pour Bear Coffee', 'Andrew\'s Coffee', 
    'Amonie Jo\'s', 'Pressed LKLD', 'Divicious', 'Milkster'];
// add array of bars
//add these arrays to arrayOfThings
const arrayOfThings = [foods, parks, activities, shopping];

const container = document.querySelector("#container");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons");

// create buttons for new arrays
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

buttonContainer.appendChild(randomButton);
buttonContainer.appendChild(foodButton);
buttonContainer.appendChild(parksButton);
buttonContainer.appendChild(activitiesButton);
buttonContainer.appendChild(shoppingButton);
//append new buttons
container.appendChild(buttonContainer);
container.appendChild(resultContent);


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        let selection = button.id;
        console.log('Selection: ' + selection);
        placeholder = selectList(selection);
        console.log('Placeholder: ' + placeholder);
        resultContent.innerText = placeholder.toString();
    })
})

function selectList(selection){
    let length;
    let choice;
    let result = '';
    switch (selection){
        case 'randomButton':
            let randomArray = arrayOfThings[randomNumber(arrayOfThings.length)];
            console.log('Random array: ' + randomArray);
            let arrayLength = randomArray.length;
            console.log("array length: " + arrayLength);
            length = randomArray.length;
            choice = randomNumber(length);
            result = randomArray[choice];
            break;
        case 'foodButton':
            length = foods.length;
            choice = randomNumber(length);
            result = foods[choice];
            break;
        case 'parksButton':
            length = parks.length;
            choice = randomNumber(length);
            result = parks[choice];
            break;
        case 'activitiesButton':
            length = activities.length;
            choice = randomNumber(length);
            result = activities[choice];
            break;
        case 'shoppingButton':
            length = shopping.length;
            choice = randomNumber(length);
            result = shopping[choice];
            break;
    }
    return result;
}

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