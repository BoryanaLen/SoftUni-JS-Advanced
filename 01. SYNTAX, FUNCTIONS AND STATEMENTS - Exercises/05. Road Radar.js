function roadRadar(array){
    
    let speed = array[0];
    let area = array[1];

    let limit;

    switch(area){
        case 'motorway' : limit = 130; break;
        case 'interstate' : limit = 90; break;
        case 'city' : limit = 50; break;
        case 'residential' : limit = 20; break;
    }

    let difference = speed - limit;

    if(difference > 0){
        switch(true){
            case (difference <= 20) : console.log('speeding'); break;
            case (difference <= 40) : console.log('excessive speeding'); break;
            default : console.log('reckless driving');
        }
    }
}

//roadRadar([40, 'city']);
//roadRadar([21, 'residential']);
//roadRadar([120, 'interstate']);
//roadRadar([200, 'motorway']);