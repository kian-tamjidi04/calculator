function add(x, y) {
    return (x + y).toFixed(6);
}

function subtract(x, y) {
    return (x - y).toFixed(6);
}

function multiply(x, y) {
    return (x * y).toFixed(6);
}

function divide(x, y) {
    if (y == 0) {
        alert("Illegal operation detected: Division by 0");
        reset();
        divByZero = true;
        return 0;
    } else {
        return (x / y).toFixed(6);
    }
}

let total;
let currentOperation;
let secondVal;
let newOperation = false; // True when an operator has already been clicked on
let divByZero = false;
let equalsPressed = false;
let safeToInputSecond = true;

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
    if (newOperation && !equalsPressed && safeToInputSecond) {
        display.textContent = "";
        safeToInputSecond = false;
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
        total = parseInt(display.textContent);
        currentOperation = event.target.value;
        newOperation = true;
    } else {
        calculate();
        currentOperation = event.target.value;
        safeToInputSecond = true;
    }
})

const equalsBtn = document.querySelector(".equals-button");
equalsBtn.addEventListener('click', () => {
    calculate();
    if (!divByZero) {
        equalsPressed = true;
    } else {
        divByZero = false;
    }
    alert("Press clear to restart");
});

function calculate() {
    // Get the second value from the display
    secondVal = parseInt(display.textContent);

    // Update the total by performing the operation
    total = operate(currentOperation, total, secondVal);
    display.textContent = total;
}

const clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener('click', () => {
    reset();
    display.textContent = 0;
})

function reset() {
    newOperation = false;
    equalsPressed = false;
    currentOperation = undefined;
    secondVal = undefined;
    total = undefined;
    safeToInputSecond = true;
}