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