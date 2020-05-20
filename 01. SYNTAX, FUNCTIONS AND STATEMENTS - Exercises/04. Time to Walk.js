function timeToWalk(stes, length, speed){

    let distanceInMeters = stes * length ;
    let addMinutes = Math.floor(distanceInMeters / 500);
    let totalSeconds = distanceInMeters / 1000 / speed * 3600 + addMinutes * 60;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    console.log(`${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${("0" + Math.ceil(seconds)).slice(-2)}`);
}

//timeToWalk(8000, 0.60, 5);
//timeToWalk(2564, 0.70, 5.5);
