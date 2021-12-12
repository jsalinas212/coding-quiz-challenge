// Pull elements by IDs and store in variables
var quizScoreBoardEl = document.getElementById("#q-scoreboard");
var quizTimerEl = document.getElementById("#q-time");
var questionHeadlinEl = document.getElementById("#q-headline");
var quizStartEl = document.getElementById("#q-start");
var questionBodyEl = document.getElementById("#q-body");
var answerListEl = document.getElementById("#q-alist");
var cAnswerEl = document.getElementById("#c-answer");
var wrongAnswerEl1 = document.getElementById("#w-answer1");
var wrongAnswerEl2 = document.getElementById("#w-answer2");
var wrongAnswerEl3 = document.getElementById("#w-answer3");

// Create question object
var questionObj = {
    questions:  [
        "Which HTMl element do we link our JavaScript file in?",
        "Which is the correct way to select an element by its ID?",
        "How do you output data to the console?",
    ],
    wrongAnswers:  [
        "",
        "",
        "",
        ""
    ],
    correctAnswers: [
        "",
        "",
        ""
    ]
};
// Store answers in arrays and link answers to questions
// Event handlers for buttons
// Functions for handling tasks
// Build timer
// Store score in local storage
// Build scoreboard