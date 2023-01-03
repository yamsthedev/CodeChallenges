// 6 Kyu Problem - January 2nd 2022
// Count the Divisible Numbers
// Mathematics, Algorithms, Math.floor(), Math.ceil()

/*
Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.

More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }

Example
Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10

Note: The test cases are very large. You will need a O(log n) solution or better to pass. (A constant time solution is possible.)
*/

function divisibleCount(x, y, k) {
  return Math.floor(y / k) - Math.floor((x - 1)/ k);
}

const divisibleCount = (x, y, k) => {
  const firstDivisible = Math.ceil(x / k) * k;
  const lastDivisible = Math.floor(y / k) * k;
  return (lastDivisible - firstDivisible) / k + 1;
}