// 7 Kyu Problem - September 1st 2022
// Disarium Number
//.split(), .toString(), .reduce((acc,curr,currInd)=> ...,currVal), for loop, Math.pow()

/*
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/
// Using .split(), .toString(), .reduce((acc,curr,currInd)=> ...,currVal)
function disariumNumber(n){
    return n.toString().split("").reduce((acc,curr,i) => acc + curr**(i+1),0) === n ? `Disarium !!` : "Not !!"
}

// Using a for loop and Math.pow()
function disariumNumber(n){
  let nString = n.toString()
  let disariumNum = 0
  for(let i = 0; i < nString.length; i++){
    disariumNum += Math.pow(nString[i], i+1)
  }
  if(disariumNum === n){
    return "Disarium !!"
  }else{
    return "Not !!"
  }
}