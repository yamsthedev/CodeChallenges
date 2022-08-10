// 7 Kyu Problem - August 9th 2022
// Shorter Concat [reverse longer]
// .split(), .reverse(), .join(), conditionals, ternary operator

/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/

function shorter_reverse_longer(a,b){
    let shorter = "", longer = ""
    if(a.length >= b.length){
      longer = a 
      shorter = b
    }else{
      longer = b
      shorter = a
    } 
    return shorter + longer.split("").reverse().join("") + shorter
  }

// Alternative Solution
function shorter_reverse_longer(a,b){
    return a.length >= b.length ? b + a.split('').reverse().join('') + b :
    a + b.split('').reverse().join('') + a;
  }

// Alternative Solution
var shorter_reverse_longer = function(a,b) {
    var longest = a.length >= b.length ? a : b;
    var shortest = a.length >= b.length ? b : a;
    return shortest + longest.split('').reverse().join('') + shortest;
  }

// Alternative Solution
function shorter_reverse_longer(a,b){
    if (a.length >= b.length) [a,b] = [b,a];
    return a + b.split('').reverse().join('') + a;
  }