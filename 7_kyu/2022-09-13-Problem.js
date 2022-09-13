// 7 Kyu Problem - September 13th 2022
// Last Survivor
// .splice(begin, amountRemoved, item1, item2, ... itemN), .split(""), [...string], for of loop, .reduce(), .join("")

/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
*/

function lastSurvivor(string, indices) {
    let arrStr = string.split("");
    // could have also done:
    // let arrStr = [...string] 
    for (let i of indices){
      arrStr.splice(i, 1)
    }
    return arrStr[0];
    // Or return arrStr.join("")
}

// Using .reduce() and .slice()
function lastSurvivor(letters, coords) {
  return coords.reduce((acc,curr) => acc.slice(0,curr) + acc.slice(curr+1), letters)
}

// Using a simple for loop and .splice()
function lastSurvivor(letters, coords) {
  letters = letters.split('');
  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1)
  }
  return letters.join('')
  // or could have done return letters[0]
}