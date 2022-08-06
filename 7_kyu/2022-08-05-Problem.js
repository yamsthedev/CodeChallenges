// 7 Kyu Problem - August 5th 2022
// Sum of all arguments
// rest parameter, .reduce()

/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/

function sum(...arg) {
    return arg.reduce((acc,curr) => acc + curr, 0)
}

// Alternative Solution using for ... in with arguments
function sum() {
    let total = 0;
    for(let i in arguments){
      total += arguments[i];
    }
    return total;
}

// Alternative Solution using arguments and Function.prototype.call(thisArgs, arg1 ... , argN)
function sum() {
    return [].reduce.call(arguments, (acc,curr) => acc + curr, 0)
  }
//Could have also done:
function sum() {
    return [].reduce.call(arguments, function(acc, curr){
      return acc + curr
    },0)
  }