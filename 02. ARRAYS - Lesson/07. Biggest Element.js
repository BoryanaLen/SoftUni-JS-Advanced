function biggestElement(matrix){

    let biggestElement = matrix[0][0];

    matrix.forEach(element => {

        element.forEach(num => {
            
            if( num > biggestElement){
                biggestElement = num;
            }
        });
        
    });

   console.log(biggestElement);
}

//biggestElement([[20, 50, 10], [8, 33, 145]]);
//biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])
