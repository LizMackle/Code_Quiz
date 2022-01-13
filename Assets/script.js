const timerElement = document.getElementById("seconds");
const landingPage = document.getElementById("landing-page");
const startButton = document.getElementById("start-btn");
//
const questionIndex = 0;
const questionPage = document.getElementById("question-page");
const question = document.getElementById("question-title");
const answers = document.querySelector(".answers");
const answerButton = document.querySelector("choices.buttons");
const answerfeedback = document.getElementById("feedback");
//
const endGamePage = document.getElementById("end-page");
const submitButton = document.getElementById("submit-name");
//
const highScores = document.getElementById("leaderboard");
const playAgainButton = document.getElementById("play-again");
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
    var currentquestion = quizQuestions[questionIndex];
    question.textContent = currentquestion.question;
    const choices = currentquestion.choices;
    for (var i = 0; i < choices.length; i++) {
        answers.children[i].textContent = choices[i];
    }
}

// cylces through next question 
// function nextQuestion() {
//     if (questionIndex < quizQuestions.length - 1) {
//         questionIndex++;
//         showQuestion();
//     } else { 
//         endGame();
//     }
// }

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

    // nextQuestion();
    // endGame();
    // leaderboard()

    const quizQuestions = [
        {
            question: 'JavaScript files have an extension of:',
            choices: [
                ".java",
                ".js",
                ".javascript",
                ".xml",
            ],
            Answer: 2,
        },
        {
            question: 'In web design, what does CSS stand for?',
            choices: [
                "Counter Strike: Source",
                "Corrective Style Sheet",
                "Computer Style Sheet",
                "Cascading Style Sheet",
            ],
            Answer: 4,
        },
        {
            question: 'How do you comment a line out in JavaScript?',
            choices: [
                "%",
                "+",
                "//",
                "Cena",
            ],
            Answer: 3,
        },
        {
            question: 'In which HTML elements do we put in JavaScript code?',
            choices: [
                "<js>",
                "<script>",
                "<body>",
                "<head>",
            ],
            Answer: 2,
        },
        {
            question: 'Which language runs in a web browser?',
            choices: [
                ".Java",
                "C",
                "Python",
                "Javascript",
            ],
            Answer: 4,
        },
    ];


// Answer feedback is given (corrct/incorrect)

// When answers are given, new question is presented

// If answer is given incorrectly, time is subtracted off the clock (10 seconds)

// When all questions are answered or timer hits 0, end the game

// Score is shown, given the option to save with initials

// Option to play again