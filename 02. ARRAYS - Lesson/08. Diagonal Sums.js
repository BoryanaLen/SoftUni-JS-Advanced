function diagonalSums(matrix){

    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index];

        sumMainDiagonal += element[index];
        sumSecondaryDiagonal += element[element.length - 1 - index];      
    }
    console.log(`${sumMainDiagonal} ${sumSecondaryDiagonal}`);

}

//diagonalSums([[20, 40], [10, 60]]);
//diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);