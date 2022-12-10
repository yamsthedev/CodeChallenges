// 6 Kyu Problem - December 10th 2022
// Character with longest consecutive repetition
// .toLowerCase(), .split(), .reduce(), reassignment, ALGORITHMS

/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.
*/

//using .reduce()
function longestRepetition(s) {
  
  let count = 0
  let pastLetter = ""
  
  return s.toLowerCase().split("").reduce((acc,curr) => {
    
    curr == pastLetter ? count++ : count = 1
    
    if(count > acc[1]){
      acc[0] = curr
      acc[1] = count
    }
    
    pastLetter = curr
    return acc
    
  }, ["",0])

}

// using for loop
const longestRepetition = s => {
  let max = 0;
  let char = ''; 
  console.log(s)
  for(let i = 1, c = 1; i <= s.length; i++){
    if(s[i] === s[i-1]) c++
    else{
      if(c > max){
        max = c
        char = s[i-1]
      }
      c = 1
      }
    } 
  return [char, max]
}
