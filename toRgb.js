const hexToRgb = require('./hexToRgb.js')
const rgbToRgb = require('./rgbToRgb.js')
const itIsHex = require('./itIsHex.js')
const itIsRgb = require('./itIsRgb.js')

/*
    This function tests to see if a function

*/

let toRgb = {}

const whatIsTheFormat = (input) =>{
    if (itIsHex(input) && typeof input === 'string'){
        toRgb = hexToRgb
    } else if (itIsRgb(input) && typeof input === 'string'){
        toRgb = rgbToRgb
    } else {
        console.log( 'The given input is not a string. If you would like to convert array inputs into particular formats use "hexToRgb.js" or "rgbToRgb.js"')
    }
}


module.exports = toRgb