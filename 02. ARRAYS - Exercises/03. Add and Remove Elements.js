function addRemoveElements(array){

    let outputArray = [];

    for (let index = 1; index <= array.length; index++) {
        const command = array[index-1];
        
        switch(command){
            case 'add' : outputArray.push(index); break;
            case 'remove' : if(outputArray.length > 0) {outputArray.pop()}; break;
        }
    }

    if(outputArray.length > 0){
        outputArray.forEach(element => {
            console.log(element);
        });
    }
    else{
        console.log('Empty');
    }
}

//addRemoveElements(['add', 'add', 'add', 'add']);
//addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
//addRemoveElements(['remove', 'remove', 'remove']);