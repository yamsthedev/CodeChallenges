// 6 Kyu Problem - September 19th 2022
// Find the odd int
// obj, .forEach(), for...in loop, Number(), .find(), .filter(), Set(), .sort(), for loop

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// obj, .forEach(), for...in loop, Number()
function findOdd(A) {
let obj = {} 

A.forEach(e => {
  obj[e] ? obj[e]++ : obj[e] = 1
})

for(let prop in obj){
  if(obj[prop] % 2 !== 0){
    return Number(prop)
  }
}
}

// .find() and .filter()
function findOdd(A) {
  return A.find(e => A.filter(ex => ex === e).length % 2 !== 0)
}

// Set(), .filter()
function findOdd(A) {
  let uniqueArr = [...new Set(A)]
  for(let i = 0; i < uniqueArr.length; i++){
    if(A.filter(e => e === uniqueArr[i]).length % 2 !== 0){
         return uniqueArr[i] 
       }
    }
}

// .sort() and for loop
function findOdd(A) {
  let num = 0; 
  A.sort();
  console.log(A)
  for(let i = 0; i < A.length; i++){
    if(A[i] === A[i+1]){
      num++
    }else{
      num++
      if(num % 2 !== 0){
        return A[i]
      }
    }
  }
}