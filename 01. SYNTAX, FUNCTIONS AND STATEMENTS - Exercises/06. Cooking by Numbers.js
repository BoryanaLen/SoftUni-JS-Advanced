function cookingByNumbers(input){

    let number = Number(input[0])

    for (let index = 1; index <= 5; index++) {
        const operation = input[index];

        switch(operation){
            case 'chop' : number /= 2; break;
            case 'dice' : number = Math.sqrt(number); break;
            case 'spice' : number += 1; break;
            case 'bake' : number *= 3; break;
            case 'fillet' : number *= 0.8; break;
        }

        console.log(number);
        
    }
}

//cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
//cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])