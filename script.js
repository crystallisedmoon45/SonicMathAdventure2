let operation = '';
let num1, num2, correctAnswer;
let score = 0;
let sonicPosition = 0;
let gameTimer;
let questionTimer;

function setOperation(op) {
    operation = op;
    generateQuestion();
}

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    switch (operation) {
        case 'add':
            correctAnswer = num1 + num2;
            document.getElementById('question').textContent = `${num1} + ${num2} = ?`;
            break;
        case 'subtract':
            correctAnswer = num1 - num2;
            document.getElementById('question').textContent = `${num1} - ${num2} = ?`;
            break;
        case 'multiply':
            correctAnswer = num1 * num2;
            document.getElementById('question').textContent = `${num1} * ${num2} = ?`;
            break;
        case 'divide':
            correctAnswer = Math.round(num1 / num2);
            document.getElementById('question').textContent = `${num1} ÷ ${num2} = ?`;
            break;
    }

    startQuestionTimer();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        score++;
        moveSonic();
    }
    document.getElementById('answer').value = '';
    generateQuestion();
    resetQuestionTimer();
}

function moveSonic() {
    sonicPosition += 50;
    document.getElementById('sonic').style.left = sonicPosition + 'px';
}

function startGame() {
    score = 0;
    sonicPosition = 0;
    document.getElementById('sonic').style.left = '0px';
    document.getElementById('results').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    gameTimer = setTimeout(endGame, 120000); // 2 minutes
}

function endGame() {
    clearTimeout(gameTimer);
    document.getElementById('question-area').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = `Your score: ${score}`;
}

function startQuestionTimer() {
    questionTimer = setTimeout(() => {
        generateQuestion();
    }, 5000); // 5 seconds
}

function resetQuestionTimer() {
    clearTimeout(questionTimer);
    startQuestionTimer();
}

startGame();
//we//
