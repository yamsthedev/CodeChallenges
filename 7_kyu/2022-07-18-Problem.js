// 7 Kyu Problem - July 18th 2022
// Alphabet symmetry
// indexOf(), filter, map, toLowerCase(), nested for loops, reduce(), str.charCodeAt(), spread syntax

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

function solve(arr){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    return arr.map(e => e.toLowerCase().split("").filter((e,i,a) => alphabet.indexOf(e) === i).length)
  };

// Alternative Solution
function solve(arr){  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    let final = []
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j].toLowerCase() === alphabet[j]) {
          count++;
        }
      }
      final.push(count); 
    }
    return final
  };

// Alternative Solution
function solve(arr) {  
    return arr.map(x => [...x.toLowerCase()].reduce((s,v,i) => s + (v.charCodeAt() == i + 97), 0))
  }