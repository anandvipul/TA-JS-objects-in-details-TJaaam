
let questionMethods = {
  isAnswerCorrect: function (index) {
    return index == this.correctAnswerIndex;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  }
}


function createQuestion(title, option, correctAnswerIndex) {
let question = Object.create(questionMethods);
question.title = title;
question.options = option;
question.correctAnswerIndex = correctAnswerIndex;
return question;
}

const firstQuestion = createQuestion(
"Where is the capital of Jordan",
["Tashkent", "Amaan", "Kuwait City", "Nairobi"],1);


const secondQuestion = createQuestion(
"Where is the capital of Jamaica",
["Tashkent", "Amaan", "Kuwait City", "Nairobi"],2);

// pseudo class prototype---------------------------------------------------------------------------




function CreateQuestion(title, option, correctAnswerIndex) {
this.title = title;
this.options = option;
this.correctAnswerIndex = correctAnswerIndex;
}


CreateQuestion.prototype = {
  isAnswerCorrect: function (index) {
    return index == this.correctAnswerIndex;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  }
}

const firstQuestion = new CreateQuestion(
"Where is the capital of Jordan",
["Tashkent", "Amaan", "Kuwait City", "Nairobi"],1);


const secondQuestion = new CreateQuestion(
"Where is the capital of Jamaica",
["Tashkent", "Amaan", "Kuwait City", "Nairobi"],2);


// Class Pattern

class CreateQuestion {
  constructor (title, options, correctAnswerIndex) {
this.title = title;
this.options = options;
this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index == this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
  
}



const firstQuestion = new CreateQuestion(
"Where is the capital of Jordan",
["Tashkent", "Amaan", "Kuwait City", "Nairobi"],1);


const secondQuestion = new CreateQuestion(
"Where is the capital of Jamaica",
["Tashkent", "Amaan", "Kuwait City", "Nairobi"],2);
