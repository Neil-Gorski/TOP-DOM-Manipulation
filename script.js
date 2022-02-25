const container = document.querySelector('#container');
const contentP1 = document.createElement('p');
contentP1.textContent = "Hey I'm red!"
contentP1.style.color = "red";
container.appendChild(contentP1);

const contentH3 = document.createElement("h3");
contentH3.textContent = "I'm a blue h3!";
contentH3.style.color = "blue";
container.appendChild(contentH3);

const contentDiv = document.createElement("div");
contentDiv.style.border = "2px solid #000";
contentDiv.style.background = "pink";
container.appendChild(contentDiv);

const contentH1 = document.createElement("h1");
contentH1.textContent = "I'm in a div"
contentDiv.appendChild(contentH1);

const contentP2 = document.createElement("p");
contentP2.textContent = "ME TOO!"
contentDiv.appendChild(contentP2);


