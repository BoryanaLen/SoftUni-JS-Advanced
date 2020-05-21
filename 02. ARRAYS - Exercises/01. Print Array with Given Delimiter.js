function printWithDelimeter(array){

    let delimiter = array[array.length - 1];

    console.log(array.slice(0, array.length - 1).join(delimiter));
}

//printWithDelimeter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
//printWithDelimeter(['How about no?', 'I','will', 'not', 'do', 'it!', '_']);