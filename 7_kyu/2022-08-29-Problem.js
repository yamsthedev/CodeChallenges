// 7 Kyu Problem - August 29th 2022
// Training on V A P O R C O D E
// String.prototype.toUpperCase(), String.prototype.split(), Array.prototype.join(), Array.prototype.map(), RegExp, String.prototype.replace(pattern, replacement) with a regex as the pattern and a global flag, Array.from()

/*
Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/

function vaporcode(string) {
    return string.split(" ").map(e=>e.toUpperCase()).join("").split("").join("  ")
}

function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}

// Using RegExp
function vaporcode(string) {
    return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
}

function vaporcode(string) {
    return string.toUpperCase().replace(/ /g,'').split('').join('  ')
}

// Using String.prototype.match(regexp)
const vaporcode = string =>
  string.toUpperCase().match(/\S/g).join(`  `);