// 6 Kyu Problem - October 10th 2022
// Count characters in your string
// .reduce(), .split(), .forEach(), object

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// Using .reduce()
function count (string) {
return string.split("").reduce((acc,curr,i) => {
    acc[curr] ? acc[curr]+=1 : acc[curr] = 1
    return acc
 }, {})
}

// Using a for loop aka .forEach()
function count (string) {  
  let ans = {}
  string.split("").forEach((e,i,a) => {
    ans[e] ? ans[e]+=1 : ans[e] = 1
  })
  return ans;
}