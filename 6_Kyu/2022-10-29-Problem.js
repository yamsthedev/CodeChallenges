// 6 Kyu Problem - October 29th 2022
// Backspaces in string
// .split(), .reduce(), .slice(), .pop(), .push(), for of loop, .join("")

/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// Using .split(), .reduce(), .slice()
function cleanString(s) {
  return s.split("").reduce((acc,curr) => curr === "#" ? acc.slice(0,-1) : acc + curr,"")
}

// Using .split(), .pop(), .push(), for of loop, .join("")
function cleanString(s){
  let ans = []
  for(let char of s){
    if(char === "#"){
      ans.pop()
    }else{
      ans.push(char)
    }
  }
  return ans.join("")
}