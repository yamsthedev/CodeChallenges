// 7 Kyu Problem - August 8th 2022
// Divide and Conquer
// unary plus, string + number equals to string, typeof operator, .reduce(), Number()

/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

function divCon(x){
    return x.reduce((acc,curr) => acc + (typeof curr === "number" ? curr : - Number(curr)),0)
  }

// Alternative Solution
function divCon(x){
    return x.reduce((acc, curr) => typeof curr === 'number'? acc + curr : acc - Number(curr),0)
  }

// Alternative Solution
function divCon(x){
    let sum = 0
    x.forEach(e => typeof e === "string" ? sum -= Number(e) : sum += e)
    return sum
  }

// Alternative Solution
const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)