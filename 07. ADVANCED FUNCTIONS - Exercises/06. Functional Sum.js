function add(x){
    let sum = x;

    function resultFn(y){
        sum += y;
        return resultFn;
    }

    resultFn.toString = function(){
        return sum;
    };

    return resultFn;
}


//console.log(add(1));
console.log(add(1)(6)(-3));
//console.log(add(1)(2)(3)(4));