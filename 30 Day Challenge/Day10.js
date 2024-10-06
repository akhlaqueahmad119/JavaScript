//Day 10 : Event Handling
// Task/Activities

//Activity 1 : Basic Event Handling

//Task 1 : Add a click event  listener to a button that changes the text content of a paragaraph
const newS = document.getElementById("paragraph");
const myText = newS.innerHTML;
let parag = false;
document.getElementById("buttonId").addEventListener("click", () => {
  if (!parag) {
    newS.textContent = "Jumma Mubarak";
  } else {
    newS.textContent = myText;
  }
  parag = !parag;
});

//Task 2
const imgBird = document.getElementById("imgBird");
const storeStyle = getComputedStyle(imgBird).width;
const storeStyle1 = getComputedStyle(imgBird).height;
let isClicked = false;
imgBird.addEventListener("dblclick", () => {
  if (!isClicked) {
    imgBird.style.width = "400px";
    imgBird.style.height = "400px";
  } else {
    imgBird.style.width = storeStyle;
    imgBird.style.height = storeStyle1;
  }
  isClicked = !isClicked;
});

// Activity 2 : Mouse Events

// Task 3 :Add a mouseover event listener to an element that changes the background color:

const data2 = document.getElementById("div");

const getColor = getComputedStyle(data2).backgroundColor;

data2.addEventListener("mouseover", () => {
  data2.style.backgroundColor = "grey";
});

// Task 4 : Add mouseout event listener to  an element that reset  its background color.

data2.addEventListener("mouseout", () => {
  data2.style.backgroundColor = getColor;
});

//Activity 3 : Keyboard Events

//Task 5 : Add a keydown event listener to an input field that logs the key
const data = document.getElementById("inputFirst");
data.addEventListener("keydown", (event) => {
  console.log(event.key);
});

//task 6 : Add a keyup event listener to an input field that logs the key pressed to the console.

const data1 = document.getElementById("inputSecond");
const displayValue = document.getElementById("displayValue");
data1.addEventListener("keyup", (event) => {
  // console.log(event.target.value);
  displayValue.textContent = data1.value;
});
//Activity 4 : Form Events

//Task 7 : Add a submit event listener to a form that prevents the dafault submission and logs the form data to the console.
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.email.value);
  console.log(event.target.password.value);
};

document.getElementById("formid").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.email.value);
  console.log(event.target.password.value);
});

//Task 8 : Add a change event listenenr to a select dropdown that displays the selected vaule in a paragraph

const getId = document.getElementById("mySelect");
const paraId = document.getElementById("paraIdd");

getId.addEventListener("change", (event) => {
  paraId.textContent = `paragraph : ${event.target.value}`;
});

//Activity 5 : Event Delegation

//Task 9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation

const datac = document.getElementById("unorderList");

document.querySelector(".container").addEventListener(
  "click",
  () => {
    console.log("div");
  },
  true
);

datac.addEventListener(
  "click",
  () => {
    console.log("ul");
  },
  true
);
// console.log(datac);
const listItems = datac.querySelectorAll("li");
// console.log(listItems);

listItems.forEach((ele) => {
  // console.log(ele);
  ele.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log(ele.textContent);
  });
});
