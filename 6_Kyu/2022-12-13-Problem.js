// 6 Kyu Problem - December 13th 2022
// Primorial Of a Number
// Primes, Math.sqrt(), .push(), While Loop, For Loop

/*
Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.!alt!alt
Notes
Only positive numbers will be passed (N > 0) .
Input >> Output Examples:
1- numPrimorial (3) ==> return (30)
Explanation:
Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

Mathematically written as , P3# = 30 .
2- numPrimorial (5) ==> return (2310)
Explanation:
Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .

Mathematically written as , P5# = 2310 .
3- numPrimorial (6) ==> return (30030)
Explanation:
Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Mathematically written as , P6# = 30030 .
*/

function numPrimorial(n){
  // A prime number is number that can only be divided by 2 factors, 1 and itself
  let primeNumbers = []
  let i = 2
  while(n){
    let count = 0
    for(let j = 2; j <= Math.sqrt(i); j++){
      if(i % j === 0) count++
    }
    if(count == 0){
      primeNumbers.push(i)
      n--
    } 
    i++
  }
  return primeNumbers.reduce((acc,curr) => acc * curr)
}

// Using functions and array lengths
function isPrime(num) {
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

function numPrimorial(n){
  let arr = []
  let i = 2
  while(arr.length < n){
    if(isPrime(i)){
      arr.push(i)
    }
   i++
  }
  return arr.reduce((a,b) => a * b)
}