function heroicInventiry(array){
    let heroes = [];
    array.forEach(element => {
        let details = element.split(" / ");
        let name = details[0];
        let level = Number(details[1]);
        let items =[];
        if(details.length === 3){
            items = details[2].split(", ");
        }

        let obj = {
            name: name,
            level: level,
            items: items,
        };

        heroes.push(obj);
    });

    console.log(JSON.stringify(heroes));
}

//heroicInventiry(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventiry(['Jake / 1000 / Gauss, HolidayGrenade']);