// 6 Kyu Problem - October 2nd 2022
// Sort the odd
// .sort(), .shift(), .pop(), .map(), .filter() 

/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// .shift()
function sortArray(array) {
  let odds = array.filter(e => e % 2 !== 0).sort((a,z) => a-z)
  return array.map((e,i) => e % 2 !== 0 ? odds.shift() : e)
}

// .pop()
function sortArray(array) {
  let odds = array.filter(e => e % 2 !== 0).sort((a,z) => z-a)
  return array.map((e,i) => e % 2 !== 0 ? odds.pop() : e)
}