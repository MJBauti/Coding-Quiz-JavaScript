var startButton = document.getElementById('start-btn');
var questionContainerEl = document.getElementById('question-container');

// start Quiz
function startQuiz() {
    startButton.setAttribute('class', 'hide');
    questionContainerEl.classList.remove('hide');
}


// progress questions

// 

startButton.addEventListener("click", startQuiz);