// 7 Kyu Problem - August 7th 2022
// Smallest value of array
// .indexOf(), Function.prototype.apply(thisArgs, argsArr), (...args), .sort() in place"

/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

// could have also done [...arr] instead for the copying of the array
function min(arr, toReturn) {
    let sortArr = Array.from(arr).sort((a,b)=> a-b)
    if(toReturn === "value"){return sortArr[0]}
    if(toReturn === "index"){return arr.indexOf(sortArr[0])}
  }

// Alternative Solution
// could also do (...arr) instead of Function.prototype.apply(thisArgs, argsArr)
function min(arr, toReturn) {
    let minVal = Math.min.apply(null, arr)
    return toReturn === "value" ? minVal : arr.indexOf(minVal)
}

// Alternative Solution
// One-liner
const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));