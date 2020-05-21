function negativePositiveNumber(input){

    let array = [];

    input.forEach(element => {
        if(element < 0){
            array.unshift(element);
        }
        else{
            array.push(element);
        }
        
    });

    array.forEach(element => {
        console.log(element);
    });
}

//negativePositiveNumber([7, -2, 8, 9]);
//negativePositiveNumber([3, -2, 0, -1]);