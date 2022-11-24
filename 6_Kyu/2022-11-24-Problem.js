// 6 Kyu Problem - November 24th 2022
// Unary function chainer
// Functional Programming, function of a function, .reduce()

/*
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))
*/

function chained(functions) {
  return function(n) {
    return functions.reduce((acc,curr) => curr(acc), n)
  };
}