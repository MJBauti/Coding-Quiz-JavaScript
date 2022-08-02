var startButton = document.getElementById('start-btn');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtonEl = document.getElementById('answer-btns');
var shuffledQuestions;
var currentQuestionIndex;

function startQuiz() {
    startButton.setAttribute('class', 'hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide');
    // timerCount = 60;
    // startTimer();
    nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.textContent = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.textContent = answer.text;
        button.setAttribute('class', 'btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonEl.appendChild(button);
    })
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    
}


startButton.addEventListener("click", startQuiz);

var questions = [
    {question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
        {text: '<script>', correct: true},
        {text: '<scripting>', correct: false},
        {text: '<js>', correct: false},
        {text: '<javascript>', correct: false}
    ]},
    {question: 'What is the correct JavaScript syntax to change the content of the <p> element with id of demo?',
    answers:[
        {text: 'document.getElementById("demo").innerHTML = "Hello World!";', correct: true},
        {text: '#demo.innerHTML = "Hello World!";', correct: false},
        {text: 'document.getElement("p").innerHTML = "Hello World!";', correct: false},
        {text: 'document.getElementByName("p").innerHTML = "Hello World!";', correct: false}
    ]},
    {question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers:[
        {text: '<script src="xxx.js">  ', correct: true},
        {text: '<script name="xxx.js">', correct: false},
        {text: '<script href="xxx.js">', correct: false}
    ]},
    {question: 'The external JavaScript file must contain the <script> tag.',
    answers:[
        {text: 'True', correct: false},
        {text: 'False', correct: true}
    ]},
    {question: 'How do you write "Hello World" in an alert box?',
    answers:[
        {text: 'alert("Hello World");  ', correct: true},
        {text: 'msg("Hello World");', correct: false},
        {text: 'msgBox("Hello World");', correct: false},
        {text: 'alertBox("Hello World");', correct: false}
    ]},
    {question: 'How do you create a function in JavaScript?',
    answers:[
        {text: 'function myFunction()  ', correct: true},
        {text: 'function = myFunction()', correct: false},
        {text: 'function:myFunction()', correct: false}
    ]},
    {question: 'How do you call a function named "myFunction"?',
    answers:[
        {text: 'myFunction()  ', correct: true},
        {text: 'call function myFunction()', correct: false},
        {text: 'call myFunction()', correct: false}
    ]},
    {question: 'How to write an IF statement in JavaScript?',
    answers:[
        {text: 'if (i == 5)', correct: true},
        {text: 'if i == 5 then', correct: false},
        {text: 'if i = 5', correct: false},
        {text: 'if i = 5 then', correct: false}
    ]},
    {question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers:[
        {text: 'if (i != 5)  ', correct: true},
        {text: 'if i <> 5', correct: false},
        {text: 'if i =! 5 then', correct: false},
        {text: 'if (i <> 5)', correct: false}
    ]},
    {question: 'How does a WHILE loop start?',
    answers:[
        {text: 'while (i <= 10)  ', correct: true},
        {text: 'while i = 1 to 10', correct: false},
        {text: 'while (i <= 10; i++)', correct: false}
    ]},
    {question: 'How does a FOR loop start?',
    answers:[
        {text: 'for (i = 0; i <= 5; i++)  ', correct: true},
        {text: 'for (i = 0; i <= 5)', correct: false},
        {text: 'for (i <= 5; i++)', correct: false},
        {text: 'for i = 1 to 5', correct: false}
    ]},
    {question: 'How can you add a comment in a JavaScript?',
    answers:[
        {text: '//This is a comment  ', correct: true},
        {text: '<!--This is a comment-->', correct: false},
        {text: '"This is a comment', correct: false}
    ]},
    {question: 'What is the correct way to write a JavaScript array?',
    answers:[
        {text: 'var colors = ["red", "green", "blue"]', correct: true},
        {text: 'var colors = "red", "green", "blue"', correct: false},
        {text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false},
        {text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false}
    ]},
    {question: 'Which event occurs when the user clicks on an HTML element?',
    answers:[
        {text: 'onclick', correct: true},
        {text: 'onmouseclick', correct: false},
        {text: 'onmouseover', correct: false},
        {text: 'onchange', correct: false}
    ]},
    {question: 'How do you declare a JavaScript variable?',
    answers:[
        {text: 'var carName;', correct: true},
        {text: 'v carName;', correct: false},
        {text: 'variable carName;', correct: false}
    ]}
]