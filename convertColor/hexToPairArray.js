const hexToPairArray = (hexidecimal)=>{
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

module.exports = hexToPairArray