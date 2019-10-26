
function checkSpeed(speed) {
    if (speed > 130) return 'License suspended'
    if (speed <= 70) return 'Ok'
    if (speed > 70) {
        
        for (let i = 70; i = speed; i+=5) {
            let points =+1
            return points
        }
    }
}

console.log(checkSpeed(75));