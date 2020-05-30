function storeCatalogue(array){

    let products = [];
    array.forEach(element => {
        let details = element.split(" : ");
        let name = details[0];
        let price = Number(details[1]);

        let obj = {
            name: name,
            price: price,
        }

        products.push(obj);
    });

    products.sort(function (a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    let letter = '';

    products.forEach(element => {
        if(element.name[0] !== letter){
            letter = element.name[0];
            console.log(letter);
        }

        console.log(`  ${element.name}: ${element.price}`)
    });
}

//storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
//storeCatalogue(['Banana : 2','Rubic\'s Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001','Barrel : 10']);