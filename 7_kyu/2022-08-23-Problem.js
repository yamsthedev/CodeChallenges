// 7 Kyu Problem - August 23rd 2022
// Sum of Odd Cubed Numbers
// .reduce(), isNaN() function, Array.prototype.every()

/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
    let cubedArr = arr.map(e => e**3)
    let sumOfOddNums = 0
    
    for(let i = 0; i < cubedArr.length; i++){
      if(isNaN(cubedArr[i])){
       return undefined
      }else{
        if(cubedArr[i] % 2 !== 0){
          sumOfOddNums+=cubedArr[i]
        }
      }
    }  
    return sumOfOddNums
    }

// Alternative Solution using .every() method
function cubeOdd(arr) {
    return arr.every(e => !isNaN(e)) ? arr.map(e => e**3).filter(e => e % 2 !== 0).reduce((acc,curr) => acc + curr, 0) : undefined;
}

// Alternative Solution using more methods and making it a single line
function cubeOdd(arr) {
    return arr.map(e => e**3).reduce((acc,curr) => isNaN(curr) || isNaN(acc) == true ? undefined : curr % 2 == 0 ? acc : curr + acc, 0)
  }