function tic_tac_toe(array){

    let matrix = [[false, false, false], [false, false, false], [false, false, false]];   
       
    let player = 'X';

    function existsFalse(){
        
        let result = false;
        
        for (let index = 0; index < matrix.length; index++) {
            const element = matrix[index];

            if(element.includes(false)){
                result = true;
                break;
            }           
        }
        return result;
    }

    for (let index = 0; index < array.length; index++) {

        let position =  array[index].split(" ");

        let x = Number(position[0]);
        let y = Number(position[1]);


        if(matrix[x][y] != false){
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        else{
            matrix[x][y] = player;
            
            let finished = false;

           // check horizontal
           for (let index = 0; index < matrix.length; index++) {
                const element = matrix[index];
                const allEqual = element => element.every( v => v === element[0]);

                if(allEqual(element) && element[0] === player){
                    finished = true;
                    break;
                }
            }

            // check vertical
            if(!finished){
                for (let col = 0; col < matrix[0].length; col++) {

                    let same = true;
            
                    for (let row = 0; row < matrix.length; row++) {
                        
                       if( matrix[row][col] != player){
                           same = false;
                           break;
                       }
                    }
            
                    if(same){
                        finished = true;
                        break;
                    } 
                }
    
            }
            // check diagonals
            if(!finished){
                if(matrix[0][0] === matrix[1][1] &&  matrix[1][1] === matrix[2][2] && matrix[2][2]=== player){
                    finished = true;
                }
                if(matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[2][0] === player){
                    finished = true;
                }
            }

            if(finished){
                console.log(`Player ${player} wins!`)
                break;
            }

            if(!existsFalse()){
                console.log('The game ended! Nobody wins :(');
                break;
            }

           switch(player){
            case 'X' : player = 'O'; break;
            case 'O' : player = 'X'; break;
            }
        }
    }

    matrix.forEach(element => {
        console.log(element.join("\t"));
    });
}

//tic_tac_toe(["0 1", "0 0", "0 2", "2 0","1 0","1 1","1 2","2 2","2 1","0 0"]);
//tic_tac_toe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
//tic_tac_toe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
