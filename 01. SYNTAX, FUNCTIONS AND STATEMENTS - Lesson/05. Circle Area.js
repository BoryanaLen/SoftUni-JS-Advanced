function circleArea(input){

    let type = typeof(input);

    if(type === 'number'){

        let radius = input;

        let area = Math.pow(radius, 2) * Math.PI;

        console.log(area.toFixed(2));
    }
    else{       
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

//circleArea('name');
//circleArea(5);