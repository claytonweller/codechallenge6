const whatFormat = require('./whatFormat.js')
const rgbStringToArray = require('./rgbStringToArray.js')
const hexToPairArray = require('./hexToPairArray.js')
const hexPairToBaseTen = require('./hexPairToBaseTen.js')

const toRgbArray = (input)=>{
    let rgbArray = []
    if(whatFormat(input) === 'hex'){
        let hexPairs = hexToPairArray(input)
        rgbArray = hexPairs.map(pair => hexPairToBaseTen(pair))
    } else if (whatFormat(input) === 'rgb'){
        rgbArray = rgbStringToArray(input)
    }
    return rgbArray
} 

const toRgbString = (input) =>{
    let rgbArray = toRgbArray(input)
    return 'rgb('+rbgArray[0]+', '+rbgArray[1]+', '+rbgArray[2]+')'
}

const toRgbObj = (input) =>{
    let rbgArray = toRgbArray(input)
    return {
        r: rbgArray[0],
        g: rbgArray[1],
        b: rbgArray[2],
        type: 'rgb'
    }
}

const toRgb = {
    array: toRgbArray,
    string: toRgbString,
    obj: toRgbObj
}

module.exports = toRgb