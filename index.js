function distanceFromHqInBlocks(pickup) {
    return Math.abs(42 - pickup);
}

function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(blocks * feetPerBlock);

    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
