let operation = '';
let num1, num2, correctAnswer;
let score = 0;
let sonicPosition = 0;
let gameTimer;
let sonicSpeed = 5;
let speedReduction = 1;

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
            document.getElementById('question').textContent = `${num1} x ${num2} = ?`;
            break;
        case 'divide':
            correctAnswer = Math.round(num1 / num2);
            document.getElementById('question').textContent = `${num1} ÷ ${num2} = ?`;
            break;
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        score++;
        moveSonic();
        resetSpeed();
        document.getElementById('answer').value = '';
        generateQuestion();
        updateBackdrop();
    } else {
        reduceSpeed();
        document.getElementById('answer').value = '';
    }
}

function moveSonic() {
    sonicPosition += sonicSpeed * 10;
    document.getElementById('sonic').style.left = sonicPosition + 'px';
}

function startGame() {
    score = 0;
    sonicPosition = 0;
    sonicSpeed = 5;
    document.getElementById('sonic').style.left = '0px';
    document.getElementById('results').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    gameTimer = setTimeout(endGame, 120000);
    generateQuestion();
}

function endGame() {
    clearTimeout(gameTimer);
    document.getElementById('question-area').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = `Your score: ${score}`;
}

function reduceSpeed() {
    sonicSpeed = Math.max(1, sonicSpeed - speedReduction);
}

function resetSpeed() {
    sonicSpeed = 5;
}

function updateBackdrop() {
    if (sonicPosition > 200 && sonicPosition <= 400) {
        document.querySelector('.game-container').style.backgroundImage = "url('backdrop2.jpg')";
    } else if (sonicPosition > 400) {
        document.querySelector('.game-container').style.backgroundImage = "url('backdrop3.jpg')";
    } else {
        document.querySelector('.game-container').style.backgroundImage = "url('backdrop1.jpg')";
    }
}

startGame();
startGame();
