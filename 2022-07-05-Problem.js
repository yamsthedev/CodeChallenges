// 7 Kyu Problem - July 5th 2022
// Basic Sequence Practice
// Using push, for loops, Array.apply(null, Array(3)) and reduce
// A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

// In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

// [ 0,  1,    3,      6,   ...]
//   0  0+1  0+1+2  0+1+2+3
// Your Task
// Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.

// Examples
//  5  -->  [0,  1,  3,  6,  10,  15]
// -5  -->  [0, -1, -3, -6, -10, -15]
//  7  -->  [0,  1,  3,  6,  10,  15,  21,  28]

function sumOfN(n) {
    let additive = 0, arr = []
    for(let i = 0; i < Math.abs(n)+1; i++){
      arr.push(additive)
      n > 0 ? additive = additive + (i + 1) : additive = additive - (i + 1)
    }
    return arr
  };

// Alternative Solution
function sumOfN(n) {
    for (var i = 0, list = []; i <= Math.abs(n); i++) {
      console.log(list[i-1])
      list.push((list[i - 1] || 0) + i * (n < 0 ? -1 : 1))
    }
    return list
}

// Alternative Solution
function sumOfN(n) {
    let sign = n < 0 ? -1 : 1;
    return Array.apply(null, Array(Math.abs(n))).reduce((acc,c,i) => {
      acc.push(acc[i] + (i + 1) * sign);
      return acc
    }, [0])
};