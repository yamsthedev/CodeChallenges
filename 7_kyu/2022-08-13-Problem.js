// 7 Kyu Problem - August 13th 2022
// Automorphic Number
// Boundary-type assertion $ character, RegExp(), RegExp.prototype.test(string), String.prototype.endsWith(), .slice(-length)

/*
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive
Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .

autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .

autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .

autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225 .

autoMorphic (625) -->> return "Automorphic"
Explanation:
625 squared is 390625 , Ends with the same number's digits which are 625 .

autoMorphic (1) -->> return "Automorphic"
Explanation:
1 squared is 1 , Ends with the same number's digits which are 1 .

autoMorphic (6) -->> return "Automorphic"
Explanation:
6 squared is 36 , Ends with the same number's digits which are 6
*/

function automorphic(n){
    let nStr = `${n}`
    let nSq = `${n**2}`
    return nSq.slice(-nStr.length) === nStr ? "Automorphic" : "Not!!"
  }

// Alternative Solution using RegExp
const automorphic = n => RegExp(`${n}$`).test(n**2) ? "Automorphic" : "Not!!";

// Alternative Solution using String.prototype.endsWith()
const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;

