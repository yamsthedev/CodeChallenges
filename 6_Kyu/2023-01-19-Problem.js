// 6 Kyu Problem - January 19th 2023
// Permute a Palindrome
//spread syntax, new Set(), Set.forEach(), .filter(), palindrome

/*
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

//spread syntax, new Set(), Set.forEach(), .filter(), palindrome
function permuteAPalindrome ([...input], odd = 0) { 
    console.log(input)
    new Set(input).forEach(a => {
      if(input.filter(b => b == a).length % 2 !== 0){
        odd++
        }
      })
    //a word is a permutable palindrome when there is only 1 set of odd number of letters 
    //Set.forEach()
    return odd < 2;
  }
  