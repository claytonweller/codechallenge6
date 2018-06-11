/* 
    rgbToHex.js converts a rgb string (formtatted 'rgb(#, #, #)') or array (formatted [#, #, #]) into Hexidecimal.
    This module exports rgbToHex, which has 3 methods:
        '.array' creates an array with hex values
        '.string' creates a string in the correct format for CSS
        '.obj' creates object with properites 'r', 'g', 'b'
*/

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

const rgbStringToArray = (string)=>{
    let noRGB = string.slice(4)
    let noParentheses = noRGB.slice(0, noRGB.length-1)
    let dirtyArray = noParentheses.split(',')
    let cleanArray = dirtyArray.map(val => val.trim())
    let rgbArray = cleanArray.map(val => val.toString()) 
    return rgbArray
}

const rgbToHexArray = (rgb)=>{
    let rgbArray = rgb
    if (Array.isArray(rgb) === false){
        rgbArray = rgbStringToArray(rgb)
    }
    let hexArray = rgbArray.map(val => baseTenToHexPair(val))
    return hexArray
} 

const rgbToHexString = (rgb) =>{
    let hexArray = rgbToHexArray(rgb)
    return '#'+hexArray[0]+hexArray[1]+hexArray[2]
}

const rgbToHexObj = (rgb) =>{
    let hexArray = rgbToHexArray(rgb)
    return {
        r: hexArray[0],
        g: hexArray[1],
        b: hexArray[2]
    }
}

const rgbToHex = {
    array: rgbToHexArray,
    string: rgbToHexString,
    obj: rgbToHexObj
}

module.exports = rgbToHex