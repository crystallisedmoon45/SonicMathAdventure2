let operation = '';
let num1, num2, correctAnswer;
let score = 0;
let sonicPosition = 0;
let gameTimer;
let sonicSpeed = 5; // Initial speed
let speedReduction = 1; // Amount to reduce speed by

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
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        score++;
        moveSonic();
        resetSpeed(); // Reset speed after correct answer
        document.getElementById('answer').value = '';
        generateQuestion(); // Generate new question on correct answer
    } else {
        reduceSpeed();
        document.getElementById('answer').value = '';
    }
}

function moveSonic() {
    sonicPosition += sonicSpeed * 10; // Move Sonic based on speed
    document.getElementById('sonic').style.left = sonicPosition + 'px';
}

function startGame() {
    score = 0;
    sonicPosition = 0;
    sonicSpeed = 5; // Reset speed
    document.getElementById('sonic').style.left = '0px';
    document.getElementById('results').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    gameTimer = setTimeout(endGame, 120000); // 2 minutes
    generateQuestion(); // Generate the first question
}

function endGame() {
    clearTimeout(gameTimer);
    document.getElementById('question-area').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = `Your score: ${score}`;
}

function reduceSpeed() {
    sonicSpeed = Math.max(1, sonicSpeed - speedReduction); // Ensure speed doesn't go below 1
}

function resetSpeed() {
    sonicSpeed = 5; // Reset speed to initial value
}

startGame();
