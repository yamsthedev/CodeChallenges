// 7 Kyu Problem - June 3th 2022
// Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.


function capitalize(s){
    let uppers = s.split("").map(function(letter,i){
      return i % 2 === 0 ? letter.toUpperCase() : letter; 
    }).join("")
    let lowers = uppers.split("").map(function(letter,i){
      return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
    }).join("")
    return [uppers,lowers];
  };


//Alternative Solution
function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
  };