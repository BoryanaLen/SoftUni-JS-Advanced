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