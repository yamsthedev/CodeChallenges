// 6 Kyu Problem - November 15th 2022
// Reverse every other word in the string
// .split(), .map(), .join(), .trim(), .reverse(), reassignment, for loop

/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str){
  return str.split(" ").map((ex,i) => i % 2 === 0 ? ex : ex.split("").reverse().join("")).join(" ").trim()
}

// Using a for loop, reassignment of elements in an array
function reverse(str){

let arr = str.split(" ")

for(let i = 1; i < arr.length; i+=2){
  arr[i] = arr[i].split("").reverse().join("")
}

return arr.join(" ").trim()
  
}