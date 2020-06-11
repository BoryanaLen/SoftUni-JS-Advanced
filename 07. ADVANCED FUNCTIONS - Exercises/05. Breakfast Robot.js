function solution (input) {

    let ingredients = {
        protein: 0, 
        carbohydrate: 0, 
        fat: 0,
        flavour: 0,
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    };

    return function manager(input){
        let detailsCommand = input.split(" ");
        let command = detailsCommand[0];

        if(command === "restock"){
            let microelement = detailsCommand[1];
            let quantity = Number(detailsCommand[2]);
            ingredients[microelement] += quantity;
            return "Success";
        }

        if(command === "prepare"){
            let recipeToPrepare = detailsCommand[1];
            let quantity = Number(detailsCommand[2]);
            let recipe = recipes[recipeToPrepare];
            let canPrepare = true;
            let text = "";

            for (let index = 0; index < Object.keys(recipe).length; index++) {
                const key = Object.keys(recipe)[index];

                if(ingredients[key] < recipe[key] * quantity){
                    canPrepare = false;
                    text = `Error: not enough ${key} in stock`;
                    break;
                }            
            }

            if(canPrepare){
                for (let index = 0; index < Object.keys(recipe).length; index++) {
                    const key = Object.keys(recipe)[index];
    
                    ingredients[key] -= recipe[key] * quantity;
                }
                text = "Success";
            }

            return text;        
        }

        if(command === "report"){
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
        }
    }
} 

let manager = solution();
// console.log(solution("restock flavour 50"));  // Success
// console.log(solution("prepare lemonade 4"));  // Error: not enough carbohydrate in stock

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));


