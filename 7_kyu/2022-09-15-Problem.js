// 7 Kyu Problem - September 15th 2022
// Spacify
// .split(), spread syntax, .join(" "), .map(), RegExp, .replace(pattern, replacement), .trim(), /./g is any character except word breaks

/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

function spacify(str) {
    return str.split("").map((e,i) => str.length-1 === i ? e : e + " ").join("")
}

function spacify(str) {
  return str.split("").join(" ")
}

// Spread Syntax
function spacify(str) {
    return [...str].join(" ")
}

// Using RegExp, replace, trim
function spacify(str) {
    //return str.replace(/./g, function(e){return e+" "}).trim()
    return str.replace(/./g, e => e + " ").trim()
  }