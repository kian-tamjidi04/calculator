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

numContainer.addEventListener('click', (event) => {
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
    firstVal = parseInt(display.textContent);
    currentOperation = event.target.value;
    display.textContent = "";
})

const equalsBtn = document.querySelector(".equals-button");
equalsBtn.addEventListener('click', () => {
    secondVal = parseInt(display.textContent);
    let res = operate(currentOperation, firstVal, secondVal);
    display.textContent = res;
});