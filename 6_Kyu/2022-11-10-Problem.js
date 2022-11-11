// 6 Kyu Problem - November 10th 2022
// +1 Array
// .unshift(), typeof, break out of for loop

/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer
*/

function upArray(arr){

if((typeof arr === "undefined") || (arr === null) || (arr.length === 0)){
  return null;
}

for(let i = 0; i < arr.length; i++){
  if((arr[i] < 0) || (typeof arr[i] !== "number") || (arr[i] > 9)){
    return null;
  }
}
  
// checking if last digit is 9, if so, have to check all the rest of the previous digits to see if they are also 9

for(let j = arr.length - 1; j >= 0; j--){
  if(arr[j] !== 9){
    arr[j] += 1
    break;
  }else{
    arr[j] = 0
  }
  if(j === 0){
    arr.unshift(1)
  }
}

return arr
}