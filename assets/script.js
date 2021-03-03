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
        options: ['style', 
        'script', 'javascript', 'connect'],
        answer: 'script'
    },
];

var timeLeft = 60;

var answerNow = -1;
var timer;
//var ulNew = document.createElement('ul');

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

function next() {
    answerNow++;
    if (answerNow > quiz.length - 1) {
        endGame();
        return;

    }
    //var theQuiz = '<ul>' + quiz[answerNow].question + '</ul?'

var theQuiz = document.querySelector('.title');
theQuiz.textContent = quiz[answerNow].question;
var answers = document.getElementById("answers");
answers.innerHTML = '';

    for (var quizLoop = 0; quizLoop < quiz[answerNow].options.length; quizLoop++) {
        var button = document.createElement("button");
        button.setAttribute('value',quiz[answerNow].options[quizLoop]);
        button.textContent = quiz[answerNow].options[quizLoop];
button.onclick = checkAnswer;

answers.appendChild(button);
    }
//endGame();
}

function endGame(){
var createSubmit = document.createElement('input');
createSubmit.setAttribute('type', 'text');
createSubmit.setAttribute('id', 'initials');
createSubmit.textContent = "Submit";

  var finalScore = timeLeft;
createSubmit.addEventListener("click", function()
{

});
  if (timeLeft >= 0){
  finalScore.textContent = 'Your Final Score is ' + timeLeft; 

}
}

function checkAnswer(){
if (this.value !== quiz[answerNow].answer){
timeLeft -= 10;
//timer.textContent = timeLeft;
} 

if(answerNow === quiz.length) {
    timer.textContent = 'Your Score is: ' + timeLeft;
    
} else {
    next();
  return;
}}

//Set the scores to the Local Storage

function highScore(){

localStorage.setItem("");
}

function resetGame(){
    clearInterval(timer);
    timeLeft = 60;
    answerNow = -1;
 
    next();   
}


