const title = document.getElementById("title");
title.innerText = "Lakeland Thing-Doer";

let placeholder = ""; 

//object testing:
const myRestaurant = {
    name: 'Bens Restaurant',
    location: '123 Lakeland Drive',
    cuisine: 'Pizza and beer',
    cost: '$$',
    website: '<a href="https://google.com">Bens Restaurant</a>'
}

const objectTester = [myRestaurant];

const foods = ['Il Forno', 'Taco Bell', 'Jet\'s Pizza', 'Mellow Mushroom', 'Thai Oishi', 'Palace', 'Black and Brew', 
    'Cob and Pen', 'Curry Mango', 'Culver\'s', 'Cafe Zuppina', 'Bedrock', 'The Joinery', 'Harry\'s', '1961', 'LoveBird', 'Chick-Fil-A', 'Ford\'s Garage', 
    'Olive Garden', 'Walk Ons', 'Michi Ramen', 'Oksumi Ramen', 'Frescos', 'Miller\'s Ale House', 'Smiths American Tavern', 'Mojo Federal', 'Texas Cattle Co.', 
    'Peach House', 'Mr. Fish', 'Scarpa\'s', 'Beef O\' Brady\'s', 'K-Pot Korean BBQ', 'Terrace Grill', 'PDQ', 'Tijuana Flats', 'Dona Julia\'s'];
const activities = ['Bonnet Springs', 'Lake Parker Park', 'Lakeland Highlands Scrub', 'Barnett Park', 'Munn Park', 'Lake Mirror', 'Lake Morton', 'Circle Bar B', 
    'Common Ground Park', 'Peterson Park', 'Lake Crago', 'Colt Creek State Park', 'Gator Creek Reserve', 'Hollis Garden', 'Wander around downtown', 'Wander around Dixieland', 'Walk around Hollingsworth', 'Kitty Kat Lounge', 'Urban Air', 'SkyZone', 'Picassoz Cup', 
    'Painting with a Twist', 'Escape Room', 'Ax-Caliber', 'Shoot Straight Gun Range', 'Planet Fitness', 'Tienda Studio', 'Melting Spot'];
const shopping = ['Amelia Page Boutique', 'Antique Mall', 'Lakeside Village', 'Pressed', 'Books a Million', 'Target', 'Lakeland Square Mall', 'Goodwill', 
    'Lighthouse Ministries', 'Brandon Mall', 'Tampa International Plaza', 'Scout and Tag', 'Inklings', 'Hobby Lobby', 'Michaels', 'Old Navy'];
const coffeeShops = ['Black and Brew', 'Mittchell\'s Coffee House', 'Hillcrest Coffee', 'Concord Coffee', 'Pour Bear Coffee', 'Andrew\'s Coffee', 
    'Amonie Jo\'s', 'Pressed LKLD', 'Divicious', 'Milkster'];
const bars = ['Cob and Pen', 'Swan Brewing', 'The Joinery', 'Molly McHugh\'s', 'Dissent Brewing Co.', 'Revival', 'Vasco61', 'Lakeland Loft', 'Linksters', 
    'Ovation', 'Federal Bar', 'Smith\'s American Tavern', 'Frescos'];
const arrayOfThings = [foods, activities, shopping, coffeeShops, bars];

// DOM association:
const container = document.querySelector("#container");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons");

const resultContainer = document.querySelector("#resultContainer");
const result = document.querySelector("#result");
result.innerText = "According to our experts, your result is: ";

const randomButtonContainer = document.querySelector("#randomButtonContainer");

const randomButton = document.createElement("button");
randomButton.classList.add("buttons");
randomButton.setAttribute("id", "randomButton");
randomButton.textContent = "Random";

const foodButton = document.createElement("button");
foodButton.classList.add("buttons");
foodButton.setAttribute("id", "foodButton");
foodButton.textContent = "Eat Food";

const activitiesButton = document.createElement("button");
activitiesButton.classList.add("buttons");
activitiesButton.setAttribute("id", "activitiesButton");
activitiesButton.textContent = "Do Something";

const shoppingButton = document.createElement("button");
shoppingButton.classList.add("buttons");
shoppingButton.setAttribute("id", "shoppingButton");
shoppingButton.textContent = "Go Shopping";

const coffeeButton = document.createElement("button");
coffeeButton.classList.add("buttons");
coffeeButton.setAttribute("id", "coffeeButton");
coffeeButton.textContent = "Get Coffee";

const barButton = document.createElement("button");
barButton.classList.add("buttons");
barButton.setAttribute("id", "barButton");
barButton.textContent = "Have a Drink";

const testButton = document.createElement("button");
testButton.classList.add("buttons");
testButton.setAttribute("id", "testButton");
testButton.textContent = "object test button";

const resultContent = document.createElement("p");
resultContent.classList.add('content');
resultContent.innerText = placeholder;

randomButtonContainer.appendChild(randomButton);
buttonContainer.appendChild(foodButton);
buttonContainer.appendChild(activitiesButton);
buttonContainer.appendChild(shoppingButton);
buttonContainer.appendChild(coffeeButton);
buttonContainer.appendChild(barButton);
buttonContainer.appendChild(testButton);
//append new buttons
container.appendChild(buttonContainer);
resultContainer.appendChild(resultContent);


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
        case 'coffeeButton':
            length = coffeeShops.length;
            choice = randomNumber(length);
            result = coffeeShops[choice];
            break;
        case 'barButton':
            length = bars.length;
            choice = randomNumber(length);
            result = bars[choice];
        case 'testButton':
            length = objectTester.length;
            choice = randomNumber(length);
            result = objectTester[choice];
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