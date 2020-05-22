function populationsInTowns(array){
    let obj = {};

    for (let index = 0; index < array.length; index++) {
        const elements = array[index].split(" <-> ");
        const key = elements[0];
        const value = Number(elements[1]);

        if(obj.hasOwnProperty(key)){
            obj[key] += value;
        }
        else{
            obj[key] = value;
        }       
    }

    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`)
    }        
}

//populationsInTowns(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
//populationsInTowns(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);