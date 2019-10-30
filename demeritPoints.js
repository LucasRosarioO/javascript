
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed < speedLimit + kmPerPoint) return 'Ok'
    if (speed > speedLimit){
        const points = Math.floor(((speed - speedLimit)/ kmPerPoint))
        if (points >= 12) return 'Licens supended'
        else return points
        
    }

}

console.log(checkSpeed(prompt('Numero')));