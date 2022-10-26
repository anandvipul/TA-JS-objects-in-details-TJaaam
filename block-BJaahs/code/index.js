// Using Function to create an object
// function createQuestion() {
//     return {
//         title: "This is a Question",
//         options: ['option-1', 'option-2', 'option-3', 'option-4'],
//         answer: 3,
//     };
// }

// Convert the function to use this keyword

function CreateQuestion() {
    
        this.title= "This is a Question";
        this.options= ['option-1', 'option-2', 'option-3', 'option-4'];
        this.answer= 3;
}

let question1 = new CreateQuestion();

// - Organize using object
// let question1 = {
//     title: "This is a Question",
//     options: ['option-1', 'option-2', 'option-3', 'option-4'],
//     answer: 3,
// };


// - Without Object
let answer = {
  questionOne: "option-4",
};


//   Implementation    

function getResponse(event) {
  let target = event.target.dataset.value;

  // Without Object
//   if (target == answer[event.target.name]) {
//     console.log("Sahi Hai");
//     event.target.nextElementSibling.classList.add("green");
//   }

  // With Object
  if (target == question1.options[question1.answer]) {
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









// - Convert the function to use `this` keyword
// - Write test by creating two objects also test both methods.
