function printN_thElement(array){

    let step =  Number(array[array.length - 1]);

    for (let index = 0; index < array.length - 1; index+=step) {
        const element = array[index];
        
        console.log(element);
    }
}

//printN_thElement(['5', '20', '31', '4', '20', '2']);
//printN_thElement(['dsa','asd', 'test', 'tset', '2']);
//printN_thElement(['1', '2','3', '4', '5', '6']);