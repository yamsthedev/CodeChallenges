// 7 Kyu Problem - June 23rd 2022 
// Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let lengthArray = array.map(e => e.toString().length)
    let longestLength = Math.max(...lengthArray)
    let indexOfAns = lengthArray.indexOf(longestLength)
    return array[indexOfAns]
  }

// Alternative Solution
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

// could have also used .toString() or String()