const toHex = require('./toHex.js')
const toRgb = require('./toRgb.js')

/* 
    convertColor.js converts a hexidecimal string (with or without the '#' with 3 or 6 digits) or an rgb string (foramtted 'rgb(# ,#, #)).
    this module has two methods each with 3 methods:
        '.array' creates an array with the hex/rgb values
        '.string' creates a string in the correct format for CSS
        '.obj' creates object with properites 'r', 'g', 'b'

    An Example of how this works in action:
        convertColor.toHex.string('rgb(123,12,222)') ...would return => '#7b0cde'
        convertColor.toRgb.obj('#ff89d3') ... would return => { r: 255, g: 137, b: 211, type: 'rgb'}
    
    It will also automatically detect if the input is hex or rgb, and can also be used to convert a string into an array or object of the same base:
        convertColor.toHex.array('1fd') ... would return => [11, ff, dd]

*/

const convertColor = {
    toRgb : toRgb,
    toHex : toHex
}

module.exports = convertColor