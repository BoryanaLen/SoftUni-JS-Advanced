function magicMatrices(matrix){
    let result = true;
    let sum = matrix[0].reduce((a, b) => a + b);

    //sum rows
    for (let row = 0; row < matrix.length; row++) {
        const array = matrix[row];

        let rowSum = array.reduce((a, b) => a + b, 0);

        if(rowSum != sum){

            result = false;
            break;
        }
    }

    //sum columns
    for (let col = 0; col < matrix[0].length; col++) {

        let colSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            
            colSum += matrix[row][col];
        }

        if(colSum != sum){

            result = false;
            break;
        } 
    }

    console.log(result);
}

//magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);
//magicMatrices([[11, 32, 45],[21, 0, 1],[21, 1, 1]]);
//magicMatrices([[1, 0, 0],[0, 0, 1],[0, 1, 0]]);

