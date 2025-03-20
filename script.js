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
