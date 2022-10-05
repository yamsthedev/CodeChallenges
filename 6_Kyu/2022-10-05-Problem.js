// 6 Kyu Problem - October 5th 2022
// Highest Scoring Word
// .split(), .reduce(), spread syntax, .map(), .charCodeAt() - 96, .indexOf()

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let eachWord = x.split(" ")
  let countOfWord = eachWord.map(e => {
   return e.split("").reduce((acc,curr) => acc + (curr.charCodeAt() - 96), 0)
  })
  return eachWord[countOfWord.indexOf(Math.max(...countOfWord))]
}

function high(x){
  let countOfWords = x.split(" ").map(e => [...e].reduce((acc,curr) => acc + curr.charCodeAt() - 96, 0))
  return x.split(" ")[countOfWords.indexOf(Math.max(...countOfWords))]
}