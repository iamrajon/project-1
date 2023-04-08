let result = document.querySelector("#result");

function updateResult(value){
    result.value += value;
}

function calculate(operator){
    switch(operator){
        case '/':
            result.value = eval(result.value);
            result.value += '/';
            break;
        
        case '*':
            result.value = eval(result.value);
            result.value += '*';
            break;

        case '+':
            result.value = eval(result.value);
            result.value += '+';
            break;

        case '-':
            result.value = eval(result.value);
            result.value += '-';
            break;

        case '=':
            result.value = eval(result.value);
            break;
    }
}

function deleteOne(){
    result.value = result.value.toString().slice(0,-1);
}




function clearResult(){
    result.value = '';
}