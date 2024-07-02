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
        return Number(first) / Number(second);
    }

    function operate(operator, first, second){
        if(operator === 'plus'){
            return add(first, second);
        }
        else if(operator === 'minus'){
            return subtract(first, second);
        }
        else if(operator === 'times'){
            return multiply(first, second);
        }
        else if(operator === 'divide'){
            return divide(first, second);
        }
    }

    function firstNumandOperator(){
        if (first === null){
            first = displayNumber;
        }
        operator = this.id;
        displayNumber = null;
    }

    let numberButtons = document.querySelectorAll(".number");
    let displayNumber = null;
    let first = null;
    let second = null;
    let operator = null;
    let input = null;
    for (let i = 0; i < numberButtons.length; i++){
        numberButtons[i].addEventListener('click', function() {
            text = i.toString();
            if(displayNumber === null){
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
    clearField.addEventListener('click', function() {
        let input = document.querySelector('.field');
        displayNumber = null;
        input.textContent = '';
    })
    
    let addOperator = document.querySelector('#plus');
    addOperator.addEventListener('click', firstNumandOperator);

    let minusOperator = document.querySelector('#minus');
    minusOperator.addEventListener('click', firstNumandOperator);

    let multiplyOperator = document.querySelector('#times');
    multiplyOperator.addEventListener('click', firstNumandOperator);

    let divideOperator = document.querySelector('#divide');
    divideOperator.addEventListener('click', firstNumandOperator);

    let equal = document.querySelector('#equal');
    equal.addEventListener('click', function(){
        second = displayNumber;
        displayNumber = operate(operator, first, second);
        input = document.querySelector('.field');
        input.textContent = displayNumber;
        first = null;
        displayNumber = null;
        second = null;
        operator = null;
        input = null;
    })
});