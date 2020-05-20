//01. Fruit
function calculate(type, grams, price){

    let fruit = type;
    let weight = grams / 1000;
    let money = grams * price / 1000;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

//calculate('orange', 2500, 1.80);
//calculate('apple', 1563, 2.35);

//02. Greatest Common Divisor – GCD
function GreatestCommonDivisor(x, y){

    while(y) {
        let t = y;
        y = x % y;
        x = t;
      }
     
      console.log(x);
}	

//GreatestCommonDivisor(15, 5);
//GreatestCommonDivisor(2154, 458);

//03. Same Numbers
function sameNumbers(num){
    let digits = num.toString().split('').map(Number);

    let sum = digits.reduce(function(a, b) { return a + b; }, 0);

    let result = digits.reduce(function(a, b) 
    {return (a === b)?a:(!b);}) === digits[0]; 

    console.log(result);
    console.log(sum);
}

//sameNumbers(2222222);
//sameNumbers(1234)

//04. Time to Walk
function timeToWalk(stes, length, speed){

    let distanceInMeters = stes * length ;
    let addMinutes = Math.floor(distanceInMeters / 500);
    let totalSeconds = distanceInMeters / 1000 / speed * 3600 + addMinutes * 60;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    console.log(`${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${("0" + Math.ceil(seconds)).slice(-2)}`);
}

//timeToWalk(8000, 0.60, 5);
//timeToWalk(2564, 0.70, 5.5);

//05. Road Radar
function roadRadar(array){
    
    let speed = array[0];
    let area = array[1];

    let limit;

    switch(area){
        case 'motorway' : limit = 130; break;
        case 'interstate' : limit = 90; break;
        case 'city' : limit = 50; break;
        case 'residential' : limit = 20; break;
    }

    let difference = speed - limit;

    if(difference > 0){
        switch(true){
            case (difference <= 20) : console.log('speeding'); break;
            case (difference <= 40) : console.log('excessive speeding'); break;
            default : console.log('reckless driving');
        }
    }
}

//roadRadar([40, 'city']);
//roadRadar([21, 'residential']);
//roadRadar([120, 'interstate']);
//roadRadar([200, 'motorway']);

//06. Cooking by Numbers
function cookingByNumbers(input){

    let number = Number(input[0])

    for (let index = 1; index <= 5; index++) {
        const operation = input[index];

        switch(operation){
            case 'chop' : number /= 2; break;
            case 'dice' : number = Math.sqrt(number); break;
            case 'spice' : number += 1; break;
            case 'bake' : number *= 3; break;
            case 'fillet' : number *= 0.8; break;
        }

        console.log(number);
        
    }
}

//cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
//cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])

//07. Validity Checker
function validityChecker(input){

    let x1 = input[0]
    let y1 = input[1]
    let x2 = input[2]
    let y2 = input[3]

    let dist1 = Math.hypot(0-x1, 0-y1);
    let dist2 = Math.hypot(x2-0, y2-0);
    let dist3 = Math.hypot(x2-x1, y2-y1);

    if(Number.isInteger(dist1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(Number.isInteger(dist2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if(Number.isInteger(dist3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

}

//validityChecker([3, 0, 0, 4]);
//validityChecker([2, 1, 1, 1]);

//08. * Calorie Object
function calorieObject(input){

    array = [];

    for (let index = 0; index < input.length; index+=2) {
        const product = input[index];
        const calories = input[index+1];

        let text = `${product}: ${calories}`;
        
        array.push(text);
    }

    console.log(`{ ${array.join(", ")} }`);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);