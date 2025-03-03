// Code your solution in this file!

function distanceFromHqInBlocks (pickupLocation){
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

distanceFromHqInBlocks(pickupLocation(30));

function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = 264;
    return blocks * feet;
}

distanceFromHqInFeet(pickupLocation(30));

function distanceTravelledInFeet(start, destination){
    const blocksTravelled = Math.abs(destination - start);
    const feet = 264;
    return blocksTravelled * feet;
}

distanceTravelledInFeet((35, 25));

function calculatesFarePrice(start, destination){
    const blocksTravelled = Math.abs(destination - start);
    const feet = 264;
    let distanceCovered =  blocksTravelled * feet;

    if (distanceCovered <= 400){
        return 0;
    }
    else if (distanceCovered > 400 && distanceCovered < 2000){
        return 0.02 * (distanceCovered - 400);
    }
    else if(distanceCovered > 2000  && distanceCovered <=2500){
        return 25;
    }

    else{
        return "cannot travel that far";
    }

}