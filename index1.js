function sum(a,b ){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 + number2;
}

function multiply(a, b){
    let number  = parseInt(a);
    let multiplyer = parseInt(b);
    let result = 1;
    for(i = 0; i < multiplyer; i++){
        result += number
    }
    return result;
}

module.exports = {sum, multiply};
 
