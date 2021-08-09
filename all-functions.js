/* Problem 01: seerToMon Start */
// function for seerToMon start
function seerToMon(getSeer) {
    //Check invalid inputs start
    if (getSeer <= 0 || typeof getSeer != 'number') {
        const errorMessage = 'Please Enter Valid Seer Numbers';
        return errorMessage;
    }
    //Check invalid inputs end

    const totalMon = getSeer / 40;
    return totalMon;
}
// function for seerToMon end

//input from user for seerToMon function
let amountOfSeer = 80;

//seerToMon function calling and print
const convertedMonResult = seerToMon(amountOfSeer);
console.log(convertedMonResult);
/* Problem 01: seerToMon End */


/* Problem 02: totalSales Start */
// function for totalSales start
function totalSales(getShirts, getPants, getShoes) {
    //Check invalid Inputs start
    if (getShirts < 0 || typeof getShirts != 'number') {
        const errorMessage = 'Please enter valid number of Shirts';
        return errorMessage;
    }
    else if (getPants < 0 || typeof getPants != 'number') {
        const errorMessage = 'Please enter valid number of Pants';
        return errorMessage;
    }
    else if (getShoes < 0 || typeof getShoes != 'number') {
        const errorMessage = 'Please enter valid number of Shoes';
        return errorMessage;
    }
    //Check invalid inputs end

    const perShirtPrice = 100 * getShirts;
    const perPantPrice = 200 * getPants;
    const perShoePrice = 500 * getShoes;
    const overallSalesAmount = perShirtPrice + perPantPrice + perShoePrice;
    return overallSalesAmount;
}
// function for totalSales end

//inputs from user for totalSales function
let totalShirtsSold = 5;
let totalPantsSold = 4;
let totalShoesSold = 6;

// totalSales function calling and print
const totalSalesAmount = totalSales(totalShirtsSold, totalPantsSold, totalShoesSold);
console.log(totalSalesAmount);
/* Problem 02: totalSales End */


/* Problem 03: deliveryCost Start */
// function for deliveryCost start
function deliveryCost(getQuantity) {
    //Check invalid inputs start
    if (getQuantity <= 0 || typeof getQuantity != 'number') {
        const errorMessage = 'Please Enter Valid Numbers of T-Shirt';
        return errorMessage;
    }
    //Check invalid inputs end

    const priceFor1st100Quantity = 100;
    const priceFor2nd100Quantity = 80;
    const priceForRestQuantity = 50;
    if (getQuantity <= 100) {
        const totalCost = getQuantity * priceFor1st100Quantity;
        return totalCost;
    }
    else if (getQuantity > 100 && getQuantity <= 200) {
        const upTo100Price = 100 * priceFor1st100Quantity;
        const restQuantity = getQuantity - 100;
        const restQuantityPrice = restQuantity * priceFor2nd100Quantity;
        const totalCost = upTo100Price + restQuantityPrice;
        return totalCost;

    }
    else {
        const upTo100Price = 100 * priceFor1st100Quantity;
        const upTo200Price = 100 * priceFor2nd100Quantity;
        const restQuantity = getQuantity - 200;
        const restQuantityPrice = restQuantity * priceForRestQuantity;
        const totalCost = upTo100Price + upTo200Price + restQuantityPrice;
        return totalCost;
    }
}
// function for deliveryCost end

//input from user for deliveryCost function
let shirtQuantity = 140;

//deliveryCost function calling and print
const totaldeliveryCost = deliveryCost(shirtQuantity);
console.log(totaldeliveryCost);
/* Problem 03: deliveryCost End */


/* Problem 04: perfectFriend Start */
// function for perfectFriend start
function perfectFriend(getFriendsName) {
    //Check invalid inputs start
    if (typeof getFriendsName != 'object') {
        const errorMessage = 'Please Enter Friends Name Into An Array';
        return errorMessage;
    }
    //Check invalid inputs end

    let checkName = '';
    for (let elements of getFriendsName) {
        checkName = elements;
        if (checkName.length == 5) {
            break;
        }
    }
    return checkName;
}
// function for perfectFriend end

//input from user for perfectFriend function
const myFriends = ['Uday', 'Amin', 'Roy', 'Amit', 'Ujjal', 'Shahid', 'Tuhin', 'Badol'];

//perfectFriend function calling and print
const myPerfectFriendName = perfectFriend(myFriends);
console.log(myPerfectFriendName);
/* Problem 04: perfectFriend End */

