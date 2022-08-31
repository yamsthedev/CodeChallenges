// 7 Kyu Problem - August 31st 2022
// Return the first M multiples of N
// .push(), making an array of undefined's, arrow function, .map(), Array.from(Array(num)), [...Array(num)]

/*
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0]
*/

// Using a for loop
function multiples(m,n){
    let ans = []
    for(let i = 1; i <= m; i++){
        ans.push(n*i)
    }
    return ans
}

// Making an array of m undefineds and then .map()
function multiples(m,n){
    return Array.from(Array(m)).map((_,i) => ++i * n)
}

// Making an array of m undefineds and then .map(), arrow function
const multiples = (m, n) =>
  [...Array(m)].map((e,i) => (i+1) * n)