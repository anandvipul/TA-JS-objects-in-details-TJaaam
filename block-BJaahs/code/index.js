// - Without Object
let answer = {
  questionOne: "option-4",
};

function getResponse(event) {
  let target = event.target.dataset.value;
  if (target == answer[event.target.name]) {
    console.log("Sahi Hai");
    event.target.nextElementSibling.classList.add("green");
  }
}

let inputRadio = document.getElementsByTagName("input");
let array = Array.from(inputRadio);

array.forEach((item) => {
  item.addEventListener("click", (event) => {
    getResponse(event);
  });
});

// - Organize using object





// - Use a function to create object
// - Convert the function to use `this` keyword
// - Write test by creating two objects also test both methods.
