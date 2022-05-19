let firstNum = 0;
let nextNum = 0;
let operator = "";
let result = 0;

let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");


//main operation function once equals is clicked
function operate(sign, x, y){
    switch(sign){
        case "+":
            result = add(x,y);
            break;
        case "-":
            result = subtract(x,y);
            break;
        case "×":
            result = multiply(x,y);
            break;
        case "÷":
            result = divide(x,y);
            break;
    }
    display.textContent = result;
}

//operation functions
function add(x, y){
    return x + y;
}
function multiply(x, y){
    return x * y;
}
function subtract(x, y){
    return x - y;
}
function divide(x, y){
    return x / y;
}

//button event listeners
clear.addEventListener("click", () => {
    firstNum = 0;
    nextNum = 0;
    operator = "";
    result = 0;
    display.textContent = 0;
});

del.addEventListener("click", () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});