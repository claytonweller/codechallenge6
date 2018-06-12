const itIsRgb = (i)=>{
    let input = i
    input = input.toLowerCase()

    if (input[0] === 'r' && input[1] === 'g' && input[2] === 'b'){
        return true
    } else {
        return false
    }
}


module.exports = itIsRgb