const baseTenToHexDigit = (num) =>{
    switch (num){
        case 15:
            return 'f'
        case 14:
            return 'e'
        case 13:
            return 'd'
        case 12:
            return 'c'
        case 11:
            return 'b'
        case 10:
            return 'a'
        default:
            return num.toString()
    }
}

const baseTenToHexPair = (num)=>{
    let ones = num % 16
    let sixteens = (num-ones)/16
    let hexOnes = baseTenToHexDigit(ones)
    let hexSisteens = baseTenToHexDigit(sixteens)
    let pair = hexSisteens+hexOnes
    return pair
}

module.exports = baseTenToHexPair