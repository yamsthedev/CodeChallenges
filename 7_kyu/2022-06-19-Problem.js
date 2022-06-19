// 7 Kyu Problem - June 19th 2022
// Sorted? yes? no? how?

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array){ 
    return array.every((e,i,a) => i === 0 || e >= a[i-1]) ? "yes, ascending" : 
           array.every((e,i,a) => i === 0 || e <= a[i-1]) ? "yes, descending" : "no"
  }

// Alternative Solution
const isSortedAndHow = array => {
  
    let ascend = array.filter((e, i, a) => e > a[i+1]).length == 0
    let descend = array.filter((e, i, a) => e < a[i+1]).length == 0
    
    return ascend ? 'yes, ascending' : descend ? 'yes, descending' : 'no'
  }