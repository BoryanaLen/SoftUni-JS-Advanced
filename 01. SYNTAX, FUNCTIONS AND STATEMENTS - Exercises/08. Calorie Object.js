function calorieObject(input){

    array = [];

    for (let index = 0; index < input.length; index+=2) {
        const product = input[index];
        const calories = input[index+1];

        let text = `${product}: ${calories}`;
        
        array.push(text);
    }

    console.log(`{ ${array.join(", ")} }`);
}

//calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
//calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);