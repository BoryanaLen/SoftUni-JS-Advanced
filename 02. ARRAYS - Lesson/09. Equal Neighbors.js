function equalNeighbors(matrix){

    let equals = 0;

    for (let indexRow = 0; indexRow < matrix.length - 1; indexRow++) {
        
        const array = matrix[indexRow];

        for (let indexCol = 0; indexCol < array.length; indexCol++) {
           
            const element = array[indexCol];

            if(element === matrix[indexRow+1][indexCol]){
                equals++;
            }
        }
        
    }

    for (let indexRow = 0; indexRow < matrix.length; indexRow++) {
        
        const array = matrix[indexRow];

        for (let indexCol = 0; indexCol < array.length - 1; indexCol++) {
           
            const element = array[indexCol];

            if(element === matrix[indexRow][indexCol+1]){
                equals++;
            }
        }
        
    }

    console.log(equals);
}

//equalNeighbors([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']]);
//equalNeighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]);
//equalNeighbors([['2', '2', '5', '7', '4'], ['4', '0', '5', '3', '4'], ['2', '5', '5', '4', '2']])