// 7 Kyu Problem - June 17th 2022
// Factorial

function factorial(n){
    let factorial = n
    if(n === 0){
      return factorial = 1
    }else{
      while(n > 1){
        factorial *= (n - 1)
        n -= 1
      }    
    }
    return factorial
  }
// Alternative Solution (Using recursion)
const factorial = n => n ? factorial(n - 1) * n : 1;

// Alternative Solution
function factorial(n){
    let answer = 1;
    
    while (n > 0) {
      answer *= n;
      n--;
    }
    
    return answer;
  }