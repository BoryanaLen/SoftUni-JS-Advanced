function oddNumbers(array){

    let oddarray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if(index % 2 != 0){

            oddarray.push(element * 2);

        }
        
    }

    console.log(oddarray.reverse().join(" "));
}

//oddNumbers([10, 15, 20, 25]);
//oddNumbers([3, 0, 10, 4, 7, 3]);