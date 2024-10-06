//Event Delegation is a procecess that define how events trigger through the DOM tree in a web page


const div = document.getElementsByClassName("div1")
console.log(div[0])

div[0].addEventListener("click", () => {
  console.log("first Div")
})


const div2 = document.getElementsByClassName("div2");
div2[0].addEventListener("click", () => {
  console.log("Second Div");
});

const button = document.getElementsByTagName("button")

button[0].addEventListener("click", () => {
  console.log("chlid")
})

