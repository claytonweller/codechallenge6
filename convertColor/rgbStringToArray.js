const rgbStringToArray = (string)=>{
    let lowercase = string.toLowerCase()
    let noRGB = lowercase.slice(4)
    let noParentheses = noRGB.slice(0, noRGB.length-1)
    let dirtyArray = noParentheses.split(',')
    let cleanArray = dirtyArray.map(val => val.trim())
    let rgbArray = cleanArray.map(val => val.toString()) 
    return rgbArray
}

module.exports = rgbStringToArray