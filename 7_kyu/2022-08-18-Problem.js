// 7 Kyu Problem - August 18th 2022
// Alternate Case
// for loop, String.prototype.toUpperCase(), String.prototype.toLowerCase(), .map(), for loop

/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
    let newStr = "";
    for(let i = 0; i < s.length; i++){
      s[i] === s[i].toUpperCase() ? newStr += s[i].toLowerCase() : newStr += s[i].toUpperCase();
    }
    return newStr
  }

// Alternative Solution using arrays
function alternateCase(s) {
    return s.split("").map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join("")
  }

