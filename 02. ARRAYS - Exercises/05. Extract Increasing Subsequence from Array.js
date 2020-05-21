function extractSubsequence(array){

    let element = array[0];

    let arrayNew = [element];

    for (let index = 1; index < array.length; index++) {
        
        if(array[index] >= arrayNew[arrayNew.length-1]){
            arrayNew.push(array[index]);
        }
        
    }

    arrayNew.forEach(element => {
        console.log(element);
    });
}


//extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//extractSubsequence([1, 2, 3,4]);
//extractSubsequence([20, 3, 2, 15,6, 1]);
