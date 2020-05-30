function autoEngineeringCompany(array){
    let cars = [];
    array.forEach(element => {
        let details = element.split(" | ");
        let brand = details[0];
        let model = details[1];
        let quantity = Number(details[2]);

        if(cars.some(c => c.brand === brand)){
            let car = cars.find(c => c.brand === brand);

            if(car.models.some(m => m.name === model)){
                let obj = car.models.find(m => m.name === model);
                obj.quantity += quantity;
            }
            else{
                let objModel = {
                    name: model,
                    quantity: quantity,
                };
                car.models.push(objModel);
            }
        }
        else{
            let objModel = {
                name: model,
                quantity: quantity,
            };

            let obj = {
                brand: brand,
                models:[objModel],
            }

            cars.push(obj);
        }
    });

   cars.forEach(element => {
       console.log(element.brand);

       element.models.forEach(elem => {
           console.log(`###${elem.name} -> ${elem.quantity}`);
       });
   });
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);
