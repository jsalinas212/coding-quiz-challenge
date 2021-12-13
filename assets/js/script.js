// Pull elements by IDs and store in variables

// Header elements
var quizScoreBoardEl = document.querySelector("#q-scoreboard");
var quizTimerEl = document.querySelector("#q-time");

// Question elements
var questionHeadlinEl = document.querySelector("#q-headline");
var questionBodyEl = document.querySelector("#q-body");
var quizStartEl = document.querySelector("#q-start");

// Answer elements
var answerListEl = document.querySelector("#q-alist");
var cAnswerEl = document.querySelector("#c-answer");
var wrongAnswerEl1 = document.querySelector("#w-answer1");
var wrongAnswerEl2 = document.querySelector("#w-answer2");
var wrongAnswerEl3 = document.querySelector("#w-answer3");

// Footer element
var footerContentEl = document.querySelector("footer");
var footerHeadlineEl = document.createElement("h3");

var questionCount = 0;

// Create question object
var questionObj = {
    // Questions array
    questionBank:  [
        "Between which HTMl elements can we link our JavaScript file in?",
        "Which is the correct way to select an element by its ID?",
        "How do you output data to the console?",
        "How much wood can a woodchuck chuck?",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    // Wrong answers nested array
    wrongAnswers:  [
        ["Test Q1A1", "Test Q1A2", "Test Q1A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q3A1", "Test Q3A2", "Test Q3A3"]
    ],
    // Correct answers array
    correctAnswers: [
        "The <head> or <body> HTML tags",
        "document.querySelector('#element')",
        "console.log()",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0"
    ],
    // Question order function to randomize questions maybe?
    questionOrder: {
        
    }
};

// Functions for handling tasks

// Update score
var updateScore = function() {
    console.log("Score plus 10");
}

// Penalize for wrong answer
var dockTime = function() {
    console.log("Time minus 10 seconds");
}

// Evaluate answer to see if correct or wrong
var evaluateAnswer = function(isCorrect) {
    if (isCorrect === "correct") {
        updateScore();
        footerContentEl.appendChild(footerHeadlineEl);
        footerHeadlineEl.textContent = "Correct!";
    } else {   
        dockTime();
        footerContentEl.appendChild(footerHeadlineEl);
        footerHeadlineEl.textContent = "Wrong!";
    }
    getQuestion(questionCount+=1);
}

// Serve up next question
var getQuestion = function(questionCount) {
    // Get number of questions from bank
    var questionsNum = questionObj.questionBank.length;

    if (questionCount>0) {
        console.log("You have answered " + questionCount + " questions.");
    }

    // Ask question if there are questions in the bank
    if (questionCount<questionsNum) {
        console.log("Question #" + (questionCount+1));
        // Get wrong answer for question from questionObj
        wrongAnsBank = questionObj.wrongAnswers[questionCount];

        questionHeadlinEl.textContent = questionObj.questionBank[questionCount];
        questionBodyEl.textContent = "Make your selection from the choices below.";
        cAnswerEl.textContent = questionObj.correctAnswers[questionCount];
        wrongAnswerEl1.textContent = wrongAnsBank[0];
        wrongAnswerEl2.textContent = wrongAnsBank[1];
        wrongAnswerEl3.textContent = wrongAnsBank[2];

    } else {
        // No more questions in bank
        console.log("Game Over");
        return false;
    }
}

// Start the quiz
var startQuiz = function(event) {
    console.log("The quiz has started.");
    getQuestion(questionCount);
}

// Build timer

// Build scoreboard

// Store score in local storage

// Event handlers for buttons
quizStartEl.addEventListener("click", startQuiz);
wrongAnswerEl1.addEventListener("click", evaluateAnswer);
wrongAnswerEl2.addEventListener("click", evaluateAnswer);
wrongAnswerEl3.addEventListener("click",  evaluateAnswer);
cAnswerEl.addEventListener("click", function() {
    evaluateAnswer("correct");
});