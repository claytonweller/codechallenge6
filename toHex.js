const hexToHex = require('./hexToHex.js')
const rgbToHex = require('./rgbToHex.js')
const itIsHex = require('./itIsHex.js')
const itIsRgb = require('./itIsRgb.js')


const toHex = (input) =>{
    if (itIsHex(input)){
        return hexToHex(input)
    } else if (itIsRgb(input)){
        return rgbToHex(input)
    }
}

module.exports = toHex