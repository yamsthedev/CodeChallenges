// 6 Kyu Problem - September 29th 2022
// Find the unique number
// .find(), .pop(), .sort(), .indexOf(), .lastIndexOf(), .filter(), spread operator, new Set()

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2W
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  let uniq = [...new Set(arr)]
  return arr.filter(e => e === uniq[0]).length > 1 ? uniq[1] : uniq[0]
}

function findUniq(arr) {
  return arr.find(e => arr.indexOf(e) === arr.lastIndexOf(e))
}

function findUniq(arr){
    arr.sort((a,z) => a-z)
    return arr[0] === arr[1] ? arr.pop() : arr[0]
}