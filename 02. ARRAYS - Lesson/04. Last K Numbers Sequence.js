function lastNumbers(n, k){

    let array = [1];
   
    for (let index = 1; index < n; index++) {
        
        array.push(array.slice(-k).reduce((acc, val) => acc + val, 0));
    }

    console.log(array.join(" "));
}

//lastNumbers(6, 3);
//lastNumbers(8, 2);