const timerElement = document.getElementById("seconds");
const landingPage = document.getElementById("landing-page");
const startButton = document.getElementById("start-btn");
//
let questionIndex = 0;
const questionPage = document.getElementById("question-page");
const question = document.getElementById("question-title");
const answers = document.querySelector(".answers");
const choiceButtons = document.querySelectorAll(".choice-list");
const answerfeedback = document.getElementById("feedback");
//
const endGamePage = document.getElementById("end-page");
var quizScore = document.getElementById("quiz-score");
const submitButton = document.getElementById("submit-name");
//
const highScores = document.getElementById("leaderboard");
const scoreList = document.getElementById('scores');
const playAgainButton = document.getElementById("play-again");
//
var timeRemaining = 60;
var timerInterval;
var answerMessage;

const quizQuestions = [
    {
        question: 'JavaScript files have an extension of:',
        choices: [
            ".java",
            ".js",
            ".javascript",
            ".xml",
        ],
        answer: 2,
    },
    {
        question: 'In web design, what does CSS stand for?',
        choices: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
        answer: 4,
    },
    {
        question: 'How do you comment a line out in JavaScript?',
        choices: [
            "%",
            "+",
            "//",
            "Cena",
        ],
        answer: 3,
    },
    {
        question: 'In which HTML elements do we put in JavaScript code?',
        choices: [
            "<js>",
            "<script>",
            "<body>",
            "<head>",
        ],
        answer: 2,
    },
    {
        question: 'Which language runs in a web browser?',
        choices: [
            ".Java",
            "C",
            "Python",
            "Javascript",
        ],
        answer: 4,
    },
];

// When start button is clicked, landing page disappears / first question appears & timer is activated
startButton.addEventListener('click', startQuiz);


// Timer function 
function startTimer() {
    timerInterval = setInterval(function () {
        timeRemaining = timeRemaining - 1;
        if (timeRemaining < 0) {
            endGame();
        } else {
            updateTimerText(timeRemaining);
        }
    }, 1000);
};

// start quiz function
function startQuiz() {
    landingPage.classList.add('hide');
    questionPage.classList.remove('hide');
    startTimer();
    showQuestion();
};

// first question function
function showQuestion() {
    var currentquestion = quizQuestions[questionIndex];
    question.textContent = currentquestion.question;
    const choices = currentquestion.choices;
    for (var i = 0; i < choices.length; i++) {
        answers.children[i].textContent = choices[i];
    }
};
 // answer feedback 
function showFeedback(isCorrect) {
    if (isCorrect) {
        answerfeedback.textContent = "Correct";
    } else {
        answerfeedback.textContent = "Incorrect"
    }
    setTimeout(function () {
        answerfeedback.textContent = "";
    }, 1000);
}

choiceButtons.forEach(function (button, index) {
    button.addEventListener('click', function (event) {
        const question = quizQuestions[questionIndex];
        const actualAnswer = question.choices[question.answer - 1];
        // Answer feedback is given (corrct/incorrect)
        const buttonContent = event.target.textContent;
        const isCorrect = actualAnswer === buttonContent;
        // If answer is given incorrectly, 10 seconds is subtracted off the clock
        if (!isCorrect) {
            // deduct 10 sec
            timeRemaining = timeRemaining - 10;
            updateTimerText(timeRemaining);
        }
        // show feedback
        showFeedback(isCorrect);
        // if we are on the last question,
        if (questionIndex >= quizQuestions.length - 1) {
            // end game
            return endGame()
        }
        // move on to next question
        nextQuestion()
    });

});

// updates timer instantly without delay
function updateTimerText(numOfSec) {
    timerElement.textContent = numOfSec;
}

// When answers are given, next question is presented
function nextQuestion() {
    if (questionIndex < quizQuestions.length - 1) {
        questionIndex++;
        showQuestion();
    } else {
        endGame();
    };
}

// When all questions are answered or timer hits 0, end the game
// show score (final number on the clock)

// end game function
function endGame() {
    clearInterval(timerInterval);
    questionPage.classList.add('hide');
    endGamePage.classList.remove('hide');
    quizScore.textContent = timeRemaining;
};

// when user clicks on submit button, grab user input
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const playerInitials = document.getElementById("insert-initials").value;
    
    // add the new highscore to exisitng highscore if exists,
    // store highscore + initials to local storage 
    let existingHighscores = JSON.parse(localStorage.getItem('highscores')); 
    // otherwise create a brandnew hs array
    if(existingHighscores === null){
        existingHighscores = [];
    }
    
    const playerHighscore = {
        name: playerInitials,
        score: timeRemaining
    }
    existingHighscores.push(playerHighscore);

    localStorage.setItem('highscores',  JSON.stringify(existingHighscores))
    leaderBoard();
})

// leaderboard page function
function leaderBoard() {
    clearInterval(timerInterval);
    timerElement.textContent = 0;
    highScores.classList.remove('hide');
    endGamePage.classList.add('hide');

    // displays player highscores in a list
    const highscoreDataString = localStorage.getItem('highscores')
    const highscoreData = JSON.parse(highscoreDataString);

    scoreList.textContent = "";
    for (let index = 0; index < highscoreData.length; index++) {
        const highScore = highscoreData[index];
        
        const li = document.createElement('li');

        li.textContent = highScore.name + ' - ' + highScore.score;

        scoreList.append(li);
    }
};

// user can play again by clicking play again button
playAgainButton.addEventListener('click', function (event) {
    clearInterval(timerInterval);
    timeRemaining = 60;
    timerElement.textContent = timeRemaining;
    endGamePage.classList.add('hide');
    highScores.classList.add('hide');
    landingPage.classList.remove('hide');
});





