let firstNum = null;
let nextNum = null;
let operator = null;
let result = 0;

let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");
let equal = document.querySelector(".equals");


//main operation function once equals is clicked
function operate(sign, x, y){
    console.log(x);
    console.log(y);
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
    firstNum = null;
    nextNum = null;
    operator = null;
    result = 0;
    display.textContent = 0;
});

del.addEventListener("click", () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

equal.addEventListener("click", () => {
    operate(operator, firstNum, nextNum);
});

function signClick(sign){
    if(sign == "+"){
        operator = "+";
    }else if(sign == "-"){
        operator = "-";
    }else if(sign == "×"){
        operator = "×";
    }else if(sign == "÷"){
        operator = "÷";
    }
    console.log(operator);
}

function numClick(num){
    display.textContent = num;
}
