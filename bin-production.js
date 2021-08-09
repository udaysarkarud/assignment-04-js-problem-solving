/* 01. seerToMon Start */
// function for seerToMon Start
function seerToMon(getSeer) {
    //Check invalid Inputs Start
    if (getSeer <= 0 || typeof getSeer != 'number') {
        const errorMessage = 'Please Enter Valid Seer'
        return errorMessage
    }
    //Check invalid Inputs End
    const totalMon = getSeer / 40;
    return totalMon;
}
// function for seerToMon End

//Input for seerToMon function
let amountOfSeer = 120;

//seerToMon function Calling and Print
const convertedMonResult = seerToMon(amountOfSeer);
console.log(convertedMonResult);
/* 01. seerToMon End */

/* 02. totalSales Start */
// function for totalSales Start
function totalSales(getShirts, getPants, getShoes) {
    //Check invalid Inputs Start
    if (getShirts < 0 || typeof getShirts != 'number') {
        const errorMessage = 'Please enter valid number of Shirts'
        return errorMessage
    }
    else if (getPants < 0 || typeof getPants != 'number') {
        const errorMessage = 'Please enter valid number of Pants'
        return errorMessage
    }
    else if (getShoes < 0 || typeof getShoes != 'number') {
        const errorMessage = 'Please enter valid number of Shoes'
        return errorMessage
    }
    //Check invalid Inputs End
    const perShirtPrice = 100 * getShirts;
    const perPantPrice = 200 * getPants;
    const perShoePrice = 500 * getShoes;
    const totalSalesAmount = perShirtPrice + perPantPrice + perShoePrice
    return totalSalesAmount;
}
// function for totalSales End

// Input for totalSales function
let totalShirtsSold = 5;
let totalPantsSold = 10;
let totalShoesSold = 4;

// totalSales function Call and Print
const totalSalesAmount = totalSales(totalShirtsSold, totalPantsSold, totalShoesSold);
console.log(totalSalesAmount);
/* 02. totalSales End */

/* 03. deliveryCost Start */
// function for deliveryCost Start
function deliveryCost(getQuantity) {
    //Check invalid Inputs Start
    if (getQuantity <= 0 || typeof getQuantity != 'number') {
        const errorMessage = 'Please enter a valid number'
        return errorMessage
    }
    //Check invalid Inputs End

    const priceFor1st100Quantity = 100;
    const priceFor2nd200Quantity = 80;
    const priceForRestQuantity = 50;
    if (getQuantity <= 100) {
        const totalCost = getQuantity * priceFor1st100Quantity;
        return totalCost;
    }
    else if (getQuantity > 100 && getQuantity <= 200) {
        const upTo100Price = 100 * priceFor1st100Quantity
        const restQuantity = getQuantity - 100
        const restQuantityPrice = restQuantity * priceFor2nd200Quantity
        const totalCost = upTo100Price + restQuantityPrice;
        return totalCost;

    }
    else if (getQuantity > 200) {
        const upTo100Price = 100 * priceFor1st100Quantity
        const upTo200Price = 100 * priceFor2nd200Quantity
        const restQuantity = getQuantity - 200
        const restQuantityPrice = restQuantity * priceForRestQuantity
        const totalCost = upTo100Price + upTo200Price + restQuantityPrice;
        return totalCost;
    }
}
// function for deliveryCost End

//Input for deliveryCost function
let shirtQuantity = 375;

//deliveryCost function Call and Print
const totaldeliveryCost = deliveryCost(shirtQuantity);
console.log(totaldeliveryCost);
/* 03. deliveryCost End */

/* 04. perfectFriend Start */
// function for perfectFriend Start
function perfectFriend(getFriendsName) {
    //Check invalid Inputs Start
    if (typeof getFriendsName != 'object') {
        const errorMessage = 'Please Enter Friends Name Into An Array'
        return errorMessage
    }
    //Check invalid Inputs End
    let checkName = ''
    for (let elements of getFriendsName) {
        checkName = elements;
        if (checkName.length == 5) {
            break;
        }
    }
    return checkName;
}
// function for perfectFriend End

//Input for perfectFriend function
const myFriends = ['Uday', 'Amin', 'Roy', 'Amit', 'Ujjal', 'Shahid', 'Tuhin', 'Badol']

//perfectFriend function Call and Print
const convertedMonResult = perfectFriend(myFriends);
console.log(convertedMonResult);
/* 04. perfectFriend End */