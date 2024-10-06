// console.log("akhlaque");
//Day 9 : DOM Maniulation

//Task/Activitise:

//Acitivity 1 : Selecting and Manipulating Elements

//Task 1 :Select an HTML element by its ID and changes its text content

const getElement = document.getElementById("challenge");
getElement.textContent = "30 Days Challenge accepted !";
console.log(getElement);

const tagElement = document.querySelectorAll("li");
console.log(tagElement);

tagElement.forEach((ele, index) => {
  if (index % 2 === 0) {
    ele.style.backgroundColor = "blue";
  } else {
    ele.style.backgroundColor = "green";
  }
  ele.style.padding = "10px";
  ele.style.margin = "5px";
});

//Activity 2 : Creating and Appending Elements

//Task 3 :Create a new div element with some text content and append it to the body.

const newCreateElement = document.createElement("div");
// const ff = document.createTextNode("Adding a new Text to new Tag DIV");
// console.log(ff);
newCreateElement.appendChild(
  document.createTextNode("Adding a new Text to new Tag DIV")
);
console.log(newCreateElement);
document.body.appendChild(newCreateElement);

//Task 4 :Create a new Li elemet and add it to an existing ul list.

const newLI = document.createElement("li");
newLI.appendChild(document.createTextNode("East Champaran"));
document.querySelector("ul").appendChild(newLI);
newLI.style.padding = "10px";
newLI.style.margin = "5px";
newLI.style.backgroundColor = "blue";

//Activity 3 : Removing Elements

//Task 5 : Select an Html element and Remove it from the dom

document.querySelector("li:nth-child(3)").remove();

//Task 6 : Remove the last child of specific HTML element

document.querySelector("li:last-child").remove();

// Activity 4 : Modifying Attributes and Classes

//Task 7 : Sleclect an HTML element and change one of its attributes (e.g., src of an img tag)

const imgTag = document.querySelector("img");
console.log(imgTag.attributes[0].nodeValue);
imgTag.attributes[0].nodeValue = "medium.webp";

//task 8 : Add and remove a css class to/ from a html element

const allListItem = document.querySelectorAll("li");
console.log(allListItem);

allListItem.forEach((ele) => {
  console.log(ele, "ele");
  ele.style.color = "white";
});
allListItem.forEach((ele) => {
  console.log(ele.style);
  for (let style of ele.style) {
    if (style === "color") {
      ele.style.color = "";
    }
  }
});
console.log(allListItem[0].style);

// Activity 5 : Event Handling

//Task 9 :Add a click event listener to a button that changes the text content of a paragraph
const d = document.getElementById("button");
const para = document.getElementById("para");
d.addEventListener("click", () => {
  para.innerHTML = "I am good bhai";
});

//Task 10 : Add a mouseover event listener to an element that changes its border color

const initialBorderColor = getComputedStyle(para).borderColor;
para.addEventListener("mouseover", () => {
  para.style.borderColor = "green";
});

para.addEventListener("mouseout", () => {
  para.style.borderColor = initialBorderColor;
});
