function cappyJuice(array){

    let fruits = [];
    let bottlesArray = [];

    array.forEach(element => {
        let details = element.split(" => ");
        let type = details[0];
        let quantity = Number(details[1]);

        if(fruits.some(e => e.type === type)){
            let obj = fruits.find(e => e.type === type);
            obj.quantity += quantity;
        }
        else{
            let obj = {
                type: type,
                quantity: quantity,
            };
            fruits.push(obj);
        }

        let obj = fruits.find(e => e.type === type);

        if(obj.quantity >= 1000){
            let bottles = Math.floor(obj.quantity/1000);
            obj.quantity -= bottles * 1000;

            if(bottlesArray.some(b => b.type === type)){
                let obj = bottlesArray.find(b => b.type === type);
                obj.quantity += bottles;
            }
            else{
                let obj = {
                    type: type,
                    quantity: bottles,
                };
                bottlesArray.push(obj);
            }
        }
    });

    bottlesArray.forEach(element => {
        console.log(`${element.type} => ${element.quantity}`);
    });
}

//cappyJuice(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);