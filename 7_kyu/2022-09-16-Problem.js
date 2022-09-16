// 7 Kyu Problem - September 16th 2022
// Longest Vowel Chain
// Math.max(), spread syntax, negated character set, regex, .split(regexp), .match(regexp), .map(), .match(), .includes() 

/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

function solve(s){
    //return Math.max(...s.split(/[^aeiou]/).map(e => e.length))
    //return s.split(/[^aeiou]/).reduce((acc,curr) => Math.max(acc,curr.length),0)
    //return Math.max(...s.match(/[aeiou]+/g).map(e => e.length))
      
    let max = 0, curr = 0
    for(let i = 0; i < s.length; i++){
        if("aeiou".includes(s[i])){
          curr++
          if(curr > max){
            max = curr
          }
        }else{
          curr = 0
        }
      }
      return max
    }