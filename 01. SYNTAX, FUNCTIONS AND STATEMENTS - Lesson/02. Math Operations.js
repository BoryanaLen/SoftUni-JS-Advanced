function mathOperation(num1, num2, str){
    let result;

    if(str == '+'){
        result = num1 + num2;
    }
    else if(str == '-'){
        result = num1 - num2;
    }
    else if(str == '*'){
        result = num1 * num2;
    }
    else if(str == '/'){
        result = num1 / num2;
    }
    else if(str == '%'){
        result = num1 % num2;
    }
    else if(str == '**'){
        result = num1 ** num2;
    }

    console.log(result);
}

//mathOperation(5, 6, '+');
//mathOperation(3, 5.5, '*');
