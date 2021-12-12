// Pull elements by IDs and store in variables

// Header elements
var quizScoreBoardEl = document.querySelector("#q-scoreboard");
var quizTimerEl = document.querySelector("#q-time");

// Question elements
var questionHeadlinEl = document.querySelector("#q-headline");
var quizStartEl = document.querySelector("#q-start");
var questionBodyEl = document.querySelector("#q-body");

// Answer elements
var answerListEl = document.querySelector("#q-alist");
var cAnswerEl = document.querySelector("#c-answer");
var wrongAnswerEl1 = document.querySelector("#w-answer1");
var wrongAnswerEl2 = document.querySelector("#w-answer2");
var wrongAnswerEl3 = document.querySelector("#w-answer3");

// Footer element
var footerContentEl = document.querySelector("footer");

// Create question object
var questionObj = {
    // Questions array
    questions:  [
        "Between which HTMl elements can we link our JavaScript file in?",
        "Which is the correct way to select an element by its ID?",
        "How do you output data to the console?"
    ],
    // Wrong answers array
    wrongAnswers:  [
        "",
        "",
        "",
        ""
    ],
    // Correct answers array
    correctAnswers: [
        "The <head> or <body> HTML tags",
        "",
        ""
    ],
    // Question order function
    questionOrder: {

    }
};

// Functions for handling tasks

// Evaluate answer to see if correct or wrong
var evaluateAnswer = function(event) {

}

// Serve up next question
var nextQuestion = function(event) {

}

// Start the quiz
var startQuiz = function(event) {
    console.log("The quiz has started.");
}

// Build timer

// Build scoreboard

// Store score in local storage

// Event handlers for buttons
quizStartEl.addEventListener("click", startQuiz);