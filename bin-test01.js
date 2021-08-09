function seerToMon(numbers) {
    if (numbers < 0 || numbers2 < 0) {
        const error = 'Please Enter Valid Seer Numbers';
        return error;
    }
    const totalMon = numbers / 40;
    return totalMon;
}
const totalMon = seerToMon(120);
console.log(totalMon);


function totalSales(numb1, numb2, numb3) {
    let shirtPrice = 100 * numb1;
    let pantPrice = 200 * numb2;
    let shoePrice = 500 * numb3;
    let total = shirtPrice + pantPrice + shoePrice;
    return total;
}
const salesAmount = totalSales(5, 4, 6);
console.log(salesAmount);


/* function deliveryCost(numb) {
    let price100 = 100; let price200 = 80; let pricerest = 50;
    if (numb <= 100) {
        let total = numb * price100;
        return total;
    }
    else if (numb > 100 && numb <= 200) {
        let fst100 = 100 * price100;
        let restQuan = numb - 100;
        let restQuanPrice = restQuan * price200;
        let total = fst100 + restQuanPrice;
        return total;

    }
    else {
        let fst100 = 100 * price100;
        let after200 = 100 * price200;
        let restQuan = numb - 200;
        let restQuanPrice = restQuan * pricerest;
        let total = fst100 + after200 + restQuanPrice;
        return total;
    }
}
let totalamount = deliveryCost(102); */


/* function perfectFriend(names) {
    let namesstore = '';
    for (i = 0; i < names.length; i++) {
        namesstore = names[i];
        if (namesstore.length == 5) {
            break;
        }
    }
    return namesstore;
}

let friendname = perfectFriend(['Uday', 'Amin', 'Roy', 'Amit', 'Ujjal', 'Shahid', 'Tuhin', 'Badol']); */





