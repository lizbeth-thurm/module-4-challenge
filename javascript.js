// Get elements and assign them to variables for different containers

var startScreen = document.getElementById("start-container");
var finishScreen = document.getElementById("finish-container");
var scoreScreen = document.getElementById("score-container");

// Variables for options boxes

var optionBox1 = document.getElementById("option-container1");
var optionBox2 = document.getElementById("option-container2");
var optionBox3 = document.getElementById("option-container3");
var optionBox4 = document.getElementById("option-container4");
var optionBox5 = document.getElementById("option-container5");

// These variables represent the containers for each separate set of questions.

var quizScreen1 = document.getElementById("question-container1");
var quizScreen2 = document.getElementById("question-container2");
var quizScreen3 = document.getElementById("question-container3");
var quizScreen4 = document.getElementById("question-container4");
var quizScreen5 = document.getElementById("question-container5");

// Hide the finish screen, the high-score screen, and the screens for the questions.

finishScreen.style.display = "none";
scoreScreen.style.display = "none";

quizScreen1.style.display = "none";
quizScreen2.style.display = "none";
quizScreen3.style.display = "none";
quizScreen4.style.display = "none";
quizScreen5.style.display = "none";

// Variables for controlling correct and incorrect answers in the quiz and holding score value.

var answer;
var correctAnswer;
var wrongAnswer;
var playerScore;

// Functions to check if answer was right or wrong, increment score, and display result.

function correctFunction1(){
    answer = true;
    playerScore = playerScore + 20;

    optionBox1.style.display = "none";

    document.getElementById("right-or-wrong1").innerHTML = "Correct!";
}

function wrongFunction1(){
    answer = false;

    optionBox1.style.display = "none";

    document.getElementById("right-or-wrong1").innerHTML = "Wrong!";
}

function correctFunction2(){
    answer = true;
    playerScore = playerScore + 20;

    optionBox2.style.display = "none";

    document.getElementById("right-or-wrong2").innerHTML = "Correct!";
}

function wrongFunction2(){
    answer = false;

    optionBox2.style.display = "none";

    document.getElementById("right-or-wrong2").innerHTML = "Wrong!";
}

function correctFunction3(){
    answer = true;
    playerScore = playerScore + 20;

    optionBox3.style.display = "none";

    document.getElementById("right-or-wrong3").innerHTML = "Correct!";
}

function wrongFunction3(){
    answer = false;

    optionBox3.style.display = "none";

    document.getElementById("right-or-wrong3").innerHTML = "Wrong!";
}

function correctFunction4(){
    answer = true;
    playerScore = playerScore + 20;

    optionBox4.style.display = "none";

    document.getElementById("right-or-wrong4").innerHTML = "Correct!";
}

function wrongFunction4(){
    answer = false;

    optionBox4.style.display = "none";

    document.getElementById("right-or-wrong4").innerHTML = "Wrong!";
}

function correctFunction5(){
    answer = true;
    playerScore = playerScore + 20;

    optionBox5.style.display = "none";

    document.getElementById("right-or-wrong5").innerHTML = "Correct!";
}

function wrongFunction5(){
    answer = false;

    optionBox5.style.display = "none";

    document.getElementById("right-or-wrong5").innerHTML = "Wrong!";
}



// Function to start quiz, start timer, and switch to first question screen.

function startFunction() {
    playerScore = 0;

    document.getElementById("right-or-wrong1").innerHTML = "SELECT ANSWER";
    startScreen.style.display = "none";
    quizScreen1.style.display = "block";
  }

// Function to advance to next question and log score.

function nextFunction1() {

    document.getElementById("right-or-wrong2").innerHTML = "SELECT ANSWER";
    quizScreen1.style.display = "none";
    quizScreen2.style.display = "block";
}

function nextFunction2() {

    document.getElementById("right-or-wrong3").innerHTML = "SELECT ANSWER";
    quizScreen2.style.display = "none";
    quizScreen3.style.display = "block";
}

function nextFunction3() {

    document.getElementById("right-or-wrong4").innerHTML = "SELECT ANSWER";
    quizScreen3.style.display = "none";
    quizScreen4.style.display = "block";
}

function nextFunction4() {

    document.getElementById("right-or-wrong5").innerHTML = "SELECT ANSWER";
    quizScreen4.style.display = "none";
    quizScreen5.style.display = "block";
}

function nextFunction5() {
    document.getElementById("show-score").innerHTML = playerScore;
    quizScreen5.style.display = "none";
    finishScreen.style.display = "block";
}

function nextFunction6() {
    finishScreen.style.display = "none";
    scoreScreen.style.display = "block";
}

function nextFunction7() {
    scoreScreen.style.display = "none";
    startScreen.style.display = "block";
}