// 6 Kyu Problem - November 29th 2022
// Is Integer Array?
// Array.isArray(arr), .every(), Number.isInteger()

/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/


// Array.isArray(arr), .every(), Number.isInteger()
function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(e => Number.isInteger(e))
}

// Number.isInteger(17.0) -> returns true
// Number.isInteger(17.01) -> returns false

