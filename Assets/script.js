// ELEMENTS
const landingPage = document.getElementById("landing-page");
const startButton = document.getElementById("start-btn");
const questionPage = document.getElementById("question-page");
const question = document.getElementById("question-title");
const answers = document.querySelector(".choices");
const answerButton = document.querySelector("choices.buttons");
const answerfeedback = document.getElementById("feedback");
const endGamePage = document.getElementById("end-page");
const highScorePage = document.getElementById("highscores-page");
const playAgainButton = document.getElementById("play-again");
const timerElement = document.getElementById("seconds");

var timeRemaining = 60;
var timerInterval;

// When start button is clicked, landing page disappears / first question appears & timer is activated
startButton.addEventListener('click', startQuiz);

function startQuiz(){
    landingPage.classList.add('hide');
    questionPage.classList.remove('hide');
    startTimer();
}

// Timer function 
function startTimer(){
    timerInterval = setInterval(function(){
        timeRemaining = timeRemaining - 1;
        timerElement.textContent = timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}


// end game function
function endGame(){
}


// Questions
const quizQuestions = [
    {
        question: 'JavaScript files have an extension of:',
        choices: [
            ".java",
            ".js",
            ".javascript",
            ".xml",
        ],
        correctAnswer: 2,
    },
    {
        question: 'In web design, what does CSS stand for?',
        choices: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
        correctAnswer: 4,
    },
    {        
        question: 'How do you comment a line out in JavaScript?',
        choices: [
            "%",
            "+",
            "//",
            "Cena",
        ],
        correctAnswer: 3,
    },
    {
        question: 'In which HTML elements do we put in JavaScript code?',
        choices: [
            "<js>",
            "<script>",
            "<body>",
            "<head>",
        ],
        correctAnswer: 2,
    },
    {
        question: 'Which language runs in a web browser?',
        choices: [
            ".Java",
            "C",
            "Python",
            "Javascript",
        ],
        correctAnswer: 4,
    },
];


// Answer feedback is given (corrct/incorrect)

// When answers are given, new question is presented

// If answer is given incorrectly, time is subtracted off the clock (10 seconds)

// When all questions are answered or timer hits 0, end the game  

// Score is shown, given the option to save with initials

// Option to play again