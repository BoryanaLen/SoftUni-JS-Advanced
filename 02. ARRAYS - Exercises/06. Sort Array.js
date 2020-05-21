function sortArray(array){
    array = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    array.forEach(element => {
        console.log(element);
    });
}

//sortArray(['alpha', 'beta', 'gamma']);
//sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
//sortArray(['test', 'Deny', 'omen', 'Default']);