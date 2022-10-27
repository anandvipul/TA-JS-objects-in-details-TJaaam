function createQuestion(title, option, correctAnswerIndex) {
let question = {};
question.title = title;
question.options = options;
question.correctAnswerIndex = correctAnswerIndex;
question.isAnswerCorrect = function (index) {
  return index === this.correctAnswerIndex;
  };
question.getCorrectAnswer = function () {
return this.options[this.correctAnswerIndex];
};
return question;
}

const firstQuestion = createQuestion(
"Where is the capital of Jordan",
["Tashkent", "Amaan", "Kuwait City", "Nairobi"],1);


const secondQuestion = createQuestion(
"Where is the capital of Jamaica",
["Tashkent", "Amaan", "Kuwait City", "Nairobi"],2);

