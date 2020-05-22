function sumOfTowns(array){
    let obj = {};

    for (let index = 0; index < array.length; index+=2) {

        const key = array[index];
        const value = array[index+1];
        
        if(obj.hasOwnProperty(key)){
            obj[key] += Number(value);
        }
        else{
            obj[key] = Number(value);
        }
    }

    console.log(JSON.stringify(obj));
}

sumOfTowns(['Sofia','20','Varna','3','Sofia','5','Varna','4']);