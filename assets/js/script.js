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
        ["Test Q1A1", "Test Q1A2", "Test Q1A3"],
        ["Test Q2A1", "Test Q2A2", "Test Q2A3"],
        ["Test Q3A1", "Test Q3A2", "Test Q3A3"]
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
var evaluateAnswer = function(isCorrect) {
    if (isCorrect === "correct") {
        updateScore();
    } else {   
        dockTime();
    }
    
    getQuestion(questionsAnswered+=1);
}

// Serve up next question
var getQuestion = function(questionsAnswered) {
    // Get number of questions from bank
    var questionsNum = questionObj.questionBank.length;

    // Ask question if there are questions in the bank
    if (questionsAnswered<questionsNum) {
        console.log("Question #" + questionsAnswered);
        // Get wrong answer for question from questionObj
        wrongAnsBank = questionObj.wrongAnswers[questionsAnswered];

        questionHeadlinEl.textContent = questionObj.questionBank[questionsAnswered];
        questionBodyEl.textContent = "Make your selection from the choices below.";
        cAnswerEl.textContent = questionObj.correctAnswers[questionsAnswered];
        wrongAnswerEl1.textContent = wrongAnsBank[0];
        wrongAnswerEl2.textContent = wrongAnsBank[1];
        wrongAnswerEl3.textContent = wrongAnsBank[2];

        cAnswerEl.addEventListener("click", function() {
            evaluateAnswer("correct");
            console.log("Answer was correct");
        });
        wrongAnswerEl1.addEventListener("click", function() {
            evaluateAnswer("wrong1");
            console.log("Answer was wrong");
        });
        wrongAnswerEl2.addEventListener("click", function() {
            evaluateAnswer("wrong2");
            console.log("Answer was wrong");
        });
        wrongAnswerEl3.addEventListener("click", function() {
            evaluateAnswer("wrong3");
            console.log("Answer was wrong");
        });

    } else {
        // No more questions in bank
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