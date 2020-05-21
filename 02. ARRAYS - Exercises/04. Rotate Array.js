function rotateArray(input){

    let rotations = Number(input[input.length - 1]);

    let array = input.slice(0, input.length - 1)

    for (let index = 0; index < rotations % array.length; index++) {
       let element = array.pop();
       array.unshift(element);        
    }

    console.log(array.join(" "));

}

//rotateArray(['1', '2', '3', '4', '2']);
//rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);