document.addEventListener('DOMContentLoaded', function() {
    function add(first, second){
        return Number(first) + Number(second);
    }

    function subtract(first, second){
        return Number(first) - Number(second);
    }

    function multiply(first, second){
        return Number(first) * Number(second);
    }

    function divide(first, second){
        if (second == 0){
            return 'Math Error';
        }
        return Number(first) / Number(second);
    }

    function operate(operator, first, second){
        if(operator === 'plus'){
            return roundOff(add(first, second));
        }
        else if(operator === 'minus'){
            return roundOff(subtract(first, second));
        }
        else if(operator === 'times'){
            return roundOff(multiply(first, second));
        }
        else if(operator === 'divide'){
            return roundOff(divide(first, second));
        }
    }

    function roundOff(num){
        if(num % 1 != 0 && num.toString().split(".")[1].length > 8){
                return num.toFixed(6);
        }
        else {
            return num;
        }
    }
    function resetAllexceptResult(){
        first = null;
        displayNumber = null;
        second = null;
        operator = null;
        input = null;
    }

    function equals(){
        if (displayNumber === null){
            second = first; // if equals is pressed after an operator instead of a number
        }
        else {
            second = displayNumber;
        }
        displayNumber = operate(operator, first, second);
        input = document.querySelector('.field');
        input.textContent = displayNumber;
        result = displayNumber;
        resetAllexceptResult();
    }

    function decimalpoint(){
        if(displayNumber === null){
            displayNumber = '0.';
            let input = document.querySelector('.field');
            input.textContent = displayNumber;
            
            return;
        }
        else if(displayNumber.includes(".")){
            return;
        }
        else{
            displayNumber += '.';
            let input = document.querySelector('.field');
            input.textContent = displayNumber;
        }   
    }

    function RunOperator(){
        //fourth type, A + B = C, C + D 
        if (result !== null){
            first = result;
            operator = this.id;
            displayNumber = null;
        }
        //first type, A + B = C OK!
        else if (first === null && operator === null){
            first = displayNumber;
            operator = this.id;
            displayNumber = null;
        }
        // third type, A + (change operator) - B = C
        else if (first !== null && operator !== null && displayNumber === null){
            operator = this.id;
            displayNumber = null;
        }
        //second type, A + B + C / D = E OK!
        else if (first !== null && operator !== null){
            second = displayNumber;
            first = operate(operator, first, second);
            operator = this.id; // use old operator then change the operator to the current operator
            input = document.querySelector('.field');
            input.textContent = first;
            displayNumber = null;
            second = null;
        }
        
    }

    let numberButtons = document.querySelectorAll(".number");
    let displayNumber = null;
    let first = null;
    let second = null;
    let operator = null;
    let input = null;
    let result = null;
    for (let i = 0; i < numberButtons.length; i++){
        numberButtons[i].addEventListener('pointerdown', function() {
            text = numberButtons[i].textContent;
            if(displayNumber === null || result !== null){
                result = null;
                displayNumber = text;
            }
            else if (first !== null && operator !== null){
                displayNumber += text;
            }
            else{
                displayNumber += text;
            }
            input = document.querySelector('.field');
            input.textContent = displayNumber;
        })
    }

    let clearField = document.querySelector('#AC');
    clearField.addEventListener('pointerdown', function() {
        let input = document.querySelector('.field');
        input.textContent = '';
        resetAllexceptResult()
        result = null;
    })

    let backspace = document.querySelector('#backspace');
    backspace.addEventListener('pointerdown', function (){
        let tempNum = displayNumber.slice(0,displayNumber.length - 1);
        displayNumber = tempNum;
        let input = document.querySelector('.field');
        input.textContent = displayNumber;
    })
    
    let addOperator = document.querySelector('#plus');
    addOperator.addEventListener('pointerdown', RunOperator);
    //addOperator.addEventListener('click', equals);

    let minusOperator = document.querySelector('#minus');
    minusOperator.addEventListener('pointerdown', RunOperator);

    let multiplyOperator = document.querySelector('#times');
    multiplyOperator.addEventListener('pointerdown', RunOperator);

    let divideOperator = document.querySelector('#divide');
    divideOperator.addEventListener('pointerdown', RunOperator);

    //how to run two functions for event listener?

    let equal = document.querySelector('#equal');
    equal.addEventListener('pointerdown', equals);

    let decimal = document.querySelector('#decimal');
    decimal.addEventListener('pointerdown', decimalpoint);
});