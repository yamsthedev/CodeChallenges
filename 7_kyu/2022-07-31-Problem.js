// 7 Kyu Problem - July 31st 2022
// Caffeine Script
//

/*
Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

caffeineBuzz(1)   => "mocha_missing!"
caffeineBuzz(3)   => "Java"
caffeineBuzz(6)   => "JavaScript"
caffeineBuzz(12)  => "CoffeeScript"
*/

function caffeineBuzz(integer){
    let ans = ""
    if(integer % 3 === 0 && integer % 4 === 0){
        ans += "Coffee"
        if(integer % 2 === 0){
            ans += "Script"
        }
    }else if(integer % 3 === 0){
        ans += "Java"
        if(integer % 2 === 0){
            ans += "Script"
        }
    }else{
        ans += "moca_missing!"
    }
    return ans
}

// Alternative Solution
function caffeineBuzz(n){
    if (n % 12 === 0) return "CoffeeScript";
    if (n % 6 === 0) return "JavaScript";
    if (n % 3 === 0)  return "Java";
    return "mocha_missing!";
  }

// Alternative Solution
function caffeineBuzz(n){
    var str = "mocha_missing!";
    if(n%3==0){
      if(n%4==0){
        str = "Coffee";
      }else{
        str = "Java";
      }
      if(n%2==0){
        str = str + "Script";
      }
    }
    return str;
  }  

// Alternative Solution
function caffeineBuzz(n){
    return (n%3==0) ? ((n%4==0) ? "Coffee" : "Java") + ((n%2==0) ? "Script" : "") : "mocha_missing!";
  }