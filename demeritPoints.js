
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed < speedLimit + kmPerPoint) return 'Ok'
    if (speed > speedLimit){
        const point = Math.floor(((speed - speedLimit)/ kmPerPoint))
        if (point >= 12) return 'Licens supended'
        else return point
        
    }

}

console.log(checkSpeed(prompt('Numero')));