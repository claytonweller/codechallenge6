const whatFormat = require('./whatFormat.js')
const rgbStringToArray = require('./rgbStringToArray.js')
const hexToPairArray = require('./hexToPairArray.js')
const baseTenToHexPair = require('./baseTenToHexPair.js')

const hexToHexArray = (hex)=>{
    let hexPairs = hex
    if(Array.isArray(hex) === false){
        hexPairs = hexToPairArray(hex)
    }
    return hexPairs
} 

const toHexArray = (input)=>{
    let hexArray = []
    if (whatFormat(input) === 'rgb'){
        rgbArray = rgbStringToArray(input)
        hexArray = rgbArray.map(val => baseTenToHexPair(val))
    } else if ( whatFormat(input) === 'hex'){
        hexArray = hexToPairArray(input)
    }
    return hexArray
} 

const toHexString = (input) =>{
    let hexArray = toHexArray(input)
    return '#'+hexArray[0]+hexArray[1]+hexArray[2]
}

const toHexObj = (input) =>{
    let hexArray = toHexArray(input)
    return {
        r: hexArray[0],
        g: hexArray[1],
        b: hexArray[2]
    }
}

const toHex = {
    array: toHexArray,
    string: toHexString,
    obj: toHexObj
}

module.exports = toHex