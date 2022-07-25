// 7 Kyu Problem - July 25th 2022
// Substituting Variables Into Strings: Padded Numbers
// string.prototype.repeat(), string.prototype.padStart(), string.prototype.slice(-5)

/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/

function solution(value){
    let x = value.toString()
    let ans = "0".repeat(5 - x.length) + x
    return `Value is ${ans}`
  }

// Alternative Solution
const solution = value => 'Value is ' + value.toString().padStart(5, '0');

// Alternative Solution
function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  }