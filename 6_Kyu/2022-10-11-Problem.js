// 6 Kyu Problem - October 11th 2022
// Two Sum
// Nested For Loop, Map(), map.get(), map.set(key,value), map.has()

/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

// Nested For Loop
function twoSum(numbers, target) {
  for(let i = 0;i<numbers.length;i++){
    for(let j = 0;j<numbers.length;j++){
      if(j!==i){
        let sum = numbers[i]+numbers[j]
        if(sum===target)
          return [i, j]
      }
    }
  }
}

// Nested For Loop
function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length - 1; i++){
      for(let j = i+1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] == target){
          return [i,j]
        } 
      }
    }
  }

// using Map() and For Loop, map.set(key,value), map.get(key), map.has(key)
function twoSum(numbers, target) {
  let mappedPairs = new Map()
  for(let i = 0; i < numbers.length; i++){
    let x = numbers[i], y = target - x
    if(mappedPairs.has(y)) return [mappedPairs.get(y),i]
    mappedPairs.set(x,i)
  }
}