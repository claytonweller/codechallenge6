const toHex = require('./toHex.js')
const hexToRgb = require('./toRgb.js')

const convertColor = {
    toRgb : toRgb,
    toHex : toHex
}

module.exports = convertColor

console.log(convertColor.toHex.obj('#fdca18'))