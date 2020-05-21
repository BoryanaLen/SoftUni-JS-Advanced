function digitalAttack(array){ 

    let matrixNew = array.map(function(element) {
        return element.split(" ").map(x => +x);
    });
    
    let colMainDiagonalOne = 0;
    let colMainDiagonalTwo = 0;

    for (let a = 0; a < array.length; a++) {
        colMainDiagonalOne += Number(matrixNew[a][a]);
        colMainDiagonalTwo += Number(matrixNew[a][array.length - 1 - a]);
    }

    if(colMainDiagonalOne === colMainDiagonalTwo){
        for (let row = 0; row < matrixNew.length; row++) {
            for (let col = 0; col < matrixNew[0].length; col++) {
                if(col !== row && col !== array.length - 1 - row){
                    matrixNew[row][col] = colMainDiagonalOne;
                }
            }           
        }
        matrixNew.forEach(element => {
            console.log(element.join(" "));
        });
    }
    else{
       for (let index = 0; index < array.length; index++) {
            console.log(array[index]);
       }
    }
}

//digitalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
//digitalAttack(['1 1 1', '1 1 1', '1 1 0'])