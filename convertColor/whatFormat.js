const itIsHex = require('./itIsHex.js')
const itIsRgb = require('./itIsRgb.js')

const whatFormat = (input) =>{
    if (itIsHex(input) && typeof input === 'string'){
        return 'hex'
    } else if (itIsRgb(input) && typeof input === 'string'){
        return 'rgb'
    } else {
        console.log( 'The given input is not a string. If you would like to convert array inputs into particular formats use "hexToRgb.js" or "rgbToRgb.js"')
    }
}

module.exports = whatFormat