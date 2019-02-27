function timeToWalk(steps,stepLength,speed) {
    let distance = (steps*stepLength)/1000;
    let extraRest = Math.floor((distance*1000)/500);

    let timeInSeconds = Math.ceil((distance/speed)*60*60)+(extraRest*60);

    let hours = Math.floor(timeInSeconds/3600);
    let mins = Math.floor(timeInSeconds/60);
    timeInSeconds -= mins*60;
    let result = ('0' + hours).slice(-2) + ':' + ('0' + mins).slice(-2) + ':' + ('0' + timeInSeconds).slice(-2);
    console.log(result);
}

timeToWalk(4000, 0.60, 5);