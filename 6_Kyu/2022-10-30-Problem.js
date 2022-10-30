// 6 Kyu Problem - October 30th 2022
// Consonant Value
// .split(), regexp, negated set with quanitfier, str.match(regexp), spread operator, .reduce(), Math.max(), .charCodeAt(0) - 96

/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

function solve(s) {
  let vowels = "aeiou"
  return Math.max(...s.toLowerCase().split("")
          .map(e => vowels.indexOf(e) === -1 ? e : " ")
          .join("")
          .split(" ")
          .map(substr => substr.split("").map(letter => letter.charCodeAt(0)-96).reduce((acc,curr) => acc+curr,0)))
};

//using str.match(regexp)
function solve(s) {
  return Math.max(...s.match(/[^aeiou]+/g).map(substr => substr.split("").reduce((acc,curr) => acc + curr.charCodeAt(0) - 96, 0)))
};

// Using regex as a split() separator
function solve(s) {
  return Math.max(...s.split(/[aeiou]/).map(substr => substr.split("").reduce((acc,curr) => acc + curr.charCodeAt(0) - 96, 0)))
};