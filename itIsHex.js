const itIsHex = (input) =>{
    if(input.includes('#') && input.length === 4){
        return true
    } else if (input.includes('#') && input.length === 7){
        return true
    } else if (input.length === 3 && input.includes('#') === false){
        return true
    } else if (input.length === 6 && input.includes('#') === false){
        return true
    } else {
        return false
    }
}

module.exports = itIsHex