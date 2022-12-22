// 6 Kyu Problem - December 21st 2022
// longest_palindrome
// for of loop, Math.max(), .slice(), .reverse(), .join(), nested for loops, .split(), function in function

/*
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

// Will time out, not efficent
// .slice(), .reverse(), .join()
longestPalindrome=function(s){
    let longest = 0;
    let length = s.length
    for(let i = 0; i < length; i++){
      for(let j = i+1; j <= length; j++){
        let testStr = s.slice(i, j)
        let testLength = testStr.length
        if(isPally(testStr) && testLength > longest){
          longest = testLength
        }
      }
    }
    return longest
  }

function isPally(string){
  let arr = string.split("")
  return arr.reverse().join("") == string
}

// Alternative Solution
// Doesnt time out due to the function not using .reverse and .join but rather a simple for loop
// for of loop, Math.max()
longestPalindrome=function(s){
    function isPalindrome(s) {
      for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) { return false; }
      }
      return true;
    }
    
    let maxPalindromeLength = 0;
    let words = s.split(" ");
    
    for (let word of words) {
      for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
          if (isPalindrome(word.slice(i, j))) {
            maxPalindromeLength = Math.max(maxPalindromeLength, j - i);
          }
        }
      }
    }
    
    return maxPalindromeLength;
}