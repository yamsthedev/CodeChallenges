// 6 Kyu Problem - October 14th 2022
// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// while loop, .split(), .reduce(), .push(), **, parseInt(), nested for loop, Math.pow(), String(), .toString()

/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases (input -> output):

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

90, 100 --> []
*/

function sumDigPow(a, b) {
    let ans = []
    while(a<=b){
      let x = a.toString().split("").reduce((acc,curr,i) => acc + curr**(i+1), 0)
      if(x === a){
        ans.push(a)
      }
      a++
    }
    console.log(ans)
    return ans
  }

function sumDigPow(a, b) {
  var arr = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;
    for (let j = 0; j < String(i).length; j++) {
      sum += Math.pow(parseInt((String(i)[j])), j+1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}