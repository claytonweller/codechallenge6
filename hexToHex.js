/* 
    hexToHex.js converts a hexidecimal string (with or without the '#') or array (foramtted [#, #, #]) into other hexidecimal formats.
    This module exports hexToHex, which has 3 methods:
        '.array' creates an array with the RGB values
        '.string' creates a string in the correct format for CSS
        '.obj' creates object with properites 'r', 'g', 'b'
*/

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

const hexToHexArray = (hex)=>{
    let hexPairs = hex
    if(Array.isArray(hex) === false){
        hexPairs = splitHexIntoPairArray(hex)
    }
    return hexPairs
} 

const hexToHexString = (hex) =>{
    let hexArray = hexToHexArray(hex)
    return '#'+hexArray[0]+hexArray[1]+hexArray[2]
}

const hexToHexObj = (hex) =>{
    let hexArray = hexToHexArray(hex)
    return {
        r: hexArray[0],
        g: hexArray[1],
        b: hexArray[2]
    }
}

const hexToHex = {
    array: hexToHexArray,
    string: hexToHexString,
    obj: hexToHexObj
}

module.exports = hexToHex