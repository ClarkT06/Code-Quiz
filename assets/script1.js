var score = 0;
var quiz = [{
        question: 'Boolean Data contails which of the following types:',
        options: ['letters', 'numbers', 'buttons', 'true/false'],
        answer: 'true/false'
    },
    {
        question: 'To log the events or result in the console you should use:',
        options: ['console.show()', 'console.event()', 'console.log()', 'console.info()'],
        answer: 'console.log'
    }, {
        question: "To reference an item in HTML you use:",
        options: ['document.querySelector', 'item.querySelector', 'html.itemSelector', 'select.Item()'],
        answer: 'document.querySelector'
    }, {
        question: 'If / Else / Or condition statements are enclosed within:',
        options: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 'parenthesis'
    }, {
        question: 'Javascript is Conencted to HTML by which tag:',
        options: ['style', 'script', 'javascript', 'connect'],
        answer: 'script'
    },
];

var timeLeft = 60;
var wrongAnswer = 10;
var answerNow = -1;
var timer;
var ulNew = document.createElement('ul');

//This is for the timer to begin
function begin() {
    timeLeft = 60;
    document.getElementById('timer').innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById('timer').innerHTML = 'You have ' + timeLeft + ' seconds left.';
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    next();
}
// This is for when the game ends
function endGame() {
    clearInterval(timer);
    var over = '<ul>Game Over</ul>'
    '<li> You\'re score is' + timeLeft + '</li>'
    document.getElementById('questions').innerHTML = over;

}

function newScore() {
    localStorage.setItem('playerScore', score);
    localStorage.setItem('playerName', document.getElementById('name').value);
    setScore();
}

function setScore() {
    var theQuiz = '<ul>' + localStorage.getItem('playerName') + ' scored: ' + localStorage.getItem('playerScore') + '</ul>'
    '<button onclick="restart()">Play Again!</button>'
    document.getElementById('questions').innerHTML = theQuiz;
}

//function clearScore(){
//localStorage.setItem('playerScore', '');
//localStorage.setItem('playerName', '';)

//resetGame();

//}

//start game
function startGame() {
    clearInterval(timer);
    score = 0;
    answerNow = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById('timer').innerHTML = timeLeft;

    var theQuiz = '<ul> Click to Play!</ul> <button onclick="begin()">Click to Begin!</button>';

    document.getElementById('questions').innerHTML = theQuiz;
}

function incorrect() {
    timeLeft -= 10;
    next();
}

var answerNow = -1;

function next() {
    answerNow++;
    if (answerNow > quiz.length - 1) {
        endGame();
        return;

    }
    var theQuiz = '<ul>' + quiz[answerNow].question + '</ul?'

    for (var quizLoop = 0; quizLoop < quiz[answerNow].options.length; quizLoop++) {
        var buttonClick = '<button onclick=\'[ANS]\'>[CHOICE]</button>';
        buttonClick = buttonClick.replace("[CHOICE]", quiz[answerNow].options[quizLoop]);
        if (quiz[answerNow].options[quizLoop] == quiz[answerNow].answer) {
            buttonClick = buttonClick.replace('[ANS]', 'You Got it!');
        } else {
            buttonClick = buttonClick.replace('[ANS]', 'Uh Oh, Betetr luck next time');
        }
        theQuiz += buttonClick
    }
    document.getElementById("questions").innerHTML = theQuiz;

}