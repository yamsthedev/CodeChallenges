// 7 Kyu Problem - July 26th 2022
// Filter the number
//RegExp \D, \d, [^0-9], parseInt() or + in the front (unary plus), [^...] (negated character class), String.prototype.match(), String.prototype.replace(), isNaN()

/*Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }

// Alternative Solution
var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
  }

// Alternative Solution
const FilterString = value => +value.replace(/\D/g, '');
/* Explanation
Using an arrow function to return the function, which makes it look a little weird to begin with.

the + is a unary plus, which is another way to replace ParseInt on a string.

/ / means this is a regular expression

\D matches all non digit characters

g is a flag that finds all matches globally, not just the first one.
*/