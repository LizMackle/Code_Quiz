const timerElement = document.getElementById("seconds");
const landingPage = document.getElementById("landing-page");
const startButton = document.getElementById("start-btn");
const questionPage = document.getElementById("question-page");
const endGamePage = document.getElementById("end-page");
const submitButton = document.getElementById("submit-name");
//
const highScores = document.getElementById("leaderboard");
const playAgainButton = document.getElementById("play-again");
//
//
const answerButton = document.querySelector("answers.buttons");
const answerfeedback = document.getElementById("feedback");
//
const questionTitle = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("choice-text"));
var questionCounter = 0;
var currentQuestion = {};
var availableQuestions = [];
//
var timeRemaining = 60;
var timerInterval;

// When start button is clicked, landing page disappears / first question appears & timer is activated
startButton.addEventListener('click', startQuiz);

// Timer function 
function startTimer() {
    timerInterval = setInterval(function () {
        timeRemaining = timeRemaining - 1;
        if (timeRemaining < 0) {
            endGame();
        } else {
            timerElement.textContent = timeRemaining;
        }
    }, 1000);
}

// start quiz functoon
function startQuiz() {
    landingPage.classList.add('hide');
    questionPage.classList.remove('hide');
    startTimer();
    showQuestion();
}

// first question function
function showQuestion() {
    questionCounter = 0;
    availableQuestions = [quizQuestions];
    console.log(availableQuestions);
    nextQuestion();
}

// cylces through next question 
function nextQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionTitle.innerText = currentQuestion.questionTitle;
};

    // end game function
    function endGame() {
        clearInterval(timerInterval);
        questionPage.classList.add('hide');
        endGamePage.classList.remove('hide');
    }

    function leaderBoard() {
        highScores.classList.remove('hide');
        endGamePage.classList.add('hide');
    }

    // endGame();
    // leaderboard()

    var quizQuestions = [
        {
            question: 'JavaScript files have an extension of:',
            choice1: ".java",
            choice2: ".js",
            choice3: ".javascript",
            choice4: ".xml",
            answer: 2,
        },
        {
            question: 'In web design, what does CSS stand for?',
            choice1: "Counter Strike: Source",
            choice2: "Corrective Style Sheet",
            choice3: "Computer Style Sheet",
            choice4: "Cascading Style Sheet",
            answer: 4,
        },
        {
            question: 'How do you comment a line out in JavaScript?',
            choice1: "%",
            choice2: "+",
            choice3: "//",
            choice4: "Cena",
            answer: 3,
        },
        {
            question: 'In which HTML elements do we put in JavaScript code?',
            choice1: "<js>",
            choice2: "<script>",
            choice3: "<body>",
            choice4: "<head>",
            answer: 2,
        },
        {
            question: 'Which language runs in a web browser?',
            choice1: ".Java",
            choice2: "C",
            choice3: "Python",
            choice4: "Javascript",
            answer: 4,
        },
    ];


// Answer feedback is given (corrct/incorrect)

// When answers are given, new question is presented

// If answer is given incorrectly, time is subtracted off the clock (10 seconds)

// When all questions are answered or timer hits 0, end the game

// Score is shown, given the option to save with initials

// Option to play again

// var currentquestion = quizQuestions[questionIndex];
//     question.textContent = currentquestion.question;
//     const choices = currentquestion.choices;
//     for (var i = 0; i < choices.length; i++) {
//         answers.children[i].textContent = choices[i];
//     }

// next question
// if (questionIndex < quizQuestions.length - 1) {
//     questionIndex++;
//     showQuestion();
// } else { 
//     endGame();
// }