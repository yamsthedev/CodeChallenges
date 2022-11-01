// 6 Kyu Problem - October 31st 2022
// Highest Rank Number in an Array
// .reduce(), Objects, for in loop, Object.keys(obj), Number(), .sort(), .filter()

/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr){
  let obj = arr.reduce((acc,curr,i) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1
    return acc
  }, {})

  let keys = Object.keys(obj)
  let highest = 0, key
  
  for(let prop in obj){
    if(obj[prop] >= highest){
      highest = obj[prop]
      key = prop
    }
  }
  return Number(key)
}

function highestRank(arr){
  return arr.sort((a,b) => {
    return arr.filter(i => i === b).length - arr.filter(i => i === a).length
  })[0]
}