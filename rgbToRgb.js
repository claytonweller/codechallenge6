/* 
    rgbToRgb.js converts a rgb string (formtatted 'rgb(#, #, #)') or array (formatted [#, #, #]) into other RGB formats.
    This module exports rgbToRgb, which has 3 methods:
        '.array' creates an array with rgb values
        '.string' creates a string in the correct format for CSS
        '.obj' creates object with properites 'r', 'g', 'b'
*/


const rgbStringToArray = (string)=>{
    let noRGB = string.slice(4)
    let noParentheses = noRGB.slice(0, noRGB.length-1)
    let dirtyArray = noParentheses.split(',')
    let cleanArray = dirtyArray.map(val => val.trim())
    let rgbArray = cleanArray.map(val => val.toString()) 
    return rgbArray
}

const rgbToRgbArray = (rgb)=>{
    let rgbArray = rgb
    if (Array.isArray(rgb) === false){
        rgbArray = rgbStringToArray(rgb)
    }
    return rgbArray
} 

const rgbToRgbString = (rgb) =>{
    let rgbArray = rgbToRgbArray(rgb)
    return 'rgb('+rbgArray[0]+', '+rbgArray[1]+', '+rbgArray[2]+')'
}

const rgbToRbgObj = (rgb) =>{
    let rbgArray = rgbToRbgArray(rgb)
    return {
        r: rbgArray[0],
        g: rbgArray[1],
        b: rbgArray[2]
    }
}

const rgbToRbg = {
    array: rgbToRgbArray,
    string: rgbToRgbString,
    obj: rgbToRbgObj
}

module.exports = rgbToRbg