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
var cAnswerEl = document.createElement("li");
var wrongAnswerEl1 = document.createElement("li");
var wrongAnswerEl2 = document.createElement("li");
var wrongAnswerEl3 = document.createElement("li");

cAnswerEl.cl = "c-answer";
wrongAnswerEl1.id = "w-answer1";
wrongAnswerEl2.id = "w-answer2";
wrongAnswerEl3.id = "w-answer3";
cAnswerEl.className = "qanswer";
wrongAnswerEl1.className = "qanswer";
wrongAnswerEl2.className = "qanswer";
wrongAnswerEl3.className = "qanswer";

// cAnswerEl = document.querySelector("#c-answer");
// wrongAnswerEl1 = document.querySelector("#w-answer1");
// wrongAnswerEl2 = document.querySelector("#w-answer2");
// wrongAnswerEl3 = document.querySelector("#w-answer3");

// Footer element
var footerContentEl = document.querySelector("footer");
var footerHeadlineEl = document.createElement("h3");

var questionCount = 0;
var quizTimer = 120;
var timeLimit;
var score = 0;

// Build timer
var startTimer = function() {
    var timeLimit = setInterval(function() {
        if (quizTimer <= 0) {
            clearInterval(timeLimit);
            quizTimer = 0;
        } else {
            quizTimerEl.textContent = "Time: " + quizTimer;
        }
        quizTimer -= 1;
    }, 1000);
}

// Create question object
var questionObj = {
    // Questions array
    questionBank:  [
        "Between which HTMl elements can we link our JavaScript file in?",
        "Which is the correct way to select an element by its ID?",
        "How do you output data to the console?",
        "What is AJAX?",
        "How many registers are available in X64 architecture?",
        "How many bits in a byte?",
        "How many bits in a nibble?",
        "What does URI mean?",
        "Is reflected XSS dangerous?",
        "What is LFI?",
        "AMC moon wen?",
        "How do you make a new file in your directory from terminal?"
    ],
    // Wrong answers nested array
    wrongAnswers:  [
        ["<html> tags", "<link> tags", "<meta> tags"],
        ["console.linkID(elementName)", "document.linkHTML('.element')", "SELECT * FROM table WHERE ID='element'"],
        ["echo 'text'", "sudo !!", "Console.WriteLog('text')"],
        ["All Purpose Cleaner", "A Calculator", "Programming Language"],
        ["24", "64", "128"],
        ["4", "12", "16"],
        ["20", "72", "5"],
        ["Untrusted Resource Index", "Unused Run Init", "Ultra Real Image"],
        ["No", "Not in JavaScript", "Only in Internet Explorer"],
        ["Least Favorite Interest", "Love Freedom Independence", "Last File Index"],
        ["Sell", "Not sure", "Yes"],
        ["cat -n 20 /var/www/html/index.html | grep -i 'stuff'", "sudo rm -rf / --no-preserve-root", "() { :|:& };:"]
    ],
    // Correct answers array
    correctAnswers: [
        "The <head> or <body> HTML tags",
        "document.querySelector('#element')",
        "console.log()",
        "SOAP",
        "16",
        "8",
        "4",
        "Uniform Resource Identifier",
        "Yes, if chained with CSRF",
        "Local File Inclusion",
        "Buy and hodl",
        "touch newfile.txt"
    ],
    // Question order function to randomize questions maybe?
    questionOrder: {
        
    }
};

// Functions for handling tasks

// Evaluate answer to see if correct or wrong
var evaluateAnswer = function(isCorrect) {
    if (isCorrect === "correct") {
        // Add 10 points to score
        score += 10;
        // Update footer text
        footerContentEl.appendChild(footerHeadlineEl);
        footerHeadlineEl.textContent = "Correct!";
    } else {   
        // Deduct 10 from time
        quizTimer -= 10;
        // Update footer text
        footerContentEl.appendChild(footerHeadlineEl);
        footerHeadlineEl.textContent = "Wrong!";
    }
    // Update question count and show next question
    getQuestion(questionCount+=1);
}

// Serve up next question
var getQuestion = function(questionCount) {
    // Get number of questions from bank
    var questionsNum = questionObj.questionBank.length;

    // Ask question if there are questions in the bank
    if (questionCount<questionsNum) {
        console.log("Question #" + (questionCount+1));
        // Get wrong answer for question from questionObj
        wrongAnsBank = questionObj.wrongAnswers[questionCount];

        // Update question headline and body text
        questionHeadlinEl.textContent = questionObj.questionBank[questionCount];
        questionBodyEl.textContent = "Make your selection from the choices below.";

        // Add answer choices
        answerListEl.appendChild(cAnswerEl);
        answerListEl.appendChild(wrongAnswerEl1);
        answerListEl.appendChild(wrongAnswerEl2);
        answerListEl.appendChild(wrongAnswerEl3);

        // Update answer choice text
        cAnswerEl.textContent = questionObj.correctAnswers[questionCount];
        wrongAnswerEl1.textContent = wrongAnsBank[0];
        wrongAnswerEl2.textContent = wrongAnsBank[1];
        wrongAnswerEl3.textContent = wrongAnsBank[2];

    } else {
        // No more questions in bank
        quizTimer = 0;
        tryAgain();
    }
}

// Start the quiz
var startQuiz = function(event) {
    startTimer();
    quizStartEl.remove();
    getQuestion(questionCount);
}

// Retry quiz
var tryAgain = function() {
    questionHeadlinEl.textContent = "Your Score: " + score;
    questionBodyEl.textContent = "Enter your initials and click submit.";
    console.log("Try again?");
    quizTimerEl.textContent = "Time";
}

// Build scoreboard

// Store score in local storage

// Event handlers for buttons
quizStartEl.addEventListener("click", startQuiz); // Quiz Start
wrongAnswerEl1.addEventListener("click", evaluateAnswer); // Wrong answer 1
wrongAnswerEl2.addEventListener("click", evaluateAnswer); // Wrong answer 2
wrongAnswerEl3.addEventListener("click",  evaluateAnswer); // Wrong answer 3
// Correct answer
cAnswerEl.addEventListener("click", function() {
    evaluateAnswer("correct");
});