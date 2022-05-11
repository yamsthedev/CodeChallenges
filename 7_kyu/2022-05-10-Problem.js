// 7 Kyu Problem - May 10th 2022
// Flatten and sort an array

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically.

function flattenAndSort(array) {
    return array.reduce((acc,curr) => acc.concat(curr), []).sort((a,b) => a-b)
  }

// Alternative Solution
function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
  }

// Alternative Solution
function flattenAndSort(array) {
    return array
      .reduce((result, current) => [...result, ...current],[])
      .sort((a, b) => a - b)
      ;
  }