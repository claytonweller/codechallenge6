/* 
    hexToRgb.js converts a hexidecimal string (with or without the '#') or array (foramtted [#, #, #]) into RGB.
    This module exports hexToRgb, which has 3 methods:
        '.array' creates an array with the RGB values
        '.string' creates a string in the correct format for CSS
        '.obj' creates object with properites 'r', 'g', 'b'
*/

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

const splitHexIntoPairArray = (hexidecimal)=>{
    let r = 0
    let g = 0
    let b = 0
    let hex = hexidecimal.split('')
    if (hex[0]==='#'){
        hex.splice(0,1)
    }
    if ( hex.length === 6){
        r = hex[0].concat(hex[1])
        g = hex[2].concat(hex[3])
        b = hex[4].concat(hex[5])
    } else if (hex.length === 3){
        r = hex[0].concat(hex[0])
        g = hex[1].concat(hex[1])
        b = hex[2].concat(hex[2])
    }
    return [r,g,b]
}

const hexToRgbArray = (hex)=>{
    let hexPairs = hex
    if(Array.isArray(hex) === false){
        hexPairs = splitHexIntoPairArray(hex)
    }
    let rgb = hexPairs.map(pair => hexPairToBaseTen(pair))
    return rgb
} 

const hexToRgbString = (hex) =>{
    let rbgArray = hexToRgbArray(hex)
    return 'rgb('+rbgArray[0]+', '+rbgArray[1]+', '+rbgArray[2]+')'
}

const hexToRgbObj = (hex) =>{
    let rbgArray = hexToRgbArray(hex)
    return {
        r: rbgArray[0],
        g: rbgArray[1],
        b: rbgArray[2]
    }
}

const hexToRgb = {
    array: hexToRgbArray,
    string: hexToRgbString,
    obj: hexToRgbObj
}

console.log(hexToRgb.obj)

module.exports = hexToRgb