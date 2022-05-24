//global vars
let firstValue = 0;
let secondValue = 0;
let operator = "";
let result = 0;
let clearScreen = false;
let lastClick = "";

let allElements = document.querySelector('*');
let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");
let equal = document.querySelector(".equals");
let decimalButton = document.querySelector(".decimal");


//main operation function once equals is clicked
function operate(sign, x, y) {
    x = Number(x);
    y = Number(y);
    switch (sign) {
        case "+":
            return add(x, y);
            break;
        case "-":
            return subtract(x, y);
            break;
        case "×":
            return multiply(x, y);
            break;
        case "÷":
            return divide(x, y);
            break;
    }
}

//operation functions
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
function subtract(x, y) {
    return x - y;
}
function divide(x, y) {
    if (y == 0) {
        display.textContext = "undefined";
    } else {
        return x / y;
    }
}

//button event listeners
clear.addEventListener("click", () => {
    display.textContent = "0";
    firstValue = 0;
    secondValue = 0;
    result = 0;
    operator = "";
    decimalButton.disabled = false;
    clearScreen = false;
});

allElements.addEventListener('click', (e) => {
    lastClick = e.target.classList.value;
})

del.addEventListener("click", () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

equal.addEventListener("click", () => {
    secondValue = display.textContent;
    display.textContent = operate(operator, firstValue, secondValue);
    console.log(operator);
    console.log(firstValue);
    console.log(secondValue)
});

function signClick(sign) {
    decimalButton.disabled = false;
    if (display.textContent.includes("restart")) {
        displayRestartMessage();
    }
    if (operator == "" || operator == "=" || lastClick == "add" || lastClick == "multiply" || lastClick == "subtract" || lastClick == "divide"|| operator == "Enter") {
        operator = sign;
        firstValue = parseFloat(display.textContent);
        clearScreen = true;
    }
    else {
        secondValue = parseFloat(display.textContent);
        operate(operator, firstValue, secondValue);
        result = Math.round((result + Number.EPSILON) * 10000) / 10000; //rounds to 4 decimal places
        displayResult();
        operator = sign;
        firstValue = result;
        result = 0;
        clearScreen = true;
    }
}

//when a number is clicked
function numClick(num) {
    if (display.textContent == "0") {
        display.textContent = "";
    }
    if (clearScreen == true) {
        display.textContent = "";
        clearScreen = false;
    }
    if (firstValue.toString().length > 15 || isNaN(firstValue)) {
        displayRestartMessage();
    }
    display.textContent += num;
    if (display.textContent.length > 15) {
        displayRestartMessage();
    }
    if (display.textContent.includes(".")) {
        decimalButton.disabled = true;
    }
    console.log(lastClick);
}

function displayRestartMessage() {
    display.textContent = "Number too long. CLEAR to restart.";
}

function displayResult() {
    display.textContent = result;
    if (display.textContent.length > 15) {
        displayRestartMessage();
    }
    else if (isNaN(result)) {
        display.textContent = "Don't be mean. CLEAR to restart";
    }
}