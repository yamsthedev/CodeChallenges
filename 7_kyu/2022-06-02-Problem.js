// 7 Kyu Problem - June 2nd 2022
// Fix string case

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

function solve(s){
    let lowercaseCount = 0;
    let uppercaseCount = 0;
    s.split("").forEach((letter,index) => {
      letter === s.toUpperCase().split("")[index] ? uppercaseCount += 1 : lowercaseCount += 1;
    })
    return uppercaseCount > lowercaseCount ? s.toUpperCase() : s.toLowerCase()
}

// Alternative Solution
function solve(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
  }

// Alternative Solution
function solve(s){
    let c = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) c++;
    }
    return (c > s.length/2) ? s.toUpperCase() : s.toLowerCase()
 }