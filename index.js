const title = document.getElementById("title");
title.innerText = "Lakeland Thing-Doer";

const container = document.querySelector("#container");

const pageHeader = document.createElement("h1");
pageHeader.classList.add("pageHeader");
pageHeader.textContent = "Welcome to the Lakeland Thing-Doer."

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Here, we help you decide what to do in Lakeland.";

container.appendChild(pageHeader);
container.appendChild(content);



/**const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the GLORIOUS text content!";

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm Red!";
paragraph.style.color = "red";

const blueHeader = document.createElement("h3");
blueHeader.style.color = "blue";
blueHeader.textContent = "I'm a blue H3!";

const divContainer = document.createElement("div");
divContainer.setAttribute("id", "newContainer");
divContainer.style.border = "1px solid black";
divContainer.style.backgroundColor = "pink";

const newContainerHeader = document.createElement("h1");
newContainerHeader.textContent = "I'm in a div!";

const newParagraph = document.createElement("p");
newParagraph.textContent = "ME TOO!";

divContainer.appendChild(newContainerHeader);
divContainer.appendChild(newParagraph);

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(blueHeader);
container.appendChild(divContainer); */