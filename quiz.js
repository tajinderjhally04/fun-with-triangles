const quizFormValue = document.querySelector('#quiz-form');
const submitAnswerButton = document.querySelector('#submit-answer-btn');
const outputScore = document.querySelector('#output');

const correctAnswer = ["90", "Right Angled", "3", "180"];

function calculateScore(event) {
    event.preventDefault();
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizFormValue);

    for (let value of formResults.values()) {
        if(value === correctAnswer[i]){
            score = score + 1;
        }
        i = i + 1;
    }
    outputScore.innerText = "Your Score is : " + score;
}

submitAnswerButton.addEventListener("click", calculateScore);
