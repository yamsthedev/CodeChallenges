// 6 Kyu Problem - September 24th 2022
// Persistent Bugger
// Recursion, Template Literals, .reduce(), for loop, .split(), .toString(), Number(), .map(), while loop

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

 
function persistence(num) {
  let count = 0
  while(num / 10 >= 1){
    num = num.toString().split("").reduce((acc,curr) => acc*curr)
    count++
  }
  return count
}

// Using .toString(), .split(), .map(), Number(), .reduce(), while loop
function persistence(num) {
   let count = 0;
   num = num.toString()
  while(num.length > 1){
    count++
    num = num.split("").map(Number).reduce((acc,curr) => acc * curr).toString()
  }
  return count
}

// Using For loop and using Var as variable type, .reduce(), .toString(), .split()
function persistence(num){
  for(var i = 0; num > 9; i++){
    num = num.toString().split("").reduce((acc,curr) => acc*curr)
  }
  return i
}

// Using Template Literals, Recursion, .reduce()
function persistence(num){
    return `${num}`.length > 1 ? 1 + persistence(`${num}`.split("").reduce((acc,curr) => acc*curr)) : 0
  }

