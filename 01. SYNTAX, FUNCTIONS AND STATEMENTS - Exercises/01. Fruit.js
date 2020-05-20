function calculate(type, grams, price){

    let fruit = type;
    let weight = grams / 1000;
    let money = grams * price / 1000;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

//calculate('orange', 2500, 1.80);
//calculate('apple', 1563, 2.35);