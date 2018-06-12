const itIsHex = (i) =>{
    let input = i
    if(input[0] === '#' && input.length === 4){
        return true
    } else if (input[0] === '#' && input.length === 7){
        return true
    } else if (input.length === 3 && input[0] != '#'){
        return true
    } else if (input.length === 6 && input[0] != '#'){
        return true
    } else {
        return false
    }
}

module.exports = itIsHex