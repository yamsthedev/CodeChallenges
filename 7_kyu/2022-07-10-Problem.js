// 7 Kyu Problem - July 10th 2022
// Digits explosion
// String.protoype.repeat(), nested for loops, + operator

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

function explode(s) {
    return s.split("").map(e => e.repeat(+e)).join("")
  }

// Alternative Solution
function explode(s) {
    let ans = ""
    for(let i = 0; i < s.length; i++){
      for(let x = s[i]; x > 0; x--){
        ans += s[i]
        console.log(ans)
      }
    }
    return ans
  }