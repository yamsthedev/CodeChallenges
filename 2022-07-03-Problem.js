// 7 Kyu Problem - July 3rd 2022
// Largest pair sum in array
// Using sort method, reduce, slice, and shift (note that sort changes the array, does not make a copy)

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
    numbers.sort((a,b) => b - a)
    return numbers[0] + numbers[1]
  }

// Alternative Solution  
const largestPairSum = numbers => numbers.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a + b);

// Alternative Solution
function largestPairSum(numbers)
{

    numbers.sort(function(a,b){
        return b-a;
    });
    return numbers.shift()+numbers.shift();

}