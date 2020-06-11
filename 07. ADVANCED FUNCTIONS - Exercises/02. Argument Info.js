function argumentInfo(input){

    let countsArray = [];

    for (const arg of arguments) {

        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if(type === "object"){

            if (countsArray.some(x => x.type === "object")) {
                countsArray.find(x => x.type === "object").count ++;
            }
            else{
                countsArray.push({type: "object", count: 1});
            }

            Object.values(arg).forEach(element => {
                if (countsArray.some(x => x.type === typeof element)) {
                    countsArray.find(x => x.type === typeof element).count ++;
                }
                else{
                    countsArray.push({type: typeof element, count: 1});
                }
            });
        }
        else{
            if (countsArray.some(x => x.type === type)) {
                countsArray.find(x => x.type === type).count ++;
            }
            else{
                countsArray.push({type: type, count: 1});
            }
        }
    }
      
    countsArray.sort((a, b) => b.count - a.count).forEach(element => {
        console.log(`${element.type} = ${element.count}`);
    });
}

//argumentInfo('cat', 42, function () { console.log('Hello world!'); });
//argumentInfo({ name: 'bob'}, 3.333, 9.999);
argumentInfo(42, 'cat', [], undefined)