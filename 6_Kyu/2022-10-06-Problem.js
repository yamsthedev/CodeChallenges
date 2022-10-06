// 6 Kyu Problem - October 6th 2022
// Break camelCase
// regex match and capture group, str.replace(pattern, replacement), .split(), .map(), .join(), .toLowerCase() 

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//using regex, capturing groups, .replace()
function solution(string) {
    return string.replace(/([A-Z])/g , ` $1`)
}

function solution(string) {
    return string.replace(/[A-Z]/g , ` $&`)
}

function solution(string) {
  let ans = ""  
  for(let i = 0; i < string.length; i++){
      if(string[i].toLowerCase() !== string[i]){
        ans += ` ${string[i]}`
      }else{
        ans += string[i]
      }
    }
  return ans
}

function solution(string){
    return string.split("").map(e => e.toLowerCase() !== e ? " " + e : e).join("")
  }