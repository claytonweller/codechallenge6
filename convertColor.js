const toHex = require('./toHex.js')
const toRgb = require('./toRgb.js')

const convertColor = {
    toRgb : toRgb,
    toHex : toHex
}

module.exports = convertColor

console.log(convertColor.toHex.string('rGb(123,12,222)'))