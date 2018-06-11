const itIsRgb = (input)=>{
    if (input.includes('rgb')){
        return true
    } else {
        return false
    }
}


module.exports = itIsRgb