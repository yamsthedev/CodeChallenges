// 7 Kyu Problem - May 29th 2022
// Small enough?

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
// smallEnough([66, 101], 200)

function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

// Alternative Solution
smallEnough = (a,l) => a.every(e => e <= l)

// Alternative Solution
function smallEnough(a, limit){
    return a.filter(val => val <= limit).length === a.length
  }