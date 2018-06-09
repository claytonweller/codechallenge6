const startArray = require('./arr.js')

const swapTwoNumbers =(arr, step)=>{
    let modifiedArr = arr.map(i=>i)
    let didChange = false
    if (arr[step] > arr[step+1]){
        modifiedArr.splice(step,2, arr[step+1], arr[step]) 
        didChange = true
    }  
    return {array:modifiedArr, didChange:didChange}
}

const swapCylce = (arr)=>{
    i = 0
    totalChanges = 0
    let modifiedArr = arr.map(n=>n)
    while (i<arr.length-1){
        obj = swapTwoNumbers(modifiedArr, i)
        if(obj.didChange){
            modifiedArr = obj.array
            totalChanges++
        }
        i++
    }
    return {array:modifiedArr,totalChanges:totalChanges,}
}

const bubbleSort = (arr)=>{
    let modifiedArr = arr.map(n=>n)
    let needsToRun = true
    while(needsToRun) {
        let obj = swapCylce(modifiedArr)
        modifiedArr = obj.array
        if(obj.totalChanges === 0){
            needsToRun = false
        }
    }
    return modifiedArr
}

const findMatches = (num, arr)=>{
    let totalMatches = 0
    arr.forEach(element => {
       if(element === num){
           totalMatches++
       } 
    });
    return totalMatches
}

const createMatchArray = (val, length)=>{
    let i = 0
    let arr = []
    while (i<length){
        arr.push(val)
        i++
    }
    return arr
}

const groupMatches = (val, arr, index)=>{
    let matches = findMatches(val, arr)
    let modifiedArr = arr.map(n=>n)
    let matchesFound = false
    if(matches>1){
        let group = createMatchArray(val, matches)
        modifiedArr.splice(index, matches, group)
        matchesFound = true
    }
    return {array:modifiedArr, matchesFound:matchesFound}
}

const groupAllMatches = (arr)=>{
    let i = 0 
    let matchesFound = false
    let modifiedArr = arr.map(n=>n)
    while(i<modifiedArr.length){
        let obj = groupMatches(modifiedArr[i],modifiedArr, i)
        if (obj.matchesFound){
            modifiedArr = obj.array
            i=0
        } else {
            i++
        }
    }
    return modifiedArr
}

const sortAndGroup = (arr)=>{
    let sortedArray = bubbleSort(arr)
    let groupedArray = groupAllMatches(sortedArray)
    return groupedArray
}

console.log( sortAndGroup(startArray))