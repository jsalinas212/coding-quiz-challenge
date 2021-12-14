// Pull elements by IDs and store in variables

// Header elements
var quizquizEndEl = document.querySelector("#q-quizEnd");
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

// Answer element IDs
cAnswerEl.cl = "c-answer";
wrongAnswerEl1.id = "w-answer1";
wrongAnswerEl2.id = "w-answer2";
wrongAnswerEl3.id = "w-answer3";

// Answer element classes
cAnswerEl.className = "qanswer";
wrongAnswerEl1.className = "qanswer";
wrongAnswerEl2.className = "qanswer";
wrongAnswerEl3.className = "qanswer";

// Form element
var formEl = document.createElement("form");

// Form element id
formEl.id = "submit-score";

// Footer element
var footerContentEl = document.querySelector("footer");
var footerHeadlineEl = document.createElement("h3");

var questionCount = 0;
var quizTimer = 120;
var timeLimit;
var score = 0;
let scores = [];
let names = [];

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

// Form handler to submit score
var submitScore = function(score, name) {

    // Make sure input is not empty
    if (!name) {
        alert("Please type your initials!");
        return false;
    }

    // Get scores function call
    getScores(score);
    // Get names function call
    getNames(name);

    // Set scores and names to local storage
    localStorage.setItem("scores", scores);
    localStorage.setItem("names", names);

    // Go to scoreboard
    scoreBoard(scores, names);
}

// Build Scoreboard
var scoreBoard = function(scores, names) {
    var scoreBoardLen = scores.length;

    for (i=0;i<scoreBoardLen;i++) {
        console.log(scores[i] + " " + names[i]);
    }
}

// Get existing names from local storage
var getNames = function(name) {

    localStgNames = localStorage.getItem("names");
    // If names is empty, set to empty array
    if (!names) {
        names = [];
    }
    
    // Push name onto array
    names.push(name);

    return names;
}

// Get existing scores from local storage
var getScores = function(score) {
    
    localStgScores = localStorage.getItem("scores");
    // If scores is empty, set to empty array
    if (!scores) {
        scores = [];
    }
    // Push score onto array
    scores.push(score);

    return scores;
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
        questionBodyEl.textContent = "";

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
        quizEnd();
    }
}

// Start the quiz
var startQuiz = function(event) {
    startTimer();
    quizStartEl.remove();
    getQuestion(questionCount);
}

// End of quiz
var quizEnd = function() {
    // Display score
    questionHeadlinEl.textContent = "Your Score: " + score;
    questionBodyEl.textContent = "Enter your initials and click submit.";

    // Reset time text
    quizTimerEl.textContent = "Time";

    // Remove answer list
    answerListEl.remove();

    // Add form to question body
    questionBodyEl.appendChild(formEl);

    // Add input and submit button
    formEl.innerHTML += "<input class='form-input' type='text' name='form-input' placeholder='Enter Initials'>";
    formEl.innerHTML += "<br />";
    formEl.innerHTML += "<button class='form-button' id='go-back'>Go Back</button>";
    formEl.innerHTML += "<button class='form-button' type='submit'>Submit</button>";

    // Add event listeners to form buttons
    document.querySelector("#go-back").addEventListener("click", quizReset);
    document.querySelector("#submit-score").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get form input
        var name = document.querySelector("input[name='form-input']").value;

        // Submit score function call
        submitScore(score, name);
    });
}

// Rest Quiz
var quizReset = function() {
    questionHeadlinEl.textContent = "Coding Quiz Challenge";
    questionBodyEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    document.querySelector("main").appendChild(quizStartEl);
    footerHeadlineEl.remove();
}

// Event handlers for buttons
quizStartEl.addEventListener("click", startQuiz); // Quiz Start
wrongAnswerEl1.addEventListener("click", evaluateAnswer); // Wrong answer 1
wrongAnswerEl2.addEventListener("click", evaluateAnswer); // Wrong answer 2
wrongAnswerEl3.addEventListener("click",  evaluateAnswer); // Wrong answer 3
// Correct answer
cAnswerEl.addEventListener("click", function() {
    evaluateAnswer("correct");
});