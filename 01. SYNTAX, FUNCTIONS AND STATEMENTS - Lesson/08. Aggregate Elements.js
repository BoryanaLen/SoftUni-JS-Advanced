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