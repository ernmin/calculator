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
        if(operator === '+'){
            add(first, second);
        }
        else if(operator === '-'){
            subtract(first, second);
        }
        else if(operator === '*'){
            multiply(first, second);
        }
        else if(operator === '/'){
            divide(first, second);
        }
    }

    let numberButtons = document.querySelectorAll(".number");
    let displayNumber = null;
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
});