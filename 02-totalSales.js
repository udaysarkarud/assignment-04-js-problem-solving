/* 02. totalSales Start */
// function for totalSales Start
function totalSales(getShirts, getPants, getShoes) {
    //Check invalid Inputs Start
    if (getShirts <= 0 || typeof getShirts != 'number') {
        const errorMessage = 'Please enter valid number of Shirts'
        return errorMessage
    }
    else if (getPants <= 0 || typeof getPants != 'number') {
        const errorMessage = 'Please enter valid number of Pants'
        return errorMessage
    }
    else if (getShoes <= 0 || typeof getShoes != 'number') {
        const errorMessage = 'Please enter valid number of Shoes'
        return errorMessage
    }
    //Check invalid Inputs End

    const perShirtPrice = 100 * getShirts;
    const perPantPrice = 200 * getPants;
    const perShoePrice = 500 * getShoes;
    const overallSalesAmount = perShirtPrice + perPantPrice + perShoePrice
    return overallSalesAmount;
}
// function for totalSales End

//Inputs from user for totalSales function
let totalShirtsSold = 2;
let totalPantsSold = 4;
let totalShoesSold = 4;

// totalSales function Calling and Print
const totalSalesAmount = totalSales(totalShirtsSold, totalPantsSold, totalShoesSold);
console.log(totalSalesAmount);
/* 02. totalSales End */