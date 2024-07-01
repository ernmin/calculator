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