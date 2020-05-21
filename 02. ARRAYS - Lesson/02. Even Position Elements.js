function evenPositionElements(input){

    let array = [];

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        
        if(index % 2 == 0){
            array.push(element);
        }
    }

    console.log(array.join(" "));
}

//evenPositionElements(['20', '30', '40']);
//evenPositionElements(['5', '10']);