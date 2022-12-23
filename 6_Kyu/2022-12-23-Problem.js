// 6 Kyu Problem - December 23rd 2022
// Round by 0.5 Steps
// Mathematics, if statements, modulus for decimal numbers, Math.floor(), Math.ceil(), Math.round()

/*
Round any given number to the closest 0.5 step

I.E.

solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5
*/

function solution(n){
  
    if(n >= Math.ceil(n) - 0.25){
      return Math.ceil(n)
    }
    
    if(n < Math.floor(n) + 0.25){
      return Math.floor(n)
    }
    
    if(n >= Math.floor(n) + 0.25 && n < Math.ceil(n) - 0.25){
      return Math.floor(n) + 0.50
    }
     
  }

// to get only the decimal numbers, modulus by 1
function solution(n){
    let leftovers = n%1
    return Math.floor(n) + (leftovers >= 0.75 ? 1 : leftovers < 0.25 ? 0 : 0.5)
}


// Using mathematics, Math.round()
function solution(n){
    return Math.round(n*2)/2
}