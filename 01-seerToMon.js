/* 01. seerToMon Start */
// function for seerToMon Start
function seerToMon(getSeer) {
    //Check invalid inputs Start
    if (getSeer <= 0 || typeof getSeer != 'number') {
        const errorMessage = 'Please Enter Valid Seer Numbers'
        return errorMessage
    }
    //Check invalid inputs End

    const totalMon = getSeer / 40;
    return totalMon;
}
// function for seerToMon End

//Input from user for seerToMon function
let amountOfSeer = 80;

//seerToMon function Calling and Print
const convertedMonResult = seerToMon(amountOfSeer);
console.log(convertedMonResult);
/* 01. seerToMon End */



