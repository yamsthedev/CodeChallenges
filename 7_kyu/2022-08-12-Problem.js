// 7 Kyu Problem - August 12th 2022
// Balanced Number
// spread synatax, .slice(0, length), .slice(-length), reduce(), unary plus to make string to number

/*
Definition
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .

Notes
If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

Number passed is always Positive .

Return the result as String
*/

// Since 0 is falsy, str.length % 2 ? -1 : -2, means that if the length of the string is even, then -2. If odd, -1.
function balancedNum(number)
{
let str = number.toString(),
    length = (str.length + (str.length % 2 === 0 ? 2 : 1)) / 2,
    sum = parameter => [...parameter].reduce((acc,curr) => acc + +curr,0)
return sum(str.slice(0, length)) === sum(str.slice(-length)) 
  ? 'Balanced' 
  : 'Not Balanced';
}

// Alternative Solution
function balancedNum(number){
    let i, result = 0;
    number = number + "";
    for(i = 0; i < number.length / 2 - 1; i++){
        result += +number[i] - +number[number.length - 1 - i];
    }
    return result === 0 ? "Balanced" : "Not Balanced";
}

// Alternative Solution
function balancedNum(number) {
    let numstr = number.toString();
    let leftside = "";
    let rightside = "";
    if (numstr.length/2 < 1 || numstr.length === 2) { 
      return "Balanced";
    }
    if (numstr.length % 2 === 0) {
      leftside = numstr.slice(0,numstr.length/2-1);
    } else {
      leftside = numstr.slice(0,numstr.length/2);
    }
    rightside = numstr.slice(numstr.length/2+1);
    
    let lefttotal = leftside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
    let righttotal = rightside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
    return (lefttotal === righttotal) ? "Balanced" : "Not Balanced";
  }