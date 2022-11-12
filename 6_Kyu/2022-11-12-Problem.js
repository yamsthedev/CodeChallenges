// 6 Kyu Problem - November 12th 2022
// Array Deep Count
// Recursion, .reduce(), for loop, Array.isArray(arr)

/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

// .reduce(), Array.isArray()
function deepCount(a){
  return a.reduce((acc,curr) => acc + (Array.isArray(curr) ? deepCount(curr) : 0), a.length)
}


// for loop
function deepCount(a){
  let count = a.length
  for(let i = 0; i < a.length; i++){
    if(Array.isArray(a[i])){
      count += deepCount(a[i])
    }
  }
  return count
}