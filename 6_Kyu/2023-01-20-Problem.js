// 6 Kyu Problem - January 20th 2023
// Framed Reflection
// Math.max(), spread syntax, .split(), .map(), .repeat(), .reverse(), .join(), template literals

/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

*********
* olleH *
* dlroW *
*********

Words in your solution should be left-aligned.
*/

function mirror(text){
  // Sandwich!
  // Math.max(), spread syntax, .split(), .map(), .repeat(), .reverse(), .join(), template literals
    
  let maxLength = Math.max(...text.split(" ").map(e => e.length))
  let bun = "*".repeat(maxLength+4)
  
  let filling = text.split(" ").map(e => "*" + " " + e.split("").reverse().join("") + " ".repeat((maxLength - e.length)+1) + "*").join("\n")
  
  return `${bun}\n${filling}\n${bun}`
}

function mirror(s){
  let a = s.split(' ');
  let m = Math.max(...a.map(x=>x.length));
  a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
  return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
}