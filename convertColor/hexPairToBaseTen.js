const hexDigitToBaseTen = (dig)=>{
    let num = parseInt(dig, 10)
    if (isNaN(dig)){
        let sDig = dig.toLowerCase()
        switch (sDig){
            case 'a':
                return 10
            case 'b':
                return 11
            case 'c':
                return 12
            case 'd':
                return 13
            case 'e':
                return 14
            case 'f':
                return 15
        }
    } else {
        return num
    }
}

const hexPairToBaseTen = (pair)=>{
    let leftDig = pair[0]
    let rightDig = pair[1]
    let tens = 16 * hexDigitToBaseTen(leftDig)
    let ones = hexDigitToBaseTen(rightDig)
    let sum = tens + ones
    return sum
}

module.exports = hexPairToBaseTen