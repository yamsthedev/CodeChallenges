// 7 Kyu Problem - June 5th 2022
// String Drills: Repeater

// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

const repeater = (string, n) => {
    return string.repeat(n);
  }