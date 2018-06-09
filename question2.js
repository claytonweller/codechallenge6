const startArray = require("./arr.js")

const doTheyAdd = (num1, num2, target) =>{
    let sum = num1 + num2
    if(sum === target) {
        return true
    } else {
        return false
    }
}

const sumsFromIndex = (arr, index)=>{
    let sumArray = arr.map(i => [[i,arr[index]], i + arr[index]])
    sumArray.splice(index, 1)
    return sumArray
}

test= [1,2,3,4,5,11]

const createAllSums = (arr)=>{
    let allSumsArray = arr.map((val, i) => [val, sumsFromIndex(arr, i)])
    return allSumsArray
}

const targetSumCheck = (arr, val)=>{
    
    

}

let allSumsArray = createAllSums(test)


console.log(allSumsArray[4][1])