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
            add(first, second);
        }
        else if(operator === 'minus'){
            subtract(first, second);
        }
        else if(operator === 'times'){
            multiply(first, second);
        }
        else if(operator === 'divide'){
            divide(first, second);
        }
    }

    let numberButtons = document.querySelectorAll(".number");
    let displayNumber = null;
    let first = null;
    let second = null;
    let operator = null;
    for (let i = 0; i < numberButtons.length; i++){
        numberButtons[i].addEventListener('click', function() {
            text = i.toString();
            if(displayNumber === null){
                displayNumber = text;
            }
            else{
                displayNumber += text;
            }
            let input = document.querySelector('.field');
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
    addOperator.addEventListener('click', function() {
        first = displayNumber;
        operator = this.id;
        displayNumber = null;
        //displayNumber 
    })
});