function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

// TODO: DEAL WITH WHEN Y = 0
function divide(x, y) {
    if (y == 0) {
        alert("Illegal operation detected: Division by 0");
        reset();
        return;
    }
    return x / y;
}

let firstVal;
let currentOperation;
let secondVal;
let total;
let newOperation = false; // True when an operator has already been clicked on
let equalsPressed = false;

function operate(operator, x, y) {
    switch(operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}

const numContainer = document.querySelector(".numbers");
const display = document.querySelector(".display");

numContainer.addEventListener('click', (event) => {
    if (newOperation && !equalsPressed) {
        display.textContent = "";
    }
    // Prevents leading zeros and the = symbol displaying
    if (event.target.value === "=") {
        display.textContent += "";
    } else if (display.textContent == 0 || display.textContent == "") {
        display.textContent = event.target.value;
    } else {
        display.textContent += event.target.value;
    }
});

const operationContainer = document.querySelector(".operations");
operationContainer.addEventListener('click', (event) => {
    // If this is the first operator clicked...
    if (!newOperation) {
        firstVal = parseInt(display.textContent);
        currentOperation = event.target.value;
        newOperation = true;
    } else {
        calculate()
        currentOperation = event.target.value;
    }
})

const equalsBtn = document.querySelector(".equals-button");
equalsBtn.addEventListener('click', () => {
    calculate();
    equalsPressed = true;
});

function calculate() {
    secondVal = parseInt(display.textContent);
    if (total == undefined) {
        total = firstVal;
    }
    total = operate(currentOperation, total, secondVal);
    display.textContent = total;
}

const clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener('click', () => {
    reset();
})

function reset() {
    display.textContent = "0";
    newOperation = false;
    equalsPressed = false;
    firstVal = undefined;
    secondVal = undefined;
    total = undefined;
    currentOperation = undefined;
}