const startArray = require("./arr.js")

const sumsFromIndex = (arr, index)=>{
    let sumArray = arr.map(i => [[i,arr[index]], i + arr[index]])
    sumArray.splice(index, 1)
    return sumArray
}

const checkSumArray = (arr, value)=>{
    let goodPairsArray = arr.filter(sum => sum[1] === value)
    return goodPairsArray
}

const filterGoodSumsByIndex = (arr, value, index) =>{
    let sumArray = sumsFromIndex(arr, index)
    let goodPairsArray = checkSumArray(sumArray, value)
    return goodPairsArray
}

const filterAllGoodSums = (arr, val) =>{
    let i = 0
    let checkedSums = []
    while(i<arr.length){
        let newSums = filterGoodSumsByIndex(arr, val, i)
        checkedSums = checkedSums.concat(newSums)
        i++
    }
    checkedSums = checkedSums.map(val => val[0])
    return checkedSums
}

const areSumsIdenticle = (arr1, arr2)=>{
    if( arr1[0] === arr2[0] && arr1[1] === arr2[1]){
        return true
    } else if(arr1[0] === arr2[1] && arr1[1] === arr2[0]) {
        return true
    } else { 
        return false
    }
}



const removeDuplicateSums = (arr) =>{
    let i = 0
    let modifiedArr = arr.map(n=>n)
    while(i<modifiedArr.length){
        let j = i+1
        let isDuplicate = false
        while( j<modifiedArr.length && isDuplicate === false){
            isDuplicate = areSumsIdenticle(modifiedArr[i], modifiedArr[j])
            j++
        }
        if(isDuplicate){
            modifiedArr.splice(i,1)
        }else{
            i++
        }
    }
    return modifiedArr
}



const findUniqueSummingPairs = (arr, val)=>{
    let checkedSums = filterAllGoodSums(arr, val)
    let cleanedArray = removeDuplicateSums(checkedSums)
    return cleanedArray 
}

console.log(findUniqueSummingPairs(startArray, 3))