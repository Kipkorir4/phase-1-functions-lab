function distanceFromHqInBlocks(b) {
    if (b > 42) {
        let blockDistance=b-42
    return blockDistance;
    }
    else{
        let blockDistance=42-b
    return blockDistance;
    }
}

function distanceFromHqInFeet(b) {
    if (b > 42) {
        let blockDistance=(b-42)*264
    return blockDistance;
    }
    else{
        let blockDistance=(42-b)*264
    return blockDistance;
    }
}

function distanceTravelledInFeet(start,destination) {
    if (start<destination) {
        let blockDistance=(destination-start)*264
        return blockDistance;
    }
    else{
        let blockDistance=(start-destination)*264
        return blockDistance;
    }
}

function calculatesFarePrice(start,destination) {
    const distance = Math.abs((destination-start) * 264) 
    if(distance <= 400) {
        return 0;
    }
    else if(distance <= 2000) {
        const t = distance - 400
        return 0.02 * t;
    }

    else if(distance <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far'
    } 
            
}
