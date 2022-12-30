// 6 Kyu Problem - December 30th 2022
// Longest Alphabetical Substring
// for loop, .slice(), Regexp, .match(), .reduce()

/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)
*/

// best practices
// for loop, .slice()
function longest(str) {
  let pos = 0
  let maxLength = 0
  let curr = 0
  for(let i = 1; i < str.length; i++){
    if(str[i-1] <= str[i]){
      curr++
      if(curr > maxLength){
        maxLength = curr
        pos = i - maxLength
      }
    }else{
      curr = 0
    }
  }
  return str.slice(pos, maxLength + pos + 1)
}

// using regexp, .match(), .reduce()
// \* matches the preceding item 0 or more times
longest = s => s.match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g).reduce((a, b) => a.length >= b.length ? a : b);