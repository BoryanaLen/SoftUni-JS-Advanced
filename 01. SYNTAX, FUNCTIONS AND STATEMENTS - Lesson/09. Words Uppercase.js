function wordsUppercase(input){

    let words = input.match(/\w+/g);

    arrayUpper = words.map(function(x){ return x.toUpperCase() })

    console.log(arrayUpper.join(", "));

}

//wordsUppercase('Hi, how are you?');
//wordsUppercase('hello');