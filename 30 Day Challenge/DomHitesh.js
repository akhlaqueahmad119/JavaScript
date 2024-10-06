// const data = document.getElementById("challenge");
// console.log(data.innerHTML);
// console.log(data.textContent);
// console.log(data.innerText);

// const d = document.getElementsByClassName("add");
// console.log(d);

// const que = document.querySelector("li");
// // console.log(que);
// que.textContent = "East Champaran";

// const aa = document.querySelectorAll("li");
// console.log(Array.from(aa));

// aa.forEach((ele, el, l) => {
//   console.log(ele.textContent, el, l);
// });

const day = document.querySelector(".parent");
// console.log(day.children);

for (let i = 0; i < day.children.length; i++) {
  if (i % 2 === 0) {
    day.children[i].style.color = "green";
  } else {
    day.children[i].style.color = "blue";
  }
}

// const day1 = document.querySelector(".day");
// console.log(day1);

// const parent = day1.parentElement;
// console.log(parent);

const newDiv = document.createElement("h1");
console.log(newDiv);

// newDiv.textContent = "Learning DOM with Chai and Code";
const addText = document.createTextNode(
  "Learning Javascript with Chai and Code"
);
newDiv.appendChild(addText);
newDiv.id = "newX";
newDiv.className = "newiv";
const dayss = document.querySelector("h1");
console.log(dayss);
dayss.insertAdjacentElement("afterend", newDiv);

//------ Append-------//

const language = document.querySelector(".language");
console.log(language);
// function languageAdd(language) {
//   let newTag = document.createElement("li");
//   newTag.textContent = `${language}`;
//   console.log(newTag);
//   document.querySelector(".language").appendChild(newTag);
// }
// languageAdd("Python");
// languageAdd("Java");

function childLi(lang) {
  console.log(lang);
  const newTag = document.createElement("li");
  newTag.appendChild(document.createTextNode(`${lang}`));
  console.log(newTag);
  document.querySelector(".language").appendChild(newTag);
}

childLi("Python");
childLi("Java");
