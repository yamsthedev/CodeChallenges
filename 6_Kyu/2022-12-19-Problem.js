// 6 Kyu Problem - December 19th 2022
// Detect Pangram
// .indexOf(), .split(), .every(), .includes(), .toLowerCase(), for loop, .match(), Regexp, .join(), .sort()

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// dont need .sort()
function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let container = []
  string = string.toLowerCase().match(/[a-z]/gi)
  for(let i = 0; i < string.length; i++){
    if(string.indexOf(string[i]) !== -1 && container.indexOf(string[i]) == -1){
      container.push(string[i])
    }
  }
  return container.sort().join("").length === alphabet.length ? true : false
}
// Using .indexOf() !== -1 strat, .every()
function isPangram(string){
  string = string.toLowerCase()
  return "abcdefghijklmnopqrstuvwxyz".split("").every(l => string.indexOf(l) !== -1)
}

// using .includes() instead of the .indexOf() strat, .every()
function isPangram(string){
  return "abcdefghijklmnopqrstuvwxyz".split("").every(letter => string.toLowerCase().includes(letter))
}