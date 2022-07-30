// 7 Kyu Problem - July 30th 2022
// Char Code Calculation
// regex, .charCodeAt(), .map(), .split(), .reduce(), spread syntax

/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

function calc(x){
    let total1 = ""
    for(let i = 0; i < x.length; i++){
       total1 += x.charCodeAt(i)
    }
    let total2 = total1.replace(/7/g,"1")
    total1 = total1.split("").map(e => Number(e)).reduce((acc,curr) => acc + curr, 0)
    total2 = total2.split("").map(e => Number(e)).reduce((acc,curr) => acc + curr, 0)
    return total1 - total2
  }

// Alternative Solution
function calc(x){
    let sum = n => [...n].reduce((acc,curr)=>+acc+ +curr)
    let total1 = x.replace(/./g, e => e.charCodeAt(0))
    let total2 = total1.replace(/7/g, "1")
    return sum(total1) - sum(total2)
    
  }