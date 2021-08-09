/* 03. deliveryCost Start */
// function for deliveryCost Start
function deliveryCost(getQuantity) {
    //Check invalid Inputs Start
    if (getQuantity <= 0 || typeof getQuantity != 'number') {
        const errorMessage = 'Please Enter Valid Numbers of T-Shirt'
        return errorMessage
    }
    //Check invalid Inputs End

    const priceFor1st100Quantity = 100;
    const priceFor2nd100Quantity = 80;
    const priceForRestQuantity = 50;
    if (getQuantity <= 100) {
        const totalCost = getQuantity * priceFor1st100Quantity;
        return totalCost;
    }
    else if (getQuantity > 100 && getQuantity <= 200) {
        const upTo100Price = 100 * priceFor1st100Quantity
        const restQuantity = getQuantity - 100
        const restQuantityPrice = restQuantity * priceFor2nd100Quantity
        const totalCost = upTo100Price + restQuantityPrice;
        return totalCost;

    }
    else {
        const upTo100Price = 100 * priceFor1st100Quantity
        const upTo200Price = 100 * priceFor2nd100Quantity
        const restQuantity = getQuantity - 200
        const restQuantityPrice = restQuantity * priceForRestQuantity
        const totalCost = upTo100Price + upTo200Price + restQuantityPrice;
        return totalCost;
    }
}
// function for deliveryCost End

//Input from user for deliveryCost function
let shirtQuantity = 99;

//deliveryCost function Calling and Print
const totaldeliveryCost = deliveryCost(shirtQuantity);
console.log(totaldeliveryCost);
/* 03. deliveryCost End */