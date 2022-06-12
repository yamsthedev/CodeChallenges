// 7 Kyu Problem - June 12th 2022
// Greatest common divisor

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
    let max = 1;
    let thresholdValue = Math.min(x,y)
    for(let i = 1; i <= thresholdValue; i++){
      if(x % i === 0 && y % i === 0){
        max = i
        i++
      }
    }
    return max
  }

// Alternative Solution 
function mygcd(x, y){
    for ( let j = Math.max(x, y); j > 0; j-- ){
      if ( x % j === 0 && y % j === 0){
        return j
      }
    }
  }

// Alternative Solution (using euclidean algorithm)
function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }