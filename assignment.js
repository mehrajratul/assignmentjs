//https://github.com/mehrajratul/assignmentjs




// Kilometer To Meter
                                                            // 1 km = 1000m
function kilometerToMeter(kiloMeter) {
    var meter = 1000 * kiloMeter;               
    return meter;
}

// Budget Calculator
                                                            // watch = 50
                                                            // phone= 100
                                                            // laptop = 500
function budgetCalculator(watch, phone, laptop) {
    var watchCount = watch * 50;
    var phoneCount = phone * 100;
    var laptopCount = laptop * 500;
    var totalSum = watchCount + phoneCount + laptopCount;
    return totalSum;   
}

// Hotel Cost


function hotelCost(totalDays) {
    var cost = 0;
    if (totalDays <= 10){
        cost = totalDays * 100;
    }
    else if (totalDays <= 20){
        var previousCost = 10 * 100;
        var remaining = totalDays - 10;
        var secondHalfCost = remaining * 80;
        cost = previousCost + secondHalfCost;
    }
    else {
        var previousCost = 10 * 100;
        var secondHalfCost = 10 * 80;
        var remaining = totalDays - 20;
        var remainingDaysCost = remaining * 50;
        cost = previousCost + secondHalfCost + remainingDaysCost;
    }
    return cost;
}


//Mega Friend



function megaFriend(names) {
    var megaName = names[0];
    for(var i = 0; i < names.length; i++){
        var friend = names[i];
        if (friend.length > megaName.length) {
            megaName = friend;
        }
    }
    return megaName;
}