function error(number) {
    if (number <= 0 || typeof number == 'string' || typeof number == 'boolean') {
        const errorMessage = 'Please enter a valid number'
        return errorMessage
    }
    const ab = number + 2
    return ab
}

const mynumber = 0
const result = error(mynumber)
console.log(result)









/*

function error(number) {
    if (typeof (number) == String) {
        const error = 'There have some problem'
        return error
    }
    const ab = number + 2
    return ab
}

const mynumber = 1231
const result = error(mynumber)
console.log(result)

typeof variable == "boolean"

 */
