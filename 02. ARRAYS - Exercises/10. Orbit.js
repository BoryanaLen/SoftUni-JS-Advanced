function orbit(array){
    let width = array[0];
    let height = array[1];
    let x = array[2];
    let y = array[3];

    let matrixOrbit = [];
    for(let i=0; i<height; i++) {
        matrixOrbit.push([]);
    }

    for(let row = 0; row< height; row++) {
        for(let col=0; col<width; col++) {
            matrixOrbit[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    matrixOrbit.forEach(element => {
        console.log(element.join(" "));
    });
}

//orbit([4, 4, 0, 0]);
//orbit([5, 5, 2, 2]);
//orbit([3, 3, 2, 2]);