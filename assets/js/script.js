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

var questionsAnswered = 0;

// Create question object
var questionObj = {
    // Questions array
    questionBank:  [
        "Between which HTMl elements can we link our JavaScript file in?",
        "Which is the correct way to select an element by its ID?",
        "How do you output data to the console?"
    ],
    // Wrong answers nested array
    wrongAnswers:  [
        { q1WA: ["Test Q1A1", "Test Q1A2", "Test Q1A3"]},
        { q2WA: ["Test Q2A1", "Test Q2A2", "Test Q2A3"]},
        { q3WA: ["Test Q3A1", "Test Q3A2", "Test Q3A3"]}
    ],
    // Correct answers array
    correctAnswers: [
        "The <head> or <body> HTML tags",
        "document.querySelector('#element')",
        "console.log()"
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
var evaluateAnswer = function(event) {
    if (event) {
        console.log("Answer was correct");
        updateScore();
    } else {
        console.log("Answer was wrong");
        dockTime();
    }
    getQuestion(questionsAnswered+1);
}

// Serve up next question
var getQuestion = function(questionsAnswered) {
    var questionsNum = questionObj.questionBank.length;

    if (questionsAnswered<(questionsNum+1)) {
        console.log("Question #" + (questionsAnswered+1));
        questionHeadlinEl.textContent = questionObj.questionBank[questionsAnswered];
        questionBodyEl.textContent = "Make your selection from the choices below.";

        cAnswerEl.addEventListener("click", evaluateAnswer, true);
        wrongAnswerEl1.addEventListener("click", evaluateAnswer, false);
        wrongAnswerEl2.addEventListener("click", evaluateAnswer, false);
        wrongAnswerEl3.addEventListener("click", evaluateAnswer, false);

    } else {
        console.log("Game Over");
        return false;
    }
}

// Start the quiz
var startQuiz = function(event) {
    console.log("The quiz has started.");
    getQuestion(questionsAnswered);
}

// Build timer

// Build scoreboard

// Store score in local storage

// Event handlers for buttons
quizStartEl.addEventListener("click", startQuiz);