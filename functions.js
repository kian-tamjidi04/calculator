function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// Typical operation: 3 + 5
// firstVal = 3, operation = '+', secondVal = 5
let firstVal;
let currentOperation;
let secondVal;

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
let displayVal = display.textContent; // Remember that this value is a string for now

numContainer.addEventListener('click', (event) => {
    // Prevents leading zeros and the = symbol displaying
    if (event.target.value === "=") {
        displayVal += "";
    } else if (displayVal == 0 || displayVal == "") {
        displayVal = event.target.value;
    } else {
        displayVal += event.target.value;
    }
    display.textContent = displayVal;
});

// Make the calculator work:
    // Take one value
    // Store operator pressed
    // Take second value
    // Wait until = is pressed
    // Change output on display to be the result of the calculation

const operationContainer = document.querySelector(".operations");
operationContainer.addEventListener('click', (event) => {
    firstVal = parseInt(displayVal);
    currentOperation = event.target.value;
    displayVal = "";
    display.textContent = displayVal;
})

const equalsBtn = document.querySelector(".equals-button");
equalsBtn.addEventListener('click', () => {
    secondVal = parseInt(displayVal);
    displayVal = "";
    display.textContent = `${operate(currentOperation, firstVal, secondVal)}`;
    console.log(operate(currentOperation, firstVal, secondVal))
});