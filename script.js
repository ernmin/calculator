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

    function resetAllexceptResult(){
        first = null;
        displayNumber = null;
        second = null;
        operator = null;
        input = null;
    }

    function equals(){
        second = displayNumber;
        displayNumber = operate(operator, first, second);
        input = document.querySelector('.field');
        input.textContent = displayNumber;
        result = displayNumber;
        resetAllexceptResult();
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
        numberButtons[i].addEventListener('click', function() {
            text = i.toString();
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
    clearField.addEventListener('click', function() {
        let input = document.querySelector('.field');
        input.textContent = '';
        resetAllexceptResult()
        result = null;
    })
    
    let addOperator = document.querySelector('#plus');
    addOperator.addEventListener('click', RunOperator);
    //addOperator.addEventListener('click', equals);

    let minusOperator = document.querySelector('#minus');
    minusOperator.addEventListener('click', RunOperator);

    let multiplyOperator = document.querySelector('#times');
    multiplyOperator.addEventListener('click', RunOperator);

    let divideOperator = document.querySelector('#divide');
    divideOperator.addEventListener('click', RunOperator);

    //how to run two functions for event listener?

    let equal = document.querySelector('#equal');
    equal.addEventListener('click', equals);
});