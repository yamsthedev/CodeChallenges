// 7 Kyu Problem - April 23, 2022
// Exes and Ohs
// 2nd Problem of the Day

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let ohs = str.toLowerCase().split("").filter(letter => letter === "o").length
    let xes = str.toLowerCase().split("").filter(letter => letter === "x").length
    return ohs === xes
  }
  
//Alternative Solution:
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

//Alternative Solution:
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}