
// 1. String Length
function stringLength(str1, str2, str3){
    let sum = str1.length + str2.length + str3.length;
    let avg = Math.floor(sum / 3);

    console.log(sum);
    console.log(avg);
}

//stringLength('chocolate', 'ice cream', 'cake');
//stringLength('pasta', '5', '22.3')

// 2. Math Operations
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

// 3. Sum of Numbers N…M
function numbers(n, m){
    
    let num1 = Number(n);
    let num2 = Number(m);
    
    let sum = 0;

    for(let i = num1; i <= num2; i++){
       sum += i;
    }

    console.log(sum);
}

//numbers('1', '5' );
//numbers('-8', '20');

// 4. Largest Number
function largestNumber(num1, num2, num3){
    let max =num1;

    let numbers = [num1, num2, num3];
    
    numbers.forEach(element => {
        if(element > max){
            max = element;
        }
    });

    console.log('The largest number is %i.', max);
}

//largestNumber(-3, -5, -22.5);
//largestNumber(5, -3, 16);

//5. Circle Area
function circleArea(input){

    let type = typeof(input);

    if(type === 'number'){

        let radius = input;

        let area = Math.pow(radius, 2) * Math.PI;

        console.log(area.toFixed(2));
    }
    else{       
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

//circleArea('name');
//circleArea(5);

//6. Square of Stars
function squareOfStars(number = 5){

    let text = "* ".repeat(number);

    for(let i = 0; i < number; i++){
        console.log(text);
    }
}

//squareOfStars();
//squareOfStars(1);
//squareOfStars(3);

//7. Day of Week
function dayOfWeek(input){

    let result;

    switch(input){
        case 'Monday' : result = 1; break;
        case 'Tuesday' : result = 2; break;
        case 'Wednesday' : result = 3; break;
        case 'Thursday' : result = 4; break;
        case 'Friday' : result = 5; break;
        case 'Saturday' : result = 6; break;
        case 'Sunday' : result = 7; break;
        default : result = 'error';
    }

    console.log(result);
}

//dayOfWeek('Monday');
//dayOfWeek('Invalid');

//8. Aggregate Elements
function agregateElements(array){
    let sum = array.reduce(function(a, b) { return a + b; }, 0);
    let sumInverse = array.reduce(function(a, b) { return a + 1/b; }, 0);
    let concat = array.join('');

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

//agregateElements([1, 2, 3]);
//agregateElements([2, 4, 8, 16]);

//9. Words Uppercase
function wordsUppercase(input){

    let words = input.match(/\w+/g);

    arrayUpper = words.map(function(x){ return x.toUpperCase() })

    console.log(arrayUpper.join(", "));

}

//wordsUppercase('Hi, how are you?');
//wordsUppercase('hello');


