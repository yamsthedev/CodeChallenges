// 6 Kyu Problem - September 22nd 2022
// Replace with Alphabet Position
//.toUpperCase(), str.replace(pattern,replacement), .split(), .map(), .charCodeAt() - 64, .join(""), .toLowerCase(), Regexp.prototype.test(str), str.match(), .charCodeAt() - 96

/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// .toLowerCase(), Regexp.prototype.test(str), str.match(), .map(), .charCodeAt() - 96, .join("")
function alphabetPosition(text) {
  if(/[A-Za-z]/g.test(text) === false){
    return ""
  }
  return text.toLowerCase().match(/[A-Za-z]/g).map(e => e.charCodeAt(0) - 96).join(" ")
}

// .toUpperCase(), str.replace(pattern,replacement), .split(), .map(), .charCodeAt() - 64, .join("")
function alphabetPosition(text) {
  return text.toUpperCase().replace(/[^A-Z]/g, "").split("").map(e => e.charCodeAt() - 64).join(" ")
}